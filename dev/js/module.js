define(function(require, exports, module) {
  	var P = {
		_init:function(){
			document.write('这次好像变了');
		}
	}
	module.exports = {
		init:P._init
	}
})