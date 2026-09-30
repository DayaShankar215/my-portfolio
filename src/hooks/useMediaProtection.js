import { useEffect } from 'react';

export default function useMediaProtection(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const isEditable = (target) =>
      target.closest('input, textarea, select, [contenteditable="true"]');

    const preventContextMenu = (e) => {
      if (!isEditable(e.target)) {
        e.preventDefault();
      }
    };

    const preventSaving = (e) => {
      if (e.target.closest('img, canvas')) {
        e.preventDefault();
      }
    };

    const preventCopy = (e) => {
      if (e.target.closest('img, canvas')) {
        e.preventDefault();
      }
    };

    const preventInspect = (e) => {
      const k = (e.key || '').toLowerCase();
      if (e.key === 'F12') {
        e.preventDefault();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c', 'k'].includes(k)) {
        e.preventDefault();
        return;
      }
      if ((e.ctrlKey || e.metaKey) && (k === 'u' || k === 's')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventSaving);
    document.addEventListener('copy', preventCopy);
    document.addEventListener('keydown', preventInspect);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventSaving);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('keydown', preventInspect);
    };
  }, [enabled]);
}