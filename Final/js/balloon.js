/**********************************************

DART 450, Winter 2018
SMUSH
Émilie Brunet

Library:
Annyang! for voice recognition (https://www.talater.com/annyang/)
Chris Wilson's Volume Meter (https://github.com/cwilso/volume-meter)
**********************************************/

// How often to check the current volume
const CHECK_INTERVAL = 100;

// Audiocontext is used to work with audio
var audioContext;
// Create an audio meter
var meter;
// A place to store the output stream of the microphone
var microphone;
//Name for our popping balloon sound file
var popSound;

//function to open next page with delay
				function pageLoad() {
					window.location.assign("nose.html");
				}

$(document).ready(function() {
// SOUND
//Set Sound effect variables (popping sound)
popSound = new Audio('sound/pop.wav');

// PIPPIN'S SCRIPT TO MAKE THE MIC WORK
// How often to check the current volume
const CHECK_INTERVAL = 100;

// An audiocontext is used to work with audio
var audioContext;
// We will create an audio meter and put it in here
var meter;
// A place to store the output stream of the microphone
var microphone;

$(document).ready(function() {

  // To listen to the microphone we need to use 'getUserMedia' to ask the browser
  // for access to it. To do that, we first have to work out _which_
  // getUserMedia function is available on this computer
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  // If we found a getUserMedia that can work
  if (navigator.getUserMedia) {
    // If we're here we can call getUserMedia to ask for access to the microphone    
    // We use {audio: true} to get the microphone
    // We give two function names as well
    //  - handleAudio will be called when the microphone is accessed
    //  - audioError will be called if there is an error
    navigator.getUserMedia({audio: true}, handleAudio, audioError);
  }

  // We're going to repeatedly check the current audio volume
  // in order to update the visibilty of the page content,
  // so we need an interval that calls our update() function
  setInterval(update,CHECK_INTERVAL);

});

// audioError ()
//
// If something goes wrong, panic!
function audioError(e) {
  $('#volume').css({
    'background-color': 'red'
  })
}

// handleAudio (stream)
//
// Called when we have access to the microphone's audio stream
// The parameter 'stream' has the stream in it
function handleAudio (stream) {
  // Create our AudioContext for working with audio. It will alllow us
  // to interact with the microphone in this case
  audioContext = new AudioContext();

  // Store the audio stream from the microphone in our microphone variable
  microphone = audioContext.createMediaStreamSource(stream);

  // Create an audio meter with volume-meter.js for checking the volume
  meter = createAudioMeter(audioContext);

  // Connect the meter and the microphone so the meter has access
  // the microphone stream
  microphone.connect(meter);
}

// update ()
//
// Called every CHECK_INTERVAL milliseconds.
// Checks to make sure the meter exists, and then sets the opacity
// of our content div to be relative to the current volume.
function update () {
  console.log(meter.volume)
  // Make sure our volume meter actually exists
  //
  if (meter) {
    if (meter.volume > 0.3) {

      // Yell
      //
      // Set variable
      balloonPop();

      // Call the function to make the balloon pop
      function balloonPop () {

      // Add pop class to make div grow and disappear
              $("#balloon").addClass("pop");
              //Start playing the popping sound
              			popSound.play();
              //delay the function called pageLoad by 1.5 seconds and then go to new page
                    setTimeout(pageLoad,1000)
      }
    }
  }
}
});
