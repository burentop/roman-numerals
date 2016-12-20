var numberMap = {
  1000: 'M',
  500: 'D',
  100: 'C',
  50: 'L',
  10: 'X',
  5: 'V',
  1: 'I'
};

var findBiggest = function(number) {
  var keys = Object.keys(numberMap);
  for (var index = keys.length - 1; index >= 0; index -= 1) {
    if (number / keys[index] >= 1) {
      return keys[index];
    }
  }
  return biggest;
}

var convertNumber = function(number) {
  if (numberMap[number]) {
    return numberMap[number];
  } else if (number > 4) {
    var large = findBiggest(number);
    return numberMap[large] + "I".repeat(number % large);
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
