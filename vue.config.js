/* global module, process */
const { YODIFY_BUILD_LIBRARY } = process.env;

module.exports = {
	configureWebpack: {
		entry: './example/main.js',
	},
};

if (YODIFY_BUILD_LIBRARY) module.exports = {};
