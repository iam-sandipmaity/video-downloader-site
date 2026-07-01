# Admin Guide: Managing APK Versions

This guide explains how new versions are added to the Video Downloader App website using the automated version management system.

## Overview

The website automatically reads version information from JSON files in the `src/apk-data/` directory.

The process of creating these JSON files is **fully automated via GitHub Actions**. When you publish a release on the main `video-downloader` app repository, the Actions workflow fetches it, compiles the metadata, and commits a version JSON file to this repository. Vercel then automatically rebuilds and deploys the site.

---

## ⚡ Recommended: Automated Flow

The website will automatically check for and publish new stable releases.

1. **Publish a Release:** Publish a new stable release on your main repository (`iam-sandipmaity/video-downloader`).
2. **Auto-Sync:** The GitHub Actions workflow on the website repository will run automatically (every 6 hours or instantly if repository dispatch is configured).
3. **Automatic Deployment:** The workflow commits the new `v{version}.json` file to the repo, triggering Vercel to rebuild and publish the changes to `video.sandipmaity.me`.

---

## 🛠️ Fallback: Manual Addition Flow

If you ever need to manually add a release without waiting for the automation:

### Step 1: Upload the APK File (Optional)
If you want to host the APK directly in this repo instead of pointing to GitHub Releases:
1. Place your APK file in `public/apks/`
2. Use a clear naming format: `video-downloader-v1.1.0.apk`

### Step 2: Calculate SHA256 Checksum
Calculate the SHA256 hash of the APK file:
**Windows (PowerShell):**
```powershell
Get-FileHash -Algorithm SHA256 "public\apks\video-downloader-v1.1.0.apk"
```
**Linux/Mac:**
```bash
sha256sum public/apks/video-downloader-v1.1.0.apk
```

📖 **For detailed instructions and troubleshooting, see [CALCULATE_SHA256.md](./CALCULATE_SHA256.md)**

### Step 3: Create Version JSON File
1. Go to `src/apk-data/`
2. Copy `template.json` and rename it to your version (e.g., `v1.1.0.json`)
3. Fill in all the fields (see structure below)
4. Save the file

### Step 4: Commit and Push
Commit and push the new JSON file to this repository. Vercel will pick up the commit and deploy the updates instantly.

## JSON File Structure Explained

```json
{
  "version": "v1.1.0",              // Version number (must match filename)
  "publishDate": "2024-12-20",       // Release date (YYYY-MM-DD format)
  "fileSize": "13.2 MB",             // Size of the APK file
  "apkPath": "/apks/video-downloader-v1.1.0.apk",  // Path in public folder
  "sha256": "abc123...",             // SHA256 checksum for verification
  
  "links": {
    "github": "https://github.com/iam-sandipmaity/video-downloader/releases/tag/v1.1.0",
    "fdroid": "https://f-droid.org/packages/com.videodl.app/",
    "direct": "/apks/video-downloader-v1.1.0.apk"
  },
  
  "changelog": {
    "added": [
      "New feature description",
      "Another new feature"
    ],
    "fixed": [
      "Bug fix description",
      "Another bug fix"
    ],
    "improved": [
      "Performance improvement",
      "UI enhancement"
    ],
    "removed": [
      "Deprecated feature"
    ],
    "comingSoon": [
      "Planned feature for next release",
      "Future enhancement"
    ]
  }
}
```

## Field Descriptions

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `version` | string | Version identifier | `"v1.1.0"` |
| `publishDate` | string | Release date (YYYY-MM-DD) | `"2024-12-20"` |
| `fileSize` | string | Size of APK file | `"13.2 MB"` |
| `apkPath` | string | Path to APK in /public | `"/apks/app-v1.1.0.apk"` |
| `sha256` | string | SHA256 checksum | `"abc123..."` |
| `links` | object | Download links | See below |
| `changelog` | object | What's changed | See below |

### Links Object

```json
"links": {
  "github": "Full URL to GitHub release",
  "fdroid": "Full URL to F-Droid listing",
  "direct": "Path to APK file (same as apkPath)"
}
```

### Changelog Object

```json
"changelog": {
  "added": ["List of new features"],
  "fixed": ["List of bug fixes"],
  "improved": ["List of improvements"],
  "removed": ["List of removed features"],
  "comingSoon": ["List of planned features for future releases"]
}
```

**Note:** Empty arrays are fine. If a category has no items, just use `[]`.

**Changelog Categories:**
- **added**: New features or functionality added in this release
- **fixed**: Bug fixes and corrections
- **improved**: Enhancements to existing features
- **removed**: Deprecated or removed features
- **comingSoon**: Planned features for upcoming releases (useful for first releases)

## Best Practices

### Version Naming
- Use semantic versioning: `v{major}.{minor}.{patch}`
- Examples: `v1.0.0`, `v1.1.0`, `v2.0.0-beta`
- Be consistent with naming

### File Organization
```
public/
  apks/
    video-downloader-v1.0.0.apk
    video-downloader-v1.1.0.apk
    
src/
  apk-data/
    v1.0.0.json
    v1.1.0.json
    template.json  ← Copy this for new versions
```

### Changelog Writing
- **Added**: New features or functionality
- **Fixed**: Bug fixes and corrections
- **Improved**: Enhancements to existing features
- **Removed**: Deprecated or removed features

Be clear and concise:
✅ "Added support for Instagram Reels"
✅ "Fixed crash when downloading 4K videos"
✅ "Improved download speed by 40%"
❌ "Made some changes"
❌ "Various fixes"

### Date Format
Always use `YYYY-MM-DD` format:
- ✅ `"2024-12-20"`
- ❌ `"12/20/2024"`
- ❌ `"20 Dec 2024"`

## Examples

### Example 1: Major Release
```json
{
  "version": "v2.0.0",
  "publishDate": "2025-01-15",
  "fileSize": "15.3 MB",
  "apkPath": "/apks/video-downloader-v2.0.0.apk",
  "sha256": "d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a3b4c5",
  "links": {
    "github": "https://github.com/iam-sandipmaity/video-downloader/releases/tag/v2.0.0",
    "fdroid": "https://f-droid.org/packages/com.videodl.app/",
    "direct": "/apks/video-downloader-v2.0.0.apk"
  },
  "changelog": {
    "added": [
      "Complete UI redesign with Material You",
      "Playlist download support",
      "Built-in video player",
      "Download queue management"
    ],
    "fixed": [
      "Fixed memory leak on long downloads",
      "Resolved Android 15 compatibility issues"
    ],
    "improved": [
      "Download speed increased by 50%",
      "Reduced app size by 20%",
      "Better error messages"
    ],
    "removed": [
      "Legacy download engine"
    ]
  }
}
```

### Example 2: Patch Release
```json
{
  "version": "v1.0.1",
  "publishDate": "2024-12-18",
  "fileSize": "12.5 MB",
  "apkPath": "/apks/video-downloader-v1.0.1.apk",
  "sha256": "c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a3b4",
  "links": {
    "github": "https://github.com/iam-sandipmaity/video-downloader/releases/tag/v1.0.1",
    "fdroid": "https://f-droid.org/packages/com.videodl.app/",
    "direct": "/apks/video-downloader-v1.0.1.apk"
  },
  "changelog": {
    "added": [],
    "fixed": [
      "Fixed crash when downloading from TikTok",
      "Fixed notification not dismissing after download"
    ],
    "improved": [
      "Improved stability on Android 12"
    ],
    "removed": []
  }
}
```

## Troubleshooting

### Version Not Showing Up
1. Check JSON syntax is valid (use a JSON validator)
2. Ensure file is in `src/apk-data/` directory
3. Check filename matches version field
4. Rebuild the app: `npm start`

### Wrong Order
- Versions are sorted by `publishDate` (newest first)
- Use YYYY-MM-DD format for dates
- Check dates are correct

### Links Not Working
- Ensure URLs are complete (include `https://`)
- Check APK path matches actual file location
- Verify APK file exists in `/public/apks/`

## Common Mistakes to Avoid

❌ **Mismatched version and filename**
```
File: v1.1.0.json
Content: "version": "v1.0.0"  // Wrong!
```

❌ **Missing SHA256 checksum**
```json
"sha256": ""  // Don't leave empty
```

❌ **Invalid JSON syntax**
```json
{
  "version": "v1.1.0",  // Missing comma
  "publishDate": "2024-12-20"
  "fileSize": "13 MB"   // Missing comma above
}
```

❌ **Wrong date format**
```json
"publishDate": "December 20, 2024"  // Use YYYY-MM-DD
```

## Need Help?

If you encounter issues:
1. Validate your JSON: https://jsonlint.com/
2. Check the console for error messages
3. Compare with existing working files
4. Ensure all required fields are present

---

**Pro Tip:** Keep `template.json` unchanged as your master template. Always copy it when creating a new version file.
