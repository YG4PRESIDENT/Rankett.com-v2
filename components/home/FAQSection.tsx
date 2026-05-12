'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/scroll/FadeIn'

const FAQS = [
  {
    question: 'How is Rankett different from my agency\'s existing SEO offering?',
    answer: 'Rankett covers the AI search layer — what ChatGPT, Perplexity, and Gemini say when someone asks for a recommendation. Your SEO team handles traditional Google rankings. The two work in parallel; Rankett adds zero conflict to your current stack.',
  },
  {
    question: 'How long until clients see results?',
    answer: '90 days average for a meaningful AI Mention Rate lift. Week 1–4: Technical layer (schema, LLMs.txt, structured data). Month 2: AI-optimized content deployed. Month 3: Consistent citation growth across platforms.',
  },
  {
    question: 'Can I fully white-label it?',
    answer: 'Yes — completely. aivisibility.youragency.com. Your logo, your colors, your positioning. Clients see your platform. Rankett never appears. The white-label setup takes about 5 minutes.',
  },
  {
    question: 'What\'s your guarantee if you miss a deliverable?',
    answer: 'Full month refund if we\'re even one minute late. Agencies have final approval and rejection rights on every deliverable. No risk to your client relationships.',
  },
  {
    question: 'What does onboarding look like?',
    answer: 'Book a call, we walk you through the partner setup (5 minutes), and you\'re live. Your first client can have an audit running the same day. We handle all fulfillment from there.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110]">
              Common questions.
            </h2>
          </div>
        </FadeIn>

        <div className="divide-y divide-[#E5E5E3]">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <FadeIn key={i} direction="up" delay={i * 0.04}>
                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-[#111110]">{faq.question}</span>
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-[#E5E5E3] flex items-center justify-center">
                      {isOpen
                        ? <X className="w-3 h-3 text-[#6B6B6B]" />
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
              </FadeIn>
            )
          })}
        </div>

        <FadeIn direction="up" delay={0.2}>
          <div className="pt-8">
            <Link
              href="/faq/"
              className="text-sm text-[#4F7CFF] hover:underline"
            >
              View all FAQs →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
