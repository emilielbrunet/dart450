var bearSound;

$(document).ready(function() {

//DROP EVENT 2
//
// Set sound effect variables (bear sound)
bearSound = new Audio('sound/dog-toy.wav');

//Make the bear draggable
    $( "#bear" ).draggable();

//Make the surrounding invisable drop zones a droppable targets when the bear gets dropped
//Add an event handler function for 'drop' called bearDrop
    $( "#zone1, #zone2, #zone3, #zone4" ).droppable({
      drop: bearDrop
		});
    });
//bearDrop
//
//Called when the user drops something onto the droppable element
			function bearDrop(event, ui) {
//Change background image of #bear div to scared bear image for dramatic effect
			$('#bear').css('background-image','url(images/bear2.png)');
			bearSound.play();
			};
