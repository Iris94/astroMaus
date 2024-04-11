/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'maus_blue_bg' : '#24315E',
				'maus_blue_text' : '#475487',

				'maus_green_bg' : 'hsla(143, 62%, 72%, 0.56)',
				'maus_green_btn' : '#44D085',
				'maus_green_text' : '#5CDB94',
				'maus_green_text_euro' : '#4BE18D',

				'maus_dark_text' : 'hsla(0, 0%, 19%, 0.9)',
				'maus_dark_text_title' : 'hsla(39, 20%, 23%, 1)',

				'maus_gold_text' : '#FFD098',
				'maus_light_mix' : '#F5F5F5',
				'maus_rose_bg' : 'hsla(25, 62%, 72%, 0.37)',

				'maus_hr_bg_light' : '#D7DCDF',
				'maus_hr_bg_dark' : '#CBCBCB'
			}
		},
	},
	plugins: [],
}
