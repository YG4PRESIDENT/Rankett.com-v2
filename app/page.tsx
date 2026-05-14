import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroV2 from '@/components/home/HeroV2'
import OperationalPain from '@/components/home/OperationalPain'
import TheMechanism from '@/components/home/TheMechanism'
import AgencyAdvantages from '@/components/home/AgencyAdvantages'
import CompoundingAngle from '@/components/home/CompoundingAngle'
import AgencyEconomics from '@/components/home/AgencyEconomics'
import AgencyBenefits from '@/components/home/AgencyBenefits'
import FAQSection from '@/components/home/FAQSection'
import GradientCTA from '@/components/home/GradientCTA'

export const metadata: Metadata = {
  title: 'Rankett | White-Label SEO for Agencies | Done-For-You Fulfillment',
  description: 'Done-for-you SEO fulfillment. Buyer intent content, AI search visibility, white-labeled reports. Agencies scale without hiring.',
  alternates: { canonical: 'https://rankett.com' },
  openGraph: {
    title: 'Rankett | AI Visibility for Agencies',
    description: 'The AI search layer for your agency. White-label, done-for-you fulfillment. Takes 5 minutes.',
    url: 'https://rankett.com',
    siteName: 'Rankett',
    type: 'website',
    images: [
      {
        url: 'https://rankett.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Rankett — The AI Search Layer for Your Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rankett | AI Visibility for Agencies',
    description: 'The AI search layer for your agency. White-label, done-for-you.',
    images: ['https://rankett.com/og-image.svg'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Rankett actually do for my agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rankett is a done-for-you SEO fulfillment partner that handles the advanced implementation layer your agency doesn't have bandwidth for. Every month, Rankett researches buyer-intent queries in your client's niche, writes and deploys schema-optimized blog posts, reinforces internal linking across the site, updates existing content for page freshness, and delivers a white-labeled progress report under your brand. Your team stays focused on strategy and client relationships. Rankett handles the execution, invisibly.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long until clients see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Month 1: Technical foundation, plugin setup, buyer-intent research, schema implementation. Month 2: First buyer-intent blog cluster goes live on the client site. Month 3 onward: Content compounds as posts index, internal links accumulate topical authority, and AI platforms begin surfacing the content. Meaningful search coverage lift and AI Mention Rate improvement typically show by the 90-day mark. Results compound each month as the cluster grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Rankett fully white-labeled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Rankett is 100% ghost white-labeled. Your agency configures its logo, brand colors, and a custom subdomain in under 5 minutes. Clients see your branding on their dashboard, their monthly reports, and every deliverable. Rankett never appears anywhere in the client-facing experience. The onboarding flow, the progress dashboard, and the reports all carry your agency's identity.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the guarantee if a deliverable is late?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Full month refund, no questions asked, if we are even one minute late on any deliverable. Agencies hold final approval and rejection rights on every piece of content before it goes live. If a deliverable doesn't meet your standard, we fix it or you don't pay. This isn't a standard SLA clause, it's how we operate.",
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="relative">
        <HeroV2 />
        <OperationalPain />
        <AgencyAdvantages />
        <TheMechanism />
        <CompoundingAngle />
        <AgencyEconomics />
        <AgencyBenefits />
        <FAQSection />
        <GradientCTA />
      </main>
      <Footer />
    </>
  )
}
