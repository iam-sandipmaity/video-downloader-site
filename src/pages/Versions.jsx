import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Package, ExternalLink, ChevronDown, Calendar, HardDrive, CheckCircle2, Wrench, Zap, XCircle, FileCheck, Clock } from 'lucide-react';
import { getAllVersions } from '../utils/apkDataLoader';

const Versions = () => {
  const [expandedVersion, setExpandedVersion] = useState(0);
  const versions = getAllVersions();

  const toggleVersion = (index) => {
    setExpandedVersion(expandedVersion === index ? null : index);
  };

  // Show message if no versions available
  if (!versions || versions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center px-4">
          <Package className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No Versions Available
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            No release versions have been added yet. Check back soon for updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-40 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-full mb-6"
          >
            <FileCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
              Version History
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            All Versions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Download any version of Video Downloader App. Each release includes detailed changelog, checksums, and multiple download options.
          </p>
        </motion.div>

        {/* Versions List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-2xl border-2 border-dashed border-amber-300 dark:border-amber-700 p-8"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-1">
                  New Versions Coming Soon
                </h3>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  Future releases will appear here with new features and improvements
                </p>
              </div>
            </div>
          </motion.div>

          {versions.map((version, index) => (
            <motion.div
              key={version.version}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300">
                {/* Version Header */}
                <button
                  onClick={() => toggleVersion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center space-x-6">
                    {/* Version Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Package className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Version Info */}
                    <div className="text-left">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {version.version}
                        </h3>
                        {index === 0 && (
                          <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-sm">
                            Latest
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center space-x-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{version.publishDate}</span>
                        </span>
                        <span className="flex items-center space-x-1.5">
                          <HardDrive className="w-4 h-4" />
                          <span>{version.fileSize}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <motion.div
                    animate={{ rotate: expandedVersion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedVersion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                        {/* Changelog */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                            What's New
                          </h4>
                          
                          <div className="grid gap-6 md:grid-cols-2">
                            {version.changelog.added.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-green-100 dark:border-green-900/30"
                              >
                                <div className="flex items-center space-x-2 mb-4">
                                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                                  </div>
                                  <h5 className="font-semibold text-green-700 dark:text-green-400">
                                    Added
                                  </h5>
                                </div>
                                <ul className="space-y-2.5">
                                  {version.changelog.added.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                                      <span className="text-green-500 mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                            
                            {version.changelog.fixed.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-blue-100 dark:border-blue-900/30"
                              >
                                <div className="flex items-center space-x-2 mb-4">
                                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <h5 className="font-semibold text-blue-700 dark:text-blue-400">
                                    Fixed
                                  </h5>
                                </div>
                                <ul className="space-y-2.5">
                                  {version.changelog.fixed.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                                      <span className="text-blue-500 mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                            
                            {version.changelog.improved.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-purple-100 dark:border-purple-900/30"
                              >
                                <div className="flex items-center space-x-2 mb-4">
                                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <h5 className="font-semibold text-purple-700 dark:text-purple-400">
                                    Improved
                                  </h5>
                                </div>
                                <ul className="space-y-2.5">
                                  {version.changelog.improved.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                                      <span className="text-purple-500 mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                            
                            {version.changelog.removed && version.changelog.removed.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-red-100 dark:border-red-900/30"
                              >
                                <div className="flex items-center space-x-2 mb-4">
                                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                                  </div>
                                  <h5 className="font-semibold text-red-700 dark:text-red-400">
                                    Removed
                                  </h5>
                                </div>
                                <ul className="space-y-2.5">
                                  {version.changelog.removed.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                                      <span className="text-red-500 mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                            
                            {version.changelog.comingSoon && version.changelog.comingSoon.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-amber-100 dark:border-amber-900/30"
                              >
                                <div className="flex items-center space-x-2 mb-4">
                                  <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                  </div>
                                  <h5 className="font-semibold text-amber-700 dark:text-amber-400">
                                    Coming Soon
                                  </h5>
                                </div>
                                <ul className="space-y-2.5">
                                  {version.changelog.comingSoon.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                                      <span className="text-amber-500 mt-0.5">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* SHA256 Checksum */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mb-6 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700"
                        >
                          <div className="flex items-center space-x-2 mb-3">
                            <FileCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                              SHA256 Checksum
                            </span>
                          </div>
                          <code className="text-xs md:text-sm font-mono text-gray-800 dark:text-gray-200 break-all block bg-white dark:bg-gray-950 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                            {version.sha256}
                          </code>
                        </motion.div>

                        {/* Download Options */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            Download Options
                          </h5>
                          <div className="flex flex-wrap gap-3">
                            <a
                              href={version.apkPath}
                              download={`VideoDownloader-${version.version}.apk`}
                              className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                            >
                              <Download className="w-5 h-5" />
                              <span>Direct APK</span>
                            </a>
                            <a
                              href={version.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-teal-500 dark:hover:border-teal-500 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold hover:scale-105 transition-all duration-200"
                            >
                              <Github className="w-5 h-5" />
                              <span>GitHub</span>
                              <ExternalLink className="w-4 h-4 opacity-60" />
                            </a>
                            <a
                              href={version.links.fdroid}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-teal-500 dark:hover:border-teal-500 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold hover:scale-105 transition-all duration-200"
                            >
                              <Package className="w-5 h-5" />
                              <span>F-Droid</span>
                              <ExternalLink className="w-4 h-4 opacity-60" />
                            </a>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Versions;
