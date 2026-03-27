import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "../../site.config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.titleSuffix}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  verification: {
    // Add Google Search Console verification token here after setup
    google: "REPLACE_WITH_GSC_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} font-sans bg-stone-50 text-gray-900 antialiased`}>
        {/* GA4 — inject after receiving Measurement ID */}
        {siteConfig.ga4MeasurementId &&
          !siteConfig.ga4MeasurementId.startsWith("REPLACE") && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.ga4MeasurementId}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${siteConfig.ga4MeasurementId}');`,
                }}
              />
            </>
          )}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
