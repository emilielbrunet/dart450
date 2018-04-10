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

  window.onload == function snotDrip(){
      $('#trigger').css({
        height: '300px'
      });
  };

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

  if (direction == 'up') {
    $('#trigger').animate({
      minHeight: '0px',
      minWidth: '30px',
      opacity: '0'
    });
  }
  else {
    $('#trigger').animate({
      minHeight: '300px',
      minWidth: '30px',
      opacity: '100',
    });
  }
}
