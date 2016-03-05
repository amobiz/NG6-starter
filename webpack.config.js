var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'sourcemap',
	entry: {},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
			{ test: /\.html$/, loader: 'raw' },
			{ test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
			{ test: /\.svg$/, loaders: [
				"url",
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]},
			{ test: /\.(jpe?g|png|gif)$/i, loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'url?limit=25000',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			]}
		]
	},
	postcss: function () {
		return [
			require('postcss-import')({
				addDependencyTo: webpack
			}),
			require('postcss-bem'),
			require('postcss-cssnext'),
			require('cssnano')({ zindex: false })
		];
	},
	plugins: [
		// Injects bundles in your index.html instead of wiring all manually.
		// It also adds hash to all injected assets so we don't have problems
		// with cache purging during deployment.
		new HtmlWebpackPlugin({
			template: 'client/index.html',
			inject: 'body',
			hash: true
		}),

		// Automatically move all modules defined outside of application directory to vendor bundle.
		// If you are using more complicated project structure, consider to specify common chunks manually.
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function (module, count) {
				return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
			}
		})
	]
};
