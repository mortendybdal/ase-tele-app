export const aseTheme = {
  colors: {
    primary: {
      main: "#006571", // ASE teal/petrol - primary brand color
      light: "#008A9A",
      dark: "#004A54",
      contrast: "#ffffff",
    },
    secondary: {
      main: "#E67E23", // ASE orange - accent color
      light: "#F39C4F",
      dark: "#D76F2C",
      contrast: "#ffffff",
    },
    text: {
      primary: "#3A3A39", // Dark gray for primary text
      secondary: "#6B6B6A",
      disabled: "#9E9E9E",
      inverse: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
      gray: "#eeeeee",
      dark: "#3A3A39",
    },
    success: {
      main: "#4CAF50",
      light: "#81C784",
      dark: "#388E3C",
      contrast: "#ffffff",
    },
    error: {
      main: "#D32F2F",
      light: "#EF5350",
      dark: "#C62828",
      contrast: "#ffffff",
    },
    warning: {
      main: "#F57C00",
      light: "#FFB74D",
      dark: "#E65100",
      contrast: "#ffffff",
    },
    info: {
      main: "#0288D1",
      light: "#4FC3F7",
      dark: "#01579B",
      contrast: "#ffffff",
    },
    divider: "#E0E0E0",
    border: "#CCCCCC",
  },
  typography: {
    fontFamily: '"ITC Avant Garde Gothic W01", Arial, Helvetica, sans-serif',
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
  },
  borderRadius: {
    none: "0",
    sm: "0.25rem", // 4px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    full: "9999px",
  },
  shadows: {
    none: "none",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

export type AseTheme = typeof aseTheme;

// Type definitions for styled-components
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AseTheme {}
}
