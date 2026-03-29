const adsEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

export type AdZone =
  | "in-content"
  | "below-article"
  | "header-leaderboard"
  | "sidebar";

interface AdPlaceholderProps {
  zone: AdZone;
  className?: string;
}

export function AdPlaceholder({ zone, className = "" }: AdPlaceholderProps) {
  if (!adsEnabled) {
    // Dev/staging: grey box so designers can see layout impact
    const labels: Record<AdZone, string> = {
      "in-content": "In-Content Ad (728×90)",
      "below-article": "Below-Article Ad (728×90)",
      "header-leaderboard": "Header Leaderboard (728×90)",
      sidebar: "Sidebar Ad (300×250)",
    };
    return (
      <div
        data-ad-zone={zone}
        className={`flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 text-gray-400 text-xs font-mono my-6 ${className}`}
        style={{ minHeight: zone === "sidebar" ? "250px" : "90px" }}
      >
        {labels[zone]}
      </div>
    );
  }

  // Production: empty div — the ad network script will populate it
  return <div data-ad-zone={zone} className={className} />;
}
