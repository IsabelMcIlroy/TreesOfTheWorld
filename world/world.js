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
  if (modalTreeName.textContent === "Ghaf Tree (Prosopis Cineraria)") {
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
  } else if (modalTreeName.textContent === "Golden Wattle (Acadia Pycnantha)") {
    modalTreeSource.textContent =
      "By Bidgee - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=3799676";
  } else if (modalTreeName.textContent === "Mango Tree (Mangifera Indica)") {
    modalTreeSource.textContent =
      "By AbhijithDA - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15408963";
  } else if (
    modalTreeName.textContent === "Brazilwood (Caesalphinia Echinata)"
  ) {
    modalTreeSource.textContent =
      "By Mauroguanandi - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=8425431";
  } else if (modalTreeName.textContent === "Lignum Vitae (Guaiacum Sanctum)") {
    modalTreeSource.textContent =
      "By Ibbel - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=6767032";
  } else if (
    modalTreeName.textContent === "Bhutan Cypress (Cupressus Cashmeriana)"
  ) {
    modalTreeSource.textContent =
      "By Whiteghost.ink - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=82574066";
  } else if (modalTreeName.textContent === "Oak (Quercus Robur)") {
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (
    modalTreeName.textContent === "Honduras Mahogany (Swietenia Macrophylla)"
  ) {
    modalTreeSource.textContent =
      "By Dorian Axel Ramos Nuñez - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=111659642";
  } else if (modalTreeName.textContent === "Maple (Acer)") {
    modalTreeSource.textContent =
      "By Bruce Marlin - Own work http://www.cirrusimage.com/tree_maple_sugar.htm, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=2611206";
  } else {
    modalTreeSource.textContent = "ops";
  }
};
