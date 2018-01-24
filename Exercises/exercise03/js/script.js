/**********************************************

DART 450, Winter 2018
Exercise 3
Émilie Brunet

Description of what the script does...

**********************************************/

$(document).ready(function () {

	function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
}

	});

setInterval(function (){
	$('#element1, #element2, #element3, #element4, #element5, #element6, #element7').not('visible').show().addClass('visible');
	
},400);
	
	});
	
var hours = 0;
	var minutes = 0;
	var seconds = 0;

setInterval(function () {
	seconds = seconds + 1;
	if (seconds === 60) {
		seconds = 0;
		minutes = minutes + 1;
	}
	if (minutes === 60) {
	minutes = 0;
		hours = hours + 1;
	}
$('#time').text(hours + ":" + ":" + seconds);
},100);

});
