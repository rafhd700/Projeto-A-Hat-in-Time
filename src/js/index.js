const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarBotao();
    botao.classList.add("selecionado");

    desselecionarPersonagem();
    personagem[indice].classList.add("selecionado")
  });
});

const personagem = document.querySelectorAll(".personagem")

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

