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

function addZero(n) {
  if (n >= 0 && n <= 9) {
    return "0" + n;
  }
  return n;
}

const date = new Date();

const time = {
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),

  show: function () {
    document.getElementById("resultTime").innerHTML = `${addZero(
      this.hours
    )} : ${addZero(this.minutes)} : ${addZero(this.seconds)}`;
  },

  timeToSec: function (h, m, s) {
    let res = h * 3600 + m * 60 + s;
    return res;
  },
  secTotime: function (n) {
    let a = n / 3600;
    let b = n - Math.trunc(a) * 3600;
    this.hours = Math.trunc(a) % 24;
    this.minutes = Math.trunc(Math.trunc(b) / 60);
    this.seconds = Math.trunc(b) - this.minutes * 60;
  },
  addSeconds: function () {
    let defaultTime = this.timeToSec(this.hours, this.minutes, this.seconds);
    let userSec = +document.getElementById("addSec").value;
    let res = defaultTime + userSec;
    this.secTotime(res);
  },

  addMinutes: function () {
    let defaultTime = this.timeToSec(this.hours, this.minutes, this.seconds);
    let userMin = document.getElementById("addMin").value;
    let res = userMin * 60 + defaultTime;
    this.secTotime(res);
  },
};
