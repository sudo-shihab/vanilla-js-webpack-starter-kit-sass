const webpackCommon = require('./webpack.common.js');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

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
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	// chunks
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name][contentHash].min.css' }),
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
