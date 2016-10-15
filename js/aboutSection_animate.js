/* adds animation @ about section using viewportChecker.js script */

$(document).ready(function($){
  if(! /IEMobile|MSIE 10.0|rv:11.0/i.test(navigator.userAgent) ) {
    $('.animate_left').addClass("hidden_animate").viewportChecker({
      classToAdd: 'visible_animate animated fadeInLeft', // Class to add to the elements when they are visible
      offset: 100
    });
    $('.animate_right').addClass("hidden_animate").viewportChecker({
      classToAdd: 'visible_animate animated fadeInRight', // Class to add to the elements when they are visible
      offset: 100
    });
  };

});
