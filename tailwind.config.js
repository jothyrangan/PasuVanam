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
        background: "#FFF7ED",   // soft cream (milk feel)
        foreground: "#1F2937",

        primary: "#E07A1F",      // 🔶 logo orange
        secondary: "#2F5D3A",    // 🌿 logo green
        accent: "#4CAF50",       // lighter green

        muted: "#F3F4F6",
        border: "#E5E7EB",
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-yatra)', 'serif', 'Georgia'],
      },

      borderRadius: {
        md: '10px',
        xl: '18px',
      },

      boxShadow: {
        soft: '0 6px 25px rgba(0, 0, 0, 0.06)',
        glow: '0 10px 40px rgba(224, 122, 31, 0.25)', // orange glow
      }
    },
  },
  plugins: [],
};