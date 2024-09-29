import type { Metadata } from 'next';
import { Space_Grotesk, Sora } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const phosphate = localFont({
  src: './fonts/PhosphateSolid.ttf',
  variable: '--font-phosphate',
  weight: '400'
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'NoctuaDomain Production',
  description: 'NoctuaDomain 3D animation and design studio'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${phosphate.variable} ${sora.variable} relative min-h-screen bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
