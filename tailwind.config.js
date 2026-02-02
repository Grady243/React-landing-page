/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",

        bgMain: "var(--bg-main)",
        bgSoft: "var(--bg-soft)",

        title: "var(--text-title)",
        body: "var(--text-body)",
      },
    },
  },
  plugins: [],
}
