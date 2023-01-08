"use strict";

function userName() {
  var name = prompt("Введіть ваше ім'я, будьласка").trim();

  if (isNaN(name) && name !== null && name !== "") {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442 ".concat(name, "!"));
  } else {
    alert("Вам потрібно ввести ім'я.");
  }
}

function userAge() {
  var currentYear = 2022;
  var age = parseInt(prompt("Введіть дату вашого народження"));

  if (!isNaN(age)) {
    var result = currentYear - age;
    result <= 30 ? alert("\u0412\u0430\u043C \u0437\u0430\u0440\u0430\u0437 ".concat(result, ", \u0447\u0443\u0434\u043E\u0432\u0438\u0439 \u0432\u0456\u043A \u0449\u043E\u0431 \u0432\u0438\u0432\u0447\u0430\u0442\u0438 JavaScript")) : alert("\u0412\u0430\u043C \u0437\u0430\u0440\u0430\u0437 ".concat(result, ", \u0434\u043E \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0456 \u043D\u0430 \u043F\u0435\u043D\u0441\u0456\u0457!"));
  } else {
    alert("Будьласка введіть дату народження.");
  }
}

function calc() {
  var length = parseFloat(prompt("Введіть довжину сторони квадрату."));

  if (!isNaN(length)) {
    var result = length * length;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(result));
  } else {
    alert("Вам потрібно ввести число.");
  }
}

function calcRadius() {
  var radius = prompt("Введіть радіус кола");

  if (!isNaN(radius) && radius !== null && radius !== "") {
    var result = Math.PI * (radius * radius);
    alert("\u041F\u043B\u043E\u0449\u0430 \u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0456 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(result, "!"));
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function calcSpeed() {
  var length = prompt("Будьласка введіть відстань у км");

  if (!isNaN(length) && length !== null && length !== "") {
    var time = prompt("Будьласка введіть час");

    if (!isNaN(time) && time !== null && time !== "") {
      var result = length / time;
      alert("\u0429\u043E\u0431 \u0432\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u0438 \u0432\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(result, " \u043A\u043C \u043D\u0430 \u0433\u043E\u0434\u0438\u043D\u0443"));
    } else {
      alert("Вам потрібно ввести час.");
    }
  } else {
    alert("Ви ввели неправильне значення.");
  }
}

var euro = 0.94;

function convert() {
  var dollar = prompt("Введіть сумму у долларах").trim();

  if (!isNaN(dollar) && dollar !== null && dollar !== "") {
    var result = dollar * euro;
    alert("".concat(dollar, " $ ==== ").concat(result.toFixed(2), " \u20AC"));
  } else {
    alert("Ви ввели неправильне значення.");
  }
}