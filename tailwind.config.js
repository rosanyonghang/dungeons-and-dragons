const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
			'8xl': '6rem',
			'9xl': '8rem',
		},
		colors: {
			...colors,
			primary: {
				700: '#f44336',
				100: 'rgba(244,67,54,0.4)',
				50: 'rgba(244,67,54,0.11)',
			},
			secondary: {
				700: '#FF9D2B',
				100: 'rgb(250,156,60)',
			},
		},
		spacing: {
			none: 0,
			xs: '8px',
			sm: '16px',
			md: '24px',
			lg: '32px',
			xl: '48px',
			'2xl': '64px',
			'3xl': '72px',
			'4xl': '84px',
			'5xl': '96px',
			'6xl': '108px',
			'7xl': '124px',
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
