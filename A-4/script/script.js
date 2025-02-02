// header

$('.main-menu').mouseenter(function () {
  $(this).addClass('on')
  $('header').addClass('on')
  $('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
  $('.main-menu').removeClass('on')
  $('header').removeClass('on')
  $('.sub-menu').stop().slideUp()
})


// slide
$('.slide').eq(0).siblings().hide()

let idx = 0
 
function startSlide() {
  setInterval(function () {
    idx++

    if (idx === 3) {
      idx = 0
    }

    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()

  }, 3000);
}
 
startSlide();// 초기 슬라이드 실행

// popup
$('.modal').click(function () {

  $('#popup').fadeIn(200)
})
$('a.close').click(function () {
  $('#popup').fadeOut(100)
})