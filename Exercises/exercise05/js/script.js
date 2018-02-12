/**********************************************

DART 450, Winter 2018
Exercise 5
Émilie Brunet

Abusive design

**********************************************/

$(document).ready(function () {

$(function () {

    var counter = 0,
        divs = $('#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12, #img13, #img14, #img15');

    function showDiv () {
        divs.hide()
            .filter(function (index) { return index === counter % 15; })
			.fadeIn('fast');
        counter++;
    }

    showDiv();

    setInterval(function () {
        showDiv();
    }, 2 * 200);  

});
	
});
