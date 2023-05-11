/** @type {import('tailwindcss').Config} */
export default {
	content: ['index.html', 'src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'my-blue': 'hsl(223, 87%, 63%)',
				'pale-blue': 'hsl(223, 100%, 88%)',
				'light-red': 'hsl(354, 100%, 66%)',
				'my-gray': 'hsl(0, 0%, 59%)',
				'very-dark-blue': 'hsl(209, 33%, 12%)'
			}
		}
	},
	plugins: []
}

