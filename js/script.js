$('.nav-menu li').click(function () {
  $('.nav-menu')
    .children('li')
    .each(function () {
      this.removeAttribute('class');
    });
  this.setAttribute('class', 'menu-active');
});
$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementTop < viewportBottom && elementTop + 100 >= viewportTop;
};
$(window).on('resize scroll', function () {
  if ($('#home').isInViewport()) {
    $('.nav-menu')
      .children('li')
      .each(function () {
        this.removeAttribute('class');
      });
    $('#header').css('background-color', 'transparent');
    if ($(window).scrollTop() > 320) {
      $('#header').css('background-color', 'rgba(25, 118, 210, 1)');
    } else if ($(window).scrollTop() > 150) {
      $('#header').css('background-color', 'rgba(25, 118, 210, 0.7)');
      $('#header').css('height', '70px');
      $('#header').css('padding', '10px 0');
    } else {
      $('#header').css('height', '100px');
      $('#header').css('padding', '20px 0');
    }
    $('#nav-home').addClass('menu-active');
  } else if ($('#projects').isInViewport()) {
    $('.nav-menu')
      .children('li')
      .each(function () {
        this.removeAttribute('class');
      });
    $('#header').css('background-color', 'rgba(25, 118, 210, 1)');
    $('#header').css('height', '70px');
    $('#header').css('padding', '10px 0');
    $('#nav-projects').addClass('menu-active');
  } else if ($('#information').isInViewport()) {
    $('.nav-menu')
      .children('li')
      .each(function () {
        this.removeAttribute('class');
      });
    $('#header').css('background-color', 'rgba(25, 118, 210, 1)');
    $('#header').css('height', '70px');
    $('#header').css('padding', '10px 0');
    $('#nav-information').addClass('menu-active');
  }
});
