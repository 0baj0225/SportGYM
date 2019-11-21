//---------ふわっと表示----------//
 $(window).load(function(){
        var delaySpeed = 50;
        var fadeSpeed = 1000;
        $('main').each(function(i){
            $(this).delay(i*(delaySpeed)).css({display:'block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
			
        });
    });
