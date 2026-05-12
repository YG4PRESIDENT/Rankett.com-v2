import FadeIn from '@/components/scroll/FadeIn'

const CALENDLY = 'https://calendly.com/rankett/30min'

export default function CalendlyCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2">
              Ready to add the AI layer?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] mb-3">
              Book a 30-minute call.
            </h2>
            <p className="text-[#6B6B6B] max-w-md mx-auto">
              We&apos;ll walk you through a live audit for one of your existing clients and show you exactly how the white-label setup works.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="rounded-2xl border border-[#E5E5E3] overflow-hidden bg-white">
            <iframe
              src={`${CALENDLY}?hide_gdpr_banner=1&background_color=ffffff&text_color=111110&primary_color=4F7CFF`}
              width="100%"
              height="700"
              style={{ border: 'none' }}
              title="Book a call with Rankett"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
