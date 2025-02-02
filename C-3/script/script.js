  // menu
  $('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().fadeIn()
  })
  $('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().fadeOut()
  })
  // -------------------------------------------
 

  function startSlide() {
   setInterval(function () {
      $('.slide-wrap').animate({ 'left': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap');
        $('.slide-wrap').css({ 'left': '0' });
      });
    }, 3000);
  }

  startSlide();
 
  // popup
  $('.modal').click(function () {
 
    $('.popup').fadeIn(300)
  })
  $('.close').click(function () {
 
    $('.popup').fadeOut(100)
  })
