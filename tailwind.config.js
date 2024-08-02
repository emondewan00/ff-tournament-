/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "480px",
        },
      },
      backgroundImage: {
        "custom-img": "url('/images/free-fire-1.jpg')",
        "auth-img": "url('/images/login.jpg')",
      },
    },
  },
  plugins: [],
};
