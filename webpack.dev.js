const webpackCommon = require('./webpack.common.js');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = merge(webpackCommon, {
	devtool: 'inline-source-map',
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// post css loader
					'postcss-loader',
					// Compiles Sass to CSS
					'sass-loader'
				]
			},
			{
				test: /\.font\.js/,
				use: [ 'style-loader', 'css-loader', 'webfonts-loader' ]
			}
		]
	},
	//plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new PreloadWebpackPlugin({
			rel: 'preload',
			include: 'initial' // initial or allchunks
		}),
		new PreloadWebpackPlugin({
			rel: 'prefetch',
			include: [ 'connectionStatusCmpnt' ] // initial or allchunks
		})
	]
});
