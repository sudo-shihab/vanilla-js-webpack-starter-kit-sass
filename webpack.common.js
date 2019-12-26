module.exports = {
	entry: './src/index.js',

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
									useBuiltIns: 'usage',
									corejs: '2.6.11'
								}
							]
						]
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
						loader: 'url-loader',
						options: {
							esModule: false,
							fallback: require.resolve('file-loader'),
							limit: 9000,
							name: '[name].[hash].[ext]',
							outputPath: 'images'
						}
					}
				]
			}
			/** file-loader fall back if url-loader doesnt work
			 * {
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
			 */
		]
	}
};
