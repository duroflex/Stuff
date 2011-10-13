/**
	Example of using closures to dynamically create functions with common behaviour
	
	**
	 
	The concept that when you declare a function within another function,
	the outer function's scope is accessible within the inner function.

*/

var closure = function () {
	var definedOnLoad = 'This persists over time';
	
	return {
		dynamico : function (runtimeVar) {
			
			runtimeVar = (runtimeVar || ', but is also dynamic!');

			console.log(definedOnLoad + runtimeVar);
		}
	};
}();


/**

var first = closure.dynamico();
var second = closure.dynamico(', and share some common logic');

/**/