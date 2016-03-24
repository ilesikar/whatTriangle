
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var age = parseInt($("input#age").val());
    var orientation = $("select#orientation").val();

    if (age > 18 && age < 35 && orientation === 'women') {
      $('#tiffany').show();
      $('#cassie').hide();
      $('#jose').hide();
      $('#alex').hide();
    }
    if (age >= 35 && orientation === 'women') {
      $('#cassie').show();
      $('#tiffany').hide();
      $('#jose').hide();
      $('#alex').hide();
    }
    if (age > 18 && age < 35 && orientation === 'men') {
      $('#jose').show();
      $('#tiffany').hide();
      $('#cassie').hide();
      $('#alex').hide();
    }
    if (age >= 35 && orientation === 'men') {
      $('#alex').show();
      $('#tiffany').hide();
      $('#cassie').hide();
      $('#jose').hide();
    }
    if (age < 18) {
      alert('No matches available for your age group.');
    }
    if (orientation === 'other') {
      alert('No matches available for your orientation.')
    }
    event.preventDefault();
  });
});
