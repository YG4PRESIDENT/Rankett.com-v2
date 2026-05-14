import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rankett.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://rankett.com/faq/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://rankett.com/features/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://rankett.com/blog/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://rankett.com/features/buyer-intent-blog/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/monthly-reports/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/market-buyer-intent/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/content-creation/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/ai-mention-rate/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/ai-visibility-audit/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/white-label-portal/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/done-for-you-fulfillment/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rankett.com/features/research-diagnosis/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
