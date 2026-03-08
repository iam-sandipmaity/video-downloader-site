# APKs Folder

Place your Android APK files here for download.

## File Naming Convention:

### Current Version:
`video-downloader-v1.0.0.apk`

### Recommended Format:
`video-downloader-v{VERSION}.apk`

Examples:
- video-downloader-v1.0.0.apk
- video-downloader-v1.0.1.apk
- video-downloader-v1.1.0.apk
- video-downloader-v2.0.0.apk

## File References:

### Main Download:
- `/apks/video-downloader-v1.0.0.apk` - Current version (referenced in Download section)

### Version History:
Keep old versions for users who want to download previous releases:
- `/apks/video-downloader-v0.9.0.apk`
- `/apks/video-downloader-v0.8.0.apk`

## Notes:
- Update the version number in `src/mock/data.js` when adding new APK versions
- Calculate SHA256 checksum for each APK and update in data.js
- Maximum recommended file size: 50MB
- Test APK downloads after deployment

## Generate SHA256 Checksum:

**Windows PowerShell:**
```powershell
Get-FileHash -Algorithm SHA256 video-downloader-v1.0.0.apk | Select-Object Hash
```

**Linux/Mac:**
```bash
sha256sum video-downloader-v1.0.0.apk
```
