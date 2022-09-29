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
  } else if (modalTreeName.textContent === "Ghaf Tree (Prosopis Cineraria)") {
    modalTreeSource.textContent =
      "By LRBurdak - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=3945050";
  } else if (modalTreeName.textContent === "Mulberry (Morus Nigra)") {
    modalTreeSource.textContent =
      "By Kokai, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=9118495";
  } else if (modalTreeName.textContent === "Whitewood (Bucida Buceras)") {
    modalTreeSource.textContent =
      "By Forest & Kim Starr, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=6146941";
  } else if (modalTreeName.textContent === "Olive (Olea Europaea)") {
    modalTreeSource.textContent =
      "By Emanuele.tommasino - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=4528350";
  } else if (modalTreeName.textContent === "Baobab (Adansonia Digiata)") {
    modalTreeSource.textContent =
      "By Ferdinand Reus from Arnhem, Holland - Two old ones, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=2615710";
  } else if (modalTreeName.textContent === "Ceibo (Erythrina Crista-galli)") {
    modalTreeSource.textContent =
      "CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=609251";
  } else {
    modalTreeSource.textContent = "ops";
  }
};
