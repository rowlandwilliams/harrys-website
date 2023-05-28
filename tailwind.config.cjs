/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'hover:text-location',
    'hover:text-linkedin',
    'hover:text-website',
    'hover:text-github',
    'hover:text-email'
  ],
	theme: {
		extend: {
			screens: {
				xxs: '320px',
				xs: '490px',
				...defaultTheme.screens
			},
			fontSize: {
				ss: '0.8125rem'
			},
			lineHeight: {
				ss: '1.5rem'
			},
			spacing: {
				ss: '3rem'
			},
			colors: {
				nhs_blue: '#005EB8',
				nhs_bright_blue: '#0072CE',
				linkedin: '#0072B1',
				website: '#7e22ce',
				location: '#4f46e5',
				github: '#171515',
				email: '#e11d48',

				...defaultTheme.colors
			}
		},
		variants: {
			fill: ['hover', 'focus']
		}
	},
	plugins: []
};
