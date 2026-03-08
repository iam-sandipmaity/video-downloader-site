# Setup Instructions

## 📱 Add Your App Mockup Image

1. **Save the first image** (dark app mockup with "Downloader" interface) as:
   - Path: `public/images/app-mockup.png`
   - This is the one showing the dark UI with URL input field

2. The image is already referenced in:
   - Hero section: `/images/app-mockup.png`
   - Size recommendation: 600x800px or original size

## 📦 Add Your APK File

1. **Place your APK file** in:
   - Path: `public/apks/video-downloader-v1.0.0.apk`
   
2. **Calculate SHA256 checksum:**
   ```powershell
   Get-FileHash -Algorithm SHA256 public/apks/video-downloader-v1.0.0.apk
   ```

3. **Update the version info** in `src/mock/data.js`:
   - Update `version` field
   - Update `sha256` field with the checksum
   - Update `releaseDate` and `fileSize`

## 🎨 Image Optimization (Optional)

For better performance, consider optimizing the image:
- Use WebP format for smaller file size
- Compress without losing quality
- Create multiple sizes for responsive design

## ✅ After Adding Files

1. Restart the development server:
   ```
   npm start
   ```

2. The Hero section will display your app mockup
3. Download button will serve your local APK file

## 📁 Folder Structure

```
public/
├── images/
│   ├── app-mockup.png          ← Add your first image here
│   └── README.md
├── apks/
│   ├── video-downloader-v1.0.0.apk ← Add your APK here
│   └── README.md
├── index.html
└── manifest.json
```
