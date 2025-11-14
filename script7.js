const lights = document.querySelectorAll('.light');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const timerText = document.getElementById('timerText');

let current = 0;
let interval;
let countdown = 5;

function showLight(index) {
  lights.forEach(light => light.classList.remove('active'));
  lights[index].classList.add('active');
}

function startTraffic() {
  clearInterval(interval);
  showLight(current);
  countdown = 5;
  timerText.textContent = `Next light in ${countdown}s`;

  interval = setInterval(() => {
    countdown--;
    if (countdown >= 0) {
      timerText.textContent = `Next light in ${countdown}s`;
    }
    if (countdown < 0) {
      current = (current + 1) % lights.length;
      showLight(current);
      countdown = 5;
    }
  }, 1000);
}

function resetTraffic() {
  clearInterval(interval);
  current = 0;
  showLight(current);
  timerText.textContent = "Reset — press Start to begin";
}

startBtn.addEventListener('click', startTraffic);
resetBtn.addEventListener('click', resetTraffic);

// initial state: red light
showLight(0);
