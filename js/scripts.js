// user interface logic
$(document).ready(function(){
  $("results form").submit(function(event) {
    var userInput = parseInt($("input#yourNumber").val());
      $(".showNumber").text();
      $("#results").show();
});
    event.preventDefault();
  });
});

// business logic
var pingPong = function(number) {
  for (var number = 0; number <= pingPongInput; number += 1) {
    if ((number % 3 === 0) && (number % 15 === 0)) {
      return "pingpong";
    } else if (number % 3 === 0) {
      return "ping";
    } else if (number % 5 === 0) {
      return "pong";
    } else {
      return number;
    }
});
