import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SpeakAI',
  description: 'AI-powered English speaking platform',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="font-sans">
      <body>{children}</body>
    </html>
  );
}
