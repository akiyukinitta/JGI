/*
import $ from 'jquery';


(function () {
    $('#js-buttonHamburger').click(function () {
      $('body').toggleClass('is-drawerActive');
  
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', true);
      } else {
        $(this).attr('aria-expanded', false);
      }
    });
  }) ();

  */

  /*
  $(function(){
    $('.btn-trigger').on('click', function() {
      $(this).toggleClass('active');
      $('.bl_headerNavListWrapper').toggleClass('active');
      $('.bl_headerNavListBg').toggleClass('active');
      return false;
    });
  });

  */

  $(".openbtn").click(function () {
    $(this).toggleClass('active');
});