/*

Exercise 6
Émilie Brunet

*/
$(document).ready(function() {

window.onload = function () {
        var name = document.querySelector("#name");
        launch.addEventListener("click", writeStory, false);

        function writeStory(){
            var launchedStory = "";
            launchedStory += "<p>I miss the old " + name.value + ", straight from the Go " + name.value + "</p>";
						launchedStory += "<p>Chop up the soul " + name.value + ", set on their goals " + name.value + "</p>";
						launchedStory += "<p>I hate the new " + name.value + ", the bad mood " + name.value + "</p>";
						launchedStory += "<p>The always rude " + name.value + ", spaz in the news " + name.value + "</p>";
						launchedStory += "<p>I miss the sweet " + name.value + ", chop up the beats " + name.value + "</p>";
						launchedStory += "<p>I gotta say, at that time I'd like to meet " + name.value + "</p>";
						launchedStory += "<p>See, I invented " + name.value + ", it wasn't any " + name.value + "s</p>";
						launchedStory += "<p>And now I look and look around and there's so many " + name.value + "s</p>";
						launchedStory += "<p>I used to love " + name.value + ", I used to love " + name.value + "</p>";
						launchedStory += "<p>I even had the pink polo, I thought I was " + name.value + "</p>";
						launchedStory += "<p>What if " + name.value + " made a song about " + name.value + "</p>";
						launchedStory += "<p>Called 'I Miss The Old " + name.value + "'? Man, that'd be so " + name.value + "</p>";
						launchedStory += "<p>That's all it was " + name.value + ", we still love " + name.value + "</p>";
						launchedStory += "<p> And I love you like " + name.value + " loves " + name.value + "</p>";

           story.innerHTML = launchedStory;
        }
};

$('#launch').click(function(){
              $('#story').fadeIn(100);
              $('#ogkanye').fadeOut(100);

$("#story").blast({ search: "I" });

});
});