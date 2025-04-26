/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#9333ea',
        tertiary: '#f59e0b',
        success: '#10b981',
        warning: '#facc15',
        error: '#ef4444',
        info: '#3b82f6',
      },
    },
  },
  plugins: [],
}
