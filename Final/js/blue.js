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
eatSound = new Audio('sound/smash.wav');

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
		if ($('#plate1').dragged) {
			// Make the plate smash by changing img background
						$('#plate1').css('background-image','url(images/smashed2.png)');
		}
		if ($('#plate2').dragged) {
			// Make the plate smash by changing img background
						$('#plate2').css('background-image','url(images/smashed2.png)');
		}
		if ($('#plate3').dragged) {
			// Make the plate smash by changing img background
						$('#plate3').css('background-image','url(images/smashed2.png)');
		}
		if ($('#plate4').dragged) {
			// Make the plate smash by changing img background
						$('#plate4').css('background-image','url(images/smashed2.png)');
		}
//Start playing the smash audio
			smashSound.play();

		if ($('.plates').length ==0) {
	    //delay the function called pageLoad by 1.5 seconds and then go to new page
	  			setTimeout(pageLoad,1000)
	    };
}
