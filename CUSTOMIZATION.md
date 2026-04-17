# Customization Guide

## Easy Personalization

### Update Personal Information
Edit these files with your details:
- `src/components/Hero.tsx` - Name and tagline
- `src/components/About.tsx` - Bio text and contact info
- `src/components/Projects.tsx` - Your projects
- `src/components/Experience.tsx` - Work experience
- `src/components/Skills.tsx` - Your skill categories
- `src/components/Education.tsx` - Academic background
- `src/components/Contact.tsx` - Contact details and social links

### Change Color Scheme
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'navy': '#YOUR_COLOR',    // Primary text color
      'electric-blue': '#YOUR_COLOR', // Accent color
    }
  }
}
```

### Add New Sections
1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Add corresponding navigation link in `src/components/Navbar.tsx`

### Modify Animations
Edit animation properties in components:
- `whileInView={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.6, delay: 0.1 }}`
- `viewport={{ once: true }}`

### Add Custom Fonts
1. Import in `src/app/layout.tsx`
2. Add to `tailwind.config.js` fontFamily
3. Apply in CSS classes

### Contact Form Integration
Replace the demo form handler in `src/components/Contact.tsx`:
- Formspree: Update action URL
- EmailJS: Add their SDK
- Custom backend: Implement API endpoint
