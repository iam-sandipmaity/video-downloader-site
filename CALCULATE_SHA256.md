# How to Calculate SHA256 Checksum

This guide explains how to calculate the SHA256 checksum for your APK files. This checksum is required when adding a new version to the website.

## What is SHA256?

SHA256 is a cryptographic hash function that creates a unique "fingerprint" of your file. It's used to:
- ✅ Verify file integrity (ensure the file wasn't corrupted)
- ✅ Confirm file authenticity (prove it's the official version)
- ✅ Detect tampering (any modification changes the hash)

## Windows (PowerShell)

### Single File

```powershell
Get-FileHash -Algorithm SHA256 "F:\video-downloader-site\public\apks\videodownloader-1.0.0.apk"
```

### Get Only the Hash (Clean Output)

```powershell
Get-FileHash -Algorithm SHA256 "F:\video-downloader-site\public\apks\videodownloader-1.0.0.apk" | Select-Object -ExpandProperty Hash
```

**Example Output:**
```
5B01CD9828DC921B557AA5FE1707869EE8393E2A1C441FD9A0C13E716E174C55
```

### Calculate for All APKs in Directory

```powershell
Get-ChildItem "F:\video-downloader-site\public\apks\*.apk" | Get-FileHash -Algorithm SHA256 | Format-Table Name, Hash -AutoSize
```

## Linux / Mac

### Single File

```bash
sha256sum /path/to/your/videodownloader-1.0.0.apk
```

### Get Only the Hash

```bash
sha256sum /path/to/your/videodownloader-1.0.0.apk | awk '{print $1}'
```

### Calculate for All APKs in Directory

```bash
sha256sum /path/to/apks/*.apk
```

## Quick Steps for Adding a New Version

1. **Build and save your APK** to `public/apks/`

2. **Open PowerShell** in the project directory:
   ```powershell
   cd F:\video-downloader-site
   ```

3. **Calculate the checksum**:
   ```powershell
   Get-FileHash -Algorithm SHA256 "public\apks\videodownloader-1.1.0.apk" | Select-Object -ExpandProperty Hash
   ```

4. **Copy the hash** from the output

5. **Create version JSON file**:
   - Copy `src/apk-data/template.json` → `src/apk-data/v1.1.0.json`
   - Paste the hash into the `sha256` field

6. **Done!** The website will automatically update

## Important Notes

⚠️ **The checksum will change if:**
- You rebuild the APK (even with the same code)
- You modify the APK in any way
- Even a single byte difference creates a completely different hash

✅ **The checksum stays the same when:**
- You copy the file
- You rename the file
- You move the file to different locations

🔄 **For each new version:**
- You MUST calculate a new SHA256
- Each version has its own unique checksum
- Never reuse a checksum from a previous version

## Verification

Users can verify their downloaded APK matches your official release by:

**Windows:**
```powershell
Get-FileHash -Algorithm SHA256 "C:\Users\Username\Downloads\videodownloader-1.0.0.apk"
```

Then compare the output with the checksum shown on your website.

## Example Workflow

```powershell
# 1. Navigate to project
cd F:\video-downloader-site

# 2. Calculate checksum
$hash = Get-FileHash -Algorithm SHA256 "public\apks\videodownloader-1.1.0.apk" | Select-Object -ExpandProperty Hash

# 3. Display the hash
Write-Host "SHA256: $hash"

# 4. Copy to clipboard (Windows 10+)
$hash | Set-Clipboard
Write-Host "Checksum copied to clipboard!"
```

## Troubleshooting

### File Not Found Error
```
Get-FileHash : Cannot find path 'path\to\file.apk'
```
**Solution:** Check the file path is correct and the file exists

### Permission Denied
**Solution:** Run PowerShell as Administrator

### Hash Doesn't Match
If the calculated hash doesn't match what's expected:
- ❌ The file may be corrupted
- ❌ The file may have been modified
- ❌ You may have the wrong version

## Security Best Practices

1. **Always calculate the hash yourself** - Don't trust pre-calculated hashes from unknown sources
2. **Store hashes securely** - Keep a record of all version hashes
3. **Publish hashes publicly** - Let users verify their downloads
4. **Use HTTPS** - Always serve your website over HTTPS to prevent hash tampering

## Additional Resources

- [SHA-256 Wikipedia](https://en.wikipedia.org/wiki/SHA-2)
- [PowerShell Get-FileHash Documentation](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash)
- [Android App Signing Best Practices](https://developer.android.com/studio/publish/app-signing)

---

**Quick Reference:**
```powershell
# Calculate SHA256 for your APK
Get-FileHash -Algorithm SHA256 "public\apks\your-apk.apk" | Select-Object -ExpandProperty Hash
```
