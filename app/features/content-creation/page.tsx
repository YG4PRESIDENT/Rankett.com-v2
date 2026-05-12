import type { Metadata } from 'next'
import { Pen } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'Content Creation — Rankett',
  description: 'Page freshness, compounding internal linking, and baked-in blog schema — every piece of content built to compound.',
  alternates: { canonical: 'https://rankett.com/features/content-creation/' },
}

const mockup = (
  <div className="space-y-4">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">Content Quality Signals</p>
    <div className="space-y-2">
      {[
        { label: 'Page Freshness', detail: 'Updated monthly — signals recency to search & AI', ok: true },
        { label: 'Internal Linking', detail: '3–5 contextual links per post, compounding DA', ok: true },
        { label: 'Blog Schema (Article)', detail: 'Structured data baked into every post', ok: true },
        { label: 'FAQ Schema', detail: 'Expandable Q&A baked into relevant posts', ok: true },
        { label: 'Word Count & Depth', detail: 'Minimum 800 words, buyer intent optimized', ok: true },
      ].map((item) => (
        <div key={item.label} className="flex items-start gap-2.5 py-1.5 border-b border-[#E5E5E3] last:border-0">
          <span className="mt-0.5 w-4 h-4 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] flex-shrink-0 flex items-center justify-center">
            <span className="text-[8px] text-[#166534] font-bold">✓</span>
          </span>
          <div>
            <p className="text-[11px] font-medium text-[#111110]">{item.label}</p>
            <p className="text-[10px] text-[#9B9B9B]">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default function ContentCreationPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Content"
      title="Content built to compound, not just fill a calendar."
      description="Every piece of content Rankett creates is engineered for compounding coverage — page freshness signals, internal link equity, and baked-in schema that makes it readable by both search engines and AI models."
      Icon={Pen}
      steps={[
        {
          title: 'Page freshness',
          description: 'Content is refreshed monthly — new data, updated stats, expanded sections. Search engines and AI models both weight recency. Stale content loses ground; fresh content builds it.',
        },
        {
          title: 'Compounding internal linking',
          description: 'Every post links to 3–5 related posts within the cluster. This passes domain authority down the chain and creates a web of related content that signals topical authority.',
        },
        {
          title: 'Baked-in blog schema',
          description: 'Article schema, FAQ schema, and relevant structured data are embedded in every post. AI models parse structured data — this is a direct input into citation likelihood.',
        },
      ]}
      whatYouGet={[
        'Buyer intent-targeted blog posts (4–12/month)',
        'Monthly page freshness updates on existing content',
        'Compounding internal linking (3–5 links per post)',
        'Article schema markup on every post',
        'FAQ schema where applicable',
        'Direct deployment to client CMS',
        'Content quality scoring before deployment',
      ]}
      mockupContent={mockup}
    />
  )
}
