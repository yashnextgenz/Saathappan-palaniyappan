# DUCO Traders — Design Specification & System Document

> **Stitch Project:** Saathappan Palaniyappan  
> **Project ID:** `1656367245039973128`  
> **Source Screen Resource:** `projects/1656367245039973128/screens/18338439250662340243`  
> **Screen Title / Label:** `d04a725d-19eb-4eb0-8c39-21ad6e3cd34f.jpg`  
> **Screen Dimensions:** 1024 × 1536 px  
> **Brand / Company Name:** **DUCO TRADERS**  
> **Core Tagline:** *"Trusted Today for a Better Tomorrow"*  
> **Pillars:** Sea Salt | Apartment Management | A Stronger Tomorrow  

---

## 1. Executive Summary & Brand Overview

DUCO Traders is a multi-sector enterprise based in Tamil Nadu, India, with over **20+ years of operational experience**. The business operates across two distinct pillars:
1. **Primary Business:** Sea Salt Manufacturing & Wholesale Supply for industrial clients (chemical, fertilizer, and bulk distribution).
2. **Secondary Business:** Apartment Management Services, providing structured maintenance, MEP coordination, tenant handling, and operational supervision for residential communities.

The visual design language is professional, dependable, clean, and corporate. It blends oceanic marine tones (representing sea salt production) with modern architectural blues/grays (representing property management) and high-contrast call-to-action elements.

---

## 2. Global Design System & Tokens

### 2.1 Color Palette

| Token Name | Hex Code | Tailwind Equivalent | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-primary-navy` | `#0A2540` | `slate-900 / navy` | Main brand color, headings, primary buttons, footer background |
| `--color-deep-blue` | `#0F3A66` | `sky-950` | Top banner gradient, hero accents, active states |
| `--color-teal-dark` | `#134E5E` | `teal-900` | Vision card background, marine theme accents |
| `--color-teal-accent` | `#00A896` | `teal-600` | Mission card accent, checkmark badges, active indicators |
| `--color-cyan-badge` | `#E6F7F5` | `teal-50` | Service pill tags, icon background highlights |
| `--color-accent-gold` | `#F59E0B` | `amber-500` | 20+ Years experience wreath icon & badge highlights |
| `--color-bg-light` | `#F8FAFC` | `slate-50` | Primary section background, alternating section rows |
| `--color-card-bg` | `#FFFFFF` | `white` | Cards, input containers, clean modal surfaces |
| `--color-border` | `#E2E8F0` | `slate-200` | Card borders, input field borders, subtle dividers |
| `--color-text-main` | `#0F172A` | `slate-900` | Primary headings, prominent body copy |
| `--color-text-muted` | `#475569` | `slate-600` | Descriptions, secondary labels, metadata |
| `--color-text-light` | `#FFFFFF` | `white` | Hero text on dark banners, footer text, button text |

---

### 2.2 Typography

* **Primary Body & Interface Font:** `Inter`, `Plus Jakarta Sans`, or system sans-serif (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
  * Clean, geometric, neutral with excellent readability for business information and forms.
* **Display / Headline Font:** `Plus Jakarta Sans` or `Montserrat` (Weights: `600`, `700`, `800`)
  * Bold, authoritative, and structured.
* **Accent / Script Font:** `Playfair Display Italic` or Google Font `Caveat` / `Great Vibes`
  * Used selectively for tagline flourishes: *"Trusted Today for a Better Tomorrow"* and footer branding *"DUCO Traders"*.

#### Type Hierarchy Scale:
* **Display 1 (Top Hero):** `36px - 44px` / Line Height: `1.2` / Weight: `700`
* **Heading 1 (Section Titles):** `28px - 34px` / Line Height: `1.25` / Weight: `700`
* **Heading 2 (Card / Subsection Titles):** `20px - 24px` / Line Height: `1.3` / Weight: `600`
* **Heading 3 (Minor Headers / Labels):** `16px - 18px` / Line Height: `1.4` / Weight: `600`
* **Body Regular:** `14px - 16px` / Line Height: `1.6` / Weight: `400`
* **Body Small / Captions:** `12px - 13px` / Line Height: `1.5` / Weight: `500`
* **Pill Badges & Buttons:** `13px - 15px` / Line Height: `1` / Weight: `600`

---

### 2.3 Component System

#### 1. Buttons
* **Primary Action Button:**
  * Background: `#0A2540` (Navy)
  * Text: White (`#FFFFFF`), font weight 600
  * Shape: Fully rounded pill (`border-radius: 9999px`)
  * Icon: Right arrow `→` with 8px left margin
  * Padding: `12px 24px` (Desktop), `10px 20px` (Mobile)
  * Hover: Darkened teal/navy `#001F3F`, slight lift (`translate-y: -1px`, `shadow-md`)
* **Secondary / Outline Button:**
  * Background: Transparent or `#FFFFFF`
  * Border: `1.5px solid #0A2540` or `#CBD5E1`
  * Text: `#0A2540`
  * Shape: Rounded pill (`border-radius: 9999px`)
* **Round Action Button (Card Arrow):**
  * Circular button (`w-10 h-10` or `36px × 36px`), navy background, white centered arrow `→`.

#### 2. Service & Category Pills
* Capsule badges with uppercase text and bold numbering:
  * Example: `01 OUR PRIMARY BUSINESS` (Dark Navy background, white text)
  * Example: `02 OUR SECONDARY BUSINESS` (Teal background `#00A896`, white text)

#### 3. Cards & Containers
* Background: `#FFFFFF`
* Border radius: `12px` to `16px`
* Border: `1px solid #E2E8F0`
* Shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`
* Hover state: Elevated shadow `0 10px 15px -3px rgba(0, 0, 0, 0.08)`, subtle border accent.

#### 4. Form Controls
* Field height: `44px` to `48px`
* Border: `1px solid #CBD5E1`, rounded `8px`
* Prefix icon: Embedded SVG icons (`User`, `Building`, `Phone`, `Mail`, `Layers`, `Message`) in muted slate `#94A3B8`
* Placeholder: `#94A3B8`, font size `14px`
* Focus state: Border `#0A2540`, ring `2px rgba(10, 37, 64, 0.15)`

---

## 3. Screen-by-Screen Layout Specifications

The design canvas is organized into 4 distinct primary pages framed with common header and footer banners.

```
+---------------------------------------------------------------+
|                      TOP HERO BRAND BANNER                    |
|   DUCO TRADERS | "Trusted Today for a Better Tomorrow" | 20+  |
+---------------------------------------------------------------+
|                      STICKY NAVBAR                            |
|   [DUCO Logo]   Home   About Us   Services   Contact Us   [CTA]
+-------------------------------+-------------------------------+
|                               |                               |
|       01 HOME PAGE            |       02 ABOUT US PAGE        |
|                               |                               |
| - Hero Headline & Subtext     | - Intro & Salt Crystal Hero   |
| - CTA Pair & Saltworker Hero  | - 3 Pillars: Vision/Mission/  |
| - 3 Trust Stat Badges         |   Values Cards                |
| - 2 Featured Service Cards    | - 20+ Years Regional Highlight|
|                               |                               |
+-------------------------------+-------------------------------+
|                               |                               |
|       03 SERVICES PAGE        |       04 CONTACT US PAGE      |
|                               |                               |
| - "Two Distinct Strengths..." | - "Get in Touch..." Header    |
| - Service 01: Sea Salt Supply | - 6-Field Interactive Form    |
|   (Checklist + 4-image grid)  | - Location Card with Map      |
| - Service 02: Apartment Mgmt  | - Direct Contact Details Box  |
|   (Checklist + 4-image grid)  |                               |
+-------------------------------+-------------------------------+
|                     BOTTOM VALUE BANNER                       |
|   [Sea to Industry]   [Better Living]   [Growing for Tomorrow]|
|                DUCO Traders | TRUST | QUALITY                 |
+---------------------------------------------------------------+
```

---

### 3.1 Global Top Brand Header Banner
* **Visual Elements:**
  * Background: Deep oceanic sea waves with rich navy vignette overlay.
  * Left: **DUCO TRADERS** brand logo with custom nautical & geometric typography.
  * Tagline strip: `SEA SALT | APARTMENT MANAGEMENT | A STRONGER TOMORROW`.
  * Center / Right script callout: *"Trusted Today for a Better Tomorrow"* in elegant white script lettering.
  * Right badge: Circular laurel wreath with **"20+ YEARS OF EXPERIENCE IN TAMIL NADU"**.

---

### 3.2 Global Navigation Bar
* **Layout:** Clean white bar with subtle bottom shadow (`h-20` / `72px`).
* **Left:** DUCO TRADERS logo (Iconic typography with "TRADERS" tracked below).
* **Center Links:**
  * `Home` (Active indicator / bold)
  * `About Us`
  * `Services`
  * `Contact Us`
* **Right Elements:**
  * Search icon button (`🔍`)
  * Primary button: `Get a Quote` (Pill button in navy)

---

### 3.3 Screen 01: Home Page

1. **Hero Section:**
   * **Left Column:**
     * **Headline:** *"Sea Salt Supply & Apartment Management Built on Trust"*
     * **Subparagraph:** *"DUCO Traders is a trusted Tamil Nadu based business engaged in sea salt manufacturing and wholesale supply for industrial needs, while also providing professional apartment management services."*
     * **CTA Group:**
       * Primary: `Explore Our Services →` (Navy pill button)
       * Secondary: `Get in Touch` (White/outline pill button)
   * **Right Column:**
     * Photo: Salt worker in sun hat harvesting crystalline sea salt in open outdoor evaporation salt pans under clear blue skies.

2. **Trust / Credibility Bar (Stats):**
   * Three high-impact credibility badges arranged horizontally:
     1. **Medal / Ribbon Icon:** **"20+"** (Bold headline) / *"Years of Experience"*
     2. **Handshake Icon:** **"Trusted"** (Bold headline) / *"Across Tamil Nadu"*
     3. **Shield with Checkmark:** **"Reliable"** (Bold headline) / *"Industrial & Property Support"*

3. **Featured Services Showcase:**
   * Two large side-by-side showcase cards with rounded corners:
     * **Card 1: Sea Salt Manufacturing & Wholesale Supply**
       * Large ocean/salt flats image
       * Footer title bar with circular navy `→` action button
     * **Card 2: Apartment Management Services**
       * Modern residential apartment building facade with balconies
       * Footer title bar with circular navy `→` action button

---

### 3.4 Screen 02: About Us Page

1. **Company Introduction & Heritage:**
   * **Headline:** *"About DUCO Traders"*
   * **Subtitle:** *"A Trusted Partner for Today and Tomorrow"*
   * **Body Paragraphs:**
     * Paragraph 1: *"DUCO Traders is a well-established business in Tamil Nadu with more than two decades of experience. Our primary business is the manufacturing and wholesale supply of sea salt to industrial buyers, including chemical and fertilizer companies."*
     * Paragraph 2: *"Alongside this, we also provide apartment management services, supporting residential communities with practical and professional maintenance coordination."*
   * **Hero Image:** High-resolution close-up photo of hands holding clean, coarse white raw sea salt crystals.

2. **Three Core Strategic Pillars (Cards):**
   * **Card 1 — Our Vision:**
     * Background: Slate/Deep Teal (`#134E5E`), white text
     * Icon: Binoculars / Vision aperture
     * Text: *"To grow DUCO Traders into a stronger and more recognized brand in the sea salt industry, while expanding into broader apartment, property, and future construction-related services."*
   * **Card 2 — Our Mission:**
     * Background: Vibrant Teal/Ocean (`#00A896`), white text
     * Icon: Target / Dartboard
     * Text: *"To deliver dependable products and practical service solutions through quality, trust, and long-term business relationships."*
   * **Card 3 — Our Values:**
     * Background: Clean White (`#FFFFFF`) with border
     * Icon: Diamond symbol
     * Checklist items:
       * `✓ Integrity`
       * `✓ Quality`
       * `✓ Reliability`
       * `✓ Customer Focus`
       * `✓ Long-Term Relationships`

3. **Regional Experience Highlight Banner:**
   * Wide photographic panoramic image of salt pans & coastal wind machinery.
   * Overlay text: **"20+ Years of Experience in Tamil Nadu"**.

---

### 3.5 Screen 03: Services Page

1. **Header:**
   * **Main Title:** *"Two Distinct Strengths. One Dependable Partner."*

2. **Service 01 — Our Primary Business:**
   * **Badge:** `01 OUR PRIMARY BUSINESS` (Dark Navy pill)
   * **Title:** *"Sea Salt Manufacturing & Wholesale Supply"*
   * **Description:** *"We manufacture and supply high-quality sea salt for industrial use. We work with businesses that require reliable bulk supply and consistent product support."*
   * **Capabilities Checklist:**
     * `✓ Sea salt manufacturing`
     * `✓ Bulk wholesale supply`
     * `✓ Supply for chemical companies`
     * `✓ Supply for fertilizer companies`
     * `✓ Consistent quality and reliable delivery`
     * `✓ Long-term business support`
   * **CTA Button:** `Enquire Now →`
   * **Media Layout:**
     * Large feature image: Massive pyramid salt harvest with industrial loader conveyor.
     * 3-image thumbnail gallery:
       1. Close-up coarse raw salt mound
       2. Palletized 50kg woven sacks in warehouse
       3. Heavy-duty yellow logistics truck for bulk transport

3. **Service 02 — Our Secondary Business:**
   * **Badge:** `02 OUR SECONDARY BUSINESS` (Teal badge)
   * **Title:** *"Apartment Management Services"*
   * **Description:** *"We provide apartment management services for residential communities, including support for tenant coordination, maintenance needs, and operational issue resolution."*
   * **Capabilities Checklist:**
     * `✓ Coordination with tenant / resident committees`
     * `✓ Monthly maintenance management`
     * `✓ MEP-related support`
     * `✓ Tenant issue handling`
     * `✓ Operational supervision`
     * `✓ Practical third-party support for apartment communities`
   * **CTA Button:** `Know More →`
   * **Media Layout:**
     * Large feature image: Contemporary multi-story apartment complex exterior.
     * 3-image thumbnail gallery:
       1. Facility manager badge / uniform staff
       2. Maintenance engineer inspecting infrastructure
       3. Engineers reviewing building blueprints & operations sheets

---

### 3.6 Screen 04: Contact Us Page

1. **Header & Context:**
   * **Title:** *"Get in Touch with DUCO Traders"*
   * **Subtext:** *"Whether you need bulk sea salt supply or professional apartment management support, our team is ready to assist you."*
   * **Hero Header Image:** Modern architectural facade / commercial residential complex.

2. **Left Column — Interactive Enquiry Form:**
   * Card container: White card with smooth rounded corners and shadow.
   * **Card Header:** *"Send Us an Enquiry"*
   * **Form Fields:**
     1. `Your Name` (Icon: User 👤, text input)
     2. `Company Name` (Icon: Building 🏢, text input)
     3. `Phone Number` (Icon: Phone 📞, tel input)
     4. `Email Address` (Icon: Mail ✉️, email input)
     5. `Select a Service` (Icon: Layers 🗂️, select dropdown with options:
        * *Industrial Sea Salt Wholesale*
        * *Apartment Management Services*
        * *General Inquiry / Both Services*)
     6. `Your Message` (Icon: Edit 📝, multiline textarea)
   * **Submit Button:** `Send Message →` (Full width Navy pill button)

3. **Right Column — Location & Contact Details:**
   * **Location Map Box:**
     * Title: *"Our Location"*
     * Interactive or visual Google Map card centered on **Chennai, Tamil Nadu, India**.
     * Link: `View Larger Map →`
   * **Direct Contact Details Box:**
     * Title: *"Contact Details"*
     * 📍 **Address:** `123, Main Road, Chennai, Tamil Nadu, India`
     * 📞 **Phone:** `+91 98765 43210`
     * ✉️ **Email:** `info@ducotraders.com`

---

### 3.7 Global Footer & Value Banner
* **Background:** Deep Midnight Navy (`#0A192F` / `#0B2545`) with white/silver typography.
* **Three Strategic Value Pillars:**
  1. 🚢 **Cargo / Sea Icon:** *"From the Sea To Industry"*
  2. 🏢 **Apartment Skyline Icon:** *"From Communities To Better Living"*
  3. 📈 **Growth Chart Icon:** *"Growing Today For Tomorrow"*
* **Brand Signature:**
  * Calligraphic script: *"DUCO Traders"*
  * Value subtext: `TRUST | QUALITY | SERVICE | GROWTH`
  * Copyright & Regional notice: `© DUCO Traders. All Rights Reserved. Serving Tamil Nadu, India.`

---

## 4. Responsive Layout Architecture

### 4.1 Desktop Breakpoint (`≥ 1024px`)
* Container width: `max-w-7xl` (`1280px`) with `px-8` side padding.
* Grid systems:
  * Hero sections: 2-column balanced split (`1fr 1fr`).
  * About Us values: 3-column equal grid (`repeat(3, 1fr)`).
  * Services: Split 2-column layout (Text & checklist on left `5fr`, Image cluster on right `7fr`).
  * Contact: 2-column split (Form `6fr`, Map & Info `6fr`).

### 4.2 Tablet Breakpoint (`768px - 1023px`)
* Container padding: `px-6`.
* Grid adaptation:
  * 3-column cards adapt to 2 columns with the 3rd card spanning full width.
  * Services image galleries stack under the service checklist.
  * Form and Map stack into single column with full-width cards.

### 4.3 Mobile Breakpoint (`< 768px`)
* Container padding: `px-4`.
* Mobile Navigation: Hamburger menu with overlay drawer displaying links and `Get a Quote` button.
* Single-column vertical flow:
  * Hero text comes first, followed by hero image.
  * Trust stats stack vertically or display in a 3-tile swipeable carousel.
  * Service images display as 1 primary banner + horizontal scrolling thumbnails.
  * Contact form inputs have `100%` width with finger-friendly touch targets (`48px` minimum height).

---

## 5. Assets & Imagery Guidelines

1. **Sea Salt Production Assets:**
   * High-contrast daylight photography of open salterns and crystallizing ponds.
   * Salt workers harvesting raw sea salt.
   * Pyramidal mounds of washed industrial salt with conveyor machinery.
   * 50kg wholesale packaging sacks stacked neatly.
   * Logistics transport vehicles for bulk supply.
2. **Apartment Management Assets:**
   * Clean, sunny residential apartment towers with landscaped surroundings.
   * Professional property management staff and technical maintenance engineers.
   * Operational meetings and architectural blueprints.
3. **Icons & Badges:**
   * Line-art SVG icons in pure white or navy:
     * Nautical boat, apartment skyline, growth graph, handshake, ribbon badge, shield checkmark, target, diamond, binoculars.
   * Laurel wreath for the "20+ Years Experience" badge.

---

## 6. Implementation Readiness Confirmation

* **Stitch Project Name:** `Saathappan Palaniyappan`
* **Stitch Screen Name:** `d04a725d-19eb-4eb0-8c39-21ad6e3cd34f.jpg`
* **Design Document Created At:** `DESIGN.md` in root workspace directory.
* **Status:** Specifications fully extracted, reviewed, and ready for frontend code implementation upon user confirmation.
