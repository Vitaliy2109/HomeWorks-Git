"use strict";

// task -- 1
function taskOne() {
  var a = 0.1;
  var b = 0.2;
  var res = a + b;
  confirm("Чи знаєте ви що js дивно рахує?");
  alert("\u041C\u0438 \u0432\u0432\u0430\u0436\u0430\u0454\u043C\u043E \u0449\u043E ".concat(a, " + ").concat(b, " = ").concat(res.toFixed(1)));
  alert("\u0410 js \u0432\u0432\u0430\u0436\u0430\u0454 \u0449\u043E  ".concat(a, " + ").concat(b, " = ").concat(res));
} //task -- 2


function taskTwo() {
  var a = "1";
  var b = 2;
  var res = parseInt(a) + b;
  alert(res);
} // task --3


function taskThree() {
  var coef = 1024;
  var file = 820;
  var gb = prompt("Введіть число у гігабайтах").trim();

  if (!isNaN(gb) && gb !== null && gb !== "") {
    var res = gb * coef / file;
    alert("\u0423 ".concat(gb, " \u0433\u0456\u0433\u0430\u0431\u0430\u0439\u0442 \u043F\u043E\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F ").concat(Math.round(res), " \u0444\u0430\u0439\u043B\u0456\u0432 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C ").concat(file, " \u043C\u0435\u0433\u0430\u0431\u0430\u0439\u0442."));
  } else {
    alert("Вам потрібео ввести число");
  }
} //task 4


function taskFour() {
  var sum = prompt("Скільки у вас грошей?").trim();

  if (!isNaN(sum) && sum !== null && sum !== "") {
    var price = prompt("Яка ціна шоколадки?").trim();

    if (!isNaN(price) && price !== null && price !== "") {
      var amount = sum / price;
      var change = sum - Math.floor(amount) * price;
      alert("\u0417\u0430 ".concat(sum, " \u0433\u0440\u043D \u043F\u0440\u0438 \u0446\u0456\u043D\u0456 ").concat(price, " \u0437\u0430 \u043E\u0434\u043D\u0443 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043A\u0443, \u0432\u0438 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u0443\u043F\u0438\u0442\u0438 ").concat(amount, "\n         \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A, \u0442\u0430 \u0432 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F ").concat(change.toFixed(2), " \u0433\u0440\u043D"));
    } else {
      alert("Вам потрібео ввести число!");
    }
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskFive() {
  var userNum = prompt("Введіть тризначне число");

  if (!isNaN(userNum) && userNum !== null && userNum !== "") {
    var hundreds = Math.trunc(userNum / 100);
    var ten = Math.trunc(userNum % 100 / 10);
    var ones = userNum % 10;

    var _result = hundreds + ten * 10 + ones * 100;

    alert("\u0412\u0430\u0448\u0435 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0454 \u0447\u0438\u0441\u043B\u043E \u0431\u0443\u0434\u0435 ".concat(_result));
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskSix() {
  var cash = prompt("Скільки у вас грошей?");

  if (!isNaN(cash) && cash !== null && cash !== "") {
    var mounth = prompt("На скільки місяців ви хочете покласти гроші?").trim();

    if (!isNaN(mounth) && mounth !== null && mounth !== "") {
      var percent = cash * 0.05 / 12;

      var _result2 = percent * mounth;

      alert("\u0417\u0430 ".concat(mounth, " \u043C\u0456\u0441\u044F\u0446\u0456 \u0437\u0456 \u0441\u0442\u0430\u0432\u043A\u043E\u044E 5% \u0440\u0456\u0447\u043D\u0438\u0445 \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 ").concat(_result2.toFixed(2), " \u0433\u0440\u043D"));
    } else {
      alert("Вам потрібно ввести число!");
    }
  } else {
    alert("Вам потрібно ввести число!");
  }

  alert(result);
}