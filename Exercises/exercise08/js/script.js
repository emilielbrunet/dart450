/**********************************************

DART 450, Winter 2018
Exercise 8
Émilie Brunet

Library:
Annyang! for voice recognition (https://www.talater.com/annyang/)
**********************************************/


var popSound;

$(document).ready(function() {

// Yell
//
// Set variable
balloonPop();

  var commands = {
    // If annyang hears "ahhh!" it will call baloonPop()
    'ahhh!': balloonPop,
  };

  // Add commands to annyang
  annyang.addCommands(commands);

  // Tell annyang to listen
  annyang.start();
}
});

//Set Sound effect variables (popping sound)
popSound = new Audio('sound/pop.flac');
  });

// Call the function to make the balloon pop
function balloonPop () {

// Add pop class to make div grow and disappear
        $("#balloon").addClass("pop");
        //Start playing the popping sound
        			popSound.play();
}
