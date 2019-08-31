var $form = $('form#email-form'),
    url = 'https://script.google.com/macros/s/AKfycbxxWviwVA6-EaOs-Mg9C41vYSToQcSseTuO6e0D3rKQ3NPdJWQ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})