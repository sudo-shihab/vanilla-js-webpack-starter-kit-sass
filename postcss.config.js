const purgecss = require('@fullhuman/postcss-purgecss');

if (process.env.NODE_ENV === 'production') {
	module.exports = {
		plugins: [
			require('tailwindcss'),
			require('autoprefixer'),
			purgecss({
				content: [
					'./src/**/*.html',
					'./src/**/*.vue',
					'./src/**/*.jsx'
					// etc.
				],
				// Include any special characters you're using in this regular expression
				defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
			})
		]
	};
}

if (process.env.NODE_ENV === 'development') {
	module.exports = {
		plugins: [ require('tailwindcss'), require('autoprefixer') ]
	};
}
