/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marvel: {
          crimson: '#e62429',
          crimsonHover: '#c81d22',
          crimsonDark: '#991216',
          gold: '#f59e0b',
          goldLight: '#fbbf24',
          bgDark: '#0b0e14',
          surface: '#161b22',
          surfaceAlt: '#1f242c',
          border: '#30363d',
          borderLight: '#3d444d',
          textMuted: '#8b949e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-crimson': '0 0 20px -3px rgba(230, 36, 41, 0.45)',
        'glow-gold': '0 0 20px -3px rgba(245, 158, 11, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 8px rgba(230, 36, 41, 0.6))' },
          '50%': { opacity: 0.75, filter: 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.8))' },
        },
        popIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pop-in': 'popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
