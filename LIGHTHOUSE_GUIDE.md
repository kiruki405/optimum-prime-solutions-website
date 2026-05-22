# Running Lighthouse Audit

## 🔍 Local Testing (Recommended)

### Option 1: Chrome DevTools (Easiest)
1. Build the project: `npm run build`
2. Run preview: `npm run preview` (starts local server at http://localhost:4173)
3. Open Chrome/Edge browser
4. Press `F12` to open DevTools
5. Click "Lighthouse" tab
6. Select "Mobile" or "Desktop"
7. Click "Analyze page load"
8. Wait 1-2 minutes for results

### Option 2: Lighthouse CLI
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run audit on local server
npm run preview  # in terminal 1
lighthouse http://localhost:4173 --view  # in terminal 2
```

### Option 3: PageSpeed Insights (Online)
1. Visit https://pagespeed.web.dev/
2. Enter your website URL (after deployment)
3. Click "Analyze"
4. Wait for results

---

## 📊 Current Performance Status

### Build Size
- **Total**: 850 KB (raw)
- **Gzipped**: 237 KB
- **Minified**: ✅ Yes (esbuild)
- **Comments Removed**: ✅ Yes
- **Unused Code Eliminated**: ✅ Yes (via Vite tree-shaking)

### Optimization Checklist
- ✅ CSS minified
- ✅ JavaScript minified
- ✅ Caching headers configured
- ✅ Security headers enabled
- ✅ Async scripts where possible
- ✅ Lazy loading utilities created
- ⏳ Image optimization (awaiting WebP conversion)

---

## 🎯 Expected Lighthouse Scores

| Category | Target | Status |
|----------|--------|--------|
| Performance | 90+ | Pending audit |
| Accessibility | 95+ | Pending audit |
| Best Practices | 95+ | Pending audit |
| SEO | 100 | Pending audit |

---

## 📈 Opportunities for Improvement

Based on typical React apps:

1. **Images** (if not optimized)
   - Serve WebP instead of JPEG/PNG: +10-15 points
   - Responsive images: +5 points
   - Lazy loading: +5 points

2. **Code Splitting** (when not single-file)
   - Split vendor code: +5 points
   - Defer non-critical JS: +5 points

3. **Third-party Scripts**
   - Defer analytics scripts: +5 points
   - Async GA4: ✅ Already done

4. **Fonts**
   - Font optimization: ✅ Already done
   - Preload critical fonts: Already configured

---

## 🔧 Step-by-Step Lighthouse Test

### Before Running Audit
```bash
# 1. Build production bundle
npm run build

# 2. Start local preview server
npm run preview
# Output: VITE v7.3.2  ready in 123 ms
#         ➜  Local:   http://localhost:4173/
```

### Run Lighthouse
```bash
# Terminal 1: Keep npm preview running
npm run preview

# Terminal 2: Run lighthouse
lighthouse http://localhost:4173 --view

# This opens browser with full report
```

### Review Results
1. Look for red/orange items (needs work)
2. Check "Opportunities" section
3. Check "Diagnostics" section
4. Note the Core Web Vitals:
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

---

## 🚀 Post-Audit Actions

### If Performance < 90
1. Check what's slowing it down (Lighthouse report)
2. Convert remaining images to WebP
3. Defer non-critical Firebase code
4. Check for render-blocking resources

### If Accessibility < 95
1. Add missing alt text to images
2. Improve color contrast
3. Add ARIA labels where needed
4. Test with keyboard navigation

### If Best Practices < 95
1. Update deprecated APIs
2. Check browser compatibility
3. Review external dependencies
4. Check for console errors

### If SEO < 100
1. Verify meta tags
2. Check structured data
3. Verify mobile-friendly
4. Test mobile usability

---

## 📝 Lighthouse Report Checklist

After running audit, verify:

- [ ] Performance score visible
- [ ] Accessibility score visible
- [ ] Best Practices score visible
- [ ] SEO score visible
- [ ] Core Web Vitals shown
- [ ] LCP < 2.5s (good)
- [ ] FID < 100ms (good)
- [ ] CLS < 0.1 (good)
- [ ] No red diagnostics
- [ ] Opportunities list reviewed

---

## 💾 Saving Lighthouse Reports

```bash
# Generate JSON report
lighthouse http://localhost:4173 --output=json > lighthouse-report.json

# Generate HTML report
lighthouse http://localhost:4173 --output=html > lighthouse-report.html

# Both
lighthouse http://localhost:4173 --output=json --output=html
```

---

## 🔗 Useful Links

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Chrome DevTools Lighthouse](https://developer.chrome.com/docs/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [Vite Performance Guide](https://vitejs.dev/guide/build.html)
- [Image Optimization](https://web.dev/optimize-images/)

---

## ✅ Summary

Your website is now optimized for:
- ✅ Fast loading (minified + gzipped)
- ✅ SEO (meta tags + structured data)
- ✅ Security (headers + HTTPS ready)
- ✅ Accessibility (semantic HTML + ARIA)
- ✅ Mobile (responsive + touch-friendly)

**Next step:** Run Lighthouse audit to get baseline scores and identify remaining optimizations.
