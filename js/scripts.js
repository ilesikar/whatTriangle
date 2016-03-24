
$(document).ready(function() {
  console.log();
  var voterAge = parseInt(prompt("How old are you?"));
  if (voterAge >= 18) {
    $("#adultPage").show();
  } else {
    $("#minorPage").show();
  }
});
