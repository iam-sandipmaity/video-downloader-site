import React from 'react';
import { motion } from 'framer-motion';
import { getAllVersions } from '../utils/apkDataLoader';
import { FileText } from 'lucide-react';

const Changelog = () => {
  const versions = getAllVersions();
  
  const changeTypeStyles = {
    added: {
      emoji: '✓',
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20'
    },
    fixed: {
      emoji: '🔧',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    improved: {
      emoji: '⚡',
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20'
    },
    removed: {
      emoji: '✗',
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20'
    },
    comingSoon: {
      emoji: '🔮',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/20'
    }
  };

  // Show message if no versions available
  if (!versions || versions.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center px-4">
          <FileText className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No Changelog Available
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            No release versions have been added yet. Check back soon for updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Changelog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Track all changes, improvements, and fixes across all versions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-emerald-500 to-transparent"></div>

          {/* Version Entries */}
          <div className="space-y-12">
            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative pl-20"
            >
              <div className="absolute left-6 top-2 w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-xl border-2 border-dashed border-amber-300 dark:border-amber-700 p-6">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-2">
                  🔮 Future Releases
                </h3>
                <p className="text-amber-700 dark:text-amber-300">
                  New versions with exciting features and improvements will appear here
                </p>
              </div>
            </motion.div>

            {versions.map((version, versionIndex) => (
              <motion.div
                key={version.version}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: versionIndex * 0.15, duration: 0.6 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Version Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {version.version}
                    </h2>
                    {versionIndex === 0 && (
                      <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-medium rounded-full">
                        Latest
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Released on {version.publishDate}
                  </p>
                </div>

                {/* Changes */}
                <div className="space-y-4">
                  {Object.entries(version.changelog).map(([changeType, changes]) => {
                    if (changes.length === 0) return null;
                    
                    const style = changeTypeStyles[changeType];
                    
                    return (
                      <div key={changeType} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                        <h3 className={`font-semibold ${style.color} mb-3 flex items-center text-lg`}>
                          <span className="mr-2">{style.emoji}</span>
                          <span className="capitalize">{changeType}</span>
                        </h3>
                        <ul className="space-y-2">
                          {changes.map((change, changeIndex) => (
                            <motion.li
                              key={changeIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * changeIndex }}
                              className="flex items-start space-x-3"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full flex-shrink-0"></span>
                              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {change}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* End of Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: versions.length * 0.15 + 0.3 }}
            className="relative pl-20 mt-12"
          >
            <div className="absolute left-6 top-2 w-5 h-5 bg-gray-300 dark:bg-gray-700 rounded-full border-4 border-white dark:border-gray-900"></div>
            <p className="text-gray-500 dark:text-gray-400 italic">
              This is where it all began... 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
