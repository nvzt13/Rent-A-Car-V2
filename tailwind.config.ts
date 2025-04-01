import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        drive: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' }
        },
        ellipsis: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        'drive': 'drive 3s linear infinite',
        'loading': 'pulse 2s infinite',
        'ellipsis': 'ellipsis 1.5s infinite'
      }
    },
  },
  plugins: [],
};

export default config; 