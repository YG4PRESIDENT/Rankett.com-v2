'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/scroll/FadeIn'

const FAQS = [
  {
    question: 'How is Rankett different from traditional SEO?',
    answer: 'Rankett adds an advanced search coverage layer on top of what your agency already does — buyer intent blog clusters, AI search optimization, and ongoing market tracking. It bolsters your existing SEO offering rather than replacing it.',
  },
  {
    question: 'How long until clients see results?',
    answer: '90 days average for meaningful coverage and AI Mention Rate lift. Technical layer in weeks 1–4, buyer intent content live in month 2, compounding growth from month 3 onward.',
  },
  {
    question: 'Can I fully white-label Rankett?',
    answer: 'Yes — completely. Your logo, your domain, your colors. Clients see your platform. Rankett is invisible. Setup takes 5 minutes.',
  },
  {
    question: "What's the guarantee if deliverables are late?",
    answer: 'Full month refund if we are even one minute late. Agencies have final approval and rejection rights on every deliverable.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
              Common questions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110]">
              Everything agencies ask before partnering.
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <FadeIn key={i} direction="up" delay={i * 0.04}>
                <div className="border-b border-[#E5E5E3]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-[#111110]">{faq.question}</span>
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

        <FadeIn direction="up" delay={0.2}>
          <div className="pt-8">
            <Link
              href="/faq/"
              className="text-sm text-[#4F7CFF] hover:underline"
            >
              See all questions →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
