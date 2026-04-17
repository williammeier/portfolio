/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container automatically
        padding: {
          DEFAULT: '1rem', // Default padding for mobile
          sm: '2rem', // Custom padding for sm breakpoint
          lg: '4rem', // Custom padding for lg breakpoint
        },
        // Optionally override max-widths for specific screens
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
          '2xl': '1300px',
        },
      },
      colors: {
        primary: '#13b4be',
        dark: '#121010',
        'bg-0': '#121010',
        'bg-1': '#1a1818',
        'bg-2': '#242121',
        'light-bg-0': '#f8f9fa',
        'light-bg-1': '#ffffff',
        'light-bg-2': '#eef1f3',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
