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
 
let slideInterval;

function startSlide() {
  clearInterval(slideInterval); // 기존 interval 정지
  slideInterval = setInterval(function () {
    $('.slide-wrap').animate({'left':'-100%'},600,function(){
      $('.slide').first().appendTo('.slide-wrap')
      $('.slide-wrap').css({'left':'0%'})
    })
  }, 3000);
}

// focus 이벤트와 슬라이드 시작 연결
$(window).on('focus', startSlide);

// 초기 슬라이드 실행
startSlide();
// popup
$('.modal').click(function(){
  $('.layer-popup').fadeIn(200)
})
$('a.close').click(function(){
  $('.layer-popup').fadeOut(100)
})