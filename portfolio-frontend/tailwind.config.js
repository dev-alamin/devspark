module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'sans-serif'],
      },
    },
  },
  animation: {
    'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
    },
 plugins: [
        require('@tailwindcss/typography'),
        // other plugins
    ],
};
