/**
	Dynamically create functions with common behaviour
	
	Minified and private properties
*/

var closure = function () {
	var string = 'Hi my name is ';
	
	var makeName = function greeting (name) {
		name = (name || 'Conan');
		
		return function (lastName) {
			console.log(string + name + ' ' + lastName);
		};
	}

	return {
		makeName : makeName
	};
}();

/**
	examples
*/
console.log("\n\n");
console.log('Closure 4');

var logConanFunc = closure.makeName();
logConanFunc('The Barbarian');

closure.makeName('Dewey')('The Librarian');

/**/