
//galeria
var img = ["img/p1.jpg","img/p2.jpg","img/p3.jpg","img/p4.jpg","img/p5.jpg","img/p6.jpg"];
$('.cerrar').on('click', function(){
    $('.Model').toggleClass('none');
})
$('.Photo1').on('click', function(){
    $('.Model').toggleClass('none');
    var i = 0;
    $('.imgVista').attr('src', img[i]);
   $(".right").on('click', function(){
        if(i>= 0 && i<5){
            i++; 
        }else{
            i=0;
        }
        $('.imgVista').attr('src', img[i]);
   })
   $(".left").on('click', function(){
        if(i>0 && i<=5){
            i-- ;
        }else{
            i=5;
        }
        $('.imgVista').attr('src', img[i])
   })
})
$('.Photo2').on('click', function(){
    $('.Model').toggleClass('none');
    var i = 1;
    $('.imgVista').attr('src', img[i]);
    $(".right").on('click', function(){
        if(i>= 0 && i<5){
            i++
        }else{
            i=0
        }
        $('.imgVista').attr('src', img[i]);
   })
   $(".left").on('click', function(){
    if(i>0 && i<=5){
        i-- ;
    }else{
        i=5;
    }
    $('.imgVista').attr('src', img[i])
})
})
$('.Photo3').on('click', function(){
    $('.Model').toggleClass('none');
    var i = 2;
    $('.imgVista').attr('src', img[2]);   
    $(".right").on('click', function(){
        if(i>= 0 && i<5){
            i++
        }else{
            i=0
        }
        $('.imgVista').attr('src', img[i]);
   })
   $(".left").on('click', function(){
    if(i>0 && i<=5){
        i-- ;
    }else{
        i=5;
    }
    $('.imgVista').attr('src', img[i])
})
})
$('.Photo4').on('click', function(){
    $('.Model').toggleClass('none');
    var i = 3;
    $('.imgVista').attr('src', img[3]);
    $(".right").on('click', function(){
        if(i>= 0 && i<5){
            i++
        }else{
            i=0
        }
        $('.imgVista').attr('src', img[i]);
   })
   $(".left").on('click', function(){
    if(i>0 && i<=5){
        i-- ;
    }else{
        i=5;
    }
    $('.imgVista').attr('src', img[i])
})
})
$('.Photo5').on('click', function(){
    $('.Model').toggleClass('none');
    var i = 4;
    $('.imgVista').attr('src', img[4]); 
    $(".right").on('click', function(){
        if(i>= 0 && i<5){
            i++
        }else{
            i=0
        }
        $('.imgVista').attr('src', img[i]);
   })
   $(".left").on('click', function(){
    if(i>0 && i<=5){
        i-- ;
    }else{
        i=5;
    }
    $('.imgVista').attr('src', img[i])
})

})
$('.Photo6').on('click', function(){
    $('.Model').toggleClass('none');
    var i = 5;
    $('.imgVista').attr('src', img[5]);
    $(".right").on('click', function(){
        if(i>= 0 && i<5){
            i++
        }else{
            i=0
        }
        $('.imgVista').attr('src', img[i]);
   })
   $(".left").on('click', function(){
    if(i>0 && i<=5){
        i-- ;
    }else{
        i=5;
    }
    $('.imgVista').attr('src', img[i])
})
})