/**********************************************

DART 450, Winter 2018
Butterfly Study
Émilie Brunet

Description of what the script does...

**********************************************/

$(document).ready() {

  $('#exampleButton').on('click',function () {
    $('.exampleClass').animate({
      color: 'red'
    },1000);
  });

}
