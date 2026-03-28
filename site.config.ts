/**
 * site.config.ts — White-label site configuration
 *
 * This is the ONLY file that changes when cloning this template to a new niche.
 * Fork the repo, update these values, drop new content in /content/, and deploy.
 */

export const siteConfig = {
  // ─── Identity ────────────────────────────────────────────────────────────
  name: "Drill Down Reviews",
  domain: "drilldownreviews.com",
  tagline: "The Best Home Improvement Tools, Reviewed.",
  description:
    "Expert home improvement tool reviews, buyer guides, and how-to articles. We test and compare the best tools so you can buy with confidence.",

  // ─── Branding ────────────────────────────────────────────────────────────
  /** Tailwind color name or hex. Controls CTA buttons, links, accents. */
  primaryColor: "#C4501A",
  /** Used in navbar, footer background */
  darkColor: "#1A2C3D",

  // ─── Affiliate ───────────────────────────────────────────────────────────
  /** Amazon Associates tracking tag. Set after account approval. */
  amazonTag: "REPLACE_WITH_YOUR_AMAZON_TAG",
  /** CJ Affiliate Publisher ID. Set after CJ account approval. */
  cjPublisherId: "REPLACE_WITH_CJ_PUBLISHER_ID",

  // ─── SEO ─────────────────────────────────────────────────────────────────
  /** Used in <title> suffix: "Best Cordless Drills | Handy Home Gear" */
  titleSuffix: "Drill Down Reviews",
  /** Open Graph default image (place in /public/) */
  ogImage: "/og-default.png",
  /** Twitter/X handle without @ */
  twitterHandle: "",

  // ─── Analytics ───────────────────────────────────────────────────────────
  /** Google Analytics 4 Measurement ID. Set after GA4 setup. */
  ga4MeasurementId: "REPLACE_WITH_G_XXXX",

  // ─── Navigation ──────────────────────────────────────────────────────────
  navLinks: [
    { label: "Buyer Guides", href: "/buyer-guides" },
    { label: "Comparisons", href: "/comparisons" },
    { label: "How-To", href: "/how-to" },
    { label: "Reviews", href: "/reviews" },
  ],

  // ─── Content categories ──────────────────────────────────────────────────
  /** Maps content folder names → display labels */
  categories: {
    "buyer-guides": "Buyer Guides",
    comparisons: "Comparisons",
    "how-to": "How-To Guides",
    reviews: "Reviews",
  },

  // ─── Footer ──────────────────────────────────────────────────────────────
  affiliateDisclosure:
    "Drill Down Reviews is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We may also earn commissions from other affiliate programs. Affiliate relationships do not influence our editorial recommendations.",
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Affiliate Disclosure", href: "/disclosure" },
  ],
};

export type SiteConfig = typeof siteConfig;
