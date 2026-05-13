import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'Monthly Reports, Rankett',
  description: 'White-labeled monthly reports covering prompt/search coverage, buyer intent shifts, and progress, delivered under your brand.',
  alternates: { canonical: 'https://rankett.com/features/monthly-reports/' },
}

const mockup = (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-[#111110]">Monthly Progress Report</p>
        <p className="text-[10px] text-[#9B9B9B]">Acme Plumbing · May 2026 · Your Agency Brand</p>
      </div>
      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] font-medium">Delivered</span>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: 'Prompts Covered', value: '247', trend: '+31' },
        { label: 'Intent Shifts', value: '4', trend: 'tracked' },
        { label: 'Posts Deployed', value: '4', trend: 'this month' },
      ].map((s) => (
        <div key={s.label} className="p-3 rounded-lg border border-[#E5E5E3] bg-[#FAFAF9] text-center">
          <div className="text-lg font-bold text-[#111110]">{s.value}</div>
          <div className="text-[9px] text-[#4F7CFF] font-medium">{s.trend}</div>
          <div className="text-[9px] text-[#9B9B9B] mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>
    <div className="space-y-1.5">
      <p className="text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-wider">Buyer Intent Shifts Detected</p>
      {[
        '"water heater cost austin", volume +34% MoM',
        '"emergency plumber open sunday", new signal',
      ].map((shift) => (
        <div key={shift} className="flex items-center gap-2 text-[10px] text-[#6B6B6B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
          {shift}
        </div>
      ))}
    </div>
  </div>
)

export default function MonthlyReportsPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Reporting"
      title="Reports your clients actually want to read."
      description="Every month, Rankett generates a white-labeled progress report covering three things clients care about: where they're showing up in AI and search prompts, how buyer intent in their market is shifting, and what was built and deployed on their behalf."
      Icon={FileText}
      steps={[
        {
          title: 'Prompt & search coverage',
          description: 'We track how many relevant AI and search prompts your client now appears in, and show the month-over-month growth. Real numbers, not estimates.',
        },
        {
          title: 'Buyer intent shifts',
          description: 'Markets change. Our ongoing buyer intent scraping catches when new queries start gaining traction, and the report flags these shifts so the strategy can adapt.',
        },
        {
          title: 'Progress report',
          description: 'Every blog post, schema update, and technical deliverable completed that month is documented and attributed. Proof of work, every single month.',
        },
      ]}
      whatYouGet={[
        'Monthly prompt/search coverage count and trend',
        'Buyer intent shift detection (new and growing signals)',
        'Full list of deliverables completed that month',
        'AI Mention Rate score with platform breakdown',
        'White-labeled PDF in your agency brand',
        'Ready to send directly to your client',
      ]}
      mockupContent={mockup}
    />
  )
}
