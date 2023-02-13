let op;
let clear = false;
var num1;
function display(number) {
  var r = document.getElementById("result");
  if (clear == true) {
    num1 = r.value;
    r.value = "";
    clear = false;
  }
  r.value += number;
}
function opr(opr) {
  clear = true;
  op = opr;
}
function equalClicked() {
  r = document.getElementById("result");
  let num2 = r.value;
  switch (op) {
    case "+":
      r.value = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      r.value = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      r.value = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      r.value = parseInt(num1) / parseInt(num2);
      break;
  }
}
function clearScreen() {
  r = document.getElementById("result");
  op = "";
  clear = false;
  num1 = "";
  num2 = "";
  r.value = "";
}
// toggle btn
$(document).ready(function () {
  $("#toggle-button1").addClass("active");
  $(".tri-state-toggle-button").click(function () {
    $(".tri-state-toggle-button").removeClass("active");
    var id = $(this).attr("id");
    $("#" + id).addClass("active");
  });
});
