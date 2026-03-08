import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, MessageSquare, Bug, Lightbulb, ExternalLink, Send } from 'lucide-react';

const channels = [
  {
    icon: Bug,
    title: 'Bug Reports',
    description: 'Found a bug? Open an issue on GitHub with steps to reproduce.',
    action: 'Open Issue',
    url: 'https://github.com/iam-sandipmaity/video-downloader/issues/new?template=bug_report.md',
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-100 dark:bg-red-900/30',
  },
  {
    icon: Lightbulb,
    title: 'Feature Requests',
    description: "Have an idea? We'd love to hear it — open a feature request.",
    action: 'Request Feature',
    url: 'https://github.com/iam-sandipmaity/video-downloader/issues/new?template=feature_request.md',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-100 dark:bg-amber-900/30',
  },
  {
    icon: MessageSquare,
    title: 'General Discussion',
    description: 'Questions, help, or just want to chat? Use GitHub Discussions.',
    action: 'Start Discussion',
    url: 'https://github.com/iam-sandipmaity/video-downloader/discussions',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: Github,
    title: 'Contribute',
    description: 'Want to contribute code? Check out the contributing guide and open a PR.',
    action: 'View Repository',
    url: 'https://github.com/iam-sandipmaity/video-downloader',
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-100 dark:bg-teal-900/30',
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'maitysandip@proton.me';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium mb-4">
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            The best way to reach us is through GitHub — it keeps everything transparent and lets the community help too.
          </p>
        </motion.div>

        {/* Contact channels */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <motion.a
                key={ch.title}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="group flex flex-col p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all hover:shadow-md"
              >
                <div className={`w-10 h-10 ${ch.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${ch.color}`} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{ch.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 mb-4">{ch.description}</p>
                <div className="flex items-center space-x-1 text-sm font-medium text-teal-600 dark:text-teal-400 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                  <span>{ch.action}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Email fallback */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
        >
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            For private or security-related matters, you can email directly:
          </p>
          <div className="flex items-center space-x-3">
            <code className="flex-1 px-4 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white font-mono">
              {email}
            </code>
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
