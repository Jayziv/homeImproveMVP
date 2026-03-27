import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getArticle,
  getAllArticlePaths,
  getRelatedArticles,
} from "@/lib/content";
import {
  articleMetadata,
  schemaForArticle,
  breadcrumbSchema,
} from "@/lib/seo";
import { SchemaOrg } from "@/components/SchemaOrg";
import { ArticleCard } from "@/components/ArticleCard";
import { siteConfig } from "../../../../site.config";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticlePaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) return {};
  return articleMetadata(article);
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);
  const categoryLabel =
    (siteConfig.categories as Record<string, string>)[category] ?? category;

  return (
    <>
      <SchemaOrg
        schemas={[schemaForArticle(article), breadcrumbSchema(article)]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <a href="/" className="hover:text-brand-600">Home</a>
          <span>/</span>
          <a href={`/${category}`} className="hover:text-brand-600">{categoryLabel}</a>
          <span>/</span>
          <span className="text-gray-700 truncate">{article.title}</span>
        </nav>

        {/* Affiliate disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 mb-8">
          <strong>Disclosure:</strong> This article contains affiliate links.
          If you purchase through our links, we may earn a small commission at
          no extra cost to you. This does not affect our recommendations.
        </div>

        {/* Article header */}
        <header className="mb-8">
          <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
            {categoryLabel}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-gray-500 mb-4">{article.meta_description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{article.readingTime}</span>
            <span>·</span>
            <span>Updated {article.publishedAt}</span>
            {article.rating && (
              <>
                <span>·</span>
                <span className="text-amber-500 font-semibold">
                  ★ {article.rating}/5
                </span>
              </>
            )}
          </div>
        </header>

        {/* Article body */}
        <article className="prose prose-lg prose-blue max-w-none">
          <MDXRemote source={article.content} />
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Related {categoryLabel}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <ArticleCard key={r.slug} article={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
