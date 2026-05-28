/**
 * APK Data Loader
 * Dynamically loads all APK version data from the apk-data directory
 *
 * To add a new version:
 * 1. Create a new JSON file in src/apk-data/ (e.g., v1.1.0.json)
 * 2. Follow the same structure as existing files
 * 3. The version will automatically appear on the Versions and Changelog pages
 */

// Import all JSON files from apk-data directory (Vite glob import)
const apkModules = import.meta.glob('../apk-data/*.json', { eager: true });
let cachedApkData = null;

const parseVersion = (versionString) => {
  const match = /^v?(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?$/.exec(versionString ?? '');

  if (!match) {
    return null;
  }

  const [, major, minor, patch, prerelease = ''] = match;

  return {
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch),
    prerelease,
  };
};

const comparePrerelease = (aPrerelease, bPrerelease) => {
  if (!aPrerelease && !bPrerelease) {
    return 0;
  }

  if (!aPrerelease) {
    return 1;
  }

  if (!bPrerelease) {
    return -1;
  }

  const aParts = aPrerelease.split('.');
  const bParts = bPrerelease.split('.');
  const maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    const aPart = aParts[i];
    const bPart = bParts[i];

    if (aPart === undefined) {
      return -1;
    }

    if (bPart === undefined) {
      return 1;
    }

    const aIsNumeric = /^\d+$/.test(aPart);
    const bIsNumeric = /^\d+$/.test(bPart);

    if (aIsNumeric && bIsNumeric) {
      const diff = Number(aPart) - Number(bPart);
      if (diff !== 0) {
        return diff;
      }
      continue;
    }

    if (aIsNumeric) {
      return -1;
    }

    if (bIsNumeric) {
      return 1;
    }

    const diff = aPart.localeCompare(bPart);
    if (diff !== 0) {
      return diff;
    }
  }

  return 0;
};

const compareVersions = (aVersion, bVersion) => {
  const a = parseVersion(aVersion);
  const b = parseVersion(bVersion);

  if (!a || !b) {
    return (aVersion ?? '').localeCompare(bVersion ?? '');
  }

  const majorDiff = a.major - b.major;
  if (majorDiff !== 0) {
    return majorDiff;
  }

  const minorDiff = a.minor - b.minor;
  if (minorDiff !== 0) {
    return minorDiff;
  }

  const patchDiff = a.patch - b.patch;
  if (patchDiff !== 0) {
    return patchDiff;
  }

  return comparePrerelease(a.prerelease, b.prerelease);
};

/**
 * Check if a version object is valid
 * @param {Object} version - Version object to validate
 * @returns {boolean} True if valid, false otherwise
 */
const isValidVersion = (version) => {
  if (!version || typeof version !== 'object') {
    return false;
  }

  // Check required fields exist and are not placeholder values
  const hasRequiredFields = 
    version.version && 
    version.publishDate && 
    version.fileSize &&
    version.apkPath &&
    version.sha256;

  if (!hasRequiredFields) {
    return false;
  }

  // Filter out template/placeholder values
  const isNotTemplate = 
    version.version !== 'v0.0.0' &&
    !version.version.includes('0.0.0') &&
    version.publishDate !== 'YYYY-MM-DD' &&
    version.fileSize !== '0.0 MB' &&
    !version.sha256.includes('your-sha256-checksum-here') &&
    !version.apkPath.includes('v0.0.0');

  // Validate date format
  const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(version.publishDate) && 
                      !isNaN(new Date(version.publishDate).getTime());

  return isNotTemplate && isValidDate;
};

/**
 * Load and parse all APK data files
 * @returns {Array} Sorted array of APK version data (newest first)
 */
export const loadApkData = () => {
  if (cachedApkData) {
    return cachedApkData;
  }

  try {
    const apkData = Object.entries(apkModules)
      .filter(([fileName]) => {
        const isTemplate = fileName.toLowerCase().includes('template');
        return !isTemplate;
      })
      .map(([fileName, module]) => {
        try {
          return module.default ?? module;
        } catch (error) {
          console.warn(`Failed to load ${fileName}:`, error);
          return null;
        }
      })
      .filter(data => data !== null && isValidVersion(data));

    // Sort by publish date first, then by semantic version when dates match.
    cachedApkData = apkData.sort((a, b) => {
      const dateA = new Date(a.publishDate);
      const dateB = new Date(b.publishDate);
      const dateDiff = dateB - dateA;

      if (dateDiff !== 0) {
        return dateDiff;
      }

      return compareVersions(b.version, a.version);
    });

    return cachedApkData;
  } catch (error) {
    console.error('Error loading APK data:', error);
    return [];
  }
};

/**
 * Get the latest version
 * @returns {Object|null} Latest version data or null
 */
export const getLatestVersion = () => {
  const versions = loadApkData();
  return versions.length > 0 ? versions[0] : null;
};

/**
 * Get a specific version by version string
 * @param {string} versionString - Version to find (e.g., "v1.0.0")
 * @returns {Object|null} Version data or null
 */
export const getVersionByString = (versionString) => {
  const versions = loadApkData();
  return versions.find(v => v.version === versionString) || null;
};

/**
 * Get all available versions
 * @returns {Array} Array of all version objects
 */
export const getAllVersions = () => {
  return loadApkData();
};
