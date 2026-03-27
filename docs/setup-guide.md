# WordPress Setup Guide: Home Improvement Affiliate Site

Complete step-by-step guide for setting up the site infrastructure. Follow in order.

---

## Prerequisites Checklist (Board Actions)

Before starting any step below, confirm these are in place:
- [ ] Domain registered (e.g., homeprochoice.com)
- [ ] WordPress hosting account created (Kinsta, WP Engine, or SiteGround)
- [ ] Domain nameservers pointed to hosting provider
- [ ] Amazon Associates account approved
- [ ] CJ Affiliate account approved + Home Depot program joined

---

## Step 1: Install WordPress

Most managed WordPress hosts (Kinsta, SiteGround) provide one-click WordPress installation.

1. Log in to your hosting control panel
2. Find "WordPress" or "Auto Installer"
3. Click "Install"
4. Set:
   - Site title: "HomeProChoice" (or chosen name)
   - Admin username: use something other than "admin"
   - Admin password: strong, 16+ characters
   - Admin email: your email

---

## Step 2: Install Kadence Theme

1. WordPress Admin → Appearance → Themes → Add New
2. Search "Kadence"
3. Install and Activate

### Recommended Kadence Settings

**Appearance → Customize → Colors:**
- Primary: `#1a56db` (professional blue)
- Secondary: `#111827` (dark text)
- Accent: `#f59e0b` (amber — good for CTAs)

**Appearance → Customize → Typography:**
- Body font: Inter or Roboto (Google Fonts, free)
- Heading font: Inter or Poppins

**Layout:**
- Max content width: 1140px
- Sidebar: right sidebar for posts/reviews

---

## Step 3: Install Required Plugins

Install in this order via Plugins → Add New:

### Essential Plugins

| Plugin | Purpose | Cost |
|---|---|---|
| Rank Math SEO | On-page SEO, schema, sitemaps | Free |
| WP Rocket | Caching and performance | ~$59/yr |
| Cloudflare | CDN and security | Free tier |
| Pretty Links | Affiliate link management | Free |
| WP Forms Lite | Contact form | Free |
| Site Kit by Google | GA4 + Search Console integration | Free |

### Optional but Recommended

| Plugin | Purpose | Cost |
|---|---|---|
| ShortPixel | Image compression | Free tier |
| Table Press | Comparison tables | Free |
| AAWP | Amazon affiliate widgets (auto price update) | ~$49/yr |

---

## Step 4: Configure Rank Math SEO

1. Plugins → Rank Math → Setup Wizard
2. Choose "Easy" setup mode
3. Connect Google Search Console (requires Google account)
4. Enable Schema (set to "Article" as default)

### Key Rank Math Settings

**SEO → Titles & Meta → Posts:**
- Title format: `%title% (%currentyear%) | %sitename%`
- Meta description: leave blank (fill per-post)

**SEO → Sitemap:**
- Enable XML sitemap: YES
- Submit to Google Search Console (Step 5)

**SEO → Schema:**
- Default schema: Article
- For buyer guides: set to ItemList
- For reviews: set to Review
- For how-to posts: set to HowTo

---

## Step 5: Configure Google Analytics 4 + Search Console

### Google Analytics 4

1. Go to analytics.google.com
2. Create a new property → Web → enter your domain
3. Get your Measurement ID (starts with G-)
4. WordPress → Site Kit → Settings → Connect Google Analytics
5. Paste Measurement ID

### Google Search Console

1. Go to search.google.com/search-console
2. Add property → URL prefix → enter domain
3. Verify via Site Kit plugin (automatic)
4. Submit sitemap: `https://yourdomain.com/sitemap_index.xml`

---

## Step 6: Configure WP Rocket (Performance)

After installing WP Rocket:

1. WP Rocket → Cache:
   - Enable page caching: YES
   - Cache lifespan: 10 hours

2. WP Rocket → File Optimization:
   - Minify CSS: YES
   - Minify JavaScript: YES (if no errors)
   - Defer non-essential JS: YES

3. WP Rocket → Media:
   - Lazy load images: YES
   - WebP format: YES (requires ShortPixel)

4. WP Rocket → Preload:
   - Enable preload: YES

**Target Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5 seconds
- CLS (Cumulative Layout Shift): < 0.1
- FID/INP: < 200ms

Test at: pagespeed.web.dev

---

## Step 7: Set Up Pretty Links (Affiliate Link Management)

Pretty Links cloaks affiliate URLs so they look like `/go/dewalt-drill` instead of a long Amazon URL. Required for Amazon Associates compliance (must still disclose).

1. Pretty Links → Add New Link
2. For each affiliate product:
   - Target URL: your Amazon affiliate link (with your Associates tag)
   - Pretty Link: `/go/product-name` (e.g., `/go/dewalt-dcd777`)
   - Click tracking: YES

**Format for Amazon links:**
```
https://www.amazon.com/dp/[ASIN]?tag=YOUR_AMAZON_TAG
```
Replace `YOUR_AMAZON_TAG` with your Amazon Associates tracking ID.

---

## Step 8: Configure Cloudflare (CDN)

1. Sign up at cloudflare.com (free)
2. Add your site → Cloudflare scans DNS
3. Update nameservers at your domain registrar to Cloudflare's
4. WordPress → Plugins → Cloudflare → Connect

### Recommended Cloudflare Settings

- SSL/TLS: Full (strict)
- Always HTTPS: ON
- Auto Minify: CSS, JavaScript, HTML
- Browser Cache TTL: 4 hours
- Rocket Loader: Test before enabling (can break some scripts)

---

## Step 9: Set Up robots.txt

Replace WordPress default robots.txt (Settings → Rank Math → General Settings → Edit robots.txt):

```
User-agent: *
Allow: /

# Disallow admin and login
Disallow: /wp-admin/
Disallow: /wp-login.php

# Sitemap
Sitemap: https://yourdomain.com/sitemap_index.xml
```

---

## Step 10: Set Up Affiliate Disclosure (FTC Required)

Create a page: Pages → Add New → Title: "Affiliate Disclosure"

Content:
> "[Site Name] is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We may also earn commissions from other affiliate programs. This does not affect our editorial independence — all product recommendations are based on honest research and testing."

Add disclosure to:
- Footer (link from every page)
- Top of every article that contains affiliate links (FTC compliance)

**Footer disclosure snippet for every page:**
> "This site contains affiliate links. We may earn a commission when you purchase through our links at no extra cost to you."

---

## Step 11: Configure Email Capture (Mailchimp)

1. Create free account at mailchimp.com
2. Create audience list: "Home Improvement Tips"
3. Create embedded signup form
4. Add to WordPress via WP Forms → Mailchimp integration, or embed HTML widget in sidebar/footer

Lead magnet ideas:
- "10 Power Tool Mistakes That Cost Money (Free Guide)"
- "DIY Project Cost Calculator Spreadsheet"

---

## Post-Launch Checklist

- [ ] All plugins installed and configured
- [ ] Google Analytics verified (test via GA4 real-time view)
- [ ] Search Console sitemap submitted
- [ ] SSL certificate active (green padlock in browser)
- [ ] Affiliate disclosure on every article
- [ ] Pretty Links set up for all affiliate URLs
- [ ] Amazon Associates tracking ID confirmed in all links
- [ ] Core Web Vitals passing (test at pagespeed.web.dev)
- [ ] Mobile responsive (test at Google Mobile-Friendly Test)
- [ ] Spam filter active (Akismet or similar)

---

*Created by CTO for DOL-5. Update this guide as the build progresses.*
