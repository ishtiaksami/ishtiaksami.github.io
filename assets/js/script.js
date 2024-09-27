// swiper Silder

new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  autoplay: {
    delay: 4000, // Delay in milliseconds between slides
    disableOnInteraction: false, // Autoplay will be disabled after user interactions
  },
  speed: 1000, // Transition speed in milliseconds
  loop: true, // Enable continuous loop mode
  effect: "fade", // Change slide transition effect to fade
  fadeEffect: {
    crossFade: true, // Enable smooth fade transition
  },
});

// swiper Silder
