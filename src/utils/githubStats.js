const GITHUB_OWNER = 'iam-sandipmaity';
const GITHUB_REPO = 'video-downloader';

export const GITHUB_API_BASE = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

export const formatDownloadCount = (value) => {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return value;
  }

  if (value < 1000) {
    return new Intl.NumberFormat().format(value);
  }

  if (value < 1000000) {
    return `${(value / 1000).toFixed(1)}k`;
  }

  return `${(value / 1000000).toFixed(1)}m`;
};

export const getReleaseDownloadCount = async (signal) => {
  const response = await fetch(`${GITHUB_API_BASE}/releases?per_page=100`, { signal });

  if (!response.ok) {
    throw new Error('Unable to load GitHub release downloads');
  }

  const releases = await response.json();
  return releases.reduce((total, release) => {
    const assets = Array.isArray(release.assets) ? release.assets : [];
    return total + assets.reduce((assetTotal, asset) => assetTotal + (asset.download_count ?? 0), 0);
  }, 0);
};
