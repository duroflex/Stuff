/**
	The basics
*/

/*	type stuff	*/

globalScoped = 'fail';
var localScoped = 'win';

var anInt = 1;
var aFloat = 1.1;
var aString = '1';

var failBool = (anInt == aString);	/*	true	*/
var winBool = (anInt === aString);	/*	false	*/

var aFunction = function () {};

var anArray = [];
var anObject = {};

var undefined;	/*	??????	*/