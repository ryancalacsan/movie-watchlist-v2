/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('/header.jpg')",
      },
      fontFamily: {
        limelight: ['"limelight"'],
      },
    },
  },
  plugins: [],
}
