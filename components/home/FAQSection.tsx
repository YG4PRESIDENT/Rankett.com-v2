'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/scroll/FadeIn'

const FAQS = [
  {
    question: 'What does Rankett actually do for my agency?',
    answer:
      "Rankett is a done-for-you SEO fulfillment partner that handles the advanced implementation layer your agency doesn't have bandwidth for. Every month, Rankett researches buyer-intent queries in your client's niche, writes and deploys schema-optimized blog posts, reinforces internal linking across the site, updates existing content for page freshness, and delivers a white-labeled progress report under your brand. Your team stays focused on strategy and client relationships. Rankett handles the execution, invisibly.",
  },
  {
    question: 'How long until clients see results?',
    answer:
      'Month 1: Technical foundation — plugin setup, buyer-intent research, schema implementation. Month 2: First buyer-intent blog cluster goes live on the client site. Month 3 onward: Content compounds as posts index, internal links accumulate topical authority, and AI platforms begin surfacing the content. Meaningful search coverage lift and AI Mention Rate improvement typically show by the 90-day mark. Results compound each month as the cluster grows.',
  },
  {
    question: 'Is Rankett fully white-labeled?',
    answer:
      "Yes. Rankett is 100% ghost white-labeled. Your agency configures its logo, brand colors, and a custom subdomain in under 5 minutes. Clients see your branding on their dashboard, their monthly reports, and every deliverable. Rankett never appears anywhere in the client-facing experience. The onboarding flow, the progress dashboard, and the reports all carry your agency's identity.",
  },
  {
    question: "What's the guarantee if a deliverable is late?",
    answer:
      "Full month refund, no questions asked, if we are even one minute late on any deliverable. Agencies hold final approval and rejection rights on every piece of content before it goes live. If a deliverable doesn't meet your standard, we fix it or you don't pay. This isn't a standard SLA clause — it's how we operate.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-28 border-t border-[#E5E5E3]">
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 -left-28 w-[380px] h-[380px] rounded-full bg-[#9B59FF]/[0.09] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -right-28 w-[300px] h-[300px] rounded-full bg-[#4F7CFF]/[0.07] blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">

          {/* Left: heading + link */}
          <FadeIn direction="up">
            <div className="lg:sticky lg:top-32 self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
                Common questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight mb-4">
                Everything agencies ask before partnering.
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-8">
                Can't find your answer here? Book a call and we'll walk you through it live.
              </p>
              <Link
                href="/faq/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F7CFF] hover:text-[#3D6AEE] transition-colors"
              >
                See all questions
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {/* Right: accordion */}
          <div>
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <FadeIn key={i} direction="up" delay={i * 0.04}>
                  <div className="border-b border-[#E5E5E3]">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-[#111110] group-hover:text-[#4F7CFF] transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className="flex-shrink-0 mt-0.5 w-5 h-5 text-[#6B6B6B] transition-transform duration-200"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                    {isOpen && (
                      <p className="pb-5 text-sm text-[#6B6B6B] leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </FadeIn>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
