var habito = document.querySelector("#habito");
var descricao = document.querySelector("#descricao");
var freq = document.querySelector("#freq");
var botaoAdicionar = document.querySelector(".adicionar-habito");
var tabela = document.querySelector("tbody");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var erro = document.querySelector("span");

  if (habito.value == "" || descricao.value == "" || freq.value == 0) {
    erro.classList.remove("invisivel");
  } else {
    var tdHabito = adicionarColuna(habito);
    var tdDescricao = adicionarColuna(descricao);
    var tdFreq = adicionarColuna(freq);

    var linha = adicionarLinha(tdHabito, tdDescricao, tdFreq);
    tabela.appendChild(linha);

    habito.value = "";
    descricao.value = "";
    freq.value = "";
    erro.classList.add("invisivel");
  }
});

function adicionarColuna(valor) {
  var tdValor = document.createElement("td");
  tdValor.textContent = valor.value;

  return tdValor;
}

function criarBotaoExcluir(linha) {
  var botaoExcluir = document.createElement("button");
  botaoExcluir.classList.add("btn-remove");
  botaoExcluir.textContent = "X";
  linha.appendChild(botaoExcluir);
  botaoExcluir.addEventListener("click", function () {
    linha.classList.add("list-fade-out");
    setTimeout(function () {
      linha.remove();
    }, 600);
  });
  return botaoExcluir;
}

function adicionarLinha(habito, descricao, frequencia) {
  var linha = document.createElement("tr");

  linha.appendChild(habito);
  linha.appendChild(descricao);
  linha.appendChild(frequencia);
  criarBotaoExcluir(linha);

  return linha;
}
