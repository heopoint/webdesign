// menu
$('.main-menu').mouseenter(function () {
  $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
  $(this).find('.sub-menu').stop().slideUp()
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
  $('#popup').fadeIn(300)
})
$('.close').click(function () {
  $('#popup').fadeOut(100)
})
