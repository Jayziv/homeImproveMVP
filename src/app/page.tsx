import { getAllArticles } from "@/lib/content";
import { homepageMetadata, websiteSchema } from "@/lib/seo";
import { ArticleCard } from "@/components/ArticleCard";
import { SchemaOrg } from "@/components/SchemaOrg";
import { siteConfig } from "../../site.config";
import type { Metadata } from "next";

export const metadata: Metadata = homepageMetadata();

export default function HomePage() {
  const allArticles = getAllArticles();
  const featured = allArticles.slice(0, 6);
  const categories = Object.entries(siteConfig.categories);

  return (
    <>
      <SchemaOrg schemas={[websiteSchema()]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {siteConfig.tagline}
          </h1>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="bg-white text-brand-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-50 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Browse by category */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map(([slug, label]) => (
              <a
                key={slug}
                href={`/${slug}`}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <span className="font-semibold text-gray-800 group-hover:text-brand-600 text-sm">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Featured articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Guides & Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <p className="mt-12 text-xs text-gray-400 text-center max-w-3xl mx-auto">
          This site contains affiliate links. We may earn a commission when you
          purchase through our links at no extra cost to you.
        </p>
      </div>
    </>
  );
}
