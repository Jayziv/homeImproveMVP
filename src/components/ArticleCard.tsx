import Link from "next/link";
import type { Article } from "@/lib/content";
import { siteConfig } from "../../site.config";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const categoryLabel =
    (siteConfig.categories as Record<string, string>)[article.category] ??
    article.category;

  return (
    <article className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
            {categoryLabel}
          </span>
          <span className="text-xs text-gray-400">{article.readingTime}</span>
        </div>
        <h2 className="text-base font-semibold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2">
          <Link href={article.href}>{article.title}</Link>
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {article.meta_description}
        </p>
        <Link
          href={article.href}
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
