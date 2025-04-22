// tailwind.config.mjs
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Lora', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

