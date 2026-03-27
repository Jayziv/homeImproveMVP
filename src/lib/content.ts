import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

// ─── Types ────────────────────────────────────────────────────────────────────

export type SchemaType =
  | "ItemList"
  | "Review"
  | "HowTo"
  | "Article"
  | "FAQPage";

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  meta_description: string;
  focus_keyword: string;
  secondary_keywords?: string[];
  schema_type: SchemaType;
  affiliate_program?: string;
  rating?: number;
  word_count_target?: number;
  internal_links?: string[];
}

export interface Article extends ArticleFrontmatter {
  category: string;
  content: string;
  readingTime: string;
  /** Relative path from content root, e.g. "buyer-guides/best-cordless-drills" */
  href: string;
  publishedAt: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCategories(): string[] {
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "README.md")
    .map((d) => d.name);
}

function parseArticleFile(
  category: string,
  filename: string
): Article | null {
  const filePath = path.join(CONTENT_DIR, category, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.title || !data.slug) return null;

  const stats = readingTime(content);

  return {
    ...(data as ArticleFrontmatter),
    category,
    content,
    readingTime: stats.text,
    href: `/${category}/${data.slug}`,
    // Use file mtime as proxy for publish date until real dates are in frontmatter
    publishedAt: fs.statSync(filePath).mtime.toISOString().split("T")[0],
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Get all articles across all categories */
export function getAllArticles(): Article[] {
  const articles: Article[] = [];
  for (const category of getCategories()) {
    const dir = path.join(CONTENT_DIR, category);
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
    for (const file of files) {
      const article = parseArticleFile(category, file);
      if (article) articles.push(article);
    }
  }
  return articles;
}

/** Get all articles in a specific category */
export function getArticlesByCategory(category: string): Article[] {
  const dir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => parseArticleFile(category, f))
    .filter((a): a is Article => a !== null);
}

/** Get a single article by category + slug */
export function getArticle(
  category: string,
  slug: string
): Article | null {
  const dir = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(dir)) return null;
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  for (const file of files) {
    const article = parseArticleFile(category, file);
    if (article?.slug === slug) return article;
  }
  return null;
}

/** Get all [category, slug] pairs for static path generation */
export function getAllArticlePaths(): Array<{
  category: string;
  slug: string;
}> {
  return getAllArticles().map((a) => ({
    category: a.category,
    slug: a.slug,
  }));
}

/** Get related articles (same category, excluding current) */
export function getRelatedArticles(
  current: Article,
  limit = 3
): Article[] {
  return getArticlesByCategory(current.category)
    .filter((a) => a.slug !== current.slug)
    .slice(0, limit);
}
