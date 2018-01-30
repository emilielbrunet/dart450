/**********************************************

DART 450, Winter 2018
Exercise 3
Émilie Brunet

Description of what the script does...

**********************************************/

$(document).ready(function(){
    $(".btn1").click(function(){
        $(".btn1").delay(0).fadeOut(0);
		$("#element1").delay(0).fadeIn(200);
		$("#element2").delay(300).fadeIn(200);
		$("#element3").delay(600).fadeIn(400);
		$("#element4").delay(1000).fadeIn(400);
		$("#element5").delay(1700).fadeIn(400);
		$("#element6").delay(2100).fadeIn(400);
		$("#element7").delay(2600).fadeIn(400);
		$('#overlay1').delay(3200).fadeIn(1000);
		$('#bubble1').delay(4000).fadeIn(1000);
		$('#scroll1').delay(6000).fadeIn(1500);
    });});
	
$(document).ready(function(){
	  $(".btn2").click(function(){
        $("#s2").delay(0).fadeIn(200);
		$("#iphonebound").delay(0).fadeIn(200);
		$("#iphone1").delay(0).fadeIn(200);
		$("#time").delay(0).fadeIn(200);
		$("#end").delay(0).fadeIn(200);
		$("#one").delay(0).fadeIn(200);
		$("#bubble2").delay(2500).fadeIn(400);
		$("#bubble3").delay(5000).fadeIn(400);
		$("#bubble4").delay(8000).fadeIn(400);
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
	
	var secondString = seconds;
	if (seconds < 10) {
		secondString = "0" + seconds;
	}
	
		var minuteString = minutes;
	if (minutes < 10) {
		minuteString = "0" + minutes;
	}
	
		var hourString = hours;
	if (hours < 10) {
		hourString = "0" + hours;
	}
$('#time').text(hourString + ":" + minuteString + ":" + secondString);
},1000);

});
	});

$(document).ready(function(){
	  $(".btn3").click(function(){
        $("#bubble5").delay(0).fadeIn(200);
});
	});

/*$(document).ready(function(){
	function close_window() {
  if $('#end') {
    close();
  }
	);
	});*/