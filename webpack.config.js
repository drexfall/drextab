// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';


const config = {
	entry: {
		main: "./src/main.js",
		about: "./src/about/main.js",
		feedback: "./src/feedback/main.js",
		settings: "./src/settings/main.js",
		privacy: "./src/privacy/main.js",
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'static'),
		},
		hot: true,
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: (pathData) => {
			return pathData.chunk.name === "main" ? "main.js" : "[name]/main.js";
		},
		
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			chunks: ["main"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/privacy/index.html",
			filename: "privacy/index.html",
			chunks: ["privacy"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/settings/index.html",
			filename: "settings/index.html",
			chunks: ["settings"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/feedback/index.html",
			filename: "feedback/index.html",
			chunks: ["feedback"]
		}),
		new HtmlWebpackPlugin({
			template: "./src/about/index.html",
			filename: "about/index.html",
			chunks: ["about"]
		}),
		
		
		new MiniCssExtractPlugin({
			filename: (pathData) => {
				return pathData.chunk.name === "main" ? "main.css" : "[name]/style.css";
			},
		}),
		
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webmanifest)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[hash][ext][query]'
				}
			},
			{
				test: /.html$/,
				use: ["html-loader"]
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
		
		
	} else {
		config.mode = 'development';
	}
	return config;
};