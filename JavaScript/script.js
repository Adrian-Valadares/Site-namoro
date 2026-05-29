// =========================
// TIMER
// =========================
const startDate = new Date("2025-12-12T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  document.getElementById("days").innerText = Math.floor(diff / 86400000);
  document.getElementById("hours").innerText = Math.floor((diff / 3600000) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / 60000) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}

setInterval(updateTimer, 1000);
updateTimer();


// =========================
// CARROSSEL
// =========================
const slides = document.getElementById("slides");

// cria imagens dinamicamente
for (let i = 1; i <= 29; i++) {
  const img = document.createElement("img");
  img.src = `img/ft${i}.webp`;
  img.loading = "lazy";
  slides.appendChild(img);
}

let index = 0;
let autoSlide = setInterval(nextSlide, 4000);

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.children.length;
  showSlide();
}

function prevSlide() {
  index = (index - 1 + slides.children.length) % slides.children.length;
  showSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 4000);
}

function nextSlideManual() {
  nextSlide();
  resetAutoSlide();
}

function prevSlideManual() {
  prevSlide();
  resetAutoSlide();
}


// =========================
// CORAÇÕES ANIMADOS
// =========================
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = `${Math.random() * 12 + 10}px`;
  heart.style.animationDuration = `${Math.random() * 3 + 6.5}s`;
  heart.style.opacity = "0.8";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}
setInterval(createHeart, 450);

// =========================================
// PLAYER
// =========================================

const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");

const playIcon = document.getElementById("playIcon");

const equalizer = document.getElementById("equalizer");

const progressBar = document.getElementById("progressBar");

const currentTimeEl = document.getElementById("currentTime");

const durationEl = document.getElementById("duration");

let isPlaying = false;

/* PLAY */

playBtn.addEventListener("click", () => {

  if(!isPlaying){

    audio.play();

    playBtn.classList.add("pause");

    playIcon.innerHTML = "❚❚";

    equalizer.classList.add("playing");

    isPlaying = true;

  } else {

    audio.pause();

    playBtn.classList.remove("pause");

    playIcon.innerHTML = "▶";

    equalizer.classList.remove("playing");

    isPlaying = false;

  }

});

/* DURAÇÃO */

audio.addEventListener("loadedmetadata", () => {

  progressBar.max = audio.duration;

  durationEl.innerHTML = formatTime(audio.duration);

});

/* UPDATE */

audio.addEventListener("timeupdate", () => {

  const progressPercent =
  (audio.currentTime / audio.duration) * 100;

progressBar.style.setProperty(
  "--progress",
  `${progressPercent}%`
);

  progressBar.value = audio.currentTime;

  currentTimeEl.innerHTML =
    formatTime(audio.currentTime);

});

/* VOLTAR MÚSICA */

progressBar.addEventListener("input", () => {

  audio.currentTime = progressBar.value;

});

/* FORMATADOR */

function formatTime(time){

  const minutes =
    Math.floor(time / 60);

  let seconds =
    Math.floor(time % 60);

  if(seconds < 10){
    seconds = "0" + seconds;
  }

  return `${minutes}:${seconds}`;

}