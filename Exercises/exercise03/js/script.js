/**********************************************

DART 450, Winter 2018
Exercise 3
Émilie Brunet

Description of what the script does...

**********************************************/

$(document).ready(function () {

    $('#element1').fadeIn(1000).removeClass('hidden');
});


});
	
});

	function close_window() {
  if (confirm("Close Window?")) {
    close();
  }
}
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
