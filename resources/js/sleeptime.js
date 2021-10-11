window.onload = function () {
    var minute = 5;
    var sec = 60;
    setInterval(function () {
       document.getElementById("seven").innerHTML =
          minute +" mins "+  sec + " secs";
       sec--;
       if (sec == 00) {
          minute--;
          sec = 60;
          if (minute == 0) {
             minute = 5;
          }
       }
    }, 1000);
 };


