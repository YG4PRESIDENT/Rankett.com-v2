import Link from 'next/link'
import { BarChart2, FileText, Search, Pen, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/scroll/FadeIn'

const FEATURES = [
  {
    icon: BarChart2,
    name: 'Buyer Intent Blog Cluster',
    description: 'Compounding search coverage targeted toward real buyer intent across your niche, services, and location.',
    href: '/features/buyer-intent-blog/',
    tag: 'Content',
  },
  {
    icon: FileText,
    name: 'Monthly Reports',
    description: 'Prompt/search coverage, buyer intent shifts, and a progress report, white-labeled and delivered to your clients.',
    href: '/features/monthly-reports/',
    tag: 'Reporting',
  },
  {
    icon: Search,
    name: 'Market Buyer Intent Tracking',
    description: 'We scrape buyer intent across your niche and location on an ongoing basis to fuel the blog cluster strategy.',
    href: '/features/market-buyer-intent/',
    tag: 'Research',
  },
  {
    icon: Pen,
    name: 'Content Creation',
    description: 'Page freshness, compounding internal linking, and baked-in blog schema, every piece of content built to compound.',
    href: '/features/content-creation/',
    tag: 'Content',
  },
]

export default function FeaturesOverview() {
  return (
    <section id="features" className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2">Client Deliverables</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110]">
              The four deliverables your clients get every month.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <FadeIn key={feature.name} direction="up" delay={i * 0.05}>
                <Link
                  href={feature.href}
                  className="group block p-6 rounded-xl border border-[#E5E5E3] bg-white hover:border-[#4F7CFF]/30 hover:shadow-sm transition-all duration-200 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#FAFAF9] border border-[#E5E5E3] flex items-center justify-center group-hover:bg-[#EEF2FF] group-hover:border-[#4F7CFF]/20 transition-colors">
                      <Icon className="w-4 h-4 text-[#6B6B6B] group-hover:text-[#4F7CFF] transition-colors" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full border border-[#E5E5E3] text-[10px] font-medium text-[#6B6B6B]">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#111110] mb-1.5 flex-1">{feature.name}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{feature.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#4F7CFF] group-hover:gap-2 transition-all mt-auto">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
