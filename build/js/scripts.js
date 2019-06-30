//================================================

$(".home-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

//================================================

$(".navbar-toggler").click(function() {
  $(this).toggleClass("open");
});

//=================================================

$(".select-toggle").click(function() {
  $(this).toggleClass("open");
});

//=================================================

$(".btn-search-toggle").click(function() {
  $(".search-toggle").toggleClass("open");
  $(".close-form").toggleClass("show");
});
