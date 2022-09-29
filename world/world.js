const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;
  const country = button.getAttribute("data-bs-country");
  const tree = button.getAttribute("data-bs-tree");
  const modalTitle = exampleModal.querySelector(".modal-title-country");
  const modalTreeName = exampleModal.querySelector(".modal-tree-name");
  const modalTreeImage = exampleModal.querySelector(".modal-tree-image");
  const modalTreeSource = exampleModal.querySelector(".modal-tree-source");

  modalTitle.textContent = country + " National Tree";
  modalTreeName.textContent = tree;
  modalTreeImage.src = "./trees/" + tree + ".jpg";
  getModalSource(modalTreeSource, modalTreeName);
});

getModalSource = (modalTreeSource, modalTreeName) => {
  if (modalTreeName.textContent === "Maple (Acer)") {
    modalTreeSource.textContent = "maple tree";
  } else {
    modalTreeSource.textContent = "ops";
  }
};
