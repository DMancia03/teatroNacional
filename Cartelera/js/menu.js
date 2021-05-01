$('.menu_btn').on('click', function(){
    $('.content').toggleClass('open');
    $('.icono').toggleClass('icon-cross');
    $('.icono').toggleClass('icon-arrow-left2');
});

$('.content').scroll(function(){
    if($(this).scrollTop() > 100){
        $('#enlaceUP').fadeIn();
    }else{
        $('#enlaceUP').fadeOut();
    }
});

$('#enlaceUP').click(function(){ 
    $(".content").animate({ scrollTop: 0 }, 600); 
    return false; 
});