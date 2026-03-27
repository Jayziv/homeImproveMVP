import { NextRequest, NextResponse } from "next/server";
import { resolveAffiliateLink } from "@/lib/affiliate";

/**
 * Affiliate link handler — /go/:slug
 *
 * 1. Looks up the slug in the affiliate link registry
 * 2. Redirects to the affiliate URL with a 302 (temporary, so Amazon counts clicks)
 * 3. Falls back to the homepage if slug is unknown
 *
 * Click tracking: add your own analytics event here if needed.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const destination = resolveAffiliateLink(slug);

  if (!destination) {
    // Unknown slug — redirect home rather than 404 to preserve user experience
    return NextResponse.redirect(new URL("/", _req.url), { status: 302 });
  }

  return NextResponse.redirect(destination, { status: 302 });
}
