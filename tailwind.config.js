module.exports = {
	theme: {
		screens: {
			xs: '640px',

			sm: '1024px',
			// => @media (min-width: 640px) { ... }

			md: '1184px',
			// => @media (min-width: 1024px) { ... }

			lg: '1480px',
			// => @media (min-width: 1280px) { ... }

			xl: '1660px'
		},

		extend: {
			colors: {
				'gray-100': '#f8f8f8',
				'gray-200': '#EBEBEB'
			},
			fontFamily: {
				display: [ 'Playfair Display', 'serif' ],
				body: [ 'Open Sans', 'sans-serif' ]
			},
			lineHeight: {
				header: '64px'
			},
			zIndex: {
				'1000': 1000
			},
			inset: {
				'-6p': '-6px'
			},
			height: {
				'app-header-height': '64px'
			}
		}
	},
	variants: {},
	plugins: []
};
