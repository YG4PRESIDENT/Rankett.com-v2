import type { Metadata } from 'next'
import Link from 'next/link'
import { BarChart2, FileText, Search, Pen, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FadeIn from '@/components/scroll/FadeIn'
import GradientCTA from '@/components/home/GradientCTA'

export const metadata: Metadata = {
  title: 'Features — Rankett Advanced Search Coverage',
  description: 'Buyer intent blog clusters, market tracking, monthly reports, content creation — everything your clients need for advanced SEO and AI search coverage.',
  alternates: { canonical: 'https://rankett.com/features/' },
}

const FEATURES = [
  {
    icon: BarChart2,
    name: 'Buyer Intent Blog Cluster',
    description: 'Compounding search coverage targeted toward real buyer intent across your niche, services, and location.',
    href: '/features/buyer-intent-blog/',
    tag: 'Content',
  },
  {
    icon: Search,
    name: 'Market Buyer Intent Tracking',
    description: 'Ongoing scraping of buyer intent signals across your niche and location to fuel a smarter content strategy.',
    href: '/features/market-buyer-intent/',
    tag: 'Research',
  },
  {
    icon: FileText,
    name: 'Monthly Reports',
    description: 'Prompt/search coverage, buyer intent shifts, and a progress report — white-labeled and ready to send.',
    href: '/features/monthly-reports/',
    tag: 'Reporting',
  },
  {
    icon: Pen,
    name: 'Content Creation',
    description: 'Page freshness, compounding internal linking, and baked-in blog schema — built to compound month over month.',
    href: '/features/content-creation/',
    tag: 'Content',
  },
  {
    icon: Globe,
    name: 'White-Label Portal',
    description: 'Your brand, your domain. Clients see a fully branded AI visibility dashboard — Rankett never appears.',
    href: '/features/white-label-portal/',
    tag: 'Platform',
  },
  {
    icon: CheckCircle,
    name: 'Done-For-You Fulfillment',
    description: 'Schema, FAQ, LLMs.txt, authority placements — all built and deployed by Rankett without touching your team.',
    href: '/features/done-for-you-fulfillment/',
    tag: 'Fulfillment',
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section
          className="py-16 md:py-24 border-b border-[#c5d4ff]/40 relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(167, 191, 255, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(196, 219, 255, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, rgba(221, 230, 255, 0.4) 0%, transparent 50%), #F0F4FF',
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #6B8EFF 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">Platform</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#111110] leading-tight mb-4 max-w-2xl">
                Advanced search coverage for your agency clients.
              </h1>
              <p className="text-[#6B6B6B] text-lg max-w-xl">
                Buyer intent-driven content, ongoing market tracking, white-label reporting, and done-for-you fulfillment — all under your brand.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <FadeIn key={feature.name} direction="up" delay={i * 0.06}>
                    <Link
                      href={feature.href}
                      className="group block p-7 rounded-2xl border border-[#E5E5E3] bg-white hover:border-[#4F7CFF]/30 hover:shadow-sm transition-all duration-200 h-full flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#FAFAF9] border border-[#E5E5E3] flex items-center justify-center group-hover:bg-[#EEF2FF] group-hover:border-[#4F7CFF]/20 transition-colors">
                          <Icon className="w-5 h-5 text-[#6B6B6B] group-hover:text-[#4F7CFF] transition-colors" />
                        </div>
                        <span className="px-2 py-0.5 rounded-full border border-[#E5E5E3] text-[10px] font-medium text-[#6B6B6B]">
                          {feature.tag}
                        </span>
                      </div>
                      <h2 className="text-base font-semibold text-[#111110] mb-2">{feature.name}</h2>
                      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 flex-1">{feature.description}</p>
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

        <GradientCTA />
      </main>
      <Footer />
    </>
  )
}
