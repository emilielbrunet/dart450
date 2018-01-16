$(document).ready(function () {

  $('#exampleButton').on('click',function() {
    $('#exampleDiv').text($('#exampleInput').val());
  });

});
