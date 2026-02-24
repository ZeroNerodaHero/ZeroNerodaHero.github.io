import { atom } from 'jotai';

export const postManifestAtom = atom([
  { id: 'atm', path: '/Notes/2025_2_24_ATM.xml' },
  { id: 'abstract', path: '/Notes/2025_2_23_Abstract.xml' },
  { id: 'econ', path: '/Notes/2025_2_20_Econ.xml' },
]);

export const postsCacheAtom = atom(new Map());

export const postLoadingIdsAtom = atom(new Set());

export const postErrorsAtom = atom(new Map());

export const sortedPostsAtom = atom((get) => {
  const cache = get(postsCacheAtom);
  return Array.from(cache.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

export const hasAnyPostLoadingAtom = atom((get) => {
  return get(postLoadingIdsAtom).size > 0;
});
