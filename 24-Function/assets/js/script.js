function taskOne() {
  console.log(taskOne.length);
}

function taskTwo() {
  const num1 = prompt("Перше число");
  const num2 = prompt("Друге число");
  if (!isNaN(num1) && !isNaN(num2)) {
    num1 < num2
      ? alert(-1)
      : num1 > num2
      ? alert(1)
      : num1 == num2
      ? alert(0)
      : alert("");
  }
}

function taskThree() {
  function factorial(n) {
    if (n == 1) return 1;
    else return n * factorial(n - 1);
  }
  const userNum = +prompt("Введіть число");
  alert(factorial(userNum));
}

function taskFour() {
  const num = prompt("Введіть число");
  const num2 = prompt("Введіть число");
  const num3 = prompt("Введіть число");
  if (!isNaN(num) && !isNaN(num2) && !isNaN(num3)) {
    let res = String(num + num2 + num3);
    alert(res);
  }
}

function taskFive() {
  const a = +prompt("1");
  const b = +prompt("2");
  let res;
  if (!isNaN(a) && !isNaN(b) && a !== 0 && b !== 0) {
    res = a * b;
    alert(res);
  } else if (a <= 0) {
    res = b * b;
    alert(res);
  } else if (b <= 0) {
    res = a * a;
    alert(res);
  } else {
    alert("Вам потрібно ввести число");
  }
}

// function taskSix(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     if (n % 1 === 0) {
//       sum += i;
//     }
//   }
//   return n === sum;
// }

function taskSeven() {
  // const min = prompt("Number 1");
  // const max = prompt("Number 2");
  // if (!isNaN(min) && !isNaN(max)) {
}
// }

// for (let i = 1; i < 3000; i++) {
//   if (taskSix(i)) {
//     console.log(i);
//   }
// }

//В мне чомусь функція х досконалими числами не вийшла, що не так не знаю
