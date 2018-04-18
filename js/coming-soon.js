
(function($) {
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: "mp4/bg.mp4",
    poster: "img/bg-mobile-fallback.jpg"
  }, {
    posterType: 'jpg'
  });

  // Submit Email
  var $form = $('form#notify-email'),
    url = 'https://script.google.com/macros/s/AKfycbxUpv1ZSQ4Ila4uWPM8Isp3ZM_xdmqe8shkXeALMpfir3Z7a6o/exec'

  $('#submit-form').on('click', function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    });
  });

})(jQuery); // End of use strict