# 🎯 Version Management System - Visual Guide

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     YOU ADD A NEW VERSION                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 1: Upload APK                                         │
│  ───────────────────                                        │
│  public/apks/video-downloader-v1.1.0.apk                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 2: Create JSON File                                   │
│  ───────────────────────                                    │
│  src/apk-data/v1.1.0.json                                  │
│                                                              │
│  {                                                           │
│    "version": "v1.1.0",                                     │
│    "publishDate": "2024-12-20",                             │
│    "fileSize": "13.2 MB",                                   │
│    "apkPath": "/apks/video-downloader-v1.1.0.apk",        │
│    "sha256": "abc123...",                                   │
│    "links": { ... },                                        │
│    "changelog": { ... }                                     │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Magic Happens! 🪄                                          │
│  ─────────────                                              │
│  apkDataLoader.js automatically:                            │
│  • Finds all JSON files in src/apk-data/                   │
│  • Loads and parses them                                    │
│  • Sorts by publishDate (newest first)                      │
│  • Makes data available to all components                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Website Updates Automatically! ✨                          │
│  ────────────────────────────                               │
│                                                              │
│  📄 /versions page                                          │
│     → Shows all versions with full changelog                │
│     → Latest version gets "Latest" badge                    │
│     → Download buttons use correct links                    │
│                                                              │
│  📜 /changelog page                                         │
│     → Timeline view of all changes                          │
│     → Sorted newest to oldest                               │
│     → Color-coded change categories                         │
│                                                              │
│  🏠 Home page (Download section)                            │
│     → Shows latest version info                             │
│     → Correct APK download link                             │
│     → Current SHA256 checksum                               │
└─────────────────────────────────────────────────────────────┘
```

## File Structure

```
vid-download/
│
├── public/apks/                    ← 📦 Your APK files go here
│   ├── video-downloader-v1.0.0.apk
│   └── video-downloader-v1.1.0.apk
│
└── app/frontend/src/
    │
    ├── apk-data/                   ← 📝 Your JSON files go here
    │   ├── template.json           ← Copy this for new versions
    │   ├── v1.0.0.json            ← Version data
    │   ├── v1.1.0.json            ← Version data
    │   └── README.md
    │
    ├── utils/
    │   └── apkDataLoader.js        ← 🔄 Auto-loader (don't edit)
    │
    ├── pages/
    │   ├── Versions.jsx            ← Uses getAllVersions()
    │   └── Changelog.jsx           ← Uses getAllVersions()
    │
    └── sections/
        └── Download.jsx            ← Uses getLatestVersion()
```

## What You Need to Do vs What Happens Automatically

### 👤 You Do (Manual Steps)

1. ✅ Build and upload APK to `/public/apks/`
2. ✅ Calculate SHA256 checksum
3. ✅ Create JSON file with version details
4. ✅ Save the file

### 🤖 System Does (Automatic)

1. ✅ Loads all version JSON files
2. ✅ Sorts by date
3. ✅ Updates Versions page
4. ✅ Updates Changelog page
5. ✅ Updates Download section
6. ✅ Shows latest version badge
7. ✅ Links everything correctly

## Real Example

### You Create This File:
**File:** `src/apk-data/v1.1.0.json`
```json
{
  "version": "v1.1.0",
  "publishDate": "2024-12-20",
  "fileSize": "13.2 MB",
  "apkPath": "/apks/video-downloader-v1.1.0.apk",
  "sha256": "d4e5f6g7h8...",
  "links": {
    "github": "https://github.com/.../releases/tag/v1.1.0",
    "fdroid": "https://f-droid.org/packages/com.videodl.app/",
    "direct": "/apks/video-downloader-v1.1.0.apk"
  },
  "changelog": {
    "added": [
      "Instagram Reels support",
      "TikTok download improvements"
    ],
    "fixed": [
      "Fixed crash on Android 14"
    ],
    "improved": [
      "40% faster downloads"
    ],
    "removed": []
  }
}
```

### Website Shows This:

**Versions Page:**
```
┌──────────────────────────────────────────┐
│  v1.1.0                    [Latest]      │
│  Released 2024-12-20 • 13.2 MB          │
│  ────────────────────────────────────    │
│  ✓ Added                                 │
│    • Instagram Reels support             │
│    • TikTok download improvements        │
│                                           │
│  🔧 Fixed                                │
│    • Fixed crash on Android 14           │
│                                           │
│  ⚡ Improved                             │
│    • 40% faster downloads                │
│                                           │
│  SHA256: d4e5f6g7h8...                   │
│                                           │
│  [Download APK] [GitHub] [F-Droid]       │
└──────────────────────────────────────────┘
```

**Download Section (Home Page):**
```
┌──────────────────────────────────────────┐
│  Latest Version                          │
│  v1.1.0                                  │
│  Released on 2024-12-20                  │
│                                           │
│  File Size: 13.2 MB                      │
│  SHA256: d4e5f6g7h8...        [Copy]     │
│                                           │
│  [Download APK]                          │
└──────────────────────────────────────────┘
```

## Data Flow Diagram

```
JSON Files in src/apk-data/
         │
         │ loaded by
         ▼
    apkDataLoader.js
         │
         ├─────────────────────┬──────────────────┐
         │                     │                  │
         ▼                     ▼                  ▼
   getAllVersions()    getLatestVersion()  getVersionByString()
         │                     │                  │
         │                     │                  │
         ▼                     ▼                  │
    Versions.jsx         Download.jsx            │
    Changelog.jsx                                 │
                                                  ▼
                                        (for future features)
```

## Key Functions in apkDataLoader.js

```javascript
// Get all versions (sorted by date, newest first)
getAllVersions()
// Returns: Array of all version objects

// Get the latest version only
getLatestVersion()
// Returns: Single latest version object

// Get a specific version
getVersionByString("v1.1.0")
// Returns: Specific version object or null
```

## Common Questions

**Q: Do I need to update any code when adding a version?**
A: No! Just create the JSON file.

**Q: How does it know which is the latest version?**
A: Sorted by `publishDate` field. Newest date = latest.

**Q: Can I have multiple versions on the same date?**
A: Yes, but they'll sort by time added. Use different dates for clarity.

**Q: What if I make a typo in the JSON?**
A: Check browser console for errors. Use https://jsonlint.com/ to validate.

**Q: Can I edit old versions?**
A: Yes! Just edit the JSON file and reload the page.

**Q: Where do I put beta versions?**
A: Same place! Use version like "v1.1.0-beta" in both filename and version field.

## Checklist for Adding a Version

- [ ] APK file uploaded to `public/apks/`
- [ ] SHA256 checksum calculated
- [ ] Copied `template.json` to new version filename
- [ ] Updated all fields in JSON file
- [ ] Date is in YYYY-MM-DD format
- [ ] Links are complete URLs (with https://)
- [ ] Changelog is clear and specific
- [ ] JSON is valid (no syntax errors)
- [ ] Saved file in `src/apk-data/`
- [ ] Tested in browser

## Quick Commands

```powershell
# Calculate SHA256
Get-FileHash -Algorithm SHA256 "public\apks\your-file.apk"

# Get file size
(Get-Item "public\apks\your-file.apk").Length / 1MB

# Validate JSON (online)
# Visit: https://jsonlint.com/

# Start dev server
npm start
```

---

**That's it!** Just add a JSON file and watch your website update automatically! 🎉

For more details, see:
- [VERSION_MANAGEMENT.md](VERSION_MANAGEMENT.md) - Quick reference
- [ADMIN_GUIDE.md](ADMIN_GUIDE.md) - Complete guide with examples
