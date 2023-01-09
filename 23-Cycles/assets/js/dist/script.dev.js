"use strict";

function taskOne() {
  var userAge = prompt("Введіть дату свого народження");

  if (!isNaN(userAge)) {
    if (userAge >= 0 && userAge < 12) {
      alert("Ви дитина");
    } else if (userAge >= 12 && userAge < 18) {
      alert("Ви підліток");
    } else if (userAge >= 18 && userAge < 60) {
      alert("Ви дорослий");
    } else {
      alert("Ви пенсіонер");
    }
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskTwo() {
  var userNumber = prompt("Введіть одну цифру").trim();

  if (!isNaN(userNumber)) {
    switch (userNumber) {
      case "0":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \")\""));
        break;

      case "1":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"!\""));
        break;

      case "2":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"@\""));
        break;

      case "3":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"#\""));
        break;

      case "4":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"$\""));
        break;

      case "5":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"%\""));
        break;

      case "6":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"^\""));
        break;

      case "7":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"&\""));
        break;

      case "8":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"*\""));
        break;

      case "9":
        alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(userNumber, ", \u0432\u0430\u0448 \u0441\u0438\u043C\u0432\u043E\u043B \"(\""));
        break;

      default:
        alert("Вам потрібно ввести число від 0 до 9!");
        break;
    }
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskThree() {
  var from = prompt("Введіть переше число");
  var to = prompt("Введіть друге число");

  if (!isNaN(from) && !isNaN(to) && from !== to) {
    for (var i = from; i <= to; i++) {
      alert("\u0417 ".concat(from, " \u0434\u043E ").concat(to, " === ").concat(i));
    }
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskFour() {
  var num1 = parseInt(prompt("Введіть перше число"));
  var num2 = parseInt(prompt("Введіть друге число"));
  var nsd = 0;
  var forEnd = num1 < num2 ? num1 : num2;

  for (var i = 1; i <= forEnd; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      nsd = i;
    } else {
      alert("Вам потрібно ввести число!");
    }
  }

  alert("\u041D\u0441\u0434 == ".concat(nsd));
}

function taskFive() {
  var num = parseInt(prompt("Введіть число"));
  var res = "";

  if (!isNaN(num)) {
    for (var i = 1; i <= num; i++) {
      if (num % i === 0) {
        res += i + ", ";
      }
    }

    alert("\u0414\u0456\u043B\u044C\u043D\u0438\u043A\u0438 \u0447\u0438\u0441\u043B\u0430 ".concat(num, " == ").concat(res));
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskSix() {
  var userNum = prompt("Введіть ваше паліндромне число");

  if (!isNaN(userNum)) {
    var num1 = Math.floor(userNum / 1000);
    var num2 = Math.floor(userNum % 100);
    var result = 0;

    while (num2) {
      result = result * 10 + num2 % 10;
      num2 = Math.floor(num2 / 10);
    }

    num1 === result ? alert("Ваше число паліндром") : alert("Ваше число не паліндром");
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskSeven() {
  var sum = prompt("Введіть ваше число").trim();

  if (!isNaN(sum)) {
    var res;

    if (Math.floor(sum) >= 200 && Math.floor(sum) <= 299) {
      res = sum * 0.03, alert("\u0412\u0430\u0448\u0430 \u0437\u043D\u0438\u0436\u043A\u0430 \u0437 ".concat(sum, " == ").concat(res.toFixed(2), " \u0433\u0440\u043D"));
    } else if (Math.floor(sum) >= 300 && Math.floor(sum) <= 499) {
      res = sum * 0.05, alert("\u0412\u0430\u0448\u0430 \u0437\u043D\u0438\u0436\u043A\u0430 \u0437 ".concat(sum, " == ").concat(res.toFixed(2), " \u0433\u0440\u043D"));
    } else if (Math.floor(sum) >= 500) {
      res = sum * 0.07, alert("\u0412\u0430\u0448\u0430 \u0437\u043D\u0438\u0436\u043A\u0430 \u0437 ".concat(sum, " == ").concat(res.toFixed(2), " \u0433\u0440\u043D"));
    } else {
      alert("Знижки не буде");
    }
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskEight() {
  var plusses = 0;
  var minuses = 0;
  var zero = 0;

  for (var i = 1; i <= 2; i++) {
    var number = parseInt(prompt("Введіть число"));

    if (!isNaN(number)) {
      if (number < 0) {
        minuses++;
      } else if (number > 0) {
        plusses++;
      } else if (number == 0) {
        zero++;
      } else {}
    } else {
      alert("Вам потрібно ввести число!");
    }
  }

  alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 ".concat(plusses, " \u0434\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B, ").concat(minuses, " \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B, \u0456 ").concat(zero, " \u043D\u0443\u043B\u0456\u0432"));
}

function taskNine() {
  var i = 0;
  var quest;
  var days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

  while (quest !== false) {
    quest = confirm(days[i] + ". Бажаєте побачити наступний день?");
    i++;

    if (i >= 7) {
      i = 0;
    }
  }
}