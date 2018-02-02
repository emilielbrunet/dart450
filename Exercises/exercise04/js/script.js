/**********************************************

DART 450, Winter 2018
Exercise 4
Émilie Brunet

**********************************************/


$(document).ready(function() {
  var date = new Date();
  var today = date.getDay();
  var todayName = "Nothing.";
	
  if (today === 0) {
    todayName = "Sunday";
  }
  else if (today === 1) {
    todayName = "Monday";
  }
  else if (today === 2) {
    todayName = "Tuesday";
  }
  else if (today === 3) {
    todayName = "Wednesday";
  }
  else if (today === 4) {
    todayName = "Thursday";
  }
  else if (today === 5) {
    todayName = "Friday";
  }
  else if (today === 6) {
    todayName = "Saturday";
  }
	
  $('#today').text(todayName);
	
	
	  var date = new Date();
  var date = date.getDate();
$('#date').text(date);
	
	
		  var date = new Date();
  var year = date.getFullYear();
$('#year').text(year);
	
	
		  var date = new Date();
  var month = date.getMonth();
	  var todayMonth = "Nothing.";
	
  if (month === 0) {
    todayMonth = "January";
  }
  else if (month === 1) {
    todayMonth = "February";
  }
  else if (month === 2) {
    todayMonth = "March";
  }
  else if (month === 3) {
    todayMonth = "April";
  }
  else if (month === 4) {
    todayMonth = "May";
  }
  else if (month === 5) {
    todayMonth = "June";
  }
  else if (month === 6) {
    todayMonth = "July";
  }
	  else if (month === 7) {
    todayMonth = "August";
  }
	  else if (month === 8) {
    todayMonth = "September";
  }
	  else if (month === 9) {
    todayMonth = "October";
  }
	  else if (month === 10) {
    todayMonth = "November";
  }
		  else if (month === 11) {
    todayMonth = "December";
  }
	
$('#month').text(todayMonth);

//Good day message
	
	if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Jolly good day, friend.";
}
	
	});
	