import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'White-Label SEO FAQ for Agencies | Rankett',
  description: 'Answers to common agency questions: pricing, deliverables, AI search optimization, setup, and white-label configuration.',
  alternates: { canonical: 'https://rankett.com/faq/' },
  openGraph: {
    title: 'White-Label SEO FAQ | Rankett',
    description: 'Pricing, deliverables, AI search setup, and more. Everything agencies ask before partnering with Rankett.',
    url: 'https://rankett.com/faq',
    siteName: 'Rankett',
    type: 'website',
    images: [
      {
        url: 'https://rankett.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Rankett — The AI Search Layer for Your Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White-Label SEO FAQ | Rankett',
    description: 'Pricing, deliverables, AI search setup, and more. Everything agencies ask before partnering with Rankett.',
    images: ['https://rankett.com/og-image.svg'],
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
