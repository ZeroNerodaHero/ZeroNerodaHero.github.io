'use client';

import { MathJax } from 'better-react-mathjax';
import ComponentBox from './ComponentBox';

export function ArticleSnip({ title, time, text }) {
  return (
    <ComponentBox
      inside_text={
        <div className="articlesnip">
          <div className="sub-text"> Written on: {time} </div>
          <div className="title"> {title} </div>
          <div>
            <MathJax>{text}</MathJax>
          </div>
        </div>
      }
    />
  );
}

export default ArticleSnip;
