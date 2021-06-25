// importando a modal
import Modal from "./modal.js";

// adicionando ela a uma constante
const modal = Modal();

//pegar todos os botoes que existem com a class check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  // adicionar a escuta para abrir o modal ao clicar no botão.
  button.addEventListener("click", (event) => {
    //Abrir modal
    modal.open();
  });
});

//pegar quando o marcar como lido for clicado.

modal.open();
