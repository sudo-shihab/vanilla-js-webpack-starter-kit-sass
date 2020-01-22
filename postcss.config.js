const purgecss = require('@fullhuman/postcss-purgecss');

if (process.env.NODE_ENV === 'production') {
	module.exports = {
		plugins: [
			require('tailwindcss'),
			require('autoprefixer'),
			purgecss({
				content: [ './src/**/*.html' ]
			})
		]
	};
}

if (process.env.NODE_ENV === 'development') {
	module.exports = {
		plugins: [ require('tailwindcss'), require('autoprefixer') ]
	};
}
