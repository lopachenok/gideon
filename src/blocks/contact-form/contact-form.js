$(document).ready(function() {
  $(document).on('click', '#mail-to', function(e) {
    
    var theme = $('#theme').val();
    var text = $('#message').val();
    var mailTo = "advisers@GideonAdvisers.com";
    this.href = "mailto:"+mailTo+"?subject="+theme+"&body="+text;

  })
})