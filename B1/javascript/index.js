$('li.main-menu').mouseenter(function(){
    $(this).find('.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function(){
    $('.sub-menu').stop().slideUp()
})

$('.popup').click(function(){
    $('.modal').fadeIn()
})
$('a.close').click(function(){
    $('.modal').fadeOut()
})

// $('.tab-menu li a').click(function(){
//     // button 활성화 비활화
//     $('.tab-menu li a').removeClass('on')
//     $(this).addClass('on')
// // 탭 컨덴츠의 활성화 비활화
//     let href=$(this).attr('href')
//     $('.tab').removeClass('on')
//     $(href).addClass('on')
// })
$('.tab-menu li').click(function(){
    $('.tab-menu li a').removeClass('on')
    $(this).find('a').addClass('on')
    let idx=$(this).index()
    // alert(idx)
    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on')
})

$('.slide').eq(0).clone().appendTo('.slide-wrap')
 let i=0
 function slide(){
 
        i++;
        console.log(i)
        $('.slide-wrap').animate({ 'top': -100 * i + '%' },500)
     
        if (i == $('.slide').length-1) {
            i=0
            $('.slide-wrap').animate({ 'top': 0 },0)
        }
 
 }

 setInterval(slide, 3000);