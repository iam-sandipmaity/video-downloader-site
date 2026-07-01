import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const APK_DATA_DIR = path.join(ROOT_DIR, 'src', 'apk-data');

// GitHub Repo configuration
const OWNER = 'iam-sandipmaity';
const REPO = 'video-downloader';

// Helper to format bytes to MB
function formatBytes(bytes) {
  if (bytes === 0) return '0.0 MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

// Simple classifier to categorize changelog bullet points
function parseChangelog(body) {
  const changelog = {
    added: [],
    fixed: [],
    improved: [],
    removed: [],
    comingSoon: []
  };

  if (!body) return changelog;

  const lines = body.split(/\r?\n/);
  
  const added = new Set();
  const fixed = new Set();
  const improved = new Set();
  const removed = new Set();
  const comingSoon = new Set();

  for (let line of lines) {
    line = line.trim();
    
    // Check if it's a bullet point (starts with *, -, or +)
    if (line.startsWith('*') || line.startsWith('-') || line.startsWith('+')) {
      let content = line.substring(1).trim();
      
      // Clean up common GitHub trailing user and PR mentions
      // E.g., "by @username in https://github.com/.../pull/123"
      content = content.replace(/\s*by\s+@[\w\-\[\]]+(?:\s+in\s+https:\/\/github\.com\/[^\s]+)?$/i, '');
      
      if (!content || 
          content.toLowerCase().includes('full changelog') || 
          content.toLowerCase().includes('new contributors') ||
          content.toLowerCase().includes('made their first contribution') ||
          content.trim() === 'What\'s Changed') {
        continue;
      }
      
      const lower = content.toLowerCase();
      
      if (lower.includes('fix') || lower.includes('crash') || lower.includes('bug') || lower.includes('resolve') || lower.includes('error')) {
        fixed.add(content);
      } else if (lower.includes('add') || lower.includes('feat') || lower.includes('new') || lower.includes('introduce')) {
        added.add(content);
      } else if (lower.includes('remove') || lower.includes('delete') || lower.includes('deprecate')) {
        removed.add(content);
      } else if (lower.includes('soon') || lower.includes('coming')) {
        comingSoon.add(content);
      } else {
        improved.add(content);
      }
    }
  }

  changelog.added = Array.from(added);
  changelog.fixed = Array.from(fixed);
  changelog.improved = Array.from(improved);
  changelog.removed = Array.from(removed);
  changelog.comingSoon = Array.from(comingSoon);

  return changelog;
}

// Parse detailed changelog from raw CHANGELOG.md markdown content
function parseChangelogFromMarkdown(markdown, targetVersion) {
  const changelog = {
    added: [],
    fixed: [],
    improved: [],
    removed: [],
    comingSoon: []
  };

  // Clean version name (e.g., "v1.7.4" -> "1.7.4")
  const cleanVersion = targetVersion.replace(/^v/, '');
  const escapedVersion = cleanVersion.replace(/\./g, '\\.');
  
  // Matches a header like ## [1.7.4] or ## [v1.7.4] and captures until the next ## header
  const versionRegex = new RegExp(
    `##\\s+\\[v?${escapedVersion}\\][\\s\\S]*?(?=\\n##\\s+\\[|$)`,
    'i'
  );
  
  const match = markdown.match(versionRegex);
  if (!match) {
    return null;
  }
  
  const sectionContent = match[0];
  
  // Parse subsections (### Added, ### Changed, ### Fixed, ### Removed, etc.)
  const subsectionRegex = /###\s+(\w+)\r?\n([\s\S]*?)(?=\n###\s+\w+|\n##\s+\[|$)/gi;
  let subMatch;
  
  while ((subMatch = subsectionRegex.exec(sectionContent)) !== null) {
    const type = subMatch[1].toLowerCase();
    const content = subMatch[2];
    
    const lines = content.split(/\r?\n/);
    const bulletPoints = [];
    for (let line of lines) {
      line = line.trim();
      if (line.startsWith('*') || line.startsWith('-') || line.startsWith('+')) {
        let text = line.substring(1).trim();
        if (text) {
          bulletPoints.push(text);
        }
      }
    }
    
    if (bulletPoints.length > 0) {
      if (type === 'added') {
        changelog.added.push(...bulletPoints);
      } else if (type === 'fixed' || type === 'security') {
        changelog.fixed.push(...bulletPoints);
      } else if (type === 'changed' || type === 'improved') {
        changelog.improved.push(...bulletPoints);
      } else if (type === 'removed' || type === 'deprecated') {
        changelog.removed.push(...bulletPoints);
      } else {
        changelog.improved.push(...bulletPoints);
      }
    }
  }
  
  // Check if we actually parsed any content
  const hasContent = 
    changelog.added.length > 0 || 
    changelog.fixed.length > 0 || 
    changelog.improved.length > 0 || 
    changelog.removed.length > 0;
    
  return hasContent ? changelog : null;
}

// Download a file and calculate its SHA256 checksum
async function getSha256Checksum(url) {
  console.log(`Downloading APK to calculate checksum from: ${url}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download APK: ${response.statusText}`);
  }
  
  const buffer = await response.arrayBuffer();
  const hash = crypto.createHash('sha256');
  hash.update(Buffer.from(buffer));
  return hash.digest('hex');
}

async function run() {
  try {
    console.log(`Fetching latest releases for ${OWNER}/${REPO}...`);
    
    const headers = {
      'User-Agent': 'video-downloader-site-builder'
    };
    
    // Use GITHUB_TOKEN if available to avoid rate limiting
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }
    
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases`, { headers });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch releases from GitHub API: ${response.status} ${response.statusText}`);
    }
    
    const releases = await response.json();
    console.log(`Found ${releases.length} releases.`);

    // Fetch CHANGELOG.md from main branch of the app repo
    let changelogMarkdown = '';
    try {
      console.log(`Fetching CHANGELOG.md from ${OWNER}/${REPO}...`);
      const changelogRes = await fetch(`https://raw.githubusercontent.com/${OWNER}/${REPO}/main/CHANGELOG.md`);
      if (changelogRes.ok) {
        changelogMarkdown = await changelogRes.text();
        console.log('Successfully loaded CHANGELOG.md.');
      } else {
        console.warn(`Failed to fetch CHANGELOG.md: ${changelogRes.status} ${changelogRes.statusText}`);
      }
    } catch (e) {
      console.warn('Error fetching CHANGELOG.md:', e.message);
    }
    
    let updatedCount = 0;
    
    for (const release of releases) {
      // 1. Skip nightly builds/prereleases that contain "nightly"
      const isNightly = release.tag_name.toLowerCase().includes('nightly') || 
                        release.name.toLowerCase().includes('nightly');
      
      if (isNightly) {
        console.log(`Skipping nightly release: ${release.tag_name}`);
        continue;
      }
      
      // 2. Find the first APK asset
      const apkAsset = release.assets.find(asset => asset.name.endsWith('.apk') && !asset.name.toLowerCase().includes('nightly'));
      
      if (!apkAsset) {
        console.log(`No APK asset found for release ${release.tag_name}, skipping...`);
        continue;
      }
      
      // Determine file name (standardized as vX.Y.Z.json)
      const version = release.tag_name.startsWith('v') ? release.tag_name : `v${release.tag_name}`;
      const jsonFileName = `${version}.json`;
      const jsonFilePath = path.join(APK_DATA_DIR, jsonFileName);
      
      // 3. Skip if this release version JSON file already exists
      if (fs.existsSync(jsonFilePath)) {
        console.log(`Release JSON for ${version} already exists. Skipping.`);
        continue;
      }
      
      console.log(`Processing new release: ${version}...`);
      
      // 4. Determine SHA256 checksum
      let sha256 = '';
      if (apkAsset.digest && apkAsset.digest.startsWith('sha256:')) {
        sha256 = apkAsset.digest.replace('sha256:', '');
        console.log(`Found SHA256 digest in API response: ${sha256}`);
      } else {
        try {
          sha256 = await getSha256Checksum(apkAsset.browser_download_url);
          console.log(`Calculated SHA256 checksum: ${sha256}`);
        } catch (err) {
          console.error(`Error calculating checksum for ${version}:`, err.message);
          // Fallback to placeholder if download failed, so workflow doesn't break completely
          sha256 = 'placeholder-sha256-checksum';
        }
      }
      
      // 5. Construct the JSON data
      const publishDate = release.published_at.substring(0, 10); // YYYY-MM-DD
      const fileSize = formatBytes(apkAsset.size);
      
      let changelog = null;
      if (changelogMarkdown) {
        changelog = parseChangelogFromMarkdown(changelogMarkdown, version);
      }
      
      if (changelog) {
        console.log(`Successfully parsed detailed changelog from CHANGELOG.md for ${version}`);
      } else {
        console.log(`Falling back to parsing GitHub Release body for ${version}`);
        changelog = parseChangelog(release.body);
      }
      
      const releaseData = {
        version: version,
        publishDate: publishDate,
        fileSize: fileSize,
        apkPath: apkAsset.browser_download_url,
        sha256: sha256,
        links: {
          github: release.html_url,
          fdroid: 'https://f-droid.org/packages/com.videodl.app/',
          direct: apkAsset.browser_download_url
        },
        changelog: changelog
      };
      
      // Write JSON to src/apk-data/
      fs.writeFileSync(jsonFilePath, JSON.stringify(releaseData, null, 2), 'utf-8');
      console.log(`Saved new release data to ${jsonFilePath}`);
      updatedCount++;
    }
    
    console.log(`Completed. Generated ${updatedCount} new release files.`);
  } catch (error) {
    console.error('Error running update-releases script:', error);
    process.exit(1);
  }
}

run();
