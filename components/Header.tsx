'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight, ChevronDown, BarChart2, FileText, Search, Pen, Globe, CheckCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const CALENDLY = 'https://calendly.com/rankett/30min'

const FEATURES = [
  {
    icon: BarChart2,
    name: 'Buyer Intent Blog Cluster',
    description: 'Compounding search coverage targeting real buyer intent across your niche.',
    href: '/features/buyer-intent-blog/',
  },
  {
    icon: FileText,
    name: 'Monthly Reports',
    description: 'Prompt coverage, buyer intent shifts, and progress — white-labeled.',
    href: '/features/monthly-reports/',
  },
  {
    icon: Search,
    name: 'Market Buyer Intent Tracking',
    description: 'Ongoing scraping of buyer intent across your niche and location.',
    href: '/features/market-buyer-intent/',
  },
  {
    icon: Pen,
    name: 'Content Creation',
    description: 'Page freshness, compounding internal linking, and baked-in blog schema.',
    href: '/features/content-creation/',
  },
  {
    icon: Globe,
    name: 'White-Label Portal',
    description: 'Your brand, your domain. Clients see your platform — Rankett is invisible.',
    href: '/features/white-label-portal/',
  },
  {
    icon: CheckCircle,
    name: 'Done-For-You Fulfillment',
    description: 'Schema, FAQ, LLMs.txt, authority placements — built and deployed.',
    href: '/features/done-for-you-fulfillment/',
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-[#E5E5E3]'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Rankett_Logo.png"
              alt="Rankett"
              width={110}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Features dropdown trigger */}
            <div
              ref={featuresRef}
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="flex items-center gap-1 text-sm text-[#6B6B6B] hover:text-[#111110] transition-colors duration-150">
                Features
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${featuresOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown panel */}
              {featuresOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-2xl border border-[#E5E5E3] shadow-lg p-4 grid grid-cols-2 gap-1"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {FEATURES.map((f) => {
                    const Icon = f.icon
                    return (
                      <Link
                        key={f.href}
                        href={f.href}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#FAFAF9] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#FAFAF9] border border-[#E5E5E3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#EEF2FF] group-hover:border-[#4F7CFF]/20 transition-colors mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-[#6B6B6B] group-hover:text-[#4F7CFF] transition-colors" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#111110] leading-tight">{f.name}</p>
                          <p className="text-[11px] text-[#6B6B6B] mt-0.5 leading-snug">{f.description}</p>
                        </div>
                      </Link>
                    )
                  })}

                  {/* Bottom bar */}
                  <div className="col-span-2 mt-1 pt-3 border-t border-[#E5E5E3] flex items-center justify-between px-2">
                    <Link href="/features/" className="text-xs text-[#6B6B6B] hover:text-[#111110] transition-colors">
                      View all features →
                    </Link>
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#4F7CFF] hover:text-[#3D6AEE] transition-colors">
                      Book a Demo →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog/" className="text-sm text-[#6B6B6B] hover:text-[#111110] transition-colors duration-150">
              Blog
            </Link>
            <Link href="/faq/" className="text-sm text-[#6B6B6B] hover:text-[#111110] transition-colors duration-150">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18578473152"
              className="flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#111110] transition-colors duration-150"
            >
              <Phone className="w-3.5 h-3.5" />
              +1 857-847-3152
            </a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="primary">
                Book a Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#6B6B6B] hover:text-[#111110]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E5E3] px-4 pb-6 pt-2 max-h-[80vh] overflow-y-auto">
          <div className="mb-3 pb-3 border-b border-[#E5E5E3]">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2">Features</p>
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
                    <Icon className="w-4 h-4 text-[#6B6B6B]" />
                    <span className="text-sm text-[#111110]">{f.name}</span>
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
                className="py-2.5 text-sm text-[#111110] border-b border-[#E5E5E3] last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              <Button size="md" variant="primary" className="w-full">Book a Demo</Button>
            </a>
            <a
              href="tel:+18578473152"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#111110] border border-[#E5E5E3] rounded-xl hover:bg-[#FAFAF9] transition-colors"
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
