/**
	The basics
*/

/* object stuff */

var jsHasClasses = false;



/**/



var LiteralThing = {
	a : 'I am literal',
	b : function () {},
	c : {}
};



/**/



var Stuff;
Stuff = function(){};
Stuff.prototype.a = "I am instantiated";
Stuff.prototype.b = function () {};
Stuff.prototype.c = {};

var someStuff = new Stuff();