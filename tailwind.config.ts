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
        'gradient-radial': 'radial-gradient(circle at top right, rgba(0, 242, 254, 0.15), transparent 50%)',
        'gradient-hero': 'radial-gradient(ellipse at center, rgba(0, 130, 250, 0.2) 0%, rgba(10, 10, 15, 1) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 242, 254, 0.5), 0 0 10px rgba(0, 242, 254, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(123, 97, 255, 0.8), 0 0 40px rgba(123, 97, 255, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 242, 254, 0.3)',
        'glow-md': '0 0 20px rgba(0, 242, 254, 0.4)',
        'glow-lg': '0 0 40px rgba(0, 242, 254, 0.5)',
        'glow-purple': '0 0 30px rgba(123, 97, 255, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
