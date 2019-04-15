$(document).ready(function () {

  // Class with styles if js file did not load
  $('body').removeClass('no-js');


  // Header styles
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 50) {
      $('.main-header').addClass('main-header--scroll');
    } else {
      $('.main-header').removeClass('main-header--scroll');
    }
  });


  // Burger btn styles
  $('.burger-btn').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('burger-btn--close');
  });

  // Navigation
  // Opening and closing menu when clicking on burger button
  $('.menu__toggle').click(function (event) {
    event.preventDefault();
    $('.menu').toggleClass('menu--opened');
  });

  // Adding styles to menu links when scrolling
  $(window).scroll(function () {
    var $sections = $('.block');

    $sections.each(function (i, el) {
      var top = $(el).offset().top - 100;
      var bottom = top + $(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');

      if (scroll > top && scroll < bottom) {
        $('a.main-nav__link-active').removeClass('main-nav__link-active');
        $('a[href="#' + id + '"]').addClass('main-nav__link-active');
      }

      if (scroll >= $(document).height() - $(window).height() - '150') {
        $('a.main-nav__link-active').removeClass('main-nav__link-active');
        $('a[href="#block-5"]').addClass('main-nav__link-active'); // Поправить
      }
    });
  });

  // Scroll to section by menu link and close menu if click on the link
  $('nav').on('click', 'a', function (event) {
    event.preventDefault();

    if ($(window).width() < '750') {
      $('.menu__toggle').removeClass('burger-btn--close');
      $('.menu').removeClass('menu--opened');
    }

    var id = $(this).attr('href'),
      top = $(id).offset().top - 50;
    if ($(window).width() >= '1170') {
      top = $(id).offset().top - 90;
    }
    $('body, html').animate({
      scrollTop: top
    }, 500);
  });


  // Close menu if popup opens
  $('.modal__open').on('click', function () {
    $('.menu__toggle').removeClass('burger-btn--close');
    $('.menu').removeClass('menu--opened');
  });


  // Faq section
  $('.faq__item').each(function (i) {
    $(this).attr('tabindex', i + 1);
  });

  $('.faq__item').click(function (event) {
    $(this).find('.faq__info').slideToggle(200);
    $(this).toggleClass('faq__item--opened').fadeIn();
  });

  $('.faq__item').keydown(function (e) {
    if (e.keyCode == 13 || e.keyCode == 32) {
      $(this).find('.faq__info').slideToggle(200);
      $(this).toggleClass('faq__item--opened');
    }
  });


  // Button to top
  var $buttonTop = $('.scroll-button')
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 1000) {
      $buttonTop.fadeIn();
    } else {
      $buttonTop.fadeOut();
    }
  });

  $buttonTop.on('click', function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800)
  });


  // Slider settings
  $('.services-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true
  });


  // Review slider settings
  $('.review__list').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1169,
      settings: {
        centerMode: true,
        centerPadding: '222px',
      }
    }]
  });


  // Contacts and geoposition block
  $('.contacts-block__close').on('click', function () {
    $('.contacts-block__list').slideToggle(300);
    $('.contacts-block').toggleClass('contacts-block--closed');
  });


  // Popup
  var popup = $('.modal'),
    overlay = $('.overlay');

  var closeModal = function () {
    popup.removeClass('modal--opened');
    setTimeout(function () {
      overlay.fadeOut(400);
    }, 200);
  };

  var openModal = function () {
    overlay.fadeIn(400);
    setTimeout(function () {
      popup.addClass('modal--opened');
    }, 400);
  };

  // Popup open
  $('.modal__open').click(function (event) {
    event.preventDefault();
    openModal();
  });

  // Popup close
  $('.modal__close, .overlay').click(function () {
    event.preventDefault();
    closeModal();
  });
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });

});
