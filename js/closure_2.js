
/**
	Dynamically create functions with common behaviour
	
	String property hidden from global scope
*/

var closure = {};
closure.makeName = function (name) {
	var string = 'Hi my name is ';

	var greeting = function (lastName) {
		name = (name || 'Conan');
		console.log(string + name + ' ' + lastName);
	};
	
	return greeting;
};

/**
	examples
*/
console.log("\n\n");
console.log('Closure 2');

var logConanFunc = closure.makeName();
logConanFunc('The Barbarian');

closure.string = 'Hi I look like ';
logConanFunc('The Cosmic Eel');

closure.makeName('Dewey')('The Librarian');

/**/