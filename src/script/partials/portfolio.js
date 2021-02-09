var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  rtl: true,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
$('.slider-arrow-right').click(function() {
  owl.trigger('next.owl.carousel');
  owl.trigger('stop.owl.autoplay');
});
$('.slider-arrow-left').click(function() {
  owl.trigger('prev.owl.carousel');
  owl.trigger('stop.owl.autoplay');
})