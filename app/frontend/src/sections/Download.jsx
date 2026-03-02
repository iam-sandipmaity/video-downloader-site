import React from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Github, Package, Server, Copy, Check, ExternalLink, Info } from 'lucide-react';
import { getLatestVersion } from '../utils/apkDataLoader';
import { downloadOptions } from '../mock/data';

const Download = () => {
  const [copiedSHA, setCopiedSHA] = React.useState(false);
  const latestVersion = getLatestVersion();

  const handleCopySHA = () => {
    if (latestVersion && latestVersion.sha256) {
      navigator.clipboard.writeText(latestVersion.sha256);
      setCopiedSHA(true);
      setTimeout(() => setCopiedSHA(false), 2000);
    }
  };

  // If no version available, show a coming soon message
  if (!latestVersion) {
    return (
      <section id="download" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Download Coming Soon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The first release is being prepared. Check back soon!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="download" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Download Now
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get the latest version of Video Downloader App for Android
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Version Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                  Latest Version
                </div>
                <h3 className="text-3xl font-bold mb-2">{latestVersion.version}</h3>
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
                <span className="text-sm font-medium">SHA256 Checksum</span>
                <button
                  onClick={handleCopySHA}
                  className="p-1.5 hover:bg-white/20 rounded transition-colors"
                  title="Copy SHA256"
                >
                  {copiedSHA ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <code className="text-xs font-mono break-all text-white/90">
                {latestVersion.sha256}
              </code>
            </div>

            {/* Primary Download Button */}
            <motion.a
              href={latestVersion.apkPath}
              download={`VideoDownloader-${latestVersion.version}.apk`}
              className="flex items-center justify-center space-x-2 w-full bg-white text-teal-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <DownloadIcon className="w-5 h-5" />
              <span>Download APK</span>
            </motion.a>
          </motion.div>

          {/* Alternative Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Alternative Downloads
            </h4>
            {downloadOptions.slice(1).map((option) => {
              const iconMap = {
                'Github': Github,
                'Package': Package,
                'Server': Server
              };
              const IconComponent = iconMap[option.icon] || DownloadIcon;
              return (
                <motion.a
                  key={option.id}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-teal-500 dark:hover:border-teal-500 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <div className="mt-1">
                    <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                      {option.name}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {option.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Installation Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <div className="flex space-x-3">
              <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800 dark:text-amber-300">
                <p className="font-medium mb-1">Installation Instructions</p>
                <p>You'll need to enable "Install from Unknown Sources" in your Android settings to install APK files. Visit our <a href="/docs" className="underline hover:text-amber-900 dark:hover:text-amber-200">documentation</a> for detailed instructions.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
