// menu
$('.main-menu').mouseenter(function(){
  $(this).find('.sub-menu').stop().fadeIn(300)
})
$('.main-menu').mouseleave(function(){
  $(this).find('.sub-menu').stop().fadeOut()
})

// slide
setInterval(function(){
  $('.slide-wrap').animate({'left':'-100%'},500,function(){
    $('.slide:first').appendTo('.slide-wrap')
    $('.slide-wrap').css({'left':'0%'})
  })
},3000)

// popup
$('.modal').click(function(){
   $('.popup-layer').fadeIn()
})
$('.close').click(function(){
 
  $('.popup-layer').fadeOut()
})