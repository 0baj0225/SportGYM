$(function(){
$('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('main').removeClass('open');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('main').addClass('open');
      $('nav').addClass('open');
      $('.overlay').addClass('open');
    }
  });
  $('.overlay').on('click',function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('main').removeClass('open');
      $('nav').removeClass('open');      
    }
  });
  });
//staff画像クリック
$(function(){
  // サムネールをクリック
  $("#fadein a").click(function(){
    // body要素の最後にdiv#bgを追加
    $("body").append('<div id="bg">');

    // body要素の最後にdiv#photoを追加
    $("body").append('<div id="photo">');

    // それぞれ非表示にする
    $("#bg").hide();
    $("#photo").hide();

    // #photoの中にimg要素を追加
    $("#photo").html("<img>");

    // img要素にsrc属性を設定
    $("#photo img").attr("src", $(this).attr("href"));

    // img要素にwidth、height、alt属性を追加
    $("#photo img").attr("width", 640);
    $("#photo img").attr("height", 420);
    $("#photo img").attr("alt", "Photo");

    // #bgと#photoをフェードイン
    $("#bg").fadeIn();
    $("#photo").fadeIn();

    // 背景をクリック
    $("#bg").click(function(){
      // 背景（自分自身）をフェードアウト、完了したら削除
      $(this).fadeOut(function(){
        $(this).remove();
      });

      // 拡大画像をフェードアウト、完了したら削除
      $("#photo").fadeOut(function(){
        $(this).remove();
      });
    });

    return false;
  });
});



//テキスト１文字ずつ表示---------
$(function(){
$('.movetext').each(function(){
    //一文字ずつ<span>で括る
    $(this).children().addBack().contents().each(function() {
        if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
    });
     
　　//inviewを使って画面に表れたら起動させる
    $(this).on('inview',function(){
        //一文字ずつ順番に不透明させる
        $(this).css({'opacity':1});
        for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(100*i).animate({'opacity':1},1000);
        };
    });
});

});



//---フェードイン---------------//

$(window).on('load resize',function(){
	if($(window).width()>640){
		$(window).scroll(function (){
			$('.fadein').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 200){
					$(this).addClass('scrollin');
				}
			});
		});
	}
});


//---ショップの施設紹介----------//
$(function(){

 var mainSlider = ".slider"; //メインスライダーid
 var thumbnailSlider = ".thumbnail_slider"; //サムネイルスライダーid
 
  $(mainSlider).slick({
    autoplay: true,
    speed: 1000,
    arrows: false,
    asNavFor: thumbnailSlider
  });
  $(thumbnailSlider).slick({
    slidesToShow: 4,
    speed: 1000,    
    asNavFor: mainSlider
  });
  //#thumbnail_sliderでクリックしたスライドをカレントにする
  $(thumbnailSlider+" .slick-slide").on('click',function(){
    var index = $(this).attr("data-slick-index");
    $(thumbnailSlider).slick("slickGoTo",index,false);
  });
});
 

//入力フォームのアラート//
	//validation
$(function(){
	$(".alert").hide();
	
	$(".submit").click(function(){
		var sendFlag=true;

//name
		if(!$("#name").val()){
			$("#namebox .alert").show();
			sendFlag=false;
		}else{
			$("#namebox .alert").hide();
		}
  //mail1
		if(!$("#email1").val()){
			$("#emailbox1 .alert").show();
			sendFlag=false;
		}else{
			$("#emailbox1 .alert").hide();
		}
 //mail2
		if(!$("#email2").val()){
			$("#emailbox2 .alert").show();
			sendFlag=false;
		}else{
			$("#emailbox2 .alert").hide();
		}		
 //tel
		if(!$("#tel").val()){
			$("#telbox .alert").show();
			sendFlag=false;
		}else{
			$("#telbox .alert").hide();
		}		

//message
		if(!$("#message").val()){
			$("#messagebox .alert").show();
			sendFlag=false;
		}else{
			$("#messagebox .alert").hide();
		}
		
		if(sendFlag==false){
	
	return false;
		}
	});		
	})
	
	
//TOTOP
	$(function() {
    var showFlag = false;
    var topBtn = $('#page-top');    
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '20px'}, 200); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 200); 
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});