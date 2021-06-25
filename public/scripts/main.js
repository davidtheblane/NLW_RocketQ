// importando a modal
import Modal from "./modal.js";

// adicionando ela a uma constante
const modal = Modal();

// Quando o botao marcar como lida for clicado ele abre a modal
//pegar todos os botoes que existem com a class check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  // adicionar a escuta para abrir o modal ao clicar no botão.
  button.addEventListener("click", (event) => {
    //Abrir modal
    modal.open();
  });
});

// Quando o botao delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.open();
  });
});
