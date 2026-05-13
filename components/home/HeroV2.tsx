import Image from 'next/image'

const CALENDLY = 'https://calendly.com/rankett/30min'

const TRUST_ITEMS = [
  { label: '5-minute setup' },
  { label: 'WordPress plugin' },
  { label: 'Dedicated success manager' },
  { label: 'White-label reporting' },
]

const AI_PLATFORMS = [
  { src: '/logos/openai.svg', alt: 'OpenAI' },
  { src: '/logos/claude-color.svg', alt: 'Claude' },
  { src: '/logos/gemini-color.svg', alt: 'Gemini' },
  { src: '/logos/perplexity-color.svg', alt: 'Perplexity' },
]

export default function HeroV2() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-6 items-center">

          {/* ── Left: Copy ─────────────────────────────────────────── */}
          <div className="max-w-xl">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111110] leading-[1.08] tracking-tight mb-5">
              Advanced SEO implementation your agency doesn&apos;t have bandwidth for.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8">
              Buyer-intent content, AI search visibility, and compounding authority. White-labeled, done for you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-white text-sm font-semibold hover:bg-[#2a2a28] transition-colors"
              >
                Start White-Label Partnership
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-3 text-sm font-medium text-[#6B6B6B] hover:text-[#111110] transition-colors"
              >
                Book Integration Call →
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white border border-[#E5E5E3] rounded-lg px-3 py-2"
                >
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#EEF2FF] flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l1.5 1.5L6.5 2" stroke="#4F7CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-xs font-medium text-[#111110] whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Orb diagram ──────────────────────────────────── */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/images/orb-diagram.png"
                alt="Where Rankett fits in your agency's SEO stack: AI Layer, Advanced SEO, Traditional SEO, and client foundation"
                width={1024}
                height={1024}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

        </div>

        {/* Platform logos */}
        <div className="mt-16 pt-8 border-t border-[#E5E5E3]">
          <p className="text-xs text-[#9B9B9B] mb-4">Your clients ranked in</p>
          <div className="flex items-center gap-5">
            {AI_PLATFORMS.map((p) => (
              <Image
                key={p.alt}
                src={p.src}
                alt={p.alt}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            ))}
            <span className="text-xs text-[#9B9B9B]">and more</span>
          </div>
        </div>

      </div>
    </section>
  )
}
