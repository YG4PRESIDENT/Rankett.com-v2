import FadeIn from '@/components/scroll/FadeIn'

/*
  Concentric ring diagram showing Rankett as the outer "AI search visibility" layer
  on top of what agencies already offer. User will supply their own SVG —
  swap out the <svg> block below when ready.
*/
export default function EarthLayerDiagram() {
  return (
    <section className="py-20 md:py-28 border-t border-[#E5E5E3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Diagram */}
          <FadeIn direction="up">
            <div className="relative flex items-center justify-center">
              {/* ── Replace this SVG with the user-supplied artwork ── */}
              <svg
                viewBox="0 0 480 480"
                className="w-full max-w-[420px] mx-auto"
                aria-label="Rankett layer diagram"
              >
                {/* Outer glow ring, Rankett layer */}
                <circle cx="240" cy="240" r="225" fill="#EEF2FF" stroke="#4F7CFF" strokeWidth="2" />
                <circle cx="240" cy="240" r="225" fill="none" stroke="#4F7CFF" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />

                {/* Traditional search coverage ring */}
                <circle cx="240" cy="240" r="170" fill="#F5F5F3" stroke="#E5E5E3" strokeWidth="1.5" />

                {/* Core, what agencies already offer */}
                <circle cx="240" cy="240" r="112" fill="white" stroke="#E5E5E3" strokeWidth="1.5" />

                {/* Core labels */}
                <text x="240" y="228" textAnchor="middle" className="text-xs" fontSize="11" fill="#6B6B6B" fontFamily="inherit">What you already offer</text>
                <text x="240" y="245" textAnchor="middle" fontSize="10" fill="#9B9B9B" fontFamily="inherit">SEO · PPC · Content · Social</text>

                {/* Middle ring label */}
                <text x="240" y="330" textAnchor="middle" fontSize="10" fill="#9B9B9B" fontFamily="inherit">Traditional search coverage</text>

                {/* Outer ring, Rankett, top arc label */}
                <path id="topArc" d="M 60 200 A 180 180 0 0 1 420 200" fill="none" />
                <text fontSize="13" fontWeight="600" fill="#4F7CFF" fontFamily="inherit">
                  <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                    AI Search Visibility, Rankett
                  </textPath>
                </text>

                {/* Connector dots */}
                {[45, 135, 225, 315].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  const cx = 240 + 140 * Math.cos(rad)
                  const cy = 240 + 140 * Math.sin(rad)
                  return <circle key={i} cx={cx} cy={cy} r="4" fill="#E5E5E3" />
                })}

                {/* Rankett accent dot */}
                <circle cx="240" cy="40" r="7" fill="#4F7CFF" />
              </svg>
              {/* ── End of placeholder SVG ── */}
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">
                Where Rankett fits in your stack
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight">
                You already have the core.<br />
                We add the outer layer.
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed">
                Traditional SEO, PPC, content, your agency already handles that. But AI models like ChatGPT and Perplexity operate on a completely different layer. Rankett is the plug-in that covers that gap, without replacing anything you already do.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  { label: 'AI Mention Rate tracking', sub: 'Know exactly how often each client is cited by AI models' },
                  { label: 'Done-for-you AI content', sub: 'We create and deploy the content, you take the credit' },
                  { label: 'White-label everything', sub: 'Your brand, your domain, your client relationship' },
                ].map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="mt-1 w-4 h-4 rounded-full bg-[#EEF2FF] border border-[#4F7CFF]/30 flex-shrink-0 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF]" />
                    </span>
                    <div>
                      <span className="text-sm font-medium text-[#111110]">{item.label}</span>
                      <p className="text-sm text-[#6B6B6B]">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
