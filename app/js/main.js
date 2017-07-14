"use strict";

;(function($){

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
