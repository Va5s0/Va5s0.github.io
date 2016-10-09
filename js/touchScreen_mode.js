/* adds touchscreen mode to carousel @ work section modals */

$(document).ready(function() {

  $("#carousel-work-1").swiperight(function() {
    $(this).carousel('prev');
  });
  $("#carousel-work-1").swipeleft(function() {
    $(this).carousel('next');
  });

  $("#carousel-work-2").swiperight(function() {
    $(this).carousel('prev');
  });
  $("#carousel-work-2").swipeleft(function() {
   $(this).carousel('next');
  });

  $("#carousel-work-3").swiperight(function() {
    $(this).carousel('prev');
  });
  $("#carousel-work-3").swipeleft(function() {
   $(this).carousel('next');
  });

});
