/* toggles navbar header collapse @ small device mode by making a grey div visible on screen*/

$(document).ready(function($){

  $('#collapse_button').click(function () {

      var $t = $('#grey');

      if ($t.is(':visible')) {
              setTimeout(function(){
          $t.slideUp();
          // Other stuff to do on slideUp
              }, 20);
      } else {
          $t.slideDown(10);
          // Other stuff to down on slideDown
      }
  });
});
