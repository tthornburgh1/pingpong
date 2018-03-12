// business logic
var pingPong = function(number) {
  if ((number % 3 === 0) && (number % 15 == 0)) {
    return pingpong;
  } else if (number % 3 === 0) {
    return ping;
  } else {(number % 5 ===0)
    return pong;
};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    for (var index = 1; index <= 100000000000000; index += 1)
    var result = pingPong(pingpong);
    $("#result").text(result);
});
