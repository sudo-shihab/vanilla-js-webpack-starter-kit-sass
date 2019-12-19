const webpackCommon = require('./webpack.common.js');
const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(webpackCommon, {
	mode: 'development',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
});
