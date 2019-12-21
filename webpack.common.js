const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		vendor: './src/vendor.js',
		main: './src/index.js'
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
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							name: '[name].[hash].[ext]',
							outputPath: 'images'
						}
					}
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
