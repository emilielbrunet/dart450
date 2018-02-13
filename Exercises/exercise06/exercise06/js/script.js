/*

Exercise 6
Émilie Brunet

*/

$(document).ready(function() {
$("p").blast({ search: "foot" });

		var oldString = 'Kanye',
    newString = '<span>Emilie</span>',
    newText = $('p').text().replace(RegExp(oldString,"gi"),newString);

$('p').html(newText);
});
