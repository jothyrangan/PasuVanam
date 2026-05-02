/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#8B4513",
        secondary: "#F5F5DC",
        accent: "#228B22",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-yatra)', 'serif', 'Georgia'],
      },
      borderRadius: {
        md: '10px',
      },
      boxShadow: {
        soft: '0 4px 14px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
