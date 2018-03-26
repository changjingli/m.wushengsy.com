const path = require( 'path' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve( 'dist' ),
		chunkFilename: '[name].bundle.js',
		library: "mui",
		libraryTarget: "umd"
	},
	module: {
		rules: [ {
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin( [ 'dist' ] ),
		new HtmlWebpackPlugin( {
			template: './src/template.html'
		} )
	],
	externals: {
		mui: "mui"
	}
};