  // menu
  $('.main-menu').mouseenter(function(){
    $(this).find('.sub-menu').stop().slideDown()
  })
  $('.main-menu').mouseleave(function(){
    $(this).find('.sub-menu').stop().slideUp()
  })

  // slide
  $('.slide').eq(0).siblings().hide()

  let idx =0

  setInterval(function(){
    idx++

    if(idx === 3){
      idx=0
    }

    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
    
  },3000)



  // popup
  $('.modal').click(function(e){
    e.preventDefault()
    $('#popup').fadeIn(300)
  })
  $('.close').click(function(){
    $('#popup').fadeOut(100)
  })
