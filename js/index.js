const botaoAlterarTema = document.getElementById("botao-temafla");
const body = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocadeTema.setAttribute("src", "./imagens/flalogobotao.png");
  } else {
    imagemBotaoTrocadeTema.setAttribute("src", "./imagens/flalogobotao-escuro.png");
  }
});
