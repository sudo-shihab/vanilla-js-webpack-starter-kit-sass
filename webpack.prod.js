const webpackCommon = require('./webpack.common.js');
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(webpackCommon, {
	mode: 'production',
	output: {
		filename: 'app.bundle.[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [ new CleanWebpackPlugin() ]
});
