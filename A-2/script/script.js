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
setInterval(function(){
  $('.slide-wrap').animate({'left':'-100%'},600,function(){
    $('.slide').first().appendTo('.slide-wrap')
    $('.slide-wrap').css({'left':'0%'})
  })
},3000)

// popup
$('.modal').click(function(){
  $(this).addClass('on')
  $('.popupbox').fadeIn(200)
})
$('a.close').click(function(){
  $('.modal').removeClass('on')
  $('.popupbox').fadeOut(100)
})