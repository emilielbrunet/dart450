/**********************************************

DART 450, Winter 2018
Exercise 8
Émilie Brunet

Library:
Annyang! for voice recognition (https://www.talater.com/annyang/)
**********************************************/


var popSound;

$(document).ready(function() {

//Yell
//
//Set variable
balloonPop();

  var commands = {
    // If annyang hears "red" it will call makeDivsRed()
    'ahhh!': balloonPop,
  };

  // Add commands to annyang!
  annyang.addCommands(commands);

  // Tell annyang! to listen
  annyang.start();
}

});

// addSquare
//
// Called on command 'add square', appends a new square to the page
// in a random location
function addSquare () {
// Create the square
$square = $('<div class="square"></div>');

// Choose a random location
var x = Math.random() * $(window).width();
var y = Math.random() * $(window).height();

// Set the square's location
$square.css({
  top: y + 'px',
  left: x + 'px'
})

// Add it to the page
$('body').append($square);
}


// makeDivsRed
//
// Called on command 'red', just sets the CSS appropriately.
function makeDivsRed () {
$('.square').css({
  'background-color': 'red'
})
}

// makeDivsGreen
//
// Called on command 'green', just sets the CSS appropriately.
function makeDivsGreen () {
$('.square').css({
  'background-color': 'green'
})
}

// moveDivsLeft
//
// Called on 'move left', animates all .square elements to the left
function moveDivsLeft() {
console.log("Left");
$('.square').animate({
  left: '-=100px'
},500);
}

// moveDivsLeft
//
// Called on 'move right', animates all .square elements to the right
function moveDivsRight() {
$('.square').animate({
  left: '+=100px'
},500);
}

//SOUNDS
//
//Set Sound effect variables (popping sound)
popSound = new Audio('sound/pop.flac');
  });

	function balloonPop(event, ui) {
//Remove the balloon
			$('#balloon').remove();
//Start playing the popping sound
			popSound.play();
}
