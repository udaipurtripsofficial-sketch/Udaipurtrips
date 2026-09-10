import type { MetadataRoute } from "next";

const baseUrl = "https://udaipurtrips.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: "2026-09-10",
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/tour-packages`,
      lastModified: "2026-09-10",
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/cab-rental`,
      lastModified: "2026-09-10",
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/destinations`,
      lastModified: "2026-09-10",
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/booking`,
      lastModified: "2026-09-10",
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/destinations/city-palace`,
      lastModified: "2026-09-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-09-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: "2026-09-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/faq`,
      lastModified: "2026-09-10",
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/testimonials`,
      lastModified: "2026-09-10",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}