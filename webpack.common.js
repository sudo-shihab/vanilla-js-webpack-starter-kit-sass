const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		corePolyfills: './src/polyfills/core.js',
		app: './src/index.js'
	},

	//loaders
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									targets: {
										browsers: [ 'last 2 versions', 'IE >= 11' ]
									}
								}
							]
						],
						plugins: [ '@babel/plugin-proposal-optional-chaining', '@babel/plugin-syntax-dynamic-import' ]
					}
				}
			},
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ]
			},

			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							esModule: false,
							fallback: require.resolve('file-loader'),
							limit: 10000,
							name: '[name].[hash].[ext]',
							outputPath: 'images'
						}
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-url-loader',
				options: {
					// Inline files smaller than 10 kB (10240 bytes)
					limit: 10 * 1024,
					name: '[name].[hash].[ext]',
					outputPath: 'images',
					// Remove the quotes from the url
					// (they’re unnecessary in most cases)
					noquotes: true
				}
			},
			{
				test: /\.(jpe?g|png|gif|webp)$/,
				loader: 'image-webpack-loader',
				// Specify enforce: 'pre' to apply the loader
				// before url-loader/svg-url-loader
				// and not duplicate it in rules with them
				options: {
					mozjpeg: {
						progressive: true,
						quality: 65
					},
					// optipng.enabled: false will disable optipng
					optipng: {
						enabled: false
					},
					pngquant: {
						quality: [ 0.65, 0.9 ],
						speed: 4
					},
					gifsicle: {
						interlaced: false
					},
					// the webp option will enable WEBP
					webp: {
						quality: 75
					}
				},
				enforce: 'pre'
			},
			{
				test: /\.(ttf|eot|woff|woff2|svg#)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				}
			}
			/** file-loader fall back if url-loader doesnt work
			 * {
				test: /\.(png|jpe?g|gif)$/i,
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
			 */
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.traceDeprecation': true
		}),
		new Dotenv()
	]
};
