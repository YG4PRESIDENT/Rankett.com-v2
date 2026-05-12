import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/scroll/FadeIn'

const CALENDLY = 'https://calendly.com/rankett/30min'

export default function WhitelabelBanner() {
  return (
    <section className="py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="rounded-2xl border border-[#4F7CFF]/20 bg-[#EEF2FF] px-8 py-8 md:py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4F7CFF]">
                  For SEO &amp; digital marketing agencies
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111110]">
                  Start your WhiteLabel Partnership.
                </h2>
                <p className="text-[#6B6B6B] text-sm md:text-base">
                  Seamless integration. Increase your bandwidth without adding headcount. Takes 5 minutes.
                </p>
              </div>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-white text-sm font-semibold hover:bg-[#2a2a28] transition-colors shrink-0"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
