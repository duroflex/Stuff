/**
	Dynamically create functions with common behaviour
	
	String property writable from global scope
*/

function Closure (){};
Closure.prototype.string = 'Hi my name is ';
Closure.prototype.makeName = function (name) {
	var that = this;

	name = (name || 'Conan');
	
	function greeting (lastName) {
		console.log(that.string + name + ' ' + lastName);
	};
	
	return greeting;
};

/**
	examples
*/
console.log("\n\n");
console.log('Closure 1');

var closure = new Closure();
var logConanFunc = closure.makeName();
logConanFunc('The Barbarian');

Closure.prototype.string = 'Hi I look like ';
logConanFunc('The Cosmic Eel');

closure.makeName('Dewey')('The Librarian');

/**/