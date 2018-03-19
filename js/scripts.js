//business logic
var pingPong = function(number) {
var userNumberArray = [];
 for (var index = 1; index <= number; index += 1) {
   if ((number % 3 === 0) && (number % 15 === 0)) {
     userNumberArray.push("pingpong");
   } else if (number % 3 === 0) {
     userNumberArray.push("ping");
   } else if (number % 5 === 0) {
     userNumberArray.push("pong");
   } else {
     userNumberArray.push(index);
   };
 };
	return userNumberArray;
};

// user interface logic
$(document).ready(function() {
  $("#ping-pong form").submit(function(event)) {
    event.preventDefault();
    var number = $("input#number").val();
	  var result = pingPong(pingpong);
    $("#result").show(result);
  });
});
