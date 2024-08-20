import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"infinite-scroll": "infinite-scroll 80s linear infinite",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translate(0)" },
					to: { transform: "translate(-100%)" },
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				dahlia: ["dahlia", "sans-serif"],
				Eklektyk: ["Eklektyk"],
			},
		},
	},
	plugins: [require("daisyui")],
};
export default config;
