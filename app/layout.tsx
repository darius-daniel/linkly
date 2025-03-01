import type { Metadata } from 'next';
import './globals.css';
import { sfProDisplayRegular } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Linkly—Shorten Your Long Links',
  description: 'A URL shortener to simplify sharing web resources',
  icons: [{ rel: 'icon', url: 'app/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProDisplayRegular.className} min-h-screen min-w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
