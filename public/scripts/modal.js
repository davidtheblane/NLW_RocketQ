export default function Modal() {
  const cancelButton = document.querySelector(".button.cancel");

  const modalWrapper = document.querySelector(".modal-wrapper");
  cancelButton.addEventListener("click", close);

  //funcionalidade de adicionar  a classe active da modal.
  function open() {
    modalWrapper.classList.add("active");
  }
  //funcionalidade de remover a classe active da modal.
  function close() {
    modalWrapper.classList.remove("active");
  }
  return {
    open,
    close,
  };
}
