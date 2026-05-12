export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: 'AI Search' | 'Agency Tips' | 'Case Studies' | 'How-To'
  featured?: boolean
  body?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-is-ai-mention-rate',
    title: 'What Is AI Mention Rate — And Why It\'s the New Metric Every Agency Should Track',
    excerpt: 'As AI search captures 42% of queries, the old SEO metrics no longer tell the full story. Here\'s what AI Mention Rate is, how it\'s measured, and why your clients are asking about it.',
    date: '2026-05-10',
    readTime: '5 min read',
    category: 'AI Search',
    featured: true,
    body: `
# What Is AI Mention Rate — And Why It's the New Metric Every Agency Should Track

When a homeowner asks ChatGPT "who are the best plumbers in Austin," your client either shows up — or they don't. That binary is AI Mention Rate.

## The Old Story: Rankings

For the past 20 years, SEO agencies have lived and died by one metric: Google rankings. Page one, position one. The logic was clean: rank higher, get more traffic, get more leads.

That logic still holds — for Google. But something significant has shifted.

## The New Reality: AI Queries

AI-powered search tools — ChatGPT, Perplexity, Gemini, Claude — now handle an estimated 42% of informational and recommendation queries. A user asking "what's the best dentist in Phoenix" is just as likely to ask Perplexity as Google.

And the two platforms don't produce the same answers.

Google ranks pages. AI models cite businesses. The algorithm behind who gets cited is completely different from who ranks.

## What AI Mention Rate Measures

AI Mention Rate is a percentage: out of all the relevant AI queries run for a business, what percentage include them as a cited source?

For example:
- 200 relevant prompts run across ChatGPT, Gemini, and Perplexity
- Client is cited in 86 of them
- AI Mention Rate: **43%**

A competitor with stronger AI signals might score 71%. The gap between those two numbers is money.

## Why Agencies Need to Track It

Three reasons AI Mention Rate has become the metric clients ask about:

**1. Clients are asking the question directly.** "Why doesn't our business show up when I ask ChatGPT for recommendations?" is now a support ticket.

**2. It's measurable and improvable.** Unlike general "AI visibility," AI Mention Rate is a real number that responds to specific interventions — schema markup, structured FAQs, LLMs.txt, and authority mentions.

**3. It's a proof-of-work metric.** When AI Mention Rate moves from 34% to 51% over 90 days, you have something concrete to show in a client report.

## How to Improve It

The interventions that move AI Mention Rate are different from traditional SEO. The primary drivers:

- **Structured data and schema markup** — AI models parse structured data more reliably than raw HTML
- **LLMs.txt files** — a new standard file that tells AI crawlers exactly who the business is and what they do
- **Answer-optimized FAQ content** — content written to directly answer the questions AI models ask
- **Authority mentions** — citations on high-authority sites that AI models already trust

This is the layer Rankett handles — so your SEO team can keep doing what it does, and your clients get full search coverage.
    `.trim(),
  },
  {
    slug: 'why-your-clients-are-invisible-to-chatgpt',
    title: 'Why Your Clients Are Invisible to ChatGPT (And the 4 Things That Fix It)',
    excerpt: 'A local business can rank on page one of Google and still get zero citations from AI models. Here\'s the technical gap — and the four fixes that close it.',
    date: '2026-05-03',
    readTime: '6 min read',
    category: 'AI Search',
  },
  {
    slug: 'how-to-add-ai-visibility-to-your-agency-offering',
    title: 'How to Add AI Visibility to Your Agency\'s Offering Without Hiring Anyone',
    excerpt: 'The demand is there. Clients are asking about AI search. Here\'s the exact framework for adding AI visibility as a service line — without building it from scratch.',
    date: '2026-04-28',
    readTime: '7 min read',
    category: 'Agency Tips',
  },
  {
    slug: 'llms-txt-what-it-is-why-it-matters',
    title: 'LLMs.txt: What It Is, Why AI Models Look for It, and How to Create One',
    excerpt: 'The LLMs.txt file is to AI crawlers what robots.txt is to Google. Most businesses don\'t have one. Here\'s what it contains and why it matters for AI citation rates.',
    date: '2026-04-20',
    readTime: '4 min read',
    category: 'How-To',
  },
  {
    slug: 'the-compounding-effect-of-ai-seo-content',
    title: 'The Compounding Effect of AI SEO Content: Why Month 3 Looks Very Different from Month 1',
    excerpt: 'AI visibility doesn\'t happen overnight. But the improvement curve is exponential, not linear. Here\'s the data behind the 90-day ramp — and what\'s driving it.',
    date: '2026-04-14',
    readTime: '5 min read',
    category: 'AI Search',
  },
  {
    slug: 'schema-markup-for-ai-search',
    title: 'Schema Markup in 2026: Why It Matters More for AI Search Than for Google',
    excerpt: 'Schema markup has always been an SEO nice-to-have. In the era of AI search, it\'s become a prerequisite for citation. Here\'s why the two are fundamentally different.',
    date: '2026-04-07',
    readTime: '5 min read',
    category: 'How-To',
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
