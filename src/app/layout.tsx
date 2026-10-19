import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import AppLayout from '@/components/AppLayout';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#060A1A',
};

export const metadata: Metadata = {
  title: 'Capital Value Mortgage Consulting | UAE Property Finance & Advisory',
  description:
    'Capital Value Mortgage Consulting FZE LLC provides bespoke mortgage advisory and property finance guidance across Dubai and the UAE. We Value Your Need.',
  keywords: [
    'UAE mortgage consultancy',
    'Dubai mortgage consultation',
    'property finance UAE',
    'home loan guidance Dubai',
    'refinancing UAE',
    'non-resident mortgage Dubai',
    'Golden Visa property finance',
  ],
  authors: [{ name: 'Capital Value Mortgage Consulting FZE LLC' }],
  metadataBase: new URL('https://capitalvalue.ae'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Capital Value Mortgage Consulting | UAE Property Finance Advisory',
    description:
      'Explore your UAE property-finance options with personalised guidance through the mortgage journey. We Value Your Need.',
    url: 'https://capitalvalue.ae',
    siteName: 'Capital Value Mortgage Consulting',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 576,
        alt: 'Capital Value Mortgage Consulting FZE LLC',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased bg-white text-slate-800">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
