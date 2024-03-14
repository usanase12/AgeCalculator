function calculateAge() {
  var birthdate = new Date(document.getElementById('birthdate').value);
  var today = new Date();
  var age = today.getFullYear() - birthdate.getFullYear();
  var monthDiff = today.getMonth() - birthdate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
      age--;
  }

  // Convert age to a string and extract the last two characters
  var ageString = age.toString();
  var lastTwoDigits = ageString.slice(-2);

  document.getElementById('result').innerHTML = "Your age is " + lastTwoDigits + " years old.";
}
