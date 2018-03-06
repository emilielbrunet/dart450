/**********************************************

DART 450, Winter 2018
Exercise 4
Émilie Brunet

**********************************************/


$(document).ready(function() {

//DROP EVENT 1
//
//Make the fly draggable
$('#fly').draggable();

//Make the mouth a droppable target
//When the fly is dragged into the mouth, make it stay there
$('#teeth').droppable({
	drop: dropped
});

//Set aound effect variables (fly buzzing and eating sound)
var x = document.getElementById("audio2");
var y = document.getElementById("audio1");

//When the fly gets dropped, make the mouth close and remove the fly
//When the image is dropped into the div, stop playing the autoplay audio
//Start playing the new audio
function dropped(){
	console.log("tada!");
	$('#mouth').attr('src','images/mouth_closed.png')
	$('#fly').remove();
	x.play();
	y.pause();
}

});
