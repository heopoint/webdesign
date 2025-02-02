  $('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().slideDown()
  })
  $('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().slideUp()
  })

  //slide
 

  function startSlide() {
   setInterval(function () {
      $('.slide-wrap').animate({ 'top': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap');
        $('.slide-wrap').css({ 'top': '0' });
      });
    }, 3000);
  } 
  // 초기 슬라이드 실행
  startSlide();

  // pop-up
  $('.modal').click(function () {
    $('#popup').fadeIn()
  })
  $('a.close').click(function () {
    $('#popup').fadeOut()
  })