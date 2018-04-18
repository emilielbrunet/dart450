//
//
//
// Borrowed code:
// Access to webcam: https://codepen.io/syedmurtaza/pen/oeYMNm

var gameOver = false;

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

    if (annyang) {

      var command = {
        // check each word being said
        // call the function specified with whichever word is said
        ':word': userSaidAWord
      };

      // provide annyang with commands
      annyang.addCommands(command);

      // Annyang starts listening
      annyang.start();
    }
  });

  //function to open next page with delay
    				function pageLoad() {
    					window.location.assign("blue.html");
    				}

  // when Annyang hears a word being said, it will appear in the following function
  function userSaidAWord(word) {
    // make sure the interaction is not over
    if (gameOver) {
      // stop reacting to words
      return;
    }
    // check if the user said the right thing
    if (word === 'loser') {
      // if the user said 'I am terrible'go to the next page
      //delay the function called pageLoad by 1.5 seconds and then go to new page
  			setTimeout(pageLoad,1000);
        console.log("heard ya!");
  			}
    }
