/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

Library:
Confetti-js Plugin: https://www.npmjs.com/package/confetti-js
**********************************************/



var cheerSound;

$(document).ready(function() {

// Set sound effect variables (cheer sound)
cheerSound = new Audio('sound/cheering.wav');

			//play cheering crowd noise
			cheerSound.play();

      var confettiSettings = { target: 'my-canvas' };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

});
