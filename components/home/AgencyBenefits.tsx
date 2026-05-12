import FadeIn from '@/components/scroll/FadeIn'
import { Plug, UserCheck, Package, FileText, LayoutDashboard } from 'lucide-react'

const BENEFITS = [
  {
    icon: Plug,
    title: 'Seamless Plugin',
    description: 'Install once, connect to any client website — WordPress, custom, or anything else. Zero ongoing credential management. Content deploys automatically.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Success Manager',
    description: 'Every agency partner gets a dedicated point of contact. Onboarding, fulfillment questions, escalations — one person, always responsive.',
  },
  {
    icon: Package,
    title: 'White-Label Fulfillment',
    description: 'Every deliverable ships under your brand. Clients never see Rankett. Your agency gets the credit — we handle the execution.',
  },
  {
    icon: FileText,
    title: 'White-Label Reporting',
    description: 'Monthly progress reports in your agency branding. Coverage metrics, intent shifts, and deliverables completed — ready to forward to your client.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Access',
    description: 'Track client coverage, deployment status, and fulfillment progress. Support infrastructure for your team — not another thing to manage.',
  },
]

export default function AgencyBenefits() {
  return (
    <section
      className="py-20 md:py-28 border-t border-[#E5E5E3] relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(167, 191, 255, 0.50) 0%, transparent 60%), radial-gradient(ellipse at 15% 80%, rgba(196, 219, 255, 0.30) 0%, transparent 55%), radial-gradient(ellipse at 85% 60%, rgba(221, 230, 255, 0.35) 0%, transparent 50%), #F0F4FF',
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
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
          {/* Left */}
          <FadeIn direction="up">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-4">Integration</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight">
              Built to plug straight into your agency.
            </h2>
            <p className="mt-4 text-[#6B6B6B] leading-relaxed">
              Rankett isn&apos;t another vendor your team has to manage. It&apos;s a fulfillment layer that runs behind the scenes — under your brand, inside your workflow, on your timeline.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'White-label everything in under 5 minutes',
                'No tech setup required on your end',
                "Full month refund if we're even one minute late",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                  <span className="w-1 h-1 rounded-full bg-[#4F7CFF] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right — 5 benefit cards, 2-col grid, Dashboard spans full width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon
              const isLast = i === BENEFITS.length - 1
              return (
                <FadeIn key={b.title} direction="up" delay={i * 0.07} className={isLast ? 'sm:col-span-2' : ''}>
                  <div className="flex items-start gap-4 p-5 rounded-xl border border-[#E5E5E3] bg-white h-full">
                    <div className="w-9 h-9 rounded-xl bg-[#FAFAF9] border border-[#E5E5E3] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#6B6B6B]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111110] mb-1">{b.title}</h3>
                      <p className="text-sm text-[#6B6B6B] leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
