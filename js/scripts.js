var output = "";

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
  var workingNumber = number;
  if (numberMap[workingNumber]) {
    output += numberMap[workingNumber];
  } else if (workingNumber > 4) {
    var large = findBiggest(workingNumber);
    var icount = workingNumber % large;
    if (icount > 3) {
      output += numberMap[large];
      console.log(output);
      workingNumber = workingNumber % large;
      console.log(workingNumber);
      convertNumber(workingNumber);
    } else {
      output += numberMap[large] + "I".repeat(workingNumber % large);
    }
  } else {
    output += "I".repeat(workingNumber);
  }
  return output;
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
