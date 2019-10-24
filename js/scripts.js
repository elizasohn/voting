$(document).ready(function(){


  var age = parseInt(prompt("How old are you?"));

    if (age >= 16 && age < 18) {
      $(".maybe").show();
    } else if (age < 16) {
      $(".under").show();
    } else if (age >= 18) {
      $(".over").show();
    } else {
      $(alert("Sorry, we don't recognize that age. Please try again."));
        window.location.reload();
    }

    $("form#form").submit(function(event){
      var state = $("select#state").val();
          if ( state === "1") {
            $(".maybe").hide();
            $(".under").show();
            $(alert("Unfortunately your state doesn't allow you to register but we hope this information is helpful!"))
          } else {
            $(".maybe").hide();
            $(".over").show();
            $(alert("Congratz! Your state allows you to register under 18!"));
          }
            event.preventDefault();
    });
});
