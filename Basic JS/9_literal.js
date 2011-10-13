/**
	Literal object
 */

/**
 * singleton containing very simple data objects
 */
var Wind = function () {

	var weatherTypes = {
		'lenient' : {
			'up' : 1.01,
			'down' : 0.99
		},
		'standard' : {
			'up' : 1.05,
			'down' : 0.95
		},
		'chaotic' : {
			'up' : 1.23,
			'down' : 0.19
		}
	};

	var currentSpeed = 1.0;
	var currentWeather = weatherTypes.standard;

	/**/

	var getSpeed = function () {
		return currentSpeed;
	};

	var faster = function () {
		currentSpeed *= currentWeather.up;
	};
	var slower = function () {
		currentSpeed *= currentWeather.down;
	};

	/*	public functions	*/

	return {
		'blowFaster' : faster,
		'blowSlower' : slower,

		'getSpeed' : getSpeed
	};
} ();