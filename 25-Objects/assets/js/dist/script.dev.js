"use strict";

var car = {
  mark: "Volkswagen",
  model: "Golf GTI",
  "graduation year": 2016,
  "average speed": 70,
  "volume of the tank": 50,
  consumption: 9.4,
  drivers: ["Oleg", "Sasha", "Nikolas"],
  getEl: function getEl(id, k) {
    document.getElementById(id).innerHTML = car[k];
  },
  show: function show() {
    this.getEl("mark", "mark");
    this.getEl("model", "model");
    this.getEl("graduation-year", "graduation year");
    this.getEl("mark", "mark");
    this.getEl("mark", "mark");
    this.getEl("average-speed", "average speed");
    this.getEl("volume-of-the-tank", "volume of the tank");
    this.getEl("consumption", "consumption");
    document.getElementById("drivers").innerHTML = car.drivers;
  },
  addDriver: function addDriver() {
    var input = document.getElementById("driver-input");
    var value = input.value;

    if (isNaN(value)) {
      this.drivers.push(input.value);
    }

    document.getElementById("drivers").innerHTML = car.drivers;
  },
  deleteDriver: function deleteDriver() {
    var input = document.getElementById("driver-input");
    var value = input.value;
    var index = this.drivers.indexOf(value);

    if (index !== -1) {
      this.drivers.splice(index, 1);
    }

    document.getElementById("drivers").innerHTML = car.drivers;
  },
  findName: function findName() {
    var input = document.getElementById("findName");
    var value = input.value;
    var res = this.drivers.includes(value);
    console.log(res);

    if (res === true) {
      nameAvail.classList.add("current");
    } else {
      nameAvail.classList.remove("current");
    }
  },
  calc: function calc() {
    var input = document.getElementById("distanse");
    var distase = input.value;

    if (!isNaN(distase)) {
      var hoursTodrive = distase / this["average speed"];
      var countPauses = Math.trunc(hoursTodrive / 4);
      var totalTime = hoursTodrive + countPauses;

      if (totalTime % 1 === 0 && totalTime % 4 === 0) {
        totalTime -= 1;
      }

      var hour = Math.trunc(totalTime);
      distase < 10 ? hour = 0 : hour;
      var minutes = Math.trunc(totalTime % 1 * 60);

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (hour < 10) {
        hour = "0" + hour;
      }

      var result = hour + ":" + minutes;
      document.getElementById("time").innerHTML = result;
    }

    var res2 = distase * (this.consumption / 100);
    document.getElementById("fuel-quantity").innerHTML = res2.toFixed(1);
  }
};
var time = {
  hours: 22,
  //* 3600
  minutes: 33,
  // * 60 + sec
  seconds: 44,
  show: function show() {
    document.getElementById("resultTime").innerHTML = "".concat(this.hours, " : ").concat(this.minutes, " : ").concat(this.seconds);
  },
  timeToSec: function timeToSec(h, m, s) {
    var res = h * 3600 + m * 60 + s;
    console.log(res);
  },
  secTotime: function secTotime(n) {
    var a = (n / 3600).toFixed(2); //Math.trunc

    var b = a % 1 * 60; //Math.trunc

    var seconds = n % 60;
    var hours = Math.trunc(a);
    var minutes = Math.trunc(b);
    console.log(hours, minutes, seconds);
  },
  addSeconds: function addSeconds(a, b) {
    var defaultTime = this.timeToSec(this.hours, this.minutes, this.seconds);
    var userTime = document.getElementById("addSec").value;
    return defaultTime + userTime;
  }
};
time.addSeconds(); // 2 метода === time to sec && sec to time
// Перевести стартовое время в секунды === hours * 3600; min * 60 + sec
// добавить нужное количество секунд
// обратная функция math.trunc(x / 3600) == часы; math.trunc(остаток от часов /60) == ЦЕЛАЯ ЧАСТЬ числа == минуты; остаток == секунды
// S / 3600