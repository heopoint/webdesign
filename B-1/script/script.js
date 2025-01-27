// menu
$('.main-menu').mouseenter(function () {
  $('.sub-menu').stop().slideDown()
  $('nav').addClass('on')
})
$('.main-menu').mouseleave(function () {
  $('.sub-menu').stop().slideUp()
  $('nav').removeClass('on')
})

// slide
setInterval(function () {
  $('.slide-wrap').animate({ 'left': '-100%' }, 500, function () {

    $('.slide').first().appendTo('.slide-wrap')
    $('.slide-wrap').css({ 'left': '0' })

  })

}, 3000)

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
  $('.popup').fadeIn(300)
})
$('.close').click(function () {
  $('.popup').fadeOut(100)
})