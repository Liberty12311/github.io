$(document).ready(function() {
   $('.next_btn').click(function() {
      var $next = $('#container > .active').next();
      $('#container > div').removeClass('active');
      $next.addClass('active');
      if ($next.length == 0) {
         $(this).hide();
      }
   });
});
