$(document).ready(function(){
  $(".slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    responsive: [
      
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true       
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]
      });
});