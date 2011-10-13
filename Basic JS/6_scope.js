/**
	Scope
*/

var globallyAvailable = 'avoid these';

function scope () {

	var locallyAvailable = 'and use these instead';

	return globallyAvailable + locallyAvailable;
}



/**/



var wars = function () {
	var greatGrandpas = 'WW2';

	return function () {
		var grandpas = greatGrandpas + ' Vietnam';

		return function () {
			var fathers = grandpas +' Iraq';

			return function () {
				var mine = fathers + ' Afghanistan';

				return function () {

					return mine;
				}()
			}()
		}()
	}()
}();



/**/



var currentPointsScore = function () {
	var myPoints = 8;

	var getMyPoints = function () {
		return myPoints
	};
	
	var setMyPoints = function (newMyPoints) {
		myPoints = newMyPoints;
	};
	
	return {
			'getPoints' : getMyPoints,
			'setPoints' : setMyPoints
		};
} ();

var add3Points = function (aScore) {
	var newPoints = aScore.getPoints() + 3;
	
	aScore.setPoints(newPoints);
	return aScore;
};

var checkFor10GameWinner = function (aScore) {
	return (aScore.getPoints() > 10);
};

var addPointsAndCheckForWinner = function (pointScoreObj, addPointsFunc, checkWinnerFunc) {

	var hasWon = checkWinnerFunc(addPointsFunc(pointScoreObj));
	return hasWon;
};



/**/



var hasWon = addPointsAndCheckForWinner(currentPointsScore, add3Points, checkFor10GameWinner);



/**/