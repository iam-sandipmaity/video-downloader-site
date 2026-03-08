// Mock data for Video Downloader App

export const appInfo = {
  name: "Video Downloader App",
  tagline: "Download videos from almost any supported platform — powered by yt-dlp.",
  description: "A powerful, open-source Android application built with Kivy that lets you download videos from YouTube, X, Facebook, Reddit, Instagram and more. Features a custom pure-Python muxer for seamless video+audio merging without native binaries.",
  github: "https://github.com/iam-sandipmaity/video-downloader",
  version: "v1.1.0",
  releaseDate: "2026-03-08",
  fileSize: "272 MB",
  sha256: "4acba02fd242f6bde77268a992dc0ca4e9174249a67d301cae29bac2066a77e8"
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
    title: "Regular Updates",
    description: "Continuous improvements and new features",
    icon: "RefreshCw"
  }
];

export const downloadOptions = [
  {
    id: 1,
    name: "GitHub Release",
    description: "Download the latest APK from GitHub Releases",
    icon: "Github",
    link: "https://github.com/iam-sandipmaity/video-downloader/releases/tag/nightly-1",
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
    version: "v1.0.0",
    date: "2024-12-15",
    size: "12.5 MB",
    sha256: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2",
    changelog: {
      added: [
        "Initial release with core downloading functionality",
        "Support for 1000+ websites via yt-dlp",
        "Background download support",
        "Multiple format selection"
      ],
      fixed: [],
      improved: [],
      removed: []
    }
  },
  {
    version: "v0.9.0-beta",
    date: "2024-12-01",
    size: "11.8 MB",
    sha256: "b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2a3",
    changelog: {
      added: [
        "Beta release for testing",
        "Core download engine integration"
      ],
      fixed: [
        "Fixed crash on Android 14",
        "Resolved storage permission issues"
      ],
      improved: [
        "Improved download speed by 30%"
      ],
      removed: []
    }
  }
];

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
    `
  },
  {
    id: "usage",
    title: "Usage Guide",
    content: `
# Usage Guide

## Downloading a Video

Downloading a video is a three-step process:

- Copy the URL of the video you want to download from your browser or share sheet.
- Open Video Downloader and paste the URL into the input field at the top.
- Tap the Fetch button. The app will contact the source and retrieve all available formats and qualities.

Once the formats are loaded, choose your preferred resolution and output type (video+audio, video only, or audio only), then tap Download. The file will be saved to your configured download folder — by default this is the Downloads directory on your internal storage.

## Selecting Quality and Format

After fetching a URL, you will see a list of all available streams provided by the source. Each entry shows the resolution, codec, bitrate, and file size estimate. Higher resolutions produce larger files. If you select video-only or audio-only, the app uses its built-in FFmpeg engine to extract or merge streams without quality loss.

## Download Queue

You can queue multiple downloads simultaneously. Open the Queue tab to see all active, pending, and completed downloads. From the queue you can:

- Pause and resume individual downloads
- Reorder pending downloads by long-pressing and dragging
- Cancel a download and remove it from the list
- Tap a completed item to open the file directly

## Background Downloads

Downloads continue running when you minimise the app or lock your screen. A persistent notification shows live progress, speed, and estimated time remaining. Tapping the notification takes you back to the queue.

## Download History

The History tab keeps a full record of every download you have made. Each entry stores the title, source URL, file path, download date, format, and file size. You can re-download any item from history with a single tap, or clear individual entries and the full history from the options menu.

## Video Compressor

The built-in compressor lets you reduce the file size of any video on your device. Select a video, choose a target quality preset (High, Medium, Low) or set a custom bitrate, and tap Compress. The original file is kept untouched and a new compressed copy is created.

## Audio and Video Converter

Use the Converter tab to convert between formats without re-downloading. Supported output formats include MP4, MKV, WebM, MP3, AAC, and OPUS. Select your input file, pick an output format, and tap Convert.

## Settings

Open Settings (gear icon, top-right) to configure:

- Download directory — change where files are saved
- Maximum concurrent downloads — default is 2, maximum is 5
- Preferred quality — set a default resolution so you are not prompted every time
- Notifications — enable or disable download progress and completion alerts
- Theme — Light, Dark, or follow system
    `
  },
  {
    id: "ytdlp",
    title: "yt-dlp Support",
    content: `
# yt-dlp Support

Video Downloader App is powered by yt-dlp, one of the most comprehensive video downloading engines available. yt-dlp supports over 1,000 websites and is actively maintained with new sites added regularly.

## How It Works

When you paste a URL and tap Fetch, the app passes the URL to the embedded yt-dlp engine. yt-dlp analyses the page, authenticates with the source if necessary, and returns a list of all available streams. The app then presents these streams as selectable quality options.

## Supported Sites (Selection)

- YouTube — all public videos, shorts, playlists, and channels
- Instagram — posts, reels, and stories (public accounts)
- Twitter / X — videos and GIFs from tweets
- Facebook — public videos and reels
- Reddit — hosted videos and video links
- TikTok — public videos including high-quality originals
- Vimeo — all public videos
- Dailymotion — all public videos
- Twitch — VODs and clips
- SoundCloud — tracks and playlists (audio)
- Bandcamp — tracks and albums (audio)
- Bilibili — all public videos
- NicoNico — all public videos
- Rumble — all public videos
- And 1000+ more

For the complete and always-up-to-date list, visit: https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md

## Supported Output Formats

Video: MP4, MKV, WebM, AVI, MOV
Audio: MP3, AAC, OPUS, FLAC, WAV, M4A

## Limitations

- Private or members-only content cannot be downloaded without account cookies, which this app does not support.
- Live streams can be recorded but the file is only complete after the stream ends.
- Some sites implement bot detection that may occasionally block downloads. Updating the app to the latest version usually resolves this.

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

- Internet connection — ensure you have an active Wi-Fi or mobile data connection.
- URL validity — make sure the URL points to a public video page, not a private or login-gated page.
- Supported site — paste the URL into the Fetch field first. If yt-dlp cannot recognise the site, the format list will be empty.
- App version — you may be running an outdated yt-dlp extractor. Update the app to the latest release.

## Download Stalls or Freezes

If progress stops and does not resume after 60 seconds:

- Tap Pause then Resume to restart the connection.
- Check whether your network connection dropped.
- Some CDNs throttle repeated requests. Wait a few minutes and try again.
- If the file is large and you are on mobile data, the network may have disconnected due to idle timeout. Switch to Wi-Fi if possible.

## "Storage Permission Denied" Error

The app requires storage permission to save downloaded files. Go to Settings → Apps → Video Downloader → Permissions and enable Storage. On Android 13 and above, grant "Files and media" access.

## App Crashes on Launch

- Clear the app cache: Settings → Apps → Video Downloader → Storage → Clear Cache.
- If the crash persists, clear app data (this resets all settings and history).
- Reinstall the app using the latest APK from the download page.
- If the crash still occurs, open a GitHub Issue with your Android version and a description of what happened.

## Video Has No Audio (or Audio Only)

This happens when you intentionally or accidentally select a video-only or audio-only stream. Go back and fetch the URL again, then select a combined (video+audio) format, or select separate video and audio streams — the app will merge them automatically using FFmpeg.

## SHA256 Mismatch

If the checksum of your downloaded APK does not match what is shown on the download page:

- Delete the file and download again — the file may have been corrupted during transfer.
- Try a different network or browser.
- If the mismatch persists on a fresh download, do not install the file and open a GitHub Issue immediately.

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

**Q: Is this app free?**
A: Yes, completely free, with no ads, no in-app purchases, and no subscription. It will always be free.

**Q: Is it open source?**
A: Yes. The full source code is available on GitHub under the MIT License. You are free to audit it, fork it, and contribute.

**Q: Do you collect any data?**
A: No. The app does not contain any analytics, tracking, or advertising SDKs. No data about your usage, downloads, or device is ever transmitted to us or any third party. See the Privacy Policy for details.

**Q: Why is the APK so large?**
A: The app bundles yt-dlp (Python runtime) and FFmpeg so you get a fully self-contained tool that works without any additional installations. This is why the APK is larger than a typical Android app.

**Q: Is it safe to install APKs from outside the Play Store?**
A: As long as you download from our official GitHub Releases page and verify the SHA256 checksum, the file is safe. We recommend disabling "Install Unknown Apps" again after installation.

**Q: Can I download from YouTube?**
A: Yes. YouTube is fully supported. You can download videos, shorts, playlists, and channels in any available quality up to 4K.

**Q: Can I download playlists?**
A: Playlist support is on the roadmap and will be available in an upcoming release. Currently only individual video URLs are supported.

**Q: Does it work with private videos?**
A: No. The app can only download publicly accessible content. Private, unlisted (in some cases), or login-gated content is not supported.

**Q: Where are downloaded files saved?**
A: By default, files are saved to the Downloads folder on your internal storage. You can change this in Settings → Download Directory.

**Q: Can I use this app to download copyrighted content?**
A: You are responsible for ensuring your use complies with the terms of service of the source website and applicable copyright law. This tool is intended for downloading content you have the right to download — such as your own uploads, Creative Commons licensed content, or content explicitly allowed for offline viewing.

**Q: How do I update the app?**
A: Download the latest APK from the download page and install it over your existing installation. Your data and settings are preserved.

**Q: Will there be an iOS version?**
A: Not currently planned. The app is built natively for Android.

**Q: How often is the app updated?**
A: We aim to release updates whenever yt-dlp ships important extractor fixes or new features are ready. Major releases are announced on the GitHub repository.
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

- Launch Android Studio.
- Select File → Open and navigate to the cloned directory.
- Wait for Gradle to sync. This may take a few minutes on the first run as dependencies are downloaded.

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

## Running Tests

To run unit and instrumentation tests:

- On Linux / Mac: ./gradlew test
- On Windows: gradlew.bat test

## Troubleshooting Build Issues

- If Gradle sync fails, check that your Android SDK path is set correctly in local.properties.
- If you see a "license not accepted" error, run android-studio's SDK Manager and accept all pending licenses.
- Ensure your JDK version matches the project's requirements (JDK 17+).
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

- Fork the repository on GitHub.
- Clone your fork locally.
git clone https://github.com/YOUR_USERNAME/video-downloader.git
- Create a feature branch with a descriptive name.
- Make your changes, keeping commits small and focused.
- Write or update tests to cover your changes.
- Ensure all existing tests pass before opening a PR.
- Submit a pull request against the main branch with a clear description of what you changed and why.

## Code Style

- Follow the official Kotlin coding conventions.
- Use meaningful variable and function names.
- Add comments only where the logic is non-obvious — the code should be self-documenting.
- Keep functions short and focused on a single responsibility.
- Run ktlint before submitting: ./gradlew ktlintCheck

## Documentation

Improvements to the documentation on this website are also very welcome. The docs content lives in src/mock/data.js in the website repository. Open a PR there for any corrections or additions.

## First-Time Contributors

Look for issues labelled "good first issue" — these are specifically chosen to be approachable for new contributors. Don't hesitate to ask questions in the issue thread before starting work.
    `
  }
];


export const githubStats = {
  stars: 1234,
  forks: 89,
  issues: 12
};
