// Mock data for Video Downloader App

export const appInfo = {
  name: "Video Downloader App",
  tagline: "Download videos from almost any supported platform — powered by yt-dlp.",
  description: "A powerful, open-source Android application built with Kivy that lets you download videos from YouTube, X, Facebook, Reddit, Instagram and more. Features a custom pure-Python muxer for seamless video+audio merging without native binaries.",
  github: "https://github.com/iam-sandipmaity/video-downloader-app",
  version: "v1.0.0",
  releaseDate: "2026-02-02",
  fileSize: "23.4 MB",
  sha256: "5B01CD9828DC921B557AA5FE1707869EE8393E2A1C441FD9A0C13E716E174C55"
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
    name: "Direct APK",
    description: "Download directly from our server",
    icon: "Download",
    link: "/app-latest.apk",
    primary: true
  },
  {
    id: 2,
    name: "GitHub Release",
    description: "Get it from GitHub releases",
    icon: "Github",
    link: "https://github.com/iam-sandipmaity/video-downloader-app/releases"
  },
  {
    id: 3,
    name: "F-Droid Official",
    description: "Install from F-Droid store",
    icon: "Package",
    link: "https://f-droid.org/"
  },
  {
    id: 4,
    name: "Custom F-Droid",
    description: "Add our F-Droid repository",
    icon: "Server",
    link: "#"
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

## Download the APK
1. Download the latest APK from our download section
2. Enable "Install from Unknown Sources" in your Android settings
3. Open the downloaded APK file
4. Follow the installation prompts

## Via F-Droid
1. Add our F-Droid repository or use the official F-Droid store
2. Search for "Video Downloader App"
3. Install directly from F-Droid
    `
  },
  {
    id: "usage",
    title: "Usage Guide",
    content: `
# Usage Guide

## Download a Video
1. Open the app
2. Paste the video URL
3. Select your preferred format
4. Tap Download
5. Video will be saved to your Downloads folder

## Manage Downloads
- View active downloads in the Downloads tab
- Pause/Resume downloads as needed
- Delete completed downloads
    `
  },
  {
    id: "ytdlp",
    title: "yt-dlp Support",
    content: `
# yt-dlp Support

This app is powered by yt-dlp, supporting thousands of websites including:
- YouTube
- Vimeo
- Dailymotion
- Twitter/X
- Facebook
- Instagram
- TikTok
- And 1000+ more

For a complete list, visit: https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md
    `
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    content: `
# Troubleshooting

## Download Fails
- Check your internet connection
- Verify the URL is correct
- Try a different format
- Update to the latest version

## App Crashes
- Clear app cache
- Reinstall the app
- Report the issue on GitHub
    `
  },
  {
    id: "faq",
    title: "FAQ",
    content: `
# Frequently Asked Questions

**Q: Is this app free?**
A: Yes, completely free and open-source.

**Q: Do you collect any data?**
A: No, we don't collect any user data.

**Q: Can I download from [website]?**
A: If yt-dlp supports it, yes!

**Q: How often is the app updated?**
A: We aim for monthly updates with bug fixes and improvements.
    `
  },
  {
    id: "build",
    title: "Build from Source",
    content: `
# Build from Source

## Prerequisites
- Android Studio
- JDK 11+
- Git

## Steps
1. Clone the repository
\`\`\`bash
git clone https://github.com/iam-sandipmaity/video-downloader-app.git
cd video-downloader-app
\`\`\`

2. Open in Android Studio
3. Sync Gradle
4. Build APK via Build > Build Bundle(s) / APK(s)
    `
  },
  {
    id: "contributing",
    title: "Contributing Guide",
    content: `
# Contributing Guide

We welcome contributions! Here's how you can help:

## Reporting Bugs
- Use GitHub Issues
- Provide detailed steps to reproduce
- Include Android version and app version

## Submitting Code
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## Code Style
- Follow Android best practices
- Write clean, documented code
- Test thoroughly before submitting
    `
  }
];

export const githubStats = {
  stars: 1234,
  forks: 89,
  issues: 12
};
