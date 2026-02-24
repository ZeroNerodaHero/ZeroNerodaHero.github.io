'use client';

import { Provider as JotaiProvider } from 'jotai';
import { MathJaxContext } from 'better-react-mathjax';
import { ThemeSync } from './ThemeSync';

export function Providers({ children }) {
  return (
    <JotaiProvider>
      <MathJaxContext
        config={{
          tex: {
            inlineMath: [['\\(', '\\)']],
            displayMath: [['\\[', '\\]']],
          },
        }}
        hideUntilTypeset="first"
      >
        <ThemeSync />
        {children}
      </MathJaxContext>
    </JotaiProvider>
  );
}
