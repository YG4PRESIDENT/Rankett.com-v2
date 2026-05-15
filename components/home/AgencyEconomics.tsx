import FadeIn from '@/components/scroll/FadeIn'

const BULLETS = [
  'Add $1,000–$3,000 per client to retainer value',
  'Agencies markup Rankett 2–5× on average',
  'No fulfillment hiring required',
  'No new SOP burden on your team',
  'White-label delivery, your brand, your invoice',
  'Flat operational workflow month over month',
]

const MARKUP_EXAMPLES = [
  { tier: 'Local', cost: '$498/mo', client: '$1,500/mo', markup: '3×' },
  { tier: 'Regional', cost: '$998/mo', client: '$2,500/mo', markup: '2.5×' },
  { tier: 'National', cost: '$1,498/mo', client: '$4,500/mo', markup: '3×' },
]

export default function AgencyEconomics() {
  return (
    <section
      className="py-20 md:py-28 border-t border-[#E5E5E3]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-4">Agency Economics</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight mb-8">
              Increase client value without increasing headcount.
            </h2>
            <ul className="space-y-4">
              {BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#EEF2FF] border border-[#4F7CFF]/20 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4l2 2 4-4" stroke="#4F7CFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#6B6B6B] text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right, markup examples */}
          <FadeIn direction="up" delay={0.12}>
            <div className="lg:pt-10 space-y-4">
              <div
                className="p-6 rounded-2xl border border-[#E5E5E3] bg-white/70"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9B9B9B] mb-5">Example agency markup</p>
                <div className="space-y-1">
                  <div className="grid grid-cols-4 gap-2 pb-2 border-b border-[#E5E5E3]">
                    <span className="text-[10px] font-medium text-[#9B9B9B]">Tier</span>
                    <span className="text-[10px] font-medium text-[#9B9B9B]">Your cost</span>
                    <span className="text-[10px] font-medium text-[#9B9B9B]">To client</span>
                    <span className="text-[10px] font-medium text-[#9B9B9B] text-right">Markup</span>
                  </div>
                  {MARKUP_EXAMPLES.map((row) => (
                    <div key={row.tier} className="grid grid-cols-4 gap-2 py-3 border-b border-[#E5E5E3] last:border-0">
                      <span className="text-xs font-medium text-[#111110]">{row.tier}</span>
                      <span className="text-xs text-[#6B6B6B]">{row.cost}</span>
                      <span className="text-xs text-[#6B6B6B]">{row.client}</span>
                      <span className="text-xs font-bold text-[#4F7CFF] text-right">{row.markup}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-[#9B9B9B] px-1">
                Markup shown is illustrative. Actual margins depend on your retainer pricing.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
