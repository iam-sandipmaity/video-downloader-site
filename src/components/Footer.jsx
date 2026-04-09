import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Heart, Download, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Download', path: '/#download' },
      { name: 'Versions', path: '/versions' },
      { name: 'Changelog', path: '/changelog' },
      { name: 'Documentation', path: '/docs' }
    ],
    Resources: [
      { name: 'GitHub', path: 'https://github.com/iam-sandipmaity/video-downloader', external: true },
      { name: 'F-Droid', path: 'https://f-droid.org/', external: true },
      { name: 'Report Bug', path: 'https://github.com/iam-sandipmaity/video-downloader/issues', external: true }
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'License', path: '/license' },
      { name: 'Contact', path: '/contact' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/iam-sandipmaity', color: 'hover:text-white' },
    { name: 'X (Twitter)', icon: Twitter, href: 'https://x.com/iam_sandipmaity', color: 'hover:text-black' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/iam-sandipmaity', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/iam_sandipmaity', color: 'hover:text-pink-500' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
                VideoDownloader
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-sm">
              Open-source Android video downloader powered by yt-dlp. Download videos from thousands of websites with ease.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">Follow the developer:</span>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all hover:scale-110`}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
            
            <a
              href="https://github.com/iam-sandipmaity/video-downloader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>Star on GitHub</span>
            </a>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-1">
              <span>© {currentYear} Video Downloader App.</span>
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <a href="https://linkedin.com/in/iam-sandipmaity" target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">Sandip Maity</a>
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <Link to="/license" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">MIT License</Link>
              <span>•</span>
              <span>Open Source</span>
              <span>•</span>
              <span>Privacy Focused</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
