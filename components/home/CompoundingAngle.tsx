import FadeIn from '@/components/scroll/FadeIn'

const COVERAGE_POINTS = [
  'More buyer-intent pages indexed each month',
  'More internal reinforcement across the site',
  'More niche and entity relevance signals',
  'More long-tail market coverage',
  'More AI retrieval opportunities',
]

export default function CompoundingAngle() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 border-t border-[#E5E5E3]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 -right-28 w-[360px] h-[360px] rounded-full bg-[#4F7CFF]/[0.09] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-28 w-[320px] h-[320px] rounded-full bg-[#9B59FF]/[0.08] blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left, copy */}
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-4">The Compounding Effect</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight mb-5">
              Search coverage compounds over time.
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">
              SEO is no longer about ranking a few pages. It&apos;s about accumulating market surface area, the total volume of queries, topics, and buyer intent signals your clients show up for. Every month Rankett runs, that surface gets wider.
            </p>
            <ul className="space-y-3 mb-8">
              {COVERAGE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EEF2FF] border border-[#4F7CFF]/20 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4l2 2 4-4" stroke="#4F7CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-[#6B6B6B]">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[#111110]">
              90-day average for meaningful coverage lift. Compounds from there.
            </p>
          </FadeIn>

          {/* Right, visual placeholder */}
          <FadeIn direction="up" delay={0.1}>
            {/*
              ── Replace this block with user-supplied compounding chart artwork ──
              The section is sized and padded to receive a full-bleed SVG or image.
              Recommended dimensions: ~560 × 380px.
            */}
            <div
              className="relative rounded-2xl border border-[#E5E5E3] overflow-hidden bg-white/60"
              style={{ minHeight: 340 }}
            >
              {/* Placeholder bar chart */}
              <div className="absolute inset-0 flex items-end gap-2 p-8 pb-14">
                {[
                  { h: 28, label: 'Mo 1', items: 'Core pages' },
                  { h: 40, label: 'Mo 2', items: '' },
                  { h: 52, label: 'Mo 3', items: 'Buyer intent' },
                  { h: 63, label: 'Mo 4', items: '' },
                  { h: 74, label: 'Mo 5', items: '' },
                  { h: 88, label: 'Mo 6', items: 'Long-tail' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 justify-end h-full">
                    <div
                      className="w-full rounded-t-sm"
                      style={{
                        height: `${bar.h}%`,
                        background: `linear-gradient(to top, #4F7CFF, #4F7CFF${Math.round(40 + i * 12).toString(16)})`,
                        opacity: 0.15 + i * 0.13,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Month labels */}
              <div className="absolute bottom-4 left-0 right-0 flex gap-2 px-8">
                {['Mo 1', 'Mo 2', 'Mo 3', 'Mo 4', 'Mo 5', 'Mo 6'].map((m) => (
                  <div key={m} className="flex-1 text-center">
                    <span className="text-[9px] text-[#9B9B9B]">{m}</span>
                  </div>
                ))}
              </div>

              {/* Label */}
              <div className="absolute top-5 left-6 right-6">
                <p className="text-xs font-semibold text-[#111110]">Market coverage surface area</p>
                <p className="text-[10px] text-[#9B9B9B] mt-0.5">Growing month over month, automatically</p>
              </div>

              {/* Growth callout */}
              <div className="absolute top-5 right-6 px-2.5 py-1 rounded-full bg-[#DCFCE7] border border-[#BBF7D0]">
                <span className="text-[10px] font-semibold text-[#166534]">Compounds ↑</span>
              </div>
            </div>
            {/* ── End placeholder ── */}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
