import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.titleSuffix}`,
  description: `Get in touch with the ${siteConfig.name} team.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl font-bold text-dark-800 uppercase tracking-wide mb-6">
        Contact Us
      </h1>
      <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-600">
        <p>
          We&apos;d love to hear from you. Whether you have a question about a
          recommendation, spotted an error, or want to suggest a product for
          review — reach out.
        </p>
        <h2>How to Reach Us</h2>
        <p>
          Email us at{" "}
          <a href={`mailto:hello@${siteConfig.domain}`}>
            hello@{siteConfig.domain}
          </a>
          . We aim to respond within 2 business days.
        </p>
        <h2>What We Can Help With</h2>
        <ul>
          <li>Product recommendations and buying advice</li>
          <li>Errors or outdated information in our guides</li>
          <li>Tool review requests</li>
          <li>Partnership and media inquiries</li>
        </ul>
        <p>
          For affiliate-related questions, see our{" "}
          <a href="/disclosure">Affiliate Disclosure</a>.
        </p>
      </div>
    </div>
  );
}
