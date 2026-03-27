import Link from "next/link";
import { siteConfig } from "../../site.config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-brand-600 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl" aria-hidden="true">🔧</span>
            <span className="font-display text-xl font-bold tracking-wide text-dark-800 group-hover:text-brand-600 transition-colors uppercase">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button — functional menu can be added post-launch */}
          <button className="md:hidden p-2 text-gray-500 hover:text-brand-600 transition-colors" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
