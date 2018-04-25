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

//set the variable and target for where the confetti should appear to #my-canvas
var confettiSettings = { target: 'my-canvas' };
//set variable for generating confetti with Confetti-js plugin
var confetti = new ConfettiGenerator(confettiSettings);

//Render and start generating the confetti
confetti.render();

});
