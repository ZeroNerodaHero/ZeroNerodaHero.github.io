'use client';

import { MathJax } from 'better-react-mathjax';
import ComponentBox from './ComponentBox';
import { RenderXML } from './RenderXML';
import { ArticleSnip } from './ArticleSnip';
import { PostFetcher } from './PostFetcher';

export default function BlogContent() {
  return (
    <div className="app" style={{ fontFamily: 'var(--font-jersey), serif' }}>
      <PostFetcher />
      <ComponentBox
        inside_text={
          <div>
            <div className="header">Hello, Da Blog</div>
            <div className="sub-text">This is where i write about things</div>
          </div>
        }
      />
      <RenderXML id="atm" />
      <RenderXML id="abstract" />
      <RenderXML id="econ" />
      <ArticleSnip
        title="Hello first post"
        time="2-20-2025"
        text={
          <div>
            &quot;Its lowkey my birthday!&quot;
            <MathJax>{'\\(e^{i\\theta}=cos(\\theta)+isin(\\theta)\\)'}</MathJax>
          </div>
        }
      />
    </div>
  );
}
