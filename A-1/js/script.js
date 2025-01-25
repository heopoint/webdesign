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
  setInterval(function () {
    $('.slide-wrap').animate({ 'top': '-100%' }, function () {
      $('.slide').eq(0).appendTo('.slide-wrap')
      $('.slide-wrap').css({ 'top': '0%' })
    })
  }, 3000)

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