import Image from 'next/image'

const CALENDLY = 'https://calendly.com/rankett/30min'

const TRUST_ITEMS = [
  '5-minute setup',
  'WordPress plugin',
  'Dedicated success manager',
  'White-label reporting',
]

const AI_PLATFORMS = [
  { src: '/logos/chatgpt.svg', alt: 'ChatGPT' },
  { src: '/logos/gemini.svg', alt: 'Gemini' },
  { src: '/logos/perplexity.svg', alt: 'Perplexity' },
]

export default function HeroV2() {
  return (
    <section
      className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 20% 50%, rgba(167, 191, 255, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(196, 219, 255, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, rgba(221, 230, 255, 0.4) 0%, transparent 50%), #F0F4FF',
      }}
    >
      {/* Dot matrix texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #6B8EFF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E3] bg-white text-xs font-medium text-[#6B6B6B] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
            White-label SEO fulfillment · done-for-you
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111110] leading-[1.08] tracking-tight mb-5">
            Advanced SEO implementation<br className="hidden sm:block" />
            your agency doesn&apos;t have<br className="hidden sm:block" />
            bandwidth for.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-2xl mb-8">
            White-label authority reinforcement, buyer-intent content coverage, and ongoing search intelligence for agencies managing growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-10">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-white text-sm font-semibold hover:bg-[#2a2a28] transition-colors"
            >
              Book Integration Call
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#mechanism"
              className="inline-flex items-center gap-1 px-4 py-3 text-sm font-medium text-[#6B6B6B] hover:text-[#111110] transition-colors"
            >
              See how it works →
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {TRUST_ITEMS.map((item, i) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-[#9B9B9B]">
                {i > 0 && <span className="w-px h-3 bg-[#E5E5E3]" />}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="#4F7CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
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
                className="w-6 h-6 opacity-50 grayscale"
              />
            ))}
            <span className="text-xs text-[#9B9B9B]">and more</span>
          </div>
        </div>
      </div>
    </section>
  )
}
