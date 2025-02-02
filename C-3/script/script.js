  // menu
  $('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().fadeIn()
  })
  $('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().fadeOut()
  })
  // -------------------------------------------
 

  let slideInterval;

  function startSlide() {
    clearInterval(slideInterval); // 기존 interval 정지
    slideInterval = setInterval(function () {
      $('.slide-wrap').animate({ 'left': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap');
        $('.slide-wrap').css({ 'left': '0' });
      });
    }, 3000);
  }

  // focus 이벤트와 슬라이드 시작 연결
  $(window).on('focus', startSlide);

  // 초기 슬라이드 실행
  startSlide();
 

  // popup
  $('.modal').click(function () {
 
    $('.popup').fadeIn(300)
  })
  $('.close').click(function () {
 
    $('.popup').fadeOut(100)
  })
