const webpackCommon = require('./webpack.common.js');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(webpackCommon, {
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
});
