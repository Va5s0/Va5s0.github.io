/* toggles navbar collapse @ small device mode */

$(document).ready(function () {
    $(window).on('scroll', function(){
        $('.navbar-collapse').collapse('hide')
        $('#grey').slideUp()
    });
});
