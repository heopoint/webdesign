 $('li.main-menu').mouseenter(function(){
    $(this).find('.sub-menu').stop().slideDown()
 })
 $('li.main-menu').mouseleave(function(){
    $('.sub-menu').stop().slideUp()
 })

 $('.tab-menu li').click(function(){
    //= 할당 연산
    
    // 기존에 설정되어있는 모든 속성 지워라
    $('.tab-menu li').removeClass('on')
    // 클릭한 현재 속성지정해라(메뉴 활성화)
    $(this).addClass('on')
    // alert(idx)
    // 모든 겹쳐있는 탭컨덴츠 사라져
    $('.tab').removeClass('on')
    // 클릭한 요소번째와 같은 tab요소번째 보여라
    $('.tab').eq($(this).index()).addClass('on')
 })