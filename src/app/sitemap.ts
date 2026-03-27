import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/content";
import { siteConfig } from "../../site.config";

const BASE_URL = `https://${siteConfig.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}${article.href}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: article.schema_type === "Review" ? 0.8 : 0.7,
  }));

  const categoryUrls: MetadataRoute.Sitemap = Object.keys(
    siteConfig.categories
  ).map((category) => ({
    url: `${BASE_URL}/${category}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...categoryUrls,
    ...articleUrls,
  ];
}
