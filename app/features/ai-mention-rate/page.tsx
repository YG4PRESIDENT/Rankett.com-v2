import type { Metadata } from 'next'
import { BarChart2 } from 'lucide-react'
import FeaturePageTemplate from '@/components/features/FeaturePageTemplate'

export const metadata: Metadata = {
  title: 'AI Mention Rate Tracking & Reporting | Rankett',
  description: 'Monthly AI Mention Rate: ChatGPT, Perplexity, Gemini citations. Real numbers, white-labeled reports, trending analysis.',
  alternates: { canonical: 'https://rankett.com/features/ai-mention-rate/' },
  openGraph: {
    title: 'AI Mention Rate Tracking | Rankett',
    description: 'How often is your client cited by ChatGPT, Perplexity, and Gemini? Monthly tracking with white-labeled reports for agencies.',
    url: 'https://rankett.com/features/ai-mention-rate/',
    siteName: 'Rankett',
    type: 'website',
    images: [{ url: 'https://rankett.com/og-image.svg', width: 1200, height: 630, alt: 'Rankett — AI Mention Rate Tracking' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Mention Rate Tracking | Rankett',
    description: 'Monthly ChatGPT, Perplexity, Gemini citation tracking. White-labeled reports for agencies.',
    images: ['https://rankett.com/og-image.svg'],
  },
}

const mockup = (
  <div className="space-y-4">
    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">AI Mention Rate, May 2026</p>
    {[
      { platform: 'ChatGPT', rate: 78, trend: '+12%' },
      { platform: 'Perplexity', rate: 54, trend: '+8%' },
      { platform: 'Gemini', rate: 31, trend: '+5%' },
      { platform: 'Claude', rate: 22, trend: '+3%' },
    ].map((item) => (
      <div key={item.platform} className="flex items-center gap-3">
        <span className="text-xs text-[#6B6B6B] w-20">{item.platform}</span>
        <div className="flex-1 h-2 rounded-full bg-[#FAFAF9] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#4F7CFF]"
            style={{ width: `${item.rate}%` }}
          />
        </div>
        <span className="text-xs font-mono text-[#111110] w-8">{item.rate}%</span>
        <span className="text-xs text-[#10B981] font-medium w-10">{item.trend}</span>
      </div>
    ))}
  </div>
)

export default function AIMentionRatePage() {
  return (
    <FeaturePageTemplate
      eyebrow="Analytics"
      title="Know exactly how often AI cites your clients."
      description="AI Mention Rate is the core metric of AI search visibility. Rankett queries hundreds of prompts across every major AI platform and tells you exactly how often each client gets cited, and whether that number is going up."
      Icon={BarChart2}
      steps={[
        {
          title: 'We query the platforms',
          description: 'Rankett runs hundreds of AI prompts relevant to your client\'s industry, location, and services across ChatGPT, Gemini, Perplexity, and Claude.',
        },
        {
          title: 'We score the mentions',
          description: 'Every response is analyzed for whether your client is cited, how prominently, and in what context. This becomes the AI Mention Rate.',
        },
        {
          title: 'You see the trend over time',
          description: 'Monthly reports show clients their score trending upward, proof that the work is working. White-labeled in your brand.',
        },
      ]}
      whatYouGet={[
        'Monthly AI Mention Rate score per client',
        'Platform-by-platform breakdown (ChatGPT, Gemini, Perplexity, Claude)',
        'Month-over-month trend tracking',
        'Competitor mention rate comparison',
        'White-labeled report in your agency brand',
        'Exportable PDF for client delivery',
      ]}
      mockupContent={mockup}
    />
  )
}
