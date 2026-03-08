# Video Downloader App - Frontend

Modern, responsive landing page for the Video Downloader App built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Fast performance
- 🔍 SEO optimized
- 📦 PWA ready

## Tech Stack

- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── ui/            # UI primitives (Accordion, etc.)
│   ├── Header.jsx     # Navigation header
│   ├── Footer.jsx     # Footer component
│   └── DottedPattern.jsx
├── context/           # React Context providers
│   └── ThemeContext.js
├── pages/             # Page components
│   ├── Home.jsx
│   ├── Versions.jsx
│   ├── Docs.jsx
│   └── Changelog.jsx
├── sections/          # Landing page sections
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── OpenSource.jsx
│   └── Download.jsx
├── apk-data/          # 🆕 Version management JSON files
│   ├── template.json  # Template for new versions
│   ├── v1.0.0.json    # Version data files
│   └── README.md
├── utils/             # Utility functions
│   └── apkDataLoader.js  # Auto-loads version data
├── mock/              # Mock data
│   └── data.js
├── App.js             # Main app component
├── index.js           # Entry point
└── index.css          # Global styles
```

## 🚀 Version Management System

This project uses a **JSON-based version management system** that automatically updates the website when you add new APK versions.

### Quick Start: Adding a New Version

1. **Upload APK**: Place your APK file in `public/apks/`
   ```
   public/apks/video-downloader-v1.1.0.apk
   ```

2. **Calculate SHA256**:
   ```powershell
   # Windows PowerShell
   Get-FileHash -Algorithm SHA256 "public\apks\video-downloader-v1.1.0.apk"
   ```   📖 **Full guide:** [CALCULATE_SHA256.md](../../CALCULATE_SHA256.md)
3. **Create JSON File**: Copy `src/apk-data/template.json` to `src/apk-data/v1.1.0.json`

4. **Fill Details**: Update the JSON with your version information

5. **Done!** The website automatically updates:
   - ✅ Versions page
   - ✅ Changelog page  
   - ✅ Download section

### Documentation

- 📖 **[VERSION_MANAGEMENT.md](../../VERSION_MANAGEMENT.md)** - Quick reference
- 📚 **[ADMIN_GUIDE.md](../../ADMIN_GUIDE.md)** - Complete guide with examples
- 📁 **[src/apk-data/README.md](src/apk-data/README.md)** - Directory-specific docs

### How It Works

The `apkDataLoader.js` utility automatically:
1. Loads all JSON files from `src/apk-data/`
2. Sorts versions by publish date (newest first)
3. Makes them available throughout the app
4. Updates all pages dynamically

No code changes needed - just add a JSON file!

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details
