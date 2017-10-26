let dev = process.env.NODE_ENV === "dev"
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let config = {
	entry: {
		app: ['./src/index.jsx'],
	},

	output: {
		path: __dirname + '/public/dist/',
		filename: 'bundle.js'
	},
	watch: dev,
	devtool: dev ? "cheap-module-eval-source-map" : "source-map",
	resolve: {
        extensions: ['.js', '.jsx']
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	node: {
   		fs: "empty",
   		net: "empty",
   		child_process: "empty"
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'style.css'
		})
	]
}

if(!dev) {
	config.plugins.push(new UglifyJSPlugin({
		sourceMap: true
	}))
}

module.exports = config