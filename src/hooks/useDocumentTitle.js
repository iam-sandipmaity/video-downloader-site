import { useEffect } from 'react';

export const useDocumentTitle = (title, combine = true) => {
  useEffect(() => {
    if (title) {
      document.title = combine ? `${title} | Video Downloader App` : title;
    } else {
      document.title = 'Video Downloader App - Download Videos from Any Platform';
    }
  }, [title, combine]);
};
