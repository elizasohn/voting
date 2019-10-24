$(document).ready(function(){


  var age = parseInt(prompt("How old are you?"));

    if (age < 18) {
      $(".under").show();
    } else if (age >= 18) {
      $(".over").show();
    } else {
      $(alert("Sorry, we don't recognize that age. Please try again."));
        window.location.reload();
    }
});
