#!/usr/bin/env bash
# Pre-deploy checks for drilldownreviews.com
# Runs on Vercel before the build to catch common issues early.
set -euo pipefail

echo "=== Pre-deploy checks ==="

# 1. Ensure required environment/config files exist
echo "Checking required files..."
for f in package.json next.config.ts site.config.ts tailwind.config.ts; do
  if [ ! -f "$f" ]; then
    echo "ERROR: Required file '$f' is missing."
    exit 1
  fi
done
echo "  OK: Required files present."

# 2. Check that content directory has articles
ARTICLE_COUNT=$(find content -name "*.md" ! -name "README.md" | wc -l)
if [ "$ARTICLE_COUNT" -lt 10 ]; then
  echo "ERROR: Expected at least 10 articles in content/, found $ARTICLE_COUNT."
  exit 1
fi
echo "  OK: $ARTICLE_COUNT articles found in content/."

# 3. Check no AFFILIATE_LINK_PLACEHOLDER values leak into content
# (they should be replaced with real Amazon URLs before deploying)
PLACEHOLDER_COUNT=$(grep -r "AFFILIATE_LINK_PLACEHOLDER" content/ --include="*.md" | wc -l)
if [ "$PLACEHOLDER_COUNT" -gt 0 ]; then
  echo "WARNING: $PLACEHOLDER_COUNT affiliate link placeholder(s) still in content."
  echo "  These will render as broken links. Replace with real Amazon Associates URLs."
  # Warn but do not block — affiliate links may still be pending Associates approval.
fi

# 4. Run npm install
echo "Running npm install..."
npm install

echo "=== Pre-deploy checks passed ==="
