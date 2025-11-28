# Image Organization - ConsultMetal

## Folder Structure

```
public/images/
├── icons/              [Logos, icons, UI elements]
│   └── logo-primary.svg
├── contact/           [Contact page images]
│   └── contact-hero.jpg    ← PUT YOUR CONTACT PAGE BACKGROUND HERE
├── home/              [Homepage images]
│   └── home-hero.jpg       ← PUT YOUR HOME PAGE BACKGROUND HERE
├── about/             [About page images]
│   └── about-hero.jpg      ← PUT YOUR ABOUT PAGE BACKGROUND HERE
├── products/          [Product images]
│   └── products-hero.jpg   ← PUT YOUR PRODUCTS PAGE BACKGROUND HERE
└── services/          [Service images]
    └── services-hero.jpg   ← PUT YOUR SERVICES PAGE BACKGROUND HERE
```

## 🎯 Hero Images - WHERE TO PUT THEM

### Contact Page Hero
**File Path:** `public/images/contact/contact-hero.jpg`
- Image shows behind header on Contact page
- Recommended size: **1920x600px** or similar wide aspect ratio
- Should be: Professional business setting, handshake, office, technology
- Will have **blue overlay** applied automatically

### About Page Hero
**File Path:** `public/images/about/about-hero.jpg`
- Hero background for About Us page
- Recommended size: **1920x600px** or similar wide aspect ratio
- Should be: City skyline, business growth, professional setting
- Will have **blue overlay** applied automatically

### About Page Mission Image
**File Path:** `public/images/about/mission.jpg`
- Side image for mission section
- Recommended size: **800x600px** (4:3 ratio)
- Should be: Office meeting, collaboration, professional discussion
- No overlay applied (shows as-is)

### Other Page Heroes (For Future)
When you create other pages, put hero images here:
- Home: `public/images/home/home-hero.jpg`
- About: `public/images/about/about-hero.jpg`
- Products: `public/images/products/products-hero.jpg`
- Services: `public/images/services/services-hero.jpg`

## 📐 Image Specifications

### Hero Background Images
- **Format**: JPG (optimized)
- **Dimensions**: 1920x600px to 1920x800px
- **File size**: Under 500KB (compress for web)
- **Quality**: 70-85% JPG quality
- **Content**: Professional business imagery
- **Note**: Dark blue overlay will be applied, so image can be lighter

### Logo
- **Current**: `public/images/icons/logo-primary.svg`
- Can be PNG, SVG, or JPG
- Transparent background preferred
- Will show white on transparent header, colored when scrolled

## Naming Convention

- Use lowercase with hyphens
- Format: `[type]-[description].ext`
- Examples:
  - `logo-primary.png`
  - `contact-hero.jpg`
  - `hero-main.jpg`

## Image Guidelines

### File Formats
- **Photos/Heroes**: JPG (optimized, 70-85% quality)
- **Logos/Icons**: PNG (with transparency)
- **Simple graphics**: SVG (when possible)

### Optimization
- Compress images before upload
- Use appropriate dimensions (don't upload 4K for small displays)
- Consider responsive images for different screen sizes

## Current Needs

To display the website properly, you need to add:

1. **Logo**: `public/images/icons/logo-primary.png`
   - Company logo
   - Transparent background preferred

2. **Contact Hero**: `public/images/contact/contact-hero.jpg`
   - Business/professional image
   - Dimensions: 1920x600px or similar aspect ratio
   - Should look good with dark blue overlay

## Temporary Solution

If you don't have images yet, you can:
- Use placeholder services like https://placehold.co/
- Create simple colored rectangles
- Use stock photos from free sources (Unsplash, Pexels)

Example placeholder URLs you can use temporarily:
- Logo: `https://placehold.co/200x50/2563eb/white?text=ConsultMetal`
- Hero: `https://placehold.co/1920x600/1e40af/white?text=Contact+Us`
