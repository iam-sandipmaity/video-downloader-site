import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Copy,
  Cpu,
  Download as DownloadIcon,
  ExternalLink,
  FileVideo,
  Github,
  Globe,
  HardDrive,
  Headphones,
  Info,
  Package,
  Shield,
  Smartphone,
} from 'lucide-react';
import { getLatestVersion, loadApkData } from '../utils/apkDataLoader';
import { formatDownloadCount, getReleaseDownloadCount } from '../utils/githubStats';

const steps = [
  {
    step: '01',
    title: 'Download the APK',
    description: 'Tap "Direct Download" or grab it from the GitHub release page.',
  },
  {
    step: '02',
    title: 'Allow Unknown Sources',
    description: 'In Android Settings, allow APK installs for your browser or file manager.',
  },
  {
    step: '03',
    title: 'Install and Launch',
    description: 'Open the downloaded APK, tap Install, then launch Video Downloader.',
  },
];

const systemRequirements = [
  { icon: Smartphone, label: 'Android 8.0+', desc: 'API 26 through latest' },
  { icon: HardDrive, label: '4GB+ Storage', desc: 'For app and downloads' },
  { icon: Globe, label: 'Internet Required', desc: 'For downloads' },
  { icon: Cpu, label: '64-bit CPU', desc: 'ARM64 (arm64-v8a)' },
];

const supportedFormats = [
  { icon: FileVideo, label: 'Video', formats: 'MP4, MKV, WebM, AVI, MOV' },
  { icon: Headphones, label: 'Audio', formats: 'MP3, AAC, FLAC, WAV, OPUS' },
];

const obtainiumUrl =
  'https://apps.obtainium.imranr.dev/redirect.html?r=obtainium://add/https://github.com/iam-sandipmaity/video-downloader';
const nightlyReleaseUrl = 'https://github.com/iam-sandipmaity/video-downloader/releases/tag/nightly';

const DownloadPage = () => {
  const [copiedSHA, setCopiedSHA] = React.useState(false);
  const [downloadCount, setDownloadCount] = React.useState(null);
  const latestVersion = getLatestVersion();
  const allVersions = loadApkData();

  React.useEffect(() => {
    const controller = new AbortController();

    getReleaseDownloadCount(controller.signal)
      .then(setDownloadCount)
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.warn('Failed to load release download count:', error);
        }
      });

    return () => controller.abort();
  }, []);

  const totalDownloads = downloadCount === null ? '...' : formatDownloadCount(downloadCount);
  const releaseUrl = latestVersion?.links?.github || latestVersion?.apkPath;
  const downloadMethods = latestVersion
    ? [
        {
          name: 'Direct APK',
          description: `Download ${latestVersion.version} immediately.`,
          href: latestVersion.apkPath,
          icon: DownloadIcon,
          meta: latestVersion.fileSize,
          download: true,
        },
        {
          name: 'GitHub Release',
          description: 'Open notes, assets, and checksums.',
          href: releaseUrl,
          icon: Github,
          meta: 'Release page',
        },
        {
          name: 'Nightly Build',
          description: 'Try the latest automated build for testing.',
          href: nightlyReleaseUrl,
          icon: Package,
          meta: 'Testing build',
        },
        {
          name: 'Obtainium',
          description: 'Track future releases automatically.',
          href: obtainiumUrl,
          icon: Package,
          meta: 'Auto updates',
        },
      ]
    : [];

  const handleCopySHA = () => {
    if (latestVersion?.sha256) {
      navigator.clipboard.writeText(latestVersion.sha256);
      setCopiedSHA(true);
      setTimeout(() => setCopiedSHA(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <section className="bg-gray-950 text-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="min-w-0"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-sm font-semibold text-gray-200 mb-5">
                <Smartphone className="w-4 h-4 text-teal-300" />
                <span>Android APK</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-normal break-words max-w-3xl">
                Download Video Downloader
              </h1>

              <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                Get the latest open-source Android build powered by yt-dlp and FFmpeg. No ads, no tracking, just local downloads.
              </p>

              {latestVersion && (
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href={latestVersion.apkPath}
                    download
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-gray-950 hover:bg-gray-100 transition-colors"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download APK</span>
                  </a>
                  <a
                    href={obtainiumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <Package className="w-5 h-5" />
                    <span>Add to Obtainium</span>
                  </a>
                </div>
              )}

              <div className="mt-7 flex flex-wrap gap-2 text-sm text-gray-300">
                {['Open source', 'SHA256 provided', 'Android 8.0+', 'ARM64'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {latestVersion && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                  <div className="min-w-0">
                    <div className="text-sm text-gray-400">Latest APK</div>
                    <div className="mt-1 text-3xl sm:text-4xl font-bold">{latestVersion.version}</div>
                    <div className="mt-2 text-sm text-gray-400">Released {latestVersion.publishDate}</div>
                  </div>
                  <div className="shrink-0">
                    <div className="text-sm text-gray-400">Size</div>
                    <div className="mt-1 text-2xl font-bold">{latestVersion.fileSize}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    ['Downloads', totalDownloads],
                    ['Versions', allVersions.length],
                    ['CPU', 'ARM64'],
                  ].map(([label, value]) => (
                    <div key={label} className="min-w-0 rounded-lg bg-gray-950/45 border border-white/10 p-3">
                      <div className="truncate text-[11px] sm:text-xs text-gray-400">{label}</div>
                      <div className="mt-1 truncate text-lg sm:text-xl font-bold">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg bg-gray-950/45 border border-white/10 p-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold">
                      <Shield className="w-4 h-4 text-teal-300" />
                      <span>SHA256</span>
                    </span>
                    <button
                      onClick={handleCopySHA}
                      className="shrink-0 rounded-md p-1.5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                      title="Copy SHA256"
                    >
                      {copiedSHA ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <code title={latestVersion.sha256} className="block truncate text-[11px] font-mono text-gray-400">
                    {latestVersion.sha256}
                  </code>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          {systemRequirements.map((req) => (
            <div key={req.label} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                <req.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">{req.label}</div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{req.desc}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {supportedFormats.map((fmt) => (
            <div key={fmt.label} className="flex max-w-full items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-800 dark:bg-gray-900">
              <fmt.icon className="w-5 h-5 shrink-0 text-teal-600 dark:text-teal-400" />
              <div className="min-w-0 text-sm">
                <span className="font-semibold text-gray-900 dark:text-white">{fmt.label}:</span>{' '}
                <span className="text-gray-600 dark:text-gray-400">{fmt.formats}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {latestVersion ? (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-14"
          >
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Choose Your Install Method</h2>
                <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Direct APK is fastest. GitHub gives release notes. Obtainium can track future updates.
                </p>
              </div>
              <Link
                to="/docs#installation-guide"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:border-teal-500 dark:border-gray-800 dark:text-gray-200"
              >
                <span>Installation docs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {downloadMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.name}
                    href={method.href}
                    download={method.download}
                    target={method.download ? undefined : '_blank'}
                    rel={method.download ? undefined : 'noopener noreferrer'}
                    className="group flex min-h-44 flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 transition-colors hover:border-teal-500 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div>
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{method.name}</h3>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-teal-500" />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{method.description}</p>
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
                      {method.meta}
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/70 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Verify before installing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Compare the APK hash with the SHA256 value above.</p>
                </div>
              </div>
              <button
                onClick={handleCopySHA}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:border-teal-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                {copiedSHA ? <Check className="w-4 h-4 text-teal-500" /> : <Copy className="w-4 h-4 text-teal-500" />}
                <span>{copiedSHA ? 'Copied SHA256' : 'Copy SHA256'}</span>
              </button>
            </div>
          </motion.section>
        ) : (
          <div className="py-16 text-center text-gray-500 dark:text-gray-400">No release available yet. Check back soon!</div>
        )}

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">How to Install</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.step} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold text-teal-600 dark:bg-gray-800 dark:text-teal-400">
                  {step.step}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-14 rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/60 dark:bg-amber-950/20"
        >
          <div className="flex gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div className="text-sm text-amber-900 dark:text-amber-200">
              <p className="mb-1 font-semibold">Security Notice</p>
              <p>
                Always verify the SHA256 checksum after downloading. See our{' '}
                <Link to="/docs#verifying-the-checksum" className="underline hover:text-amber-700 dark:hover:text-amber-100">
                  documentation
                </Link>{' '}
                for checksum verification.
              </p>
            </div>
          </div>
        </motion.div>

        {allVersions.length > 1 && (
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Versions</h2>
              <Link
                to="/versions"
                className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
              >
                <span>View changelog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              {allVersions.map((version) => (
                <div key={version.version} className="flex flex-col gap-3 border-b border-gray-200 bg-white px-4 py-4 last:border-b-0 dark:border-gray-800 dark:bg-gray-900 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{version.version}</span>
                      {version.version === latestVersion?.version && (
                        <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                          Latest
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                      <span>{version.publishDate}</span>
                      <span>{version.fileSize}</span>
                    </div>
                  </div>
                  <a
                    href={version.apkPath}
                    download
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    <span>APK</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default DownloadPage;
