var numberMap = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};

var convertNumber = function(number) {
  if (numberMap[number]) {
    return numberMap[number];
  } else {
    return "I".repeat(number);
  }
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
