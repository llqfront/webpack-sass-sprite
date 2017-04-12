'use strict';

define("js/pro.js",[],function (require, exports, module) {
	var P = {
		_init: function _init() {
			document.write('====1111这个也111变了pro');
		}
	};
	module.exports = {
		init: P._init
	};
});