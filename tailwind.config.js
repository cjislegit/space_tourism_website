/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1440px',
      },
      backgroundImage: {
        backgroundHomeMobile:
          'url("/src/assets/home/background-home-mobile.jpg")',
        backgroundHomeTablet:
          'url("/src/assets/home/background-home-tablet.jpg")',
        backgroundHomeDesktop:
          'url("/src/assets/home/background-home-desktop.jpg")',
        backgroundDestinationMobile:
          'url("/src/assets/destination/background-destination-mobile.jpg")',
      },
    },
  },
  plugins: [],
};
