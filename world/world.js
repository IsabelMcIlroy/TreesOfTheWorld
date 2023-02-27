const exampleModal = document.getElementById("exampleModal");
exampleModal.addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;
  const country = button.getAttribute("data-bs-country");
  const tree = button.getAttribute("data-bs-tree");
  const modalTitle = exampleModal.querySelector(".modal-title-country");
  const modalTreeName = exampleModal.querySelector(".modal-tree-name");
  const modalTreeImage = exampleModal.querySelector(".modal-tree-image");
  const modalTreeSource = exampleModal.querySelector(".modal-tree-source");
  const modalTreeFact = exampleModal.querySelector(".modal-tree-fact");

  modalTitle.textContent = country + " National Tree";
  modalTreeName.textContent = tree;
  modalTreeImage.src = "./trees/" + tree + ".jpg";
  getModalSourceAndFact(modalTreeSource, modalTreeName, modalTreeFact);
});

getModalSourceAndFact = (modalTreeSource, modalTreeName, modalTreeFact) => {
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
  } else if (modalTreeName.textContent === "Babobab (Adansonia)") {
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
  } else if (modalTreeName.textContent === "Sessile Oak (Quercus Penaea)") {
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (modalTreeName.textContent === "Pedunculate Oak (Quercus Robur)") {
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (modalTreeName.textContent === "Oak (Quercus Robur)") {
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (modalTreeName.textContent === "Royal Oak (Quercus Robur)") {
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (
    modalTreeName.textContent === "Honduras Mahogany (Swietenia Macrophylla)"
  ) {
    modalTreeSource.textContent =
      "By Dorian Axel Ramos Nuñez - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=111659642";
  } else if (modalTreeName.textContent === "Maple (Acer)") {
    modalTreeFact.textContent = "test";
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
  } else if ((modalTreeName.textContent = "Macedonian Pine (Pinus Peuce)")) {
    modalTreeSource.textContent =
      "By BotBln - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1410212";
  } else if (
    (modalTreeName.textContent = "Charghar (Tetraclinis Articulata)")
  ) {
    modalTreeSource.textContent =
      "By Nanosanchez - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=6425460";
  } else if ((modalTreeName.textContent = "Coconut Palm (Cocos Nucifera)")) {
    modalTreeSource.textContent =
      "By Stephen Glauseruploaded to Wikimedia Commons by Teinesavaii - originally posted to Flickr as Return to Paradise Beach. All to ourselves., CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=8690508";
  } else if ((modalTreeName.textContent = "Ahuehuete (Taxodium Mucronatum)")) {
    modalTreeSource.textContent =
      "By Luisalvaz - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=39290623";
  } else if (
    (modalTreeName.textContent = "Borneo or Malacca Teak (Intsia Palembanica)")
  ) {
    modalTreeSource.textContent =
      "By filibot.web - https://www.flickr.com/photos/filibot/8003919056, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=82148719";
  } else if (
    (modalTreeName.textContent = "Lemonwood (Calycophyllum Candidissimum)")
  ) {
    modalTreeSource.textContent =
      "By Byralaal - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=36551232";
  } else if ((modalTreeName.textContent = "Rhodendron (Rhododendron)")) {
    modalTreeSource.textContent =
      "By Brisbane City Council - Azalea as a Bonsai, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=23625694";
  } else if ((modalTreeName.textContent = "Silver Fern (Cyathea Dealbata)")) {
    modalTreeSource.textContent =
      "By Tatania Gerus - https://www.flickr.com/photos/tgerus/2349086151/in/set-72157604396543621, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=4145474";
  } else if ((modalTreeName.textContent = "Panama Tree (Sterculia Apetala)")) {
    modalTreeSource.textContent =
      "By Christian Pirkl - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=68367635";
  } else if ((modalTreeName.textContent = "Cinchona Officinalis (Cinchona)")) {
    modalTreeSource.textContent =
      "By Bentham-Moxon Trust.; Curtis, William; Curtis&#039;s botanical magazine dedications, 1827-1927: portraits and biographical notes.; Royal Botanic Gardens, Kew.; Stanley Smith Horticultural Trust. - https://www.flickr.com/photos/biodivlibrary/8272601122, Public Domain, https://commons.wikimedia.org/w/index.php?curid=42754692";
  } else if ((modalTreeName.textContent = "Narra (Pterocarpus Indicus)")) {
    modalTreeSource.textContent =
      "By Geographer - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=116052040";
  } else if ((modalTreeName.textContent = "Deodar (Cedrus Deodara)")) {
    modalTreeSource.textContent =
      "By Paul Evans from London, United Kingdom - DSC00483.JPG, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=9471983";
  } else if ((modalTreeName.textContent = "Cork oak (Quercus Suber)")) {
    modalTreeSource.textContent =
      "By Kent Wang from London, United Kingdom - Cork oak, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=73644853";
  } else if (
    (modalTreeName.textContent = "Lapacho (Handroanthus Impetiginosus)")
  ) {
    modalTreeSource.textContent =
      "By © 2006 Carla Antonini - Autoría propia., CC BY-SA 2.5 ar, https://commons.wikimedia.org/w/index.php?curid=1065154";
  } else if (
    (modalTreeName.textContent =
      "Christ's Thorn Jujube (Ziziphus Spinachristi)")
  ) {
    modalTreeSource.textContent =
      "By Meincluded - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=76058112";
  } else if ((modalTreeName.textContent = "Siberian Larch (Larix Sibricia)")) {
    modalTreeSource.textContent =
      "By Montréalais - No machine-readable source provided. Own work assumed (based on copyright claims).en.wikipedia.org, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=417632";
  } else if (
    (modalTreeName.textContent = "Phoenix Palm (Phoenix Dactylifera)")
  ) {
    modalTreeSource.textContent =
      "By Mmcknight4 - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=3717908";
  } else if (
    (modalTreeName.textContent = "Ornas Birch (Betual Pendula 'Dalecarlica')")
  ) {
    modalTreeSource.textContent =
      "By This image was produced by me, David Castor (user:dcastor) Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=16363970";
  } else if ((modalTreeName.textContent = "Linden (Tilia)")) {
    modalTreeSource.textContent =
      "By Bruce Marlin - Own work: http://www.cirrusimage.com/tree_silver_linden_upright.htm, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=5742109";
  } else if ((modalTreeName.textContent = "Maquilishuat (Tabebuia Rosea)")) {
    modalTreeSource.textContent =
      "By José David Villalobos Robles - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=2461295";
  } else if ((modalTreeName.textContent = "Ratchaphruek (Cassia Fistula)")) {
    modalTreeSource.textContent =
      "By Banswalhemant - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=90721202";
  } else if (
    (modalTreeName.textContent = "African Blackwood (Dalbergia Melanoxylon)")
  ) {
    modalTreeSource.textContent =
      "By Mogano at German Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15864532";
  } else if ((modalTreeName.textContent = "Williow (Salix)")) {
    modalTreeSource.textContent =
      "By Bruce Marlin - Own work: http://www.cirrusimage.com/tree_golden_weeping_willow.htm, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=5726820";
  } else if (
    (modalTreeName.textContent = "Arbol de Artigas (eltphorum Dubium)")
  ) {
    modalTreeSource.textContent =
      "By אבישי טייכר - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=2400587";
  } else if ((modalTreeName.textContent = "Araguaney (Tabeluia Chrysantha)")) {
    modalTreeSource.textContent =
      "By José Reynaldo da Fonseca - Own work, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=1161568";
  } else if ((modalTreeName.textContent = "Lotus (Nelumbo Nucifera)")) {
    modalTreeSource.textContent =
      "By T.Voekler - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=8142220";
  } else if (
    (modalTreeName.textContent = "Dragon Blood Tree (Dracaena Cinnabari)")
  ) {
    modalTreeSource.textContent =
      "By Boris Khvostichenko(User:Boriskhv) - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=7175533";
  } else if (
    (modalTreeName.textContent = "Real Yellowwood (Podocarpus Latifolius)")
  ) {
    modalTreeSource.textContent =
      "By Abu Shawka - Own workTransferred from en.wikipedia, Public Domain, https://commons.wikimedia.org/w/index.php?curid=12527782";
  } else {
    modalTreeSource.textContent = "ops";
  }
};
