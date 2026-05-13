import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OverscrollSync from "@/components/OverscrollSync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rankett — AI Visibility for Agencies | White-Label AI Search Optimization",
  description: "Add AI visibility to your agency's offering. Rankett handles everything — analysis, content, fulfillment. White-labeled, done-for-you. Takes 5 minutes to start.",
  openGraph: {
    title: "Rankett — AI Visibility for Agencies",
    description: "The AI search layer for your agency. White-label, done-for-you fulfillment. Takes 5 minutes.",
    url: "https://rankett.com",
    siteName: "Rankett",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rankett — AI Visibility for Agencies",
    description: "The AI search layer for your agency. White-label, done-for-you.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rankett.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Gradient lives here — position:fixed so it covers the full viewport at all
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
