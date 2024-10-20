import type { Metadata } from 'next';
import { Space_Grotesk, Sora } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const phosphate = localFont({
  src: './fonts/PhosphatePro-Solid.ttf',
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
  description: 'NoctuaDomain 3D animation and design studio',
  keywords:
    '3D animation, 3D, design studio, NoctuaDomain, noctua, noctua design, noctua studio, animation, design, studio',
  openGraph: {
    title: 'NoctuaDomain Production',
    description: 'NoctuaDomain 3D animation and design studio',
    url: 'https://noctuadomain.com',
    images: [
      {
        url: 'https://noctuadomain.com/logo-metadata.jpg',
        width: 1200,
        height: 630,
        alt: 'NoctuaDomain Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NoctuaDomain Production',
    description: 'NoctuaDomain 3D animation and design studio',
    images: [
      {
        url: 'https://noctuadomain.com/logo-metadata.jpg',
        width: 1200,
        height: 630,
        alt: 'NoctuaDomain Logo'
      }
    ]
  }
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
