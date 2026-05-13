const LAYERS = [
  {
    label: 'Advanced SEO',
    badge: 'Rankett',
    desc: 'Buyer intent coverage · AI search · Compounding authority',
    accent: true,
    dotBg: 'rgba(79, 124, 255, 0.90)',
    dotGlow: '0 0 6px rgba(79, 124, 255, 0.50)',
  },
  {
    label: 'Traditional SEO',
    badge: null,
    desc: 'Rankings · Backlinks · Keyword content',
    accent: false,
    dotBg: 'rgba(123, 148, 218, 0.70)',
    dotGlow: 'none',
  },
  {
    label: 'Technical foundation',
    badge: null,
    desc: 'Site architecture · On-page · Crawlability',
    accent: false,
    dotBg: 'rgba(190, 204, 240, 0.80)',
    dotGlow: 'none',
  },
]

const RINGS = [
  {
    inset: '0%',
    background: 'rgba(79, 124, 255, 0.07)',
    border: '2px solid rgba(79, 124, 255, 0.40)',
    boxShadow: '0 0 28px rgba(79, 124, 255, 0.20), 0 0 8px rgba(79, 124, 255, 0.12)',
  },
  {
    inset: '20%',
    background: 'rgba(128, 150, 220, 0.12)',
    border: '1.5px solid rgba(128, 150, 220, 0.36)',
    boxShadow: 'none',
  },
  {
    inset: '40%',
    background: 'linear-gradient(145deg, #ffffff 0%, #edf0ff 100%)',
    border: '1.5px solid rgba(190, 204, 240, 0.55)',
    boxShadow: '0 2px 8px rgba(79, 124, 255, 0.06)',
  },
]

export default function LayerDiagram() {
  return (
    <div className="flex flex-col items-center gap-7">

      {/* Concentric rings, flat, centered, large */}
      <div className="relative" style={{ width: '220px', height: '220px' }}>
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

      {/* Label list, sits cleanly below the rings */}
      <div className="flex flex-col gap-3 w-full max-w-[280px]">
        {LAYERS.map((layer, i) => (
          <div key={i} className="flex items-start gap-2">
            <div
              className="flex-shrink-0 rounded-full mt-[3px]"
              style={{
                width: '8px',
                height: '8px',
                background: layer.dotBg,
                boxShadow: layer.dotGlow,
              }}
            />
            <div>
              <div className="flex items-center gap-1 flex-wrap">
                <span className={`text-[12px] font-semibold leading-tight ${layer.accent ? 'text-[#4F7CFF]' : 'text-[#111110]'}`}>
                  {layer.label}
                </span>
                {layer.badge && (
                  <span className={`text-[9px] px-1 py-0.5 rounded-full font-semibold ${
                    layer.accent ? 'bg-[#EEF2FF] text-[#4F7CFF]' : 'bg-[#F3F4F6] text-[#6B6B6B]'
                  }`}>
                    {layer.badge}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-[#9B9B9B] mt-0.5 leading-snug">
                {layer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
