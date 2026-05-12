import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Rankett',
  alternates: { canonical: 'https://rankett.com/privacy/' },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-[#111110] mb-6">Privacy Policy</h1>
          <p className="text-[#6B6B6B] mb-4">Last updated: May 2026</p>
          <div className="prose text-[#6B6B6B] space-y-4 text-sm leading-relaxed">
            <p>Rankett (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use rankett.com or our platform at app.rankett.com.</p>
            <h2 className="text-base font-semibold text-[#111110] mt-6">Information We Collect</h2>
            <p>We collect information you provide directly (name, email, agency name) when signing up or booking a call. We also collect usage data through analytics to improve our platform.</p>
            <h2 className="text-base font-semibold text-[#111110] mt-6">How We Use Your Information</h2>
            <p>We use your information to provide our services, communicate with you about your account, and improve the platform. We do not sell your data to third parties.</p>
            <h2 className="text-base font-semibold text-[#111110] mt-6">Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:info@rankett.com" className="text-[#4F7CFF]">info@rankett.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
