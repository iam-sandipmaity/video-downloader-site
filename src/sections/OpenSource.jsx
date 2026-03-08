import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, AlertCircle, ExternalLink } from 'lucide-react';
import { appInfo, githubStats } from '../mock/data';

const OpenSource = () => {
  const stats = [
    { icon: Star, label: 'Stars', value: githubStats.stars.toLocaleString() },
    { icon: GitFork, label: 'Forks', value: githubStats.forks },
    { icon: AlertCircle, label: 'Open Issues', value: githubStats.issues }
  ];

  const benefits = [
    {
      title: 'Fully Transparent',
      description: 'Every line of code is open for review. No hidden functionality.'
    },
    {
      title: 'Community Driven',
      description: 'Built by developers, for developers. Contributions welcome.'
    },
    {
      title: 'Privacy First',
      description: 'No tracking, no analytics, no data collection. Ever.'
    },
    {
      title: 'Free Forever',
      description: 'Licensed under MIT. Use, modify, and distribute freely.'
    }
  ];

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-800/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <img
          src="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
              <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">100% Open Source</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Built in the <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">Open</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Video Downloader App is fully open-source and transparent. Review the code, suggest improvements, or contribute features. Development happens in the open for everyone to see.
            </p>

            {/* GitHub Stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-teal-500 dark:hover:border-teal-500 transition-all"
                  >
                    <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <span className="font-bold text-xl text-gray-900 dark:text-white">{stat.value}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href={appInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right Content - Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 p-7 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 transition-all shadow-sm hover:shadow-xl relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-emerald-50/50 dark:from-teal-950/20 dark:to-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img
            src="https://images.unsplash.com/photo-1569017388730-020b5f80a004?w=1400&h=700&fit=crop"
            alt="Open Source"
            className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/95 via-emerald-600/95 to-teal-600/95 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Github className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-4xl md:text-5xl font-bold mb-4">Join the Community</h3>
                <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Contribute code, report issues, or just star the repo to show your support
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={appInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Star on GitHub
                  </a>
                  <a
                    href={`${appInfo.github}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
                  >
                    Report Issue
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
