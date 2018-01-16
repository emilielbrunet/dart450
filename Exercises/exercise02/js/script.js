/**********************************************

DART 450, Winter 2018
Butterfly Study
Émilie Brunet

Description of what the script does...

**********************************************/

$(document).ready() {

  $(function () {
      $('#inputDatabaseName').keypress(function () {
          var $this = $(this),
              $div = $(this).parent();
          if ($this.val().length > 0) {
              $div.addClass("hasContent");
          } else {
              $div.removeClass("hasContent");
          }
      });
  });

}
