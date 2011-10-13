
/*	Stay away from the global scope	*/

	missing = 'foo';
	function what () {
		whereIsIt = 'bar';

		alert(missing);

		var missing;
	}




/*	Keep variable types painfully obvious	*/

	function confusing (userid) {
		return (userid.substr(0, 3) > 100 ? userid : false);
	};

	/**
	 * Checks if userId > 100
	 *
	 * @var int
	 * @return int|false
	 */
	var explicit = function (userId) {
		userId = (userId * 1 || false);

		if (userId !== false && userId > 100) {
			return userId
		}
		return false;
	}





/*	Namespace everything	*/
(function () {
	var Vehicle;
	Vehicle = function () {};
	Vehicle.Bike = function () {};
	Vehicle.Car = function () {};
	Vehicle.Car.Engine = function () {};
	Vehicle.Car.Engine.Turbo = function () {
		var sumfinPrivate = 1;

		return function () {
			return sumfinPrivate + 1;
		};
	}();
})();

/**/

(function Rocket() {
	var thisRocket = {};

	/*	ENGINE	*/
	thisRocket.Engine = function Engine () {
		return {};
	}();

	/*	WEAPONS	*/
	thisRocket.Weapons = function Weapons () {
		var thisWeapons = {};

		/*	GUNS	*/
		thisWeapons.Guns = function Guns () {
			var thisGuns = {};

			/*	GATLING	*/
			thisGuns.Gatling = function Gatling () {
				return {};
			} ();

			return thisGuns;
		} ();

		return thisWeapons;
	} ();

	return thisRocket;
})();




/**/




/*
http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
*/
