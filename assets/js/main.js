$(function(){

//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});
});
   
   
   
   
   
   $(function() {
      
      $('.js_accordion_cont').hide();
    
      $('.js_accordion_link').click(function() {
        console.log("test");
        $(this).children("span").toggleClass('open');
        $(this).next().slideToggle();
    
      });
      

    });


$(function(){


        $(".js_navlink").each(function(i, elem) {
            $(elem).addClass("js_diff_nav");
            console.log(i + ': ' + $(elem).text());
        });
/*
          $('.js_accordion_cont').hide();
          $('.js_accordion_link').click(function() {
            $('.js_accordion_link').toggleClass('active');
            $(this).next().slideToggle();
          });
        */
          
        
        $('.js_smoothe a[href^="#"]').click(function() {
            // スクロールの速度
            let speed = 400;
            headerHight = 100;
            // スクロールタイプ
            let type = 'swing';
            // href属性の取得
            let href= $(this).attr("href");
            // 移動先の取得（hrefが#indexならトップ$(html)に、）
            let target = $(href == "#index" ? 'html' : href);
            // 移動先のポジション取得
            let position = target.offset().top-headerHight;;
            // animateでスムーススクロール
            $('body,html').animate({scrollTop:position}, speed, type);
            return false;
          });

    });



// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.js_eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}



// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".js_eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述