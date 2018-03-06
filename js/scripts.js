$(document).ready(function() {
  $("#open-menu").click(function() {
    $("#main-menu").animate({
      "left": 0
    }, 1500);
  });

  $("#close-menu").click(function() {
    $("#main-menu").animate({
      "left": "-200\%"
    }, 1500);
  });

  $(".subscribe-btn").click(function(event) {

    var email = $("#email-input").val();
    alert(email + " You are now subscribed to Anita's Kitchen! ");
    $(".subscribe-btn").html("Subscribed!");
    event.preventDefault();
  });
});
