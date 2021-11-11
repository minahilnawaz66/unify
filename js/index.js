/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */
$(document).ready(function() {
    var navpos = $('.navbar').offset();
    console.log(navpos.top);
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
        $('body').addClass('fixed');
      } else {
        $('body').removeClass('fixed');
      }
    });
  });