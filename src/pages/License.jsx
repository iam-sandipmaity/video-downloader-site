import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ExternalLink } from 'lucide-react';

const MIT_TEXT = `MIT License

Copyright (c) 2026 Sandip Maity

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

const thirdParty = [
  { name: 'yt-dlp', license: 'Unlicense', url: 'https://github.com/yt-dlp/yt-dlp/blob/master/LICENSE' },
  { name: 'FFmpeg', license: 'LGPL v2.1+', url: 'https://ffmpeg.org/legal.html' },
  { name: 'React', license: 'MIT', url: 'https://github.com/facebook/react/blob/main/LICENSE' },
  { name: 'Tailwind CSS', license: 'MIT', url: 'https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE' },
  { name: 'Framer Motion', license: 'MIT', url: 'https://github.com/framer/motion/blob/main/LICENSE.md' },
  { name: 'Lucide', license: 'ISC', url: 'https://github.com/lucide-icons/lucide/blob/main/LICENSE' },
];

const License = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium mb-4">
          <Scale className="w-4 h-4" />
          <span>Open Source</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          License
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Video Downloader App is free and open-source software released under the MIT License.
        </p>
      </motion.div>

      {/* MIT License Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">MIT License</h2>
        <pre className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed font-mono overflow-x-auto">
          {MIT_TEXT}
        </pre>
        <div className="mt-4">
          <a
            href="https://github.com/iam-sandipmaity/video-downloader/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </motion.div>

      {/* Third-party licenses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Licenses</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          This project uses the following open-source libraries and tools:
        </p>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
          {thirdParty.map((dep) => (
            <div key={dep.name} className="flex items-center justify-between px-5 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <div>
                <span className="font-medium text-gray-900 dark:text-white">{dep.name}</span>
                <span className="ml-3 text-xs px-2 py-0.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">
                  {dep.license}
                </span>
              </div>
              <a
                href={dep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default License;
