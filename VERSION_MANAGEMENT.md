# Version Management System - Quick Reference

## System Overview

The Video Downloader App website uses a **JSON-based version management system** that automatically updates all pages when you add new version files.

### What Updates Automatically?
- ✅ Versions page (`/versions`)
- ✅ Changelog page (`/changelog`)
- ✅ Download section (home page - shows latest)

### Where Files Go
```
public/apks/          → Your APK files
src/apk-data/         → Your JSON version files
```

## Adding a New Version (Quick Steps)

### 1. Upload APK
Place your APK in: `public/apks/video-downloader-v1.1.0.apk`

### 2. Get SHA256
```powershell
# Windows
Get-FileHash -Algorithm SHA256 "public\apks\video-downloader-v1.1.0.apk"

# Linux/Mac  
sha256sum public/apks/video-downloader-v1.1.0.apk
```
📖 **Detailed guide:** [CALCULATE_SHA256.md](./CALCULATE_SHA256.md)
### 3. Create JSON File
1. Copy `src/apk-data/template.json`
2. Rename to `src/apk-data/v1.1.0.json`
3. Fill in the details:

```json
{
  "version": "v1.1.0",
  "publishDate": "2024-12-20",
  "fileSize": "13.2 MB",
  "apkPath": "/apks/video-downloader-v1.1.0.apk",
  "sha256": "paste-your-checksum-here",
  "links": {
    "github": "https://github.com/iam-sandipmaity/video-downloader/releases/tag/v1.1.0",
    "fdroid": "https://f-droid.org/packages/com.videodl.app/",
    "direct": "/apks/video-downloader-v1.1.0.apk"
  },
  "changelog": {
    "added": ["New feature"],
    "fixed": ["Bug fix"],
    "improved": ["Enhancement"],
    "removed": [],
    "comingSoon": ["Planned for next release"]
  }
}
```

### 4. Done!
The website automatically loads and displays your new version.

## How It Works

1. **Data Loader** (`src/utils/apkDataLoader.js`) reads all JSON files from `src/apk-data/`
2. **Auto-sorted** by publish date (newest first)
3. **Latest version** is automatically used on the download section
4. **All versions** appear on versions and changelog pages

## File Structure

```
video-downloader-site/
├── public/
│   └── apks/
│       ├── video-downloader-v1.0.0.apk
│       └── video-downloader-v1.1.0.apk
│
├── src/
│   ├── apk-data/
│   │   ├── template.json          ← Copy this
│   │   ├── v1.0.0.json           ← Example
│   │   ├── v1.1.0.json           ← Your new version
│   │   └── README.md
│   │
│   └── utils/
│       └── apkDataLoader.js      ← Auto-loader
│
└── ADMIN_GUIDE.md                 ← Full documentation
```

## Common Tasks

### Get File Size
```powershell
# Windows
(Get-Item "public\apks\your-file.apk").Length / 1MB

# Linux/Mac
ls -lh public/apks/your-file.apk
```

### Validate JSON
- Use: https://jsonlint.com/
- Or VS Code built-in JSON validation

### Check Current Versions
All `.json` files in `src/apk-data/` (except `template.json`)

## Quick Checklist

Before deploying a new version:
- [ ] APK uploaded to `/public/apks/`
- [ ] SHA256 checksum calculated
- [ ] JSON file created in `/src/apk-data/`
- [ ] All required fields filled
- [ ] Date in YYYY-MM-DD format
- [ ] Links are correct
- [ ] Changelog is clear and specific
- [ ] JSON is valid (no syntax errors)

## Need More Help?

📖 Full guide: [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)
📁 Examples: See existing files in `src/apk-data/`
🔧 Template: `src/apk-data/template.json`

---

**Remember:** Just add a JSON file to `src/apk-data/` and everything updates automatically!
