// importando a modal
import Modal from "./modal.js";

// adicionando ela a uma constante
const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

// Ações do botão de Marcar como lida
//pegar todos os botoes que existem com a class check
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach((button) => {
  // adicionar a escuta
  button.addEventListener("click", handleClick);
});

// Ações do botão de excluir
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleClick(event, false));
});

// Abrir modal e modificar os textos
function handleClick(event, check = true) {
  // previne que ao clicar nos botoes eles alterem a url
  event.preventDefault();

  const text = check ? "Marcar como lida" : "Excluir";
  const slug = check ? "check" : "delete";

  // pegar o id da room
  const roomId = document.querySelector("#room-id").dataset.id;
  // pega o ID da question pelo event
  const questionId = event.target.dataset.id;
  // enviar informações do formulario
  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = `${text}`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;

  // muda a cor do botao dependendo da ação escolhida
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");
  modal.open();
}
