# Restaurant Website Template Design

## Overview
A modern, responsive restaurant website template designed to showcase the dining experience, drive reservations, and engage customers.

---

## Core Pages

### 1. Home Page
- Hero section with full-width imagery/video
- Brief intro to the restaurant's story
- Featured dishes or specials
- Call-to-action for reservations
- Operating hours at a glance
    
### 2. Menu
- Organized by categories (Appetizers, Mains, Desserts, Drinks)
- Dietary icons displayed inline beside each item
- Pricing display
- Optional: downloadable PDF menu

#### Dietary Restriction Icons Key

| Icon | Label | Description |
|------|-------|-------------|
| 🌱 | Vegetarian | Contains no meat or fish |
| 🌿 | Vegan | Contains no animal products |
| 🌾 | Gluten-Free | Contains no gluten ingredients |
| 🥜 | Nut-Free | Contains no tree nuts or peanuts |
| 🧈 | Dairy-Free | Contains no dairy products |
| 🌶️ | Spicy | Contains hot/spicy ingredients |
| ⭐ | Chef's Pick | Recommended by the chef |

#### Icon Key Display
- Positioned at the top of the menu page (below category navigation)
- Compact horizontal layout on desktop
- Collapsible "View Dietary Key" accordion on mobile
- Subtle styling that doesn't overpower menu items
- Tooltip on hover showing full description

#### Menu Page Layout
- **Header:** Category navigation (sticky on scroll)
- **Dietary Key:** Icon legend bar directly below navigation
- **Menu Items:**
  - Item name with dietary icons inline, price aligned right
  - Short description below
  - Optional photo thumbnail
- **Sections:** Visual dividers between categories
- **Mobile:** Collapsible accordion categories

#### Menu Item Example
```
┌─────────────────────────────────────────────────┐
│ Grilled Salmon  🌾 🧈                    $28.00 │
│ Pan-seared Atlantic salmon with lemon butter,   │
│ seasonal vegetables, and wild rice pilaf.       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Garden Risotto  🌱 🌾 ⭐                 $22.00 │
│ Creamy arborio rice with roasted seasonal       │
│ vegetables, parmesan, and fresh herbs.          │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Thai Coconut Curry  🌿 🌾 🥜 🌶️          $19.00 │
│ Spicy coconut curry with tofu, vegetables,      │
│ and jasmine rice. Nut-free preparation.         │
└─────────────────────────────────────────────────┘
```

### 3. About
- Restaurant story and history
- Chef profile and philosophy
- Team introduction
- Awards and press mentions

### 4. Reservations
- Online booking integration
- Party size and time selection
- Special requests field
- Contact info for phone reservations

#### Reservations Page Layout
- **Hero:** Subtle background image with reservation form overlay
- **Booking Form:**
  - Date picker (calendar widget)
  - Time selection (dropdown with available slots)
  - Party size (1-12+ guests)
  - Name, email, phone fields. Implement using RESY/
  - Special requests/dietary needs textarea
  - Submit button with confirmation
- **Sidebar Info:**
  - Operating hours
  - Large party inquiries (10+)
  - Private event contact
  - Cancellation policy
- **Confirmation:** Success message with booking details + email confirmation
- **Mobile:** Full-width stacked form

### 5. Contact & Location
- Interactive map
- Address with directions
- Phone and email
- Parking information

### 6. Order Online
- Online ordering for pickup/delivery
- Full menu with add-to-cart functionality
- Checkout flow

#### Order Online Page Layout
- **Header:** Toggle between Pickup / Delivery
- **Menu Display:**
  - Categories sidebar (sticky)
  - Menu items with photos, descriptions, prices
  - "Add to Cart" button with quantity selector
  - Item customization modal (size, extras, special instructions)
- **Cart Sidebar:**
  - Running order summary
  - Edit/remove items
  - Subtotal, tax, total
  - "Checkout" button
- **Checkout:**
  - Contact info (name, phone, email)
  - Pickup time or delivery address
  - Payment integration (TBD)
  - Order confirmation with estimated time
- **Mobile:** Bottom sheet cart with item count badge

> **Note:** CRM and order management backend to be defined later.

### 7. Events
- Upcoming events calendar
- Private dining and party bookings
- Special occasions (wine tastings, live music, holiday specials)

#### Events Page Layout
- **Hero:** Event ambiance photo with headline
- **Upcoming Events:**
  - Event cards with image, date, title, description
  - "Learn More" or "RSVP" button
  - Filter by event type
- **Private Events Section:**
  - Private dining room photos
  - Capacity info
  - Inquiry form for bookings
- **Past Events:** Optional gallery of previous events
- **Empty State:** "No upcoming events — follow us on social media for announcements"

### 7. Jobs
- Open positions listing
- Restaurant culture and benefits
- Application form

#### Jobs Page Layout
- **Hero:** Team photo with "Join Our Team" headline
- **Why Work Here:** Benefits, culture, growth opportunities
- **Open Positions:**
  - Job title and type (Full-time, Part-time)
  - Brief description
  - Requirements
  - "Apply Now" button per listing
- **Application Form:**
  - Name, email, phone
  - Position applying for (dropdown)
  - Resume upload
  - Cover letter/message textarea
  - Submit button
- **No Openings State:** "We're not hiring right now, but feel free to send your resume for future opportunities"

---

## Key Features

### Reservation Button (CTA)
A persistent call-to-action button for reservations appears throughout the site.

- **Header:** Always visible in navigation bar (top right)
- **Home Hero:** Large prominent button below tagline
- **Sticky Mobile:** Fixed bottom button on mobile devices
- **Style:**
  - Primary accent color with hover state
  - Rounded corners, bold text
  - Icon option (calendar or utensils)
- **Text Options:** "Reserve a Table" / "Book Now" / "Make a Reservation"

### Visual Design
- [ ] High-quality food photography
- [ ] Clean, elegant typography
- [ ] Warm, inviting color palette
- [ ] White space for readability

### User Experience
- [ ] Mobile-first responsive design
- [ ] Fast loading times
- [ ] Easy navigation
- [ ] Accessibility compliance (WCAG)

### Functionality
- [ ] Online reservation system
- [ ] Social media integration
- [ ] Newsletter signup
- [ ] Google Maps embed

### Performance
- [ ] Optimized images
- [ ] Lazy loading
- [ ] SEO best practices
- [ ] Schema markup for restaurants

### Multi-Language Support
Support for multiple languages to serve diverse customer bases.

#### Language Selector
- **Location:** Header (top right, before reservation button)
- **Style:** Dropdown or icon flags
- **Behavior:** Persists selection via localStorage/cookie

#### Supported Languages
| Language | Code | Flag | Priority |
|----------|------|------|----------|
| English | en | 🇺🇸 | Default |
| Spanish | es | 🇪🇸 | High |
| French | fr | 🇫🇷 | Medium |
| Chinese | zh | 🇨🇳 | Medium |
| *Custom* | -- | -- | Configurable |

#### Translated Content
- [ ] Navigation and UI elements
- [ ] Menu item names and descriptions
- [ ] Page content (Home, About, Contact)
- [ ] Form labels and validation messages
- [ ] Email confirmations
- [ ] Error messages and alerts

#### Implementation
- **Library:** react-i18next (or similar)
- **Structure:** JSON translation files per language
- **URL Strategy:** Subdirectory (`/es/menu`) or query param (`?lang=es`)
- **SEO:** `hreflang` tags for search engines
- **Fallback:** Default to English for missing translations

#### Language Selector Component
```
┌─────────────────────────────┐
│  🌐 English ▼               │
│  ┌───────────────────────┐  │
│  │ 🇺🇸 English          │  │
│  │ 🇪🇸 Español          │  │
│  │ 🇫🇷 Français         │  │
│  │ 🇨🇳 中文             │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

#### RTL Support
- Detect RTL languages (Arabic, Hebrew)
- Mirror layout direction automatically
- Test bidirectional text rendering

#### Translation File Example
```json
{
  "nav": {
    "home": "Home",
    "menu": "Menu",
    "about": "About",
    "reservations": "Reservations",
    "contact": "Contact"
  },
  "home": {
    "hero_title": "Welcome to Our Restaurant",
    "hero_subtitle": "Fine dining experience",
    "reserve_button": "Reserve a Table"
  },
  "menu": {
    "dietary_key": "Dietary Key",
    "vegetarian": "Vegetarian",
    "vegan": "Vegan",
    "gluten_free": "Gluten-Free"
  }
}
```

---

## Technical Stack
- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v4
- **i18n:** react-i18next
- **Hosting:** TBD

### React 19 Features to Leverage
- Server Components for faster initial page loads
- Actions for form handling (reservations, contact)
- `use()` hook for async data fetching
- Improved hydration and streaming
- Document metadata with `<title>` and `<meta>` in components

---

## Color Palette
| Role       | Color   | Hex Code |
|------------|---------|----------|
| Primary    | TBD     | #------- |
| Secondary  | TBD     | #------- |
| Accent     | TBD     | #------- |
| Background | TBD     | #------- |
| Text       | TBD     | #------- |

---

## Typography
- **Headings:** TBD
- **Body:** TBD
- **Accent/Menu:** TBD

---

## Next Steps
1. Define visual direction and mood
2. Select color palette and typography
3. ~~Choose technical stack~~ ✓ React 19 + Vite
4. Choose styling approach
5. Build components
6. Develop full pages

---

## Placeholder Images

Stock images will be used throughout the template. These are meant to be replaced with the restaurant's own photos.

| Location | Image Type | Dimensions | Source |
|----------|-----------|------------|--------|
| Hero (Home) | Restaurant interior/ambiance | 1920x1080 | Unsplash |
| Featured Dishes | Food photography (3 images) | 600x400 | Unsplash |
| Menu Items | Individual dish photos | 300x300 | Unsplash |
| About - Restaurant | Interior/exterior shot | 800x600 | Unsplash |
| About - Chef | Portrait placeholder | 400x500 | Unsplash |
| About - Team | Group/individual portraits | 300x300 | Unsplash |
| Gallery | Assorted food & ambiance (6-8) | 800x600 | Unsplash |

### Image Guidelines
- All placeholders should have a consistent warm, inviting tone
- Food images: well-lit, appetizing presentation
- Interior images: cozy atmosphere, soft lighting
- Use Unsplash for royalty-free stock photos
- Include subtle overlay text: "Replace with your image"

---

## Notes
*Add notes and refinements here as we develop the design.*
