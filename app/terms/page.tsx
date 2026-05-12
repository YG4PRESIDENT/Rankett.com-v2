import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Rankett',
  alternates: { canonical: 'https://rankett.com/terms/' },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-[#111110] mb-6">Terms of Service</h1>
          <p className="text-[#6B6B6B] mb-4">Last updated: May 2026</p>
          <div className="text-[#6B6B6B] space-y-4 text-sm leading-relaxed">
            <p>By accessing or using Rankett&apos;s platform and website, you agree to these Terms of Service. Please read them carefully.</p>
            <h2 className="text-base font-semibold text-[#111110] mt-6">Use of Services</h2>
            <p>Rankett provides a white-label AI visibility platform for digital marketing agencies. You agree to use the platform only for lawful purposes and in accordance with these terms.</p>
            <h2 className="text-base font-semibold text-[#111110] mt-6">Partner Obligations</h2>
            <p>As a Rankett partner agency, you are responsible for your client relationships and how you represent our services. Rankett content deliverables require your agency&apos;s review and approval before client delivery.</p>
            <h2 className="text-base font-semibold text-[#111110] mt-6">Contact</h2>
            <p>Questions? Email <a href="mailto:info@rankett.com" className="text-[#4F7CFF]">info@rankett.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
