import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rankett | Advanced Search Coverage for Agencies",
  description: "Done-for-you SEO fulfillment for agencies. Buyer intent content, AI search visibility, white-labeled reports. Takes 5 minutes to start.",
  openGraph: {
    title: "Rankett | AI Visibility for Agencies",
    description: "The AI search layer for your agency. White-label, done-for-you fulfillment. Takes 5 minutes.",
    url: "https://rankett.com",
    siteName: "Rankett",
    type: "website",
    images: [
      {
        url: "https://rankett.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rankett — The AI Search Layer for Your Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rankett | AI Visibility for Agencies",
    description: "The AI search layer for your agency. White-label, done-for-you.",
    images: ["https://rankett.com/og-image.svg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rankett.com" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rankett",
  url: "https://rankett.com",
  description:
    "White-label, done-for-you SEO fulfillment for digital marketing agencies.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rankett",
  url: "https://rankett.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Unified background — fixed so dots + glow cover gutter and content equally,
            no color discontinuity at the body border lines */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
            background: [
              'radial-gradient(circle, rgba(100, 128, 255, 0.065) 1px, transparent 1px)',
              'radial-gradient(ellipse 90% 14% at 15%  3%,  rgba(148, 178, 255, 0.46) 0%, transparent 100%)',
              'radial-gradient(ellipse 80% 12% at 85% 17%,  rgba(172, 200, 255, 0.40) 0%, transparent 100%)',
              'radial-gradient(ellipse 85% 13% at 12% 34%,  rgba(190, 215, 255, 0.44) 0%, transparent 100%)',
              'radial-gradient(ellipse 75% 11% at 82% 52%,  rgba(148, 178, 255, 0.36) 0%, transparent 100%)',
              'radial-gradient(ellipse 82% 13% at 18% 70%,  rgba(172, 200, 255, 0.40) 0%, transparent 100%)',
              'radial-gradient(ellipse 70% 11% at 80% 88%,  rgba(190, 215, 255, 0.34) 0%, transparent 100%)',
              '#EEF3FF',
            ].join(', '),
            backgroundSize: '28px 28px, auto, auto, auto, auto, auto, auto, auto',
          }}
        />
        {children}
      </body>
    </html>
  );
}
