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
//function to open next page with delay
				function pageLoad() {
					window.location.assign("blue.html");
				}
//Called when the user drops something onto the droppable element
	function bearDrop(event, ui) {
//Change background image of #bear div to scared bear image for dramatic effect
			$('#bear').css('background-image','url(images/bear2.png)');
			//play squeaky toy noise
			bearSound.play();
		//delay the function called pageLoad by 1.5 seconds and then go to new page
			setTimeout(pageLoad,1000);
			}
