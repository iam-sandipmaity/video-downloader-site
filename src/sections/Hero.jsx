import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Package, ArrowRight, Sparkles } from 'lucide-react';
import DottedPattern from '../components/DottedPattern';
import { getLatestVersion } from '../utils/apkDataLoader';

const Hero = () => {
  const latestVersion = getLatestVersion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const buttons = [
    {
      text: 'Download APK',
      icon: Download,
      href: '#download',
      primary: true
    },
    {
      text: 'View on GitHub',
      icon: Github,
      href: 'https://github.com/iam-sandipmaity/video-downloader',
      primary: false
    },
    {
      text: 'Get on F-Droid',
      icon: Package,
      href: 'https://f-droid.org/',
      primary: false
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/40 dark:from-gray-900 dark:via-teal-950/30 dark:to-emerald-950/20"></div>
      
      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/20 rounded-full blur-3xl"
      />

      {/* Dotted Background Pattern */}
      <DottedPattern opacity={0.1} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 mb-6">
              <div className="relative">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
              </div>
              <span className="px-4 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-teal-700 dark:text-teal-300 text-sm font-medium rounded-full border border-teal-200 dark:border-teal-800 shadow-sm">
                Open Source • Privacy Focused • Free Forever
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-gray-900 dark:text-white mb-2">
                Download Videos
              </span>
              <span className="block relative">
                <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 dark:from-teal-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  From Anywhere
                </span>
                <motion.div
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-12 -top-2"
                >
                  <Sparkles className="w-8 h-8 text-teal-500 dark:text-teal-400" />
                </motion.div>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium leading-relaxed"
            >
              Download videos from almost any supported platform — powered by yt-dlp.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              A powerful, open-source Android application that lets you download videos from thousands of websites. Fast, secure, and privacy-focused.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              {buttons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <motion.a
                    key={index}
                    href={button.href}
                    target={button.href.startsWith('http') ? '_blank' : undefined}
                    rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl ${
                      button.primary
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-teal-500/25'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500'
                    }`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{button.text}</span>
                    {button.primary && (
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm"
            >
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 border-2 border-white dark:border-gray-900"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white dark:border-gray-900"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white dark:border-gray-900"></div>
                </div>
                <span className="font-medium">1000+ Supported Sites</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400 font-medium">Active Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded text-orange-700 dark:text-orange-300 font-semibold text-xs">
                  {latestVersion?.version ?? 'v1.0.0'}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 blur-3xl rounded-full"
              />
              
              {/* Phone Mockup */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <div className="relative">
                  <img
                    src="/images/app-mockup.svg"
                    alt="Video Downloader App Mockup"
                    className="relative w-80 h-auto rounded-[3rem] shadow-2xl border-8 border-gray-900 dark:border-gray-700"
                  />
                  
                  {/* Floating Download Icon */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-500 to-emerald-500 p-5 rounded-2xl shadow-xl border-4 border-white dark:border-gray-900"
                  >
                    <Download className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900 dark:to-emerald-900 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">1K+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Downloads</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-white dark:fill-gray-900"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
