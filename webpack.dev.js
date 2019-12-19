const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: 'app.bundle.[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	},

	//loaders
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	},

	//plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
