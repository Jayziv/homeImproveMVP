import type { MetadataRoute } from "next";
import { siteConfig } from "../../site.config";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = `https://${siteConfig.domain}`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/go/", "/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
