// Mock data for Video Downloader App

export const appInfo = {
  name: "Video Downloader App",
  tagline: "Download videos from almost any supported platform — powered by yt-dlp.",
  description: "A powerful, open-source Android application built with Kotlin that lets you download videos from YouTube, X, Facebook, Reddit, Instagram and more. Features FFmpeg for seamless video+audio merging, transcoding and post-processing.",
  github: "https://github.com/iam-sandipmaity/video-downloader",
  version: "v1.4.0",
  releaseDate: "2026-04-09",
  fileSize: "282 MB",
  sha256: "7b6a0e8521606d2c868d9c416c820fa8112c8b7b61e09072f701ba8eeeffff26"
};

export const features = [
  {
    id: 1,
    title: "Powered by yt-dlp",
    description: "Built on the most powerful video downloading engine available",
    icon: "Zap"
  },
  {
    id: 2,
    title: "Wide Platform Support",
    description: "Supports thousands of websites including YouTube, Vimeo, and more",
    icon: "Globe"
  },
  {
    id: 3,
    title: "Open Source",
    description: "Fully transparent codebase. Audit, contribute, and customize",
    icon: "Code"
  },
  {
    id: 4,
    title: "Privacy Focused",
    description: "No tracking, no analytics, no data collection",
    icon: "Shield"
  },
  {
    id: 5,
    title: "Fast Downloads",
    description: "Optimized downloading with resume capability",
    icon: "Download"
  },
  {
    id: 6,
    title: "Background Support",
    description: "Downloads continue even when app is in background",
    icon: "PlayCircle"
  },
  {
    id: 7,
    title: "Multiple Formats",
    description: "Choose from various video and audio formats",
    icon: "FileVideo"
  },
  {
    id: 8,
    title: "Video Converter",
    description: "Convert between formats with built-in FFmpeg",
    icon: "RefreshCw"
  }
];

export const downloadOptions = [
  {
    id: 1,
    name: "GitHub Release",
    description: "Download the latest APK from GitHub Releases",
    icon: "Github",
    link: "https://github.com/iam-sandipmaity/video-downloader/releases",
    primary: true
  },
  {
    id: 2,
    name: "F-Droid",
    description: "Coming soon — will be available on F-Droid",
    icon: "Package",
    link: "#",
    comingSoon: true
  }
];

export const versions = [
  {
    version: "v1.4.0",
    date: "2026-04-09",
    size: "282 MB",
    sha256: "7b6a0e8521606d2c868d9c416c820fa8112c8b7b61e09072f701ba8eeeffff26",
    changelog: {
      added: [
        "Download button state management with 6-second timeout",
        "Cache management in Settings with clear button",
        "Enhanced Help Screen with comprehensive documentation",
        "YouTube DASH video+audio download support",
        "Artifact cleanup GitHub Action"
      ],
      fixed: [
        "YouTube cookie authentication bug",
        "Converted/compressed files visibility in file managers"
      ],
      improved: [
        "Converter and compressor output to public Downloads folder",
        "Help page documentation"
      ],
      removed: []
    }
  }
];

export const githubStats = {
  stars: 1234,
  forks: 89,
  issues: 12
};

export const docs = [
  {
    id: "installation",
    title: "Installation Guide",
    content: `
# Installation Guide

Video Downloader App is distributed as an Android APK. Because it is not on the Google Play Store, you need to allow installation from unknown sources before installing.

## Step 1 — Download the APK

Visit the Download page and grab the latest APK. Always download from our official GitHub Releases page or directly from this site. After downloading, verify the SHA256 checksum shown on the download page matches the file on your device — this confirms the file has not been tampered with.

## Step 2 — Allow Unknown Sources

Android's default settings block installation of APKs from outside the Play Store. How you enable this depends on your Android version:

- Android 8.0 and above: Open Settings → Apps → Special App Access → Install Unknown Apps. Find your file manager or browser, then toggle "Allow from this source" on.
- Android 7 and below: Open Settings → Security → Unknown Sources and toggle it on. You can disable this again after installation.

## Step 3 — Install the APK

Open the downloaded APK file using your file manager. Tap Install when prompted. The system may show a warning about unknown sources — this is normal. Tap Install Anyway to proceed.

## Step 4 — Launch the App

Once installed, open Video Downloader from your app drawer. On first launch, the app will request storage permission — grant this so downloads can be saved to your device.

## Verifying the Checksum

To confirm your download is genuine, open a terminal and run:

- On Windows (PowerShell): Get-FileHash -Algorithm SHA256 "path\to\apk.apk"
- On Linux / Mac: sha256sum path/to/apk.apk

Compare the output with the SHA256 value shown on the download page. If they match, the file is authentic.

## Updating the App

When a new version is released, simply download the new APK and install it over the existing app. Your settings, download history, and preferences are preserved automatically.

## Supported Android Versions

- Minimum: Android 8.0 (API 26) — Oreo
- Recommended: Android 11+ (API 30) — for best compatibility with scoped storage
- Full support: Android 12, 13, 14, and 15
    `
  },
  {
    id: "usage",
    title: "Getting Started",
    content: `
# Getting Started

Welcome to Video Downloader App! This guide will help you understand the basics of using the app.

## App Layout

The app uses a 3-tab bottom navigation layout:

- **Browser Tab** — Main page for entering URLs and downloading videos
- **Progress Tab** — View active, queued, and completed downloads
- **Video Tab** — Your downloaded video library with thumbnails

## Quick Start Guide

### Step 1: Enter a URL

On the Browser tab, paste the URL of the video you want to download. You can use the paste button (clipboard icon) or type manually.

### Step 2: Analyze

Tap the Analyze button (search icon). The app will fetch all available formats and qualities from the source.

### Step 3: Select Format

Choose your preferred options:
- **Video+Audio** — Combined format, best quality
- **Video Only** — Video stream only
- **Audio Only** — Extract audio only

Select your desired quality (720p, 1080p, 4K, etc.) and format (MP4, MKV, WebM).

### Step 4: Download

Tap "Download" to start. You can also use "Quick download" for default settings.

## Quick Links

The Browser tab includes quick shortcut buttons for popular platforms:
- YouTube, Instagram, TikTok, X (Twitter), Facebook, Dailymotion, Pinterest, Twitch

Tap a shortcut to auto-fill the URL field with that platform's website.

## Understanding Download Button State

After you tap Download, the button temporarily disables to prevent duplicate downloads. It will:
- Show "Please wait..." with a faded appearance
- Automatically re-enable after 6 seconds, OR
- Re-enable immediately if you change any setting (format, quality, type, etc.)

This prevents accidental double-taps while ensuring you can adjust settings if needed.

## Background Downloads

Downloads continue even when you minimize the app or lock your screen. A persistent notification shows progress, speed, and ETA. Tap the notification to return to the app.

## Overflow Menu

Tap the 3-dot menu on the Browser tab to access:
- History — View all past downloads
- Compressor — Compress video files
- Converter — Convert between formats
- Settings — App configuration
- Help — Documentation
- Dark Mode — Toggle theme
    `
  },
  {
    id: "converter",
    title: "Video/Audio Converter",
    content: `
# Video/Audio Converter

The built-in converter lets you transform videos and audio files between different formats without re-downloading.

## How to Use Converter

1. Open the app and tap the 3-dot menu
2. Select "Converter" from the menu
3. Tap "Select media file from device"
4. Choose your input video or audio file
5. Select an output format preset:
   - **High quality video** — MP4, best quality
   - **Medium quality video** — MP4, balanced
   - **Small size video** — MP4, smaller file
   - **Audio only (MP3)** — Extract as MP3
   - **Audio only (M4A)** — Extract as M4A
   - **Audio only (AAC)** — Extract as AAC
6. Tap "Convert file"

## Supported Output Formats

### Video Formats
- **MP4** — Most compatible, works on all devices
- **MKV** — Good for high quality, flexible
- **AVI** — Legacy format
- **FLV** — Older Flash format
- **MOV** — QuickTime format
- **WebM** — Note: WebM output is limited as the bundled FFmpeg doesn't support VP8/VP9 encoders

### Audio Formats
- **MP3** — Universal compatibility
- **M4A** — AAC encoding, good quality
- **AAC** — Advanced Audio Coding
- **WAV** — Uncompressed, high quality
- **FLAC** — Lossless compression
- **OPUS** — Good quality, small size
- **OGG** — Open format

## Where Converted Files Are Saved

Converted files are automatically saved to your public Downloads/LocalDownloader folder. This ensures:
- Files are easily accessible in any file manager
- Files persist even if you uninstall the app
- You can find them directly in your Downloads folder

## Tips for Conversion

- Larger input files take longer to convert
- Lower bitrate settings result in smaller files but may reduce quality
- Audio extraction is faster than video conversion
- Ensure you have enough storage space before starting
    `
  },
  {
    id: "compressor",
    title: "Video Compressor",
    content: `
# Video Compressor

The built-in compressor lets you reduce the file size of videos while preserving as much quality as possible.

## How to Use Compressor

1. Open the app and tap the 3-dot menu
2. Select "Compressor" from the menu
3. Tap "Select media file from device"
4. Choose the video file you want to compress
5. Select resolution preset:
   - **1080p** — Original quality (if source supports)
   - **720p** — HD quality, good balance
   - **480p** — Standard quality, smaller size
   - **360p** — Low quality, smallest size
   - **Custom** — Set your own values
6. Select video bitrate preset:
   - **High** — Best quality, larger file
   - **Medium** — Balanced quality and size
   - **Small** — Lowest quality, smallest file
   - **Custom** — Set specific values
7. Adjust audio quality if needed (64-320 kbps)
8. Tap "Compress file"

## Compression Settings Explained

### Resolution
- Lower resolutions produce smaller files
- 360p-480p is ideal for saving storage
- 720p-1080p maintains good quality

### Video Bitrate
- **High (5000+ kbps)** — Best quality, larger files
- **Medium (2000-3000 kbps)** — Balanced
- **Small (500-1000 kbps)** — Aggressive compression

### Audio Bitrate
- **128 kbps** — Good for most cases
- **192 kbps** — Higher quality
- **320 kbps** — Best audio quality

## Where Compressed Files Are Saved

Compressed files are automatically saved to your public Downloads/LocalDownloader folder with "_compressed" appended to the filename. Example: "video_compressed.mp4"

## Tips for Compression

- The compressor keeps your original file untouched
- Compressing from 4K to 720p saves significant space
- Smaller resolutions result in much smaller files
- Test with Medium settings first, then adjust as needed
    `
  },
  {
    id: "youtube-auth",
    title: "YouTube Authentication",
    content: `
# YouTube Authentication

For age-restricted or location-gated YouTube videos, you may need to configure authentication.

## When Do You Need Authentication?

- Age-restricted videos
- Region-locked videos
- Premium-only content

## Setting Up YouTube Auth

1. Go to Settings (3-dot menu → Settings)
2. Scroll to "YouTube Authentication" section
3. Enable "YouTube Auth"

### Option 1: Import Cookies

- Tap "Import Cookies" to select a cookies file
- Use a cookies file in Netscape format (exported from browser)
- Cookies allow access to age-gated content

### Option 2: Add PO Token (Advanced)

- For YouTube's Proof of Origin tokens
- Requires both PO token and client hint
- Advanced users only

## Privacy Note

Your cookies and authentication data:
- Is stored locally on your device only
- Is never uploaded to any server
- Is used only for YouTube video access
- Can be cleared at any time from Settings

## Supported YouTube Clients

The app supports multiple YouTube player clients:
- Android (default)
- Web
- iOS
- TV

Select your preferred client in Settings for better compatibility.

## Limitations

- Authentication does not guarantee access to all content
- Some videos require a YouTube Premium subscription
- Tokens may expire and require renewal
- Private videos cannot be downloaded even with authentication
    `
  },
  {
    id: "settings",
    title: "Settings & Configuration",
    content: `
# Settings & Configuration

Customize the app to match your preferences.

## General Settings

### Theme
- **Light** — Bright white theme
- **Dark** — Dark theme for night use
- **System** — Follows your device settings

Toggle via the 3-dot menu on Browser tab, or in Settings.

### Download Directory
By default, files save to:
- Android 11+: /sdcard/Download/LocalDownloader/
- Android 10 and below: App-specific external storage

Files are automatically copied to the public Downloads folder for easy access.

## Download Settings

### Quality Preferences
- Default quality for YouTube (default: 360p)
- Container format preference
- Audio format preference

### Advanced Options
- **Subtitles** — Download available subtitles
- **Metadata** — Embed video metadata
- **Embed thumbnail** — Add thumbnail to file
- **Write thumbnail** — Save thumbnail as separate image
- **Playlist** — Enable playlist downloading

## Storage Settings

### Cache Management
The app stores temporary files in cache. To manage:

1. Go to Settings → Cache
2. View current cache size
3. Tap "Clear" to free up space

Cache is automatically cleared when needed, but you can manually clear it anytime.

## Output Template

Customize how files are named using yt-dlp template variables:
- **Default:** %(title)s [%(id)s].%(ext)s
- **Example:** "Funny Video [abc123].mp4"

Available variables:
- %(title)s — Video title
- %(id)s — Video ID
- %(ext)s — File extension
- %(uploader)s — Channel name
- %(upload_date)s — Upload date

## About Section

View app version, credits, and links:
- Powered by yt-dlp + FFmpeg
- Runs 100% on device
- Made by Sandip Maity
    `
  },
  {
    id: "ytdlp",
    title: "yt-dlp Support",
    content: `
# yt-dlp Support

Video Downloader App is powered by yt-dlp, one of the most comprehensive video downloading engines available. yt-dlp supports over 1,000 websites and is actively maintained with new sites added regularly.

## How It Works

When you paste a URL and tap Analyze, the app passes the URL to the embedded yt-dlp engine. yt-dlp analyses the page, authenticates with the source if necessary, and returns a list of all available streams. The app then presents these streams as selectable quality options.

## Supported Sites (Selection)

- **YouTube** — all public videos, shorts, playlists, and channels
- **Instagram** — posts, reels, and stories (public accounts)
- **Twitter / X** — videos and GIFs from tweets
- **Facebook** — public videos and reels
- **Reddit** — hosted videos and video links
- **TikTok** — public videos including high-quality originals
- **Vimeo** — all public videos
- **Dailymotion** — all public videos
- **Twitch** — VODs and clips
- **SoundCloud** — tracks and playlists (audio)
- **Bandcamp** — tracks and albums (audio)
- **Bilibili** — all public videos
- **NicoNico** — all public videos
- **Rumble** — all public videos
- **And 1000+ more**

For the complete and always-up-to-date list, visit: https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md

## Supported Output Formats

### Video
MP4, MKV, WebM, AVI, MOV

### Audio
MP3, AAC, OPUS, FLAC, WAV, M4A

## Quality Options

- **Video+Audio** — Combined format, best quality (bestvideo+bestaudio)
- **Video Only** — Extract video stream only
- **Audio Only** — Extract audio stream only

Available resolutions depend on the source video. Common options:
- 144p, 240p, 360p, 480p, 720p, 1080p, 1440p (2K), 2160p (4K)

## Limitations

- Private or members-only content cannot be downloaded without account cookies
- Live streams can be recorded but the file is only complete after the stream ends
- Some sites implement bot detection that may occasionally block downloads
- Age-restricted YouTube videos require authentication (see YouTube Authentication guide)

## yt-dlp Updates

yt-dlp is bundled with the app. When yt-dlp releases a fix for a broken site extractor, we ship an app update that includes the new version. Enable notifications so you are alerted when a new version is available.
    `
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    content: `
# Troubleshooting

## Download Fails Immediately

If a download fails as soon as you tap Download, check the following:

- **Internet connection** — ensure you have an active Wi-Fi or mobile data connection
- **URL validity** — make sure the URL points to a public video page, not a private or login-gated page
- **Supported site** — paste the URL into the Analyze field first. If yt-dlp cannot recognise the site, the format list will be empty
- **App version** — you may be running an outdated yt-dlp extractor. Update the app to the latest release

## Download Stalls or Freezes

If progress stops and does not resume after 60 seconds:

- Tap Pause then Resume to restart the connection
- Check whether your network connection dropped
- Some CDNs throttle repeated requests. Wait a few minutes and try again
- If the file is large and you are on mobile data, the network may have disconnected due to idle timeout. Switch to Wi-Fi if possible

## "Storage Permission Denied" Error

The app requires storage permission to save downloaded files. Go to Settings → Apps → Video Downloader → Permissions and enable Storage. On Android 13 and above, grant "Files and media" access.

## Cannot Find Output Files

All processed files are saved to Downloads/LocalDownloader folder. If you can't see them:

- Try refreshing your file manager
- Restart the app
- On Android 11+, you may need to grant file manager permission to see all files
- Check that the file was actually created (no errors in the result message)

## Conversion/Compression Failed

- Ensure the input file is not corrupted
- Check you have enough storage space
- Try a different output format
- Large files may take longer to process

## App Crashes on Launch

- Clear the app cache: Settings → Apps → Video Downloader → Storage → Clear Cache
- If the crash persists, clear app data (this resets all settings and history)
- Reinstall the app using the latest APK from the download page
- If the crash still occurs, open a GitHub Issue with your Android version and a description of what happened

## Video Has No Audio (or Audio Only)

This happens when you intentionally or accidentally select a video-only or audio-only stream. Go back and analyze the URL again, then select a combined (video+audio) format, or select separate video and audio streams — the app will merge them automatically using FFmpeg.

## YouTube Videos Not Loading

- The video might be private, age-restricted, or region-locked
- Try enabling YouTube authentication in Settings
- For age-restricted content, import cookies or add a PO token

## SHA256 Mismatch

If the checksum of your downloaded APK does not match what is shown on the download page:

- Delete the file and download again — the file may have been corrupted during transfer
- Try a different network or browser
- If the mismatch persists on a fresh download, do not install the file and open a GitHub Issue immediately

## Reporting a Bug

If none of the above resolves your issue, please open a GitHub Issue at https://github.com/iam-sandipmaity/video-downloader/issues and include:

- Your Android version and device model
- The app version (found in Settings → About)
- The URL you were trying to download (if applicable)
- A description of what happened and what you expected
    `
  },
  {
    id: "faq",
    title: "FAQ",
    content: `
# Frequently Asked Questions

## General Questions

**Q: Is this app free?**
A: Yes, completely free, with no ads, no in-app purchases, and no subscription. It will always be free.

**Q: Is it open source?**
A: Yes. The full source code is available on GitHub under the MIT License. You are free to audit it, fork it, and contribute.

**Q: Do you collect any data?**
A: No. The app does not contain any analytics, tracking, or advertising SDKs. No data about your usage, downloads, or device is ever transmitted to us or any third party. See the Privacy Policy for details.

**Q: Why is the APK so large?**
A: The app bundles yt-dlp (Python runtime) and FFmpeg so you get a fully self-contained tool that works without any additional installations. This is why the APK is larger than a typical Android app.

## Downloading

**Q: Can I download from YouTube?**
A: Yes. YouTube is fully supported. You can download videos, shorts, playlists, and channels in any available quality up to 4K.

**Q: Can I download playlists?**
A: Yes! Playlist support is now available. When analyzing a playlist URL, the app will queue all videos for sequential downloading.

**Q: Does it work with private videos?**
A: No. The app can only download publicly accessible content. Private, unlisted (in some cases), or login-gated content is not supported. YouTube authentication may help with some age-restricted content.

**Q: Where are downloaded files saved?**
A: Files are saved to the public Downloads/LocalDownloader folder. This makes them easily accessible in any file manager. You can change this in Settings if needed.

**Q: What about copyright?**
A: You are responsible for ensuring your use complies with the terms of service of the source website and applicable copyright law. This tool is intended for downloading content you have the right to download — such as your own uploads, Creative Commons licensed content, or content explicitly allowed for offline viewing.

## Features

**Q: Does the app support background downloads?**
A: Yes! Downloads continue even when you minimize the app or lock your screen. A persistent notification shows progress.

**Q: Can I convert videos to different formats?**
A: Yes. Use the Converter feature from the 3-dot menu. Supports MP4, MKV, AVI, FLV, MOV, MP3, AAC, WAV, FLAC, OPUS, and more.

**Q: Can I compress videos to save space?**
A: Yes. Use the Compressor feature from the 3-dot menu. Choose resolution and bitrate presets to reduce file size while maintaining quality.

**Q: Does the app have a dark mode?**
A: Yes! Toggle dark mode from the 3-dot menu on the Browser tab, or enable it in Settings.

## Technical

**Q: How do I update the app?**
A: Download the latest APK from the download page and install it over your existing installation. Your data and settings are preserved.

**Q: Will there be an iOS version?**
A: Not currently planned. The app is built natively for Android.

**Q: How often is the app updated?**
A: We aim to release updates whenever yt-dlp ships important extractor fixes or new features are ready. Major releases are announced on the GitHub repository.

**Q: What Android versions are supported?**
A: Minimum Android 8.0 (API 26), recommended Android 11+ (API 30) for best compatibility.

**Q: How do I report a bug or request a feature?**
A: Open a GitHub Issue at https://github.com/iam-sandipmaity/video-downloader/issues
    `
  },
  {
    id: "build",
    title: "Build from Source",
    content: `
# Build from Source

## Prerequisites

Before building, ensure you have the following installed:

- Android Studio (Hedgehog or newer recommended)
- JDK 17 or higher
- Android SDK with API level 26 (Android 8.0) or higher
- Git

## Clone the Repository

Open a terminal and run:

git clone https://github.com/iam-sandipmaity/video-downloader.git
cd video-downloader

## Open in Android Studio

- Launch Android Studio
- Select File → Open and navigate to the cloned directory
- Wait for Gradle to sync. This may take a few minutes on the first run as dependencies are downloaded

## Build a Debug APK

From the menu: Build → Build Bundle(s) / APK(s) → Build APK(s).

Alternatively, from the terminal inside the project directory:

- On Linux / Mac: ./gradlew assembleDebug
- On Windows: gradlew.bat assembleDebug

The output APK will be in app/build/outputs/apk/debug/app-debug.apk.

## Build a Release APK

For release builds you need a signing keystore. Create one in Android Studio via Build → Generate Signed Bundle / APK, or use the keytool command line utility. Configure your signing credentials in the app-level build.gradle, then run:

- On Linux / Mac: ./gradlew assembleRelease
- On Windows: gradlew.bat assembleRelease

## App Version

Before building, check and update the version in gradle.properties:

APP_VERSION_NAME=1.4.0

## Running Tests

To run unit and instrumentation tests:

- On Linux / Mac: ./gradlew test
- On Windows: gradlew.bat test

## Troubleshooting Build Issues

- If Gradle sync fails, check that your Android SDK path is set correctly in local.properties
- If you see a "license not accepted" error, run android-studio's SDK Manager and accept all pending licenses
- Ensure your JDK version matches the project's requirements (JDK 17+)
    `
  },
  {
    id: "contributing",
    title: "Contributing Guide",
    content: `
# Contributing Guide

We welcome contributions of all kinds — bug fixes, new features, documentation improvements, and translations. Here is how to get involved.

## Code of Conduct

All contributors are expected to be respectful and constructive. Harassment of any kind will not be tolerated.

## Reporting Bugs

Before opening a new issue, search existing issues to avoid duplicates. When opening a bug report, include:

- Your Android version and device model
- The app version (Settings → About)
- Clear steps to reproduce the problem
- What you expected to happen vs. what actually happened
- Logcat output if available (Android Studio → Logcat)

## Requesting Features

Open a GitHub Issue with the label "enhancement". Describe the feature, why it would be useful, and include mockups or examples if you have them. Features with clear use cases and community interest are prioritised.

## Submitting Code

- Fork the repository on GitHub
- Clone your fork locally
git clone https://github.com/YOUR_USERNAME/video-downloader.git
- Create a feature branch with a descriptive name
- Make your changes, keeping commits small and focused
- Write or update tests to cover your changes
- Ensure all existing tests pass before opening a PR
- Submit a pull request against the main branch with a clear description of what you changed and why

## Code Style

- Follow the official Kotlin coding conventions
- Use meaningful variable and function names
- Add comments only where the logic is non-obvious — the code should be self-documenting
- Keep functions short and focused on a single responsibility

## Documentation

Improvements to the documentation on this website are also very welcome. The docs content lives in src/mock/data.js in the website repository. Open a PR there for any corrections or additions.

## First-Time Contributors

Look for issues labelled "good first issue" — these are specifically chosen to be approachable for new contributors. Don't hesitate to ask questions in the issue thread before starting work.

## Key Areas for Contributions

- Bug fixes for the Android app
- New feature implementations
- UI/UX improvements
- Documentation improvements
- Translation support
- Performance optimizations
    `
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    content: `
# Privacy & Security

## Data Collection

Video Downloader App does NOT collect, store, or transmit any personal data:

- **No analytics** — No tracking SDKs or analytics services
- **No advertising** — Completely ad-free
- **No account required** — No login or registration
- **No cloud sync** — All data stays on your device

## Local Storage

All data is stored locally on your device:

- Download history
- App settings
- YouTube authentication (if configured)
- Cache files

## Permissions

The app requires the following permissions:

- **Storage** — To save downloaded files
- **Internet** — To download videos from websites
- **Notifications** — To show download progress

## Privacy by Design

- All downloads happen directly from source to your device
- No intermediary servers
- No logs of what you download
- No user identifiers

## Security Best Practices

1. **Verify downloads** — Always check SHA256 checksums
2. **Update regularly** — Keep the app updated for latest security fixes
3. **Clear cache** — Periodically clear cache from Settings
4. **Disable unknown sources** — After installing, disable "Install Unknown Apps"

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:

- Do NOT open a public GitHub issue
- Email the maintainer directly
- Allow time for a fix before disclosure
    `
  },
  {
    id: "roadmap",
    title: "Future Roadmap",
    content: `
# Future Roadmap

This document outlines the planned features and improvements for Video Downloader App. We are committed to making the app more powerful while staying simple to use.

---

## What's Coming Next

### Phase 1: YouTube Download Enhancement (In Progress)

**YouTube DASH Higher Resolution Downloads**
- Problem: Currently YouTube downloads without manual selection are capped at 360p
- Solution: Enable proper DASH format selection with resolution picker (360p, 480p, 720p, 1080p, 1440p, 4K)
- Use yt-dlp format selector: bestvideo[height<=X]+bestaudio/best[height<=X]

**Status:** 🔄 In Progress

---

### Phase 2: Embedded Terminal (Planned)

**What is it?**
- Add an embedded terminal in the app where users can run yt-dlp commands directly
- Pre-filled command templates for common operations
- Real-time output streaming
- Command history

**Terminal Commands Examples:**
- ytdlp <url> — Download with default options
- ytdlp <url> -f bestvideo[height<=1080]+bestaudio — Download 1080p
- ytdlp <url> --cookies-from-browser chrome — Use browser cookies
- ytdlp <url> -x --audio-format mp3 — Extract audio as MP3
- ytdlp -U — Update yt-dlp to latest

**Status:** 📋 Planned

---

### Phase 3: Compressor & Converter Improvements (Planned)

**Compressor Enhancements:**
- Add compression presets (Small, Medium, Large, Custom)
- Show estimated output size before compression
- Add more resolution options (144p, 240p, 360p, 480p, 720p, 1080p)
- Add audio quality options (64kbps, 128kbps, 192kbps, 320kbps)
- Show before/after file size comparison
- Add cancel button during compression

**Converter Enhancements:**
- Add format presets for common conversions
- Show estimated output size
- Support more output formats
- Batch conversion capability

**Status:** 📋 Planned

---

### Phase 4: App Size Optimization (Long-term)

**Current APK Size:** ~282 MB (includes yt-dlp, FFmpeg, Python runtime)

**Optimization Strategies:**

| Strategy | Potential Savings |
|---|---|
| Strip unused Python modules | 3-5 MB |
| Use yt-dlp minimal build | 5-8 MB |
| Compress FFmpeg binary | 2-3 MB |
| Remove unused ABIs (keep only arm64-v8a) | 10-15 MB |
| Enable R8 aggressive minification | 2-3 MB |
| Use App Bundle (split APKs) | User downloads less |

**Target:** Reduce from ~282 MB to ~200 MB APK

**Status:** 📋 Planned

---

### Phase 5: Auto-update yt-dlp

**What it does:**
- Check GitHub for latest yt-dlp on app start (periodically)
- Download + replace the yt-dlp binary in app data dir
- Keeps extraction working without APK updates

**Technical approach:**
- New YtDlpUpdater component
- GitHub API: fetches latest release, downloads updated Python binary

**Status:** 📋 Planned

---

### Phase 6: Enhanced YouTube Authentication

**Per-player-client PO Tokens:**
- Support for different PO tokens per client (android, web, ios, tv)
- Let user assign different tokens to different clients
- Better compatibility with YouTube's restrictions

**Cookie Management via WebView:**
- User logs into YouTube via a small embedded WebView (settings screen only)
- Cookies extracted and saved as Netscape format
- yt-dlp uses them for authenticated downloads

**Status:** 📋 Planned

---

## Completed Features (v1.4.0)

These features have been recently added:

- ✅ 3-tab bottom navigation (Browser, Progress, Video)
- ✅ Download button state management (6-second timeout)
- ✅ Cache management in Settings with clear button
- ✅ Enhanced Help Screen with comprehensive documentation
- ✅ YouTube cookie authentication fix
- ✅ Converter/Compressor output to public Downloads folder
- ✅ Playlist downloading support
- ✅ Dark/Light theme toggle
- ✅ YouTube DASH video+audio support
- ✅ Artifact cleanup GitHub Action

---

## How to Suggest New Features

1. **Open a GitHub Issue** — Use the "enhancement" label
2. **Describe the feature** — Explain what it is and why it would be useful
3. **Include examples** — Mockups or use cases help us understand
4. **Check for duplicates** — Search existing issues first

We prioritize features based on:
- User demand and community interest
- Technical feasibility
- Impact on app stability
- Alignment with our privacy-first approach

---

## Contributing to Future Development

Want to help build these features?

1. **Fork the repository**
2. **Check for "good first issue" labels**
3. **Submit pull requests**
4. **Help with documentation**

All contributors are welcome!

---

## Stay Updated

- Watch the GitHub repository for releases
- Check the changelog for new features
- Follow announcements on social media
    `
  }
];