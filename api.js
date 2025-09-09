function atualizarQuartos() {
  fetch("/api/controle_quartos")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("quartos");
      container.innerHTML = "";
      for (const quarto in data) {
        const status = data[quarto];
        const div = document.createElement("div");
        div.textContent = `${quarto}: ${status}`;
        container.appendChild(div);
      }
    })
    .catch(err => console.error(err));
}

// Atualiza a cada 5 segundos
setInterval(atualizarQuartos, 5000);
atualizarQuartos();
