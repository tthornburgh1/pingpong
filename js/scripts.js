// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
  var userInput = $("#yourNumber").val();
    event.preventDefault();
    var result = pingPong(pingpong);
    $(".showNumber").text();
    $("#results").show();
});

// business logic
var pingPong = function(number) {
  for (var index = 0; index <= 100000000000000; index += 1)
  if ((number % 3 === 0) && (number % 15 == 0)) {
    return pingpong;
  } else if (number % 3 === 0) {
    return ping;
  } else if {(number % 5 ===0)
    return pong;
  } else {
    return number;
  }
};
