var exec = require('child_process').exec

// child = exec('vlc /home/ruzovska/music',
// function (error, stdout, stderr) {
//   console.log('stdout: ' + stdout);
//   console.log('stderr: ' + stderr);
//   if (error !== null) {
//     console.log('exec error: ' + error);
//   }
// });

const s = 1000; // second
const m = 60 * s; // minute
const h = 60 * m; // hour
const pS = 25 * m; // pomodoro session
const pB = 5 * m; // pomodoro break
var timeUnit = eval(process.argv[2]);
var timeAmount = eval(process.argv[3]);
var timeout = timeUnit * timeAmount;
var countdownStep = eval(process.argv[4]);
if (countdownStep === undefined) {
  countdownStep = s; // default countdownStep
};

//TODO:parallel setIntervals for console.log(countdown) and console.log(Date()) to avoid losing seconds.
function timer() {
  if (isNaN(countdownStep) === false) {
    var countdown = timeout;
    var interval = setInterval(function() {
      countdown = countdown - countdownStep;
      if (countdownStep === m) {
        console.log(countdown/m + ' minutes are left. Time is: ' + Date());
      };
      if (countdownStep === s) {
        console.log(countdown/s + ' seconds are left. Time is: ' + Date());
      };
      if (countdownStep === h) {
        console.log(countdown/h + ' hours are left. Time is: ' + Date());
      };
    }, countdownStep);
  };

  setTimeout(function() {
    exec('firefox /home/ruzovska/photo/107APPLE/IMG_7430.JPG');
    //exec('firefox \'/home/ruzovska/music/Tomoko\ Aran/亜蘭知子「feel\ so\ free」.mp3\'');
    //exec('firefox \'/home/ruzovska/music/Massive\ Attack/2003\ -\ 100th\ Window/07\ -\ Small\ Time\ Shot\ Away.mp3\'');
    //exec('firefox \'/home/ruzovska/music/Elsiane/2007\ -\ Hybrid/03.\ Across\ the\ Stream.mp3\'');
    clearInterval(interval);
  }, timeout);
};
timer();
