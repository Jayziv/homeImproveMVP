import { siteConfig } from "../../site.config";

/**
 * Affiliate link registry.
 * Key:   slug used in /go/:slug URLs and AFFILIATE_LINK_PLACEHOLDER replacements
 * Value: raw affiliate URL (Amazon, Home Depot via CJ, etc.)
 *
 * Populate this after receiving affiliate IDs from the board.
 * Format for Amazon: https://www.amazon.com/dp/{ASIN}?tag={amazonTag}
 */
export const affiliateLinks: Record<string, string> = {
  // ── Cordless Drills ──────────────────────────────────────────────────────
  "dewalt-dcd777c2": `https://www.amazon.com/dp/B07MN4JJF4?tag=${siteConfig.amazonTag}`,
  "dewalt-dcd771c2": `https://www.amazon.com/dp/B00ET5VMTU?tag=${siteConfig.amazonTag}`,
  "blackdecker-20v-drill": `https://www.amazon.com/dp/B071S5MQJF?tag=${siteConfig.amazonTag}`,
  "ryobi-pcl206k2": `https://www.amazon.com/dp/B09PQNVVT2?tag=${siteConfig.amazonTag}`,
  "makita-fd07r1": `https://www.amazon.com/dp/B01N6SX8VW?tag=${siteConfig.amazonTag}`,
  "skil-pwrcore12-drill": `https://www.amazon.com/dp/B07PBBWN2L?tag=${siteConfig.amazonTag}`,
  "milwaukee-2904-20": `https://www.amazon.com/dp/B07XVT8G81?tag=${siteConfig.amazonTag}`,
  "milwaukee-2801-22ct": `https://www.amazon.com/dp/B00IXHE7DG?tag=${siteConfig.amazonTag}`,

  // ── Pressure Washers ─────────────────────────────────────────────────────
  "sun-joe-spx3000": `https://www.amazon.com/dp/B00CPIVKBO?tag=${siteConfig.amazonTag}`,
  "karcher-k1700": `https://www.amazon.com/dp/B00E6PBHC6?tag=${siteConfig.amazonTag}`,
  "greenworks-1800w": `https://www.amazon.com/dp/B07RBFNTLY?tag=${siteConfig.amazonTag}`,
  "simpson-msh3125": `https://www.amazon.com/dp/B01N9RZK5S?tag=${siteConfig.amazonTag}`,

  // ── Paint Sprayers ───────────────────────────────────────────────────────
  "graco-magnum-x5": `https://www.amazon.com/dp/B0084X2V6C?tag=${siteConfig.amazonTag}`,
  "homeright-finish-max": `https://www.amazon.com/dp/B00LDS8KDK?tag=${siteConfig.amazonTag}`,
  "wagner-control-pro-130": `https://www.amazon.com/dp/B07FKGDTKZ?tag=${siteConfig.amazonTag}`,

  // ── Sanders ──────────────────────────────────────────────────────────────
  "dewalt-dwe6423k": `https://www.amazon.com/dp/B00OQOS02G?tag=${siteConfig.amazonTag}`,
  "makita-bo5041": `https://www.amazon.com/dp/B0000AY5RG?tag=${siteConfig.amazonTag}`,
  "bosch-ros20vsc": `https://www.amazon.com/dp/B00BD5G9VA?tag=${siteConfig.amazonTag}`,
  "blackdecker-bdero100": `https://www.amazon.com/dp/B00BJ5ZTG0?tag=${siteConfig.amazonTag}`,

  // ── Leaf Blowers ─────────────────────────────────────────────────────────
  "ego-lb3410": `https://www.amazon.com/dp/B07PFG7K5N?tag=${siteConfig.amazonTag}`,
  "greenworks-bl40b410": `https://www.amazon.com/dp/B07YHC2KP3?tag=${siteConfig.amazonTag}`,
  "worx-wg547": `https://www.amazon.com/dp/B07QFKK6QK?tag=${siteConfig.amazonTag}`,
  "blackdecker-lsw221": `https://www.amazon.com/dp/B009SJ58OG?tag=${siteConfig.amazonTag}`,

  // ── Circular Saws ────────────────────────────────────────────────────────
  "dewalt-dcs565b": `https://www.amazon.com/dp/B07D2FQWTG?tag=${siteConfig.amazonTag}`,
  "skil-5280-01": `https://www.amazon.com/dp/B002Y6ILTM?tag=${siteConfig.amazonTag}`,
  "dewalt-dwe575sb": `https://www.amazon.com/dp/B00BD5G9C2?tag=${siteConfig.amazonTag}`,

  // ── Jigsaws ──────────────────────────────────────────────────────────────
  "dewalt-dcs334b": `https://www.amazon.com/dp/B07DQTXFGM?tag=${siteConfig.amazonTag}`,
  "bosch-js120bn": `https://www.amazon.com/dp/B004OB2RF0?tag=${siteConfig.amazonTag}`,
  "skil-4495-02": `https://www.amazon.com/dp/B07MBHLNVQ?tag=${siteConfig.amazonTag}`,

  // ── Tile Saws ────────────────────────────────────────────────────────────
  "dewalt-d24000s": `https://www.amazon.com/dp/B000VRGPEW?tag=${siteConfig.amazonTag}`,
  "qep-22700q": `https://www.amazon.com/dp/B001ETFHGO?tag=${siteConfig.amazonTag}`,
  "skil-3540-02": `https://www.amazon.com/dp/B003Z4WDDE?tag=${siteConfig.amazonTag}`,

  // ── Oscillating Tools ────────────────────────────────────────────────────
  // TODO: verify correct ASIN for DCS356B (B07D2FQWTG was a duplicate of dewalt-dcs565b circular saw)
  "dewalt-dcs356b": `https://www.amazon.com/s?k=dewalt+dcs356b+oscillating+multi+tool&tag=${siteConfig.amazonTag}`,
  "fein-amm500": `https://www.amazon.com/dp/B07CXHKL6D?tag=${siteConfig.amazonTag}`,
  "wen-2305": `https://www.amazon.com/dp/B00BK5AU5Y?tag=${siteConfig.amazonTag}`,

  // ── Rotary Hammers ───────────────────────────────────────────────────────
  "dewalt-dch273b": `https://www.amazon.com/dp/B07DQBT4P4?tag=${siteConfig.amazonTag}`,
  "bosch-rh328vc": `https://www.amazon.com/dp/B00BD5G9BO?tag=${siteConfig.amazonTag}`,
  "dewalt-d25223k": `https://www.amazon.com/dp/B001I9UKMK?tag=${siteConfig.amazonTag}`,

  // ── Category search pages ─────────────────────────────────────────────────
  "amazon-cordless-drills": `https://www.amazon.com/s?k=cordless+drills&tag=${siteConfig.amazonTag}`,
  "amazon-pressure-washers": `https://www.amazon.com/s?k=electric+pressure+washers&tag=${siteConfig.amazonTag}`,
  "amazon-paint-sprayers": `https://www.amazon.com/s?k=paint+sprayers&tag=${siteConfig.amazonTag}`,
  "amazon-orbital-sanders": `https://www.amazon.com/s?k=random+orbital+sanders&tag=${siteConfig.amazonTag}`,
  "amazon-leaf-blowers": `https://www.amazon.com/s?k=cordless+leaf+blowers&tag=${siteConfig.amazonTag}`,
  "amazon-tile-saws": `https://www.amazon.com/s?k=wet+tile+saws&tag=${siteConfig.amazonTag}`,
  "amazon-circular-saws": `https://www.amazon.com/s?k=circular+saws&tag=${siteConfig.amazonTag}`,
  "amazon-jigsaws": `https://www.amazon.com/s?k=cordless+jigsaws&tag=${siteConfig.amazonTag}`,
};

/** Resolve a /go/:slug to its destination URL. Returns null if not found. */
export function resolveAffiliateLink(slug: string): string | null {
  return affiliateLinks[slug] ?? null;
}
