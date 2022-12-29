function taskOne() {
  let userAge = prompt("Введіть дату свого народження");
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
  let userNumber = prompt("Введіть одну цифру").trim();
  if (!isNaN(userNumber)) {
    switch (userNumber) {
      case "0":
        alert(`Ваше число ${userNumber}, ваш символ ")"`);
        break;
      case "1":
        alert(`Ваше число ${userNumber}, ваш символ "!"`);
        break;
      case "2":
        alert(`Ваше число ${userNumber}, ваш символ "@"`);
        break;
      case "3":
        alert(`Ваше число ${userNumber}, ваш символ "#"`);
        break;
      case "4":
        alert(`Ваше число ${userNumber}, ваш символ "$"`);
        break;
      case "5":
        alert(`Ваше число ${userNumber}, ваш символ "%"`);
        break;
      case "6":
        alert(`Ваше число ${userNumber}, ваш символ "^"`);
        break;
      case "7":
        alert(`Ваше число ${userNumber}, ваш символ "&"`);
        break;
      case "8":
        alert(`Ваше число ${userNumber}, ваш символ "*"`);
        break;
      case "9":
        alert(`Ваше число ${userNumber}, ваш символ "("`);
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
  let from = prompt("Введіть переше число");
  let to = prompt("Введіть друге число");
  if (!isNaN(from) && !isNaN(to) && from !== to) {
    for (let i = from; i <= to; i++) alert(`З ${from} до ${to} === ${i}`);
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskFour() {
  let num1 = parseInt(prompt("Введіть перше число"));
  let num2 = parseInt(prompt("Введіть друге число"));
  let nsd = 0;

  let forEnd = num1 < num2 ? num1 : num2;
  for (let i = 1; i <= forEnd; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      nsd = i;
    } else {
      alert("Вам потрібно ввести число!");
    }
  }
  alert(`Нсд == ${nsd}`);
}

function taskFive() {
  let num = parseInt(prompt("Введіть число"));
  let res = "";
  if (!isNaN(num)) {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        res += i + ", ";
      }
    }
    alert(`Дільники числа ${num} == ${res}`);
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskSix() {
  let userNum = prompt("Введіть ваше паліндромне число");
  if (!isNaN(userNum)) {
    let num1 = Math.floor(userNum / 1000);
    let num2 = Math.floor(userNum % 100);
    let result = 0;
    while (num2) {
      result = result * 10 + (num2 % 10);
      num2 = Math.floor(num2 / 10);
    }
    num1 === result
      ? alert("Ваше число паліндром")
      : alert("Ваше число не паліндром");
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskSeven() {
  let sum = prompt("Введіть ваше число").trim();
  if (!isNaN(sum)) {
    let res;
    Math.floor(sum) >= 200 && Math.floor(sum) <= 299
      ? ((res = sum * 0.03),
        alert(`Ваша знижка з ${sum} == ${res.toFixed(2)} грн`))
      : Math.floor(sum) >= 300 && Math.floor(sum) <= 499
      ? ((res = sum * 0.05),
        alert(`Ваша знижка з ${sum} == ${res.toFixed(2)} грн`))
      : Math.floor(sum) >= 500
      ? ((res = sum * 0.07),
        alert(`Ваша знижка з ${sum} == ${res.toFixed(2)} грн`))
      : alert("Знижки не буде");
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function taskEight() {
  let plusses = 0;
  let minuses = 0;
  let zero = 0;
  for (let i = 1; i <= 10; i++) {
    let number = parseInt(prompt("Введіть число"));
    if (!isNaN(number)) {
      if (number < 0) {
        minuses++;
      } else if (number > 0) {
        plusses++;
      } else if (number == 0) {
        zero++;
      } else {
      }
    } else {
      alert("Вам потрібно ввести число!");
    }
  }
  alert(
    `Ви ввели ${plusses} додатніх чисел, ${minuses} від'ємних чисел, і ${zero} нулів`
  );
}

function taskNine() {
  let i = 0;
  let quest;
  const days = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ];

  while (quest !== false) {
    quest = confirm(days[i] + ". Бажаєте побачити наступний день?");
    i++;
    if (i >= 7) {
      i = 0;
    }
  }
}
