import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF6E5',
        sky: { DEFAULT: '#BFE9FF', deep: '#7FD0F5' },
        sun: { DEFAULT: '#FFC93C', deep: '#FF9F1C' },
        coral: { DEFAULT: '#FF6B6B', deep: '#E84855' },
        grass: { DEFAULT: '#5BC56B', deep: '#2FA84F' },
        grape: { DEFAULT: '#A06CD5', deep: '#7E4FC0' },
        ink: { DEFAULT: '#3A2E5C', soft: '#6C5B8C' },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'cursive'],
        rounded: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        chunky: '0 8px 0 var(--tw-shadow-color)',
        'chunky-sm': '0 6px 0 var(--tw-shadow-color)',
        soft: '0 12px 0 rgba(58, 46, 92, 0.18)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.08)' },
        },
        floatX: {
          from: { transform: 'translateX(-20vw)' },
          to: { transform: 'translateX(120vw)' },
        },
        flicker: {
          from: { transform: 'scaleY(1) scaleX(1)' },
          to: { transform: 'scaleY(1.12) scaleX(0.94) translateY(-2px)' },
        },
      },
      animation: {
        bob: 'bob 3.4s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
        floatX: 'floatX 38s linear infinite',
        flicker: 'flicker 0.5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
