import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";

export const metadata: Metadata = {
  title: `About | ${siteConfig.titleSuffix}`,
  description: `Learn about ${siteConfig.name} — who we are and how we review home improvement tools.`,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl font-bold text-dark-800 uppercase tracking-wide mb-6">
        About {siteConfig.name}
      </h1>
      <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-600">
        <p>
          {siteConfig.name} is an independent home improvement resource dedicated to
          helping DIY enthusiasts and homeowners find the right tools for every job.
        </p>
        <h2>What We Do</h2>
        <p>
          We research, test, and compare power tools, hand tools, and home
          improvement equipment so you can buy with confidence. Every buyer guide
          and review is written with a single goal: give you honest, practical
          information — not whatever earns the highest commission.
        </p>
        <h2>Our Standards</h2>
        <ul>
          <li>
            <strong>No sponsored rankings.</strong> Product placement cannot be
            purchased. Our picks are based on specs, user feedback, and hands-on
            testing.
          </li>
          <li>
            <strong>Transparent affiliate relationships.</strong> Some links earn
            us a commission. We disclose this on every page and it never
            influences which products we recommend. See our{" "}
            <a href="/disclosure">Affiliate Disclosure</a>.
          </li>
          <li>
            <strong>Regularly updated.</strong> Tool markets move fast. We
            revisit our guides when better options emerge or prices change
            significantly.
          </li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          Have a question, spotted an error, or want to suggest a product we
          should review? <a href="/contact">Get in touch.</a>
        </p>
      </div>
    </div>
  );
}
