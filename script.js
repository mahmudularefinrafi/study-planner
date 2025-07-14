// Login function
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "freepalestine" && pass === "rafi") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}

// Task list logic
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

if (taskForm) {
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = taskInput.value;
    addTask(task);
    taskInput.value = "";
  });
}

function addTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">✅</button>`;
  taskList.appendChild(li);
}

// Pomodoro Timer
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-timer");
let countdown;

if (startBtn) {
  startBtn.addEventListener("click", function () {
    let timeLeft = 25 * 60;
    clearInterval(countdown);
    countdown = setInterval(() => {
      let min = Math.floor(timeLeft / 60);
      let sec = timeLeft % 60;
      timerDisplay.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "Done!";
      }
    }, 1000);
  });
}
