
// toggle sidebar
function sidebar() {
  var sidebar = $('.js-sidebar'),
    sidebarContainer = sidebar.find('.js-sidebar-container');

  nav = sidebar.find('.js-nav'),
    navLinkMenu = nav.find('.js-nav-link-menu'),
    navPrimary = nav.find('.js-nav-primary'),
    navSecondary = nav.find('.js-nav-secondary'),

    container = $('.js-container'),
    containerToggle = $('.js-container-toggle, .js-sidebar-toggle');

  var visibleNavSecondary = false;

  containerToggle.on('click', function () {
    container.toggleClass('extended')
    sidebarContainer.toggleClass('toggled');
    nav.toggleClass('extended');
  });

  navLinkMenu.on('click', function () {
    visibleNavSecondary = !visibleNavSecondary;
    navLinkMenu.toggleClass('active');
    navSecondary.toggleClass('visible');
  });

  // show/hide menu on scroll on mobile
  var prevScrollPos = $(window).scrollTop();

  $(window).scroll(function () {
    var currentScrollPos = $(window).scrollTop();

    if (!visibleNavSecondary && (prevScrollPos < currentScrollPos)) {
      if (!navPrimary.hasClass('hidden')) {
        navPrimary.addClass('hidden');
      }
    } else {
      navPrimary.removeClass('hidden');
    }

    prevScrollPos = currentScrollPos;
  });
};
