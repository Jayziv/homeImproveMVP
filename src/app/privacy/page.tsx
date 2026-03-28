import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.titleSuffix}`,
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl font-bold text-dark-800 uppercase tracking-wide mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: March 2025</p>
      <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-600">
        <h2>Information We Collect</h2>
        <p>
          {siteConfig.name} does not collect personal information directly. We
          use third-party analytics (Google Analytics 4) to understand site
          traffic patterns. This data is anonymized and aggregated.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies for analytics purposes only. Affiliate links (Amazon
          Associates, CJ Affiliate) may set their own cookies when you click
          through to their sites. We do not control those cookies.
        </p>

        <h2>Affiliate Links</h2>
        <p>
          This site contains affiliate links. When you click an affiliate link
          and make a purchase, we may earn a commission. Affiliate networks may
          use cookies to track referrals. See our{" "}
          <a href="/disclosure">Affiliate Disclosure</a> for full details.
        </p>

        <h2>Third-Party Services</h2>
        <ul>
          <li>
            <strong>Google Analytics:</strong> We use GA4 to measure traffic.
            Google&apos;s privacy policy applies:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
          </li>
          <li>
            <strong>Amazon Associates:</strong> Amazon&apos;s privacy policy
            applies to purchases made through our links.
          </li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          You can opt out of Google Analytics tracking by using the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? <a href="/contact">Contact us.</a>
        </p>
      </div>
    </div>
  );
}
