# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### 2. Netlify
```bash
# Build the project
npm run build

# Deploy the .next folder to Netlify
```

### 3. GitHub Pages
```bash
# Add to package.json scripts
"export": "next export"

# Build and deploy
npm run export
```

## Environment Variables (Optional)
- `NEXT_PUBLIC_CONTACT_EMAIL`: For contact form
- `NEXT_PUBLIC_GA_ID`: Google Analytics
- `NEXT_PUBLIC_SITE_URL`: For Open Graph metadata

## Custom Domain Setup
1. Deploy to your preferred platform
2. Configure custom domain in platform settings
3. Update metadata in `src/app/layout.tsx` with your domain

## Performance Optimization
- Images are already optimized with Next.js Image component
- CSS is minified by Next.js
- Consider adding analytics for visitor tracking
