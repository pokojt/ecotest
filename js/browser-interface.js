
var Invitation = require('../js/user-generator.js').Invitation;


$(document).ready(function() {

  $(".results").hide();

  $("#submit").click(function() {
    event.preventDefault();

    $(".pageWrapper").addClass("invited");

    var inputguestGender = $("select.guestgender").val();
    var inputguestNationality = $("select.guestnationality").val();
    var inputhostGender = $("select.hostgender").val();
    var inputhostNationality = $("select.hostnationality").val();

    console.log(inputguestGender, inputguestNationality, inputhostGender, inputhostNationality);

    var newInvitation = new Invitation(inputguestGender, inputguestNationality, inputhostGender, inputhostNationality);

    newInvitation.getGuest();
    newInvitation.getHost();


      $("#guesthostrequestform").hide();
      $(".results").fadeIn();
      $("#guesthostrequestform")[0].reset();

  });

  $("#clearResult").click(function() {
    $(".results").hide();
    $("#guesthostrequestform").show();
    $(".pageWrapper").removeClass("invited");
  });
});
