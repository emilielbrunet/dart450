/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

Library:
**********************************************/

//Name for our popping balloon sound file
var popSound;

$(document).ready(function() {

$("#zit1").delay(200);
$("#zit2").delay(300);
$("#zit3").delay(100);
$("#zit4").delay(400);
$("#zit5").delay(100);
$("#zit6").delay(350);
$("#zit7").delay(100);
$("#zit8").delay(250);
$("#zit9").delay(350);

// SOUND
//Set Sound effect variables (popping sound)
popSound = new Audio('sound/squish-wet.wav');

$('.pimple').on('mousedown',function() {
  $(this).effect('shake', {
    times: 10,
    distance: 1.5
  },750, function() {
    popSound.play();
    $(this).hide
  });
});

$('.pimple').on('mouseup',function() {
  $(this).finish();
});
});
