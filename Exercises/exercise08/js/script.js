/**********************************************

DART 450, Winter 2018
Exercise 8
Émilie Brunet

Library:
Annyang! for voice recognition (https://www.talater.com/annyang/)
**********************************************/


var popSound;

$(document).ready(function() {

//SOUNDS
//
//Set Sound effect variables (popping sound)
popSound = new Audio('sound/pop.wav');
  });

	function flyDrop(event, ui) {
//Remove the balloon
			$('#balloon').remove();
//Start playing the popping sound
			popSound.play();
}
