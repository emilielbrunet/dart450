/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

Library:
Plugin for mobile touch drag and drop http://touchpunch.furf.com/)
**********************************************/


var scrapeSound;
var smashSound;

//function to open next page with delay
				function pageLoad() {
					window.location.assign("end.html");
				}

$(document).ready(function() {

//DROP EVENT 1
//
//Set Sound effect variables (fly buzzing and eating sound)
flySound = new Audio('sound/fork.wav');
eatSound = new Audio('sound/smash.wav');

//Make the fly draggable
    $( "#plate1" ).draggable();

//Make the mouth a droppable target
//Add an event handler function for 'drop' called flyDrop
    $( "#floor" ).droppable({
		drop: plateDrop
		});
// flyDrop
//

  });

	function plateDrop(event, ui) {
// Make the mouth close
			$(this).css('background-image','url(images/smashed1.png)');
//Start playing the smash audio
			smashSound.play();
//Start playing the fork audio
			forkSound.play();
//delay the function called pageLoad by 1.5 seconds and then go to new page
      setTimeout(pageLoad,1000)
}
