import type { Metadata } from 'next'
import { Globe } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'White-Label Portal, Rankett',
  description: 'Fully branded AI visibility dashboard for your clients. Your logo, your domain, your colors, Rankett never appears.',
  alternates: { canonical: 'https://rankett.com/features/white-label-portal/' },
}

const mockup = (
  <div className="space-y-4">
    {/* Mock browser */}
    <div className="flex items-center gap-2 pb-3 border-b border-[#E5E5E3]">
      <div className="flex gap-1">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E3]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E3]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5E3]" />
      </div>
      <div className="flex-1 h-5 rounded bg-[#FAFAF9] flex items-center px-2">
        <span className="text-[9px] text-[#9B9B9B] font-mono">aivisibility.youragency.com</span>
      </div>
    </div>
    {/* Mock dashboard header */}
    <div className="flex items-center justify-between">
      <div className="w-20 h-5 rounded bg-[#E5E5E3]" />
      <div className="text-[10px] text-[#9B9B9B]">Powered by you</div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {['AI Score', 'Mentions', 'Content Live'].map((label) => (
        <div key={label} className="p-3 rounded-lg border border-[#E5E5E3] bg-[#FAFAF9]">
          <div className="text-lg font-bold text-[#111110]">—</div>
          <div className="text-[9px] text-[#9B9B9B] mt-0.5">{label}</div>
        </div>
      ))}
    </div>
    <div className="p-3 rounded-lg border border-[#E5E5E3] text-center">
      <p className="text-[10px] text-[#9B9B9B]">Your brand · Your domain · Your client relationship</p>
      <p className="text-[10px] font-medium text-[#4F7CFF] mt-0.5">Rankett: invisible</p>
    </div>
  </div>
)

export default function WhiteLabelPortalPage() {
  return (
    <FeaturePageTemplate
      eyebrow="Branding"
      title="100% white-labeled. Your brand, start to finish."
      description="Your clients never see Rankett. They see your agency's name, your logo, your custom domain, a fully branded AI visibility dashboard that looks like you built it. Because as far as they're concerned, you did."
      Icon={Globe}
      steps={[
        {
          title: 'Set up your brand in 5 minutes',
          description: 'Upload your logo, set your brand colors, and configure your custom subdomain (aivisibility.youragency.com). No code required.',
        },
        {
          title: 'Clients log into your portal',
          description: 'Every client gets a login to their own branded dashboard. They see their AI visibility score, progress, and reports, all under your brand.',
        },
        {
          title: 'We update it automatically',
          description: 'Rankett pushes monthly score updates, delivered content, and progress tracking into the portal. Your clients stay informed; you stay in control.',
        },
      ]}
      whatYouGet={[
        'Custom subdomain (aivisibility.youragency.com)',
        'Your logo and brand colors throughout',
        'Branded client login portal',
        'White-labeled monthly reports (PDF)',
        'Rankett completely invisible to end clients',
        'Custom domain support (pro tier)',
      ]}
      mockupContent={mockup}
    />
  )
}
