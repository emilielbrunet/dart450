/**********************************************

DART 450, Winter 2018
Midterm
Émilie Brunet

**********************************************/

///////////////	SVG circle

$(document).ready(function() {

  function setPixelColour(pixel)
  {
    pixel.style.backgroundColor = 'penColour';
  }

  var penColour = 'black';

  function setPenColour(pen)
  {
    penColour = pen;
  }

window.onload = function () {
        var name = document.querySelector("#name");
        var place = document.querySelector("#place");
        var friend = document.querySelector("#friend");
        var goal = document.querySelector("#goal");
        launch.addEventListener("click", writeStory, false);

        function writeStory(){
            var launchedStory = "";
            launchedStory += "<p>A day in the life of " + name.value + "!<p>";
            launchedStory += "<p>Every day " + name.value + " wakes up in the " + place.value + " with only one goal in mind, to " + goal.value +
            ". However " + name.value + " has never been able to " + goal.value + " ever ever not ever. Leaving the " + place.value +
            ", " + name.value + " starts out into the world, excited to " + goal.value + " . On the way there, " + name.value +
            " runs into " + friend.value + ". " + friend.value + " is so funny and distracts " + name.value +
            " with clever wit for hours. By the time " +  name.value +
            " stops laughing, the sun is already setting and pretty soon it is too late to " + goal.value + ". " + name.value +
            " finds that another day has passed without the chance to " + goal.value + " and walks back to the " + place.value +
            ", looking forward to the next day, hoping to finally get to " + goal.value + ".</p>";

           story.innerHTML = launchedStory;
        }
}

$('#launch').click(function(){
              $('#prompt').fadeOut(500);
});

});
