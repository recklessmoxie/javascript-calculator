$(document).ready(function () {

  var num = "";
  var numTwo = "";
  var operator = "";
  var total = $("#result");
  var decimalAdded = false;

  function clear() {
    num = "";
    numTwo = "";
    operator = "";
    $("#result").text("0");
  }


  $("button").click(function () {
    if (this.id === "clear") {
      clear();

    } else {
      num += $(this).text();
      $("#result").text(num);
    }
  })


  $(".yellow").not("#total").click(function () {
    operator = $(this).text();
    numTwo = num;
    num = "";
  });

  $("#total").click(function () {

    if (operator === "+") {
      num = (parseFloat(numTwo) + parseFloat(num));
    } else if (operator === "-") {
      num = (parseFloat(numTwo) - parseFloat(num));
    } else if (operator === "*") {
      num = (parseFloat(numTwo) * parseFloat(num));
    } else if (operator === "/") {
      num = (parseFloat(numTwo) / parseFloat(num));
    }
    total.text(num);
    num = "";
    numTwo = "";

  })

});
