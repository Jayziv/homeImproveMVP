import type { MDXComponents } from "mdx/types";
import { AdPlaceholder } from "@/components/AdPlaceholder";

/**
 * Returns a fresh MDX components object for each server render.
 * The paragraph counter is scoped per-call so concurrent requests don't interfere.
 */
export function createArticleMdxComponents(): MDXComponents {
  const state = { paragraphCount: 0 };

  function Paragraph({
    children,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) {
    state.paragraphCount += 1;
    const isThird = state.paragraphCount === 3;
    return (
      <>
        <p {...props}>{children}</p>
        {isThird && <AdPlaceholder zone="in-content" />}
      </>
    );
  }

  return { p: Paragraph };
}
