import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'Done-For-You Fulfillment — Rankett',
  description: 'Schema markup, AI-optimized blog posts, FAQ content, LLMs.txt, and authority placements — Rankett builds and deploys everything for your clients.',
  alternates: { canonical: 'https://rankett.com/features/done-for-you-fulfillment/' },
}

const mockup = (
  <div className="space-y-3">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">Active Deliverables</p>
    {[
      { label: 'AEO Blog Post #3', status: 'Deployed', ok: true },
      { label: 'FAQ Optimization', status: 'Deployed', ok: true },
      { label: 'Schema Markup Update', status: 'In Progress', ok: null },
      { label: 'LLMs.txt File', status: 'Scheduled', ok: null },
      { label: 'Authority Placement #1', status: 'Pending Review', ok: null },
    ].map((item) => (
      <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#E5E5E3] last:border-0">
        <span className="text-xs text-[#111110]">{item.label}</span>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
          item.ok === true ? 'bg-[#DCFCE7] text-[#166534]' :
          'bg-[#FEF3C7] text-[#92400E]'
        }`}>
          {item.status}
        </span>
      </div>
    ))}
    <div className="pt-2 text-[10px] text-[#9B9B9B]">15 total deliverables · 8 deployed · 7 in pipeline</div>
  </div>
)

export default function DoneForYouFulfillmentPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Fulfillment"
      title="We do the work. You take the credit."
      description="Schema markup, AI-optimized blog posts, FAQ content, LLMs.txt, authority placements — Rankett builds and deploys every deliverable. Your clients see progress; you never have to touch the work."
      Icon={CheckCircle}
      steps={[
        {
          title: 'Rankett builds the deliverables',
          description: 'Our team generates AI-optimized content, schema markup, FAQ expansions, LLMs.txt files, and authority placements — based on the audit findings for each client.',
        },
        {
          title: 'You review and approve',
          description: 'Every deliverable gets your agency\'s final sign-off before it goes live. You stay in control of what clients see without doing any of the actual work.',
        },
        {
          title: 'We deploy directly to the site',
          description: 'Via WordPress plugin, DNS-level injection, or manual delivery — Rankett deploys content directly. No asking clients for logins, no back-and-forth.',
        },
      ]}
      whatYouGet={[
        'AI-optimized blog posts (4–12/month depending on tier)',
        'FAQ content expansion and optimization',
        'Schema markup creation and deployment',
        'LLMs.txt file creation',
        'Answer Capture Optimizations',
        'Authority placements (regional and national tiers)',
        'Monthly semantic refresh audit',
        'Direct deployment via WordPress plugin or Antenna',
      ]}
      mockupContent={mockup}
    />
  )
}
