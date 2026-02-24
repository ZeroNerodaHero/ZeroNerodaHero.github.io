'use client';

import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { themeModeAtom } from '@/atoms';

export function ThemeSync() {
  const theme = useAtomValue(themeModeAtom);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return null;
}
