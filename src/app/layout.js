import { Jersey_15 } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const jersey15 = Jersey_15({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jersey',
});

export const metadata = {
  title: 'Da Blog',
  description: 'ZeroNeroDaHero',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={jersey15.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
