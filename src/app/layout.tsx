import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import './globals.css';
import { META, SITE } from '@/content';
import CookieNotice from '@/components/CookieNotice';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: SITE.nombre,
    title: META.ogTitle,
    description: META.ogDescription,
  },
  twitter: { card: 'summary', title: META.ogTitle, description: META.ogDescription },
};

export const viewport: Viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE.nombre,
  description: META.schemaDescripcion,
  areaServed: 'España',
  telephone: SITE.telefono,
  founder: { '@type': 'Person', name: 'Hugo Andreu' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-ES" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-turquesa focus:px-4 focus:py-2 focus:font-bold focus:text-fondo"
        >
          Saltar al contenido
        </a>
        {children}
        <CookieNotice />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
