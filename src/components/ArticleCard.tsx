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
    <article className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      {/* Orange accent bar */}
      <div className="h-1 w-full bg-brand-600 group-hover:bg-brand-700 transition-colors" />
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-sm uppercase tracking-wider">
            {categoryLabel}
          </span>
          <span className="text-xs text-gray-400">{article.readingTime}</span>
        </div>
        <h2 className="font-display text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors mb-2 line-clamp-2 uppercase tracking-wide leading-tight">
          <Link href={article.href}>{article.title}</Link>
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-1">
          {article.meta_description}
        </p>
        {article.rating && (
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-sm ${star <= Math.round(article.rating!) ? "text-amber-400" : "text-gray-200"}`}
              >
                ★
              </span>
            ))}
            <span className="text-xs text-gray-500 ml-1">{article.rating}/5</span>
          </div>
        )}
        <Link
          href={article.href}
          className="inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-700 uppercase tracking-wide"
        >
          Read Guide <span>→</span>
        </Link>
      </div>
    </article>
  );
}
