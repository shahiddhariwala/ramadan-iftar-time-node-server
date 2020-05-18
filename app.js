let today = new Date().getDate();
console.log(today);
const month = "#may-";
let query = document.querySelector(month + today).textContent;
let todayhr = query.split(":")[0];
let todaymin = query.split(":")[1].split(" ")[0];
let deadString = `may ${today}, 2020 ${parseInt(todayhr)+12}:${todaymin}:00`;
var deadline = new Date(deadString).getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("alertHead").innerHTML = "Break Fast";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000);