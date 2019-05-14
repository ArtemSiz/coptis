$(function() {

	// Custom JS
  $('.header ul.header-menu').superfish({
    cssArrows: true,
    delay: 300
  });

  $('.mobile-menu-icon').on('click', function () {
    $(this).closest('.mobile-menu').toggleClass('mobile-menu-open');
    $('html, body').toggleClass('open-mobile-menu');
  });

  $('.js-open-search').on('click', function (e) {
    e.preventDefault();
    $('.js-search-input').toggle('fast');
  });

  $('.mobile-menu-links li').on('click', function(e) {
    $(this).children('ul').toggle();
    $(this).find('.submenu-arrow').first().toggleClass('arrow-up');
    $(this).find('.mobile-menu-links__item').first().toggleClass('item-active');
    $(this).siblings('li').find('ul').hide();
    e.stopPropagation();
  });
});
