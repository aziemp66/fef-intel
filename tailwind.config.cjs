/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-pink": "#F9D9EB",
				"light-blue": "#97C9D2",
				"light-green": "#C8E3B8",
				"light-yellow": "#FBEBBA",
				"light-red": "#EFACA6",
				"bright-red": "#E9685C",
				"bright-blue": "#8BB5BD",
				"bright-green": "#91A784",
				"bright-yellow": "#FFDD75",
			},
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
