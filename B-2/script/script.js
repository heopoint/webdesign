// menu
$('.main-menu').mouseenter(function () {
  $(this).addClass('on')
  $('header .container').addClass('on')
  $('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
  $('.main-menu').removeClass('on')
  $('header .container').removeClass('on')
  $('.sub-menu').stop().slideUp()
})

 
function startSlide() {
 
 setInterval(function () {
    $('.slide-wrap').animate({ 'left': '-100%' }, 500, function () {

      $('.slide').first().appendTo('.slide-wrap')
      $('.slide-wrap').css({ 'left': '0' })

    })
  }, 3000);
}
 
// 초기 슬라이드 실행
startSlide();
// tab
$('.tab-menu li a').click(function (e) {
  e.preventDefault()
  let href = $(this).attr('href')

  $('.tab-menu li a').removeClass('on')
  $(this).addClass('on')

  $('.tab').hide()
  $(href).show()
})


// popup
$('.modal').click(function () {

  $('.layer-popup').fadeIn(200)
})
$('a.close').click(function () {

  $('.layer-popup').fadeOut(100)
})