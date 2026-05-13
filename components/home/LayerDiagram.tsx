const LAYERS = [
  {
    label: 'Compounding Authority',
    badge: 'Rankett',
    desc: 'Buyer intent tracking · AI search coverage · Retrieval dominance',
    accent: true,
    dotBg: 'rgba(79, 124, 255, 0.88)',
    dotGlow: '0 0 8px rgba(79, 124, 255, 0.50)',
  },
  {
    label: 'Traditional SEO',
    badge: null,
    desc: 'Keywords · Backlinks · On-page technical',
    accent: false,
    dotBg: 'rgba(123, 148, 218, 0.75)',
    dotGlow: 'none',
  },
  {
    label: 'Directory Management',
    badge: null,
    desc: 'Citations · NAP consistency · Local listings',
    accent: false,
    dotBg: 'rgba(160, 178, 228, 0.75)',
    dotGlow: 'none',
  },
  {
    label: 'GBP',
    badge: 'Core',
    desc: 'Google Business Profile · Local presence',
    accent: false,
    dotBg: 'rgba(190, 204, 240, 0.80)',
    dotGlow: 'none',
  },
]

const RINGS = [
  {
    inset: '0%',
    background: 'rgba(79, 124, 255, 0.07)',
    border: '2px solid rgba(79, 124, 255, 0.38)',
    boxShadow: '0 0 32px rgba(79, 124, 255, 0.22), 0 0 10px rgba(79, 124, 255, 0.14)',
  },
  {
    inset: '15%',
    background: 'rgba(128, 150, 220, 0.12)',
    border: '1.5px solid rgba(128, 150, 220, 0.38)',
    boxShadow: 'none',
  },
  {
    inset: '30%',
    background: 'rgba(165, 182, 232, 0.18)',
    border: '1.5px solid rgba(165, 182, 232, 0.40)',
    boxShadow: 'none',
  },
  {
    inset: '42%',
    background: 'linear-gradient(145deg, #ffffff 0%, #edf0ff 100%)',
    border: '1.5px solid rgba(190, 204, 240, 0.55)',
    boxShadow: '0 2px 10px rgba(79, 124, 255, 0.08)',
  },
]

export default function LayerDiagram() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

      {/* Concentric rings — perspective tilt creates the 3D depth effect */}
      <div className="w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] relative flex-shrink-0">
        <div
          className="absolute inset-0"
          style={{ transform: 'perspective(700px) rotateX(12deg)' }}
        >
          {RINGS.map((ring, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                inset: ring.inset,
                background: ring.background,
                border: ring.border,
                boxShadow: ring.boxShadow,
              }}
            />
          ))}
        </div>
      </div>

      {/* Layer labels — ordered outer → inner, matching ring hierarchy */}
      <div className="flex flex-col gap-[15px] sm:pt-3">
        {LAYERS.map((layer, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div
              className="flex-shrink-0 rounded-full"
              style={{
                width: '10px',
                height: '10px',
                marginTop: '3px',
                background: layer.dotBg,
                boxShadow: layer.dotGlow,
              }}
            />
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className={`text-[13px] font-semibold leading-tight ${
                    layer.accent ? 'text-[#4F7CFF]' : 'text-[#111110]'
                  }`}
                >
                  {layer.label}
                </span>
                {layer.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      layer.accent
                        ? 'bg-[#EEF2FF] text-[#4F7CFF]'
                        : 'bg-[#F3F4F6] text-[#6B6B6B]'
                    }`}
                  >
                    {layer.badge}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#9B9B9B] mt-0.5 leading-snug max-w-[175px]">
                {layer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
