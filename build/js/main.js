$(document).ready(function(){
  $(".slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
    autoplay: true,
  autoplaySpeed: 2000,
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
$(document).ready(function(){
  $(document).on('click', '.page-header__toggler', function(e) {
    e.preventDefault();
    $('.main-menu').toggleClass('main-menu--open');
  })
});
$(document).ready(function() {
  $('#camera').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000
  });
});
$(document).ready(function() {
  $(document).on('click', '#mail-to', function(e) {
    
    var theme = $('#theme').val();
    var text = $('#message').val();
    var mailTo = "advisers@GideonAdvisers.com";
    this.href = "mailto:"+mailTo+"?subject="+theme+"&body="+text;

  })
})
//# sourceMappingURL=main.js.map
