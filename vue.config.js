/* global module, process */
const { YODIFY_BUILD_LIBRARY } = process.env;

if (YODIFY_BUILD_LIBRARY)
	module.exports = {
		css: {
			extract: false,
		},
	};
else
	module.exports = {
		configureWebpack: {
			entry: './example/main.js',
		},
	};
