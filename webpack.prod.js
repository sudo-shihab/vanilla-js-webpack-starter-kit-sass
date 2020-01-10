const webpackCommon = require('./webpack.common.js');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = merge(webpackCommon, {
	devtool: 'source-map',
	mode: 'production',
	output: {
		filename: '[name][contentHash].min.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ]
			}
		]
	},
	// chunks
	/*
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						// get the name. E.g. node_modules/packageName/not/this/part.js
						// or node_modules/packageName
						const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

						// npm package names are URL-safe, but some servers don't like @ symbols
						return `npm.${packageName.replace('@', '')}`;
					}
				}
			}
		}
	},*/
	optimization: {
		minimize: true,
		minimizer: [ new TerserPlugin() ],
		splitChunks: {
			chunks: 'all'
		}
	},

	/** refer this for old megthod of having vendor and app.js files
		 *  optimization: {
    		splitChunks: {
      		chunks: 'all',
    		},
  			},
	*/

	plugins: [
		new MiniCssExtractPlugin({ filename: '[name][contentHash].min.css' }),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: {
				preset: [ 'default', { discardComments: { removeAll: true } } ]
			},
			canPrint: true
		}),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				removeAttributeQuotes: true,
				removeComments: true,
				collapseWhitespace: true
			}
		}),

		new PreloadWebpackPlugin({
			rel: 'preload',
			include: 'initial' // initial or allchunks
		}),
		new CompressionPlugin({
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$|\.jpg?.$/,
			threshold: 8192, // keep it 0 to test : make all file compresed
			minRatio: 0.7 // keep it 1 to test :  make all file compressed
		}),
		new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$|\.jpg?.$/,
			threshold: 8192, // keep it 0 to test : make all file compresed
			minRatio: 0.7 // keep it 1 to test :  make all file compressed
		})
	]
});
