import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/scroll/FadeIn'

const CALENDLY = 'https://calendly.com/rankett/30min'

export default function GradientCTA() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          {/* Gradient card */}
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-14 md:py-20 text-center"
            style={{
              background: 'radial-gradient(ellipse at 20% 50%, rgba(167, 191, 255, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(196, 219, 255, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, rgba(221, 230, 255, 0.4) 0%, transparent 50%), #F0F4FF',
            }}
          >
            {/* Subtle dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle, #6B8EFF 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a6c]">
                Ready to bolster your agency&apos;s search coverage?
              </h2>
              <p className="text-[#3a4a8c] text-base md:text-lg">
                Add advanced SEO and AI search coverage to your existing offering — white-labeled, done-for-you, and running in 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2a3eb1] text-white text-sm font-semibold hover:bg-[#1e2f8a] transition-colors shadow-sm"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="https://app.rankett.com/sign-in"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full border border-[#2a3eb1]/30 text-[#2a3eb1] text-sm font-semibold hover:bg-white/60 transition-colors"
                >
                  Partner Login →
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
