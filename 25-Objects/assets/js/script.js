const car = {
  mark: "Volkswagen",
  model: "Golf GTI",
  "graduation year": 2016,
  "average speed": 70,
  "volume of the tank": 50,
  consumption: 9.4,
  drivers: ["Oleg", "Sasha", "Nikolas"],
  getEl: function (id, k) {
    document.getElementById(id).innerHTML = car[k];
  },
  show: function () {
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

  addDriver: function () {
    const input = document.getElementById("driver-input");
    const value = input.value;
    if (isNaN(value)) {
      this.drivers.push(input.value);
    }
    document.getElementById("drivers").innerHTML = car.drivers;
  },
  deleteDriver: function () {
    const input = document.getElementById("driver-input");
    const value = input.value;
    let index = this.drivers.indexOf(value);
    if (index !== -1) {
      this.drivers.splice(index, 1);
    }
    document.getElementById("drivers").innerHTML = car.drivers;
  },

  findName: function () {
    const input = document.getElementById("findName");
    const value = input.value;
    let res = this.drivers.includes(value);
    console.log(res);
    if (res === true) {
      nameAvail.classList.add("current");
    } else {
      nameAvail.classList.remove("current");
    }
  },

  calc: function () {
    const input = document.getElementById("distanse");
    const distase = input.value;

    if (!isNaN(distase)) {
      const hoursTodrive = distase / this["average speed"];
      let countPauses = Math.trunc(hoursTodrive / 4);
      let totalTime = hoursTodrive + countPauses;
      if (totalTime % 1 === 0 && totalTime % 4 === 0) {
        totalTime -= 1;
      }
      let hour = Math.trunc(totalTime);
      distase < 10 ? (hour = 0) : hour;
      let minutes = Math.trunc((totalTime % 1) * 60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      let result = hour + ":" + minutes;
      document.getElementById("time").innerHTML = result;
    }

    const res2 = distase * (this.consumption / 100);
    document.getElementById("fuel-quantity").innerHTML = res2.toFixed(1);
  },
};

const time = {
  hours: 22, //* 3600
  minutes: 33, // * 60 + sec
  seconds: 44,

  show: function () {
    document.getElementById(
      "resultTime"
    ).innerHTML = `${this.hours} : ${this.minutes} : ${this.seconds}`;
  },

  addSec: function () {
    const input = document.getElementById("addSec");
    const value = parseInt(input.value);
    minutes = Math.floor(value / 60); //4000 / 60 == 66,6666666
    hours = Math.floor(minutes / 60); //66 / 60 = 1
    this.hours = hours % 24; // 1 % 24 === 1
    this.minutes = minutes % 60; // 66 % 60 === 6
    this.seconds = value % 60; // 4000 % 60 === 40

    this.show();
  },
  addMin: function () {
    const input = document.getElementById("addMin");
    const value = parseInt(input.value);
    minutes = Math.floor(value); //85
    hours = Math.floor(minutes / 60); //85 / 60 = 1.....
    hours = hours % 24; // 1 % 24 === 1
    minutes = minutes % 60; // 85 % 60 === 25
    seconds = 0;
    console.log(`${hours} : ${minutes} : ${seconds}`);
  },
};
