/* ---------- Vocabulaire ----------
 k : pers (personne), start (début de phrase), noun (objet), body (corps), feel (ressenti), verb (action), place (lieu), soc (social), q (question)
 FR : g = m | f | p (pluriel), m = se dit « du / de la » (quantité), pos = forme possessive, d = on dit « la télé »
 EN : ec = mass | count | pl, enp = pluriel, epos = possessif, gb = variante britannique */
const W = [
  /* Début : personnes */
  { id: 'maman', cat: 'debut', k: 'pers', fr: 'Maman', en: 'Mom', gb: 'Mum' },
  { id: 'papa', cat: 'debut', k: 'pers', fr: 'Papa', en: 'Dad' },
  { id: 'frere', cat: 'debut', k: 'pers', lbl: 'Frère', fr: 'mon frère', en: 'my brother', elbl: 'Brother' },
  { id: 'soeur', cat: 'debut', k: 'pers', lbl: 'Sœur', fr: 'ma sœur', en: 'my sister', elbl: 'Sister' },
  { id: 'mamie', cat: 'debut', k: 'pers', fr: 'Mamie', en: 'Grandma', gb: 'Granny' },
  { id: 'papy', cat: 'debut', k: 'pers', fr: 'Papy', en: 'Grandpa' },
  { id: 'maitresse', cat: 'debut', k: 'pers', lbl: 'Maîtresse', fr: 'Maîtresse', en: 'Teacher' },
  { id: 'tous', cat: 'debut', k: 'pers', lbl: 'Tout le monde', fr: 'tout le monde', en: 'everyone', elbl: 'Everyone' },
  /* Début : débuts de phrase */
  { id: 'veux', cat: 'debut', k: 'start', fr: 'je veux', lbl: 'Je veux', en: 'I want', go: 'manger' },
  { id: 'neveux', cat: 'debut', k: 'start', col: 'neg', fr: 'je ne veux pas', lbl: 'Je ne veux pas', en: "I don't want", go: 'manger' },
  { id: 'mal', cat: 'debut', k: 'start', col: 'neg', fr: "j'ai mal", lbl: "J'ai mal", en: 'it hurts', elbl: 'It hurts', go: 'corps' },
  { id: 'suis', cat: 'debut', k: 'start', fr: 'je suis', lbl: 'Je suis', en: "I'm", go: 'emotions' },
  { id: 'aime', cat: 'debut', k: 'start', fr: "j'aime", lbl: "J'aime", en: 'I like' },
  { id: 'naime', cat: 'debut', k: 'start', col: 'neg', fr: "je n'aime pas", lbl: "Je n'aime pas", en: "I don't like" },
  { id: 'besoin', cat: 'debut', k: 'start', fr: "j'ai besoin", lbl: "J'ai besoin de", en: 'I need', go: 'faire' },
  { id: 'vais', cat: 'debut', k: 'start', fr: 'je vais', lbl: 'Je vais', en: "I'm going", go: 'lieux' },
  { id: 'ouest', cat: 'debut', k: 'start', col: 'q', fr: 'où est', lbl: 'Où est', en: 'where is', elbl: 'Where is', go: 'objets' },
  { id: 'cest', cat: 'debut', k: 'start', fr: "c'est", lbl: "C'est", en: "it's", elbl: "It's" },
  /* Début : social et questions (dits tout de suite) */
  { id: 'bonjour', cat: 'debut', k: 'soc', fr: 'Bonjour', en: 'Hello' },
  { id: 'aurevoir', cat: 'debut', k: 'soc', fr: 'Au revoir', en: 'Goodbye' },
  { id: 'merci', cat: 'debut', k: 'soc', fr: 'Merci', en: 'Thank you' },
  { id: 'stp', cat: 'debut', k: 'soc', fr: "S'il te plaît", en: 'Please' },
  { id: 'pardon', cat: 'debut', k: 'soc', fr: 'Pardon', en: 'Sorry' },
  { id: 'bravo', cat: 'debut', k: 'soc', fr: 'Bravo', en: 'Well done' },
  { id: 'attends', cat: 'debut', k: 'soc', fr: 'Attends', en: 'Wait' },
  { id: 'regarde', cat: 'debut', k: 'soc', fr: 'Regarde', en: 'Look' },
  { id: 'jesaispas', cat: 'debut', k: 'soc', fr: 'Je ne sais pas', en: "I don't know" },
  { id: 'qui', cat: 'debut', k: 'q', lbl: 'Qui ?', fr: 'Qui ?', en: 'Who?' },
  { id: 'quoi', cat: 'debut', k: 'q', lbl: 'Quoi ?', fr: "Qu'est-ce que c'est ?", en: 'What is it?', elbl: 'What?' },
  { id: 'quand', cat: 'debut', k: 'q', lbl: 'Quand ?', fr: 'Quand ?', en: 'When?' },
  { id: 'ami', cat: 'debut', k: 'pers', lbl: 'Copain', fr: 'mon copain', en: 'my friend', elbl: 'Friend' },
  /* Manger */
  { id: 'eau', cat: 'manger', k: 'noun', fr: 'eau', g: 'f', m: 1, en: 'water', ec: 'mass' },
  { id: 'lait', cat: 'manger', k: 'noun', fr: 'lait', g: 'm', m: 1, en: 'milk', ec: 'mass' },
  { id: 'jus', cat: 'manger', k: 'noun', fr: 'jus', g: 'm', m: 1, en: 'juice', ec: 'mass' },
  { id: 'pain', cat: 'manger', k: 'noun', fr: 'pain', g: 'm', m: 1, en: 'bread', ec: 'mass' },
  { id: 'pomme', cat: 'manger', k: 'noun', fr: 'pomme', g: 'f', en: 'apple', ec: 'count' },
  { id: 'banane', cat: 'manger', k: 'noun', fr: 'banane', g: 'f', en: 'banana', ec: 'count' },
  { id: 'gateau', cat: 'manger', k: 'noun', fr: 'gâteau', g: 'm', m: 1, en: 'cake', ec: 'mass' },
  { id: 'chocolat', cat: 'manger', k: 'noun', fr: 'chocolat', g: 'm', m: 1, en: 'chocolate', ec: 'mass' },
  { id: 'pates', cat: 'manger', k: 'noun', fr: 'pâtes', g: 'p', en: 'pasta', ec: 'mass' },
  { id: 'riz', cat: 'manger', k: 'noun', fr: 'riz', g: 'm', m: 1, en: 'rice', ec: 'mass' },
  { id: 'soupe', cat: 'manger', k: 'noun', fr: 'soupe', g: 'f', m: 1, en: 'soup', ec: 'mass' },
  { id: 'yaourt', cat: 'manger', k: 'noun', fr: 'yaourt', g: 'm', en: 'yogurt', gb: 'yoghurt', ec: 'count' },
  { id: 'fromage', cat: 'manger', k: 'noun', fr: 'fromage', g: 'm', m: 1, en: 'cheese', ec: 'mass' },
  { id: 'biscuit', cat: 'manger', k: 'noun', fr: 'biscuit', g: 'm', en: 'cookie', gb: 'biscuit', ec: 'count' },
  { id: 'frites', cat: 'manger', k: 'noun', fr: 'frites', g: 'p', en: 'fries', gb: 'chips', ec: 'pl' },
  { id: 'compote', cat: 'manger', k: 'noun', fr: 'compote', g: 'f', m: 1, en: 'applesauce', gb: 'apple purée', ec: 'mass' },
  { id: 'bonbon', cat: 'manger', k: 'noun', fr: 'bonbon', g: 'm', en: 'candy', gb: 'sweet', ec: 'count' },
  { id: 'legumes', cat: 'manger', k: 'noun', fr: 'légumes', g: 'p', en: 'vegetables', ec: 'pl' },
  { id: 'viande', cat: 'manger', k: 'noun', fr: 'viande', g: 'f', m: 1, en: 'meat', ec: 'mass' },
  { id: 'gouter', cat: 'manger', k: 'noun', fr: 'goûter', g: 'm', en: 'snack', ec: 'count' },
  /* Corps */
  { id: 'tete', cat: 'corps', k: 'body', fr: 'tête', g: 'f', en: 'head' },
  { id: 'ventre', cat: 'corps', k: 'body', fr: 'ventre', g: 'm', en: 'tummy' },
  { id: 'dents', cat: 'corps', k: 'body', fr: 'dents', g: 'p', en: 'teeth', pl: 1 },
  { id: 'gorge', cat: 'corps', k: 'body', fr: 'gorge', g: 'f', en: 'throat' },
  { id: 'oreille', cat: 'corps', k: 'body', fr: 'oreille', g: 'f', en: 'ear' },
  { id: 'oeil', cat: 'corps', k: 'body', fr: 'œil', g: 'm', en: 'eye' },
  { id: 'nez', cat: 'corps', k: 'body', fr: 'nez', g: 'm', en: 'nose' },
  { id: 'dos', cat: 'corps', k: 'body', fr: 'dos', g: 'm', en: 'back' },
  { id: 'bras', cat: 'corps', k: 'body', fr: 'bras', g: 'm', en: 'arm' },
  { id: 'main', cat: 'corps', k: 'body', fr: 'main', g: 'f', en: 'hand' },
  { id: 'jambe', cat: 'corps', k: 'body', fr: 'jambe', g: 'f', en: 'leg' },
  { id: 'pied', cat: 'corps', k: 'body', fr: 'pied', g: 'm', en: 'foot' },
  { id: 'partout', cat: 'corps', k: 'body', fr: 'partout', raw: 1, en: 'everywhere' },
  /* Ressentir */
  { id: 'content', cat: 'emotions', k: 'feel', fr: ['content', 'contente'], en: 'happy' },
  { id: 'triste', cat: 'emotions', k: 'feel', fr: ['triste', 'triste'], en: 'sad' },
  { id: 'colere', cat: 'emotions', k: 'feel', fr: ['en colère', 'en colère'], en: 'angry' },
  { id: 'fatigue', cat: 'emotions', k: 'feel', fr: ['fatigué', 'fatiguée'], en: 'tired' },
  { id: 'peur', cat: 'emotions', k: 'feel', av: 1, fr: 'peur', en: 'scared' },
  { id: 'malade', cat: 'emotions', k: 'feel', fr: ['malade', 'malade'], en: 'sick', gb: 'poorly' },
  { id: 'calme', cat: 'emotions', k: 'feel', fr: ['calme', 'calme'], en: 'calm' },
  { id: 'surpris', cat: 'emotions', k: 'feel', fr: ['surpris', 'surprise'], en: 'surprised' },
  { id: 'faim', cat: 'emotions', k: 'feel', av: 1, fr: 'faim', en: 'hungry' },
  { id: 'soif', cat: 'emotions', k: 'feel', av: 1, fr: 'soif', en: 'thirsty' },
  { id: 'chaud', cat: 'emotions', k: 'feel', av: 1, fr: 'chaud', en: 'hot' },
  { id: 'froid', cat: 'emotions', k: 'feel', av: 1, fr: 'froid', en: 'cold' },
  { id: 'ennui', cat: 'emotions', k: 'feel', fx: "je m'ennuie", lbl: "Je m'ennuie", fr: 'ennui', en: 'bored' },
  /* Faire */
  { id: 'jouer', cat: 'faire', k: 'verb', fr: 'jouer', en: 'play' },
  { id: 'manger', cat: 'faire', k: 'verb', fr: 'manger', en: 'eat' },
  { id: 'boire', cat: 'faire', k: 'verb', fr: 'boire', en: 'drink' },
  { id: 'dormir', cat: 'faire', k: 'verb', fr: 'dormir', en: 'sleep' },
  { id: 'sortir', cat: 'faire', k: 'verb', fr: 'sortir', en: 'go out' },
  { id: 'lire', cat: 'faire', k: 'verb', fr: 'lire', en: 'read' },
  { id: 'dessiner', cat: 'faire', k: 'verb', fr: 'dessiner', en: 'draw' },
  { id: 'televoir', cat: 'faire', k: 'verb', fr: 'regarder la télé', en: 'watch TV' },
  { id: 'ecouter', cat: 'faire', k: 'verb', fr: 'écouter de la musique', lbl: 'Écouter de la musique', en: 'listen to music' },
  { id: 'laver', cat: 'faire', k: 'verb', fr: 'me laver', lbl: 'Me laver', en: 'have a bath' },
  { id: 'calin', cat: 'faire', k: 'verb', fr: 'faire un câlin', en: 'have a hug', gb: 'have a cuddle' },
  { id: 'reposer', cat: 'faire', k: 'verb', fr: 'me reposer', lbl: 'Me reposer', en: 'rest' },
  { id: 'allertoilettes', cat: 'faire', k: 'verb', fr: 'aller aux toilettes', en: 'go to the bathroom', gb: 'go to the toilet' },
  { id: 'danser', cat: 'faire', k: 'verb', fr: 'danser', en: 'dance' },
  { id: 'chanter', cat: 'faire', k: 'verb', fr: 'chanter', en: 'sing' },
  /* Lieux */
  { id: 'maison', cat: 'lieux', k: 'place', fr: 'maison', fa: 'à la maison', fd: 'la maison', en: 'home', ea: 'home', ed: 'home' },
  { id: 'ecole', cat: 'lieux', k: 'place', fr: 'école', fa: "à l'école", fd: "l'école", en: 'school', ea: 'to school', ed: 'school' },
  { id: 'parc', cat: 'lieux', k: 'place', fr: 'parc', fa: 'au parc', fd: 'le parc', en: 'park', ea: 'to the park', ed: 'the park' },
  { id: 'chambre', cat: 'lieux', k: 'place', fr: 'chambre', fa: 'dans ma chambre', fd: 'ma chambre', en: 'my room', ea: 'to my room', ed: 'my room' },
  { id: 'voiture', cat: 'lieux', k: 'place', fr: 'voiture', fa: 'dans la voiture', fd: 'la voiture', en: 'car', ea: 'to the car', ed: 'the car' },
  { id: 'magasin', cat: 'lieux', k: 'place', fr: 'magasin', fa: 'au magasin', fd: 'le magasin', en: 'store', ea: 'to the store', ed: 'the store', gb: ['shop', 'to the shops', 'the shops'] },
  { id: 'dehors', cat: 'lieux', k: 'place', fr: 'dehors', fa: 'dehors', fd: 'dehors', en: 'outside', ea: 'outside', ed: 'outside' },
  { id: 'piscine', cat: 'lieux', k: 'place', fr: 'piscine', fa: 'à la piscine', fd: 'la piscine', en: 'pool', ea: 'to the pool', ed: 'the pool' },
  { id: 'docteur', cat: 'lieux', k: 'place', fr: 'docteur', fa: 'chez le docteur', fd: 'le docteur', en: 'doctor', ea: "to the doctor's", ed: 'the doctor' },
  /* Objets */
  { id: 'doudou', cat: 'objets', k: 'noun', fr: 'doudou', g: 'm', pos: 'mon doudou', en: 'teddy', epos: 'my teddy', ec: 'count' },
  { id: 'tablette', cat: 'objets', k: 'noun', fr: 'tablette', g: 'f', pos: 'ma tablette', en: 'tablet', epos: 'my tablet', ec: 'count' },
  { id: 'ballon', cat: 'objets', k: 'noun', fr: 'ballon', g: 'm', en: 'ball', ec: 'count' },
  { id: 'livre', cat: 'objets', k: 'noun', fr: 'livre', g: 'm', en: 'book', ec: 'count' },
  { id: 'tele', cat: 'objets', k: 'noun', fr: 'télé', g: 'f', d: 1, en: 'TV', ec: 'the' },
  { id: 'musique', cat: 'objets', k: 'noun', fr: 'musique', g: 'f', m: 1, en: 'music', ec: 'mass' },
  { id: 'puzzle', cat: 'objets', k: 'noun', fr: 'puzzle', g: 'm', en: 'puzzle', ec: 'count' },
  { id: 'petitevoiture', cat: 'objets', k: 'noun', fr: 'petite voiture', g: 'f', en: 'toy car', ec: 'count' },
  { id: 'velo', cat: 'objets', k: 'noun', fr: 'vélo', g: 'm', pos: 'mon vélo', en: 'bike', epos: 'my bike', ec: 'count' },
  { id: 'lego', cat: 'objets', k: 'noun', fr: 'Lego', g: 'p', en: 'Lego', ec: 'mass' },
  { id: 'bulles', cat: 'objets', k: 'noun', fr: 'bulles', g: 'p', en: 'bubbles', ec: 'pl' },
  { id: 'telephone', cat: 'objets', k: 'noun', fr: 'téléphone', g: 'm', d: 1, en: 'phone', ec: 'the' },
  /* Ajouts Mon Monde */
  { id: 'cereales', cat: 'manger', k: 'noun', fr: 'céréales', g: 'p', en: 'cereal', ec: 'mass' },
  { id: 'raisin', cat: 'manger', k: 'noun', fr: 'raisin', g: 'm', m: 1, en: 'grapes', ec: 'pl' },
  { id: 'fraises', cat: 'manger', k: 'noun', fr: 'fraises', g: 'p', en: 'strawberries', ec: 'pl' },
  { id: 'lavermains', cat: 'faire', k: 'verb', fr: 'me laver les mains', lbl: 'Me laver les mains', en: 'wash my hands' },
  { id: 'brosser', cat: 'faire', k: 'verb', fr: 'me brosser les dents', lbl: 'Me brosser les dents', en: 'brush my teeth' },
  { id: 'habiller', cat: 'faire', k: 'verb', fr: "m'habiller", lbl: "M'habiller", en: 'get dressed' },
  { id: 'histoire', cat: 'faire', k: 'verb', fr: 'écouter une histoire', lbl: 'Une histoire', elbl: 'A story', en: 'hear a story' },
  { id: 'toboggan', cat: 'faire', k: 'verb', fr: 'faire du toboggan', lbl: 'Toboggan', elbl: 'Slide', en: 'go on the slide' },
  { id: 'balancoire', cat: 'faire', k: 'verb', fr: 'faire de la balançoire', lbl: 'Balançoire', elbl: 'Swing', en: 'go on the swing' },
  { id: 'jaifini', cat: 'debut', k: 'soc', fr: "J'ai fini", en: "I'm finished" },
  { id: 'besoinaide', cat: 'debut', k: 'soc', fr: "J'ai besoin d'aide", lbl: 'Aide', en: 'I need help', elbl: 'Help' },
  { id: 'allume', cat: 'debut', k: 'soc', fr: 'Allume la lumière', lbl: 'Allumer', en: 'Turn the light on', elbl: 'Light on' },
  { id: 'eteins', cat: 'debut', k: 'soc', fr: 'Éteins la lumière', lbl: 'Éteindre', en: 'Turn the light off', elbl: 'Light off' },
  { id: 'montour', cat: 'debut', k: 'soc', fr: "C'est mon tour", lbl: 'Mon tour', en: 'My turn' },
  { id: 'atoi', cat: 'debut', k: 'soc', fr: 'À toi', en: 'Your turn' },
  { id: 'encore', cat: 'debut', k: 'soc', fr: 'Encore', en: 'More' },
  { id: 'oui', cat: 'debut', k: 'soc', fr: 'Oui', en: 'Yes' },
  { id: 'non', cat: 'debut', k: 'soc', col: 'neg', fr: 'Non', en: 'No' },
  { id: 'glace', cat: 'manger', k: 'noun', fr: 'glace', g: 'f', en: 'ice cream', ec: 'count' },
  { id: 'oeuf', cat: 'manger', k: 'noun', fr: 'œuf', g: 'm', en: 'egg', ec: 'count' },
  { id: 'pizza', cat: 'manger', k: 'noun', fr: 'pizza', g: 'f', m: 1, en: 'pizza', ec: 'mass' },
  { id: 'sandwich', cat: 'manger', k: 'noun', fr: 'sandwich', g: 'm', en: 'sandwich', ec: 'count' },
  { id: 'crayons', cat: 'objets', k: 'noun', fr: 'crayons', g: 'p', en: 'pencils', ec: 'pl' },
  { id: 'casque', cat: 'objets', k: 'noun', fr: 'casque', g: 'm', pos: 'mon casque', en: 'headphones', epos: 'my headphones', ec: 'pl' },
  { id: 'pyjama', cat: 'faire', k: 'verb', fr: 'mettre mon pyjama', lbl: 'Pyjama', en: 'put my pyjamas on', elbl: 'Pyjamas' },
  { id: 'recre', cat: 'faire', k: 'verb', fr: 'aller en récré', lbl: 'Récré', en: 'go out to play', gb: 'go out to play', elbl: 'Playtime' },
  { id: 'caresser', cat: 'faire', k: 'verb', fr: 'caresser le chien', lbl: 'Caresser le chien', en: 'pet the dog', gb: 'stroke the dog', elbl: 'Pet the dog' },
  { id: 'pipi', cat: 'debut', k: 'soc', fr: 'Je veux faire pipi', lbl: 'Pipi', en: 'I need to pee', gb: 'I need a wee', elbl: 'Pee' },
  { id: 'caca', cat: 'debut', k: 'soc', fr: 'Je veux faire caca', lbl: 'Caca', en: 'I need to poop', gb: 'I need a poo', elbl: 'Poo' },
  { id: 'bruit', cat: 'debut', k: 'soc', fr: 'Il y a trop de bruit', lbl: 'Trop de bruit', en: "It's too noisy", elbl: 'Too noisy' },
  { id: 'pause', cat: 'debut', k: 'soc', fr: 'Je veux une pause', lbl: 'Pause', en: 'I want a break', elbl: 'Break' },
  { id: 'tranquille', cat: 'debut', k: 'soc', fr: 'Je veux être tranquille', lbl: 'Tranquille', en: 'I want some quiet time', elbl: 'Quiet time' },
  { id: 'comprendspas', cat: 'debut', k: 'soc', fr: 'Je ne comprends pas', lbl: 'Pas compris', en: "I don't understand", elbl: "Don't understand" },
  { id: 'jesais', cat: 'debut', k: 'soc', fr: 'Je sais', lbl: 'Je sais', en: 'I know', elbl: 'I know' },
  { id: 'peurchien', cat: 'debut', k: 'soc', fr: "J'ai peur du chien", lbl: 'Peur du chien', en: "I'm scared of the dog", elbl: 'Scared of dog' },
];

/* ---------- Grammaire française ---------- */
const VOY = /^[aeiouàâäéèêëîïôöûüœ]/i; // pas de « y » : on dit « de yaourt »
const grammarFR = {
  def(w) { return w.g === 'p' ? 'les ' + w.fr : VOY.test(w.fr) ? "l'" + w.fr : (w.g === 'f' ? 'la ' : 'le ') + w.fr; },
  indef(w) {
    if (w.g === 'p') return 'des ' + w.fr;
    if (w.m) return (VOY.test(w.fr) ? "de l'" : w.g === 'f' ? 'de la ' : 'du ') + w.fr;
    return (w.g === 'f' ? 'une ' : 'un ') + w.fr;
  },
  de(s) { return (VOY.test(s) ? "d'" : 'de ') + s; },
  a(w) { return w.raw ? w.fr : w.g === 'p' ? 'aux ' + w.fr : VOY.test(w.fr) ? "à l'" + w.fr : (w.g === 'f' ? 'à la ' : 'au ') + w.fr; },
  noun(w, s) {
    if (w.pos) return s === 'besoin' ? this.de(w.pos) : s === 'vais' ? 'à ' + w.pos : w.pos;
    if (w.d && s !== 'neveux' && s !== 'besoin') return this.def(w);
    switch (s) {
      case 'neveux': return this.de(w.fr);
      case 'besoin': return w.m || w.g === 'p' ? this.de(w.fr) : this.de(this.indef(w));
      case 'aime': case 'naime': case 'ouest': case 'mal': return this.def(w);
      case 'vais': return this.a(w);
      default: return this.indef(w);
    }
  },
  obj(w, s, gender) {
    switch (w.k) {
      case 'noun': return this.noun(w, s);
      case 'body': return s === 'mal' || !s ? this.a(w) : w.raw ? w.fr : this.def(w);
      case 'verb': return s === 'besoin' ? this.de(w.fr) : w.fr;
      case 'place':
        if (s === 'vais') return w.fa;
        if (s === 'aime' || s === 'naime' || s === 'ouest' || s === 'cest') return w.fd;
        return (s === 'besoin' ? "d'aller " : 'aller ') + w.fa;
      case 'pers': return s === 'vais' ? 'chez ' + w.fr : s === 'besoin' ? this.de(w.fr) : w.fr;
      default: return w.fr;
    }
  },
  start(s) { return WD[s].fr; },
  feel(adj, av, fx, gender) {
    const out = [];
    if (adj.length) out.push('je suis ' + list(adj.map((w) => w.fr[gender === 'f' ? 1 : 0]), 'et'));
    if (av.length) out.push("j'ai " + list(av.map((w) => w.fr), 'et'));
    fx.forEach((w) => out.push(w.fx));
    return out.join(' et ');
  },
  head(s, objs) { if (s === 'ouest' && objs.some((o) => o.g === 'p' && !o.pos)) return 'où sont'; return WD[s].fr; },
  and: 'et',
  infer(k) { return { body: 'mal', verb: 'veux', place: 'veux' }[k] || null; },
  q(s) { return s === 'ouest' ? ' ?' : ''; },
};

/* ---------- Grammaire anglaise ---------- */
const grammarEN = {
  e(w) { return (GB() && w.gb && typeof w.gb === 'string') ? w.gb : w.en; },
  a(s) { return (/^[aeiou]/i.test(s) ? 'an ' : 'a ') + s; },
  noun(w, s) {
    const e = this.e(w);
    if (w.epos) return w.epos;
    if (w.ec === 'the') return 'the ' + e;
    switch (s) {
      case 'neveux': return w.ec === 'count' ? this.a(e) : e;
      case 'aime': case 'naime': return w.ec === 'count' ? (w.enp || e + 's') : e;
      case 'ouest': return 'the ' + e;
      case 'cest': return w.ec === 'count' ? this.a(e) : e;
      case 'vais': return 'to the ' + e;
      default: return w.ec === 'count' ? this.a(e) : 'some ' + e;
    }
  },
  obj(w, s) {
    switch (w.k) {
      case 'noun': return this.noun(w, s);
      case 'body': return w.raw ? this.e(w) : 'my ' + this.e(w);
      case 'verb': return s === 'vais' ? 'to ' + this.e(w) : (s === 'aime' || s === 'naime') ? 'to ' + this.e(w) : 'to ' + this.e(w);
      case 'place': {
        const gb = GB() && Array.isArray(w.gb) ? w.gb : null;
        const ea = gb ? gb[1] : w.ea, ed = gb ? gb[2] : w.ed;
        if (s === 'vais') return ea;
        if (s === 'aime' || s === 'naime' || s === 'ouest' || s === 'cest') return ed;
        return 'to go ' + ea;
      }
      case 'pers': return s === 'vais' ? 'to see ' + persName(w) : persName(w);
      default: return this.e(w);
    }
  },
  feel(adj, av, fx) {
    const all = adj.concat(av, fx).map((w) => this.e(w));
    return all.length ? "I'm " + list(all, 'and') : '';
  },
  head(s, objs) { if (s === 'ouest' && objs.some((o) => o.ec === 'pl' || o.ec === 'mass' && o.k === 'noun' && /s$/.test(o.en))) return 'where are'; return WD[s].en; },
  and: 'and',
  infer(k) { return { body: 'mal', verb: 'veux', place: 'veux' }[k] || null; },
  q(s) { return s === 'ouest' ? '?' : ''; },
};
