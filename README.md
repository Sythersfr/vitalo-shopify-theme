# Vitalo Shopify Theme

A premium Shopify theme designed for **Vitalo** — The Supplement Company That Has Nothing to Hide. Features an editorial design with trust-building content sections, full-dose transparency messaging, and a physician-formulated supplement brand identity.

## Theme Features

- **Editorial Design**: Playfair Display headings + Source Sans 3 body text for a premium, trustworthy feel
- **Trust-First Architecture**: 14 custom sections designed to build customer confidence
- **Full E-Commerce**: Built on Shopify's Dawn theme with complete cart, product, and collection support
- **Mobile Responsive**: Fully optimized for all device sizes
- **Scroll Animations**: Smooth reveal-on-scroll effects for engaging user experience
- **Customizable**: Every section is editable through Shopify's theme editor

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#4A7C59` | Buttons, links, accents |
| Dark Green | `#2D5A3D` | Hover states, emphasis |
| Deep Green | `#1A2E1F` | Hero background, footer |
| Gold | `#C9A84A` | CTA buttons, highlights |
| Cream | `#FAF8F5` | Section backgrounds |
| Off White | `#FDFCFA` | Page backgrounds |
| Dark Text | `#2D3A2E` | Headings |

## Typography

- **Headings**: Playfair Display (700 weight) — elegant serif for trust and authority
- **Body**: Source Sans 3 (400/600 weight) — clean, readable sans-serif

## Homepage Sections

The homepage is built with 14 custom Vitalo sections:

1. **Vitalo Hero** — Full-screen hero with gradient background and gold CTA
2. **Trust Badges** — Clinically studied doses, 90-day guarantee, no hidden formulas
3. **Pain Point** — "Sick of Supplements That Promise Everything..."
4. **Comparison Table** — Vitalo vs. Other Brands feature comparison
5. **Products Grid** — Dynamic product cards from your Shopify collection
6. **Testimonials** — Customer stories with product attribution
7. **Stats Bar** — 50,000+ customers, 6 formulas, 90-day guarantee
8. **Our Story** — Brand origin narrative
9. **The Vitalo Standard** — GMP, transparency, testing, guarantee cards
10. **Industry Tricks** — Educational content about supplement industry
11. **FAQ** — Grouped collapsible FAQ (Products, Returns, Health)
12. **Newsletter** — Email signup with dark background
13. **CTA** — Final call-to-action
14. **Footer Tagline** — Trust badges + FDA disclaimer

## Products

- Blood Sugar Support — $45 (Best Seller)
- Joint Support — $29.90
- Memory & Focus — $49 (New)
- Men's Vitality — $44
- Heart & Circulation — $42
- Deep Sleep Formula — $34

## Installation

### Via GitHub Integration
1. Go to Shopify Admin → Online Store → Themes
2. Click "Add theme" → "Connect from GitHub"
3. Select this repository and the `main` branch

### Via ZIP Upload
1. Download this repository as a ZIP file
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload zip file"

## File Structure

```
├── assets/
│   ├── vitalo-custom.css    # Complete Vitalo design system
│   ├── vitalo.js            # Scroll animations + FAQ accordion
│   └── ...                  # Dawn base assets
├── config/
│   ├── settings_schema.json # Theme settings definition
│   └── settings_data.json   # Vitalo brand defaults
├── layout/
│   └── theme.liquid          # Main layout (Google Fonts loaded here)
├── sections/
│   ├── vitalo-hero.liquid
│   ├── vitalo-trust-badges.liquid
│   ├── vitalo-pain-point.liquid
│   ├── vitalo-comparison.liquid
│   ├── vitalo-products.liquid
│   ├── vitalo-testimonials.liquid
│   ├── vitalo-stats.liquid
│   ├── vitalo-story.liquid
│   ├── vitalo-standard.liquid
│   ├── vitalo-tricks.liquid
│   ├── vitalo-faq.liquid
│   ├── vitalo-newsletter.liquid
│   ├── vitalo-cta.liquid
│   ├── vitalo-footer-tagline.liquid
│   └── ...                    # Dawn base sections
├── snippets/                  # Reusable components
├── templates/
│   ├── index.json            # Homepage (14 Vitalo sections)
│   └── ...                   # Dawn base templates
└── locales/                  # Translation files
```

## Contact

- Email: support@vitalo.io
- Phone: (800) 555-0199

## License

Based on Shopify's Dawn theme. Subject to Shopify's theme license terms.

---

**Vitalo** — The Supplement Company That Has Nothing to Hide.
