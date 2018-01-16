$(document).ready(function () {

  $('#exampleButton').on('click',function () {
    $('.exampleClass').animate({
      color: 'red'
    },1000);
  });

});
