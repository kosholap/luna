$(document).ready(function(){

  // var w = $('#slider_container').width();
  var w = 450;
  $('.slides > img').width(w);
  $('.slides').width( w * ('.slides > img').length);
  $('.slides').css('left', -w);

  function next(){
    $('.slides').animate({
      'margin-left' : -w
    }, 300, function(){
      $('.slides > img:first-child').appendTo('.slides');
      $('.slides').css('margin-left', 0);

    })
  }

  function prev(){
    $('.slides').animate({
      'margin-left' : w
    }, 300, function(){
      $('.slides > img:last-child').prependTo('.slides');
      $('.slides').css('margin-left', 0);

    })
  }

  $('#prevSlide').click(prev);
  $('#nextSlide').click(next);

})
