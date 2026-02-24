'use client';

import { useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  postManifestAtom,
  postsCacheAtom,
  postLoadingIdsAtom,
  postErrorsAtom,
} from '@/atoms';

function parseXmlToPost(xmlText, source, id) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const title = xmlDoc.getElementsByTagName('title')[0]?.textContent || 'Default Title';
  const date = xmlDoc.getElementsByTagName('date')[0]?.textContent || 'Default Time';
  const text = xmlDoc.getElementsByTagName('text')[0]?.textContent || 'Default Text';
  return { id, title, date, text, source };
}

export function PostFetcher() {
  const manifest = useAtomValue(postManifestAtom);
  const setCache = useSetAtom(postsCacheAtom);
  const setLoading = useSetAtom(postLoadingIdsAtom);
  const setErrors = useSetAtom(postErrorsAtom);

  useEffect(() => {
    manifest.forEach(({ id, path }) => {
      setLoading((prev) => new Set(prev).add(id));

      fetch(path)
        .then((r) => r.text())
        .then((xmlText) => {
          const post = parseXmlToPost(xmlText, path, id);
          setCache((prev) => new Map(prev).set(id, post));
        })
        .catch((err) => {
          setErrors((prev) => new Map(prev).set(id, err));
        })
        .finally(() => {
          setLoading((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
        });
    });
  }, [manifest, setCache, setLoading, setErrors]);

  return null;
}
