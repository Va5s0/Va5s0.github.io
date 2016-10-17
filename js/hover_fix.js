/*  removes the hover state from touch devices */

function fix()
  {
     var el = this;
     var par = el.parentNode;
     var next = el.nextSibling;
     par.removeChild(el);
     setTimeout(function() {par.insertBefore(el, next);}, 0)
 }
