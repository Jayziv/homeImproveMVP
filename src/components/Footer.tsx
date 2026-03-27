import Link from "next/link";
import { siteConfig } from "../../site.config";

export function Footer() {
  return (
    <footer className="bg-dark-800 text-gray-300 mt-16">
      {/* Brand accent bar */}
      <div className="h-1 w-full bg-brand-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl" aria-hidden="true">🔧</span>
              <p className="font-display text-white font-bold text-xl uppercase tracking-wide">{siteConfig.name}</p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{siteConfig.tagline}</p>
            <p className="text-sm text-gray-500 mt-3">Expert reviews you can trust. No sponsored rankings.</p>
          </div>
          <div>
            <p className="font-display text-white font-semibold mb-4 uppercase tracking-wide text-sm">Categories</p>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-white font-semibold mb-4 uppercase tracking-wide text-sm">Company</p>
            <ul className="space-y-2">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">
            {siteConfig.affiliateDisclosure}
          </p>
          <p className="text-xs text-gray-600 mt-4">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
