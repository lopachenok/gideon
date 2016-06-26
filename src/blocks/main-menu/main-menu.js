$(document).ready(function(){
  $(document).on('click', '.page-header__toggler', function(e) {
    e.preventDefault();
    $('.main-menu').toggleClass('main-menu--open');
  })
});