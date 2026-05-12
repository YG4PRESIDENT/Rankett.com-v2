import Link from 'next/link'
import { ArrowLeft, ArrowRight, LucideIcon } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FadeIn from '@/components/scroll/FadeIn'

const CALENDLY = 'https://calendly.com/rankett/30min'

interface Step {
  title: string
  description: string
}

interface FeaturePageProps {
  eyebrow: string
  title: string
  description: string
  Icon: LucideIcon
  steps: Step[]
  whatYouGet: string[]
  mockupContent?: React.ReactNode
}

export default function FeaturePageTemplate({
  eyebrow,
  title,
  description,
  Icon,
  steps,
  whatYouGet,
  mockupContent,
}: FeaturePageProps) {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section
          className="py-16 md:py-24 border-b border-[#c5d4ff]/40 relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(167, 191, 255, 0.45) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(196, 219, 255, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 60% 80%, rgba(221, 230, 255, 0.4) 0%, transparent 50%), #F0F4FF',
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #6B8EFF 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <Link href="/features/" className="inline-flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#111110] mb-8">
                <ArrowLeft className="w-3.5 h-3.5" />
                All features
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5E5E3] bg-[#FAFAF9] text-xs font-medium text-[#6B6B6B] mb-4">
                    <Icon className="w-3.5 h-3.5" />
                    {eyebrow}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111110] leading-tight mb-4">
                    {title}
                  </h1>
                  <p className="text-[#6B6B6B] text-lg leading-relaxed mb-7">
                    {description}
                  </p>
                  <a
                    href={CALENDLY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-white text-sm font-semibold hover:bg-[#2a2a28] transition-colors"
                  >
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Mockup / visual */}
                {mockupContent && (
                  <div className="rounded-2xl border border-[#E5E5E3] bg-white shadow-sm p-6 overflow-hidden">
                    {mockupContent}
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 md:py-20 border-b border-[#E5E5E3]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold text-[#111110] mb-10">How it works</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <FadeIn key={step.title} direction="up" delay={i * 0.08}>
                  <div>
                    <span className="text-2xl font-bold text-[#4F7CFF] font-mono">0{i + 1}</span>
                    <h3 className="text-base font-semibold text-[#111110] mt-3 mb-1.5">{step.title}</h3>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="py-16 md:py-20 border-b border-[#E5E5E3]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold text-[#111110] mb-8">What&apos;s included</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-4 rounded-xl border border-[#E5E5E3] bg-white">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#EEF2FF] border border-[#4F7CFF]/30 flex-shrink-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                    </span>
                    <span className="text-sm text-[#111110]">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <div className="rounded-2xl border border-[#4F7CFF]/20 bg-[#EEF2FF] p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#111110] mb-3">
                  Ready to add the AI layer?
                </h2>
                <p className="text-[#6B6B6B] mb-6 max-w-sm mx-auto">
                  Book a 30-minute call. We&apos;ll run a live audit on one of your existing clients.
                </p>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111110] text-white text-sm font-semibold hover:bg-[#2a2a28] transition-colors"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
