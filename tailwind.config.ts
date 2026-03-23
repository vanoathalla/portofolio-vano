// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <-- PASTIKAN GINI, BUKAN ./src/app/...
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00ff88",
        card: "#111111",
      },
    },
  },
  plugins: [],
};
export default config;