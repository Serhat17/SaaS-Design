# Fahrschule Gerlach - Premium Website

A modern, premium website for Fahrschule Gerlach built with Next.js 14, featuring elegant animations, tasteful 3D elements, and professional UX focused on conversions.

## 🚀 Features

### Design & UX
- **Premium Design**: Modern, clean interface with brand-consistent orange gradient theme
- **3D Hero Element**: Interactive steering wheel with Three.js and React Three Fiber
- **Smooth Animations**: Framer Motion powered micro-interactions and page transitions
- **Responsive Design**: Mobile-first approach with perfect desktop scaling
- **Accessibility**: WCAG AA compliant with proper contrast ratios

### Pages & Functionality
- **Home**: Premium hero with 3D element, service highlights, testimonials, and conversion CTAs
- **Über uns**: Company history, values, certifications, and pedagogical concept
- **Das Team**: Interactive team member cards with detailed modal profiles
- **Fahrzeuge**: Vehicle gallery with filtering and detailed specifications
- **Leistungen**: Comprehensive service overview with pricing and process details
- **Kontakt**: Advanced contact form with validation and multiple contact options
- **FAQ**: Interactive accordion with search and category filtering

### Technical Excellence
- **Next.js 14**: App Router with TypeScript for type safety
- **Performance**: Optimized for Lighthouse 90+ scores
- **SEO**: Complete meta tags, sitemap, robots.txt, and OpenGraph
- **Form Handling**: React Hook Form with Zod validation
- **Image Optimization**: Next/Image with responsive sources

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **3D Graphics**: Three.js / React Three Fiber
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## 🎨 Brand Colors

```css
Primary Orange: #F59C1A
Accent Orange-Red: #D45F2E
Text/Dark: #222222
White: #FFFFFF
Light Gray: #F5F5F5
Gradient: linear-gradient(135deg, #F59C1A 0%, #D45F2E 100%)
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fahrschule-gerlach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your Google Maps API key and other required variables.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Create a `.env.local` file with:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_SITE_URL=https://fahrschule-gerlach.de
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── ueber-uns/         # About page
│   ├── team/              # Team page
│   ├── fahrzeuge/         # Vehicles page
│   ├── leistungen/        # Services page
│   ├── kontakt/           # Contact page
│   └── faq/               # FAQ page
├── components/            # Reusable components
│   ├── ui/                # UI components (Button, Card, etc.)
│   └── layout/            # Layout components (Navbar, Footer)
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
└── styles/                # Additional styles
```

## 🎯 Key Features

### Interactive Elements
- **3D Steering Wheel**: Subtle rotation and scroll-based parallax
- **Hover Animations**: Smooth card elevations and button interactions
- **Page Transitions**: Fast, subtle transitions between pages
- **Form Validation**: Real-time validation with user-friendly error messages

### Performance Optimizations
- **Image Optimization**: AVIF/WebP formats with responsive sizing
- **Code Splitting**: Route-based splitting for optimal loading
- **Lazy Loading**: Progressive loading of images and 3D elements
- **Caching**: Optimized caching strategies for static assets

### SEO & Analytics
- **Meta Tags**: Complete SEO meta tags for all pages
- **Structured Data**: Schema.org markup for better search visibility
- **Sitemap**: Auto-generated XML sitemap
- **Analytics Ready**: Pluggable analytics system

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    primary: '#F59C1A',
    accent: '#D45F2E',
    dark: '#222222',
    light: '#F5F5F5',
  }
}
```

### Content Management
All content is currently hardcoded in components. For dynamic content management, consider integrating:
- **Sanity**: Headless CMS for content management
- **Directus**: Open-source data platform
- **Strapi**: Flexible, open-source headless CMS

## 📱 Mobile Optimization

- **Touch-Friendly**: Proper touch targets and gestures
- **Performance**: Optimized for mobile networks
- **Progressive Enhancement**: Works without JavaScript
- **Responsive Images**: Optimized for different screen densities

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting with Next.js config
- **Prettier**: Code formatting (recommended)
- **Husky**: Git hooks for quality checks (optional)

## 🌟 Performance Targets

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 📞 Support

For questions about the website or technical support:

- **Email**: info@fahrschule-gerlach.de
- **Phone**: 0123 456 789
- **Website**: https://fahrschule-gerlach.de

## 📄 License

This project is proprietary software for Fahrschule Gerlach. All rights reserved.

---

Built with ❤️ for Fahrschule Gerlach - Your trusted driving school in the region.
