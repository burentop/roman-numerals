var values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

var convertNumber = function(number, base) {
  var output = 0;
  var length = number.length;
  var exp = length -1;
  for (var index = 0; index < length; index += 1) {
    var digit = values.indexOf(number[index]);
    output += (digit * (Math.pow(base, exp)));
    exp -= 1;
  }
  return output;
}

$(document).ready(function() {
  $("form#base-calc").submit(function(event) {
    event.preventDefault();
    var number = $("#number").val();
    var base = parseInt($("#base").val());
    var result = convertNumber(number, base);
    console.log($("#base").val());
    $("#output-original").text(number);
    $("#output-decimal").text(result);
    $("#result").show();
  });
});
