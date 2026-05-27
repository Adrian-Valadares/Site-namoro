// data do relacionamento
const startDate = new Date("2025-12-12T00:00:00");

// função que atualiza o timer
function updateTimer(){

  const now = new Date();

  // diferença entre a data atual e a data do namoro
  const diff = now - startDate;

  // cálculos do tempo
  const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours =
    Math.floor((diff / (1000 * 60 * 60)) % 24);

  const minutes =
    Math.floor((diff / (1000 * 60)) % 60);

  const seconds =
    Math.floor((diff / 1000) % 60);

  // atualiza os elementos na tela
  document.getElementById("days").innerText = days;

  document.getElementById("hours").innerText = hours;

  document.getElementById("minutes").innerText = minutes;

  document.getElementById("seconds").innerText = seconds;
}

// atualiza o timer a cada segundo
setInterval(updateTimer, 1000);

updateTimer();


// =======================
// CARROSSEL
// =======================

// pega os slides
const slides =
  document.getElementById("slides");

// pega todas as imagens
const images =
  document.querySelectorAll(".slides img");

// índice atual
let index = 0;

// mostra o slide atual
function showSlide(){

  slides.style.transform =
  `translateX(-${index * 100}%)`;
}

// próximo slide
function nextSlide(){

  index++;

  // volta pro começo
  if(index >= images.length){
    index = 0;
  }

  showSlide();
}

// slide anterior
function prevSlide(){

  index--;

  // vai pro último slide
  if(index < 0){
    index = images.length - 1;
  }

  showSlide();
}

// troca automática
setInterval(nextSlide, 4000);


// =======================
// CORAÇÕES
// =======================

// cria os corações caindo
function createHeart() {

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤";

  // posição aleatória
  heart.style.left =
    Math.random() * window.innerWidth + "px";

  // tamanho aleatório
  const size =
    Math.random() * 10 + 10;

  heart.style.fontSize =
    size + "px";

  // velocidade aleatória
  heart.style.animationDuration =
    Math.random() * 4 + 6 + "s";

  // opacidade
  heart.style.opacity =
    Math.random() * 0.7 + 0.95;

  document.body.appendChild(heart);

  // remove o coração depois
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// cria corações continuamente
setInterval(createHeart, 500);