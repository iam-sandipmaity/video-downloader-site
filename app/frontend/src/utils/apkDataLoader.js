/**
 * APK Data Loader
 * Dynamically loads all APK version data from the apk-data directory
 * 
 * To add a new version:
 * 1. Create a new JSON file in src/apk-data/ (e.g., v1.1.0.json)
 * 2. Follow the same structure as existing files
 * 3. The version will automatically appear on the Versions and Changelog pages
 */

// Import all JSON files from apk-data directory
const apkDataContext = require.context('../apk-data', false, /\.json$/);

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
  try {
    const apkData = apkDataContext.keys()
      .filter(fileName => {
        // Exclude template files and any files with 'template' in the name
        const isTemplate = fileName.toLowerCase().includes('template');
        return !isTemplate;
      })
      .map(fileName => {
        try {
          const data = apkDataContext(fileName);
          return data;
        } catch (error) {
          console.warn(`Failed to load ${fileName}:`, error);
          return null;
        }
      })
      .filter(data => data !== null && isValidVersion(data)); // Filter out null and invalid versions

    // Sort by publish date (newest first)
    return apkData.sort((a, b) => {
      const dateA = new Date(a.publishDate);
      const dateB = new Date(b.publishDate);
      return dateB - dateA;
    });
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
