import type { Metadata } from 'next';
import { Geist_Mono, Rubik, Vazirmatn } from 'next/font/google';
import { Navigation } from '@/components/Navigation/Navigation';
import './globals.css';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin', 'arabic'],
  display: 'swap',
});

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['latin', 'arabic'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'همبازی ایونت',
  description: 'همبازی ایونت',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${rubik.variable} ${vazirmatn.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
