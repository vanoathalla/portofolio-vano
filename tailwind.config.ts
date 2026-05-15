import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base:         "#FAFAF7",
        surface:      "#F5F0E8",
        "surface-soft": "#F0E8E4",
        "text-primary": "#2A2A2A",
        "text-muted":   "#7A7570",
        accent:         "#C9A96E",
        border:         "rgba(42,42,42,0.1)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans:    ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        xl: "4px",
        "2xl": "4px",
        full: "9999px",
      },
      spacing: {
        section: "120px",
        "section-mobile": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
