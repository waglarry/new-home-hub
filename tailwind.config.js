/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1400px",
		},
		extend: {},
	},
	plugins: [require("flowbite/plugin")],
};
