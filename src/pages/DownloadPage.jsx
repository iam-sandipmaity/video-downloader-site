import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Package, Copy, Check, ExternalLink, Info, Clock, Download as DownloadIcon, Shield, Smartphone, ArrowRight } from 'lucide-react';
import { getLatestVersion, loadApkData } from '../utils/apkDataLoader';
import { downloadOptions } from '../mock/data';

const steps = [
  {
    step: '01',
    title: 'Download the APK',
    description: 'Tap "Direct Download" or grab it from the GitHub release page.',
  },
  {
    step: '02',
    title: 'Allow Unknown Sources',
    description: 'In Android Settings → Security, enable "Install from Unknown Sources" (or "Install Unknown Apps" on Android 8+).',
  },
  {
    step: '03',
    title: 'Install & Launch',
    description: 'Open the downloaded APK, tap Install, then open Video Downloader and start downloading.',
  },
];

const DownloadPage = () => {
  const [copiedSHA, setCopiedSHA] = React.useState(false);
  const latestVersion = getLatestVersion();
  const allVersions = loadApkData();

  const handleCopySHA = () => {
    if (latestVersion?.sha256) {
      navigator.clipboard.writeText(latestVersion.sha256);
      setCopiedSHA(true);
      setTimeout(() => setCopiedSHA(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Android APK</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Download</h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto">
              Free, open-source, and powered by yt-dlp. Download videos from 1000+ sites.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">

        {/* Latest version card */}
        {latestVersion ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Main card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    Latest Version
                  </div>
                  <h2 className="text-3xl font-bold mb-1">{latestVersion.version}</h2>
                  <p className="text-white/80">Released on {latestVersion.publishDate}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/80 mb-1">File Size</div>
                  <div className="text-2xl font-bold">{latestVersion.fileSize}</div>
                </div>
              </div>

              {/* SHA256 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium flex items-center space-x-1.5">
                    <Shield className="w-4 h-4" />
                    <span>SHA256 Checksum</span>
                  </span>
                  <button
                    onClick={handleCopySHA}
                    className="p-1.5 hover:bg-white/20 rounded transition-colors"
                    title="Copy SHA256"
                  >
                    {copiedSHA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <code className="text-xs font-mono break-all text-white/90">
                  {latestVersion.sha256}
                </code>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={latestVersion.links?.github || latestVersion.apkPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 flex-1 bg-white text-teal-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Release</span>
                </motion.a>
                <motion.a
                  href={latestVersion.apkPath}
                  download
                  className="flex items-center justify-center space-x-2 flex-1 bg-white/20 backdrop-blur-sm text-white border border-white/40 py-4 rounded-lg font-semibold hover:bg-white/30 transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DownloadIcon className="w-5 h-5" />
                  <span>Direct Download</span>
                </motion.a>
              </div>
            </div>

            {/* Download options sidebar */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Download Options</h3>
              {downloadOptions.map((option) => {
                const iconMap = { Github, Package };
                const IconComponent = iconMap[option.icon] || Github;
                const isComingSoon = option.comingSoon;
                return (
                  <motion.a
                    key={option.id}
                    href={isComingSoon ? undefined : option.link}
                    target={isComingSoon ? undefined : '_blank'}
                    rel={isComingSoon ? undefined : 'noopener noreferrer'}
                    onClick={isComingSoon ? (e) => e.preventDefault() : undefined}
                    className={`flex items-start space-x-3 p-4 rounded-lg border transition-all group ${
                      isComingSoon
                        ? 'bg-gray-50 dark:bg-gray-800/50 border-dashed border-gray-300 dark:border-gray-700 cursor-not-allowed opacity-60'
                        : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 cursor-pointer'
                    }`}
                    whileHover={isComingSoon ? {} : { x: 4 }}
                  >
                    <IconComponent className={`w-5 h-5 mt-0.5 transition-colors ${isComingSoon ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400'}`} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-0.5">
                        <h5 className="font-medium text-gray-900 dark:text-white text-sm">{option.name}</h5>
                        {isComingSoon && (
                          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-medium">
                            <Clock className="w-3 h-3" />
                            <span>Coming Soon</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{option.description}</p>
                    </div>
                    {!isComingSoon && <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">No release available yet. Check back soon!</div>
        )}

        {/* Installation steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">How to Install</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex md:flex-col gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
                  <span className="text-teal-600 dark:text-teal-400 font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{s.description}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-3 -right-3 w-5 h-5 text-gray-300 dark:text-gray-600" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Installation warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 mb-16"
        >
          <div className="flex space-x-3">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-300">
              <p className="font-semibold mb-1">Security Notice</p>
              <p>
                Always verify the SHA256 checksum after downloading to ensure the file wasn't tampered with.
                See our <Link to="/docs" className="underline hover:text-amber-900 dark:hover:text-amber-200">documentation</Link> for detailed installation steps and checksum verification.
              </p>
            </div>
          </div>
        </motion.div>

        {/* All versions */}
        {allVersions.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Versions</h2>
              <Link
                to="/versions"
                className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center space-x-1 transition-colors"
              >
                <span>View changelog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              {allVersions.map((v) => (
                <div key={v.version} className="flex items-center justify-between px-5 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold text-gray-900 dark:text-white">{v.version}</span>
                    {v.version === latestVersion?.version && (
                      <span className="px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full font-medium">Latest</span>
                    )}
                    <span className="text-sm text-gray-500 dark:text-gray-400">{v.publishDate}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{v.fileSize}</span>
                  </div>
                  <a
                    href={v.apkPath}
                    download
                    className="flex items-center space-x-1.5 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span>APK</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DownloadPage;
