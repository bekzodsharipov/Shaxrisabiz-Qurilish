(function () {
    let secondsLeft = 120;
  
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
  
    function pad(num) {
      return String(num).padStart(2, "0");
    }
  
    function updateDisplay(totalSeconds) {
      if (totalSeconds < 0) totalSeconds = 0;
  
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);
  
      daysEl.textContent = pad(days);
      hoursEl.textContent = pad(hours);
      minutesEl.textContent = pad(minutes);
      secondsEl.textContent = pad(seconds);
    }
  
    updateDisplay(secondsLeft);
    let prevTime = performance.now();
  
    const timer = setInterval(() => {
      const now = performance.now();
      const delta = (now - prevTime) / 1000;
      prevTime = now;
      secondsLeft -= delta;
  
      if (secondsLeft <= 0) {
        clearInterval(timer);
        updateDisplay(0);
        return;
      }
  
      updateDisplay(Math.ceil(secondsLeft));
    }, 250);
  })();
  