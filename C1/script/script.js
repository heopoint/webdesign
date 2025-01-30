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

// tab
$('.tab-menu a').click(function(e){
  e.preventDefault

  let href = $(this).attr('href')

$('.tab-menu a').parent('li').removeClass('on')
$(this).parent('li').addClass('on')

$('.tab').hide()
$(href).show()
})

// popup
$('.modal').click(function(){
  $(this).addClass('on')
  $('.popup').fadeIn(300)
})
$('.close').click(function(){
  $('.modal').removeClass('on')
  $('.popup').fadeOut(100)
})
