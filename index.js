//time values vars
let seconds = 0;
let minutes = 0;
let hours = 0;

//time values display vars
let displaySeconds = '00';
let displayMinutes = '00';
let displayHours = '00';
let dis = '00:00:00';

//status vars
let status = 'stopped';
var myInt;

// Stopwatch logic
function Stopwatch(){
    
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
}

//display
function Display(){
  if (seconds < 10) {
    displaySeconds = '0' + seconds.toString();
  }
  else{displaySeconds = seconds.toString()}

  if (minutes < 10) {
    displayMinutes = '0' + minutes.toString();
  }
  else {displayMinutes = minutes.toString();}

  if (hours < 10) {
    displayHours = '0' + hours.toString();
  }
  else{
    displayHours = '0' + hours.toString();
  }

  dis = displayHours + ':' + displayMinutes + ':' + displaySeconds;
  document.getElementById('display').innerHTML = dis;
}
//update every 1000mls
function Update(){
    myInt = setInterval(function(){
    Stopwatch();
    Display();
  },1000)
}

//start-stop function
function StartStop(){
  if (status === 'stopped') {
    status = 'started';

    Update();

    document.getElementById('start-stop').innerHTML = 'Stop';
  }else {
    status = 'stopped';

    clearInterval(myInt);

    document.getElementById('start-stop').innerHTML = 'Start';
  }
}

//Reset
function Reset(){
  seconds = 0;
  minutes = 0;
  hours = 0;
  status = 'stopped';
  
  clearInterval(myInt);

  document.getElementById('start-stop').innerHTML = 'Start'
  Display();
}