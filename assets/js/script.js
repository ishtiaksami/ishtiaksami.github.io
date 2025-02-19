$(window).on("scroll", function () {
  const header = $("header");
  if ($(this).scrollTop() > 0) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
  }
});

$(document).ready(function () {
  var header = $(".floating-header");
  var sticky = header.offset().top;
  var $menu = $(".mobile-menu");
  var $menuButton = $(".mobile-menu-button");
  var $lines = $menuButton.find("span");
  var $header = $("header");

  // Sticky Header on Scroll
  $(window).scroll(function () {
    header.toggleClass("fixed", window.pageYOffset > sticky);
  });

  // Toggle Menu Functionality
  function openMenu() {
    $menu.removeClass("hidden").css("maxHeight", "100vh");
    $lines.eq(0).addClass("rotate-45 translate-y-1.5");
    $lines.eq(1).addClass("opacity-0");
    $lines.eq(2).addClass("-rotate-45 -translate-y-1.5");
    $lines.css("margin", "-2px 0");
    $header.addClass("menu-open-bg");
  }

  function closeMenu() {
    $menu.css("maxHeight", "0px");
    setTimeout(() => $menu.addClass("hidden"), 300);
    $lines.removeClass(
      "rotate-45 translate-y-1.5 opacity-0 -rotate-45 -translate-y-1.5"
    );
    $lines.css("margin", "5px 0");
    $header.removeClass("menu-open-bg");
  }

  function resetMenuState() {
    if (window.innerWidth > 767) {
      closeMenu();
      $("#menuIcon, #searchIcon, #closeIcon").removeClass("menu-active");
    }
  }

  $menuButton.on("click", function () {
    $menu.hasClass("hidden") ? openMenu() : closeMenu();
    $("#menuIcon, #searchIcon, #closeIcon").toggleClass("menu-active");
  });

  $(window).on("resize", resetMenuState);
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
