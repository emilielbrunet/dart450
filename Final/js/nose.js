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


function handleScroll() {
  // If they scrolled back to the top of the page
  if ($(document).scrollTop() ===  0) {
    // Stop any current animation (like the snot going down)
    $('#trigger').stop();
    // Animate the snot back in
    $('#trigger').animate({
      minHeight: '0px',
      minWidth: '0px',
      opacity: '0'
    },500);
    // Play a sound?
    // Go to the next thing?
  }
}
