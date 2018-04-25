/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

**********************************************/

//Set variable for our popping balloon sound file
var popSound;

//function to open next page with delay
				function pageLoad() {
					window.location.assign("mirror.html");
				}

$(document).ready(function() {

// SOUND
//Set Sound effect variables (popping sound)
popSound = new Audio('sound/squish-wet.wav');

//when the user clicks and holds call a function
$('.pimple').on('mousedown',function() {
//start shaking the clicked object (pimple)
  $(this).effect('shake', {
    times: 10,
    distance: 1.5
  },750, function() {
	//after a certain amount of time play a sound
    popSound.play();
	//make the pimple go away
    $(this).remove();
	//if no more pimples can be detected then perfrom an action
    if ($('.pimple').length ==0) {
    //delay the function called pageLoad by 1.5 seconds and then go to new page
  			setTimeout(pageLoad,1000)
    };
  });
});

//if the user lets go of the pimple too early the animation stops and nothing else happens
$('.pimple').on('mouseup',function() {
  $(this).finish();
});
});
