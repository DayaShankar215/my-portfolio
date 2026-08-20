import { useEffect } from 'react';

export default function useMediaProtection(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const preventSaving = (e) => {
      if (e.target.closest('img')) {
        e.preventDefault();
      }
    };

    const preventCopy = (e) => {
      if (e.target.closest('img')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventSaving);
    document.addEventListener('dragstart', preventSaving);
    document.addEventListener('copy', preventCopy);

    return () => {
      document.removeEventListener('contextmenu', preventSaving);
      document.removeEventListener('dragstart', preventSaving);
      document.removeEventListener('copy', preventCopy);
    };
  }, [enabled]);
}