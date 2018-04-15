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

  {"target":"confetti-holder","max":"80","size":"1","animate":true,
  "props":["circle","square","triangle","line"],
  "colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
  "clock":"25","width":"1151","height":"780"}
