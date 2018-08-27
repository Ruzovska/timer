var exec = require('child_process').exec

// child = exec('vlc /home/ruzovska/music',
// function (error, stdout, stderr) {
//   console.log('stdout: ' + stdout);
//   console.log('stderr: ' + stderr);
//   if (error !== null) {
//     console.log('exec error: ' + error);
//   }
// });

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const pomodoroSession = 25 * minute;
const pomodoroBreak = 5 * minute;
var timeUnit = eval(process.argv[2]);
var timeAmount = eval(process.argv[3]);
var timeout = timeUnit * timeAmount;
var countdownStep = eval(process.argv[4]);

//TODO:parallel setIntervals for console.log(countdown) and console.log(Date()) to avoid losing seconds.
function timer() {
  if (isNaN(countdownStep) === false) {
    var countdown = timeout;
    var meow = setInterval(function() {
      countdown = countdown - countdownStep;
      if (countdownStep === minute) {
        console.log(countdown/minute + ' minutes are left. Time is: ' + Date());
      };
      if (countdownStep === second) {
        console.log(countdown/second + ' seconds are left. Time is: ' + Date());
      };
      if (countdownStep === hour) {
        console.log(countdown/hour + ' hours are left. Time is: ' + Date());
      };
    }, countdownStep);
  };

  setTimeout(function() {
    exec('firefox /home/ruzovska/photo/107APPLE/IMG_7430.JPG');
    //exec('firefox \'/home/ruzovska/music/Tomoko\ Aran/亜蘭知子「feel\ so\ free」.mp3\'');
    //exec('firefox \'/home/ruzovska/music/Massive\ Attack/2003\ -\ 100th\ Window/07\ -\ Small\ Time\ Shot\ Away.mp3\'');
    clearInterval(meow);
  }, timeout);
};
timer();
