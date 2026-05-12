import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
