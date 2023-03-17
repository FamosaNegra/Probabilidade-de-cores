let whiteCount = parseInt(localStorage.getItem("whiteCount")) || 0;
let blackCount = parseInt(localStorage.getItem("blackCount")) || 0;
let redCount = parseInt(localStorage.getItem("redCount")) || 0;

function calculateProb() {
  let total = whiteCount + blackCount + redCount;
  let whiteProb = (whiteCount / total) * 100;
  let blackProb = (blackCount / total) * 100;
  let redProb = (redCount / total) * 100;

  document.getElementById("qtd-branco").textContent = whiteCount;
  document.getElementById("prob-branco").textContent = whiteProb.toFixed(2) + "%";

  document.getElementById("qtd-preto").textContent = blackCount;
  document.getElementById("prob-preto").textContent = blackProb.toFixed(2) + "%";

  document.getElementById("qtd-vermelho").textContent = redCount;
  document.getElementById("prob-vermelho").textContent = redProb.toFixed(2) + "%";
}

// Chama a função calculateProb() quando a página for carregada
calculateProb();

// Adiciona event listeners aos botões para atualizar a contagem e a porcentagem
document.getElementById("white-btn").addEventListener("click", function () {
  whiteCount++;
  localStorage.setItem("whiteCount", whiteCount);
  calculateProb();
});

document.getElementById("black-btn").addEventListener("click", function () {
  blackCount++;
  localStorage.setItem("blackCount", blackCount);
  calculateProb();
});

document.getElementById("red-btn").addEventListener("click", function () {
  redCount++;
  localStorage.setItem("redCount", redCount);
  calculateProb();
});