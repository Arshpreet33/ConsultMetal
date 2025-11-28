# ConsultMetal Website

Professional website for ConsultMetal - Technical solutions for Sheet Metal industries

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Project Overview

A modern, bilingual (English/French) static website built with React and Vite. Features a centralized configuration system where all content, colors, and styling are managed from config files.

### Current Status
- ✅ Contact page (fully functional with bilingual support)
- 🚧 Home, About, Products, Services pages (coming soon)

## 🎨 Features

### ✨ Key Features
- **Bilingual Support**: English/French with localStorage persistence
- **Centralized Configuration**: All content and styling in config files
- **Professional Blue Theme**: Modern, clean design
- **Responsive Design**: Mobile-first approach
- **Sticky Navigation**: Professional header with CTA
- **Contact Form**: Ready for backend integration

### 🌍 Language System
- Toggle between English and French with one click
- Language preference saved in localStorage
- Defaults to English
- All text content bilingual in config files

## 📁 Project Structure

```
ConsultMetal/
├── src/
│   ├── config/
│   │   ├── company.config.js      # ALL business data & content
│   │   └── theme.config.js        # ALL colors, gradients, shadows
│   ├── context/
│   │   └── LanguageContext.jsx    # Bilingual support
│   ├── components/
│   │   └── Layout/
│   │       ├── Header.jsx         # Navigation with language toggle
│   │       ├── Footer.jsx         # Footer with company info
│   │       └── Layout.jsx         # Main wrapper
│   ├── pages/
│   │   └── ContactPage.jsx        # Contact page
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.css      # CSS custom properties
│   │       ├── globals.css        # Base element styling
│   │       └── utilities.css      # Utility classes
│   ├── App.jsx                    # Router setup
│   └── main.jsx                   # App entry point
├── public/
│   └── images/                    # Image assets
└── package.json
```

## 🔧 Configuration System

### Centralized Data Management

All website content is managed through configuration files:

**`src/config/company.config.js`**
- Business information (name, contact details, address)
- Navigation menu items (bilingual)
- Products and services data
- Contact form labels
- Footer content

**`src/config/theme.config.js`**
- Color palette (primary, secondary, accent)
- Gradients and shadows
- Spacing scale
- Border radius values
- Transitions and z-index

### How to Update Content

1. **Change text/content**: Edit `src/config/company.config.js`
2. **Change colors/theme**: Edit `src/config/theme.config.js`
3. **Changes apply automatically** across all pages

## 🎨 Design System

### Color Theme
- **Primary**: Blue (#2563eb)
- **Background**: White (#ffffff)
- **Text**: Dark gray (#111827)
- **Professional blue theme** throughout

### Typography
- Sans-serif font stack (system fonts)
- Responsive font sizes (mobile-first)
- Clear hierarchy with heading styles

### Components
- **Header**: Sticky navigation with logo, menu, CTA, and language toggle
- **Footer**: Company info, quick links, contact details
- **Contact Form**: Name, phone, email, message fields

## 🌐 Navigation

Current menu structure:
- Home
- About Us
- Products (new)
- Services
- Contact
- Book a Consultation (CTA button)
- Français/English (language toggle)

## 📱 Responsive Design

Breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components fully responsive with mobile-first CSS.

## 🖼️ Images

Images are organized in `public/images/` by category:

```
public/images/
├── icons/          # Logo, icons
├── contact/        # Contact page images
├── home/           # Homepage images
├── products/       # Product images
├── services/       # Service images
└── about/          # About page images
```

**Current Images:**
- Logo: `public/images/icons/logo-primary.svg` (✅ placeholder created)
- Contact Hero: Needs actual background image at `public/images/contact/contact-hero.jpg`

See `public/images/README.md` for image guidelines.

## 🔄 Bilingual Implementation

### Using the Language System

```jsx
import { useLanguage } from '../context/LanguageContext';

function MyComponent() {
  const { getText, toggleLanguage } = useLanguage();
  
  // Get translated text
  const title = getText({
    en: "Welcome",
    fr: "Bienvenue"
  });
  
  return <h1>{title}</h1>;
}
```

### Language Features
- `getText()` - Get text in current language
- `toggleLanguage()` - Switch between EN/FR
- `language` - Current language code ('en' or 'fr')

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Generates optimized files in `dist/` folder, ready to deploy to any static hosting service.

## 📝 Next Steps

1. Add actual company logo
2. Add contact hero background image
3. Implement form submission backend
4. Create remaining pages (Home, About, Products, Services)

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 7
- **Routing**: React Router 6
- **Styling**: CSS with custom properties

---

**For detailed architecture info, see `.github/COPILOT_INSTRUCTIONS.md`**
