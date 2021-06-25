export default function Modal() {
  function open() {
    document.querySelector(".modal-wrapper").classList.add("active");
  }
  function close() {}
  //funcionalidade de remover a classe active da modal.
  return {
    open,
    close,
  };
}
