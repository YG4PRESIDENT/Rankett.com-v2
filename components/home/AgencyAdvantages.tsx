import { Plug, Users, LayoutDashboard } from 'lucide-react'
import FadeIn from '@/components/scroll/FadeIn'

const ADVANTAGES = [
  {
    icon: Plug,
    title: 'Seamless WordPress Plugin',
    body: 'Install once. Rankett pushes all content, schema, and updates directly — no credentials, no admin access needed.',
  },
  {
    icon: Users,
    title: 'Dedicated Success Manager',
    body: 'A real human who knows your clients\' accounts. Not a ticket queue — a named contact who is accountable to your results.',
  },
  {
    icon: LayoutDashboard,
    title: 'White-Label Dashboard',
    body: 'Run analyses, view delivery progress, and show clients their visibility score — all under your brand. Rankett is invisible.',
  },
]

export default function AgencyAdvantages() {
  return (
    <section id="agency-advantages" className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">For Your Agency</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] max-w-xl leading-tight">
              Built for agencies that want to add the service, not the overhead.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeIn key={item.title} direction="up" delay={i * 0.07}>
                <div className="p-6 rounded-xl border border-[#E5E5E3] bg-white hover:border-[#4F7CFF]/30 hover:shadow-sm transition-all duration-200 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-[#FAFAF9] border border-[#E5E5E3] flex items-center justify-center mb-5 group-hover:bg-[#EEF2FF] group-hover:border-[#4F7CFF]/20 transition-colors">
                    <Icon className="w-5 h-5 text-[#6B6B6B]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#111110] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
