// task -- 1

function taskOne() {
  let a = 0.1;
  let b = 0.2;
  let res = a + b;
  confirm("Чи знаєте ви що js дивно рахує?");
  alert(`Ми вважаємо що ${a} + ${b} = ${res.toFixed(1)}`);
  alert(`А js вважає що  ${a} + ${b} = ${res}`);
}

//task -- 2

function taskTwo() {
  let a = "1";
  let b = 2;
  alert(parseInt(a) + b);
}

// task --3

function taskThree() {
  let coef = 1024;
  let file = 820;
  let gb = prompt("Введіть число у гігабайтах").trim();
  if (!isNaN(gb) && gb !== null && gb !== "") {
    let res = (gb * coef) / file;
    alert(
      `У ${gb} гігабайт поміститься ${Math.round(
        res
      )} файлів розміром ${file} мегабайт.`
    );
  } else {
    alert("Вам потрібео ввести число");
  }
}

//task 4

function taskFour() {
  let sum = prompt("Скільки у вас грошей?").trim();
  if (!isNaN(sum) && sum !== null && sum !== "") {
    let price = prompt("Яка ціна шоколадки?").trim();
    if (!isNaN(price) && price !== null && price !== "") {
      let amount = sum / price;
      let change = sum - Math.floor(amount) * price;
      alert(
        `За ${sum} грн при ціні ${price} за одну шоколадку, ви зможете купити ${Math.floor(
          amount
        )} шоколадок, та в вас залишиться ${change.toFixed(2)} грн`
      );
    } else {
      alert("Вам потрібео ввести число!");
    }
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskFive() {
  let userNum = prompt("Введіть тризначне число");
  if (!isNaN(userNum) && userNum !== null && userNum !== "") {
    let hundreds = Math.trunc(userNum / 100);
    let ten = Math.trunc((userNum % 100) / 10);
    let ones = userNum % 10;
    let result = hundreds + ten * 10 + ones * 100;
    alert(`Ваше зворотнє число буде ${result}`);
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskSix() {
  let cash = prompt("Скільки у вас грошей?");
  if (!isNaN(cash) && cash !== null && cash !== "") {
    let mounth = prompt("На скільки місяців ви хочете покласти гроші?").trim();
    if (!isNaN(mounth) && mounth !== null && mounth !== "") {
      let percent = (cash * 0.05) / 12;
      let result = percent * mounth;
      alert(
        `За ${mounth} місяці зі ставкою 5% річних ви отримаєте ${result.toFixed(
          2
        )} грн`
      );
    } else {
      alert("Вам потрібно ввести число!");
    }
  } else {
    alert("Вам потрібно ввести число!");
  }

  alert(result);
}

