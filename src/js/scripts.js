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

$(".product-img-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<span class='icon-arrow-left'>&#9001;</span>",
    "<span class='icon-arrow-left'>&#9002;</span>"
  ],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    }
  }
});

$(".options-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<span class='icon-arrow-left'>&#9001;</span>",
    "<span class='icon-arrow-left'>&#9002;</span>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1200: {
      items: 4
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
