  // menu
  $('.main-menu').mouseenter(function(){
    $(this).addClass('on')
    $('header .container').addClass('on')
    $('.sub-menu').stop().slideDown()
  })
  $('.main-menu').mouseleave(function(){
    $('.main-menu').removeClass('on')
    $('header .container').removeClass('on')
    $('.sub-menu').stop().slideUp()
  })

  //slide


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

  // pop-up
  $('.modal').click(function () {

    $('.layer-popup').fadeIn()
  })
  $('a.close').click(function () {
    $('.layer-popup').fadeOut()
  })