import Image from 'next/image'
import LayerDiagram from '@/components/home/LayerDiagram'

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
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column hero: copy left, layer diagram right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">

          {/* ── Left: Copy ─────────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E3] bg-white text-xs font-medium text-[#6B6B6B] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
              White-label SEO fulfillment · done-for-you
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111110] leading-[1.08] tracking-tight mb-5">
              Advanced SEO implementation your agency doesn&apos;t have bandwidth for.
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8">
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

          {/* ── Right: Layer diagram ────────────────────────────────── */}
          <div className="flex justify-center lg:justify-end">
            <div className="lg:pr-4">
              {/* Section label above diagram */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9B9B9B] mb-5">
                Where Rankett fits in your stack
              </p>
              <LayerDiagram />
            </div>
          </div>

        </div>

        {/* Platform logos — full width below both columns */}
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
