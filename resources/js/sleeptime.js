var today = new Date();
var currentday = new Date();
var dd = String(today.getDate() + 1).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var ddd = String(today.getDate()).padStart(2, "0");
var yyyy = today.getFullYear();
var rightFormat = mm + "/" + dd + "/" + yyyy;
var mydateformat = ddd + " / " + mm + " / " + yyyy;

CountDownTimer(rightFormat + " 7:00 AM", "seven");
CountDownTimer(rightFormat + " 8:00 AM", "eight");
CountDownTimer(rightFormat + " 9:00 AM", "nine");
ShowCurrDate();

function ShowCurrDate() {
  var place = document.getElementById("currdate");

  place.innerHTML = mydateformat;
}

function CountDownTimer(dt, id) {
  var end = new Date(dt);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById(id).innerHTML = "EXPIRED!";

      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    document.getElementById(id).innerHTML = hours + "hrs ";
    document.getElementById(id).innerHTML += minutes + "mins ";
    document.getElementById(id).innerHTML += seconds + "secs";
  }

  timer = setInterval(showRemaining, 1000);
}
