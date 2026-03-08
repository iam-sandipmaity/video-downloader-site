import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Code, HelpCircle } from 'lucide-react';
import { docs } from '../mock/data';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(docs[0]);

  const docCategories = {
    'Getting Started': ['installation', 'usage'],
    'Reference': ['ytdlp', 'troubleshooting', 'faq'],
    'Development': ['build', 'contributing']
  };

  const categoryIcons = {
    'Getting Started': BookOpen,
    'Reference': HelpCircle,
    'Development': Code
  };

  const filteredDocs = docs.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Everything you need to know about using Video Downloader App
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 dark:text-white"
            />
          </div>
        </motion.div>

        {/* Documentation Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1"
          >
            <nav className="space-y-6 sticky top-24">
              {Object.entries(docCategories).map(([category, docIds]) => {
                const Icon = categoryIcons[category];
                return (
                  <div key={category}>
                    <h3 className="flex items-center space-x-2 text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      <Icon className="w-4 h-4" />
                      <span>{category}</span>
                    </h3>
                    <ul className="space-y-2">
                      {docIds.map(docId => {
                        const doc = docs.find(d => d.id === docId);
                        const isVisible = filteredDocs.some(d => d.id === docId);
                        if (!doc || !isVisible) return null;
                        
                        return (
                          <li key={doc.id}>
                            <button
                              onClick={() => setSelectedDoc(doc)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedDoc.id === doc.id
                                  ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                              }`}
                            >
                              {doc.title}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </nav>
          </motion.aside>

          {/* Content */}
          <motion.main
            key={selectedDoc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8">
              <article className="prose prose-gray dark:prose-invert max-w-none">
                {selectedDoc.content.split('\n').map((line, index) => {
                  // Headers
                  if (line.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        {line.substring(2)}
                      </h1>
                    );
                  }
                  if (line.startsWith('## ')) {
                    return (
                      <h2 key={index} id={`heading-${index}`} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white scroll-mt-24">
                        {line.substring(3)}
                      </h2>
                    );
                  }
                  
                  // Bold questions
                  if (line.startsWith('**Q:')) {
                    return (
                      <p key={index} className="font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (line.startsWith('**A:')) {
                    return (
                      <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  
                  // Code blocks
                  if (line.startsWith('```')) {
                    return null;
                  }
                  if (line.startsWith('git clone') || line.startsWith('cd ')) {
                    return (
                      <pre key={index} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg my-4 overflow-x-auto">
                        <code className="text-sm text-gray-800 dark:text-gray-200">{line}</code>
                      </pre>
                    );
                  }
                  
                  // Regular paragraphs
                  if (line.trim() && !line.startsWith('-') && !line.match(/^\d+\./)) {
                    // Check if line contains a link
                    const linkRegex = /(https?:\/\/[^\s]+)/g;
                    if (linkRegex.test(line)) {
                      const parts = line.split(linkRegex);
                      return (
                        <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                          {parts.map((part, i) => {
                            if (part.match(linkRegex)) {
                              return (
                                <a
                                  key={i}
                                  href={part}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
                                >
                                  {part}
                                </a>
                              );
                            }
                            return part;
                          })}
                        </p>
                      );
                    }
                    return (
                      <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {line}
                      </p>
                    );
                  }
                  
                  // Lists
                  if (line.startsWith('- ')) {
                    return (
                      <li key={index} className="text-gray-700 dark:text-gray-300 ml-6 mb-2">
                        {line.substring(2)}
                      </li>
                    );
                  }
                  if (line.match(/^\d+\./)) {
                    return (
                      <li key={index} className="text-gray-700 dark:text-gray-300 ml-6 mb-2">
                        {line.substring(line.indexOf('.') + 2)}
                      </li>
                    );
                  }
                  
                  return null;
                })}
              </article>
            </div>
          </motion.main>


        </div>
      </div>
    </div>
  );
};

export default Docs;
