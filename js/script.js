$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    prevArrow: '<img src="img/Arrow_left.svg">',
  nextArrow: '<img src="img/Arrow_right.svg">',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });