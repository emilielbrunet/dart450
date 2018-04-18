/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

Library:
Plugin for mobile touch drag and drop http://touchpunch.furf.com/)
**********************************************/

var smashSound;

//function to open next page with delay
				function pageLoad() {
					window.location.assign("end.html");
				}

$(document).ready(function() {

//DROP EVENT 1
//
//Set Sound effect variables (smashed plate sound)
smashSound = new Audio('sound/smash.wav');

//Make the plates draggable
    $( ".plates" ).draggable();

//Make #floor a droppable target
//Add an event handler function for 'drop' called plateDrop
    $( "#floor" ).droppable({
		drop: plateDrop
		});

// plateDrop
//
  });

	function plateDrop(event, ui) {
// Make the plate smash by changing img background
		ui.draggable.css('background-image','url(images/smashed2.png)');
		$(this).removeClass("unbroken");
//Start playing the smash audio
			smashSound.play();
//search for any remainig plates with the #unbroken class
//if none remain call setTimeout function
		if ($('.unbroken').length ==0) {
	    //delay the function called pageLoad by 1.5 seconds and then go to new page
	  			setTimeout(pageLoad,1000)
	    };
}
