/**
 * Theme Configuration - ConsultMetal New Design
 * Centralized theme settings for consistent styling across the application
 */

const themeConfig = {
  // ===========================================
  // COLORS
  // ===========================================
  colors: {
    primary: {
      main: "#343477",
      light: "#565695",
      dark: "#1a1a3e",
    },
    secondary: {
      main: "#4a4a6a",
      light: "#5a5a7a",
      dark: "#2a2a4a",
    },
    neutral: {
      dark: "#1a1a3e",
      darker: "#0d0d1f",
      light: "#f8f9fa",
      lighter: "#ffffff",
    },
    text: {
      primary: "#2a2a4a",
      secondary: "#4a4a6a",
      muted: "#5a5a7a",
      light: "#f8f9fa",
      white: "#ffffff",
    },
    accent: {
      main: "#565695",
      hover: "#343477",
    },
    status: {
      success: "#28a745",
      warning: "#ffc107",
      error: "#dc3545",
      info: "#17a2b8",
    },
  },

  // ===========================================
  // GRADIENTS
  // ===========================================
  gradients: {
    primary: "linear-gradient(135deg, #343477 0%, #565695 100%)",
    secondary: "linear-gradient(135deg, #4a4a6a 0%, #5a5a7a 100%)",
    dark: "linear-gradient(135deg, #1a1a3e 0%, #343477 100%)",
    metallic:
      "linear-gradient(135deg, rgba(52, 52, 119, 0.1) 0%, rgba(86, 86, 149, 0.2) 50%, rgba(52, 52, 119, 0.1) 100%)",
    shimmer:
      "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
    overlay:
      "linear-gradient(135deg, rgba(26, 26, 62, 0.95) 0%, rgba(52, 52, 119, 0.85) 100%)",
    text: "linear-gradient(135deg, #565695 0%, #565695 100%)",
  },

  // ===========================================
  // TYPOGRAPHY
  // ===========================================
  typography: {
    fontFamily: {
      primary:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
      secondary: "'Inter', sans-serif",
      mono: "'Fira Code', 'Courier New', monospace",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.05rem", // 16.8px
      lg: "1.15rem", // 18.4px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "2rem", // 32px
      "4xl": "2.5rem", // 40px
      "5xl": "3rem", // 48px
      "6xl": "3.5rem", // 56px
      "7xl": "4rem", // 64px
      "8xl": "5rem", // 80px
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      tight: 1.2,
      snug: 1.4,
      normal: 1.5,
      relaxed: 1.7,
      loose: 2,
    },
    letterSpacing: {
      tight: "-0.05em",
      normal: "0",
      wide: "0.05em",
      wider: "0.1em",
      widest: "0.2em",
    },
  },

  // ===========================================
  // SPACING
  // ===========================================
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
    "5xl": "8rem", // 128px
    "6xl": "12rem", // 192px
  },

  // ===========================================
  // LAYOUT
  // ===========================================
  layout: {
    containerMaxWidth: "1440px",
    containerPadding: "2rem",
    breakpoints: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },

  // ===========================================
  // BORDERS & RADIUS
  // ===========================================
  borders: {
    width: {
      thin: "1px",
      medium: "2px",
      thick: "3px",
    },
    radius: {
      none: "0",
      sm: "0.25rem", // 4px
      md: "0.5rem", // 8px
      lg: "0.75rem", // 12px
      xl: "1rem", // 16px
      "2xl": "1.5rem", // 24px
      full: "9999px",
    },
  },

  // ===========================================
  // SHADOWS
  // ===========================================
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px 0 rgba(0, 0, 0, 0.12)",
    lg: "0 8px 16px 0 rgba(0, 0, 0, 0.15)",
    xl: "0 12px 24px 0 rgba(0, 0, 0, 0.18)",
    "2xl": "0 24px 48px 0 rgba(0, 0, 0, 0.22)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    metallic:
      "0 8px 32px rgba(52, 52, 119, 0.15), 0 4px 16px rgba(86, 86, 149, 0.1)",
    metallicHover:
      "0 12px 48px rgba(52, 52, 119, 0.25), 0 8px 24px rgba(86, 86, 149, 0.15)",
  },

  // ===========================================
  // ANIMATIONS
  // ===========================================
  animations: {
    duration: {
      fastest: "0.1s",
      fast: "0.2s",
      normal: "0.3s",
      slow: "0.5s",
      slower: "0.8s",
      slowest: "1s",
    },
    easing: {
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  // ===========================================
  // Z-INDEX LAYERS
  // ===========================================
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // ===========================================
  // OVERLAYS & BACKDROPS
  // ===========================================
  overlays: {
    dark: "rgba(26, 26, 62, 0.9)",
    medium: "rgba(26, 26, 62, 0.7)",
    light: "rgba(26, 26, 62, 0.5)",
    subtle: "rgba(26, 26, 62, 0.3)",
  },

  backdropPatterns: {
    dots: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  },

  // ===========================================
  // GEOMETRIC FRAME
  // ===========================================
  geometricFrame: {
    cornerSize: "30px",
    lineWidth: "2px",
    color: "#565695",
  },

  // ===========================================
  // INDUSTRIAL BADGE
  // ===========================================
  industrialBadge: {
    lineWidth: "40px",
    lineHeight: "2px",
    gap: "12px",
    color: "#565695",
  },
};

export default themeConfig;
