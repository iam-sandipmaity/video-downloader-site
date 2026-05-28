import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, Code, HelpCircle, Link as LinkIcon } from 'lucide-react';
import { docs } from '../mock/data';

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getDocHeadings = (doc) =>
  doc.content
    .split('\n')
    .filter((line) => line.startsWith('## ') || line.startsWith('### ') || line.startsWith('#### '))
    .map((line) => line.replace(/^#+\s*/, ''));

const getDocAnchorIds = (doc) => [
  doc.id,
  slugify(doc.id),
  slugify(doc.title),
  ...getDocHeadings(doc).map(slugify),
];

const findDocByHash = (hash) => {
  const hashValue = decodeURIComponent(hash.replace(/^#/, ''));
  const normalizedHash = slugify(hashValue);

  if (!normalizedHash) {
    return null;
  }

  return docs.find((doc) => getDocAnchorIds(doc).includes(normalizedHash)) ?? null;
};

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(() => findDocByHash(window.location.hash) ?? docs[0]);

  useEffect(() => {
    const syncDocFromHash = () => {
      const doc = findDocByHash(window.location.hash);
      if (doc) {
        setSelectedDoc(doc);
      }
    };

    syncDocFromHash();
    window.addEventListener('hashchange', syncDocFromHash);

    return () => window.removeEventListener('hashchange', syncDocFromHash);
  }, []);

  useEffect(() => {
    const hashValue = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    const targetId = slugify(hashValue);

    if (!targetId) {
      return;
    }

    const scrollTimer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }, 80);

    return () => window.clearTimeout(scrollTimer);
  }, [selectedDoc.id]);

  const selectDoc = (doc) => {
    setSelectedDoc(doc);
    window.history.pushState(null, '', `#${slugify(doc.title)}`);
  };

  const docCategories = {
    'Getting Started': ['installation', 'usage', 'converter', 'compressor'],
    'YouTube & Auth': ['ytdlp', 'youtube-auth'],
    'Settings': ['settings', 'privacy'],
    'Reference': ['troubleshooting', 'faq', 'roadmap'],
    'Development': ['build', 'contributing']
  };

  const categoryIcons = {
    'Getting Started': BookOpen,
    'YouTube & Auth': HelpCircle,
    'Settings': HelpCircle,
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
                            <a
                              href={`#${slugify(doc.title)}`}
                              onClick={() => selectDoc(doc)}
                              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedDoc.id === doc.id
                                  ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-medium'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                              }`}
                            >
                              {doc.title}
                            </a>
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
                  // Headers - h1
                  if (line.startsWith('# ')) {
                    const title = line.substring(2);
                    const id = slugify(title);
                    return (
                      <h1 id={id} key={index} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 scroll-mt-24 group">
                        <a href={`#${id}`} className="inline-flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                          <span>{title}</span>
                          <LinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h1>
                    );
                  }
                  // Headers - h2
                  if (line.startsWith('## ')) {
                    const title = line.substring(3);
                    const id = slugify(title);
                    return (
                      <h2 key={index} id={id} className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white scroll-mt-24 flex items-center group">
                        <span className="w-1 h-8 bg-teal-500 rounded-full mr-3"></span>
                        <a href={`#${id}`} className="inline-flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                          <span>{title}</span>
                          <LinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h2>
                    );
                  }
                  // Headers - h3
                  if (line.startsWith('### ')) {
                    const title = line.substring(4);
                    const id = slugify(title);
                    return (
                      <h3 id={id} key={index} className="text-xl font-semibold mt-8 mb-3 text-gray-800 dark:text-gray-200 scroll-mt-24 group">
                        <a href={`#${id}`} className="inline-flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                          <span>{title}</span>
                          <LinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h3>
                    );
                  }
                  // Headers - h4
                  if (line.startsWith('#### ')) {
                    const title = line.substring(5);
                    const id = slugify(title);
                    return (
                      <h4 id={id} key={index} className="text-lg font-semibold mt-6 mb-2 text-gray-700 dark:text-gray-300 scroll-mt-24 group">
                        <a href={`#${id}`} className="inline-flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                          <span>{title}</span>
                          <LinkIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h4>
                    );
                  }
                  
                  // Bold questions
                  if (line.startsWith('**Q:')) {
                    return (
                      <div key={index} className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 px-4 py-3 rounded-r-lg my-4">
                        <p className="font-bold text-teal-800 dark:text-teal-200">
                          {line.replace(/\*\*/g, '')}
                        </p>
                      </div>
                    );
                  }
                  if (line.startsWith('**A:')) {
                    return (
                      <div key={index} className="bg-gray-50 dark:bg-gray-900/50 px-4 py-3 rounded-lg my-2 ml-4">
                        <p className="text-gray-700 dark:text-gray-300">
                          {line.replace(/\*\*/g, '')}
                        </p>
                      </div>
                    );
                  }
                  
                  // Code blocks
                  if (line.startsWith('```')) {
                    return null;
                  }
                  if (line.startsWith('git clone') || line.startsWith('cd ') || line.startsWith('./gradlew') || line.startsWith('gradlew')) {
                    return (
                      <pre key={index} className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg my-4 overflow-x-auto border border-gray-700">
                        <code className="text-sm text-green-400 font-mono">{line}</code>
                      </pre>
                    );
                  }
                  
                  // Bold inline text
                  if (line.includes('**') && !line.startsWith('**Q:') && !line.startsWith('**A:')) {
                    const parts = line.split(/(\*\*[^*]+\*\*)/g);
                    return (
                      <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {parts.map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="font-bold text-teal-600 dark:text-teal-400">{part.slice(2, -2)}</strong>;
                          }
                          // Check for links in this part
                          const linkRegex = /(https?:\/\/[^\s]+)/g;
                          if (linkRegex.test(part)) {
                            const linkParts = part.split(linkRegex);
                            return (
                              <span key={i}>
                                {linkParts.map((lp, j) => {
                                  if (lp.match(linkRegex)) {
                                    return (
                                      <a key={j} href={lp} target="_blank" rel="noopener noreferrer" className="text-teal-600 dark:text-teal-400 hover:underline">
                                        {lp}
                                      </a>
                                    );
                                  }
                                  return lp;
                                })}
                              </span>
                            );
                          }
                          return part;
                        })}
                      </p>
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
                      <li key={index} className="text-gray-700 dark:text-gray-300 ml-6 mb-2 flex items-start">
                        <span className="text-teal-500 mr-2 mt-1">•</span>
                        {line.substring(2)}
                      </li>
                    );
                  }
                  if (line.match(/^\d+\./)) {
                    return (
                      <li key={index} className="text-gray-700 dark:text-gray-300 ml-6 mb-2 flex items-start">
                        <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">{line.substring(0, line.indexOf('.'))}</span>
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
