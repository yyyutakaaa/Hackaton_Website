let timerInterval;
let seconds = 0;

function startTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  updateTimer();
  timerInterval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}

function updateTimer() {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${secs}`;
}

document.getElementById('start-btn').addEventListener('click', startTimer);
