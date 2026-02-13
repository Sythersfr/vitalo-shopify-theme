# Vitalo Shopify Theme

A premium Shopify theme designed specifically for **Vitalo Blood Sugar Support** supplements. Features a clean, natural aesthetic with botanical design elements perfect for health and wellness products.

## Theme Features

- **Natural Color Palette**: Forest greens, gold accents, and warm cream tones
- **Botanical Design Elements**: Subtle nature-inspired patterns and decorations
- **Health Product Focused**: Designed for supplement and wellness stores
- **Modern UI/UX**: Clean, professional layout with smooth animations
- **Mobile Responsive**: Fully optimized for all device sizes
- **Fast Performance**: Built on Shopify's Dawn theme architecture

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#4A7C59` | Buttons, links, accents |
| Gold | `#C9A84A` | Highlights, sale badges |
| Cream | `#F8F5F0` | Backgrounds |
| Dark Green | `#2D3A2E` | Text, headings |
| Off White | `#FDFCFA` | Page backgrounds |

## Installation

### Via GitHub Integration

1. Go to your Shopify Admin → Online Store → Themes
2. Click "Add theme" → "Connect from GitHub"
3. Select this repository
4. Choose the branch to connect

### Via Theme Upload

1. Download this repository as a ZIP file
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload zip file"
4. Upload the ZIP file

## Customization

### Theme Settings

Access theme settings in your Shopify admin:
- **Colors**: 5 pre-configured color schemes
- **Typography**: Lato font family (header weight: 700, body weight: 400)
- **Layout**: 1400px max page width with generous spacing
- **Cards**: Rounded corners (12px) with subtle shadows
- **Buttons**: Rounded (8px) with gradient hover effects

### Custom CSS

Additional styling is available in `assets/vitalo-custom.css`. Key classes:

```css
.vitalo-bg-cream     /* Cream background */
.vitalo-bg-green     /* Green background */
.vitalo-text-green   /* Green text */
.vitalo-text-gold    /* Gold text */
.vitalo-rounded-md   /* 12px border radius */
.vitalo-shadow-soft  /* Soft shadow */
```

## File Structure

```
vitalo-theme/
├── assets/
│   ├── vitalo-custom.css    # Custom Vitalo styles
│   └── ...                  # Other assets
├── config/
│   ├── settings_schema.json # Theme settings definition
│   └── settings_data.json   # Default theme values
├── layout/
│   └── theme.liquid         # Main layout template
├── locales/                 # Translation files
├── sections/                # Theme sections
├── snippets/                # Reusable code snippets
└── templates/               # Page templates
```

## Sections Included

- Header with navigation
- Announcement bar
- Hero/Slideshow
- Featured collection
- Image with text
- Rich text
- Testimonials
- Newsletter signup
- Footer with multiple columns

## Recommended Apps

For a complete supplement store experience, consider:
- **Reviews**: Judge.me, Loox, or Stamped.io
- **Subscriptions**: Recharge or Bold Subscriptions
- **Upsells**: ReConvert or Bold Upsell
- **Trust Badges**: Trust Badge Master

## Support

For theme customization or support:
- Email: support@vitalo.com
- Documentation: Shopify Theme Docs

## License

This theme is based on Shopify's Dawn theme and is subject to Shopify's theme license terms.

---

**Vitalo LLC** - Natural Blood Sugar Support  
*Supporting healthy glucose metabolism and insulin sensitivity*
