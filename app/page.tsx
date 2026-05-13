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
  title: 'Rankett — Advanced Search Coverage for Agencies | SEO + AI Search',
  description: 'Add advanced search coverage to your agency\'s offering. Buyer intent blog clusters, market tracking, white-label reporting — done-for-you. Takes 5 minutes to start.',
  alternates: { canonical: 'https://rankett.com' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is Rankett different from traditional SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rankett adds an advanced search coverage layer on top of what your agency already does — buyer intent blog clusters, AI search optimization, and ongoing market tracking. It bolsters your existing SEO offering rather than replacing it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long until clients see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 days average for meaningful coverage and AI Mention Rate lift. Technical layer in weeks 1–4, buyer intent content live in month 2, compounding growth from month 3 onward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fully white-label Rankett?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — completely. Your logo, your domain, your colors. Clients see your platform. Rankett is invisible. Setup takes 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the guarantee if deliverables are late?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full month refund if we are even one minute late. Agencies have final approval and rejection rights on every deliverable.',
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
