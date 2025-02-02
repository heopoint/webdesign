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
  // -------------------------------------------
  // tab
  $('.tab-menu a').click(function (e) {
    e.preventDefault

    let href = $(this).attr('href')

    $('.tab-menu a').parent('li').removeClass('on')
    $(this).parent('li').addClass('on')

    $('.tab').hide()
    $(href).show()
  })

  // popup
  $('.modal').click(function () {
    $(this).addClass('on')
    $('.popup').fadeIn(300)
  })
  $('.close').click(function () {
    $('.modal').removeClass('on')
    $('.popup').fadeOut(100)
  })
