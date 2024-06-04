let startTime, elapsedTime = 0, intervalId;
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let milliseconds = document.getElementById('milliseconds');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let lapsList = document.getElementById('laps-list');

function updateTime() {
  elapsedTime = Date.now() - startTime;
  let ms = elapsedTime % 1000;
  let s = Math.floor(elapsedTime / 1000) % 60;
  let m = Math.floor(elapsedTime / (1000 * 60));

  milliseconds.textContent = ms.toString().padStart(3, '0');
  seconds.textContent = s.toString().padStart(2, '0');
  minutes.textContent = m.toString().padStart(2, '0');
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTime, 10);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

function pauseTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  elapsedTime = 0;
  minutes.textContent = '00';
  seconds.textContent = '00';
  milliseconds.textContent = '000';
  lapsList.innerHTML = '';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function lapTimer() {
  let lap = `${minutes.textContent}:${seconds.textContent}:${milliseconds.textContent}`;
  let lapItem = document.createElement('li');
  lapItem.textContent = lap;
  lapsList.appendChild(lapItem);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
pauseBtn.addEventListener('click', lapTimer);