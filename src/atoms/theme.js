import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const themeModeAtom = atomWithStorage('blog-theme', 'dark');

export const toggleThemeAtom = atom(null, (get, set) => {
  set(themeModeAtom, get(themeModeAtom) === 'dark' ? 'light' : 'dark');
});
