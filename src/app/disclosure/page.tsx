import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: `Affiliate Disclosure | ${siteConfig.titleSuffix}`,
  description: `Affiliate disclosure for ${siteConfig.name}.`,
};

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl font-bold text-dark-800 uppercase tracking-wide mb-6">
        Affiliate Disclosure
      </h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: March 2025</p>
      <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-600">
        <p>{siteConfig.affiliateDisclosure}</p>

        <h2>Amazon Associates</h2>
        <p>
          {siteConfig.name} is a participant in the Amazon Services LLC
          Associates Program, an affiliate advertising program designed to
          provide a means for sites to earn advertising fees by advertising and
          linking to Amazon.com. As an Amazon Associate we earn from qualifying
          purchases.
        </p>

        <h2>CJ Affiliate / Home Depot</h2>
        <p>
          We may also earn commissions through CJ Affiliate for purchases made
          at Home Depot and other participating retailers via links on this site.
        </p>

        <h2>Editorial Independence</h2>
        <p>
          Affiliate relationships do not influence our editorial recommendations.
          We only recommend products we believe offer genuine value. Our rankings
          are based on product quality, value, and user feedback — not commission
          rates.
        </p>

        <h2>Price and Availability</h2>
        <p>
          Prices and product availability are accurate as of the date of
          publication but are subject to change. Always verify current pricing on
          the retailer&apos;s website.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about our affiliate relationships,{" "}
          <a href="/contact">contact us.</a>
        </p>
      </div>
    </div>
  );
}
