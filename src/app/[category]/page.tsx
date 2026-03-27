import { notFound } from "next/navigation";
import { getArticlesByCategory, getAllArticlePaths } from "@/lib/content";
import { categoryMetadata } from "@/lib/seo";
import { ArticleCard } from "@/components/ArticleCard";
import { siteConfig } from "../../../site.config";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(siteConfig.categories).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label =
    (siteConfig.categories as Record<string, string>)[category];
  if (!label) return {};
  return categoryMetadata(category, label);
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = (siteConfig.categories as Record<string, string>)[category];
  if (!label) notFound();

  const articles = getArticlesByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-brand-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{label}</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">{label}</h1>
      <p className="text-gray-500 mb-8">
        {articles.length} articles · Expert reviews, comparisons, and guides
      </p>

      {articles.length === 0 ? (
        <p className="text-gray-400">No articles yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
