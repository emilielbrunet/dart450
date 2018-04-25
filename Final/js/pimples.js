/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

Library:
**********************************************/

//Name for our popping balloon sound file
var popSound;

//function to open next page with delay
				function pageLoad() {
					window.location.assign("mirror.html");
				}

$(document).ready(function() {

// SOUND
//Set Sound effect variables (popping sound)
popSound = new Audio('sound/squish-wet.wav');

$('.pimple').on('mousedown',function() {
  $(this).effect('shake', {
    times: 10,
    distance: 1.5
  },750, function() {
    popSound.play();
    $(this).remove();
    if ($('.pimple').length ==0) {
    //delay the function called pageLoad by 1.5 seconds and then go to new page
  			setTimeout(pageLoad,1000)
    };
  });
});

$('.pimple').on('mouseup',function() {
  $(this).finish();
});
});
