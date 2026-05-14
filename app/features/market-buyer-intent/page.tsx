import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'Buyer Intent Research & Tracking | Rankett',
  description: "Weekly buyer intent scraping for your client's niche and market. Real signals fuel content strategy and AI search optimization.",
  alternates: { canonical: 'https://rankett.com/features/market-buyer-intent/' },
  openGraph: {
    title: 'Buyer Intent Research & Tracking | Rankett',
    description: 'Weekly scraping of buyer intent signals across Google, AI platforms, and niche forums. Fuels the content cluster strategy.',
    url: 'https://rankett.com/features/market-buyer-intent/',
    siteName: 'Rankett',
    type: 'website',
    images: [{ url: 'https://rankett.com/og-image.svg', width: 1200, height: 630, alt: 'Rankett — Buyer Intent Research' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buyer Intent Research & Tracking | Rankett',
    description: 'Weekly buyer intent scraping for your niche. Fuels content strategy and AI search optimization.',
    images: ['https://rankett.com/og-image.svg'],
  },
}

const mockup = (
  <div className="space-y-4">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">Buyer Intent Feed, Austin Plumbing</p>
    <div className="space-y-2">
      {[
        { query: '"emergency plumber austin" queries', trend: '▲ +47% this month', type: 'High Priority' },
        { query: '"water heater replacement cost"', trend: '▲ +22% this month', type: 'Commercial' },
        { query: '"licensed plumber near me"', trend: '→ Stable', type: 'Local' },
        { query: '"drain cleaning service austin"', trend: '▲ New signal', type: 'Emerging' },
      ].map((item) => (
        <div key={item.query} className="flex items-center justify-between py-2 border-b border-[#E5E5E3] last:border-0">
          <div>
            <p className="text-[11px] font-medium text-[#111110]">{item.query}</p>
            <span className="text-[10px] text-[#9B9B9B]">{item.type}</span>
          </div>
          <span className={`text-[10px] font-medium ${
            item.trend.startsWith('▲') ? 'text-[#10B981]' : 'text-[#9B9B9B]'
          }`}>{item.trend}</span>
        </div>
      ))}
    </div>
    <p className="text-[10px] text-[#9B9B9B]">Updated weekly · feeds directly into blog cluster strategy</p>
  </div>
)

export default function MarketBuyerIntentPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Research"
      title="Always know what buyers in your client's market are searching for."
      description="Generic content doesn't compound. Rankett scrapes buyer intent signals across your client's specific niche, location, and service lines, on an ongoing basis, so the content strategy targets queries that actually convert."
      Icon={Search}
      steps={[
        {
          title: 'We scrape the market continuously',
          description: "Rankett monitors buyer intent signals across Google Search, AI platforms, and niche forums for your client's specific market, updated weekly, not once at onboarding.",
        },
        {
          title: 'We surface intent shifts',
          description: 'When a query starts gaining traction, or when a new buyer signal emerges, our system flags it. The content strategy adapts before the window closes.',
        },
        {
          title: 'Intent drives the cluster',
          description: 'Every blog post in the cluster is directly tied to a real buyer intent signal. No filler content, no generic posts, only topics buyers are actively searching.',
        },
      ]}
      whatYouGet={[
        'Weekly buyer intent scraping (niche + location + service)',
        'Intent shift detection, rising, stable, and new signals',
        'Query clustering by intent type (commercial, local, informational)',
        'Direct feed into the blog cluster content strategy',
        'Monthly intent shift summary in client reports',
        'Competitive intent gap analysis',
      ]}
      mockupContent={mockup}
    />
  )
}
