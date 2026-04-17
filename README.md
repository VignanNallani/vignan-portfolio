# Vignan Nallani - Portfolio Website

A professional portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll animations and interactions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Professional Aesthetic**: Clean corporate design with navy blue and electric blue accents
- **Interactive Elements**: Typing animation, hover effects, smooth scrolling
- **Contact Form**: Functional contact form (demo implementation)

## Sections

1. **Hero Section**: Animated typing effect with call-to-action buttons
2. **About**: Two-column layout with professional bio
3. **Projects**: Card grid showcasing personal and academic projects
4. **Open Source**: Contributions to popular open-source projects
5. **Experience**: Timeline-style work experience
6. **Skills**: Categorized skill badges with icons
7. **Education**: Academic background and certifications
8. **Contact**: Contact form and social media links
9. **Footer**: Minimal footer with attribution

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Color Scheme

- **Primary Navy**: #0F172A
- **Accent Blue**: #3B82F6
- **Background**: White (#FFFFFF)
- **Text**: Navy (#0F172A) with varying opacity

## Project Structure

```
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    OpenSource.tsx
    Experience.tsx
    Skills.tsx
    Education.tsx
    Contact.tsx
    Footer.tsx
```

## Deployment

This portfolio is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## Customization

To customize this portfolio for your own use:

1. Update personal information in each component
2. Replace project details with your own projects
3. Update contact information and social links
4. Modify color scheme in `tailwind.config.js`
5. Update metadata in `layout.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with Next.js 14, Tailwind CSS, and Framer Motion
