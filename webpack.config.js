const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './index.js',
	context: path.join(__dirname, 'src'),
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					'extract-loader',
					'html-loader',
					'ejs-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'static/[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: 'head',
			chunks: ['main'],
		}),
	],
};

