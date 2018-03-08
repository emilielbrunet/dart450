/**********************************************

DART 450, Winter 2018
Exercise 4
Émilie Brunet

**********************************************/


$(document).ready(function() {

//DROP EVENT 1
//
	
//Make the fly draggable
	  $( function() {
    $( "#fly" ).draggable();
		  
//Make the fly draggable with touch screen'
	$("#widget").draggable();
		  
//Make the mouth a droppable target
//When the fly gets dropped, make the mouth close and remove the fly
    $( "#teeth" ).droppable({
      drop: function( event, ui ) {
          $('#mouth').css('background-image','url(images/mouth_closed.png)');
		  		$('#fly').remove();
      }
    });
  } );
	
	
//Set Sound effect variables (fly buzzing and eating sound)
//When the image is dropped into the div, stop playing the autoplay audio
//Start playing the new audio

});
