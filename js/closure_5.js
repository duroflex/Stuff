goog.provide('PokkitRokkit.Rocket.Engine');

PokkitRokkit.Rocket.Engine = function () {
	
	var randomNumber = function(l, u) {
		return Math.floor((Math.random() * (u - l + 1)) + l);
	};
	
	var build = function (thrustPower, brakePower, turnSpeed) {
		
		var isColliding = false;
		var isMalfunctioning = false;
		
		var isAccelerating = false;
		var accelerationFactor = 0.1;
		
		var isTurning = 0;
		var angleDegrees = 0;
		
		var flightVector = new goog.math.Vec2(0, 0);
		var thrustVector = new goog.math.Vec2(0, 0);
		
		/**/
		
		var applyThrottle = function () {
			if (!isMalfunctioning) {
				isAccelerating = true;
			} else {
				isAccelerating = false;
			}
		};
		var releaseThrottle = function () {
			isAccelerating = false;
		};
		
		var startTurn = function (turnLeft) {	
			isTurning = ((turnLeft === false) ? -1 : 1);	/*	-1 left, 1 right	*/	
		};
		var stopTurn = function () {
			isTurning = 0;
		};
		
		/**/
					
		var updateSpeed = function () {		
						
			if (!isAccelerating) {			
				if (accelerationFactor > 0.1) {
					accelerationFactor = accelerationFactor * brakePower;					
				} else {
					accelerationFactor = 0.1;
				}
				
				if (flightVector.magnitude() > 0.1) {
					flightVector.scale(brakePower);
				} else {
					flightVector = new goog.math.Vec2(0, 0);
				}
				
			} else {
							
			/*	calculate vector with which to augment flightVector	*/
				var halfPi = (Math.PI / 180);
				var vx = (Math.sin((angleDegrees + 90) * halfPi));			
				var vy = (Math.cos((angleDegrees + 90) * halfPi));
			
				thrustVector = new goog.math.Vec2(vx, vy).scale(accelerationFactor);
				flightVector.add(thrustVector);
				
				if (accelerationFactor < thrustPower) {
					accelerationFactor = accelerationFactor * thrustPower;
				} else {
					accelerationFactor = thrustPower;
				}
			}
			return flightVector.clone();
		};
		
		var updateDirection = function () {
			if (isTurning !== 0) {
			
			/*	calculate new angle	*/
				angleDegrees += (turnSpeed * isTurning);			
				if (angleDegrees > 360) {
					angleDegrees -= 360;
				} else if (angleDegrees < 0) {			
					angleDegrees += 360;
				}			
			}
			return angleDegrees;
		};
		
		var ricochet = function (rocket, collidableObject) {
		
			if (!isColliding) {
				isColliding = true;
				isMalfunctioning = true;
				
				/* augment speed and direction	*/
				var ricochetDirectionVector = collidableObject.getRicochetVector(rocket.getPosition());
				ricocheVector = ricochetDirectionVector.scale(flightVector.magnitude());
				
				var scaleFactor = (rocket.getDensity() + collidableObject.getDensity());
				flightVector.normalize().add(ricocheVector).scale(scaleFactor);
				
				/* move outside bounding box */
				var outsideCollision = flightVector.clone().normalize().scale(5);
				var rocketPosition = rocket.getPosition();
				
				rocket.setPosition((outsideCollision.x + rocketPosition.x), (outsideCollision.y + rocketPosition.y));
				
				/* set cooldown period */
				lime.scheduleManager.callAfter(function () {
					isColliding = false;
				}, this, 200);
				lime.scheduleManager.callAfter(function () {
					isMalfunctioning = false;
				}, this, 500);
				
				/* turn rocket (sometimes) */
				var turn = randomNumber(1, 3);
				if (turn !== 3) {
					startTurn((turn === 1 ? true : false));				
					lime.scheduleManager.callAfter(function () {
						stopTurn();
					}, this, randomNumber(100, 500));
				}
			}
		};
		
		var showExhaust = function (rocketPosition, worldScene) {
			if (randomNumber(1, 2) === 1) {
				var number = randomNumber(1,3);
	
				var smokeVector = flightVector.clone().invert().scale(2);
				var smokePos = thrustVector.clone().invert().normalize().scale(38);
				
				var smokeSize = (number * number) + 8;
				
				var smoke = new lime.Circle().setFill('#bbb').setSize(smokeSize, smokeSize).setPosition((smokePos.x + rocketPosition.x), (smokePos.y + rocketPosition.y));
				var smokeAnim = new lime.animation.Spawn (
					new lime.animation.MoveBy(smokeVector.x, smokeVector.y).setDuration(number),
					new lime.animation.FadeTo(0.0).setDuration(number),
					new lime.animation.ScaleBy(number * number).setDuration(number)
				);
				
				worldScene.addEffect(smoke, smokeAnim, 'smoke');
			}
		};
		
		return {
			
			applyThrottle : applyThrottle,
			releaseThrottle : releaseThrottle,			
			startTurn : startTurn,
			stopTurn : stopTurn,
			
			isTurning : function () {return isTurning},
			isAccelerating : function () {return isAccelerating},
			
			updateSpeed : updateSpeed,
			updateDirection : updateDirection,
			
			ricochet : ricochet,
			showExhaust : showExhaust
		}
	};
	
	return {		
		build : build
	}	
}();