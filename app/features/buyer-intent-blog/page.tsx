import type { Metadata } from 'next'
import { BarChart2 } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'Buyer Intent Blog Clusters | White-Label SEO',
  description: 'Build a compounding blog cluster targeted at real buyer intent. Schema-optimized, deployed directly, included in your white-label offering.',
  alternates: { canonical: 'https://rankett.com/features/buyer-intent-blog/' },
  openGraph: {
    title: 'Buyer Intent Blog Clusters | Rankett',
    description: 'Compounding search coverage built from real buyer intent signals. Schema-optimized and deployed to client sites every month.',
    url: 'https://rankett.com/features/buyer-intent-blog/',
    siteName: 'Rankett',
    type: 'website',
    images: [{ url: 'https://rankett.com/og-image.svg', width: 1200, height: 630, alt: 'Rankett — Buyer Intent Blog Clusters' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buyer Intent Blog Clusters | Rankett',
    description: 'Compounding search coverage built from real buyer intent signals.',
    images: ['https://rankett.com/og-image.svg'],
  },
}

const mockup = (
  <div className="space-y-4">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">Blog Cluster, Acme Plumbing</p>
    <div className="space-y-2">
      {[
        { title: 'Best Plumber in Austin for Water Heater Replacement', status: 'Live', intent: 'Commercial' },
        { title: 'Emergency Plumbing Service Near Me, Austin TX', status: 'Live', intent: 'Local' },
        { title: 'How Much Does a Water Heater Installation Cost in Austin?', status: 'Scheduled', intent: 'Buyer' },
        { title: 'Licensed Plumber vs. Handyman: What\'s the Difference?', status: 'In Progress', intent: 'Informational' },
      ].map((post) => (
        <div key={post.title} className="p-3 rounded-lg border border-[#E5E5E3] bg-[#FAFAF9]">
          <div className="flex items-start justify-between gap-2">
            <p className="text-xs font-medium text-[#111110] leading-snug">{post.title}</p>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium flex-shrink-0 ${
              post.status === 'Live' ? 'bg-[#DCFCE7] text-[#166534]' :
              post.status === 'Scheduled' ? 'bg-[#EEF2FF] text-[#4F7CFF]' :
              'bg-[#FEF3C7] text-[#92400E]'
            }`}>{post.status}</span>
          </div>
          <span className="text-[10px] text-[#9B9B9B] mt-1 block">{post.intent} intent</span>
        </div>
      ))}
    </div>
    <p className="text-[10px] text-[#9B9B9B]">4 posts live · 2 in pipeline · compounding monthly</p>
  </div>
)

export default function BuyerIntentBlogPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Content"
      title="Compounding search coverage built around real buyer intent."
      description="Most blog content targets the wrong keywords. Rankett scrapes real buyer intent signals across your client's niche, services, and location, then builds a blog cluster designed to compound search coverage month over month."
      Icon={BarChart2}
      steps={[
        {
          title: 'We map real buyer intent',
          description: "Before writing a single post, Rankett identifies the exact queries buyers are using across Google and AI platforms in your client's specific niche, service lines, and location.",
        },
        {
          title: 'We build the cluster strategy',
          description: "Posts aren't random. Each one targets a specific buyer intent signal, commercial, local, transactional, and links back to related posts to compound authority over time.",
        },
        {
          title: 'We write, optimize, and deploy',
          description: "Every post is written with page freshness, compounding internal linking, and baked-in schema markup. Deployed directly to the client's site each month.",
        },
      ]}
      whatYouGet={[
        '4–12 buyer intent blog posts per month (tier-based)',
        'Intent mapped to niche, service, and location signals',
        'Compounding internal linking built into every post',
        'Blog schema markup baked in (Article, FAQ)',
        'Direct deployment to client WordPress or CMS',
        'Monthly cluster expansion as coverage grows',
      ]}
      mockupContent={mockup}
    />
  )
}
