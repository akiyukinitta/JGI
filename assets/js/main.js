/*
var $filters = $('.js-tab-filter [data-filter]'),
    $boxes = $('.js-tab-boxes [data-category]');

$filters.on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  $filters.removeClass('tab-active');
  $this.addClass('tab-active');

  var $filterColor = $this.attr('data-filter');

  if ($filterColor == 'all') {
    $boxes.removeClass('is-animated')
      .fadeOut().promise().done(function() {
        $boxes.addClass('is-animated').fadeIn();
      });
  } else {
    $boxes.removeClass('is-animated')
      .fadeOut().promise().done(function() {
        $boxes.filter('[data-category = "' + $filterColor + '"]')
          .addClass('is-animated').fadeIn();
      });
  }
});
*/

//tabend


$(".openbtn").click(function () {
  console.log("test")
$(".bl_headerNav").toggleClass('active');
  $(this).toggleClass('active');
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// スムーススクロール
/*
$(function () {
  $('.anchor').click(function () {
    var time = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top -82;
    $("html,body").animate({ scrollTop: position}, time, "swing");
    return false;
  });
});
*/
$('.slick').slick({
  dots: true,
  infinite: true,
  autoplay: true, //自動でスクロール
  autoplaySpeed: 5000, //自動再生のスライド切り替えまでの時間を設定
  speed: 1000, //スライドが流れる速度を設定
  fade: true,
  cssEase: 'linear'
});
