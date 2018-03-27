const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require( 'webpack' );

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
	    proxy: {
		    '/apis': 'http://wushengsy.com/'
	    }
	    // host: '192.168.1.178',
	    // port: '80'
    }
});