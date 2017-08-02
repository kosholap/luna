"use strict";

;(function($){

  var $header = $('.header');
  var headerHeight = $header.css('height');
  var headerHeightInt = +headerHeight.slice(0, -2);

  $(window).scroll(function(){
    if ($(this).scrollTop() > headerHeightInt){
      $header.addClass('header--active');
      var headerHeightActive = $header.css('height');
      $('.nav-container').css('top', headerHeightActive);

      // alert('jj')
    } else {
      $header.removeClass('header--active');
        $('.nav-container').css('top', '70px');
    }
  })

  $('.nav__hamburger').click(function(e) {
    //  let startHeight = $('.start').innerHeight();
      $('.nav-container').toggleClass('nav-container--active')
      e.preventDefault();
    });

  $.fn.scrollPlugin = function(options){

    var options = $.extend({
      speed : 400
    }, options)

    function make(){
      $(this).click(function(e){
        var top, section;
        e.preventDefault;
        section = $(this).attr('href');
        top = $(section).offset().top;
        $('body, html').animate({
          scrollTop : top
        }, options.speed)
      })
    }
    $(this).each(make);
  }

$('.nav-container a').scrollPlugin({speed: 400});

}(jQuery));

// jQuery(document).ready(function() {
// jQuery('.what-item').addClass("hidden").viewportChecker({
// classToAdd: 'visible',
// offset: 100
// });
// });
