const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const country = button.getAttribute("data-bs-country");
  const modalTitle = exampleModal.querySelector(".modal-title-country");
  //const modalBody = exampleModal.querySelector('.modal-body country')

  modalTitle.textContent = country + " National Tree";
});
