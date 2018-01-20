/**********************************************

DART 450, Winter 2018
Butterfly Study
Émilie Brunet

Description of what the script does...

**********************************************/
$(function () {

    var counter = 0,
        divs = $('#bf1, #bf2, #bf3, #bf4, #bf9, #bf8');

    function showDiv () {
        divs.hide()
            .filter(function (index) { return index === counter % 6; })
            .fadeIn('fast');

        counter++;
    }

    showDiv();

    setInterval(function () {
        showDiv();
    }, 1.5 * 150);  

});

