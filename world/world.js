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
  } else if (
    modalTreeName.textContent === "Baobab (Adansonia Digiata)" ||
    "Babobab (Adansonia)"
  ) {
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
  } else if (
    modalTreeName.textContent === "Oak (Quercus Robur)" ||
    "Royal Oak (Quercus Robur)" ||
    "Pedunculate Oak (Quercus Robur)" ||
    "Sessile Oak (Quercus Penaea)"
  ) {
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
  } else if (modalTreeName.textContent === "Araucaria (Araucaria Araucana)") {
    modalTreeSource.textContent =
      "By Vicente Fernández Rioja - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=70557515";
  } else if (
    modalTreeName.textContent === "Quindio Wax Palm (Ceroxylon Quindiuense)"
  ) {
    modalTreeSource.textContent =
      "By Bernard Gagnon - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=98914270";
  } else if (
    (modalTreeName.textContent = "Guanacaste (Enterolobium Cyclocarpum)")
  ) {
    modalTreeSource.textContent =
      "By Avancari - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=4744912";
  } else if (
    (modalTreeName.textContent = "Cuban Royal Palm (Roystonea Regia)")
  ) {
    modalTreeSource.textContent =
      "By SKsiddhartthan - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=67402294";
  } else if ((modalTreeName.textContent = "Golden Oak (Quercus Alnifolia)")) {
    modalTreeSource.textContent =
      "By Chneophytou - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=3411341";
  } else if (
    (modalTreeName.textContent = "Small-leaved Lime (Tilia Cordata)")
  ) {
    modalTreeSource.textContent =
      "CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=56153";
  } else if ((modalTreeName.textContent = "European Beech (Fagus Sylvatica)")) {
    modalTreeSource.textContent =
      "By GooseCanada - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=59521908";
  } else if (
    (modalTreeName.textContent = "West Indian Mahogany (Swietenia Mahagoni)")
  ) {
    modalTreeSource.textContent =
      "By I, J.M.Garg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2602306";
  } else if (
    (modalTreeName.textContent = "Cinchona Pubescens (Cinchona Pubescens)")
  ) {
    modalTreeSource.textContent =
      "Public Domain, https://commons.wikimedia.org/w/index.php?curid=78907";
  } else if ((modalTreeName.textContent = "Silver Birch (Betula Pendula)")) {
    modalTreeSource.textContent =
      "By Abc10 - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=62078096";
  } else if ((modalTreeName.textContent = "Ceiba (Ceiba Pentadra)")) {
    modalTreeSource.textContent =
      "CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=62146";
  } else if ((modalTreeName.textContent = "Royal Palm (Roystonea)")) {
    modalTreeSource.textContent =
      "Public Domain, https://commons.wikimedia.org/w/index.php?curid=933944";
  } else if ((modalTreeName.textContent = "Teak (Tectona)")) {
    modalTreeSource.textContent =
      "By Vengolis - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50568881";
  } else if (
    (modalTreeName.textContent = "Indian Banyan (Ficus Benghalensis)")
  ) {
    modalTreeSource.textContent =
      "CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=77253191";
  } else if (
    (modalTreeName.textContent =
      "Mediterranean Cypress (Cupressus Sempervirens)")
  ) {
    modalTreeSource.textContent =
      "By TruthBeethoven - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=19259985";
  } else if ((modalTreeName.textContent = "Strawberry Tree (Arbutus Unedo)")) {
    modalTreeSource.textContent =
      "By Basotxerri - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=54956290";
  } else if ((modalTreeName.textContent = "Blue Mahoe (Talipartiti Elatum)")) {
    modalTreeSource.textContent =
      "By Jamrock1962 - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=7999014";
  } else if (
    (modalTreeName.textContent = "Japanese Cherry Blossom (Prunus Serrulata)")
  ) {
    modalTreeSource.textContent =
      "By SLIMHANNYA - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=68232132";
  } else if (
    (modalTreeName.textContent = "Palmyra Palm (Borassus Flabellifer)")
  ) {
    modalTreeSource.textContent =
      "By AntanO - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=42997499";
  } else if ((modalTreeName.textContent = "Pine (Pinus)")) {
    modalTreeSource.textContent =
      "By yeowatzup at Flickr - Flickr, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=6224565";
  } else if (
    (modalTreeName.textContent = "Pinus Densifolora (Hibiscus Syriacus)")
  ) {
    modalTreeSource.textContent =
      "CC BY 1.0, https://commons.wikimedia.org/w/index.php?curid=250019";
  } else if ((modalTreeName.textContent = "Frangipani (Plumeria)")) {
    modalTreeSource.textContent =
      "By Zachi Evenor and User:MathKnight - Flickr: https://www.flickr.com/photos/zachievenor/14466596955/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=33494319";
  } else if ((modalTreeName.textContent = "Lenanon Ceadar (Cedrus Libani)")) {
    modalTreeSource.textContent =
      "CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=554679";
  } else if (
    (modalTreeName.textContent = "Sri Lankan Ironwood (Mesua Nagassarium)")
  ) {
    modalTreeSource.textContent =
      "By Benvda - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=4119869";
  } else {
    modalTreeSource.textContent = "ops";
  }
};
