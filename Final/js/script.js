/**********************************************

DART 450, Winter 2018
Exercise 4
Émilie Brunet

Library:
Plugin for mobile touch drag and drop http://touchpunch.furf.com/)
**********************************************/


$(document).ready(function() {

//DROP EVENT 1
//
//Set Sound effect variables (fly buzzing and eating sound)
var flySound = new Audio('sound/fly.wav')
var eatSound = new Audio('sound/eating_1.mp3')

//Autoplay fly sound on page load
flySound.play();

//Make the fly draggable
	  $( function() {
    $( "#fly" ).draggable();

//Make the mouth a droppable target
//When the image is dropped into the div, stop playing the autoplay audio
//Start playing the new audio
//When the fly gets dropped, make the mouth close and remove the fly (function from https://jqueryui.com/droppable/)
    $( "#teeth" ).droppable({
      drop: function( event, ui ) {
          $('#mouth').css('background-image','url(images/mouth_closed.png)');
		  		$('#fly').remove();
					eatSound.play();
					flySound.pause();
      }
    });
  } );

//DROP EVENT 2
//
//Make the bear draggable
	  $( function() {
    $( "#bear" ).draggable();

//Make the fly draggable with touch screen (plugin from http://touchpunch.furf.com/)
	$("#widget").draggable();

//Make the mouth a droppable target
//When the fly gets dropped, make the mouth close and remove the fly (function from https://jqueryui.com/droppable/)
    $( "#zone" ).droppable({
      drop: function( event, ui ) {
      }
    });
  } );

});
