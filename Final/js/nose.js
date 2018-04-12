/**********************************************
DART 450, Winter 2018
Exercise 7
Émilie Brunet
Prototype for final project using scroll!

Libraries:
Waypoints
http://imakewebthings.com/waypoints

jQuery Easing Plugin
http://gsgd.co.uk/sandbox/jquery/easing/
**********************************************/
jQuery.easing.def = "string";

$(document).ready(function () {
//On page load start making snot drip by targeting height, width and opacity
      $('#trigger').delay(500).animate({
        minHeight: '400px',
        minWidth: '30px',
        opacity: '1'
      },5000);

      $(document).animate({
        scrollTop: '15000px'
      },1);

// setTimeout(function() {
//   $(document).scrollTop(11000);
// },1);

  // Create a waypoint associated with #trigger
  // Set function name to 'handler' (called when we scroll to the element)
  // Set the 'offset' to 50% between the trigger and the top of the page
  $('#trigger').waypoint({
    handler: handleTrigger,
    offset: '50%'
  });
});

// handleTrigger
//
// If we're scrolling down to the element it gets taller,
// if we're scrolling up to the element it gets smaller and disapears
function handleTrigger(direction) {

  if (direction == 'down') {
    $('#trigger').animate({
      minHeight: '0px',
      minWidth: '30px',
      opacity: '0'
    });
  }
}
