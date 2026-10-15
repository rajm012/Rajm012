import { useCallback, useEffect, useState } from 'react';

const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

function readSaved() {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
}

/** Light/dark theme. Follows the system until the visitor picks one; the pick is remembered. */
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (!readSaved()) setDark(prefersDark());
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setDark((d) => {
      try {
        localStorage.setItem('theme', d ? 'light' : 'dark');
      } catch {
        /* storage unavailable: still switch for this visit */
      }
      return !d;
    });
  }, []);

  return { dark, toggle };
}

const SITE = 'Raj Maurya';

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : `${SITE} — Mathematics & Computing, IIT Mandi`;
  }, [title]);
}
