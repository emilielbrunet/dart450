//
//
//
// Borrowed code:
// Access to webcam: https://codepen.io/syedmurtaza/pen/oeYMNm


$(document).ready(function() {

//set var for and target #video
  var video = document.getElementById('video');
//get access to the computer's webcam
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//stream the user's webcam video inside of #video
   navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
   video.src = window.URL.createObjectURL(stream);
   video.play();
   });
  }
});
