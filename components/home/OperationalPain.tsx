import FadeIn from '@/components/scroll/FadeIn'

const PAIN_BULLETS = [
  'More clients → less implementation depth per client',
  'Hiring increases risk and operational overhead',
  'SEO deliverables become repetitive and thin',
  'Clients expect more authority growth each month',
  "Teams don't have bandwidth for continuous reinforcement",
]

export default function OperationalPain() {
  return (
    <section
      className="py-20 md:py-28 border-t border-[#E5E5E3] relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 80% 50%, rgba(167, 191, 255, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(196, 219, 255, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 40% 20%, rgba(221, 230, 255, 0.4) 0%, transparent 50%), #F0F4FF',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle, #6B8EFF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — pain */}
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-4">The Operational Problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight mb-8">
              Your agency grows until fulfillment becomes the bottleneck.
            </h2>
            <ul className="space-y-4">
              {PAIN_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D5D5D3] flex-shrink-0" />
                  <span className="text-[#6B6B6B] leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right — resolution */}
          <FadeIn direction="up" delay={0.12}>
            <div className="lg:pt-12">
              <div className="p-8 rounded-2xl border border-[#E5E5E3] bg-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#4F7CFF] mb-4">Then</p>
                <p className="text-xl font-semibold text-[#111110] leading-snug mb-4">
                  Rankett plugs into your existing SEO retainers as a backend authority layer.
                </p>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  Your team handles rankings. Rankett handles the implementation depth your clients need — but your team doesn&apos;t have time for. Invisible to everyone except your bottom line.
                </p>
                <div className="mt-6 pt-6 border-t border-[#E5E5E3] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4F7CFF] flex-shrink-0" />
                  <span className="text-xs text-[#6B6B6B]">No new hires. No SOPs. No overhead.</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

