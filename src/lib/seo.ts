import type { Metadata } from "next";
import { siteConfig } from "../../site.config";
import type { Article } from "./content";

const BASE_URL = `https://${siteConfig.domain}`;

/** Build Next.js Metadata for an article page */
export function articleMetadata(article: Article): Metadata {
  const title = `${article.title} | ${siteConfig.titleSuffix}`;
  const url = `${BASE_URL}${article.href}`;

  return {
    title,
    description: article.meta_description,
    keywords: [
      article.focus_keyword,
      ...(article.secondary_keywords ?? []),
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: article.meta_description,
      url,
      siteName: siteConfig.name,
      type: "article",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.meta_description,
      images: [siteConfig.ogImage],
      ...(siteConfig.twitterHandle
        ? { site: `@${siteConfig.twitterHandle}` }
        : {}),
    },
  };
}

/** Build Next.js Metadata for a category page */
export function categoryMetadata(
  category: string,
  label: string
): Metadata {
  const title = `${label} | ${siteConfig.titleSuffix}`;
  const description = `Browse all ${label.toLowerCase()} on ${siteConfig.name}. Expert reviews, comparisons, and buying guides.`;
  const url = `${BASE_URL}/${category}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage }],
    },
  };
}

/** Build Next.js Metadata for the homepage */
export function homepageMetadata(): Metadata {
  return {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    alternates: { canonical: BASE_URL },
    openGraph: {
      title: `${siteConfig.name} — ${siteConfig.tagline}`,
      description: siteConfig.description,
      url: BASE_URL,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
  };
}

// ─── JSON-LD Schema generators ───────────────────────────────────────────────

export function articleSchema(article: Article) {
  const url = `${BASE_URL}${article.href}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta_description,
    url,
    author: { "@type": "Organization", name: siteConfig.name, url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: BASE_URL,
    },
    dateModified: article.publishedAt,
  };
}

export function reviewSchema(article: Article) {
  const url = `${BASE_URL}${article.href}`;
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    name: article.title,
    reviewBody: article.meta_description,
    url,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    ...(article.rating
      ? {
          reviewRating: {
            "@type": "Rating",
            ratingValue: article.rating.toString(),
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
    itemReviewed: {
      "@type": "Product",
      name: article.title.replace(/ Review.*$/i, "").trim(),
    },
  };
}

export function howToSchema(article: Article) {
  const url = `${BASE_URL}${article.href}`;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.title,
    description: article.meta_description,
    url,
    author: { "@type": "Organization", name: siteConfig.name },
  };
}

export function itemListSchema(article: Article) {
  const url = `${BASE_URL}${article.href}`;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: article.title,
    description: article.meta_description,
    url,
  };
}

/** Returns the correct JSON-LD schema object for any article */
export function schemaForArticle(article: Article): object {
  switch (article.schema_type) {
    case "Review":
      return reviewSchema(article);
    case "HowTo":
      return howToSchema(article);
    case "ItemList":
      return itemListSchema(article);
    default:
      return articleSchema(article);
  }
}

/** BreadcrumbList schema for article pages */
export function breadcrumbSchema(article: Article) {
  const categoryLabel =
    (
      siteConfig.categories as Record<string, string>
    )[article.category] ?? article.category;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryLabel,
        item: `${BASE_URL}/${article.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${BASE_URL}${article.href}`,
      },
    ],
  };
}

/** WebSite schema for the homepage (enables sitelinks search box) */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: BASE_URL,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
