
//galeria
var img = ["img/p1.jpg","img/p2.jpg","img/p3.jpg","img/p4.jpg","img/p5.png","img/p6.jpg"];
$('.cerrar').on('click', function(){
    $('.Model').toggleClass('none');
})
$('.imagen').on('click', function(){
    $('.Model').toggleClass('none');
    var i = $('.img').attr('value');
    $('.imgVista').attr('src', img[1]);
   
})