// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tema Kalcer: Hitam Pekat & Mint Neon
        background: "#0a0a0a", // Hitam doff
        foreground: "#ededed",
        card: "#111111", // Kartu agak terang dikit
        accent: "#00ff88", // Mint Neon Kalcer
        'accent-dim': "#00cc6e",
      },
      fontFamily: {
        // Kita pakai font bawaan Next.js yang 'Geist',
        // tapi kita set 'sans' biar bold banget ala poster kalcer.
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontWeight: {
        // Tambahin variasi weight buat tipografi berani
        'ultra': '900',
      }
    },
  },
  plugins: [],
};
export default config;