/**
	Usage
 */

var Logic;
Logic = function () {};
Logic.prototype.getA = function () {return this.a};
Logic.prototype.getB = function () {return this.b};
Logic.prototype.getC = function () {return this.c};

/*	this incidentally follows json syntax	*/
var logicData = [
	{'a' : 1, 'b' : 2, 'c' : 3},
	{'a' : 4, 'b' : 5, 'c' : 6},
	{'a' : 7, 'b' : 8, 'c' : 9}
];



/**/



Logic.Factory = function (allLogicObjects) {

	var howMany = allLogicObjects.length;
	for (var index = 0 ; index < howMany ; index++) {

		var thisData = allLogicObjects[index];

		var replacement = new Logic();
		replacement.a = thisData.a;
		replacement.b = thisData.b;
		replacement.c = thisData.c;

		allLogicObjects[index] = replacement;
	}

	var GetAll = function () {
		return allLogicObjects;
	};

	var GetHavingAOver = function (limit) {
		limit = limit || 5;

		var chunks = [];

		for (var index = 0 ; index < howMany ; index++) {

			var object = allLogicObjects[index];

			if (object.getA() > limit) {
				chunks[index] = object;
			}
		}

		return chunks;
	};

	return {
		'GetAll' : GetAll,
		'GetHavingAOver' : GetHavingAOver
	};

} (logicData);



/**/


var aOver3s = Logic.Factory.GetHavingAOver(3);


/**/