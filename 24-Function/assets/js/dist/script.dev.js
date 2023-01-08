"use strict";

function taskTwo() {
  return arguments;
}

function compareNumbers(a, b) {
  return a < b ? -1 : a > b ? 1 : a == b ? 0 : "";
}

function taskThree() {
  var num1 = document.getElementById("compareNum1").value;
  var num2 = document.getElementById("compareNum2").value;

  if (!isNaN(num1) && !isNaN(num2)) {
    document.getElementById("comapeResult").innerHTML = compareNumbers(num1, num2);
  } else {
    document.getElementById("comapeResult").innerHTML = "Введіть число!";
  }
}

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

function taskFour() {
  var num = document.getElementById("factorialInput").value;
  var output = document.getElementById("factorialResult");

  if (!isNaN(num) && num <= 15) {
    output.innerHTML = factorial(num);
  } else {
    output.innerHTML = "Введіть число!";
  }
}

function unite(n1, n2, n3) {
  return String(n1 + n2 + n3);
}

function taskFive() {
  var num1 = document.getElementById("uniteNum1").value;
  var num2 = document.getElementById("uniteNum2").value;
  var num3 = document.getElementById("uniteNum3").value;

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    document.getElementById("uniteResult").innerHTML = unite(num1, num2, num3);
  } else {
    document.getElementById("uniteResult").innerHTML = "Введіть число!";
  }
}

function calcArea(a, b) {
  if (a >= 1 && b >= 1) {
    return a * b;
  } else if (a < 1) {
    return b * b;
  } else if (b < 1) {
    return a * a;
  }
}

function taskSix() {
  var num1 = document.getElementById("areaNum1").value;
  var num2 = document.getElementById("areaNum2").value;

  if (!isNaN(num1) && !isNaN(num2)) {
    document.getElementById("calcAreaResult").innerHTML = calcArea(num1, num2);
  } else {
    document.getElementById("calcAreaResult").innerHTML = "Введіть число!";
  }
}

function isPerfect(n) {
  var sum = 0;

  for (var i = 0; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return n === sum;
}

function taskSeven() {
  var num = +document.getElementById("perfectNum").value;

  if (!isNaN(num)) {
    var output = document.getElementById("isPerfectRes");
    var res = isPerfect(num);

    if (res === true) {
      output.innerHTML = "Число досконале!";
    } else {
      output.innerHTML = "Число НЕ досконале";
    }
  }
}

function range(start, end) {
  for (var i = start; i < end; i++) {
    if (isPerfect(i)) {
      return i;
    }
  }
}

range(1, 1000);

function taskEight() {
  var min = document.getElementById("minRange").value;
  var max = document.getElementById("maxRange").value;

  if (!isNaN(min) && !isNaN(max)) {
    var res = range(min, max);
    document.getElementById("perfectNumList").innerHTML = res;
  } else {
    document.getElementById("perfectNumList").innerHTML = "Введіть число!";
  }
} //В останній задачі повертається тільки останнє значення