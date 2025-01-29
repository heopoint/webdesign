// nav
$('.main-menu').mouseenter(function () {
  $('.sub-menu').stop().slideDown()
  $(this).addClass('on')
})
$('.main-menu').mouseleave(function () {
  $('.sub-menu').stop().slideUp()
  $(this).removeClass('on')
})

// slide
let slideInterval;

function startSlide() {
  clearInterval(slideInterval); // 기존 interval 정지
  slideInterval = setInterval(function () {
    $('.slide-wrap').animate({ 'top': '-100%' }, function () {
      $('.slide').eq(0).appendTo('.slide-wrap')
      $('.slide-wrap').css({ 'top': '0%' })
    })
  }, 3000);
}

// focus 이벤트와 슬라이드 시작 연결
$(window).on('focus', startSlide);

// 초기 슬라이드 실행
startSlide();

// tab
$('.tab-menu li a').click(function (e) {
  e.preventDefault()
  $('.tab-menu li a').removeClass('on')
  $(this).addClass('on')
  let href = $(this).attr('href')
  $('.tab').hide()
  $(href).show()
})

// popup
$('.modal').click(function (e) {
  e.preventDefault()
  $('#popup').stop().fadeIn(300)
})
$('.close').click(function () {
  $('#popup').stop().fadeOut(100)
})