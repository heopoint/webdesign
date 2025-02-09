// menu
$('.main-menu').mouseenter(function () {
    $('.sub-menu').stop().fadeIn()
    $('nav').addClass('on')
})
$('.main-menu').mouseleave(function () {
    $('.sub-menu').stop().fadeOut()
    $('nav').removeClass('on')
})


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
// ------------- tab ---------------
$('.tab-menu li a').click(function (e) {
    e.preventDefault()  
 
    let tab = $(this).attr('href')

    $('.tab').hide()  
    $(tab).show()  

    
 
    $('.tab-menu li a').parent('li').removeClass('on')  
    $(this).parent('li').addClass('on')  
})


// popup
$('.modal').click(function(e){
    e.preventDefault()
    $('.popup').fadeIn()
})
$('.close').click(function(e){
    e.preventDefault()
    $('.popup').fadeOut()
})
