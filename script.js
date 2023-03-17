
  let whiteCount = 0;
  let blackCount = 0;
  let redCount = 0;

  function calculateProb() {
    let lastColor = document.getElementById("last-color").value;

    if (lastColor !== "none") {
      switch (lastColor) {
        case "branco":
          whiteCount++;
          break;
        case "preto":
          blackCount++;
          break;
        case "vermelho":
          redCount++;
          break;
      }
    }

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
  };
