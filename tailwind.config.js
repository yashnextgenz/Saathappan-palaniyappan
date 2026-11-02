/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        duco: {
          navy: "#0A3C61",
          ink: "#12355A",
          teal: "#248482",
          deep: "#002B4D",
          mist: "#EEF1F5",
        },
        brand: {
          navy: "#0A2540",
          navyDark: "#061829",
          deepBlue: "#0F3A66",
          ocean: "#034078",
          tealDark: "#134E5E",
          teal: "#00A896",
          tealLight: "#028090",
          cyanBadge: "#E6F7F5",
          cyanText: "#007F70",
          gold: "#F59E0B",
          goldDark: "#D97706",
          bgLight: "#F8FAFC",
          cardBorder: "#E2E8F0",
          textPrimary: "#0F172A",
          textSecondary: "#475569",
          textMuted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        script: ["var(--font-script)", "Playfair Display", "Georgia", "serif"],
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(10, 37, 64, 0.08)",
        card: "0 10px 30px -4px rgba(10, 37, 64, 0.08)",
        hover: "0 20px 35px -5px rgba(10, 37, 64, 0.12)",
      },
      borderRadius: {
        pill: "9999px",
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
