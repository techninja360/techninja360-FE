/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
			xl: { max: "1279px" },

			lg: { max: "1023px" },

			md: { max: "767px" },

			sm: { max: "639px" },
		},
  },
  plugins: [],
}
