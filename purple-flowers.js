// Espera o DOM carregar antes de executar
document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");

  // Mostra a flor e esconde o título após 2 segundos
  setTimeout(() => {
    flower.style.display = "inherit";
    word.style.display = "none";
  }, 2000);
});

// Função que cria uma gota de chuva
function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth; // posição horizontal aleatória
  const delay = Math.random() * 5; // atraso da animação
  const duration = Math.random() * 2 + 2; // duração da queda

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = ${xPosition}px;
  rainDrop.style.animationDelay = ${delay}s;
  rainDrop.style.animationDuration = ${duration}s;
  rainDrop.style.display = "none";

  body.appendChild(rainDrop);

  // Exibe a gota levemente atrasada para suavizar a aparição
  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}

// Cria gotas continuamente a cada 100ms
setInterval(createRaindrop, 100);
