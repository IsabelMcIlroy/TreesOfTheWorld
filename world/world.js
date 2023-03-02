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
    modalTreeFact.textContent =
      "P. cineraria is a small tree, ranging in height from 3 to 5 m (9.8 to 16.4 ft). The leaves are bipinnate, with seven to fourteen leaflets on each of one to three pinnae. Branches are thorned along the internodes. Flowers are small and creamy-yellow, and followed by seeds in pods. The tree is found in extremely arid conditions, with rainfall as low as 15 cm (5.9 in) annually; but is indicative of the presence of a deep water table. As with some other Prosopis spp., P. cineraria has demonstrated a tolerance of highly alkaline and saline environments. -wikipedia";
    modalTreeSource.textContent =
      "By LRBurdak - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=3945050";
  } else if (modalTreeName.textContent === "Mulberry (Morus Nigra)") {
    modalTreeFact.textContent =
      "The fruit is a compound cluster of several small drupes that are dark purple, almost black when ripe, and they are 2.5 cm (1 in) in diameter. Black mulberry is richly flavoured -wikipedia";
    modalTreeSource.textContent =
      "By Kokai, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=9118495";
  } else if (modalTreeName.textContent === "Whitewood (Bucida Buceras)") {
    modalTreeFact.textContent =
      "The wood of the bullet tree is extremely hard and durable. Being highly resistant to insects and fungi, it is sometimes used for house posts or bridge timbers. The bark may be used for tanning leather due to its tannin content. It is also often used as an ornamental/shade tree -wikipedia";
    modalTreeSource.textContent =
      "By Forest & Kim Starr, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=6146941";
  } else if (modalTreeName.textContent === "Olive (Olea Europaea)") {
    modalTreeFact.textContent =
      "The olive tree, Olea europaea, is an evergreen tree or shrub native to Mediterranean Europe, Asia, and Africa. It is short and squat and rarely exceeds 8 to 15 m (25 to 50 ft) in height. 'Pisciottana', a unique variety comprising 40,000 trees found only in the area around Pisciotta in the Campania region of southern Italy, often exceeds this, with correspondingly large trunk diameters. The trunk is typically gnarled and twisted. -wikipedia";
    modalTreeSource.textContent =
      "By Emanuele.tommasino - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=4528350";
  } else if (modalTreeName.textContent === "Baobab (Adansonia Digiata)") {
    modalTreeFact.textContent =
      "African baobabs are trees that often grow as solitary individuals, and are large and distinctive elements of savanna or scrubland vegetation. The trunk is typically very broad and fluted or cylindrical, often with a buttressed, spreading base. The fresh flowers have a sweet scent, but after about 24 hours, they start to turn brown and emit a carrion smell. -wikipedia";
    modalTreeSource.textContent =
      "By Ferdinand Reus from Arnhem, Holland - Two old ones, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=2615710";
  } else if (modalTreeName.textContent === "Babobab (Adansonia)") {
    modalTreeFact.textContent =
      "African baobabs are trees that often grow as solitary individuals, and are large and distinctive elements of savanna or scrubland vegetation. The trunk is typically very broad and fluted or cylindrical, often with a buttressed, spreading base. The fresh flowers have a sweet scent, but after about 24 hours, they start to turn brown and emit a carrion smell. -wikipedia";
    modalTreeSource.textContent =
      "By Ferdinand Reus from Arnhem, Holland - Two old ones, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=2615710";
  } else if (modalTreeName.textContent === "Ceibo (Erythrina Crista-galli)") {
    modalTreeFact.textContent =
      "The flowers are rich in nectar and are visited by insects, which usually have to crawl underneath the carina and thus pollinate the flowers. Seeds The tree's fruit is a legume, a dry pod a few centimeters in length derived from a single carpel and contains about 8-10 chestnut-brown bean-shaped seeds. The cotyledons are hypogeal, staying underground upon germination. -wikipedia";
    modalTreeSource.textContent =
      "CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=609251";
  } else if (modalTreeName.textContent === "Golden Wattle (Acadia Pycnantha)") {
    modalTreeFact.textContent =
      "The profuse fragrant, golden flowers appear in late winter and spring, followed by long seed pods. Plants are cross-pollinated by several species of honeyeater and thornbill, which visit nectaries on the phyllodes and brush against flowers, transferring pollen between them. An understorey plant in eucalyptus forest, it is found from southern New South Wales and the Australian Capital Territory, through Victoria and into southeastern South Australia. -wikipedia";
    modalTreeSource.textContent =
      "By Bidgee - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=3799676";
  } else if (modalTreeName.textContent === "Mango Tree (Mangifera Indica)") {
    modalTreeFact.textContent =
      "It is a large green tree, valued mainly for its fruits, both green and ripe. Approximately 500 varieties have been reported in India.[3] It can grow up to 15 to 30 metres (50 to 100 feet) tall with a similar crown width and a trunk circumference of more than 3.7 m (12 ft). The leaves are simple, shiny and dark green. - wikipedia";
    modalTreeSource.textContent =
      "By AbhijithDA - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15408963";
  } else if (
    modalTreeName.textContent === "Brazilwood (Caesalphinia Echinata)"
  ) {
    modalTreeFact.textContent =
      "When Portuguese explorers found Paubrasilia on the coast of South America, they recognised it as a relative of an Asian species of sappanwood already used in Europe for producing red dye. The Portuguese named these trees pau-brasil, the term pau meaning wood, and brasil meaning reddish/ember-like. The South American trees soon dominated the trading as a better source of dye. Such a vigorous trade resulted from the woods that early sailors and merchants started referring to the land itself as Terra do Brasil, or simply, the 'Land of Brazil', and from this use the present name of Brazil was derived. -wikipedia";
    modalTreeSource.textContent =
      "By Mauroguanandi - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=8425431";
  } else if (modalTreeName.textContent === "Lignum Vitae (Guaiacum Sanctum)") {
    modalTreeFact.textContent =
      "The wood has been used for making specific parts of ships that needed to be self-lubricating so that they would last longer. -wikipedia";
    modalTreeSource.textContent =
      "By Ibbel - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=6767032";
  } else if (
    modalTreeName.textContent === "Bhutan Cypress (Cupressus Cashmeriana)"
  ) {
    modalTreeFact.textContent =
      "The foliage grows in strongly pendulous sprays of blue-green, very slender, flattened shoots. - wikipedia";
    modalTreeSource.textContent =
      "By Whiteghost.ink - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=82574066";
  } else if (modalTreeName.textContent === "Sessile Oak (Quercus Penaea)") {
    modalTreeFact.textContent =
      "The fruit is a nut called an acorn or oak nut borne in a cup-like structure known as a cupule; each acorn contains one seed (rarely two or three) and takes 6 to 18 months to mature, depending on the species. The acorns and leaves contain tannic acid, which helps to guard from fungi and insects. -wikipedia";
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (modalTreeName.textContent === "Pedunculate Oak (Quercus Robur)") {
    modalTreeFact.textContent =
      "The fruit is a nut called an acorn or oak nut borne in a cup-like structure known as a cupule; each acorn contains one seed (rarely two or three) and takes 6 to 18 months to mature, depending on the species. The acorns and leaves contain tannic acid, which helps to guard from fungi and insects. -wikipedia";
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (modalTreeName.textContent === "Oak (Quercus Robur)") {
    modalTreeFact.textContent =
      "The fruit is a nut called an acorn or oak nut borne in a cup-like structure known as a cupule; each acorn contains one seed (rarely two or three) and takes 6 to 18 months to mature, depending on the species. The acorns and leaves contain tannic acid, which helps to guard from fungi and insects. -wikipedia";
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (modalTreeName.textContent === "Royal Oak (Quercus Robur)") {
    modalTreeFact.textContent =
      "The fruit is a nut called an acorn or oak nut borne in a cup-like structure known as a cupule; each acorn contains one seed (rarely two or three) and takes 6 to 18 months to mature, depending on the species. The acorns and leaves contain tannic acid, which helps to guard from fungi and insects. -wikipedia";
    modalTreeSource.textContent =
      "By The original uploader was Snowmanradio at English Wikipedia.(Original text: snowmanradio) - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=3690937";
  } else if (
    modalTreeName.textContent === "Honduras Mahogany (Swietenia Macrophylla)"
  ) {
    modalTreeFact.textContent =
      "Mahogany wood is strong and is usually a source for furniture, musical instruments, ships, doors, coffins, decors. -wikipedia";
    modalTreeSource.textContent =
      "By Dorian Axel Ramos Nuñez - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=111659642";
  } else if (modalTreeName.textContent === "Maple (Acer)") {
    modalTreeFact.textContent =
      "The closest relative of Acer is Dipteronia, which only has two living species in China, but has a fossil record extending back to the middle Paleocene in North America. The oldest known fossils of Acer are from the late Paleocene of Northeast Asia and northern North America, around 60 million years old. The oldest fossils of Acer in Europe are from Svalbard, dating to the late Eocene (Priabonian ~38-34 million years old). -wikipedia";
    modalTreeSource.textContent =
      "By Bruce Marlin - Own work http://www.cirrusimage.com/tree_maple_sugar.htm, CC BY-SA 2.5, https://commons.wikimedia.org/w/index.php?curid=2611206";
  } else if (modalTreeName.textContent === "Araucaria (Araucaria Araucana)") {
    modalTreeFact.textContent =
      "The origin of the popular English language name 'monkey puzzle' derives from its early cultivation in Britain in about 1850, when the species was still very rare in gardens and not widely known. Sir William Molesworth, the owner of a young specimen at Pencarrow garden near Bodmin in Cornwall, was showing it to a group of friends, when one of them the noted barrister and Benthamist Charles Austin remarked, 'It would puzzle a monkey to climb that'. As the species had no existing popular name, first 'monkey puzzler', then 'monkey puzzle' stuck. - wikipedia";
    modalTreeSource.textContent =
      "By Vicente Fernández Rioja - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=70557515";
  } else if (
    modalTreeName.textContent === "Quindio Wax Palm (Ceroxylon Quindiuense)"
  ) {
    modalTreeFact.textContent =
      "This palm species can grow to a height of 45 m (148 ft) —or rarely, even as high as 60 m (200 ft). It is the tallest recorded monocot in the world. The trunk is cylindrical, smooth, light colored, covered with wax; leaf scars forming dark rings around the trunk. -wikipedia";
    modalTreeSource.textContent =
      "By Bernard Gagnon - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=98914270";
  } else if (
    (modalTreeName.textContent = "Guanacaste (Enterolobium Cyclocarpum)")
  ) {
    modalTreeFact.textContent =
      "Enterolobium cyclocarpum, commonly known as guanacaste, caro caro, monkey-ear tree, or elephant-ear tree, is a species of flowering tree in the pea family, Fabaceae, that is native to tropical regions of the Americas, from central Mexico south to northern Brazil (Roraima) and Venezuela. It is known for its large proportions, expansive, often spherical crown, and curiously shaped seedpods. -wikipedia";
    modalTreeSource.textContent =
      "By Avancari - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=4744912";
  } else if (
    (modalTreeName.textContent = "Cuban Royal Palm (Roystonea Regia)")
  ) {
    modalTreeFact.textContent =
      "Widely planted as an ornamental, R. regia is also used for thatch, and construction timber. The fruit is eaten by birds and bats (which disperse the seeds) and fed to livestock. Its flowers are visited by birds and bats, and it serves as a roosting site and food source for a variety of animals. - wikipedia";
    modalTreeSource.textContent =
      "By SKsiddhartthan - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=67402294";
  } else if ((modalTreeName.textContent = "Golden Oak (Quercus Alnifolia)")) {
    modalTreeFact.textContent =
      "The golden oak is a much branched evergreen shrub or small tree up to 10 metres (33 feet) high. Due to its short stature (in relation to other oaks) it is sometimes referred to as the dwarf oak. -wikipedia";
    modalTreeSource.textContent =
      "By Chneophytou - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=3411341";
  } else if (
    (modalTreeName.textContent = "Small-leaved Lime (Tilia Cordata)")
  ) {
    modalTreeFact.textContent =
      "Tilia cordata is a deciduous tree growing to 20-40 m (66-131 ft) tall, diameter 1/3 to 1/2 the height, with a trunk up to 1 m diameter. The largest known trunk circumference was a specimen in Närke, Sweden, that measured 8.35 meters diameter at chest height. Lindar in Germany is said to be over 1000 years old. The bark is smooth and grayish when young, firm with vertical ridges and horizontal fissures when older. - wikipedia";
    modalTreeSource.textContent =
      "CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=56153";
  } else if ((modalTreeName.textContent = "European Beech (Fagus Sylvatica)")) {
    modalTreeFact.textContent =
      "The nuts are eaten by humans and animals. Slightly toxic to humans if eaten in large quantities due to the tannins and alkaloids they contain, the nuts were nonetheless pressed to obtain an oil in 19th-century England that was used for cooking and in lamps. They were also ground to make flour, which could be eaten after the tannins were leached out by soaking. - wikipedia";
    modalTreeSource.textContent =
      "By GooseCanada - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=59521908";
  } else if (
    (modalTreeName.textContent = "West Indian Mahogany (Swietenia Mahagoni)")
  ) {
    modalTreeFact.textContent =
      "The earliest recorded use of S. mahagoni was in 1514. This date year was carved into a rough-hewn cross placed in the Basilica Cathedral of Santa María la Menor in Santo Domingo (now the capital of the Dominican Republic), at the beginning of the building's construction. Completed about 1540, it is the oldest church in the West Indies, and its interior was ornamented with carved mahogany woodwork that is still in almost perfect condition after 500 years in the tropics. -wikipedia";
    modalTreeSource.textContent =
      "By I, J.M.Garg, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=2602306";
  } else if (
    (modalTreeName.textContent = "Cinchona Pubescens (Cinchona Pubescens)")
  ) {
    modalTreeFact.textContent =
      "Cinchona pubescens, also known as red cinchona and quina (Kina) ((in Spanish) Cascarilla, cinchona; (in Portuguese) quina-do-amazonas, quineira), is native to Central and South America. It is known as a medicinal plant for its bark's high quinine content- and has similar uses to Cinchona officinalis in the production of quinine, most famously used for treatment of malaria. -wikipedia";
    modalTreeSource.textContent =
      "Public Domain, https://commons.wikimedia.org/w/index.php?curid=78907";
  } else if ((modalTreeName.textContent = "Silver Birch (Betula Pendula)")) {
    modalTreeFact.textContent =
      " It is planted decoratively in parks and gardens and is used for forest products such as joinery timber, firewood, tanning, racecourse jumps, and brooms. Various parts of the tree are used in traditional medicine and the bark contains triterpenes, which have been shown to have medicinal properties. - wikipedia";
    modalTreeSource.textContent =
      "By Abc10 - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=62078096";
  } else if ((modalTreeName.textContent = "Ceiba (Ceiba Pentadra)")) {
    modalTreeFact.textContent =
      "The tree and the cotton-like fluff obtained from its seed pods are commonly known in English as kapok, a Malay-derived name which originally applied to Bombax ceiba, a native of tropical Asia. In Spanish-speaking countries the tree is commonly known as 'ceiba' and in French-speaking countries as fromager. The tree is cultivated for its cottonlike seed fibre. - wikipedia";
    modalTreeSource.textContent =
      "CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=62146";
  } else if ((modalTreeName.textContent = "Royal Palm (Roystonea)")) {
    modalTreeFact.textContent =
      "Though mainly a decorative plant, royal palms do have some minor agricultural uses. The heart of the palm is used to make salad in some parts of the Caribbean, and its seeds can be used as substitutes for coffee beans. Royal palm seeds were widely used in Cuba to feed pigs at least up to the 1940s and 1950s. -wikipedia";
    modalTreeSource.textContent =
      "Public Domain, https://commons.wikimedia.org/w/index.php?curid=933944";
  } else if ((modalTreeName.textContent = "Teak (Tectona)")) {
    modalTreeFact.textContent =
      "Teak's high oil content, high tensile strength and tight grain make it particularly suitable where weather resistance is desired. It is used in the manufacture of outdoor furniture and boat decks. It is also used for cutting boards, indoor flooring, countertops and as a veneer for indoor finishings. Although easily worked, it can cause severe blunting on edged tools because of the presence of silica in the wood. Over time teak can weather to a silvery-grey finish, especially when exposed to sunlight. -wikipedia";
    modalTreeSource.textContent =
      "By Vengolis - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=50568881";
  } else if (
    (modalTreeName.textContent = "Indian Banyan (Ficus Benghalensis)")
  ) {
    modalTreeFact.textContent =
      "The figs produced by the tree are eaten by birds such as the Indian myna. Fig seeds that pass through the digestive system of birds are more likely to germinate and sprout earlier. - wikipedia";
    modalTreeSource.textContent =
      "CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=77253191";
  } else if (
    (modalTreeName.textContent =
      "Mediterranean Cypress (Cupressus Sempervirens)")
  ) {
    modalTreeFact.textContent =
      "In July 2012, a forest fire, lasting five days, devastated 20,000 hectares of forest in the Valencian village of Andilla. However, amid the charred landscape, a group of 946 cypress trees about 22 years old was virtually unharmed, and only 12 cypresses were burned. Andilla cypresses were planted by the CypFire European project studying various aspects of the cypresses, including fire resistance. -wikipedia";
    modalTreeSource.textContent =
      "By TruthBeethoven - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=19259985";
  } else if ((modalTreeName.textContent = "Strawberry Tree (Arbutus Unedo)")) {
    modalTreeFact.textContent =
      "They are used mostly for jam, marmalades, yogurt and alcoholic beverages, such as the Portuguese medronho, a type of strong brandy. Many regions of Albania prepare the traditional drink rakia from the fruits of the plant (mare or kocimare in Albanian), whence comes the name of the drink, which is raki kocimareje. In order to reduce the high content of methanol in the drink, the spirit is distilled twice. -wikipedia";
    modalTreeSource.textContent =
      "By Basotxerri - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=54956290";
  } else if ((modalTreeName.textContent = "Blue Mahoe (Talipartiti Elatum)")) {
    modalTreeFact.textContent =
      "The name mahoe is derived from a Carib word. The 'blue' refers to blue-green streaks in the polished wood, giving it a distinctive appearance. The blue mahoe is a beautiful and durable timber that is widely used for cabinet making and also for making decorative objects such as picture frames, bowls and wood carvings. -wikipedia";
    modalTreeSource.textContent =
      "By Jamrock1962 - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=7999014";
  } else if (
    (modalTreeName.textContent = "Japanese Cherry Blossom (Prunus Serrulata)")
  ) {
    modalTreeFact.textContent =
      "Cherry blossoms and leaves are edible and both are used as food ingredients in Japan. One example being the blossoms are pickled in salt and umezu (ume vinegar), and used for coaxing out flavor in wagashi, (a traditional Japanese confectionery,) or anpan, (a Japanese sweet bun, most-commonly filled with red bean paste). - wikipedia";
    modalTreeSource.textContent =
      "By SLIMHANNYA - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=68232132";
  } else if (
    (modalTreeName.textContent = "Palmyra Palm (Borassus Flabellifer)")
  ) {
    modalTreeFact.textContent =
      "The fruit (palmyra fruit) measures 10 cm (3.9 in) to 18 cm (7.1 in) in diameter, has a black husk, and is borne in clusters. The soft orange-yellow mesocarp pulp of the ripe fruit is sugary, dense and edible, rich in vitamins A and C. - wikipedia";
    modalTreeSource.textContent =
      "By AntanO - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=42997499";
  } else if ((modalTreeName.textContent = "Pine (Pinus)")) {
    modalTreeFact.textContent =
      "Pines are long lived and typically reach ages of 100-1,000 years, some even more. The longest-lived is the Great Basin bristlecone pine (P. longaeva). One individual of this species, dubbed 'Methuselah', is one of the world's oldest living organisms at around 4,800 years old. - wikipedia";
    modalTreeSource.textContent =
      "By yeowatzup at Flickr - Flickr, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=6224565";
  } else if (
    (modalTreeName.textContent = "Pinus Densifolora (Hibiscus Syriacus)")
  ) {
    modalTreeFact.textContent =
      "The flowers are often pink in color, but can also be dark pink (almost purple), light pink or white. Individual flowers are short-lived, lasting only a day. However, numerous buds produced on the shrub's new growth provide prolific flowering over a long summer blooming period. -wikipedia";
    modalTreeSource.textContent =
      "CC BY 1.0, https://commons.wikimedia.org/w/index.php?curid=250019";
  } else if ((modalTreeName.textContent = "Frangipani (Plumeria)")) {
    modalTreeFact.textContent =
      "Plumeria branches are succulent. The trunk and branches of the Plumeria species have a milky latex sap that, like many other Apocynaceae, contains poisonous compounds that irritate the eyes and skin. -wikipedia";
    modalTreeSource.textContent =
      "By Zachi Evenor and User:MathKnight - Flickr: https://www.flickr.com/photos/zachievenor/14466596955/, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=33494319";
  } else if ((modalTreeName.textContent = "Lenanon Ceadar (Cedrus Libani)")) {
    modalTreeFact.textContent =
      "Cedar wood is prized for its fine grain, attractive yellow color, and fragrance. It is exceptionally durable and immune to insect ravages. Wood from C. libani has a density of 560 kg/m3; it is used for furniture, construction, and handicrafts. -wikipedia";
    modalTreeSource.textContent =
      "CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=554679";
  } else if (
    (modalTreeName.textContent = "Sri Lankan Ironwood (Mesua Nagassarium)")
  ) {
    modalTreeFact.textContent =
      "As the English name indicates, the wood of this tree is very heavy, hard and strong. The density is 940 to 1,195 kg/m3 (59 to 75 lb/ft3) at 15% moisture content. The colour is deep dark red. It is hard to saw and is mainly used for railroad ties and heavy structural timber. -wikipedia";
    modalTreeSource.textContent =
      "By Benvda - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=4119869";
  } else if ((modalTreeName.textContent = "Macedonian Pine (Pinus Peuce)")) {
    modalTreeFact.textContent =
      "Macedonian pine is one of the most valuable conifer species in the Balkan Peninsula. Its durable wood is highly valued in construction, furniture production, wood-carving and cooperage. The tree is also exceptionally good at adapting to severe mountain climate conditions, which makes it a valuable species for afforestation on high terrain for protection against erosion. -wikipedia";
    modalTreeSource.textContent =
      "By BotBln - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=1410212";
  } else if (
    (modalTreeName.textContent = "Charghar (Tetraclinis Articulata)")
  ) {
    modalTreeFact.textContent =
      "It is one of only a small number of conifers able to coppice (regrow by sprouting from stumps), an adaptation to survive wildfire and moderate levels of browsing by animals. Old trees that have sprouted repeatedly over a long period form large burls at the base, known as lupias. -wikipedia";
    modalTreeSource.textContent =
      "By Nanosanchez - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=6425460";
  } else if ((modalTreeName.textContent = "Coconut Palm (Cocos Nucifera)")) {
    modalTreeFact.textContent =
      "The name comes from the old Portuguese word coco, meaning 'head' or 'skull', after the three indentations on the coconut shell that resemble facial features. They are ubiquitous in coastal tropical regions and are a cultural icon of the tropics. - wikipedia";
    modalTreeSource.textContent =
      "By Stephen Glauseruploaded to Wikimedia Commons by Teinesavaii - originally posted to Flickr as Return to Paradise Beach. All to ourselves., CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=8690508";
  } else if ((modalTreeName.textContent = "Ahuehuete (Taxodium Mucronatum)")) {
    modalTreeFact.textContent =
      "One specimen, the Árbol del Tule in Santa María del Tule, Oaxaca, Mexico, is the stoutest tree in the world with a diameter of 11.42 m (37.5 ft). -wikipedia";
    modalTreeSource.textContent =
      "By Luisalvaz - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=39290623";
  } else if (
    (modalTreeName.textContent = "Borneo or Malacca Teak (Intsia Palembanica)")
  ) {
    modalTreeFact.textContent =
      "On 23 August 2019, the tree, locally known as pokok merbau, officially became the national tree of Malaysia. The then-Prime Minister, Mahathir, stated that it represented the strength and endurance of Malaysia's people. -wikipedia";
    modalTreeSource.textContent =
      "By filibot.web - https://www.flickr.com/photos/filibot/8003919056, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=82148719";
  } else if (
    (modalTreeName.textContent = "Lemonwood (Calycophyllum Candidissimum)")
  ) {
    modalTreeFact.textContent =
      "Calycophyllum candidissimum, the degami, dagame or lemonwood, is a species of flowering plant in the family Calycophyllum, native to southern Mexico, Cuba, Central America, Colombia, and Venezuela. It is the national tree of Nicaragua. -wikipedia";
    modalTreeSource.textContent =
      "By Byralaal - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=36551232";
  } else if ((modalTreeName.textContent = "Rhodendron (Rhododendron)")) {
    modalTreeFact.textContent =
      "Rhododendron is a very large genus of about 1,024 species of woody plants in the heath family (Ericaceae). They can be either evergreen or deciduous. -wikipedia";
    modalTreeSource.textContent =
      "By Brisbane City Council - Azalea as a Bonsai, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=23625694";
  } else if ((modalTreeName.textContent = "Silver Fern (Cyathea Dealbata)")) {
    modalTreeFact.textContent =
      " The crown is dense, and mature fronds tend to be about 4 metres (13 ft) long and have a silver-white colouration on the undersides. This distinctive silver colouration has made them useful for laying along tracks for night walking. -wikipedia";
    modalTreeSource.textContent =
      "By Tatania Gerus - https://www.flickr.com/photos/tgerus/2349086151/in/set-72157604396543621, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=4145474";
  } else if ((modalTreeName.textContent = "Panama Tree (Sterculia Apetala)")) {
    modalTreeFact.textContent =
      "Wood from Sterculia apetala is used to produce cases, crates, industrial and domestic woodware, canoes, and tool handles. The tree is often grown for shade, resulting from its large leaves. In some regions, seeds are consumed after being boiled or roasted, used to flavor chocolate, or given to animals as fodder. The flowers are used as antitussive. -wikipedia";
    modalTreeSource.textContent =
      "By Christian Pirkl - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=68367635";
  } else if ((modalTreeName.textContent = "Cinchona Officinalis (Cinchona)")) {
    modalTreeFact.textContent =
      "Cinchona officinalis is a medicinal plant, one of several Cinchona species used for the production of quinine, which is an anti-fever agent. It is especially useful in the prevention and treatment of malaria. Other alkaloids that are extracted from this tree include cinchonine, cinchonidine and quinidine. -wikipedia";
    modalTreeSource.textContent =
      "By Bentham-Moxon Trust.; Curtis, William; Curtis&#039;s botanical magazine dedications, 1827-1927: portraits and biographical notes.; Royal Botanic Gardens, Kew.; Stanley Smith Horticultural Trust. - https://www.flickr.com/photos/biodivlibrary/8272601122, Public Domain, https://commons.wikimedia.org/w/index.php?curid=42754692";
  } else if ((modalTreeName.textContent = "Narra (Pterocarpus Indicus)")) {
    modalTreeFact.textContent =
      "The hardwood, which is purplish, is termite-resistant and rose-scented. The wood known in Indonesia as amboyna is the burl of the tree, named after Ambon, where much of this material was originally found. Often amboyna is finely sliced to produce an extremely decorative veneer, used for decoration and in making of furniture and keys on a marimba. -wikipedia";
    modalTreeSource.textContent =
      "By Geographer - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=116052040";
  } else if ((modalTreeName.textContent = "Deodar (Cedrus Deodara)")) {
    modalTreeFact.textContent =
      "It is a large evergreen coniferous tree reaching 40-50 metres (131-164 feet) tall, exceptionally 60 m (197 ft) with a trunk up to 3 m (10 ft) in diameter. It has a conic crown with level branches and drooping branchlets. -wikipedia";
    modalTreeSource.textContent =
      "By Paul Evans from London, United Kingdom - DSC00483.JPG, CC BY 2.0, https://commons.wikimedia.org/w/index.php?curid=9471983";
  } else if ((modalTreeName.textContent = "Cork oak (Quercus Suber)")) {
    modalTreeFact.textContent =
      "Quercus suber, commonly called the cork oak, is a medium-sized, evergreen oak tree in the section Quercus sect. Cerris. It is the primary source of cork for wine bottle stoppers and other uses, such as cork flooring and as the cores of cricket balls. It is native to southwest Europe and northwest Africa. In the Mediterranean basin the tree is an ancient species with fossil remnants dating back to the Tertiary period. -wikipedia";
    modalTreeSource.textContent =
      "By Kent Wang from London, United Kingdom - Cork oak, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=73644853";
  } else if (
    (modalTreeName.textContent = "Lapacho (Handroanthus Impetiginosus)")
  ) {
    modalTreeFact.textContent =
      "The flowers are easily accessible to pollinators. Some hummingbirds - e.g. black jacobin (Florisuga fusca) and black-throated mango (Anthracothorax nigricollis) - seem to prefer them over the flowers of other Handroanthus species, while for others like the stripe-breasted starthroat (Heliomaster squamosus) it may even be a mainstay food source. -wikipedia";
    modalTreeSource.textContent =
      "By © 2006 Carla Antonini - Autoría propia., CC BY-SA 2.5 ar, https://commons.wikimedia.org/w/index.php?curid=1065154";
  } else if (
    (modalTreeName.textContent =
      "Christ's Thorn Jujube (Ziziphus Spinachristi)")
  ) {
    modalTreeFact.textContent =
      "The oldest known Z. spina-christi is located in Ir Ovot, in the south of Israel.[9] It is estimated to be between 1500 and 2000 years old.[10][11] It is believed locally to be the very tree from which Jesus' crown of thorns was made. -wikipedia";
    modalTreeSource.textContent =
      "By Meincluded - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=76058112";
  } else if ((modalTreeName.textContent = "Siberian Larch (Larix Sibricia)")) {
    modalTreeFact.textContent =
      "Because of its rot resistance, larch wood is especially valuable for posts, poles, railroad tie sleepers, and mine props. It is also used in many velodromes around the world as the track surface including the Manchester Velodrome and the Velodrome Krylatskoye in Moscow -wikipedia";
    modalTreeSource.textContent =
      "By Montréalais - No machine-readable source provided. Own work assumed (based on copyright claims).en.wikipedia.org, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=417632";
  } else if (
    (modalTreeName.textContent = "Phoenix Palm (Phoenix Dactylifera)")
  ) {
    modalTreeFact.textContent =
      "The fruit of P. dactylifera, the date of commerce, is large with a thick layer of fruit pulp, edible, very sweet and rich in sugar; the other species have only a thin layer of fruit pulp. Palms are felled to extract this central 'pith' which is dried, powdered, stored and used for preparation of bread in the Indian subcontinent. -wikipedia";
    modalTreeSource.textContent =
      "By Mmcknight4 - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=3717908";
  } else if (
    (modalTreeName.textContent = "Ornas Birch (Betual Pendula 'Dalecarlica')")
  ) {
    modalTreeFact.textContent =
      "The silver birch is a hardy tree, a pioneer species, and one of the first trees to appear on bare or fire-swept land. Many species of birds and animals are found in birch woodland, the tree supports a wide range of insects and the light shade it casts allows shrubby and other plants to grow beneath its canopy. -wikipedia";
    modalTreeSource.textContent =
      "By This image was produced by me, David Castor (user:dcastor) Own work, CC0, https://commons.wikimedia.org/w/index.php?curid=16363970";
  } else if ((modalTreeName.textContent = "Linden (Tilia)")) {
    modalTreeFact.textContent =
      "The linden is recommended as an ornamental tree when a mass of foliage or a deep shade is desired. It produces fragrant and nectar-producing flowers and is an important honey plant for beekeepers, giving rise to a pale but richly flavoured monofloral honey. -wikipedia";
    modalTreeSource.textContent =
      "By Bruce Marlin - Own work: http://www.cirrusimage.com/tree_silver_linden_upright.htm, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=5742109";
  } else if ((modalTreeName.textContent = "Maquilishuat (Tabebuia Rosea)")) {
    modalTreeFact.textContent =
      "Tabebuia rosea, also called pink poui, and rosy trumpet tree is a neotropical tree that grows up to 30 m (98 ft) and can reach a diameter at breast height of up to 100 cm (3 ft). -wikipedia";
    modalTreeSource.textContent =
      "By José David Villalobos Robles - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=2461295";
  } else if ((modalTreeName.textContent = "Ratchaphruek (Cassia Fistula)")) {
    modalTreeFact.textContent =
      "Cassia fistula, commonly known as golden shower, purging cassia, Indian laburnum, or pudding-pipe tree, is a flowering plant in the family Fabaceae. The species is native to the Indian subcontinent and adjacent regions of Southeast Asia, from southern Pakistan through India and Sri Lanka to Bangladesh, Myanmar and Thailand. It is a popular ornamental plant and is also used in herbal medicine. -wikipedia";
    modalTreeSource.textContent =
      "By Banswalhemant - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=90721202";
  } else if (
    (modalTreeName.textContent = "African Blackwood (Dalbergia Melanoxylon)")
  ) {
    modalTreeFact.textContent =
      "The timber is used mainly because of its machinability, density, dimensional stability, and moisture repellence. Those properties are particularly valued when used in woodwind instruments, principally clarinets, oboes, transverse flutes, piccolos, recorders, Highland pipes, and Northumbrian pipes. -wikipedia";
    modalTreeSource.textContent =
      "By Mogano at German Wikipedia, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=15864532";
  } else if ((modalTreeName.textContent = "Williow (Salix)")) {
    modalTreeFact.textContent =
      "Willows all have abundant watery bark sap, which is heavily charged with salicylic acid, soft, usually pliant, tough wood, slender branches, and large, fibrous, often stoloniferous roots. The roots are remarkable for their toughness, size, and tenacity to live, and roots readily sprout from aerial parts of the plant. -wikipedia";
    modalTreeSource.textContent =
      "By Bruce Marlin - Own work: http://www.cirrusimage.com/tree_golden_weeping_willow.htm, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=5726820";
  } else if (
    (modalTreeName.textContent = "Arbol de Artigas (eltphorum Dubium)")
  ) {
    modalTreeFact.textContent =
      "They grow on the riverbanks in the south of Brazil, the northeast of Argentina and Paraguay and in the north of Uruguay. They have also been planted along the avenues of Buenos Aires and Montevideo. They are tropical trees, but can grow to quite large specimens in temperate climates. -wikipedia";
    modalTreeSource.textContent =
      "By אבישי טייכר - Own work, Public Domain, https://commons.wikimedia.org/w/index.php?curid=2400587";
  } else if ((modalTreeName.textContent = "Araguaney (Tabeluia Chrysantha)")) {
    modalTreeFact.textContent =
      "On May 29, 1948, Handroanthus chrysanthus was declared the National Tree of Venezuela due to its status as an emblematic native species of extraordinary beauty. Its deep yellow resembles that of the Venezuelan flag. -wikipedia";
    modalTreeSource.textContent =
      "By José Reynaldo da Fonseca - Own work, CC BY 2.5, https://commons.wikimedia.org/w/index.php?curid=1161568";
  } else if ((modalTreeName.textContent = "Lotus (Nelumbo Nucifera)")) {
    modalTreeFact.textContent =
      "Nelumbo nucifera, also known as sacred lotus, Laxmi lotus, Indian lotus, or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae. It is sometimes colloquially called a water lily, though this more often refers to members of the family Nymphaeaceae. -wikipedia";
    modalTreeSource.textContent =
      "By T.Voekler - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=8142220";
  } else if (
    (modalTreeName.textContent = "Dragon Blood Tree (Dracaena Cinnabari)")
  ) {
    modalTreeFact.textContent =
      "The dragon blood tree has a unique and strange appearance, with an 'upturned, densely packed crown having the shape of an uprightly held umbrella'. This evergreen species is named after its dark red resin, which is known as 'dragon's blood'. -wikipedia";
    modalTreeSource.textContent =
      "By Boris Khvostichenko(User:Boriskhv) - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=7175533";
  } else if (
    (modalTreeName.textContent = "Real Yellowwood (Podocarpus Latifolius)")
  ) {
    modalTreeFact.textContent =
      "The real yellowwood is a large evergreen tree that grows up to 30 meters in height. It grows relatively slowly but forms a wood of exceptional quality. -wikipedia";
    modalTreeSource.textContent =
      "By Abu Shawka - Own workTransferred from en.wikipedia, Public Domain, https://commons.wikimedia.org/w/index.php?curid=12527782";
  } else {
    modalTreeFact.textContent =
      "oh dear there seems to be some sort of mistake, hopefully it will be resolved soon. Thank you for your patients";
    modalTreeSource.textContent = "ops";
  }
};
