/*
  BASE DE DONNÉES DES PERSONNALITÉS
  ---------------------------------
  Pour ajouter une personnalité : copier un bloc { ... }, le coller à la fin
  de la liste et modifier les champs. Rien d'autre à toucher.

  Champs :
    id          identifiant unique, sans espace ni accent (sert dans l'adresse : bio.html?id=...)
    nom         nom complet affiché
    region      "Afrique" ou "International"
    pays        pays d'origine
    domaine     "Musique", "Politique", "Science", "Environnement", "Histoire", "Droits civiques"...
    naissance   année de naissance
    deces       année de décès (laisser vide "" si la personne est vivante)
    accent      couleur principale de sa page (code hexadécimal)
    photo       portrait principal : { src, credit, page }
                -> utiliser des images libres de droits (Wikimedia Commons) :
                   src = lien de l'image, credit = "Auteur · Licence", page = page de l'image
    galerie     liste de { src, credit, page, legende } : photos d'illustration
    videos      liste de { youtube, titre, source } : youtube = l'identifiant de la vidéo
                (la partie après "v=" dans https://www.youtube.com/watch?v=XXXX)
    accroche    phrase d'ouverture
    resume      2 lignes affichées sur la carte de l'accueil
    chiffre     { valeur, label } : un chiffre fort mis en avant (facultatif, sinon null)
    chapitres   liste de { image, titre, texte, citation }
                texte en HTML simple, citation facultative,
                image facultative = numéro de la photo dans "galerie" (0 = la première)
    dates       liste de { annee, texte } : la chronologie
    conclusion  phrase finale
    sources     liste de { titre, url } : liens vers les sources
*/
window.PERSONNALITES = [
  {
    id: "angelique-kidjo",
    nom: "Angélique Kidjo",
    region: "Afrique",
    pays: "Bénin",
    domaine: "Musique",
    naissance: "1960",
    deces: "",
    accent: "#d9a441",
    photo: { src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Ang%C3%A9lique_Kidjo_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Library of Congress Life · CC0", page: "https://commons.wikimedia.org/wiki/File:Ang%C3%A9lique_Kidjo_2023.jpg" },
    galerie: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Ang%C3%A9lique_Kidjo.jpg/1280px-Ang%C3%A9lique_Kidjo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Joi · CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Ang%C3%A9lique_Kidjo.jpg", legende: "En 2008, l'année de son premier Grammy Award" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Festival_du_Bout_du_Monde_2019_-_Ang%C3%A9lique_Kidjo_-_020.jpg/1280px-Festival_du_Bout_du_Monde_2019_-_Ang%C3%A9lique_Kidjo_-_020.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Thesupermat · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Festival_du_Bout_du_Monde_2019_-_Ang%C3%A9lique_Kidjo_-_020.jpg", legende: "En concert au festival du Bout du Monde, 2019" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Angelique_Kidjo_Sound_Check_at_United_Nations_-_6813512952.jpg/1280px-Angelique_Kidjo_Sound_Check_at_United_Nations_-_6813512952.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "specialoperations · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Angelique_Kidjo_Sound_Check_at_United_Nations_-_6813512952.jpg", legende: "Répétition au siège des Nations unies, 2012" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Nobel_Peace_Prize_Concert_2011_Ang%C3%A9lique_Kidjo_Harry_Wad.jpg/1280px-Nobel_Peace_Prize_Concert_2011_Ang%C3%A9lique_Kidjo_Harry_Wad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Harrywad · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Nobel_Peace_Prize_Concert_2011_Ang%C3%A9lique_Kidjo_Harry_Wad.jpg", legende: "Au concert du prix Nobel de la paix, Oslo, 2011" }
    ],
    videos: [
      { youtube: "dlgESq5FAx4", titre: "« Agolo », le clip original (1994)", source: "Chaîne officielle d'Angélique Kidjo" },
      { youtube: "HKGm2PyzKSw", titre: "« Agolo » en live au Newport Jazz Festival, 2006", source: "Jazz on MV (officiel)" }
    ],
    accroche: "Elle est partie du Bénin avec un rêve. Aujourd'hui, le monde entier connaît son nom.",
    resume: "De Ouidah aux plus grandes scènes du monde : cinq Grammy Awards et un combat pour l'éducation des filles.",
    chiffre: { valeur: 5, label: "Grammy Awards" },
    chapitres: [
      {
        titre: "Tout commence à Ouidah…",
        texte: `<p>Le <strong>14 juillet 1960</strong>, quelques semaines avant l'indépendance du Dahomey, le futur Bénin, une petite fille naît à Ouidah. Elle grandit à Cotonou dans une famille où la musique est partout : sa mère dirige une troupe de théâtre, ses frères jouent dans un groupe.</p>
<p>À la maison, on écoute les rythmes traditionnels béninois, mais aussi James Brown, Miriam Makeba, Aretha Franklin ou les Beatles.</p>`,
        citation: "À seulement 6 ans, elle monte pour la première fois sur scène dans la troupe de sa mère."
      },
      {
        titre: "1983. Un aller simple pour Paris.",
        texte: `<p>Adolescente, elle est déjà connue au Bénin. Mais le régime attend des artistes qu'ils chantent à sa gloire, et elle refuse de mettre sa voix au service de la propagande.</p>
<p>En <strong>1983</strong>, elle part pour Paris, étudie le jazz et chante dans de petites formations. Loin de chez elle, elle comprend que sa force, ce sont ses racines.</p>`,
        citation: "Partir n'était pas fuir. C'était se donner une chance de porter sa voix plus loin."
      },
      {
        image: 1,
        titre: "Le monde découvre une voix.",
        texte: `<p>En <strong>1991</strong>, l'album <em>Logozo</em> la révèle à l'international, puis <em>Agolo</em> (1994) fait danser l'Europe et l'Amérique. Son secret : mêler les rythmes béninois au funk, à la soul, au jazz et à la pop.</p>
<p>Le magazine <em>Time</em> la surnomme « la première diva de l'Afrique ». Elle remporte cinq Grammy Awards entre 2008 et 2022.</p>`
      },
      {
        image: 2,
        titre: "Une voix pour celles qu'on n'entend pas.",
        texte: `<p>Ambassadrice de bonne volonté de l'<strong>UNICEF</strong> depuis 2002, elle crée en <strong>2006</strong> la <strong>Fondation Batonga</strong>, qui soutient l'éducation et l'autonomie des adolescentes en Afrique.</p>`,
        citation: "Une fille éduquée, c'est une famille, une communauté, un pays qui avancent."
      }
    ],
    dates: [
      { annee: "1960", texte: "Naissance à Ouidah (Dahomey, actuel Bénin)" },
      { annee: "1983", texte: "Départ pour Paris" },
      { annee: "1991", texte: "Album <em>Logozo</em>, révélation internationale" },
      { annee: "2002", texte: "Ambassadrice de bonne volonté de l'UNICEF" },
      { annee: "2006", texte: "Création de la Fondation Batonga" },
      { annee: "2008", texte: "1er Grammy Award pour <em>Djin Djin</em>" },
      { annee: "2022", texte: "5e Grammy Award pour <em>Mother Nature</em>" },
      { annee: "2023", texte: "Polar Music Prize" }
    ],
    conclusion: "Son histoire nous rappelle qu'on peut partir de ses racines, croire en son talent et porter la voix de tout un continent.",
    sources: [
      { titre: "Site officiel d'Angélique Kidjo", url: "https://www.kidjo.com" },
      { titre: "Polar Music Prize 2023", url: "https://www.polarmusicprize.org/laureates/angelique-kidjo" },
      { titre: "Wikipédia", url: "https://fr.wikipedia.org/wiki/Angélique_Kidjo" }
    ]
  },

  {
    id: "miriam-makeba",
    nom: "Miriam Makeba",
    region: "Afrique",
    pays: "Afrique du Sud",
    domaine: "Musique",
    naissance: "1932",
    deces: "2008",
    accent: "#c4552d",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Miriam_Makeba_%281969%29.jpg/1280px-Miriam_Makeba_%281969%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Rob Mieremet · Public domain", page: "https://commons.wikimedia.org/wiki/File:Miriam_Makeba_(1969).jpg" },
    galerie: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Miriam_Makeba10.JPG/1280px-Miriam_Makeba10.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Roland Godefroy · CC BY 3.0", page: "https://commons.wikimedia.org/wiki/File:Miriam_Makeba10.JPG", legende: "Avec Dizzy Gillespie à Deauville, 1991" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Case_de_Miriam_Makeba_%C3%A0_Dalaba.jpg/1280px-Case_de_Miriam_Makeba_%C3%A0_Dalaba.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Aboubacarkhoraa · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Case_de_Miriam_Makeba_%C3%A0_Dalaba.jpg", legende: "Sa maison de Dalaba, en Guinée, où elle vécut de 1969 à 1985" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Plaque_Rue_Miriam_Makeba_-_Pantin_%28FR93%29_-_2023-03-28_-_1.jpg/1280px-Plaque_Rue_Miriam_Makeba_-_Pantin_%28FR93%29_-_2023-03-28_-_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Chabe01 · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Plaque_Rue_Miriam_Makeba_-_Pantin_(FR93)_-_2023-03-28_-_1.jpg", legende: "Une rue porte son nom à Pantin, en France" }
    ],
    videos: [
      { youtube: "lNeP3hrm__k", titre: "« Pata Pata » en direct au Ed Sullivan Show, 1967", source: "Chaîne officielle de Miriam Makeba" }
    ],
    accroche: "On l'appelait « Mama Africa ». Sa voix a fait le tour du monde quand son pays lui fermait ses portes.",
    resume: "Chanteuse exilée pendant 30 ans, elle a fait connaître au monde entier la lutte contre l'apartheid.",
    chiffre: { valeur: 31, label: "années d'exil" },
    chapitres: [
      {
        titre: "Une voix née à Johannesburg.",
        texte: `<p>Zenzile Miriam Makeba naît le <strong>4 mars 1932</strong> près de Johannesburg. Elle chante dans les chorales d'école, puis dans des groupes vocaux qui la rendent célèbre en Afrique du Sud dans les années 1950.</p>`
      },
      {
        titre: "L'exil.",
        texte: `<p>En 1959, elle apparaît dans le film anti-apartheid <em>Come Back, Africa</em> et part le présenter à l'étranger. En <strong>1960</strong>, quand elle veut rentrer pour les funérailles de sa mère, le régime lui interdit le retour.</p>
<p>Elle s'installe aux États-Unis, où Harry Belafonte l'accompagne dans sa carrière.</p>`,
        citation: "Son pays lui ferme ses portes ; le monde entier lui ouvre les siennes."
      },
      {
        image: 1,
        titre: "La voix d'un combat.",
        texte: `<p>En <strong>1963</strong>, elle témoigne contre l'apartheid devant les Nations unies. En <strong>1966</strong>, elle devient l'une des premières artistes africaines à recevoir un Grammy Award. En 1967, <em>Pata Pata</em> devient un succès mondial.</p>
<p>Elle vit ensuite en Guinée et devient une figure du panafricanisme.</p>`
      },
      {
        image: 0,
        titre: "Le retour.",
        texte: `<p>En <strong>1990</strong>, après la libération de Nelson Mandela, elle rentre enfin chez elle. Elle meurt le <strong>10 novembre 2008</strong> en Italie, quelques minutes après être sortie de scène, au cours d'un concert contre la mafia.</p>`,
        citation: "Elle a chanté jusqu'au bout."
      }
    ],
    dates: [
      { annee: "1932", texte: "Naissance près de Johannesburg" },
      { annee: "1960", texte: "Interdite de retour en Afrique du Sud" },
      { annee: "1963", texte: "Discours contre l'apartheid à l'ONU" },
      { annee: "1966", texte: "Grammy Award avec Harry Belafonte" },
      { annee: "1967", texte: "Succès mondial de <em>Pata Pata</em>" },
      { annee: "1990", texte: "Retour en Afrique du Sud" },
      { annee: "2008", texte: "Décès en Italie, après un dernier concert" }
    ],
    conclusion: "Mama Africa a prouvé qu'une chanson peut être une arme de liberté.",
    sources: [
      { titre: "Wikipédia", url: "https://fr.wikipedia.org/wiki/Miriam_Makeba" }
    ]
  },

  {
    id: "nelson-mandela",
    nom: "Nelson Mandela",
    region: "Afrique",
    pays: "Afrique du Sud",
    domaine: "Politique",
    naissance: "1918",
    deces: "2013",
    accent: "#3f8f5a",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/1280px-Nelson_Mandela_1994.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Kingkongphoto & www.celebrity-photos.com from Laurel · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Nelson_Mandela_1994.jpg" },
    galerie: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Young_Mandela.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Auteur inconnu · Public domain", page: "https://commons.wikimedia.org/wiki/File:Young_Mandela.jpg", legende: "Le jeune Nelson Mandela, 1937" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Nelson_Mandela%27s_prison_cell%2C_Robben_Island%2C_South_Africa.jpg/1280px-Nelson_Mandela%27s_prison_cell%2C_Robben_Island%2C_South_Africa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Paul Mannix · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Nelson_Mandela%27s_prison_cell,_Robben_Island,_South_Africa.jpg", legende: "Sa cellule à la prison de Robben Island" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Frederik_de_Klerk_with_Nelson_Mandela_-_World_Economic_Forum_Annual_Meeting_Davos_1992.jpg/1280px-Frederik_de_Klerk_with_Nelson_Mandela_-_World_Economic_Forum_Annual_Meeting_Davos_1992.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "World Economic Forum (www.weforum.org) · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Frederik_de_Klerk_with_Nelson_Mandela_-_World_Economic_Forum_Annual_Meeting_Davos_1992.jpg", legende: "Avec Frederik de Klerk à Davos, 1992" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Mandela_voting_in_1994.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Paul Weinberg · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Mandela_voting_in_1994.jpg", legende: "Il vote pour la première fois de sa vie, 27 avril 1994" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Nelson_Mandela_Statue%2C_London.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "flowcomm · CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Nelson_Mandela_Statue,_London.jpg", legende: "Sa statue à Parliament Square, Londres" }
    ],
    videos: [
      { youtube: "HPYH4dcLOA4", titre: "La libération, 11 février 1990", source: "Nelson Mandela Foundation" },
      { youtube: "0so3LN4bRW4", titre: "Images d'archives de sa sortie de prison", source: "ITN" }
    ],
    accroche: "27 ans de prison n'ont pas brisé un homme. Ils ont forgé un symbole.",
    resume: "Du bagne de Robben Island à la présidence : le combat d'une vie contre l'apartheid.",
    chiffre: { valeur: 27, label: "années de prison" },
    chapitres: [
      {
        image: 0,
        titre: "Un enfant de Mvezo.",
        texte: `<p>Rolihlahla Mandela naît le <strong>18 juillet 1918</strong> à Mvezo, dans l'actuelle province du Cap-Oriental. Son institutrice lui donne le prénom de Nelson. Il étudie le droit et ouvre à Johannesburg le premier cabinet d'avocats noirs du pays.</p>`
      },
      {
        titre: "Le combat.",
        texte: `<p>Membre de l'<strong>ANC</strong> dès 1944, il lutte contre l'apartheid. Après le massacre de Sharpeville (1960), il prend la tête de la lutte armée. Au procès de Rivonia, en <strong>1964</strong>, il est condamné à la prison à vie.</p>`,
        citation: "Il préfère risquer sa vie plutôt que renoncer à l'idéal d'une société libre et démocratique."
      },
      {
        image: 1,
        titre: "27 ans derrière les barreaux.",
        texte: `<p>Il passe 18 ans sur l'île-prison de <strong>Robben Island</strong>. Le monde entier réclame sa libération. Le <strong>11 février 1990</strong>, il sort enfin de prison, le poing levé.</p>`
      },
      {
        image: 3,
        titre: "Le président de la réconciliation.",
        texte: `<p>Prix Nobel de la paix en <strong>1993</strong>, il devient en <strong>1994</strong> le premier président noir d'Afrique du Sud, élu lors des premières élections multiraciales. Il choisit le pardon plutôt que la vengeance.</p>`,
        citation: "La « nation arc-en-ciel » était née."
      }
    ],
    dates: [
      { annee: "1918", texte: "Naissance à Mvezo" },
      { annee: "1944", texte: "Entrée à l'ANC" },
      { annee: "1964", texte: "Condamnation à la prison à vie" },
      { annee: "1990", texte: "Libération le 11 février" },
      { annee: "1993", texte: "Prix Nobel de la paix" },
      { annee: "1994", texte: "Élu président de l'Afrique du Sud" },
      { annee: "2013", texte: "Décès le 5 décembre à Johannesburg" }
    ],
    conclusion: "Chaque 18 juillet, le monde célèbre la Journée internationale Nelson Mandela.",
    sources: [
      { titre: "Nelson Mandela Foundation", url: "https://www.nelsonmandela.org" },
      { titre: "Prix Nobel de la paix 1993", url: "https://www.nobelprize.org/prizes/peace/1993/mandela/facts/" },
      { titre: "Journée Nelson Mandela (ONU)", url: "https://www.un.org/en/events/mandeladay/" },
      { titre: "Wikipédia", url: "https://fr.wikipedia.org/wiki/Nelson_Mandela" }
    ]
  },

  {
    id: "wangari-maathai",
    nom: "Wangari Maathai",
    region: "Afrique",
    pays: "Kenya",
    domaine: "Environnement",
    naissance: "1940",
    deces: "2011",
    accent: "#5c9e3c",
    photo: { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Wangari_Matthai_2001_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Kingkongphoto & www.celebrity-photos.com from Laurel Maryland, USA · CC BY-SA 2.0", page: "https://commons.wikimedia.org/wiki/File:Wangari_Matthai_2001_(cropped).jpg" },
    galerie: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Maathai_and_Obama_in_Nairobi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Fredrick Onyango from Nairobi, Kenya · CC BY 2.0", page: "https://commons.wikimedia.org/wiki/File:Maathai_and_Obama_in_Nairobi.jpg", legende: "Plantation d'un arbre avec Barack Obama, alors sénateur, à Nairobi" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Gedenktafel_Albrechtstr_2_%28Mitte%29_Wangari_Maathai.jpg/1280px-Gedenktafel_Albrechtstr_2_%28Mitte%29_Wangari_Maathai.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "OTFW, Berlin · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Gedenktafel_Albrechtstr_2_(Mitte)_Wangari_Maathai.jpg", legende: "Plaque commémorative à Berlin" }
    ],
    videos: [
      { youtube: "IGMW6YWjMxw", titre: "« I will be a hummingbird » : la fable du colibri, racontée par elle-même", source: "Dirt! The Movie" }
    ],
    accroche: "Elle a commencé par planter un arbre. Des millions d'autres ont suivi.",
    resume: "Fondatrice du Green Belt Movement, première femme africaine prix Nobel de la paix.",
    chiffre: { valeur: 51, label: "millions d'arbres plantés" },
    chapitres: [
      {
        titre: "Une enfance au pied du mont Kenya.",
        texte: `<p>Wangari Muta Maathai naît le <strong>1er avril 1940</strong> dans la région de Nyeri, au Kenya. Brillante élève, elle obtient une bourse pour étudier la biologie aux États-Unis.</p>
<p>En <strong>1971</strong>, elle devient la première femme d'Afrique de l'Est et centrale à obtenir un doctorat.</p>`
      },
      {
        image: 0,
        titre: "Le Green Belt Movement.",
        texte: `<p>Elle voit les forêts disparaître, les sources se tarir, les femmes marcher toujours plus loin pour trouver du bois. En <strong>1977</strong>, elle fonde le <strong>Green Belt Movement</strong> : des femmes rurales sont payées pour planter des arbres.</p>`,
        citation: "Planter un arbre, c'est planter de l'espoir."
      },
      {
        titre: "Face au pouvoir.",
        texte: `<p>Elle s'oppose au gouvernement pour protéger les forêts et les parcs. Elle est arrêtée et battue à plusieurs reprises, mais ne renonce jamais.</p>`
      },
      {
        titre: "Le Nobel.",
        texte: `<p>En <strong>2004</strong>, elle devient la <strong>première femme africaine</strong> à recevoir le prix Nobel de la paix, pour sa contribution au développement durable, à la démocratie et à la paix.</p>`
      }
    ],
    dates: [
      { annee: "1940", texte: "Naissance dans la région de Nyeri" },
      { annee: "1971", texte: "Doctorat à l'Université de Nairobi" },
      { annee: "1977", texte: "Fondation du Green Belt Movement" },
      { annee: "2002", texte: "Élue députée" },
      { annee: "2004", texte: "Prix Nobel de la paix" },
      { annee: "2011", texte: "Décès à Nairobi le 25 septembre" }
    ],
    conclusion: "Elle a montré que protéger la terre, c'est aussi défendre la dignité des peuples.",
    sources: [
      { titre: "Green Belt Movement", url: "https://www.greenbeltmovement.org" },
      { titre: "Prix Nobel de la paix 2004", url: "https://www.nobelprize.org/prizes/peace/2004/maathai/facts/" },
      { titre: "Wikipédia", url: "https://fr.wikipedia.org/wiki/Wangari_Muta_Maathai" }
    ]
  },

  {
    id: "cheikh-anta-diop",
    nom: "Cheikh Anta Diop",
    region: "Afrique",
    pays: "Sénégal",
    domaine: "Histoire",
    naissance: "1923",
    deces: "1986",
    accent: "#b0743b",
    photo: { src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Cheikh_Anta_Diop%2C_late_1940s.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Auteur inconnu · Public domain", page: "https://commons.wikimedia.org/wiki/File:Cheikh_Anta_Diop,_late_1940s.jpg" },
    galerie: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Plaque_Cheikh_Anta_Diop%2C_31_rue_des_%C3%89coles%2C_Paris_5e.jpg/1280px-Plaque_Cheikh_Anta_Diop%2C_31_rue_des_%C3%89coles%2C_Paris_5e.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Celette · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Plaque_Cheikh_Anta_Diop,_31_rue_des_%C3%89coles,_Paris_5e.jpg", legende: "Plaque en son honneur, rue des Écoles à Paris" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Lecture_%C3%A0_la_librairie.jpg/1280px-Lecture_%C3%A0_la_librairie.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "JN PICTURE · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Lecture_%C3%A0_la_librairie.jpg", legende: "Une étudiante lit son livre « L'unité culturelle de l'Afrique noire », 2021" }
    ],
    videos: [
      { youtube: "AkvVH4hiwv0", titre: "Entretien dans l'émission « For the People », 1985 (en anglais)", source: "South Carolina ETV" }
    ],
    accroche: "Il a rendu à l'Afrique son histoire, et à des millions d'Africains leur fierté.",
    resume: "Historien, physicien et anthropologue sénégalais, pionnier de l'histoire africaine.",
    chiffre: null,
    chapitres: [
      {
        image: 0,
        titre: "De Thieytou à Paris.",
        texte: `<p>Cheikh Anta Diop naît le <strong>29 décembre 1923</strong> à Thieytou, dans la région de Diourbel, au Sénégal. Après son baccalauréat, il part à Paris en 1946 étudier la physique, la chimie, la philosophie et l'histoire.</p>`
      },
      {
        titre: "Nations nègres et culture.",
        texte: `<p>En <strong>1954</strong>, il publie <em>Nations nègres et culture</em>, qui défend l'idée que l'Égypte ancienne fait partie de l'histoire africaine. Le livre fait scandale dans le monde universitaire, et inspire toute une génération.</p>`,
        citation: "Un livre qui bouleverse le regard porté sur l'histoire de l'Afrique."
      },
      {
        titre: "Le savant.",
        texte: `<p>Il obtient son doctorat en <strong>1960</strong> et rentre au Sénégal. En <strong>1966</strong>, il crée à Dakar un laboratoire de datation au carbone 14, l'un des premiers d'Afrique.</p>
<p>Il s'engage aussi en politique et fonde plusieurs partis d'opposition.</p>`
      },
      {
        image: 1,
        titre: "L'héritage.",
        texte: `<p>Il meurt le <strong>7 février 1986</strong> à Dakar. Un an plus tard, l'Université de Dakar prend le nom d'<strong>Université Cheikh Anta Diop</strong>.</p>`
      }
    ],
    dates: [
      { annee: "1923", texte: "Naissance à Thieytou (Sénégal)" },
      { annee: "1946", texte: "Départ pour Paris" },
      { annee: "1954", texte: "Publication de <em>Nations nègres et culture</em>" },
      { annee: "1960", texte: "Doctorat ès lettres" },
      { annee: "1966", texte: "Laboratoire de carbone 14 à l'IFAN de Dakar" },
      { annee: "1986", texte: "Décès à Dakar le 7 février" },
      { annee: "1987", texte: "L'Université de Dakar prend son nom" }
    ],
    conclusion: "Son œuvre continue d'inspirer chercheurs et étudiants dans toute l'Afrique.",
    sources: [
      { titre: "Université Cheikh Anta Diop de Dakar", url: "https://www.ucad.sn" },
      { titre: "Wikipédia", url: "https://fr.wikipedia.org/wiki/Cheikh_Anta_Diop" }
    ]
  },

  {
    id: "marie-curie",
    nom: "Marie Curie",
    region: "International",
    pays: "Pologne / France",
    domaine: "Science",
    naissance: "1867",
    deces: "1934",
    accent: "#6f8fd6",
    photo: { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/1280px-Marie_Curie_c1920.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Henri Manuel · Public domain", page: "https://commons.wikimedia.org/wiki/File:Marie_Curie_c1920.jpg" },
    galerie: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Pierre_and_Marie_Curie.jpg/1280px-Pierre_and_Marie_Curie.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Auteur inconnu · Public domain", page: "https://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg", legende: "Avec Pierre Curie dans leur laboratoire" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Curie_and_Poincare_1911_Solvay.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Auteur inconnu · Public domain", page: "https://commons.wikimedia.org/wiki/File:Curie_and_Poincare_1911_Solvay.jpg", legende: "Avec Henri Poincaré au congrès Solvay, 1911" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Marie_Sk%C5%82odowska-Curie%27s_Nobel_Prize_in_Chemistry_1911.jpg/1280px-Marie_Sk%C5%82odowska-Curie%27s_Nobel_Prize_in_Chemistry_1911.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Nobel Foundation, diploma by Sofia Gisberg[1] · Public domain", page: "https://commons.wikimedia.org/wiki/File:Marie_Sk%C5%82odowska-Curie%27s_Nobel_Prize_in_Chemistry_1911.jpg", legende: "Son diplôme du prix Nobel de chimie, 1911" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Panth%C3%A9on_Pierre_et_Marie_Curie.JPG/1280px-Panth%C3%A9on_Pierre_et_Marie_Curie.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Rémih · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Panth%C3%A9on_Pierre_et_Marie_Curie.JPG", legende: "Sa tombe au Panthéon, à Paris" }
    ],
    videos: [
      { youtube: "Bf7wdUXuG-g", titre: "Marie Curie, double prix Nobel : documentaire (en anglais)", source: "The People Profiles" }
    ],
    accroche: "Première femme prix Nobel. Et la seule personne récompensée dans deux sciences différentes.",
    resume: "Pionnière de la radioactivité, deux fois prix Nobel, en physique puis en chimie.",
    chiffre: { valeur: 2, label: "prix Nobel" },
    chapitres: [
      {
        titre: "Une élève brillante à Varsovie.",
        texte: `<p>Maria Skłodowska naît le <strong>7 novembre 1867</strong> à Varsovie. Les universités polonaises sont fermées aux femmes : elle étudie en cachette, travaille comme gouvernante et économise pour partir.</p>`
      },
      {
        image: 0,
        titre: "Paris, la Sorbonne et Pierre.",
        texte: `<p>En <strong>1891</strong>, elle s'inscrit à la Sorbonne. Elle y rencontre le physicien <strong>Pierre Curie</strong>, qu'elle épouse en 1895. Ensemble, ils découvrent en 1898 deux nouveaux éléments : le <strong>polonium</strong> et le <strong>radium</strong>.</p>`,
        citation: "Elle nomme le polonium en hommage à sa Pologne natale."
      },
      {
        image: 2,
        titre: "Deux prix Nobel.",
        texte: `<p>En <strong>1903</strong>, elle partage le prix Nobel de physique : c'est la première femme récompensée. Après la mort accidentelle de Pierre en 1906, elle devient la première femme professeure à la Sorbonne.</p>
<p>En <strong>1911</strong>, elle reçoit seule le prix Nobel de chimie.</p>`
      },
      {
        image: 3,
        titre: "Au service des autres.",
        texte: `<p>Pendant la Première Guerre mondiale, elle équipe des voitures de radiologie, les « petites Curie », pour soigner les blessés près du front. Elle meurt le <strong>4 juillet 1934</strong>, victime des radiations qu'elle a étudiées toute sa vie.</p>`
      }
    ],
    dates: [
      { annee: "1867", texte: "Naissance à Varsovie" },
      { annee: "1891", texte: "Arrivée à Paris, études à la Sorbonne" },
      { annee: "1898", texte: "Découverte du polonium et du radium" },
      { annee: "1903", texte: "Prix Nobel de physique" },
      { annee: "1911", texte: "Prix Nobel de chimie" },
      { annee: "1934", texte: "Décès en Haute-Savoie" },
      { annee: "1995", texte: "Entrée au Panthéon" }
    ],
    conclusion: "Elle a ouvert les portes de la science à des générations de femmes.",
    sources: [
      { titre: "Musée Curie", url: "https://musee.curie.fr" },
      { titre: "Prix Nobel de physique 1903", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/" },
      { titre: "Prix Nobel de chimie 1911", url: "https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/facts/" },
      { titre: "Wikipédia", url: "https://fr.wikipedia.org/wiki/Marie_Curie" }
    ]
  },

  {
    id: "martin-luther-king",
    nom: "Martin Luther King Jr.",
    region: "International",
    pays: "États-Unis",
    domaine: "Droits civiques",
    naissance: "1929",
    deces: "1968",
    accent: "#8a6fd1",
    photo: { src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Martin_Luther_King%2C_Jr..jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "Bernie Faingold · Public domain", page: "https://commons.wikimedia.org/wiki/File:Martin_Luther_King,_Jr..jpg" },
    galerie: [
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Martin_Luther_King_-_March_on_Washington.jpg/1280px-Martin_Luther_King_-_March_on_Washington.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Rowland Scherman · Public domain", page: "https://commons.wikimedia.org/wiki/File:Martin_Luther_King_-_March_on_Washington.jpg", legende: "Son discours à la marche sur Washington, 28 août 1963" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/3/3d/View_of_Crowd_at_1963_March_on_Washington.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled", credit: "U.S. Information Agency, Press and Publications Service. · Public domain", page: "https://commons.wikimedia.org/wiki/File:View_of_Crowd_at_1963_March_on_Washington.jpg", legende: "La foule de la marche sur Washington" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg/1280px-Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Cecil Stoughton, White House Press Office (WHPO) · Public domain", page: "https://commons.wikimedia.org/wiki/File:Lyndon_Johnson_signing_Civil_Rights_Act,_July_2,_1964.jpg", legende: "Signature du Civil Rights Act, 2 juillet 1964" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Rosa_Parks_Bus.jpg/1280px-Rosa_Parks_Bus.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Rmhermen · CC BY-SA 3.0", page: "https://commons.wikimedia.org/wiki/File:Rosa_Parks_Bus.jpg", legende: "Le bus de Rosa Parks, exposé au Henry Ford Museum" },
      { src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Lorraine_Motel_Memphis.jpg/1280px-Lorraine_Motel_Memphis.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail", credit: "Y.Leclercq© · CC BY-SA 4.0", page: "https://commons.wikimedia.org/wiki/File:Lorraine_Motel_Memphis.jpg", legende: "Le Lorraine Motel à Memphis, aujourd'hui musée" }
    ],
    videos: [
      { youtube: "vW8IsNGEDmQ", titre: "Le discours « I Have a Dream » en intégralité, 1963", source: "The Australian" }
    ],
    accroche: "Il avait un rêve. Et il a fait marcher toute une nation vers lui.",
    resume: "Pasteur et leader non violent du mouvement des droits civiques aux États-Unis.",
    chiffre: { valeur: 250000, label: "personnes à la marche sur Washington" },
    chapitres: [
      {
        titre: "Un fils de pasteur à Atlanta.",
        texte: `<p>Martin Luther King Jr. naît le <strong>15 janvier 1929</strong> à Atlanta, dans un Sud des États-Unis où la ségrégation raciale est la loi. Il devient pasteur, comme son père, et s'inspire de la non-violence de Gandhi.</p>`
      },
      {
        image: 3,
        titre: "Montgomery.",
        texte: `<p>En <strong>1955</strong>, Rosa Parks refuse de céder sa place à un Blanc dans un bus. King, 26 ans, prend la tête du boycott des bus de Montgomery. Après plus d'un an de lutte, la Cour suprême déclare la ségrégation dans les bus illégale.</p>`
      },
      {
        image: 0,
        titre: "« I Have a Dream ».",
        texte: `<p>Le <strong>28 août 1963</strong>, devant environ 250 000 personnes réunies à Washington, il prononce son discours le plus célèbre. En <strong>1964</strong>, il reçoit le prix Nobel de la paix, à 35 ans.</p>
<p>Les lois sur les droits civiques (1964) et sur le droit de vote (1965) suivent.</p>`,
        citation: "Un rêve d'égalité devenu l'un des discours les plus célèbres de l'histoire."
      },
      {
        image: 4,
        titre: "Memphis.",
        texte: `<p>Le <strong>4 avril 1968</strong>, il est assassiné à Memphis, où il soutenait une grève d'éboueurs. Depuis 1986, un jour férié lui est consacré aux États-Unis.</p>`
      }
    ],
    dates: [
      { annee: "1929", texte: "Naissance à Atlanta" },
      { annee: "1955", texte: "Boycott des bus de Montgomery" },
      { annee: "1963", texte: "Discours « I Have a Dream »" },
      { annee: "1964", texte: "Prix Nobel de la paix" },
      { annee: "1965", texte: "Loi sur le droit de vote" },
      { annee: "1968", texte: "Assassinat à Memphis le 4 avril" }
    ],
    conclusion: "Son message de justice et de non-violence résonne encore partout dans le monde.",
    sources: [
      { titre: "The King Center", url: "https://thekingcenter.org" },
      { titre: "Prix Nobel de la paix 1964", url: "https://www.nobelprize.org/prizes/peace/1964/king/facts/" },
      { titre: "Wikipédia", url: "https://fr.wikipedia.org/wiki/Martin_Luther_King" }
    ]
  }
];
