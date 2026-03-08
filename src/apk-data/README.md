# APK Data Directory

This directory contains JSON files for each version of the Video Downloader App. Each file represents a release version and contains all the information needed for the Versions and Changelog pages.

## � Important Notes

- **`template.json`** is automatically excluded from loading - it's only a template for creating new versions
- Files with placeholder values (v0.0.0, YYYY-MM-DD, etc.) are automatically filtered out
- Only valid version files with complete data will appear on the website

## �🚀 Quick Start: Add a New Version

1. **Copy `template.json`** and rename it (e.g., `v1.1.0.json`)
2. **Upload your APK** to `/public/apks/`
3. **Calculate SHA256** checksum:
   ```powershell
   # Windows PowerShell
   Get-FileHash -Algorithm SHA256 "path\to\your.apk"
   
   # Linux/Mac
   sha256sum path/to/your.apk
   ```
   📖 **Detailed guide:** [CALCULATE_SHA256.md](../../../../CALCULATE_SHA256.md)
4. **Fill in the JSON** with your version details
5. **Save** - The website automatically updates!

## 📋 JSON File Structure

```json
{
  "version": "v1.1.0",
  "publishDate": "2024-12-20",
  "fileSize": "13.2 MB",
  "apkPath": "/apks/video-downloader-v1.1.0.apk",
  "sha256": "your-sha256-checksum-here",
  "links": {
    "github": "https://github.com/iam-sandipmaity/video-downloader/releases/tag/v1.1.0",
    "fdroid": "https://f-droid.org/packages/com.videodl.app/",
    "direct": "/apks/video-downloader-v1.1.0.apk"
  },
  "changelog": {
    "added": [
      "New feature 1",
      "New feature 2"
    ],
    "fixed": [
      "Bug fix 1"
    ],
    "improved": [
      "Improvement 1"
    ],
    "removed": [],
    "comingSoon": [
      "Planned feature for next release"
    ]
  }
}
```

## 📝 Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `version` | Version number | `"v1.1.0"` |
| `publishDate` | Date (YYYY-MM-DD) | `"2024-12-20"` |
| `fileSize` | APK size | `"13.2 MB"` |
| `apkPath` | Path in /public | `"/apks/app-v1.1.0.apk"` |
| `sha256` | Checksum | `"abc123..."` |
| `links.github` | GitHub release URL | Full URL |
| `links.fdroid` | F-Droid URL | Full URL |
| `links.direct` | Direct download path | Same as apkPath |
| `changelog.added` | New features | Array of strings |
| `changelog.fixed` | Bug fixes | Array of strings |
| `changelog.improved` | Improvements | Array of strings |
| `changelog.removed` | Removed features | Array of strings |
| `changelog.comingSoon` | Planned features | Array of strings (optional) |

## ✅ Best Practices

- **Naming**: Use semantic versioning (`v1.0.0`, `v1.1.0`, `v2.0.0`)
- **Date Format**: Always use `YYYY-MM-DD`
- **Changelog**: Be clear and specific
  - ✅ "Added Instagram Reels support"
  - ❌ "Made some changes"
- **Empty Arrays**: Use `[]` if no items in a category

## 🔄 How It Works

1. Files are loaded automatically from this directory
2. Sorted by `publishDate` (newest first)
3. Newest version marked as "Latest"
4. Displayed on:
   - `/versions` page (all versions)
   - `/changelog` page (timeline)
   - Home page Download section (latest only)

## 📚 Full Documentation

See [ADMIN_GUIDE.md](../../../../ADMIN_GUIDE.md) in the project root for complete documentation, examples, and troubleshooting.

---

**Files in this directory:**
- `template.json` - Copy this to create new versions
- `v1.0.0.json` - Example: Initial release
- `v0.9.0-beta.json` - Example: Beta release
- `README.md` - This file
