// header
 
$('.main-menu').mouseenter(function(){
  $(this).addClass('on')
  $('header').addClass('on')
  $('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function(){
  $('.main-menu').removeClass('on')
  $('header').removeClass('on')
  $('.sub-menu').stop().slideUp()
})

// slide
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
$('.modal').click(function(){
 
  $('#popup').fadeIn(200)
})
$('a.close').click(function(){
   $('#popup').fadeOut(100)
})