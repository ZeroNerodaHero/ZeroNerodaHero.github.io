'use client';

import { useAtomValue } from 'jotai';
import { postsCacheAtom, postLoadingIdsAtom, postErrorsAtom } from '@/atoms';
import { ArticleSnip } from './ArticleSnip';

export function RenderXML({ id }) {
  const cache = useAtomValue(postsCacheAtom);
  const loadingIds = useAtomValue(postLoadingIdsAtom);
  const errors = useAtomValue(postErrorsAtom);

  const post = cache.get(id);
  const loading = loadingIds.has(id);
  const error = errors.get(id);

  if (loading) return <div className="text_box sub-text">Loading...</div>;
  if (error) return <div className="text_box sub-text">Error loading post</div>;
  if (!post) return null;

  return <ArticleSnip title={post.title} time={post.date} text={post.text} />;
}
