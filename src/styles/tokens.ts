export const tokens = {
  color: {
    primary: "#2f47e8",
    primaryHover: "#1e34c9",
    primaryBorder: "#367aff",
    primaryFocus: "rgba(47, 71, 232, 0.1)",

    error: "#ff4444",
    errorFocus: "rgba(255, 68, 68, 0.15)",

    white: "#ffffff",
    selected: "#3C538E",

    gray: {
      100: "#f9f9f9",
      200: "#ededed",
      300: "#e0e0e0",
      400: "#d0d0d0",
      500: "#999",
      550: "#828282",
      600: "#666",
      650: "#6b7280",
      700: "#6c6c6c",
      800: "#232323",
    },

    overlay: "rgba(0, 0, 0, 0.5)",
    spinnerBorderLight: "rgba(255, 255, 255, 0.3)",

    badge: "#9b7bdb",

    link: "#242edb",
    linkHover: "#1e34c9",

    disabled: "#999",

    gradient: {
      start: "rgba(237, 237, 237, 0.5)",
      startLogo: "rgba(220, 220, 220, 0.5)",
      end: "rgba(237, 237, 237, 0)",
    },
  },

  spacing: {
    0: "2px",
    1: "4px",
    2: "6px",
    3: "8px",
    4: "9px",
    5: "10px",
    6: "12px",
    8: "16px",
    10: "18px",
    11: "20px",
    12: "24px",
    16: "32px",
    24: "48px",
    logoPaddingX: "8.5px",
    tableHeaderX: "24.5px",
    tableCellX: "11.5px",
  },

  radius: {
    sm: "4px",
    md: "12px",
    lg: "40px",
    full: "100px",
  },

  typography: {
    fontSize: {
      xs: "12px",
      sm: "13px",
      base: "14px",
      md: "16px",
      lg: "18px",
      xl: "40px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: "110%",
      normal: "150%",
    },
  },

  shadow: {
    card: {
      top: "0 -2px 10px rgba(0, 0, 0, 0.04)",
      bottom: "0 8px 24px rgba(0, 0, 0, 0.06)",
    },
    logo: {
      outline: "0 0 0 2px #ffffff",
      drop: "0 12px 8px 0 rgba(0, 0, 0, 0.03)",
    },
    table: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },

  transition: {
    fast: "0.2s",
    normal: "0.25s",
  },

  breakpoint: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
  },
} as const;

export type Tokens = typeof tokens;
