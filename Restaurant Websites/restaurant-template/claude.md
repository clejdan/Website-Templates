# Restaurant Template

## Tech Stack
- React 19 + Vite 7 + React Router 7
- Tailwind CSS 4 (via @tailwindcss/vite plugin)
- i18next for internationalization (en/es)

## Project Structure
```
src/
├── components/
│   ├── layout/    → Header.jsx, Footer.jsx, Layout.jsx
│   ├── menu/      → MenuItem.jsx, MenuCategory.jsx, DietaryIcon.jsx, DietaryKey.jsx
│   └── ui/        → Button.jsx, Input.jsx, Card.jsx, Select.jsx, Textarea.jsx
├── pages/         → Home.jsx, Menu.jsx, About.jsx, Reservations.jsx, Contact.jsx
├── hooks/         → useScrollAnimation.jsx
├── data/          → menu.json
├── locales/       → en/translation.json, es/translation.json
├── App.jsx        → Router with all routes
├── main.jsx       → Entry point
├── i18n.js        → i18next config
└── index.css      → Tailwind imports + CSS variables
```

## Design Tokens (index.css)
- Primary: #8B4513 (brown)
- Secondary: #2C3E50 (dark blue-gray)
- Accent: #D4AF37 (gold)
- Background: #FAF9F6 (off-white)
- Text: #333333
- Fonts: Crimson Pro (headings), Nunito Sans (body)

## Key Patterns
- All pages use `<Layout>` wrapper (includes Header/Footer)
- Scroll animations via `useScrollAnimation()` hook - returns ref and className
- Translations use `useTranslation()` hook with `t('key.path')` syntax
- UI components accept `variant`, `size`, `className` props
- Menu data in `src/data/menu.json` with dietary flags

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
- Add new translations to BOTH `en/translation.json` and `es/translation.json`
- New pages need route in `App.jsx` and nav link in `Header.jsx`
- Images use Unsplash URLs (format: `https://images.unsplash.com/photo-{id}?w={width}`)
- Use existing UI components from `src/components/ui/` when possible
