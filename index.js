/*!
 * es3ify webpack plugin v2
 * xiewulong <xiewulong@vip.qq.com>
 * create: 2017/07/31
 * since: 0.0.1
 */
'use strict';

const transform = require('es3ify').transform;
const ModuleFilenameHelpers = require('webpack/lib/ModuleFilenameHelpers');
const ConcatSource = require('webpack-sources/lib/ConcatSource');

const defaultOptions = {
	test: /\.js$/i,
};

module.exports = class Es3ifyPlugin {

	constructor(options = {}) {
		this.options = Object.assign({}, defaultOptions, options);
	}

	apply(compiler) {

		compiler.plugin('emit', (compilation, callback) => {
			Object.keys(compilation.assets)
				.filter(ModuleFilenameHelpers.matchObject.bind(null, this.options))
				.forEach((file) => {
					let asset = compilation.assets[file];

					return compilation.assets[file] = new ConcatSource(transform(asset.source()));
				})
				;

			callback();
		});

	}

};
