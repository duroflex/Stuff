/**
	Prototypal inheritance
*/

var thing = {};

/**

console.log(thing);


/**



var Mammal;
Mammal = function () {};
Mammal.prototype.eats = function () {
	return 'everything';
};

var Omnivore;
Omnivore = function () {};
Omnivore.prototype = new Mammal();

var Human;
Human = function () {};
Human.prototype = new Omnivore();

var Hippie;
Hippie = function () {};
Hippie.prototype = new Human();
Hippie.prototype.eats = function () {
	return 'photosynthetic life forms only';
};

var dude;
dude = new Human();
console.log(dude.eats());

dude = new Hippie();
console.log(dude.eats());



/**/