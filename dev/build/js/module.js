'use strict';

define("js/module.js",[],function (require, exports, module) {
	var P = {
		_init: function _init() {
			document.write('这次好像变了');
		}
	};
	module.exports = {
		init: P._init
	};
});