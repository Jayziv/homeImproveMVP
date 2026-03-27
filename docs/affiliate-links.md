# Affiliate Link Setup Guide

How to properly set up, manage, and disclose affiliate links for Amazon Associates and CJ Affiliate (Home Depot).

---

## Amazon Associates

### Getting Your Tag

After your Amazon Associates account is approved:
1. Log in at affiliate-program.amazon.com
2. Find your **Store ID / Tracking ID** in Account Settings
3. Your default tag looks like: `yourname-20`

### Building an Amazon Affiliate Link

**Method 1 — SiteStripe (easiest):**
1. Install the Amazon Associates SiteStripe toolbar (available after account approval)
2. Browse to any Amazon product
3. Click "Text" in the SiteStripe bar at the top of the page
4. Copy the generated link — it includes your tag automatically

**Method 2 — Manual:**
```
https://www.amazon.com/dp/[ASIN]?tag=YOUR_TAG
```
Replace `[ASIN]` with the product's ASIN (found in the product URL or "Product Information" section on the Amazon product page).

Example:
```
https://www.amazon.com/dp/B07MN4JJF4?tag=homeprochoice-20
```

### Setting Up in Pretty Links

For each product in the content files, create a Pretty Link:

1. WordPress Admin → Pretty Links → Add New
2. **Target URL**: your full Amazon affiliate URL
3. **Redirect**: 301 (permanent)
4. **Pretty Link slug**: `/go/product-slug` (e.g., `/go/dewalt-dcd777`)
5. Save

In the content files, replace `AFFILIATE_LINK_PLACEHOLDER` with your Pretty Link URL:
```
https://yourdomain.com/go/dewalt-dcd777
```

### Amazon Associates Rules (Important)

- **Must disclose** affiliate relationship on every page with Amazon links
- **Cannot cloak links** that hide the Amazon destination — Pretty Links redirects are allowed as long as you disclose
- **Price mentions**: Do not list specific prices in content (they change frequently). Say "Check current price" instead.
- **Cannot use affiliate links in emails** — only on your website
- **Images from Amazon**: Use the SiteStripe image widget, not downloaded product images, to comply with Amazon's terms

---

## CJ Affiliate (Home Depot)

### Getting Your Publisher ID

After CJ Affiliate account approval and Home Depot program join:
1. Log in at cj.com
2. Go to Account → CJ Publisher ID
3. Your Publisher ID appears at the top of the dashboard

### Getting Home Depot Affiliate Links

1. CJ Affiliate dashboard → Advertisers → Home Depot
2. Click "Get Links"
3. Find the product or category link you want
4. Copy the tracking URL — it includes your publisher ID

### Home Depot Deep Link Format

```
https://www.homedepot.com/p/[PRODUCT-SLUG]/[PRODUCT-ID]?cm_mmc=afl-ir-[CID]-[PID]
```

Most CJ affiliate links are generated through their dashboard and include all tracking parameters automatically.

---

## Updating the Content Files

All content files in `/content/` contain the placeholder `AFFILIATE_LINK_PLACEHOLDER`. Before publishing each article:

1. Identify each product mentioned
2. Create the Amazon affiliate link (or use Pretty Links slug)
3. Replace each `AFFILIATE_LINK_PLACEHOLDER` with the actual link
4. For category-level links (e.g., "Shop all cordless drills on Amazon"), use:
   ```
   https://www.amazon.com/s?k=cordless+drills&tag=YOUR_TAG
   ```

### Replacement Checklist Template

For each article, track replacements:

```
Article: best-cordless-drills-under-100.md

Product Links:
[ ] DEWALT DCD777C2 → amazon.com/dp/[ASIN]?tag=YOUR_TAG
[ ] BLACK+DECKER 20V MAX → amazon.com/dp/[ASIN]?tag=YOUR_TAG
[ ] Ryobi PCL206K2 → amazon.com/dp/[ASIN]?tag=YOUR_TAG
[ ] Makita FD07R1 → amazon.com/dp/[ASIN]?tag=YOUR_TAG
[ ] Skil PWRCore 12 → amazon.com/dp/[ASIN]?tag=YOUR_TAG

Category Links:
[ ] "Shop all cordless drills" → amazon.com/s?k=cordless+drills&tag=YOUR_TAG
```

---

## ASIN Quick Reference (Top Products)

Look up ASINs from Amazon product pages. Common ASINs as of writing (verify current):

| Product | ASIN |
|---|---|
| DEWALT DCD777C2 | B07MN4JJF4 |
| DEWALT DCD771C2 | B00ET5VMTU |
| Milwaukee 2801-22CT | B00IXHE7DG |
| Sun Joe SPX3000 | B00CPIVKBO |
| Karcher K1700 | B00E6PBHC6 |
| Graco Magnum X5 | B0084X2V6C |
| EGO LB3410 | B07PFG7K5N |
| Greenworks 40V blower | B07YHC2KP3 |

**Always verify ASINs before publishing** — products get relisted and ASINs can change.

---

## FTC Disclosure Requirements

The FTC requires clear disclosure of all material connections, including affiliate relationships.

### Required disclosures:

**At the top of every article with affiliate links:**
```
Disclosure: This article contains affiliate links. If you purchase through our links, we may earn a small commission at no extra cost to you. This does not affect our editorial recommendations.
```

**In the site footer (appears on all pages):**
```
HomeProChoice is a participant in the Amazon Services LLC Associates Program and other affiliate programs. We earn commissions from qualifying purchases.
```

**Rank Math SEO Note:** Add the disclosure above the first product mention in each article, not at the very bottom where readers may miss it.

---

*Created by CTO for DOL-5 Phase 1 setup.*
