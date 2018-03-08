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
		  
//Make the fly draggable with touch screen (plugin from http://touchpunch.furf.com/)
	$("#widget").draggable();
		  
//Make the mouth a droppable target
//When the fly gets dropped, make the mouth close and remove the fly (funciton from https://jqueryui.com/droppable/)
    $( "#teeth" ).droppable({
      drop: function( event, ui ) {
          $('#mouth').css('background-image','url(images/mouth_closed.png)');
		  		$('#fly').remove();
      }
    });
  } );

});
