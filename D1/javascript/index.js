$('.tab-menu li').click(function(e){
    e.preventDefault()
    let idx=$(this).index()//몇번째 야
    $('.tab-menu li').removeClass('on')//활성화 되어 있는 버튼 지워
    $(this).addClass('on')//클릭한 버튼 활성화해줘

    $('.tab').removeClass('on')//기존에 보여집 tab 지워
    $('.tab').eq(idx).addClass('on')//클릭한 번째에 해당하는 tab을 보여줘
})