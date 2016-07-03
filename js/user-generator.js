exports.Invitation = function(guestGender, guestNationality, hostGender, hostNationality) {
  this.guestGender = guestGender;
  this.guestNationality = guestNationality;
  this.hostGender = hostGender;
  this.hostNationality = hostNationality;
};


exports.Invitation.prototype.getGuest = function() {
  $.ajax({
    url: "https://randomuser.me/api/?gender="+this.guestGender+"&nat="+this.guestNationality,
    dataType: 'json',
    success: function(data){
      console.log(data);

      var guestFirstName = data.results[0].name.first;
      var guestLastName = data.results[0].name.last;
      var guestName = guestFirstName + " " + guestLastName;
      var formatGuestName = guestName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      });

      $("#guestName").text(formatGuestName);
      console.log(formatGuestName);
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
      var formatHostName = hostName.toLowerCase().replace(/\b[a-z]/g, function(letter){
        return letter.toUpperCase();
      });

      $("#hostAddress").text(hostStreet + ", " + hostCity + ", " + hostState + " " + hostZip);
      $("#hostName").text(formatHostName);
      console.log(formatHostName);
    }
  });
}
