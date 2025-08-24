# Guestly - Professional Virtual Assistant Services Website

A modern, conversion-focused website for Nancy Monaco's virtual assistant services, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Professional Design**: Clean, modern UI optimized for conversions
- **Responsive Layout**: Mobile-first design that works on all devices
- **Contact Forms**: Integrated contact form with validation
- **Service Packages**: Three-tier pricing structure (Essential, Growth, Premium)
- **Testimonials**: Client success stories and case studies
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Performance**: Built with Next.js 14 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
app/
├── (root)/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services & pricing
│   ├── portfolio/page.tsx       # Portfolio & testimonials
│   ├── contact/page.tsx         # Contact page
│   └── layout.tsx               # Root layout
├── api/
│   └── contact/route.ts         # Contact form handler
├── components/
│   ├── layout/                  # Header, Footer
│   ├── home/                    # Hero, Benefits sections
│   ├── services/                # Pricing cards
│   ├── forms/                   # Contact form
│   └── shared/                  # Common components
├── lib/
│   ├── data/                    # Pricing, testimonials data
│   ├── utils.ts                 # Utility functions
│   └── validations.ts           # Zod schemas
└── styles/
    └── globals.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nancy-va-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```bash
   # Database (Supabase)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # Stripe (for payments)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...

   # Email (Resend)
   RESEND_API_KEY=re_...
   ADMIN_EMAIL=nancy@guestly.co.uk

   # General
   NEXT_PUBLIC_SITE_URL=https://guestly.co.uk
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.js` to customize colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',  // Main brand color
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### Content Updates

- **Pricing**: Update `app/lib/data/pricing.ts`
- **Testimonials**: Update `app/lib/data/testimonials.ts`
- **Services**: Update `app/lib/data/pricing.ts` services array

### Images & Assets

- Place images in `public/images/`
- Icons are from Lucide React - import and use as needed

## 📱 Pages & Components

### Home Page (`/`)
- Hero section with compelling copy
- Benefits section highlighting key advantages
- Call-to-action buttons

### Services Page (`/services`)
- Three-tier pricing structure
- Feature comparisons
- Get started buttons

### About Page (`/about`)
- Nancy's story and background
- Values and expertise areas
- Call-to-action

### Portfolio Page (`/portfolio`)
- Client testimonials
- Case studies
- Measurable results

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Free discovery call CTA

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add `page.tsx` with your component
3. Update navigation in `app/components/layout/Header.tsx`

### Adding New Components

1. Create component file in appropriate directory
2. Export as default function
3. Import and use in pages

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository
   - Set environment variables
   - Deploy automatically

### Other Platforms

- **Netlify**: Similar to Vercel
- **Railway**: Good for full-stack apps
- **AWS/GCP**: For enterprise deployments

## 🔒 Environment Variables

### Required for Production

- `NEXT_PUBLIC_SITE_URL`: Your domain
- `ADMIN_EMAIL`: Nancy's email address

### Optional (for full functionality)

- **Supabase**: Database and user management
- **Stripe**: Payment processing
- **Resend**: Email notifications

## 📊 Performance

### Lighthouse Score Targets

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

### Optimization Features

- Next.js Image optimization
- Font optimization with `next/font`
- Lazy loading for non-critical components
- Tailwind CSS purging

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**: Check TypeScript types and imports
2. **Styling issues**: Verify Tailwind CSS classes
3. **Form submission**: Check API route and validation
4. **Performance**: Use Next.js built-in optimizations

### Getting Help

- Check Next.js documentation
- Review Tailwind CSS docs
- Open an issue in the repository

## 📈 Future Enhancements

- [ ] Stripe payment integration
- [ ] Cal.com booking integration
- [ ] Supabase database setup
- [ ] Email automation with Resend
- [ ] Analytics dashboard
- [ ] Blog section
- [ ] Client portal
- [ ] Multi-language support

## 📄 License

This project is private and proprietary to Guestly VA Services.

## 👥 Support

For technical support or questions about the website:
- Email: nancy@guestly.co.uk
- Create an issue in this repository

---

**Built with ❤️ for Guestly VA Services**
