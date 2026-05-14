import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { blogPosts, getPostBySlug } from '@/lib/blogPosts'

const CALENDLY = 'https://calendly.com/rankett/30min'

const CATEGORY_COLORS: Record<string, string> = {
  'AI Search': 'bg-[#EEF2FF] text-[#4F7CFF]',
  'Agency Tips': 'bg-[#DCFCE7] text-[#166534]',
  'Case Studies': 'bg-[#FEF3C7] text-[#92400E]',
  'How-To': 'bg-[#F3F4F6] text-[#374151]',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not Found' }
  const desc = post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + '...' : post.excerpt
  return {
    title: `${post.title} | Rankett Blog`,
    description: desc,
    alternates: { canonical: `https://rankett.com/blog/${slug}/` },
    openGraph: {
      title: `${post.title} | Rankett`,
      description: desc,
      type: 'article',
      url: `https://rankett.com/blog/${slug}/`,
      siteName: 'Rankett',
      images: [{ url: 'https://rankett.com/og-image.svg', width: 1200, height: 630, alt: `Rankett Blog — ${post.title}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Rankett`,
      description: desc,
      images: ['https://rankett.com/og-image.svg'],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Convert simple markdown-ish body to paragraphs for rendering
  const bodyLines = post.body
    ? post.body.split('\n').filter((l) => l.trim())
    : [`${post.excerpt} (Full article coming soon.)`]

  return (
    <>
      <Header />
      <main
        className="pt-24 relative"
        style={{
          background: 'radial-gradient(circle, rgba(107, 142, 255, 0.18) 1px, transparent 1px), radial-gradient(ellipse 90% 22% at 15% 5%, rgba(167, 191, 255, 0.58) 0%, transparent 100%), radial-gradient(ellipse 80% 20% at 85% 35%, rgba(196, 219, 255, 0.48) 0%, transparent 100%), radial-gradient(ellipse 85% 22% at 20% 68%, rgba(221, 230, 255, 0.52) 0%, transparent 100%), radial-gradient(ellipse 75% 18% at 80% 90%, rgba(167, 191, 255, 0.46) 0%, transparent 100%), #F0F4FF',
          backgroundSize: '28px 28px, auto, auto, auto, auto, auto',
        }}
      >
        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back */}
            <Link href="/blog/" className="inline-flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#111110] mb-8">
              <ArrowLeft className="w-3.5 h-3.5" />
              All posts
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-2 mb-5">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category]}`}>
                {post.category}
              </span>
              <span className="text-xs text-[#9B9B9B]">{post.readTime}</span>
              <span className="text-xs text-[#9B9B9B]">·</span>
              <span className="text-xs text-[#9B9B9B]">{formatDate(post.date)}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[#111110] leading-tight mb-5">
              {post.title}
            </h1>

            <p className="text-lg text-[#6B6B6B] leading-relaxed mb-10 pb-10 border-b border-[#E5E5E3]">
              {post.excerpt}
            </p>

            {/* Body, render markdown-ish sections */}
            {post.body ? (
              <div className="prose-rankett space-y-5">
                {bodyLines.map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="text-xl font-bold text-[#111110] mt-8 mb-2">{line.replace('## ', '')}</h2>
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="text-base font-semibold text-[#111110] mt-6 mb-2">{line.replace('### ', '')}</h3>
                  }
                  if (line.startsWith('# ')) {
                    return null // Already in <h1>
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="font-semibold text-[#111110]">{line.replace(/\*\*/g, '')}</p>
                  }
                  if (line.startsWith('- ')) {
                    return (
                      <li key={i} className="ml-4 text-[#6B6B6B] leading-relaxed list-disc">
                        {line.replace('- ', '')}
                      </li>
                    )
                  }
                  return <p key={i} className="text-[#6B6B6B] leading-relaxed">{line}</p>
                })}
              </div>
            ) : (
              <p className="text-[#6B6B6B] leading-relaxed">Full article coming soon.</p>
            )}

            {/* CTA */}
            <div className="mt-14 pt-10 border-t border-[#E5E5E3]">
              <div className="rounded-2xl border border-[#4F7CFF]/20 bg-[#EEF2FF] p-8">
                <p className="text-xl font-bold text-[#111110] mb-2">Add the AI layer to your agency.</p>
                <p className="text-[#6B6B6B] text-sm mb-5">
                  White-labeled, done-for-you. Book a 30-minute call and we&apos;ll run a live audit on one of your clients.
                </p>
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111110] text-white text-sm font-semibold hover:bg-[#2a2a28] transition-colors"
                >
                  Book a Demo <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
