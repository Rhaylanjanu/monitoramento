function entrarSistema() {
  document.getElementById("telaInicial").style.display = "none";
  document.getElementById("interfaceSistema").style.display = "flex";
  document.getElementById("manualSorter").style.display = "none";
  document.getElementById("relatoriosSorter").style.display = "none";
  gerarQuadros();
}

function mostrarManualSorter() {
  document.getElementById("telaInicial").style.display = "none";
  document.getElementById("interfaceSistema").style.display = "none";
  document.getElementById("manualSorter").style.display = "flex";
  document.getElementById("relatoriosSorter").style.display = "none";
}

function mostrarRelatoriosSorter() {
  document.getElementById("telaInicial").style.display = "none";
  document.getElementById("interfaceSistema").style.display = "none";
  document.getElementById("manualSorter").style.display = "none";
  document.getElementById("relatoriosSorter").style.display = "flex";
  carregarRelatorios();
}

function voltarInicio() {
  document.getElementById("telaInicial").style.display = "flex";
  document.getElementById("interfaceSistema").style.display = "none";
  document.getElementById("manualSorter").style.display = "none";
  document.getElementById("relatoriosSorter").style.display = "none";
}

function gerarQuadros() {
  const painel = document.getElementById("painelQuadros");
  const lista = document.getElementById("listaQuadros");
  painel.innerHTML = '';
  lista.innerHTML = '';
  for (let i = 1; i <= 30; i++) {
    const quadro = document.createElement("div");
    quadro.className = "quadro";
    quadro.id = `quadro-${i}`;
    let disjuntoresHTML = '';
    for (let j = 1; j <= 20; j++) {
      const estado = Math.random() < 0.9 ? '' : ' alerta';
      disjuntoresHTML += `<div class='dijuntor${estado}'>Disjuntor ${j}</div>`;
    }
    quadro.innerHTML = `
      <h4>Quadro ${i}</h4>
      <button class="btn-excluir" onclick="excluirQuadro('quadro-${i}')">🗑️ Excluir</button>
      ${disjuntoresHTML}
    `;
    painel.appendChild(quadro);

    const itemLista = document.createElement("div");
    itemLista.innerHTML = `<a href="#quadro-${i}" style="text-decoration: none; color: #1e293b;">Quadro ${i}</a>`;
    lista.appendChild(itemLista);
  }
}

function excluirQuadro(id) {
  if (!confirm("Tem certeza que deseja excluir este quadro?")) return;
  const quadro = document.getElementById(id);
  if (quadro) quadro.remove();
  const lista = document.getElementById("listaQuadros").children;
  for (let item of lista) {
    if (item.textContent.includes(id.replace("quadro-", "Quadro "))) {
      item.remove();
      break;
    }
  }
}

function filtrarQuadros() {
  const termo = document.getElementById("buscarQuadro").value.toLowerCase();
  const lista = document.getElementById("listaQuadros").children;
  for (let item of lista) {
    item.style.display = item.textContent.toLowerCase().includes(termo) ? "block" : "none";
  }
}

document.getElementById("formRelatorio").addEventListener("submit"), function (e) {
  e.preventDefault();
  const data = document.getElementById("dataRelatorio").value;
  const trecho = document.getElementById("trechoRelatorio").value;
  const descricao = document.getElementById("descricaoRelatorio").value;
  const tecnico = document.getElementById("tecnicoRelatorio").value;

  const novo = { data, trecho, descricao, tecnico };
  let
}