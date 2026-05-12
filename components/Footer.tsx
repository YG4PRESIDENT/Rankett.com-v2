import Link from 'next/link'
import Image from 'next/image'

const CALENDLY = 'https://calendly.com/rankett/30min'

const LINKS = {
  Platform: [
    { label: 'Features', href: '/features/' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Blog', href: '/blog/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  Company: [
    { label: 'Book a Call', href: CALENDLY },
    { label: 'Partner Login', href: 'https://app.rankett.com/sign-in' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E3] bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/Rankett_Logo.png"
              alt="Rankett"
              width={100}
              height={28}
              className="h-7 w-auto mb-3"
            />
            <p className="text-sm text-[#6B6B6B] max-w-xs leading-relaxed">
              The AI search layer for your agency. White-labeled, done-for-you fulfillment. Plug in and grow.
            </p>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-3">
                {group}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#6B6B6B] hover:text-[#111110] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#E5E5E3] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#6B6B6B]">
            © {new Date().getFullYear()} Rankett. All rights reserved.
          </p>
          <p className="text-xs text-[#6B6B6B]">
            info@rankett.com
          </p>
        </div>
      </div>
    </footer>
  )
}
