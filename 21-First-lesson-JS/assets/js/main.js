function userName() {
  const name = prompt("Введіть ваше ім'я, будьласка").trim();
  if (isNaN(name) && name !== null && name !== "") {
    alert(`Привіт ${name}!`);
  } else {
    alert("Вам потрібно ввести ім'я.");
  }
}

const currentYear = 2022;

function userAge() {
  const age = parseInt(prompt("Введіть дату вашого народження"));
  if (!isNaN(age)) {
    let result = currentYear - age;
    result <= 30
      ? alert(`Вам зараз ${result}, чудовий вік щоб вивчати JavaScript`)
      : alert(`Вам зараз ${result}, до зустрічі на пенсії!`);
  } else {
    alert("Будьласка введіть дату народження.");
  }
}

function calc() {
  const length = parseFloat(prompt("Введіть довжину сторони квадрату."));
  if (!isNaN(length)) {
    let result = length * length;
    alert(`Периметр квадрата дорівнює ${result}`);
  } else {
    alert("Вам потрібно ввести число.");
  }
}

function calcRadius() {
  const radius = prompt("Введіть радіус кола");
  const pi = 3.14;
  if (!isNaN(radius) && radius !== null && radius !== "") {
    let result = pi * (radius * radius);
    alert(`Площа окружності дорівнює ${result}!`);
  } else {
    alert("Вам потрібно ввести число!");
  }
}

function calcSpeed() {
  const length = prompt("Будьласка введіть відстань у км");
  if (!isNaN(length) && length !== null && length !== "") {
    const time = prompt("Будьласка введіть час");
    if (!isNaN(time) && time !== null && time !== "") {
      let result = length / time;
      alert(
        `Щоб встигнути вам потрібно рухатися зі швидкістю ${result} км на годину`
      );
    } else {
      alert("Вам потрібно ввести час.");
    }
  } else {
    alert("Ви ввели неправильне значення.");
  }
}

const euro = 0.94;
function convert() {
  let dollar = prompt("Введіть сумму у долларах").trim();
  if (!isNaN(dollar) && dollar !== null && dollar !== "") {
    let result = dollar * euro;
    alert(`${dollar} $ ==== ${result.toFixed(2)} €`);
  } else {
    alert("Ви ввели неправильне значення.");
  }
}


