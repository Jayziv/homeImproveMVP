import { getAllArticles } from "@/lib/content";
import { homepageMetadata, websiteSchema } from "@/lib/seo";
import { ArticleCard } from "@/components/ArticleCard";
import { SchemaOrg } from "@/components/SchemaOrg";
import { siteConfig } from "../../site.config";
import type { Metadata } from "next";

export const metadata: Metadata = homepageMetadata();

const categoryIcons: Record<string, string> = {
  "buyer-guides": "📋",
  comparisons: "⚖️",
  "how-to": "🔧",
  reviews: "⭐",
};

export default function HomePage() {
  const allArticles = getAllArticles();
  const featured = allArticles.slice(0, 6);
  const categories = Object.entries(siteConfig.categories);

  return (
    <>
      <SchemaOrg schemas={[websiteSchema()]} />

      {/* Hero */}
      <section className="bg-dark-800 text-white relative overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block bg-brand-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-6">
            Trusted Tool Reviews
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-wide uppercase leading-tight mb-6">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <span className="text-brand-400">✓</span> Expert-tested picks
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-400">✓</span> No sponsored rankings
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-400">✓</span> Real hands-on reviews
            </span>
            <span className="flex items-center gap-2">
              <span className="text-brand-400">✓</span> Updated regularly
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Browse by category */}
        <section className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-3xl font-bold text-dark-800 uppercase tracking-wide whitespace-nowrap">
              Browse by Category
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map(([slug, label]) => (
              <a
                key={slug}
                href={`/${slug}`}
                className="group bg-white border-2 border-gray-100 hover:border-brand-600 p-5 text-center hover:shadow-md transition-all"
              >
                <span className="text-3xl block mb-3" aria-hidden="true">
                  {categoryIcons[slug] ?? "📌"}
                </span>
                <span className="font-display font-semibold text-gray-800 group-hover:text-brand-600 text-sm uppercase tracking-wide transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Featured articles */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-3xl font-bold text-dark-800 uppercase tracking-wide whitespace-nowrap">
              Latest Guides & Reviews
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Affiliate disclosure */}
        <p className="mt-14 text-xs text-gray-400 text-center max-w-3xl mx-auto border-t border-gray-200 pt-8">
          This site contains affiliate links. We may earn a commission when you
          purchase through our links at no extra cost to you.
        </p>
      </div>
    </>
  );
}
