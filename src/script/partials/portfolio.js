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
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
$(".slider-arrow-right").click(function () {
  owl.trigger("next.owl.carousel");
  owl.trigger("stop.owl.autoplay");
});
$(".slider-arrow-left").click(function () {
  owl.trigger("prev.owl.carousel");
  owl.trigger("stop.owl.autoplay");
});


// Stop link
$(".owl-theme .item a").click(function (e) {
  e.preventDefault();
});
