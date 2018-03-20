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

$(document).ready(function () {

  // Create a waypoint associated with our trigger div
  // 'handler' is the function to call when we scroll to the element
  // 'offset' is how far from the top of the page the element has to be to trigger it
  $('#trigger').waypoint({
    handler: handleTrigger,
    offset: '50%'
  });
});

// handleTrigger
//
// If we're scrolling down to the element it turns yellow,
// if we're scrolling up to the element it turns green
function handleTrigger(direction) {
  // When waypoints calls our handler function it tells it
  // the 'direction' the user was scrolling in to get there
  // We can use that to react differently
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

function pageScroll() {
    window.scrollBy(0, 200);
}
window.onload = pageScroll;
