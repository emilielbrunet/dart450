/**********************************************

DART 450, Winter 2018
Butterfly Study
Émilie Brunet

Description of what the script does...

**********************************************/

	$(document).ready(function () {
var myVar = setInterval(function(){ setOpacity() }, 100);
 
function setOpacity() {
  var x = document.getElementById("#bf3");
  x.style.opacity = x.style.opacity ===
"0" ? "1" : "0";
}
				 
function stopOpacity() {
  clearInterval(myVar);
}
 
//		
//		         function reduceOpacity() {
//            $('test').setOpacity( 0.5 );
});
