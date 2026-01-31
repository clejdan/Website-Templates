# Restaurant Template

## Tech Stack
- React 19 + Vite 7 + React Router 7
- Tailwind CSS 4 (via @tailwindcss/vite plugin)

## Project Structure
```
src/
├── components/
│   ├── layout/    → Header.jsx, Footer.jsx, Layout.jsx
│   ├── menu/      → MenuItem.jsx, MenuCategory.jsx, DietaryIcon.jsx
│   └── ui/        → Button.jsx, Input.jsx, Card.jsx, Select.jsx, Textarea.jsx
├── pages/         → Home.jsx, Menu.jsx, About.jsx, Reservations.jsx, Contact.jsx
├── hooks/         → useScrollAnimation.jsx
├── content/       → All editable content (see below)
├── App.jsx        → Router with all routes
├── main.jsx       → Entry point
└── index.css      → Tailwind imports + CSS variables
```

## Content Files (src/content/)
Edit these JSON files to customize the site:

| File | What to Edit |
|------|--------------|
| `site.json` | Restaurant name, phone, email, address, hours, social links, nav labels, CTA buttons |
| `home.json` | Home page hero, featured section title, story preview |
| `about.json` | About page story, chef bio, team members, awards |
| `menu.json` | Menu items, prices, descriptions, dietary labels, categories |
| `contact.json` | Contact page text, form labels, success messages |
| `reservations.json` | Reservation form, time slots, policies |

## Design Tokens (index.css)
- Primary: #8B4513 (brown)
- Secondary: #2C3E50 (dark blue-gray)
- Accent: #D4AF37 (gold)
- Background: #FAF9F6 (off-white)
- Text: #333333
- Fonts: Crimson Pro (headings), Nunito Sans (body)

## Key Patterns
- All pages use `<Layout>` wrapper (includes Header/Footer)
- Scroll animations via `useScrollAnimation()` hook
- UI components accept `variant`, `size`, `className` props
- Content imported from JSON files in `src/content/`

## Routes
- `/` → Home
- `/menu` → Menu
- `/about` → About
- `/reservations` → Reservations
- `/contact` → Contact

## Commands
- `npm run dev` → Start dev server
- `npm run build` → Production build
- `npm run lint` → ESLint

## When Making Changes
- Edit content in `src/content/*.json` - no need to touch components
- New pages need route in `App.jsx` and nav link in `site.json` + `Header.jsx`
- Images use Unsplash URLs (format: `https://images.unsplash.com/photo-{id}?w={width}`)
- Use existing UI components from `src/components/ui/` when possible
