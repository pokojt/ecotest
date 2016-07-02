$(document).ready(function() {

  $(".invitation").hide();

  $("#submit").submit(function(event) {
    event.preventDefault();

    $("#guesthostrequestform").hide();
    $(".invitation").show();
  })
})
