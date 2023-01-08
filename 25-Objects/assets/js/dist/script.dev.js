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

      var _minutes = Math.trunc(totalTime % 1 * 60);

      if (_minutes < 10) {
        _minutes = "0" + _minutes;
      }

      if (hour < 10) {
        hour = "0" + hour;
      }

      var result = hour + ":" + _minutes;
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
  addSec: function addSec() {
    var input = document.getElementById("addSec");
    var value = parseInt(input.value);
    minutes = Math.floor(value / 60); //4000 / 60 == 66,6666666

    hours = Math.floor(minutes / 60); //66 / 60 = 1

    this.hours = hours % 24; // 1 % 24 === 1

    this.minutes = minutes % 60; // 66 % 60 === 6

    this.seconds = value % 60; // 4000 % 60 === 40

    this.show();
  },
  addMin: function addMin() {
    var input = document.getElementById("addMin");
    var value = parseInt(input.value);
    minutes = Math.floor(value); //85

    hours = Math.floor(minutes / 60); //85 / 60 = 1.....

    hours = hours % 24; // 1 % 24 === 1

    minutes = minutes % 60; // 85 % 60 === 25

    seconds = 0;
    console.log("".concat(hours, " : ").concat(minutes, " : ").concat(seconds));
  }
};