var webpack = require('webpack');

module.exports = function (config) {
	config.set({
		// base path used to resolve all patterns
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],

		// list of files/patterns to load in the browser
		files: [{ pattern: 'spec.bundle.js', watched: false }],

		// files to exclude
		exclude: [],

		plugins: [
			require("karma-chai"),
			require("karma-chrome-launcher"),
			require("karma-mocha"),
			require("karma-mocha-reporter"),
			require("karma-sourcemap-loader"),
			require("karma-webpack")
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },

		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{ test: /\.js/, exclude: [/app\/lib/, /node_modules/], loader: 'babel' },
					{ test: /\.html/, loader: 'raw' },
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
					/*
					 disable z-index optimization related to this issue:

					 Disable unsafe rules by default
					 https://github.com/ben-eb/cssnano/issues/28
					 This plugin change z-index!
					 https://github.com/ben-eb/gulp-cssnano/issues/8

					 Cause:
					 angular-material pragmatically set .md-scroll-mask's z-index to 50,
					 whereas cssnano optimizing .md-open-menu-container's z-index below 50, making it no response.
					 */
					require('cssnano')({ zindex: false })
				];
			}
		},

		webpackServer: {
			noInfo: true // prevent console spamming when running in Karma!
		},

		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],

		// web server port
		port: 9876,

		// enable colors in the output
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// toggle whether to watch files and rerun tests upon incurring changes
		autoWatch: false,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// if true, Karma runs tests once and exits
		singleRun: true
	});
};
