
  // menu
  $('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown()
  })
  $('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp()
  })

  // slide
  function startSlide() {
    setInterval(function () {
      $('.slide-wrap').animate({ 'top': '-100%' }, function () {
        $('.slide').eq(0).appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'top': '0%' })
      })
    }, 3000);
  }


  startSlide();


  // popup
  $('.notice li').click(function (e) {
    e.preventDefault()

    let popup = $(this).find('a').attr('href')
    $(popup).fadeIn(300)
  })
  $('.close').click(function (e) {
    e.preventDefault()
    $('.popup').fadeOut(200)
  })


  // tab
  $('.tab-menu a').click(function (e) {
    e.preventDefault()
    let tab = $(this).attr('href')

    $('.tab').hide()
    $(tab).show()
    $('.tab-menu a').parent().removeClass('on')
    $(this).parent().addClass('on')


  })