# Vitalo Email Marketing Launch Plan

**Product Focus:** Brain & Focus Formula
**Platform:** Klaviyo + Shopify
**List Size:** ~15,000 subscribers
**Launch Target:** Week of March 24, 2026

---

## Campaign Architecture

### Phase 1: Pre-Launch Warm-Up (Days -3 to -1)

Before sending the 4-email sequence to the full list, warm up the domain and sender reputation.

| Day | Action | Segment |
|-----|--------|---------|
| -3 | Send a simple "We're live" brand announcement | Most engaged 1,500 (top 10%) |
| -2 | Monitor open rates, click rates, bounce rates | — |
| -1 | If metrics are healthy (>25% open), expand to 5,000 | Next most engaged 3,500 |

**Why:** Klaviyo + Shopify on a new sending domain needs gradual warm-up. Sending 15,000 emails day one risks spam folder placement. The warm-up builds ISP trust.

---

### Phase 2: Core 4-Email Nurture Sequence

This is the primary conversion sequence. All 4 emails are built and branded. Deploy as a **Klaviyo Flow** triggered on list entry.

| Email | Name | Send Day | Subject Line | Goal |
|-------|------|----------|-------------|------|
| 1 | The Hook | Day 0 | "Brain fog isn't normal aging." | Curiosity + problem awareness |
| 2 | The Problem | Day 2 | "You don't have a memory problem." | Education + differentiation |
| 3 | The Proof | Day 4 | "What's actually inside our Brain & Focus Formula" | Trust + ingredient transparency |
| 4 | The Close | Day 6 | "Last chance — your brain won't wait." | Conversion + Subscribe & Save |

**Flow Logic in Klaviyo:**
- Trigger: Added to "Brain & Focus Launch" list
- Conditional split after Email 2: If subscriber clicked Email 1 or 2 CTA → skip to Email 4 (they're warm, accelerate)
- Conditional split after Email 4: If NOT purchased → enter Winback Flow (see Phase 4)
- Exit condition: Placed Order (any Brain & Focus Formula variant)

---

### Phase 3: Sending Strategy for 15,000 Subscribers

Stagger the list entry across 5 days to maintain deliverability.

| Batch | Day | Segment | Size | Rationale |
|-------|-----|---------|------|-----------|
| 1 | Mon Mar 24 | Highest engagement score | 3,000 | Prove deliverability |
| 2 | Tue Mar 25 | High engagement | 3,000 | Build momentum |
| 3 | Wed Mar 26 | Medium engagement | 3,000 | Core audience |
| 4 | Thu Mar 27 | Medium-low engagement | 3,000 | Expand reach |
| 5 | Fri Mar 28 | Lowest engagement / newest | 3,000 | Final wave |

**Best Send Times (for 50+ demographic):**
- **Primary:** 8:00–9:00 AM local time (morning routine, coffee + email)
- **Secondary:** 6:00–7:00 PM local time (after dinner wind-down)
- Use Klaviyo's Smart Send Time after Batch 1 data comes in

---

### Phase 4: Post-Sequence Flows

#### A. Non-Purchaser Winback (starts Day 9)

For subscribers who received all 4 emails but didn't purchase.

| Email | Day | Subject Line | Approach |
|-------|-----|-------------|----------|
| W1 | Day 9 | "Still thinking it over?" | Empathy + FAQ objection handling |
| W2 | Day 12 | "What 60 days of clarity looks like" | Long-term benefit framing |
| W3 | Day 16 | "Your private offer: 15% off Brain & Focus" | One-time discount code (unique, single-use) |

#### B. Post-Purchase Flow (triggered on Placed Order)

| Email | Timing | Subject Line | Goal |
|-------|--------|-------------|------|
| P1 | Order confirmed | "Your brain is going to thank you." | Reinforce decision, set expectations |
| P2 | Day 5 post-delivery | "How to get the most from your formula" | Usage tips, reduce returns |
| P3 | Day 21 | "Notice anything different yet?" | Prompt review, build habit |
| P4 | Day 50 | "Your next bottle ships in 10 days" | Reorder / Subscribe & Save upsell |

#### C. Browse Abandonment (ongoing)

Trigger: Viewed Brain & Focus Formula product page but didn't add to cart within 1 hour.

| Email | Timing | Subject Line |
|-------|--------|-------------|
| BA1 | 1 hour after browse | "Still looking at Brain & Focus?" |
| BA2 | 24 hours | "Here's what convinced Linda S." (testimonial) |

#### D. Cart Abandonment (ongoing)

Trigger: Added to cart but didn't complete checkout within 1 hour.

| Email | Timing | Subject Line |
|-------|--------|-------------|
| CA1 | 1 hour | "You left something behind." |
| CA2 | 24 hours | "Your Brain & Focus Formula is still waiting" |
| CA3 | 48 hours | "Last call — free shipping on your order" |

---

## A/B Testing Plan

Run these tests on the first 3,000 subscribers (Batch 1) before rolling out to the full list.

### Test 1: Subject Line (Email 1)
- **A:** "Brain fog isn't normal aging."
- **B:** "The supplement industry doesn't want you to know this."
- Winner metric: Open rate after 24 hours
- Minimum sample: 1,500 per variant

### Test 2: CTA Button Copy (Email 4)
- **A:** "Start Your Subscription"
- **B:** "Lock In 10% Off Today"
- Winner metric: Click-through rate

### Test 3: Send Time
- **A:** 8:00 AM local
- **B:** 6:30 PM local
- Winner metric: Open rate + click rate combined

---

## Key Metrics & Targets

| Metric | Target | Industry Avg (Health/Supplements) |
|--------|--------|-----------------------------------|
| Open Rate | 30–40% | 21–25% |
| Click-Through Rate | 3.5–5% | 2.5–3% |
| Conversion Rate (email→purchase) | 1.5–2.5% | 0.5–1.5% |
| Unsubscribe Rate | <0.3% per email | 0.2–0.5% |
| Bounce Rate | <1% | 0.5–1% |
| Revenue per Email | $0.15–$0.30 | $0.08–$0.15 |

### Revenue Projections (Conservative)

Based on 15,000 list, 35% open rate, 4% CTR, 2% conversion:
- **Emails opened:** ~5,250 per send
- **Clicks to product page:** ~600 per send
- **Purchases from sequence:** ~210–375 across 4 emails
- **Revenue estimate:** $9,450–$16,875 from launch sequence alone
- **Subscribe & Save converts (est. 30% of buyers):** 63–112 recurring subscribers

---

## Segmentation Strategy

### Initial Segments to Build in Klaviyo

| Segment | Definition | Use |
|---------|-----------|-----|
| Hot Leads | Opened 3+ emails AND clicked 1+ CTA | Priority for Email 4, future launches |
| Warm Leads | Opened 1-2 emails, no clicks | Need more education, send Proof email |
| Cold Leads | 0 opens across sequence | Suppress or re-engage after 30 days |
| Buyers | Placed Order on Brain & Focus | Post-purchase flow, upsell other products |
| Subscribers | Active Subscribe & Save | VIP treatment, early access, loyalty |
| 50+ Identified | Self-identified age 50+ (from quiz/form) | Core targeting for all cognitive products |

### Engagement Scoring

Set up a Klaviyo custom property `engagement_score`:
- +1 for each email opened
- +3 for each CTA clicked
- +10 for each purchase
- -1 for each email not opened
- Use score to determine batch priority for future sends

---

## Klaviyo Setup Checklist

### Before Launch
- [ ] Import/sync 15,000 subscriber list to Klaviyo
- [ ] Create "Brain & Focus Launch" list
- [ ] Set up sending domain (SPF, DKIM, DMARC records via Shopify)
- [ ] Verify domain warm-up is complete or plan gradual ramp
- [ ] Upload all 4 email HTML templates to Klaviyo
- [ ] Replace `#` unsubscribe/preferences links with Klaviyo tags: `{{ unsubscribe_url }}` and `{{ manage_preferences_url }}`
- [ ] Replace CTA links with Klaviyo tracked URLs
- [ ] Set up the 4-email Flow with timing and conditional splits
- [ ] Create A/B test variants for Batch 1
- [ ] Set up conversion tracking (Shopify integration)
- [ ] Test all emails across devices (Litmus or Email on Acid)

### Post-Launch (Week 1)
- [ ] Monitor deliverability dashboard daily
- [ ] Check spam complaint rate (<0.1%)
- [ ] Review A/B test results after Batch 1 completes
- [ ] Apply winning variants to Batches 2-5
- [ ] Begin building post-purchase and abandonment flows

### Post-Launch (Week 2-4)
- [ ] Analyze full sequence performance
- [ ] Deploy Winback Flow for non-purchasers
- [ ] Launch Browse Abandonment and Cart Abandonment flows
- [ ] Plan next product launch email (Joint Support or Blood Sugar Support)
- [ ] Begin collecting reviews from purchasers for future email social proof

---

## Email Template Notes for Klaviyo Import

All 4 HTML files are Klaviyo-ready:
- **Google Fonts** loaded via `@import` (renders in Apple Mail, iOS, some Android; falls back gracefully in Gmail/Outlook)
- **MSO conditionals** included for Outlook compatibility
- **Table-based layout** for maximum email client support
- **600px max-width** container (email standard)
- **Inline styles only** (no external CSS dependencies)
- **FDA disclaimer** included in every footer
- **Unsubscribe/Preferences** links use `#` — replace with Klaviyo liquid tags before sending

### Klaviyo Liquid Tag Replacements
```
Unsubscribe: {{ unsubscribe_url }}
Preferences: {{ manage_preferences_url }}
First Name: {{ first_name|default:'there' }}
```

---

## Brand Consistency Reference

All emails now use the exact Vitalo brand palette:

| Element | Color | Hex |
|---------|-------|-----|
| Header/Hero Background | Vitalo Green Deep | `#1A2E1F` |
| CTA Buttons | Vitalo Gold | `#C9A84A` |
| CTA Button Text | Vitalo Green Deep | `#1A2E1F` |
| Gold Accents/Badges | Vitalo Gold | `#C9A84A` |
| Body Text | Vitalo Text | `#3D4A3E` |
| Bold/Emphasis Text | Vitalo Dark | `#2D3A2E` |
| Secondary Text | Vitalo Text Light | `#6B7B6C` |
| Checkmarks/Icons | Vitalo Green | `#4A7C59` |
| Email Background | Vitalo Cream | `#FAF8F5` |
| Email Body | Vitalo White | `#FDFCFA` |
| Footer Background | Vitalo Cream Dark | `#F0EDE7` |
| Borders/Dividers | Vitalo Border | `#E2DDD5` |
| Headings Font | Playfair Display 700 | Serif |
| Body Font | Source Sans 3 400-600 | Sans-serif |

---

*Plan created March 19, 2026 — Vitalo Email Marketing Team*
