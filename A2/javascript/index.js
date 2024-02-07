let i = 0;
//  팝업-------------------------------
$('li.popup').click(function () {
    $('div.popup').fadeIn()

})

$('a.close').click(function () {
    $('div.popup').fadeOut()
})

//  메뉴-------------------------------
$('li.main-menu').mouseenter(function () {
    $('ul.sub-menu').stop().slideDown()
    $('header').addClass('on')
})
$('header').mouseleave(function () {
    $('ul.sub-menu').stop().slideUp()
    $('header').removeClass('on')
})

//  슬라이드-------------------------------

// alert($('.slide').length )//슬라이드 갯수 구하기
// setInterval(slide , 3000)

$('.slide').eq(0).clone().appendTo('.slide-wrap')

 function slide(){
 
        i++;
        console.log(i)
        $('.slide-wrap').animate({ 'left': -100 * i + '%' },500)
     
        if (i == $('.slide').length-1) {
            i=0
            $('.slide-wrap').animate({ 'left': 0 },0)
        }
 
 }

 setInterval(slide, 3000);