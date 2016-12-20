

$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var base = parseInt($("#number").val());
    var result = convertNumber(number);
    $("#output-original").text(number);
    $("#output-roman").text(result);
    $("#result").show();
  });
});
