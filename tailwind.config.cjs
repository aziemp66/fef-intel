/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pink: "#F9D9EB",
				blue: "#97C9D2",
				green: "#C8E3B8",
				yellow: "#FBEBBA",
				red: "#EFACA6",
			},
		},
	},
	plugins: [],
};
