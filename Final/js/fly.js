/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

Library:
Plugin for mobile touch drag and drop http://touchpunch.furf.com/)
**********************************************/

//set variables for audio links
var flySound;
var eatSound;

//function to open next page with delay
				function pageLoad() {
					window.location.assign("pimples.html");
				}

$(document).ready(function() {

//DROP EVENT 1
//
//Set sound effect variables (fly buzzing and eating sound)
flySound = new Audio('sound/fly.wav');
eatSound = new Audio('sound/eating_1.mp3');

//Autoplay fly sound on page load
flySound.play();

//Make the fly draggable
    $( "#fly" ).draggable();

//Make the mouth a droppable target
//Add an event handler function for 'drop' called flyDrop
    $( "#teeth" ).droppable({
      drop: flyDrop
		});
// flyDrop
//

  });

//call the flyDrop event when #fly has been dropped on #teeth
	function flyDrop(event, ui) {
// Make the mouth close
			$('#mouth').css('background-image','url(images/mouth_closed.png)');
//Remove the fly
			$('#fly').remove();
//Start playing the new audio
			eatSound.play();
//Stop playing the autoplay audio
			flySound.pause();
//delay the function called pageLoad by 1.5 seconds and then go to new page
      setTimeout(pageLoad,1000)
}
