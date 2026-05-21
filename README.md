# AL-AHMODANY Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a clean design with glassmorphism effects, smooth animations, and full dark/light mode support.

## 🚀 Live Demo

Visit the live portfolio: [al-ahmodany.dev](https://al-ahmodany.dev)

## ✨ Features

### 🎨 Design & UI
- **Modern Glassmorphism Design** - Clean, professional interface with glass-like effects
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - Engaging micro-interactions and page transitions with Framer Motion
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation

### 📱 Pages & Sections
- **Home** - Hero section with animated identity element and featured projects
- **About** - Personal story, timeline, and technical background
- **Projects** - Portfolio showcase with live demos and tech stacks
- **Skills** - Interactive skill visualization with categories and proficiency levels
- **Resume** - Downloadable CV with print-friendly styling
- **Contact** - Working contact form with FAQ section
- **WhatsApp Integration** - Floating WhatsApp button for direct messaging

### 🛠 Technical Features
- **React 19** - Modern component-based architecture with hooks
- **React Router** - Client-side routing with smooth transitions
- **Context API** - State management for theme and app state
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth animations and page transitions
- **Vite** - Fast build tool and development server
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **Performance** - Optimized images, lazy loading, and code splitting

## 🏗 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── NavBar.jsx          # Navigation with mobile menu
│   │   └── Footer.jsx          # Footer with links and info
│   └── ui/
│       ├── ProjectCard.jsx     # Project showcase cards
│       └── ScrollToTop.jsx     # Scroll to top button
├── pages/
│   ├── HomePage.jsx            # Landing page with hero
│   ├── AboutPage.jsx           # About and timeline
│   ├── ProjectsPage.jsx        # Portfolio showcase
│   ├── SkillsPage.jsx          # Skills and expertise
│   ├── ResumePage.jsx          # CV and experience
│   ├── ContactPage.jsx         # Contact form and info
│   └── NotFoundPage.jsx        # 404 error page
├── data/
│   ├── projects.js             # Project data and metadata
│   └── skills.js               # Skills and proficiency data
├── contexts/
│   └── ThemeContext.jsx        # Theme state management
├── index.css                   # Global styles and utilities
├── App.jsx                     # Main app component
└── main.jsx                    # App initialization
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AL-AHMODANY/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Theme Colors
The design system uses CSS custom properties for easy theming:

```css
:root {
  --accent: #00FF94;        /* Primary accent color */
  --accent-dark: #00CC76;   /* Darker accent variant */
  --bg: #F7F7F2;           /* Light mode background */
  --text: #0A0A0F;         /* Light mode text */
  --card: #FFFFFF;         /* Light mode cards */
  --border: rgba(0,0,0,0.08); /* Light mode borders */
  --muted: #6B7280;        /* Muted text color */
}
```

### Content Updates
- **Projects**: Edit `src/data/projects.js`
- **Skills**: Edit `src/data/skills.js`
- **Personal Info**: Update components in `src/pages/`
- **Contact Info**: Update `src/components/layout/Footer.jsx`

### Adding New Pages
1. Create new React component in `src/pages/`
2. Add route to `src/App.jsx`
3. Update navigation in `src/components/layout/NavBar.jsx`

## 📦 Tech Stack

- **Framework**: React 19 with Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API
- **Deployment**: Vercel (recommended)

## 🌟 Key Features Implemented

### ✅ Routing & Navigation
- ✅ Complete React Router setup with all routes working
- ✅ Mobile-responsive navigation with hamburger menu
- ✅ Smooth page transitions with Framer Motion
- ✅ 404 error page with proper styling

### ✅ Content & Pages
- ✅ Comprehensive Home page with improved hero section
- ✅ Detailed About page with timeline and personal info
- ✅ Projects showcase with live demos and tech stacks
- ✅ Skills page with interactive proficiency indicators
- ✅ Complete Resume page with downloadable CV
- ✅ Contact page with working form UI and FAQ

### ✅ UI/UX & Design
- ✅ Modern glassmorphism design system
- ✅ Dark/light mode with smooth transitions
- ✅ Fully responsive across all device sizes
- ✅ Smooth animations with Framer Motion
- ✅ Professional typography and spacing
- ✅ Accessibility features and ARIA labels

### ✅ Technical Implementation
- ✅ Clean React component architecture
- ✅ Proper state management with Context API
- ✅ SEO optimization with meta tags
- ✅ Performance optimizations
- ✅ Error handling and loading states
- ✅ Production-ready build configuration

### ✅ Hero Section Improvements
- ✅ Fixed circular animated identity element
- ✅ Proper responsive scaling on all devices
- ✅ Glowing animated gradient ring
- ✅ Floating animation and soft pulsing glow
- ✅ Premium modern appearance
- ✅ Professional hero text with rotating roles

### ✅ CV/Resume Functionality
- ✅ Downloadable PDF and HTML CV files
- ✅ Print-friendly styling
- ✅ Complete professional information
- ✅ Proper resume structure and formatting

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

All components adapt gracefully across screen sizes with optimized layouts and touch-friendly interactions.

## 🔧 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting (~127KB gzipped)
- **Images**: Lazy loading and error handling
- **Animations**: Hardware accelerated with reduced motion support
- **Caching**: Proper cache headers for static assets

## 🎬 Animations

The portfolio uses Framer Motion for smooth, professional animations:
- Page transitions
- Scroll-triggered reveals
- Hover effects
- Loading states
- Interactive elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AL-AHMODANY/portfolio/issues).

## 📞 Contact

**AL-AHMODANY** - Frontend Developer
- 📧 Email: rahmanhamad36@gmail.com
- 📱 Phone/WhatsApp: +234 812 911 7778
- 🌐 Website: [al-ahmodany.dev](https://al-ahmodany.dev)
- 💻 GitHub: [@AL-AHMODANY](https://github.com/AL-AHMODANY)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!