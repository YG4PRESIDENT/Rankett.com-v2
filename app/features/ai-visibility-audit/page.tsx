import type { Metadata } from 'next'
import { Search } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'AI Visibility Audit for Agency Clients | Rankett',
  description: 'Full diagnosis: where clients show up in AI search, what competitors are winning. Prioritized roadmap delivered in minutes.',
  alternates: { canonical: 'https://rankett.com/features/ai-visibility-audit/' },
  openGraph: {
    title: 'AI Visibility Audit for Agencies | Rankett',
    description: 'Where does your client show up in ChatGPT, Perplexity, and Gemini? Full diagnosis and prioritized roadmap, delivered in minutes.',
    url: 'https://rankett.com/features/ai-visibility-audit/',
    siteName: 'Rankett',
    type: 'website',
    images: [{ url: 'https://rankett.com/og-image.svg', width: 1200, height: 630, alt: 'Rankett — AI Visibility Audit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Visibility Audit for Agencies | Rankett',
    description: 'Where does your client show up in ChatGPT and Perplexity? Full diagnosis in minutes.',
    images: ['https://rankett.com/og-image.svg'],
  },
}

const mockup = (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-[#6B6B6B]">Acme Roofing Co.</p>
        <p className="text-xs text-[#9B9B9B]">AI Visibility Audit · May 2026</p>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#4F7CFF]">54</div>
        <div className="text-[10px] text-[#9B9B9B]">AI Score</div>
      </div>
    </div>
    <div className="space-y-2">
      {[
        { label: 'Schema markup', status: 'Active', ok: true },
        { label: 'LLMs.txt file', status: 'Missing', ok: false },
        { label: 'AI-optimized content', status: '2 of 4 deployed', ok: null },
        { label: 'Authority mentions', status: 'Pending', ok: null },
      ].map((item) => (
        <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-[#E5E5E3] last:border-0">
          <span className="text-xs text-[#111110]">{item.label}</span>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            item.ok === true ? 'bg-[#DCFCE7] text-[#166534]' :
            item.ok === false ? 'bg-[#FEE2E2] text-[#991B1B]' :
            'bg-[#FEF3C7] text-[#92400E]'
          }`}>
            {item.status}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default function AIVisibilityAuditPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Diagnosis"
      title="A complete AI visibility audit for any client."
      description="Drop in a domain. Rankett runs a full AI visibility diagnosis, querying AI platforms, analyzing technical signals, benchmarking against competitors, and surfaces exactly what needs to be fixed and in what order."
      Icon={Search}
      steps={[
        {
          title: 'Drop in a domain',
          description: 'Enter any client domain. The audit system pulls their existing online presence and maps it against what AI platforms look for when citing businesses.',
        },
        {
          title: 'We run the diagnosis',
          description: 'Hundreds of AI queries, technical signal checks (schema, LLMs.txt, structured data), and competitor benchmarking happen automatically.',
        },
        {
          title: 'You get a ranked action plan',
          description: 'The audit produces a prioritized fix list. The highest-impact items become the fulfillment roadmap, and Rankett executes everything.',
        },
      ]}
      whatYouGet={[
        'Full AI visibility score (0–100)',
        'Platform-by-platform gap analysis',
        'Competitor visibility comparison',
        'Technical signal checklist (schema, LLMs.txt, structured data)',
        'Prioritized action plan',
        'White-labeled report for client delivery',
      ]}
      mockupContent={mockup}
    />
  )
}
