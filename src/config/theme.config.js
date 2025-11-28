/**
 * Theme Configuration - ConsultMetal
 *
 * ALL color values, gradients, shadows, and design tokens
 * Professional blue theme for IT/technical solutions company
 *
 * UPDATE THIS FILE TO CHANGE COLORS/THEME THROUGHOUT APPLICATION
 */

export const themeConfig = {
  // ========================================
  // PRIMARY COLORS - Blue Theme
  // ========================================
  colors: {
    primary: {
      main: "#2563eb", // Vibrant blue
      light: "#3b82f6",
      dark: "#1e40af",
      darker: "#1e3a8a",
    },

    secondary: {
      main: "#0ea5e9", // Sky blue
      light: "#38bdf8",
      dark: "#0284c7",
    },

    accent: {
      main: "#06b6d4", // Cyan
      light: "#22d3ee",
      dark: "#0891b2",
    },

    // Neutral colors
    white: "#ffffff",
    black: "#000000",

    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },

    // Semantic colors
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",

    // Background colors
    background: {
      primary: "#ffffff",
      secondary: "#f9fafb",
      dark: "#1f2937",
      blue: "#eff6ff", // Light blue background
    },

    // Text colors
    text: {
      primary: "#111827",
      secondary: "#4b5563",
      light: "#6b7280",
      white: "#ffffff",
      blue: "#2563eb",
    },

    // Border colors
    border: {
      light: "#e5e7eb",
      medium: "#d1d5db",
      dark: "#9ca3af",
      blue: "#3b82f6",
    },
  },

  // ========================================
  // GRADIENTS
  // ========================================
  gradients: {
    primary: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    secondary: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    hero: "linear-gradient(135deg, rgba(37, 99, 235, 0.95) 0%, rgba(30, 64, 175, 0.95) 100%)",
    overlay:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
    overlayLight:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4))",
  },

  // ========================================
  // SHADOWS
  // ========================================
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    blue: "0 10px 30px -5px rgba(37, 99, 235, 0.3)",
    blueLg: "0 20px 40px -10px rgba(37, 99, 235, 0.4)",
  },

  // ========================================
  // OPACITY
  // ========================================
  opacity: {
    0: "0",
    10: "0.1",
    20: "0.2",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    80: "0.8",
    90: "0.9",
    100: "1",
  },

  // ========================================
  // SPACING SCALE
  // ========================================
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    32: "8rem", // 128px
  },

  // ========================================
  // BORDER RADIUS
  // ========================================
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px",
  },

  // ========================================
  // TRANSITIONS
  // ========================================
  transitions: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    easing: {
      default: "cubic-bezier(0.4, 0, 0.2, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // ========================================
  // Z-INDEX SCALE
  // ========================================
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export default themeConfig;
