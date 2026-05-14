import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OverscrollSync from "@/components/OverscrollSync";

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
        {/* Gradient layer — position:fixed so it covers the full viewport at all
            scroll positions, including macOS overscroll bounce areas */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            pointerEvents: 'none',
            background: [
              'radial-gradient(ellipse 120% 55% at 38% -8%,  rgba(138,168,255,0.72) 0%, rgba(195,215,255,0.28) 52%, transparent 74%)',
              'radial-gradient(ellipse 85%  48% at 74% 50%,  rgba(172,202,255,0.54) 0%, transparent 68%)',
              'radial-gradient(ellipse 105% 50% at 26% 104%, rgba(182,210,255,0.62) 0%, transparent 72%)',
              '#EDF2FF',
            ].join(', '),
          }}
        />
        <OverscrollSync />
        {children}
      </body>
    </html>
  );
}
