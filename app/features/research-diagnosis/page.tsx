import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'Research & Diagnosis, Rankett',
  description: 'Query analysis across thousands of AI prompts to surface exactly what\'s driving visibility gaps for each client.',
  alternates: { canonical: 'https://rankett.com/features/research-diagnosis/' },
}

const mockup = (
  <div className="space-y-4">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">Query Intelligence Report</p>
    <div className="space-y-2">
      <p className="text-[10px] text-[#9B9B9B]">Top prompts where client is NOT cited:</p>
      {[
        '"best plumber near me [city]"',
        '"emergency plumbing service [city]"',
        '"licensed plumber for water heater"',
      ].map((q) => (
        <div key={q} className="flex items-center gap-2 p-2 rounded-lg bg-[#FEF3C7]/50 border border-[#FDE68A]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
          <span className="text-[10px] text-[#92400E] font-mono">{q}</span>
        </div>
      ))}
    </div>
    <div className="space-y-2">
      <p className="text-[10px] text-[#9B9B9B]">Prompts where competitor is cited instead:</p>
      <div className="p-2 rounded-lg bg-[#FEE2E2]/50 border border-[#FECACA]">
        <span className="text-[10px] text-[#991B1B] font-medium">Acme Competitors: 67% citation rate</span>
        <p className="text-[10px] text-[#9B9B9B] mt-0.5">vs. your client: 31%</p>
      </div>
    </div>
  </div>
)

export default function ResearchDiagnosisPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Research"
      title="Understand exactly why clients aren't showing up."
      description="The gap between a client being invisible in AI search and being cited consistently often comes down to a handful of specific prompts and content signals. Rankett's research layer finds those gaps, and our fulfillment layer closes them."
      Icon={FileText}
      steps={[
        {
          title: 'We map the query landscape',
          description: 'Rankett generates hundreds of industry- and location-specific queries that buyers actually ask AI models. We run each one and record who gets cited.',
        },
        {
          title: 'We find the gaps',
          description: 'The prompts where your client is invisible (but competitors show up) become the prioritized research findings. These drive the content strategy.',
        },
        {
          title: 'Findings become the roadmap',
          description: 'Every gap in the research becomes a deliverable. The fulfillment engine creates content designed to close each specific gap over time.',
        },
      ]}
      whatYouGet={[
        'Hundreds of industry-specific AI queries analyzed',
        'Full list of prompts where client is not cited',
        'Competitor citation rate comparison',
        'Content gap analysis mapped to deliverables',
        'Monthly re-analysis to track gap closure',
        'Exportable research report (white-labeled)',
      ]}
      mockupContent={mockup}
    />
  )
}
