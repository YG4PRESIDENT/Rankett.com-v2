import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GradientCTA from '@/components/home/GradientCTA'
import FAQChatUI from '@/components/faq/FAQChatUI'

export const metadata: Metadata = {
  title: 'FAQ — Rankett White-Label SEO Fulfillment for Agencies',
  description: 'Common questions about white-label SEO fulfillment, done-for-you content, pricing, timelines, and how Rankett integrates with your agency.',
  alternates: { canonical: 'https://rankett.com/faq/' },
  openGraph: {
    title: 'FAQ — Rankett White-Label SEO Fulfillment for Agencies',
    description: 'Everything agencies ask before partnering with Rankett — deliverables, pricing, results timelines, and integration.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Rankett?', acceptedAnswer: { '@type': 'Answer', text: "Rankett is a white-label, done-for-you SEO fulfillment partner for digital marketing agencies. We handle the advanced SEO implementation your team doesn't have bandwidth for — buyer-intent blog clustering, market intent tracking, schema implementation, internal link reinforcement, and page freshness — all deployed under your agency's brand." } },
    { '@type': 'Question', name: 'Is Rankett an AI SEO tool or a managed service?', acceptedAnswer: { '@type': 'Answer', text: "Rankett is a managed fulfillment service. We use AI-assisted research and content workflows to scale buyer-intent research and content production, but every piece is human-reviewed and quality-scored before it's deployed to your client's site." } },
    { '@type': 'Question', name: 'How is Rankett different from traditional white-label SEO platforms?', acceptedAnswer: { '@type': 'Answer', text: "Most white-label SEO platforms hand you a dashboard and expect your team to manage it. Rankett is pure fulfillment — we research, write, optimize, and deploy everything on your behalf. There's no tool for you to log into and run." } },
    { '@type': 'Question', name: 'What does Rankett actually deliver each month?', acceptedAnswer: { '@type': 'Answer', text: 'Core monthly output includes: buyer-intent blog posts (4–12/month depending on tier), weekly market intent tracking updates, internal link reinforcement, schema markup implementation, monthly page freshness updates on existing content, and a white-labeled progress report.' } },
    { '@type': 'Question', name: 'Is this just AI-generated content?', acceptedAnswer: { '@type': 'Answer', text: "No. Every piece Rankett creates is informed by real buyer-intent research specific to your client's niche, location, and service lines. All content goes through an internal quality scoring process and human review before deployment." } },
    { '@type': 'Question', name: 'How long until my clients see real results?', acceptedAnswer: { '@type': 'Answer', text: "Month 1 covers the technical layer. Month 2 gets the first buyer-intent blog cluster live. Month 3 onward, coverage compounds. Meaningful search coverage lift typically shows by the 90-day mark." } },
    { '@type': 'Question', name: 'How much does Rankett cost and how should I mark it up?', acceptedAnswer: { '@type': 'Answer', text: 'Rankett charges agencies $498/month (Local), $998/month (Regional), or $1,498/month (National). Agencies typically mark up 2–5× when reselling. No long-term contract is required to start.' } },
    { '@type': 'Question', name: "What's the guarantee if a deliverable is late?", acceptedAnswer: { '@type': 'Answer', text: "Full month refund — no questions asked — if we're even one minute late on any deliverable. Agencies also have final approval and rejection rights on every piece of content." } },
    { '@type': 'Question', name: 'How long does setup take?', acceptedAnswer: { '@type': 'Answer', text: "White-label branding setup takes about 5 minutes. The WordPress plugin installs in one click. Your first deliverables are live within 30 days of signing." } },
    { '@type': 'Question', name: "My agency already does SEO. Will Rankett conflict with what we do?", acceptedAnswer: { '@type': 'Answer', text: "No — Rankett layers under what your team already delivers. Your agency handles technical audits, backlinks, and on-page optimization. Rankett handles continuous buyer-intent content, schema, page freshness, and internal authority reinforcement." } },
    { '@type': 'Question', name: 'How is Rankett different from hiring a freelancer or in-house SEO?', acceptedAnswer: { '@type': 'Answer', text: "Rankett covers the full advanced SEO stack: research, writing, schema, internal linking, freshness, reporting, and fulfillment tracking — across every client, every month. No management overhead, no hiring ramp. At $498–$1,498/month per client, it delivers more scope than a single in-house hire." } },
    { '@type': 'Question', name: 'Is there a long-term contract?', acceptedAnswer: { '@type': 'Answer', text: "No. There's no long-term contract required to get started. You can scale up, scale down, or cancel on a monthly basis." } },
    { '@type': 'Question', name: "What happens to my client's content if I cancel?", acceptedAnswer: { '@type': 'Answer', text: "Everything stays. All content Rankett has deployed to your client's site remains there permanently. Your client owns what was built." } },
    { '@type': 'Question', name: 'How do I pitch this to my client?', acceptedAnswer: { '@type': 'Answer', text: "Position it as advanced search coverage — the content and technical layer that ensures your client shows up across more queries, including AI search platforms like ChatGPT and Perplexity. Most agencies present it as a premium SEO retainer add-on." } },
    { '@type': 'Question', name: 'How is Rankett different from DashClicks or SEOReseller?', acceptedAnswer: { '@type': 'Answer', text: "Rankett is specifically built for advanced search coverage: buyer-intent content clustering, schema and structured data, entity-based authority reinforcement, and AI search optimization. Most white-label platforms don't address why clients aren't appearing in ChatGPT or Perplexity results." } },
    { '@type': 'Question', name: 'Does Rankett work for non-WordPress sites?', acceptedAnswer: { '@type': 'Answer', text: "Currently, Rankett's automated deployment runs via a WordPress plugin. If you have enterprise or custom-CMS clients, reach out directly — we handle non-standard setups on a case-by-case basis." } },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 border-b border-[#E5E5E3]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">FAQ</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111110] leading-tight mb-4">
              Frequently Asked{' '}
              <span className="text-[#4F7CFF]">Questions</span>
            </h1>
            <p className="text-[#6B6B6B] text-lg max-w-xl mx-auto">
              Everything agencies ask before partnering with Rankett for white-label SEO fulfillment.
            </p>
          </div>
        </section>

        {/* Chat FAQ UI */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQChatUI />
          </div>
        </section>

        <GradientCTA />
      </main>
      <Footer />
    </>
  )
}
