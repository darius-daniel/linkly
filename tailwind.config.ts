import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-pink': '#EB568E',
        'custom-blue': '#144EE3',
        'custom-black': '#0B101B',
        'custom-gray': '#353C4A',
        'custom-dark-gray': '#181E29',
        'custom-dark-gray-transparent': 'rgba(24, 30, 41, 0.22)',
        'custom-lite': '#C9CED6',
        'custom-purple': '#A353AA',
      },
    },
  },
  plugins: [daisyui],
};
export default config;
