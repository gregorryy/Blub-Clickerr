let score = 0;
let autoClickers = 0;
let farms = 0;
let citys = 0;
let countrys = 0;

const cookie = document.getElementById("cookie");
const scoreDisplay = document.getElementById("score");
const cpsDisplay = document.getElementById("cps");

// Update score
function updateScore() {
  scoreDisplay.textContent = `Blub: ${score}`;
}

// Update cookies per second
function updateCPS() {
  cpsDisplay.textContent = `Blub par seconde: ${
    autoClickers + farms * 50 + citys * 500 + countrys * 10000
  }`;
}

// Cookie click event
cookie.addEventListener("click", () => {
  score++;
  updateScore();
});

// Buy worker
function buyWorker() {
  if (score >= 10) {
    score -= 10;
    autoClickers++;
    updateScore();
    updateCPS();
    if (autoClickers === 1) {
      startAutoClicker();
    }
  } else {
    alert(
      `Pas assez de blub pour acheter un ouvrier ! (manque ${10 - score} blub)`
    );
  }
}

// Buy farm
function buyFarm() {
  if (score >= 100) {
    score -= 100;
    farms++;
    updateScore();
    updateCPS();
    if (farms === 1) {
      startFarm();
    }
  } else {
    alert(
      `Pas assez de blub pour acheter une ferme ! (manque ${100 - score} blub)`
    );
  }
}

// Buy city
function buyCity() {
  if (score >= 10000) {
    score -= 10000;
    citys++;
    updateScore();
    updateCPS();
    if (citys === 1) {
      startCity();
    }
  } else {
    alert(
      `Pas assez de blub pour acheter une ville ! (manque ${
        10000 - score
      } blub)`
    );
  }
}

// Buy country
function buyCountry() {
  if (score >= 1000000) {
    score -= 1000000;
    countrys++;
    updateScore();
    updateCPS();
    if (countrys === 1) {
      startCountry();
    }
  } else {
    alert(
      `Pas assez de blub pour acheter un pays ! (manque ${
        1000000 - score
      } blub)`
    );
  }
}

// Worker logic
function startAutoClicker() {
  setInterval(() => {
    score += autoClickers;
    updateScore();
  }, 1000);
}

// Farm logic
function startFarm() {
  setInterval(() => {
    score += farms * 50;
    updateScore();
  }, 1000);
}

// City logic
function startCity() {
  setInterval(() => {
    score += citys * 500;
    updateScore();
  }, 1000);
}

// Country logic
function startCountry() {
  setInterval(() => {
    score += countrys * 10000;
    updateScore();
  }, 1000);
}
