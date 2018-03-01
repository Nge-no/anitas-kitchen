$(document).ready(function() {
  $("#open-menu").click(function() {
    $("#main-menu").animate({
      "left": 0
    }, 1500);
  });
});
$("#close-menu").click(function() {
  $("#main-menu").animate({
    "left": "-200\%"
  }, 1500);
});
