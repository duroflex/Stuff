/**
	Dynamically create functions with common behaviour
	
	Doesn't work - why?
*/

var closure = function (name) {
	var string = 'Hi my name is ';
	
	var greeting = function (lastName) {
		name = (name || 'Conan');
		console.log(string + name + ' ' + lastName);
	};

	return {
	
		makeName : function (name) {
			return greeting;
		}
	};
};

/**
	examples
*/
console.log("\n\n");
console.log('Closure 3');

var logConanFunc = closure().makeName('Skippy');
logConanFunc('The Barbarian');

closure().makeName('Dewey')('The Librarian');

/**/