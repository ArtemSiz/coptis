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

  $('.mobile-menu-links__item').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu-submenu').toggleClass('open-submenu');
  });
});
