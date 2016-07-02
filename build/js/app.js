(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Invitation = function(guestGender, guestNationality, hostGender, hostNationality) {
  this.guestGender = guestGender;
  this.guestNationality = guestNationality;
  this.hostGender = hostGender;
  this.hostNationality = hostNationality;
};


// exports.Invitation.prototype.getGuest = function() {
//   $.get("https://randomuser.me/api/?gender='+ this.guestGender+'&nat='+this.guestNationality").then(function(data) {
//     console.log(data);
//     var guestFirstName = data.results[0].name.first;
//     var guestLastName = data.results[0].name.last;
//
//     var guestName = guestFirstName + " " + guestLastName;
//
//     $("#guestName").text(guestName);
//     console.log(guestName);
//     console.log(this.guestGender);
//   });
// };
//
// exports.Invitation.prototype.getHost = function() {
//   $.get("https://randomuser.me/api/?gender='+this.hostGender+'&nat='+this.hostNationality").then(function(data) {
//     console.log(data);
//     console.log(this.hostGender);
//
//     var hostStreet = data.results[0].location.street;
//     var hostCity =  data.results[0].location.city;
//     var hostState = data.results[0].location.state;
//     var hostZip = data.results[0].location.postcode;
//
//
//     var hostFirstName = data.results[0].name.first;
//     var hostLastName = data.results[0].name.last;
//
//     var hostName = hostFirstName + " " +hostLastName;
//
//
//     $("#hostAddress").text(hostStreet + ", " + hostCity + ", " + hostState + " " + hostZip);
//     $("#hostName").text(hostName);
//     console.log(hostName);
//
//   });
// };

exports.Invitation.prototype.getGuest = function() {
  $.ajax({
    url: "https://randomuser.me/api/?gender="+this.guestGender+"&nat="+this.guestNationality,
    dataType: 'json',
    success: function(data){
      console.log(data);
      var guestFirstName = data.results[0].name.first;
      var guestLastName = data.results[0].name.last;

      var guestName = guestFirstName + " " + guestLastName;

      $("#guestName").text(guestName);
      console.log(guestName);
    }
  });
}


exports.Invitation.prototype.getHost = function() {
  $.ajax({
    url: "https://randomuser.me/api/?gender="+this.hostGender+"&nat="+this.hostNationality,
    dataType: 'json',
    success: function(data){
      console.log(data);

      var hostStreet = data.results[0].location.street;
      var hostCity =  data.results[0].location.city;
      var hostState = data.results[0].location.state;
      var hostZip = data.results[0].location.postcode;

      var hostFirstName = data.results[0].name.first;
      var hostLastName = data.results[0].name.last;

      var hostName = hostFirstName + " " +hostLastName;

      $("#hostAddress").text(hostStreet + ", " + hostCity + ", " + hostState + " " + hostZip);
      $("#hostName").text(hostName);
      console.log(hostName);
    }
  });
}

},{}],2:[function(require,module,exports){

var Invitation = require('../js/user-generator.js').Invitation;


$(document).ready(function() {

  $(".results").hide();

  $("#submit").click(function() {
    event.preventDefault();

    var inputguestGender = $("select.guestgender").val();
    var inputguestNationality = $("select.guestnationality").val();
    var inputhostGender = $("select.hostgender").val();
    var inputhostNationality = $("select.hostnationality").val();

    console.log(inputguestGender, inputguestNationality, inputhostGender, inputhostNationality);

    var newInvitation = new Invitation(inputguestGender, inputguestNationality, inputhostGender, inputhostNationality);

    newInvitation.getGuest();
    newInvitation.getHost();


      $("#guesthostrequestform").hide();
      $(".results").show();
      $("#guesthostrequestform")[0].reset();

  });

  $("#clearResult").click(function() {
    $(".results").hide();
    $("#guesthostrequestform").show();
  });
});

},{"../js/user-generator.js":1}]},{},[2]);
