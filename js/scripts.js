var convertNumber = function(number) {
  return "i".repeat(number);
}

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = convertNumber(number);
    $("#output-original").text(number);
    $("#output-roman").text(result);
    $("#result").show();
  });
});
