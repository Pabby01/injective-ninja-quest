import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Injective brand colors
        injective: {
          cyan: '#00F2FE',
          blue: '#0082FA',
          darkBlue: '#004C99',
          purple: '#7B61FF',
          neon: '#B026FF',
        },
        // Dark theme colors
        dark: {
          bg: '#0A0A0F',
          card: '#141419',
          border: '#1F1F2E',
          text: '#E5E5E7',
          muted: '#8B8B93',
        },
      },
      backgroundImage: {
        'gradient-ninja': 'linear-gradient(135deg, #00F2FE 0%, #7B61FF 50%, #B026FF 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(20, 20, 25, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 242, 254, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(123, 97, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
