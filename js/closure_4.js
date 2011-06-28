/**
	Dynamically create functions with common behaviour
	
	Singleton literal with private properties.
	
	**
	
	A closure resulting from assigning references to inner function objects, to the public properties of a constructed object, from within its constructor
	 
	aka
	 
	A closure resulting from returning an object with a reference to the inner function greeting()
*/

var closure = function () {
	var string = 'Hi my name is ';
	
	var makeName = function makeName (name) {
		name = (name || 'Conan');
		
		return function greeting (lastName) {
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