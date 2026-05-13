import FadeIn from '@/components/scroll/FadeIn'

const STEPS = [
  {
    number: '01',
    title: 'White-label in 5 minutes',
    description: 'Set up your branded AI visibility portal. Your logo, your colors, your domain. Clients see your platform, Rankett never appears.',
  },
  {
    number: '02',
    title: 'Run the AI visibility audit',
    description: 'Drop in a client domain. Our system queries hundreds of AI prompts and surfaces exactly where they rank, where competitors dominate, and what needs fixing.',
  },
  {
    number: '03',
    title: 'We handle fulfillment',
    description: 'Schema markup, AI-optimized blog posts, FAQ content, LLMs.txt, authority placements, Rankett builds and deploys everything. You close the deal; we do the work.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110]">
              Seamless integration.<br className="hidden sm:block" />Serious results.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} direction="up" delay={i * 0.1}>
              <div className="relative">
                {/* Connector line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%+12px)] right-0 w-full h-px bg-[#E5E5E3] -translate-x-6" />
                )}
                <div className="flex flex-col gap-4">
                  <span className="text-3xl font-bold text-[#4F7CFF] font-mono leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#111110] mb-1.5">{step.title}</h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
