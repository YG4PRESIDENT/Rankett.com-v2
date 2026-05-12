import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FadeIn from '@/components/scroll/FadeIn'
import { blogPosts } from '@/lib/blogPosts'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Rankett AI Search Insights',
  description: 'Practical guides on AI search visibility, AI Mention Rate, LLMs.txt, schema markup, and how agencies can grow with AI SEO.',
  alternates: { canonical: 'https://rankett.com/blog/' },
}

const CATEGORY_COLORS: Record<string, string> = {
  'AI Search': 'bg-[#EEF2FF] text-[#4F7CFF]',
  'Agency Tips': 'bg-[#DCFCE7] text-[#166534]',
  'Case Studies': 'bg-[#FEF3C7] text-[#92400E]',
  'How-To': 'bg-[#F3F4F6] text-[#374151]',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

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
        {/* Header */}
        <section
          className="py-12 md:py-16 border-b border-[#E5E5E3]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2">Insights</p>
              <h1 className="text-4xl font-bold text-[#111110]">AI Search Blog</h1>
              <p className="text-[#6B6B6B] mt-2 max-w-lg">
                Practical guides on AI visibility, agency growth, and the technical layer that gets clients cited by ChatGPT and Perplexity.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Featured post */}
            {featured && (
              <FadeIn direction="up">
                <Link
                  href={`/blog/${featured.slug}/`}
                  className="group block rounded-2xl border border-[#E5E5E3] bg-white hover:border-[#4F7CFF]/30 hover:shadow-sm transition-all duration-200 overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    {/* Thumbnail */}
                    <div className="md:col-span-2 h-48 md:h-auto bg-[#EEF2FF] flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-[#4F7CFF]/20 font-mono">01</div>
                        <p className="text-xs text-[#4F7CFF] font-medium mt-2">Featured Post</p>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="md:col-span-3 p-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[featured.category]}`}>
                            {featured.category}
                          </span>
                          <span className="text-[10px] text-[#9B9B9B]">{featured.readTime}</span>
                        </div>
                        <h2 className="text-xl font-bold text-[#111110] leading-tight mb-3 group-hover:text-[#4F7CFF] transition-colors">
                          {featured.title}
                        </h2>
                        <p className="text-sm text-[#6B6B6B] leading-relaxed">{featured.excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between mt-5 pt-5 border-t border-[#E5E5E3]">
                        <span className="text-xs text-[#9B9B9B]">{formatDate(featured.date)}</span>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#4F7CFF] group-hover:gap-2 transition-all">
                          Read article <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            )}

            {/* Grid of remaining posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post, i) => (
                <FadeIn key={post.slug} direction="up" delay={i * 0.05}>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group block rounded-xl border border-[#E5E5E3] bg-white hover:border-[#4F7CFF]/30 hover:shadow-sm transition-all duration-200 overflow-hidden h-full flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="h-36 bg-[#FAFAF9] border-b border-[#E5E5E3] flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#E5E5E3] font-mono">0{i + 2}</span>
                    </div>
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category]}`}>
                          {post.category}
                        </span>
                        <span className="text-[10px] text-[#9B9B9B]">{post.readTime}</span>
                      </div>
                      <h2 className="text-sm font-semibold text-[#111110] leading-snug mb-2 group-hover:text-[#4F7CFF] transition-colors flex-1">
                        {post.title}
                      </h2>
                      <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-[#E5E5E3]">
                        <span className="text-[10px] text-[#9B9B9B]">{formatDate(post.date)}</span>
                        <span className="text-xs font-medium text-[#4F7CFF]">Read →</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
