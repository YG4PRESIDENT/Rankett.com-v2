'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, ChevronDown, BarChart2, FileText, Search, Pen, Phone } from 'lucide-react'

const CALENDLY = 'https://calendly.com/rankett/30min'

const FEATURES = [
  {
    icon: BarChart2,
    name: 'Buyer Intent Blog Cluster',
    description: 'Monthly blog clusters built from real buyer signals.',
    href: '/features/buyer-intent-blog/',
  },
  {
    icon: FileText,
    name: 'Monthly Reports',
    description: 'White-labeled reports delivered under your brand.',
    href: '/features/monthly-reports/',
  },
  {
    icon: Search,
    name: 'Market Buyer Intent Tracking',
    description: 'Ongoing buyer intent scraping across your niche and market.',
    href: '/features/market-buyer-intent/',
  },
  {
    icon: Pen,
    name: 'Content Creation',
    description: 'Schema-optimized posts deployed directly to client sites.',
    href: '/features/content-creation/',
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setFeaturesOpen(true)
  }
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setFeaturesOpen(false), 120)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Desktop nav ───────────────────────────────────────────── */}
      <div
        className={`hidden md:flex justify-center transition-all duration-350 ease-in-out ${
          scrolled ? 'pt-3 px-4' : 'pt-0 px-0'
        }`}
      >
        {/* Pill / bar container */}
        <div
          className={`w-full transition-all duration-350 ease-in-out ${
            scrolled
              ? 'backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/[0.09]'
              : ''
          }`}
          style={{
            maxWidth: scrolled ? '1152px' : '100vw',
            borderRadius: scrolled ? '20px' : '0px',
            backgroundColor: scrolled
              ? 'rgba(15, 23, 65, 0.96)'
              : 'transparent',
            transition: 'max-width 350ms ease-in-out, border-radius 350ms ease-in-out, background-color 350ms ease-in-out, box-shadow 350ms ease-in-out',
          }}
        >
          <div
            className={`flex items-center justify-between transition-all duration-350 ${
              scrolled ? 'h-20 px-6' : 'h-24 px-8'
            }`}
            style={{ maxWidth: scrolled ? 'none' : '72rem', margin: '0 auto' }}
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/Rankett_Logo.png"
                alt="Rankett"
                width={240}
                height={84}
                className={`w-auto h-[84px] transition-all duration-300 ${scrolled ? 'brightness-0 invert' : ''}`}
                priority
              />
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-6">
              {/* Features dropdown */}
              <div
                ref={featuresRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={`flex items-center gap-1 text-sm transition-colors duration-150 ${
                    scrolled
                      ? 'text-white/55 hover:text-white'
                      : 'text-[#6B6B6B] hover:text-[#111110]'
                  }`}
                >
                  Features
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-150 ${
                      featuresOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {featuresOpen && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] rounded-2xl shadow-xl p-5 ${
                      scrolled
                        ? 'bg-[#0f1741] border border-white/[0.10]'
                        : 'bg-white border border-[#E5E5E3]'
                    }`}
                    style={{ boxShadow: scrolled ? undefined : '0 8px 40px rgba(79,124,255,0.10), 0 2px 8px rgba(0,0,0,0.06)' }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="grid grid-cols-[1fr_1fr_200px] gap-4">

                      {/* Left 2 cols — feature items */}
                      <div className="col-span-2 grid grid-cols-2 gap-1">
                        {FEATURES.map((f) => {
                          const Icon = f.icon
                          return (
                            <Link
                              key={f.href}
                              href={f.href}
                              className={`group flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-150 ${
                                scrolled ? 'hover:bg-white/[0.06]' : 'hover:bg-[#F0F5FF]'
                              }`}
                            >
                              <div className="w-11 h-11 rounded-xl bg-[#4F7CFF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#3D6AEE] transition-colors duration-150 shadow-sm">
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className={`text-sm font-semibold leading-tight ${scrolled ? 'text-white/90' : 'text-[#111110]'}`}>
                                  {f.name}
                                </p>
                                <p className={`text-xs mt-0.5 leading-snug ${scrolled ? 'text-white/40' : 'text-[#6B6B6B]'}`}>
                                  {f.description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}

                        {/* View all features — bottom of left grid */}
                        <div className={`col-span-2 pt-3 mt-1 border-t ${scrolled ? 'border-white/[0.08]' : 'border-[#E5E5E3]'}`}>
                          <Link
                            href="/features/"
                            className={`text-xs font-medium transition-colors ${
                              scrolled ? 'text-white/40 hover:text-white/70' : 'text-[#6B6B6B] hover:text-[#111110]'
                            }`}
                          >
                            View all features →
                          </Link>
                        </div>
                      </div>

                      {/* Right col — CTA card */}
                      <div
                        className={`rounded-xl p-4 flex flex-col justify-between ${
                          scrolled
                            ? 'bg-white/[0.07] border border-white/[0.10]'
                            : 'bg-[#EEF2FF] border border-[#C7D4FF]/60'
                        }`}
                      >
                        <div>
                          <p className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${scrolled ? 'text-[#7B9FFF]' : 'text-[#4F7CFF]'}`}>
                            Get started
                          </p>
                          <p className={`text-sm font-bold leading-snug mb-1.5 ${scrolled ? 'text-white/90' : 'text-[#111110]'}`}>
                            Ready to add the AI layer?
                          </p>
                          <p className={`text-xs leading-relaxed ${scrolled ? 'text-white/40' : 'text-[#6B6B6B]'}`}>
                            Takes 5 minutes. No headcount added.
                          </p>
                        </div>
                        <a
                          href={CALENDLY}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-[#4F7CFF] text-white text-xs font-semibold hover:bg-[#3D6AEE] transition-colors"
                        >
                          Book a Call
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/blog/"
                className={`text-sm transition-colors duration-150 ${
                  scrolled ? 'text-white/55 hover:text-white' : 'text-[#6B6B6B] hover:text-[#111110]'
                }`}
              >
                Blog
              </Link>
              <Link
                href="/faq/"
                className={`text-sm transition-colors duration-150 ${
                  scrolled ? 'text-white/55 hover:text-white' : 'text-[#6B6B6B] hover:text-[#111110]'
                }`}
              >
                FAQ
              </Link>
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+18578473152"
                className={`flex items-center gap-1.5 text-sm transition-colors duration-150 ${
                  scrolled
                    ? 'text-white/50 hover:text-white/85'
                    : 'text-[#6B6B6B] hover:text-[#111110]'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                +1 857-847-3152
              </a>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  scrolled
                    ? 'bg-white text-[#0D0D0C] hover:bg-white/90 shadow-sm'
                    : 'bg-[#111110] text-white hover:bg-[#2a2a28]'
                }`}
              >
                Book a Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile nav (stays full-width bar, no pill) ─────────────── */}
      <div
        className={`md:hidden transition-all duration-200 ${
          scrolled
            ? 'bg-[#0f1741]/96 backdrop-blur-md border-b border-white/[0.10]'
            : ''
        }`}
      >
        <div className="flex items-center justify-between h-20 px-4">
          <Link href="/">
            <Image
              src="/images/Rankett_Logo.png"
              alt="Rankett"
              width={240}
              height={84}
              className={`w-auto h-16 transition-all duration-200 ${scrolled ? 'brightness-0 invert' : ''}`}
              priority
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 transition-colors ${
              scrolled ? 'text-white/60 hover:text-white' : 'text-[#6B6B6B] hover:text-[#111110]'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu dropdown ───────────────────────────────────── */}
      {mobileOpen && (
        <div
          className={`md:hidden px-4 pb-6 pt-3 max-h-[80vh] overflow-y-auto ${
            scrolled
              ? 'bg-[#0f1741] border-b border-white/[0.10]'
              : 'bg-white border-b border-[#E5E5E3]'
          }`}
        >
          <div className={`mb-3 pb-3 border-b ${scrolled ? 'border-white/[0.08]' : 'border-[#E5E5E3]'}`}>
            <p className={`text-[10px] font-semibold uppercase tracking-wider mb-2 ${scrolled ? 'text-white/30' : 'text-[#6B6B6B]'}`}>
              Features
            </p>
            <div className="space-y-1">
              {FEATURES.map((f) => {
                const Icon = f.icon
                return (
                  <Link
                    key={f.href}
                    href={f.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 py-2"
                  >
                    <Icon className={`w-4 h-4 ${scrolled ? 'text-white/40' : 'text-[#6B6B6B]'}`} />
                    <span className={`text-sm ${scrolled ? 'text-white/70' : 'text-[#111110]'}`}>{f.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <nav className="flex flex-col gap-1 mb-4">
            {[
              { label: 'Blog', href: '/blog/' },
              { label: 'FAQ', href: '/faq/' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2.5 text-sm border-b last:border-0 ${
                  scrolled
                    ? 'text-white/70 border-white/[0.08]'
                    : 'text-[#111110] border-[#E5E5E3]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl bg-[#4F7CFF] text-white hover:bg-[#3D6AEE] transition-colors"
            >
              Book a Demo
            </a>
            <a
              href="tel:+18578473152"
              className={`flex items-center justify-center gap-2 py-3 text-sm font-semibold border rounded-xl transition-colors ${
                scrolled
                  ? 'text-white/70 border-white/[0.10] hover:bg-white/[0.06]'
                  : 'text-[#111110] border-[#E5E5E3] hover:bg-[#FAFAF9]'
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Us · +1 857-847-3152
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
