/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor:{
				primary:"#fff",
				secondary:"#023a39",
				dark:"#000"
			},
			colors:{
				primary:'#fff'
			}
		},
	},
	plugins: [],
}
