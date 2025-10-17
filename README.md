# 🚀 Modern Developer Portfolio

A stunning, professional portfolio website built with **Next.js 15**, **Material-UI (MUI)**, and **Framer Motion**. Features beautiful animations, dark/light mode toggle, responsive design, and modern UI components.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![MUI](https://img.shields.io/badge/MUI-5+-blue?style=for-the-badge&logo=mui)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-purple?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **🌙 Dark/Light Mode**: Toggle between themes with smooth transitions
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Fast loading with Next.js 15 and optimizations
- **🎭 Smooth Animations**: Beautiful Framer Motion animations throughout
- **📧 Contact Form**: Functional contact form with validation
- **🎯 SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **♿ Accessible**: WCAG compliant with proper focus management
- **🔧 Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [Material-UI (MUI) v5+](https://mui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: MUI styled-components + CSS-in-JS
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [MUI Icons](https://mui.com/material-ui/material-icons/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pranshulakhotia/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
portfolio/
├── src/app/                 # Next.js App Router pages
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and optimizations
├── components/             # React components
│   ├── Navbar.tsx          # Navigation with mobile drawer
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About section with timeline
│   ├── Skills.tsx          # Skills with animated progress bars
│   ├── Projects.tsx        # Projects with Bento grid layout
│   ├── Experience.tsx      # Experience with animated timeline
│   ├── Contact.tsx         # Contact form with validation
│   └── Footer.tsx          # Footer component
├── lib/                    # Utility libraries
│   ├── theme.ts            # MUI theme configuration
│   ├── animations.ts       # Framer Motion animation variants
│   └── ThemeProvider.tsx   # Theme context provider
├── data/                   # Static data
│   ├── projects.ts         # Projects data
│   ├── skills.ts           # Skills data
│   └── experience.ts       # Experience data
└── public/                 # Static assets
    └── projects/           # Project images
```

## 🎨 Customization

### Personal Information

1. **Update personal data** in the data files:
   - `data/projects.ts` - Your projects
   - `data/skills.ts` - Your skills and proficiency levels
   - `data/experience.ts` - Your work experience and education

2. **Update contact information** in:
   - `components/Contact.tsx` - Contact details
   - `components/Footer.tsx` - Social links

3. **Update metadata** in:
   - `src/app/layout.tsx` - SEO information

### Styling

1. **Theme customization** in `lib/theme.ts`:
   - Colors, typography, component styles
   - Dark/light mode configurations

2. **Animation customization** in `lib/animations.ts`:
   - Modify existing animations or create new ones

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `components/Navbar.tsx`

## 🎭 Animation Features

- **Page Transitions**: Smooth transitions between sections
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Typing Animation**: Dynamic typing effect in hero section
- **Progress Bars**: Animated skill progress indicators
- **Stagger Animations**: Sequential animations for lists and grids

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Optimized for all screen sizes
- **Touch Friendly**: Large touch targets and mobile-optimized interactions
- **Performance**: Optimized images and lazy loading

## 🔧 Performance Optimizations

- **Next.js 15**: Latest performance improvements
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting and lazy loading
- **Font Optimization**: Optimized Google Fonts loading
- **Bundle Analysis**: Optimized bundle size
- **SEO**: Complete SEO optimization with meta tags

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

The portfolio can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pranshulakhotia/portfolio/issues).

## 📧 Contact

**Pranshul Akhotia**
- Email: pranshul@example.com
- LinkedIn: [pranshulakhotia](https://linkedin.com/in/pranshulakhotia)
- GitHub: [pranshulakhotia](https://github.com/pranshulakhotia)

---

⭐ **Star this repository if you found it helpful!**
