import FadeIn from '@/components/scroll/FadeIn'

const STEPS = [
  {
    number: '01',
    title: 'Map buyer intent',
    description: "We scrape buyer intent signals across Google, AI platforms, and niche forums weekly to surface what your clients' buyers are actively searching for.",
  },
  {
    number: '02',
    title: 'Build the content',
    description: "Blog posts written to spec, internally linked, schema'd, and deployed directly to the client's site each month.",
  },
  {
    number: '03',
    title: 'Reinforce the foundation',
    description: 'Internal links, entity schema, and page freshness updates applied to every piece of content. Recency signals for Google and AI retrieval models.',
  },
  {
    number: '04',
    title: 'Report under your brand',
    description: 'Coverage metrics, intent shifts, and deliverable progress in white-labeled reports delivered to your clients.',
  },
]

export default function TheMechanism() {
  return (
    <section id="mechanism" className="relative overflow-hidden py-20 md:py-28 border-t border-[#E5E5E3]">
      <div aria-hidden="true" className="pointer-events-none absolute -top-28 -left-28 w-[400px] h-[400px] rounded-full bg-[#9B59FF]/[0.08] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-20 w-[280px] h-[280px] rounded-full bg-[#4F7CFF]/[0.09] blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn direction="up">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] max-w-xl leading-tight">
              The operational layer your agency never has to think about.
            </h2>
            <p className="mt-3 text-sm text-[#6B6B6B] max-w-xl leading-relaxed">
              Every deliverable is built, optimized, and deployed by Rankett without touching your team&apos;s bandwidth.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} direction="up" delay={i * 0.07}>
              <div className={`pb-8 pr-8 ${i > 0 ? 'lg:border-l border-[#E5E5E3] lg:pl-8' : ''}`}>
                <div className="border-t-2 border-[#111110] pt-5 mb-5" />
                <span className="text-[11px] font-semibold text-[#9B9B9B] tracking-widest mb-3 block">
                  {step.number}
                </span>
                <h3 className="text-sm font-semibold text-[#111110] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
