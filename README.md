# Nusakti Ecosystem - Luxury Institutional Homepage

A premium institutional homepage for Nusakti Ecosystem built with Next.js, TailwindCSS, and TypeScript. Features a sophisticated dark navy and gold color palette with luxury branding throughout.

## Features

- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Dark Navy & Gold Palette**: Premium luxury aesthetic (#001F3F navy, #D4AF37 gold)
- **Multiple Sections**:
  - Hero section with animated gradients
  - Ecosystem overview (6 core pillars)
  - Investment portfolio showcase
  - Manufacturing capabilities
  - AI-powered automation features
  - Comprehensive footer

- **Modern Animations**: Fade-in, slide-up, and float effects
- **Glass-morphism UI**: Modern frosted glass effects with backdrop blur
- **Luxury Components**: Custom styled buttons, cards, and sections
- **Performance Optimized**: Next.js 14 with server components

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS 3
- **Language**: TypeScript
- **Fonts**: Playfair Display (headings), Inter (body)

## Project Structure

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Homepage
├── globals.css             # Global styles & Tailwind
└── components/
    ├── Header.tsx          # Navigation header
    ├── HeroSection.tsx      # Hero banner
    ├── EcosystemSection.tsx # Ecosystem overview
    ├── InvestmentsSection.tsx # Investment portfolio
    ├── ManufacturingSection.tsx # Manufacturing capabilities
    ├── AIAssistantSection.tsx  # AI features
    └── Footer.tsx          # Footer navigation
```

## Getting Started

### Prerequisites
- Node.js 18+ (with npm/yarn)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.ts` to modify the color palette:

```ts
colors: {
  navy: {
    950: '#001F3F',  // Dark navy
    // ... other shades
  },
  gold: {
    500: '#D4AF37',  // Primary gold
    // ... other shades
  }
}
```

### Fonts

Fonts are imported in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
```

### Content

Edit component files in `app/components/` to update:
- Ecosystem areas
- Investment portfolio details
- Manufacturing statistics
- AI features and benefits

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified and optimized by TailwindCSS
- Animations use CSS transforms for smooth performance
- Server components reduce JavaScript payload

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## License

Proprietary - Nusakti Ecosystem

## Contact

For inquiries and support, contact the Nusakti team.
