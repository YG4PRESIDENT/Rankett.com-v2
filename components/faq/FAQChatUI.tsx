'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CALENDLY = 'https://calendly.com/rankett/30min'

const FAQ_CATEGORIES = [
  {
    category: 'What Rankett Is',
    faqs: [
      {
        question: 'What is Rankett?',
        answer: "Rankett is a white-label, done-for-you SEO fulfillment partner for digital marketing agencies. We handle the advanced SEO implementation your team doesn't have bandwidth for, buyer-intent blog clustering, market intent tracking, schema implementation, internal link reinforcement, and page freshness, all deployed under your agency's brand. Your clients see your agency. Rankett stays invisible.",
      },
      {
        question: 'Is Rankett an AI SEO tool or a managed service?',
        answer: "Rankett is a managed fulfillment service. We use AI-assisted research and content workflows to scale buyer-intent research and content production, but every piece is human-reviewed and quality-scored before it's deployed to your client's site. You get the output without managing the process.",
      },
      {
        question: 'How is Rankett different from traditional white-label SEO platforms?',
        answer: "Most white-label SEO platforms hand you a dashboard and expect your team to manage it. Rankett is pure fulfillment, we research, write, optimize, and deploy everything on your behalf. There's no tool for you to log into and run. You hand us a client, we handle the advanced implementation layer, and deliverables arrive under your brand every month.",
      },
    ],
  },
  {
    category: 'Deliverables & Quality',
    faqs: [
      {
        question: 'What does Rankett actually deliver each month?',
        answer: 'Deliverables scale with the tier, but core monthly output includes: buyer-intent blog posts (4–12/month), weekly market intent tracking updates, internal link reinforcement across new and existing posts, schema markup implementation (Article, FAQ, structured data), monthly page freshness updates on existing content, and a white-labeled progress report ready for you to forward to your client.',
      },
      {
        question: 'Is this just AI-generated content?',
        answer: "No. Every piece Rankett creates is informed by real buyer-intent research specific to your client's niche, location, and service lines, not a generic AI prompt. All content goes through an internal quality scoring process and human review before deployment. Topics are mapped to real queries buyers are actively using. We don't ship content we wouldn't be proud to put our name on.",
      },
      {
        question: 'What types of businesses does Rankett work best for?',
        answer: "Rankett adapts to any niche. Common client types include local service businesses (plumbers, HVAC, dentists, law firms), e-commerce brands, and B2B or SaaS companies. The buyer-intent research process maps real search queries and AI prompts specific to each client's industry, services, and geography.",
      },
      {
        question: "What happens to my client's content if I cancel?",
        answer: "Everything stays. All content Rankett has deployed to your client's site remains there permanently. Your client owns what was built. There's no content removal, no hold-back, and no dependency on a continued subscription for the content to stay live.",
      },
    ],
  },
  {
    category: 'Results & Timeline',
    faqs: [
      {
        question: 'How long until my clients see real results?',
        answer: "Month 1 covers the technical layer, plugin setup, schema implementation, and buyer-intent research. Month 2 gets the first buyer-intent blog cluster live on your client's site. Month 3 onward, coverage compounds as content indexes, internal links accumulate authority, and AI platforms begin citing the growing body of relevant content. Meaningful search coverage lift typically shows by the 90-day mark.",
      },
      {
        question: 'How is this different from just buying blog posts?',
        answer: "Buying blog posts gives you one-off content with no strategy, no schema, no internal linking structure, and no ongoing research. Rankett delivers a compounding system: every post is mapped to a real buyer-intent signal, linked into a growing cluster, schema-optimized, and refreshed monthly. The coverage accumulates over time in a way that standalone blog purchases never do.",
      },
    ],
  },
  {
    category: 'Pricing & Guarantee',
    faqs: [
      {
        question: 'How much does Rankett cost and how should I mark it up?',
        answer: 'Rankett charges agencies $498/month (Local), $998/month (Regional), or $1,498/month (National) depending on client scope. Agencies typically mark up 2–5× when reselling, meaning a $498/month service commonly becomes a $1,000–$1,500/month retainer add-on for the client. No long-term contract is required to start.',
      },
      {
        question: 'Is there a long-term contract?',
        answer: "No. There's no long-term contract required to get started. You can scale up, scale down, or cancel on a monthly basis. Most agencies keep clients on Rankett long-term because the compounding nature of the service makes results improve over time, not because they're locked in.",
      },
      {
        question: "What's the guarantee if a deliverable is late?",
        answer: "Full month refund, no questions asked, if we're even one minute late on any deliverable. Agencies also have final approval and rejection rights on every piece of content before it goes live on a client site. If it's not right, we fix it or you don't pay.",
      },
    ],
  },
  {
    category: 'Setup & Integration',
    faqs: [
      {
        question: 'How long does setup take?',
        answer: "White-label branding setup, logo, colors, and domain, takes about 5 minutes. The WordPress plugin installs on your client's site in one click. We include an onboarding call where Rankett configures everything. Your first deliverables are live within 30 days of signing.",
      },
      {
        question: 'Does Rankett work for non-WordPress sites?',
        answer: "Currently, Rankett's automated deployment runs via a WordPress plugin, so the primary path is for WordPress-based client sites. If you have enterprise or custom-CMS clients, reach out directly, we handle non-standard setups on a case-by-case basis.",
      },
    ],
  },
  {
    category: 'Fit for Your Agency',
    faqs: [
      {
        question: 'My agency already does SEO. Will Rankett conflict with what we do?',
        answer: "No, Rankett is designed to layer under what your team already delivers. Your agency handles the core ranking work: technical audits, backlinks, on-page optimization. Rankett handles the implementation depth layer: continuous buyer-intent content, schema, page freshness, and internal authority reinforcement. It adds to your offering without replacing it.",
      },
      {
        question: 'How is Rankett different from hiring a freelancer or in-house SEO?',
        answer: "A freelancer or in-house hire covers one dimension, usually writing or auditing. Rankett covers the full advanced SEO stack: research, writing, schema, internal linking, freshness, reporting, and fulfillment tracking, across every client, every month. No management overhead, no hiring ramp, no sick days. At $498–$1,498/month per client, it delivers more scope than a single in-house hire at a fraction of the cost.",
      },
      {
        question: 'How is Rankett different from DashClicks or SEOReseller?',
        answer: "Platforms like DashClicks and SEOReseller primarily offer link building and basic content packages. Rankett is specifically built for advanced search coverage: buyer-intent content clustering, schema and structured data, entity-based authority reinforcement, and AI search optimization. If your clients are asking why they don't appear in ChatGPT or Perplexity results, Rankett addresses that. Most white-label platforms don't.",
      },
      {
        question: 'How do I pitch this to my client?',
        answer: "Position it as advanced search coverage, the content and technical layer that ensures your client shows up across more queries, including AI search platforms like ChatGPT and Perplexity. Most agencies present it as a premium SEO retainer add-on. The white-labeled monthly progress reports make it easy to demonstrate ROI to clients each month.",
      },
    ],
  },
]

const BUBBLE_OFFSETS = [0, 64, 24, 88, 16, 52, 72, 8]

export default function FAQChatUI() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [openKey, setOpenKey] = useState<string | null>(null)

  const categories = FAQ_CATEGORIES.map((c) => c.category)
  const visibleCategories = activeCategory
    ? FAQ_CATEGORIES.filter((c) => c.category === activeCategory)
    : FAQ_CATEGORIES

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key)

  return (
    <div className="bg-[#0D0D0C] rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/20">

      {/* Category filter bar */}
      <div className="px-5 pt-5 pb-4 border-b border-white/[0.06]">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border ${
              activeCategory === null
                ? 'bg-[#4F7CFF]/15 border-[#4F7CFF]/40 text-[#4F7CFF]'
                : 'bg-white/[0.04] border-white/[0.07] text-white/35 hover:text-white/55 hover:border-white/15'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-[#4F7CFF]/15 border-[#4F7CFF]/40 text-[#4F7CFF]'
                  : 'bg-white/[0.04] border-white/[0.07] text-white/35 hover:text-white/55 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="px-5 py-8 space-y-12">
        {visibleCategories.map((cat, ci) => (
          <div key={cat.category}>

            {/* Category label */}
            <div className="flex items-center gap-2.5 mb-7">
              <span className="w-px h-3.5 rounded-full bg-[#4F7CFF]/50" />
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/25 m-0 leading-none">
                {cat.category}
              </h2>
            </div>

            {/* Questions + answers */}
            <div className="space-y-3">
              {cat.faqs.map((faq, fi) => {
                const key = `${ci}-${fi}`
                const isOpen = openKey === key
                const offset = BUBBLE_OFFSETS[fi % BUBBLE_OFFSETS.length]

                return (
                  <div key={key}>
                    {/* Question bubble, right-aligned with cascade offset */}
                    <div className="flex justify-end" style={{ paddingRight: offset }}>
                      <button
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        className={`px-4 py-2.5 rounded-2xl rounded-br-md text-sm font-medium transition-all text-left max-w-[320px] sm:max-w-md ${
                          isOpen
                            ? 'bg-[#4F7CFF] text-white shadow-lg shadow-[#4F7CFF]/25'
                            : 'bg-[#1C1C1C] text-white/80 border border-white/[0.07] hover:bg-[#222222] hover:text-white/95'
                        }`}
                      >
                        {faq.question}
                      </button>
                    </div>

                    {/* Answer, smooth AnimatePresence */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          className="mt-3 mb-1 flex items-start gap-3 pl-0.5 pr-5 sm:pr-10"
                        >
                          {/* Avatar */}
                          <div className="w-8 h-8 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center bg-gradient-to-br from-[#4F7CFF] to-[#2D5BE8] shadow-md shadow-[#4F7CFF]/30">
                            <span className="text-[11px] font-bold text-white">R</span>
                          </div>

                          {/* Answer card */}
                          <div className="flex-1 bg-[#161616] border border-white/[0.08] rounded-2xl rounded-tl-sm px-5 py-4">
                            <p className="text-sm text-white/60 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="px-5 py-7 border-t border-white/[0.06] flex flex-col items-center gap-4">
        <p className="text-xs text-white/25">Still have questions?</p>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111110] text-sm font-semibold hover:bg-white/92 transition-colors"
        >
          Book an Integration Call
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
