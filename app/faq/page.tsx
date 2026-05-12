'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GradientCTA from '@/components/home/GradientCTA'
import FadeIn from '@/components/scroll/FadeIn'

const CALENDLY = 'https://calendly.com/rankett/30min'

const FAQ_CATEGORIES = [
  {
    category: 'What Rankett Is',
    faqs: [
      {
        question: 'What is Rankett?',
        answer: 'Rankett is a white-label, done-for-you SEO fulfillment partner for digital marketing agencies. We handle the advanced SEO implementation your team doesn\'t have bandwidth for — buyer-intent blog clustering, market intent tracking, schema implementation, internal link reinforcement, and page freshness — all deployed under your agency\'s brand. Your clients see your agency. Rankett stays invisible.',
      },
      {
        question: 'Is Rankett an AI SEO tool or a managed service?',
        answer: 'Rankett is a managed fulfillment service. We use AI-assisted research and content workflows to scale buyer-intent research and content production, but every piece is human-reviewed and quality-scored before it\'s deployed to your client\'s site. You get the output without managing the process.',
      },
      {
        question: 'How is Rankett different from traditional white-label SEO platforms?',
        answer: 'Most white-label SEO platforms hand you a dashboard and expect your team to manage it. Rankett is pure fulfillment — we research, write, optimize, and deploy everything on your behalf. There\'s no tool for you to log into and run. You hand us a client, we handle the advanced implementation layer, and deliverables arrive under your brand every month.',
      },
    ],
  },
  {
    category: 'Deliverables & Quality',
    faqs: [
      {
        question: 'What does Rankett actually deliver each month?',
        answer: 'Deliverables scale with the tier, but core monthly output includes: buyer-intent blog posts (4–12/month depending on tier), weekly market intent tracking updates, internal link reinforcement across new and existing posts, schema markup implementation (Article, FAQ, structured data), monthly page freshness updates on existing content, and a white-labeled progress report ready for you to forward to your client.',
      },
      {
        question: 'Is this just AI-generated content?',
        answer: 'No. Every piece Rankett creates is informed by real buyer-intent research specific to your client\'s niche, location, and service lines — not a generic AI prompt. All content goes through an internal quality scoring process and human review before deployment. Topics are mapped to real queries buyers are actively using, not guessed. We don\'t ship content we wouldn\'t be proud to put our name on.',
      },
      {
        question: 'What types of businesses does Rankett work best for?',
        answer: 'Rankett adapts to any niche. Common client types include local service businesses (plumbers, HVAC, dentists, law firms), e-commerce brands, and B2B or SaaS companies. The buyer-intent research process maps real search queries and AI prompts specific to each client\'s industry, services, and geography. If buyers are searching for your client\'s services online, Rankett can build coverage for those queries.',
      },
      {
        question: 'What happens to my client\'s content if I cancel?',
        answer: 'Everything stays. All content Rankett has deployed to your client\'s site remains there permanently. Your client owns what was built. There\'s no content removal, no hold-back, and no dependency on a continued subscription for the content to stay live.',
      },
    ],
  },
  {
    category: 'Results & Timeline',
    faqs: [
      {
        question: 'How long until my clients see real results?',
        answer: 'Month 1 covers the technical layer — plugin setup, schema implementation, and buyer-intent research. Month 2 gets the first buyer-intent blog cluster live on your client\'s site. Month 3 onward, coverage compounds as content indexes, internal links accumulate authority, and AI platforms begin citing the growing body of relevant content. Meaningful search coverage lift typically shows by the 90-day mark.',
      },
      {
        question: 'How is this different from just buying blog posts?',
        answer: 'Buying blog posts gives you one-off content with no strategy, no schema, no internal linking structure, and no ongoing research. Rankett delivers a compounding system: every post is mapped to a real buyer-intent signal, linked into a growing cluster, schema-optimized, and refreshed monthly. The coverage accumulates over time in a way that standalone blog purchases never do.',
      },
    ],
  },
  {
    category: 'Pricing & Guarantee',
    faqs: [
      {
        question: 'How much does Rankett cost and how should I mark it up?',
        answer: 'Rankett charges agencies $498/month (Local), $998/month (Regional), or $1,498/month (National) depending on client scope. Agencies typically mark up 2–5× when reselling — meaning a $498/month service commonly becomes a $1,000–$1,500/month retainer add-on for the client. No long-term contract is required to start.',
      },
      {
        question: 'Is there a long-term contract?',
        answer: 'No. There\'s no long-term contract required to get started. You can scale up, scale down, or cancel on a monthly basis. Most agencies keep clients on Rankett long-term because the compounding nature of the service makes results improve over time — not because they\'re locked in.',
      },
      {
        question: 'What\'s the guarantee if a deliverable is late?',
        answer: 'Full month refund — no questions asked — if we\'re even one minute late on any deliverable. Agencies also have final approval and rejection rights on every piece of content before it goes live on a client site. If it\'s not right, we fix it or you don\'t pay.',
      },
    ],
  },
  {
    category: 'Setup & Integration',
    faqs: [
      {
        question: 'How long does setup take?',
        answer: 'White-label branding setup — logo, colors, and domain — takes about 5 minutes. The WordPress plugin installs on your client\'s site in one click. We include an onboarding call where Rankett configures everything. Your first deliverables are live within 30 days of signing.',
      },
      {
        question: 'Does Rankett work for non-WordPress sites?',
        answer: 'Currently, Rankett\'s automated deployment runs via a WordPress plugin, so the primary path is for WordPress-based client sites. If you have enterprise or custom-CMS clients, reach out directly — we handle non-standard setups on a case-by-case basis.',
      },
    ],
  },
  {
    category: 'Fit for Your Agency',
    faqs: [
      {
        question: 'My agency already does SEO. Will Rankett conflict with what we do?',
        answer: 'No — Rankett is designed to layer under what your team already delivers. Your agency handles the core ranking work: technical audits, backlinks, on-page optimization. Rankett handles the implementation depth layer: continuous buyer-intent content, schema, page freshness, and internal authority reinforcement. It adds to your offering without replacing it or creating redundancy.',
      },
      {
        question: 'How is Rankett different from hiring a freelancer or an in-house SEO person?',
        answer: 'A freelancer or in-house hire covers one dimension — usually writing or auditing. Rankett covers the full advanced SEO implementation stack: research, writing, schema, internal linking, freshness, reporting, and fulfillment tracking — across every client, every month. There\'s no management overhead, no hiring ramp, no sick days, and no dependency on one person. At $498–$1,498/month per client, it delivers more scope than a single in-house hire at a fraction of the cost.',
      },
      {
        question: 'How is Rankett different from DashClicks, SEOReseller, or other white-label platforms?',
        answer: 'Platforms like DashClicks and SEOReseller primarily offer link building packages and basic content creation. Rankett is specifically built for advanced search coverage: buyer-intent content clustering, schema and structured data implementation, entity-based authority reinforcement, and AI search optimization. If your clients are asking why they don\'t appear in ChatGPT or Perplexity results, Rankett addresses that directly. Most white-label platforms don\'t.',
      },
      {
        question: 'How do I pitch this to my client?',
        answer: 'Position it as advanced search coverage — the content and technical layer that ensures your client shows up across more queries, including AI search platforms like ChatGPT and Perplexity. Most agencies present it as a premium SEO retainer add-on or an advanced content service. The white-labeled monthly progress reports make it straightforward to demonstrate ROI to clients each month.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }))
  ),
}

export default function FAQPage() {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})

  const toggle = (key: string) =>
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 border-b border-[#E5E5E3]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">FAQ</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#111110] leading-tight mb-4">
                Questions agencies ask before partnering.
              </h1>
              <p className="text-[#6B6B6B] text-lg max-w-xl">
                Everything you need to know about white-label SEO fulfillment, deliverables, pricing, and how Rankett fits into your agency.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ categories */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {FAQ_CATEGORIES.map((cat, ci) => (
              <FadeIn key={cat.category} direction="up" delay={ci * 0.04}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#4F7CFF] mb-5">
                    {cat.category}
                  </p>
                  <div className="divide-y divide-[#E5E5E3] border-t border-[#E5E5E3]">
                    {cat.faqs.map((faq, fi) => {
                      const key = `${ci}-${fi}`
                      const isOpen = !!openMap[key]
                      return (
                        <div key={key}>
                          <button
                            onClick={() => toggle(key)}
                            className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm font-medium text-[#111110] group-hover:text-[#4F7CFF] transition-colors leading-snug">
                              {faq.question}
                            </span>
                            <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-[#E5E5E3] group-hover:border-[#4F7CFF]/30 flex items-center justify-center transition-colors">
                              {isOpen
                                ? <Minus className="w-3 h-3 text-[#4F7CFF]" />
                                : <Plus className="w-3 h-3 text-[#6B6B6B]" />
                              }
                            </span>
                          </button>
                          {isOpen && (
                            <p className="pb-5 text-sm text-[#6B6B6B] leading-relaxed pr-8">
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Still have questions CTA */}
        <section className="py-12 border-t border-[#E5E5E3]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn direction="up">
              <p className="text-sm text-[#6B6B6B] mb-3">Still have questions?</p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-white text-sm font-semibold hover:bg-[#2a2a28] transition-colors"
              >
                Book an Integration Call
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </section>

        <GradientCTA />
      </main>
      <Footer />
    </>
  )
}
