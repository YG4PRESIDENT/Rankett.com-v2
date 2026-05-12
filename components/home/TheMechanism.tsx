import FadeIn from '@/components/scroll/FadeIn'
import { BarChart2, Search, Pen, Link2, Code2, RefreshCw, FileText } from 'lucide-react'

const MECHANISMS = [
  {
    icon: BarChart2,
    name: 'Buyer-intent blog clustering',
    description: "Blog posts mapped to real buyer queries in your client's niche, services, and location.",
  },
  {
    icon: Search,
    name: 'Market intent tracking',
    description: 'Ongoing scraping of buyer intent signals across Google, AI platforms, and niche forums — updated weekly.',
  },
  {
    icon: Pen,
    name: 'Content creation',
    description: 'Written, schema-optimized, and deployed directly to client sites each month.',
  },
  {
    icon: Link2,
    name: 'Internal link reinforcement',
    description: 'Compounding internal links across every post to build topical authority over time.',
  },
  {
    icon: Code2,
    name: 'Schema implementation',
    description: 'Article, FAQ, and structured data baked into every piece of content automatically.',
  },
  {
    icon: RefreshCw,
    name: 'Page freshness reinforcement',
    description: 'Monthly updates to existing content — recency signals for both search and AI models.',
  },
  {
    icon: FileText,
    name: 'White-label reporting',
    description: 'Progress reports under your brand, covering coverage metrics and deliverables completed.',
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">The Mechanism</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] max-w-xl leading-tight">
              What Rankett handles behind the scenes.
            </h2>
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
                  <p className="text-sm font-semibold text-[#111110] mb-1.5">{item.name}</p>
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
