import FadeIn from '@/components/scroll/FadeIn'
import { BarChart2, Search, Pen, Link2, Code2, RefreshCw, FileText } from 'lucide-react'

const MECHANISMS = [
  {
    icon: BarChart2,
    name: 'Buyer-Intent Blog Clustering',
    description: 'Real buyer queries across Google, AI platforms, and niche forums mapped to blog post targets each month.',
  },
  {
    icon: Search,
    name: 'Market Intent Tracking',
    description: 'Weekly scraping of buyer intent signals, Google, ChatGPT, Perplexity, niche forums. Updated every 7 days.',
  },
  {
    icon: Pen,
    name: 'Content Creation',
    description: "Every post written to spec, schema'd, internally linked, and deployed directly to the client's site.",
  },
  {
    icon: Link2,
    name: 'Internal Link Reinforcement',
    description: 'Every new post links back to existing content, compounding topical authority with each publish.',
  },
  {
    icon: Code2,
    name: 'Schema Implementation',
    description: 'Article, FAQ, and entity schema baked into every deployment automatically.',
  },
  {
    icon: RefreshCw,
    name: 'Page Freshness Reinforcement',
    description: 'Existing content updated monthly, recency signals for Google and AI retrieval models.',
  },
  {
    icon: FileText,
    name: 'White-Label Reporting',
    description: 'Coverage metrics, intent shifts, and deliverable progress, under your brand, sent to your clients.',
  },
]

export default function TheMechanism() {
  return (
    <section
      id="mechanism"
      className="py-20 md:py-28 border-t border-[#E5E5E3]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] max-w-xl leading-tight">
              The operational layer your agency never has to think about.
            </h2>
            <p className="mt-3 text-sm text-[#6B6B6B] max-w-xl leading-relaxed">
              Every deliverable is built, optimized, and deployed by Rankett, without touching your team&apos;s bandwidth.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MECHANISMS.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.name} direction="up" delay={i * 0.05}>
                <div className="p-5 rounded-xl border border-[#E5E5E3] bg-white hover:border-[#4F7CFF]/20 hover:shadow-sm transition-all duration-200 h-full">
                  <div className="w-8 h-8 rounded-lg bg-[#FAFAF9] border border-[#E5E5E3] flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#6B6B6B]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#111110] mb-1.5">{item.name}</h3>
                  <p className="text-xs text-[#9B9B9B] leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
