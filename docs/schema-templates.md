# JSON-LD Schema Templates

These schema templates should be added to each post type for rich snippet eligibility in Google Search.
Add to the `<head>` section of each page, or via Rank Math's Schema tab in the post editor.

---

## 1. ItemList Schema — Buyer Guides ("Best X" articles)

Use for: all "Best [Product]" buyer guide articles.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Cordless Drills Under $100",
  "description": "Top 5 cordless drills under $100 for DIY homeowners",
  "url": "https://yourdomain.com/best-cordless-drills-under-100",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "DEWALT DCD777C2",
      "url": "https://yourdomain.com/best-cordless-drills-under-100#dewalt-dcd777c2",
      "description": "Best overall cordless drill under $100"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "BLACK+DECKER 20V MAX",
      "url": "https://yourdomain.com/best-cordless-drills-under-100#blackdecker-20v",
      "description": "Best budget cordless drill"
    }
  ]
}
```

---

## 2. Review Schema — Product Review Articles

Use for: all single product review articles.

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "name": "DEWALT DCD777C2 Review",
  "reviewBody": "The DEWALT DCD777C2 is an excellent compact brushless drill for home use...",
  "datePublished": "2025-03-01",
  "dateModified": "2025-03-01",
  "author": {
    "@type": "Organization",
    "name": "HomeProChoice"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "itemReviewed": {
    "@type": "Product",
    "name": "DEWALT DCD777C2 20V MAX Brushless Drill",
    "brand": {
      "@type": "Brand",
      "name": "DEWALT"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "99.00",
      "availability": "https://schema.org/InStock",
      "url": "https://www.amazon.com/dp/B07MN4JJF4?tag=YOUR_TAG"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "8420",
      "bestRating": "5"
    }
  }
}
```

---

## 3. HowTo Schema — How-To Guide Articles

Use for: all how-to guide articles.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Pressure Wash a Driveway",
  "description": "A complete step-by-step guide for pressure washing a concrete or asphalt driveway.",
  "totalTime": "PT2H",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Pressure washer (2,000-3,000 PSI)"
    },
    {
      "@type": "HowToTool",
      "name": "Surface cleaner attachment"
    },
    {
      "@type": "HowToTool",
      "name": "Safety glasses"
    }
  ],
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Concrete degreaser"
    },
    {
      "@type": "HowToSupply",
      "name": "Pressure washer detergent"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Clear the driveway",
      "text": "Remove all cars, bikes, furniture, and potted plants from the driveway. Sweep to remove loose debris.",
      "position": 1
    },
    {
      "@type": "HowToStep",
      "name": "Pre-treat oil stains",
      "text": "Apply concrete degreaser to oil stains. Scrub and let soak 15–30 minutes.",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "name": "Set up the pressure washer",
      "text": "Connect water supply, attach wand and nozzle. Start machine and purge air.",
      "position": 3
    },
    {
      "@type": "HowToStep",
      "name": "Apply detergent",
      "text": "Use the soap nozzle (black) to apply concrete cleaner. Allow 3–5 minutes dwell time.",
      "position": 4
    },
    {
      "@type": "HowToStep",
      "name": "Pressure wash the surface",
      "text": "Using the surface cleaner or 25° nozzle, wash in overlapping rows from top to bottom.",
      "position": 5
    },
    {
      "@type": "HowToStep",
      "name": "Final rinse",
      "text": "Rinse the entire driveway with the 25° nozzle, directing water to the street.",
      "position": 6
    }
  ]
}
```

---

## 4. FAQPage Schema — Add to Any Article with FAQ Section

Use for: any article that includes a Frequently Asked Questions section.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What PSI do I need to clean a concrete driveway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2,000–3,000 PSI is ideal for concrete driveways. For lightly soiled surfaces, 1,800 PSI works. For oil stains and heavy fouling, use 2,500+ PSI with a surface cleaner attachment."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I pressure wash my driveway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once or twice per year is sufficient for most driveways. More frequently in wet climates where algae and moss accumulate."
      }
    }
  ]
}
```

---

## How to Add Schema in Rank Math

1. Open the post editor in WordPress
2. In the Rank Math sidebar panel (right side), click **Schema**
3. Click **Add Schema**
4. For buyer guides: select **ItemList**
5. For reviews: select **Review**
6. For how-to: select **HowTo**
7. Rank Math will auto-fill most fields from the post content
8. For custom/advanced schema: use **Schema Generator → Custom Schema** and paste the JSON above

---

## Stacking Multiple Schema Types

Many posts can benefit from multiple schema types. Common combinations:

- **Buyer guide**: ItemList + FAQPage
- **Product review**: Review + FAQPage
- **How-to guide**: HowTo + FAQPage

To stack in Rank Math: add multiple schemas via the "Add Schema" button (one for each type).

---

*Created by CTO for DOL-5 Phase 3 SEO setup.*
