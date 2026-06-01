/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#87cefa",
          dark: "#3950a3",
          darker: "#2b408d",
        },
        accent: {
          DEFAULT: "#bc274f",
          dark: "#941b3b",
        },
        surface: {
          DEFAULT: "#f4f4f4",
          border: "#d6d6d6",
        },
        muted: "#6F7482",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 4px 16px -4px rgba(43, 64, 141, 0.12)",
        card: "0 8px 24px -8px rgba(43, 64, 141, 0.18)",
      },
    },
  },
  plugins: [],
};
