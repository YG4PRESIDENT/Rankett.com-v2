'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GradientCTA from '@/components/home/GradientCTA'

const CALENDLY = 'https://calendly.com/rankett/30min'

const FAQ_CATEGORIES = [
  {
    category: 'What Rankett Is',
    faqs: [
      {
        question: 'What is Rankett?',
        answer:
          'Rankett is a white-label, done-for-you SEO fulfillment partner built specifically for digital marketing agencies. Rankett handles the advanced SEO and AI search implementation layer that agency teams lack the bandwidth to execute themselves: buyer-intent blog clustering, ongoing market intent research, schema implementation, internal link reinforcement, and page freshness updates. Every deliverable is deployed directly to your client sites and wrapped in white-labeled reports under your agency brand. Clients see your agency. Rankett stays completely invisible.',
      },
      {
        question: 'Is Rankett an AI SEO tool or a managed service?',
        answer:
          'Rankett is a managed fulfillment service, not a self-serve tool. Rankett uses AI-assisted research workflows to scale buyer-intent discovery and content production, but every piece of content is human-reviewed and quality-scored internally before it is deployed to your client sites. Agencies do not manage any process. Rankett handles research, writing, optimization, deployment, and reporting end to end.',
      },
      {
        question: 'How is Rankett different from traditional white-label SEO platforms?',
        answer:
          'Most white-label SEO platforms give agencies a dashboard and expect the agency team to manage the execution. Rankett is pure done-for-you fulfillment. Rankett researches, writes, optimizes, and deploys everything on behalf of the agency. There is no tool to log into and run yourself. An agency hands Rankett a client, Rankett handles the entire advanced implementation layer, and white-labeled deliverables arrive under the agency brand every month without touching the agency team.',
      },
      {
        question: 'How is Rankett different from hiring a freelancer or in-house SEO?',
        answer:
          'A freelancer or in-house hire typically covers one dimension of SEO, usually writing or auditing. Rankett covers the full advanced implementation stack across every client simultaneously: weekly buyer-intent research, schema-optimized blog cluster production, internal link reinforcement, entity schema markup, monthly page freshness updates, and white-labeled reporting. There is no management overhead, no hiring ramp, and no capacity ceiling. At $498 to $1,498 per client per month, Rankett delivers more execution scope than a single in-house hire at a fraction of the cost.',
      },
    ],
  },
  {
    category: 'AI Search Optimization',
    faqs: [
      {
        question: 'How do I get my clients to rank in AI search engines like ChatGPT and Perplexity?',
        answer:
          'AI search engines like ChatGPT, Perplexity, and Google AI Overviews pull answers from content that demonstrates clear topical authority on a subject. To appear in AI search results, a site needs a dense cluster of schema-optimized, buyer-intent content that AI retrieval models can surface as a reliable source. Rankett builds exactly this: a compounding buyer-intent blog cluster with entity schema, internal authority reinforcement, and freshness signals that make client sites quotable by AI platforms. AI Mention Rate improvement typically begins showing at the 90-day mark as the content cluster indexes and grows.',
      },
      {
        question: 'What is buyer intent SEO and why does it matter for AI search?',
        answer:
          'Buyer intent SEO is the practice of targeting search queries and topics that signal purchase readiness, not just general interest. For traditional search, buyer intent content converts because it matches what users type when they are ready to act. For AI search, buyer intent content matters for a different reason: AI platforms are trained to surface the most authoritative and specific source for a given query, and buyer intent content clusters demonstrate deep, specific expertise in a niche. Rankett researches real buyer intent signals from Google, AI platforms, and niche forums weekly, then builds content around those signals to help client sites surface in both traditional and AI search results.',
      },
      {
        question: 'What is an AI Mention Rate and how does Rankett improve it?',
        answer:
          'AI Mention Rate measures how often a brand or business is cited by AI search platforms like ChatGPT, Perplexity, and Google AI Overviews when users ask questions in a relevant category. A higher AI Mention Rate means the business appears more frequently in AI-generated answers, which drives referral traffic and brand authority as AI search usage grows. Rankett improves AI Mention Rate by building a compounding cluster of schema-optimized, buyer-intent blog posts that AI retrieval models recognize as authoritative sources. Internal link reinforcement and page freshness updates signal ongoing relevance, which AI platforms weight heavily when selecting sources to cite.',
      },
      {
        question: 'Does Rankett optimize content for Google AI Overviews?',
        answer:
          'Yes. Google AI Overviews pull from content that has strong FAQ schema, clear question-and-answer structure, and demonstrated topical authority across a subject cluster. Rankett deploys FAQ schema and Article schema on every piece of content, structures blog posts to directly answer buyer-intent queries, and builds internal link clusters that signal topical depth. This combination is the highest-signal approach for appearing in Google AI Overviews, as well as in ChatGPT and Perplexity citations.',
      },
    ],
  },
  {
    category: 'Deliverables and Quality',
    faqs: [
      {
        question: 'What does Rankett actually deliver each month?',
        answer:
          'Core monthly deliverables scale with the tier. Every client receives: buyer-intent blog posts (4 per month on Local, 8 on Regional, 12 on National), weekly market intent tracking updates, internal link reinforcement across new and existing posts, schema markup implementation including Article and FAQ structured data on every post, monthly page freshness updates applied to existing content, and a white-labeled progress report formatted for agency delivery to the client. Everything is deployed directly to the client site and arrives under the agency brand.',
      },
      {
        question: 'Is Rankett content just AI-generated articles?',
        answer:
          'No. Every piece of content Rankett creates starts with real buyer-intent research specific to the client niche, location, and service lines. Rankett does not use generic AI prompts. All content goes through an internal quality scoring process and human review before deployment. Topics are mapped to real queries that buyers are actively using across Google, AI platforms, and niche forums. Content that does not pass quality scoring gets regenerated. Rankett does not deploy content that would not pass agency review.',
      },
      {
        question: 'What types of businesses does Rankett work best for?',
        answer:
          'Rankett adapts its buyer-intent research to any niche. The most common client types include local service businesses such as plumbers, HVAC contractors, dentists, and law firms; e-commerce brands; and B2B or SaaS companies. The buyer-intent research process maps real search queries and AI prompts specific to each client industry, services, and geography. Rankett works for any business category where buyers use search or AI tools to find and evaluate vendors before purchasing.',
      },
      {
        question: "What happens to a client's content if an agency cancels?",
        answer:
          "All content Rankett has deployed to a client site remains permanently on that site. The client owns every post, schema implementation, and internal link structure that was built. There is no content removal, no hold-back, and no dependency on a continued Rankett subscription for the content to stay live. The compounding SEO value of the content cluster continues to accumulate even after the agency stops adding to it.",
      },
    ],
  },
  {
    category: 'Results and Timeline',
    faqs: [
      {
        question: 'How long until clients see real results from Rankett?',
        answer:
          'Month 1 covers the technical foundation: WordPress plugin setup, schema implementation, and buyer-intent research for the client niche. Month 2 gets the first buyer-intent blog cluster live on the client site. From Month 3 onward, coverage compounds as content indexes, internal links accumulate topical authority, and AI platforms begin citing the growing body of relevant content. Meaningful search coverage lift and AI Mention Rate improvement typically show by the 90-day mark. Results continue to improve each month as the content cluster grows.',
      },
      {
        question: 'How is Rankett different from just buying blog posts?',
        answer:
          'Buying individual blog posts gives an agency one-off content with no buyer-intent research, no schema markup, no internal linking structure, and no ongoing topic strategy. Rankett delivers a compounding system: every post is mapped to a real buyer-intent signal identified from active research, linked into a growing topical cluster, schema-optimized with Article and FAQ structured data, and refreshed monthly for page freshness. The coverage accumulates over time in a way that standalone blog purchases cannot replicate, because the value comes from the cluster structure and the ongoing research, not the individual posts.',
      },
    ],
  },
  {
    category: 'Pricing and Guarantee',
    faqs: [
      {
        question: 'How much does Rankett cost and what should agencies charge clients?',
        answer:
          'Rankett charges agencies $498 per month for Local clients, $998 per month for Regional clients, and $1,498 per month for National clients. Agencies typically mark up 2x to 5x when reselling, meaning a $498 per month Local tier commonly becomes a $1,000 to $1,500 per month retainer add-on for the client. No long-term contract is required to start. Agencies can add clients on Local and upgrade them to Regional or National as results compound.',
      },
      {
        question: 'Is there a long-term contract required to use Rankett?',
        answer:
          'No long-term contract is required. Agencies can scale up, scale down, or cancel on a monthly basis. Most agencies retain clients on Rankett long term because the compounding nature of the content cluster means results continue to improve over time. Canceling and restarting loses the compounding momentum, which is why retention is high, but no agency is locked in contractually.',
      },
      {
        question: "What is the guarantee if a deliverable is late?",
        answer:
          "Rankett issues a full month refund, no questions asked, if any deliverable is even one minute late. Agencies also hold final approval and rejection rights on every piece of content before it goes live on a client site. If a deliverable does not meet the agency standard, Rankett fixes it or the agency does not pay. This is not a standard SLA clause, it is how Rankett operates on every account.",
      },
    ],
  },
  {
    category: 'Setup and Integration',
    faqs: [
      {
        question: 'How long does it take to set up Rankett for an agency?',
        answer:
          'White-label branding setup, including logo, brand colors, and custom subdomain, takes approximately 5 minutes. The WordPress plugin installs on a client site in one click from the agency dashboard. Rankett includes an onboarding call to configure everything. The first deliverables are live on the client site within 30 days of signing. There is no ongoing setup burden for the agency.',
      },
      {
        question: 'Does Rankett work for non-WordPress client sites?',
        answer:
          "Rankett's primary automated deployment path uses a WordPress plugin, making WordPress the standard path for client site delivery. For enterprise clients or custom CMS environments, Rankett handles non-standard setups on a case-by-case basis. Agencies with non-WordPress clients should contact Rankett directly to discuss the available options before signing up a specific client.",
      },
    ],
  },
  {
    category: 'Fit for Your Agency',
    faqs: [
      {
        question: 'My agency already does SEO. Will Rankett conflict with existing work?',
        answer:
          'Rankett is designed to layer under what an agency team already delivers. The agency handles core ranking work: technical audits, backlink acquisition, on-page optimization, and strategy. Rankett handles the implementation depth layer that agencies rarely have bandwidth for: continuous buyer-intent content production, entity schema markup, monthly page freshness, and internal authority reinforcement. Rankett adds execution capacity to an existing SEO offering without replacing any existing agency deliverables.',
      },
      {
        question: 'How is Rankett different from DashClicks or SEOReseller?',
        answer:
          'Platforms like DashClicks and SEOReseller primarily offer link building packages and basic content production. Rankett is purpose-built for advanced search coverage in both traditional and AI search: buyer-intent content clustering, entity schema and structured data, topical authority reinforcement, page freshness signals, and AI search optimization. If an agency has clients asking why they do not appear in ChatGPT or Perplexity results, Rankett directly addresses that gap. Standard white-label platforms do not include AI search optimization.',
      },
      {
        question: 'How do agencies pitch Rankett to their clients?',
        answer:
          'Agencies typically position Rankett as an advanced search coverage add-on, the content and technical layer that ensures the client shows up across more queries, including AI search platforms like ChatGPT, Perplexity, and Google AI Overviews. Most agencies present it as a premium SEO retainer add-on priced at $1,000 to $2,500 per month. The white-labeled monthly progress reports with coverage metrics and intent tracking data make it straightforward to demonstrate ROI to clients each month without additional agency work.',
      },
    ],
  },
]

const ALL_FAQS = FAQ_CATEGORIES.flatMap((cat) =>
  cat.faqs.map((faq) => ({ ...faq, category: cat.category }))
)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ALL_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
        flexShrink: 0,
      }}
    >
      <path
        d="M4.5 6.75 9 11.25l4.5-4.5"
        stroke="#4F7CFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [openKey, setOpenKey] = useState<string | null>(null)

  const categories = ['All', ...FAQ_CATEGORIES.map((c) => c.category)]

  const visibleFAQs =
    activeCategory === 'All'
      ? ALL_FAQS
      : FAQ_CATEGORIES.find((c) => c.category === activeCategory)?.faqs.map((faq) => ({
          ...faq,
          category: activeCategory,
        })) ?? []

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-24 relative">
        {/* Page header */}
        <section className="pt-32 pb-12 border-b border-[#E5E5E3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
              FAQ
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111110] leading-tight mb-4">
              Frequently asked questions
            </h1>
            <p className="text-[#6B6B6B] text-lg max-w-xl">
              Everything agencies need to know before partnering with Rankett.
            </p>
          </div>
        </section>

        {/* Filter pills + accordion */}
        <section className="py-12 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat)
                      setOpenKey(null)
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      isActive
                        ? 'bg-[#4F7CFF] border-[#4F7CFF] text-white'
                        : 'bg-white border-[#E5E5E3] text-[#6B6B6B] hover:border-[#4F7CFF] hover:text-[#4F7CFF]'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Accordion list */}
            <div className="divide-y divide-[#E5E5E3] border-t border-[#E5E5E3]">
              {visibleFAQs.map((faq, idx) => {
                const key = `${activeCategory}-${idx}`
                const isOpen = openKey === key

                return (
                  <div key={key}>
                    <button
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    >
                      <span className="text-base font-semibold text-[#111110] group-hover:text-[#4F7CFF] transition-colors">
                        {faq.question}
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>

                    {isOpen && (
                      <div className="pb-5">
                        <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-16 text-center">
              <p className="text-sm text-[#6B6B6B] mb-4">Still have questions?</p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4F7CFF] text-white text-sm font-semibold hover:bg-[#3D6AED] transition-colors"
              >
                Book an Integration Call
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 6h7M6.5 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <GradientCTA />
      </main>
      <Footer />
    </>
  )
}
