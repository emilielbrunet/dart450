/**********************************************
DART 450, Winter 2018
SMUSH
Émilie Brunet

FINAL PROJECT
Using scroll to make a nose snot drip and recede.

Libraries:
jQuery Easing Plugin: http://gsgd.co.uk/sandbox/jquery/easing/
**********************************************/

//set jQuery easing for the snot
jQuery.easing.def = "string";

//set variable for the snot sniffing audio
var snotSound;

$(document).ready(function () {

  // Set sound effect variables (bear sound)
  snotSound = new Audio('sound/snotty-nose.wav');

  //On page load start making snot drip by targeting height, width and opacity
  $('#trigger').delay(500).animate({
    minHeight: '45vh',
    minWidth: '35px',
    opacity: '1'
  },5000);

  // Scroll to the bottom of the page on after a quick delay to avoid problems
  setTimeout(function () {
    $(document).scrollTop(1500);
  },1);

  // Listen for scrolling events so we can react
  $(document).on('scroll',handleScroll);
});

//function to open next page with delay
				function pageLoad() {
					window.location.assign("fly.html");
				}

//Call function when user scrolls up
function handleScroll() {
  // If they scrolled back to the top of the page
  if ($(document).scrollTop() ===  0) {
    // Play snot noise
          snotSound.play();
    // Stop the snot from dripping
    $('#trigger').stop();
    // Animate the snot back in
    $('#trigger').animate({
      minHeight: '0px',
      minWidth: '0px',
      opacity: '0'
    },500);
    		//delay the function called pageLoad by 1.5 seconds and then go to new page
    			setTimeout(pageLoad,1700);
  }
}
