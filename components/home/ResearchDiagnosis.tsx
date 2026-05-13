import FadeIn from '@/components/scroll/FadeIn'
import Image from 'next/image'

const PLATFORMS = [
  { src: '/logos/chatgpt.svg', alt: 'ChatGPT', score: 78, color: '#10B981' },
  { src: '/logos/perplexity.svg', alt: 'Perplexity', score: 54, color: '#F59E0B' },
  { src: '/logos/gemini.svg', alt: 'Gemini', score: 31, color: '#EF4444' },
]

export default function ResearchDiagnosis() {
  return (
    <section className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <FadeIn direction="up">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">
                Research &amp; Diagnosis
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight">
                Run a complete AI visibility audit in minutes.
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed">
                Drop in a client domain. Rankett queries hundreds of AI prompts across every major platform, surfaces where they show up, where they're invisible, and exactly what needs fixing. This is the diagnosis your clients have never seen before.
              </p>
              <ul className="space-y-2.5">
                {[
                  'AI Mention Rate across ChatGPT, Gemini, Perplexity',
                  'Competitor gap analysis, who\'s beating them and why',
                  'Technical SEO signals (schema, LLMs.txt, authority)',
                  'Exportable report, white-labeled in your brand',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#6B6B6B]">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#EEF2FF] border border-[#4F7CFF]/30 flex-shrink-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Mock UI */}
          <FadeIn direction="up" delay={0.1}>
            <div className="rounded-2xl border border-[#E5E5E3] bg-white shadow-sm overflow-hidden">
              {/* Mock browser bar */}
              <div className="px-4 py-3 border-b border-[#E5E5E3] bg-[#FAFAF9] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#E5E5E3]" />
                  <span className="w-3 h-3 rounded-full bg-[#E5E5E3]" />
                  <span className="w-3 h-3 rounded-full bg-[#E5E5E3]" />
                </div>
                <div className="flex-1 mx-3 h-6 rounded bg-[#E5E5E3]/60 flex items-center px-3">
                  <span className="text-[10px] text-[#9B9B9B] font-mono">acme-plumbing.aivisibility.youragency.com</span>
                </div>
              </div>

              {/* Mock dashboard */}
              <div className="p-5 space-y-5">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#6B6B6B] font-medium">Acme Plumbing Co.</p>
                    <p className="text-xs text-[#9B9B9B]">AI Visibility Report · May 2026</p>
                  </div>
                  {/* Score gauge */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14">
                      <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                        <circle cx="28" cy="28" r="22" fill="none" stroke="#E5E5E3" strokeWidth="4" />
                        <circle
                          cx="28" cy="28" r="22" fill="none"
                          stroke="#4F7CFF" strokeWidth="4"
                          strokeDasharray={`${(54 / 100) * 138} 138`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#111110]">54</span>
                    </div>
                    <span className="text-[10px] text-[#9B9B9B] mt-0.5">AI Score</span>
                  </div>
                </div>

                {/* Platform breakdown */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">Platform Breakdown</p>
                  {PLATFORMS.map((p) => (
                    <div key={p.alt} className="flex items-center gap-3">
                      <Image src={p.src} alt={p.alt} width={16} height={16} className="w-4 h-4 opacity-70" />
                      <span className="text-xs text-[#6B6B6B] w-20">{p.alt}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-[#E5E5E3] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${p.score}%`, backgroundColor: p.color }}
                        />
                      </div>
                      <span className="text-xs font-mono text-[#111110] w-7 text-right">{p.score}%</span>
                    </div>
                  ))}
                </div>

                {/* Status chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10px] font-medium">3 content gaps found</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] text-[10px] font-medium">Schema: active</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FEE2E2] text-[#991B1B] text-[10px] font-medium">LLMs.txt: missing</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
