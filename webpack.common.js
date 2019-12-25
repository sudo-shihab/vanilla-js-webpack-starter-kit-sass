module.exports = {
	entry: [ 'babel-polyfill', './src/index.js' ],

	//loaders
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
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

	// chunks
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/, // this is what you are looking for
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	}
};
