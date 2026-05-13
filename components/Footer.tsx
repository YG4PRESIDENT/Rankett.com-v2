import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'FAQ', href: '/faq/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Features', href: '/features/' },
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0f30] relative mt-auto">
      {/* Gradient bridge, eases from page gradient into dark footer */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-72px',
          left: 0,
          right: 0,
          height: '72px',
          background: 'linear-gradient(to bottom, transparent, #0a0f30)',
          zIndex: 0,
        }}
      />

      {/* Top content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        {/* Logo + nav row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/apple-touch-icon.png"
              alt="Rankett"
              width={40}
              height={40}
              className="h-10 w-10"
              style={{ animation: 'spin-slow 14s linear infinite' }}
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-5 sm:gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 hover:text-white/70 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright + phone */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-7 pt-6 border-t border-white/[0.06]">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Rankett. All rights reserved.
          </p>
          <a
            href="tel:+18578473152"
            className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/55 transition-colors"
          >
            <Phone className="w-3 h-3" />
            +1 857-847-3152
          </a>
        </div>
      </div>

      {/* Ghost brand text, dot matrix via background-clip */}
      <div
        className="relative z-10 flex items-center justify-center overflow-hidden rounded-b-xl"
        style={{ height: 'clamp(120px, 18vw, 260px)' }}
      >
        <span
          className="font-bold bg-clip-text text-transparent leading-none tracking-tight select-none pointer-events-none"
          style={{
            fontSize: 'clamp(72px, 14vw, 210px)',
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.20) 1.5px, transparent 1.5px)',
            backgroundSize: '6px 6px',
          }}
          aria-hidden="true"
        >
          Rankett
        </span>
      </div>
    </footer>
  )
}
