/* Scènes illustrées (360 x 480). Chaque objet qu'on peut toucher est un groupe data-hot. */
const hit = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" fill-opacity="0" stroke="none"/>`;
const HOT = (id, inner) => `<g class="hot" data-hot="${id}" tabindex="0" role="button">${inner}</g>`;
const at = (x, y, s, inner) => `<g transform="translate(${x} ${y}) scale(${s})" stroke-width="${2.5 / s * 1.1}">${inner}</g>`;
const SHIRT = '#7FB3F5', PANTS = '#5B6475';

const SCENE_ART = {
  moi: `${r(0, 0, 360, 480, 0, '#EEF3FA', NS)}
    ${HOT('gorge', r(162, 140, 36, 44, 4, SK))}
    ${HOT('ventre', p('M118 186 Q180 168 242 186 L236 304 H124Z', SHIRT) + p('M170 250 Q180 258 190 250', 'none'))}
    ${HOT('bras', p('M122 190 L74 284 L96 296 L134 216Z', SHIRT) + p('M238 190 L286 284 L264 296 L226 216Z', SHIRT))}
    ${HOT('main', hit(56, 280, 50, 44) + hit(254, 280, 50, 44) + c(82, 300, 16, SK) + c(278, 300, 16, SK))}
    ${HOT('jambe', r(130, 302, 42, 116, 10, PANTS) + r(188, 302, 42, 116, 10, PANTS))}
    ${HOT('pied', el(146, 434, 32, 15, '#3A4252') + el(214, 434, 32, 15, '#3A4252'))}
    ${HOT('tete', c(180, 92, 58, SK) + p('M122 88 Q118 30 180 31 Q242 30 238 88 Q222 56 180 58 Q138 56 122 88Z', HB))}
    ${HOT('oreille', hit(100, 74, 30, 46) + hit(230, 74, 30, 46) + el(119, 98, 11, 17, SK) + el(241, 98, 11, 17, SK))}
    ${HOT('oeil', hit(138, 74, 84, 32) + c(158, 90, 10, WH) + c(202, 90, 10, WH) + c(159, 91, 5, K, NS) + c(203, 91, 5, K, NS))}
    ${HOT('nez', hit(166, 98, 28, 26) + p('M180 98 L172 118 H187', 'none'))}
    ${HOT('dents', hit(150, 124, 60, 30) + p('M154 130 Q180 158 206 130Z', '#8A2A2F') + r(160, 130, 40, 7, 2, WH, 'stroke-width="1.5"'))}
    ${HOT('emotions', el(292, 62, 56, 44, WH) + c(242, 116, 9, WH) + c(230, 134, 5, WH) + face(266, 60, 15, 'happy') + face(304, 60, 15, 'sad') + face(285, 86, 9, 'angry'))}
    ${HOT('partout', r(14, 400, 84, 70, 16, WH) + at(24, 404, .97, ICONS.partout))}`,
  cuisine: `${r(0, 0, 360, 312, 0, '#F2E6CF', NS)}${r(0, 312, 360, 168, 0, '#D8BE95', NS)}${p('M0 370 H360 M0 430 H360', 'none', 'stroke="#C4A77A" stroke-width="2"')}
    ${r(24, 36, 110, 92, 8, '#BFE3FF', 'class="sky"')}<g class="day">${c(52, 62, 11, YEL, NS)}</g><g class="night">${c(52, 62, 10, '#F4F1D0', NS)}${c(110, 104, 2, WH, NS)}</g>${p('M79 36 V128 M24 82 H134', 'none', 'stroke-width="4"')}
    ${HOT('placard', r(150, 30, 80, 94, 8, '#C98B4E') + p('M190 30 V124') + c(182, 78, 3, K, NS) + c(198, 78, 3, K, NS))}
    ${r(0, 216, 238, 96, 0, '#B07A47')}${r(-6, 206, 248, 14, 4, '#8C5A2E')}${p('M80 226 V306 M160 226 V306', 'none')}
    ${HOT('evier', hit(18, 150, 96, 70) + el(64, 210, 42, 9, '#C9CED6') + p('M66 206 V178 Q66 166 80 166 H90', 'none', 'stroke-width="6"') + el(90, 180, 3, 6, BLU, 'class="drip" stroke="none"'))}
    ${HOT('fruits', hit(126, 156, 88, 58) + c(152, 190, 13, RED) + p('M160 196 Q174 166 200 178 Q184 184 174 200Z', YEL) + c(184, 194, 11, ORA) + p('M126 202 Q170 228 214 202Z', WH))}
    ${HOT('frigo', r(246, 72, 98, 252, 12, '#E9EEF5') + p('M246 152 H344') + r(328, 96, 7, 36, 3, '#9AA3B2') + r(328, 170, 7, 60, 3, '#9AA3B2') + r(262, 172, 34, 28, 2, WH) + c(272, 214, 6, RED) + c(292, 222, 6, YEL))}
    ${HOT('table', hit(56, 316, 248, 150) + p('M84 392 V466 M276 392 V466', 'none', 'stroke-width="8"') + r(56, 376, 248, 18, 6, '#A86B3A') + el(170, 370, 48, 10, WH) + el(170, 369, 30, 6) + p('M108 352 V376 M104 352 V360 M112 352 V360', 'none', 'stroke-width="2.5"') + p('M244 330 H268 L265 374 H247Z', LB))}`,
  salon: `${r(0, 0, 360, 318, 0, '#DCEBF2', NS)}${r(0, 318, 360, 162, 0, '#C9AE88', NS)}${p('M0 360 H360 M0 410 H360 M0 455 H360', 'none', 'stroke="#B59873" stroke-width="2"')}
    ${HOT('cadre', r(26, 34, 124, 94, 6, '#8C5A2E') + r(34, 42, 108, 78, 3, WH) + face(62, 86, 14, 'happy') + face(90, 80, 17, 'happy') + face(118, 88, 12, 'happy'))}
    <g class="clock">${c(166, 106, 19, WH)}<path class="hh" d="M166 106 V95" stroke-width="4"/><path class="mh" d="M166 106 V91" stroke-width="2.5"/>${c(166, 106, 2, K, NS)}</g>
    ${HOT('livres', hit(180, 16, 160, 58) + r(190, 26, 14, 38, 2, RED) + r(206, 32, 12, 32, 2, BLU) + r(220, 22, 16, 42, 2, GRN) + r(238, 34, 12, 30, 2, YEL) + r(262, 30, 30, 34, 3, PUR) + r(180, 64, 160, 10, 2, '#8C5A2E'))}
    ${HOT('tele', r(206, 132, 132, 96, 6, '#34405A') + r(214, 140, 116, 76, 3, '#8EC5FF', 'class="tvglow" stroke="none"') + p('M216 210 L250 178 L276 198 L300 172 L328 204 V214 H216Z', GRN, NS) + r(198, 248, 148, 54, 6, '#8C5A2E') + p('M262 228 V248', 'none', 'stroke-width="5"'))}
    ${el(150, 430, 130, 32, '#F0C987', 'stroke-width="2"')}
    ${HOT('canape', r(18, 262, 176, 70, 16, PUR) + r(10, 312, 192, 52, 14, '#A78BFA') + r(2, 290, 30, 80, 12, PUR) + r(180, 290, 30, 80, 12, PUR) + r(44, 280, 40, 34, 8, YEL) + p('M24 370 V384 M188 370 V384', 'none', 'stroke-width="5"'))}
    ${HOT('telephone', hit(296, 214, 44, 36) + r(306, 222, 16, 26, 3, '#34405A') + r(308, 226, 12, 16, 1, '#8EC5FF', NS))}
    ${HOT('jouets', c(252, 356, 20, WH) + p('M252 336 Q244 356 252 376 M232 356 Q252 350 272 356', 'none', `stroke="${RED}" stroke-width="3"`) + r(288, 326, 32, 32, 4, YEL) + r(216, 362, 128, 92, 8, RED) + p('M216 386 H344', 'none', `stroke="${WH}" stroke-width="4"`))}`,
  bain: `${r(0, 0, 360, 330, 0, '#D7EEF0', NS)}${p('M0 60 H360 M0 120 H360 M0 180 H360 M0 240 H360 M0 300 H360 M60 0 V330 M120 0 V330 M180 0 V330 M240 0 V330 M300 0 V330', 'none', 'stroke="#C2E1E5" stroke-width="2"')}${r(0, 330, 360, 150, 0, '#A9C8D1', NS)}
    ${HOT('lavabo', r(226, 36, 104, 96, 44, '#EAF6FF') + p('M212 188 H338 Q338 232 275 234 Q212 232 212 188Z', WH) + r(262, 234, 26, 84, 4, WH) + p('M275 188 V170 H290', 'none', 'stroke-width="5"') + r(310, 158, 18, 24, 3, BLU) + p('M314 158 L310 140 M322 158 L328 142', 'none', 'stroke-width="3"'))}
    ${HOT('wc', r(32, 176, 72, 74, 8, WH) + p('M18 254 H122 Q122 300 90 312 L96 352 H48 L54 312 Q18 300 18 254Z', WH) + el(70, 254, 52, 10, LB))}
    ${HOT('bain', p('M150 362 H352 V404 Q352 446 310 446 H192 Q150 446 150 404Z', WH) + '<g class="float">' + c(184, 354, 12, LB) + '</g><g class="float f2">' + c(208, 346, 10, LB) + '</g><g class="float f3">' + c(232, 354, 13, LB) + '</g><g class="float f2">' + c(290, 352, 11, LB) + '</g>' + el(318, 348, 14, 10, YEL) + c(330, 336, 7, YEL) + p('M336 336 L344 338', 'none', `stroke="${ORA}" stroke-width="3"`) + p('M346 362 V330 H334', 'none', 'stroke-width="5"'))}`,
  chambre: `${r(0, 0, 360, 300, 0, '#E6E1F5', NS)}${r(0, 300, 360, 180, 0, '#CDB894', NS)}
    ${r(26, 40, 124, 100, 8, '#2B3A55', 'class="sky"')}<g class="night">${c(56, 64, 12, YEL, NS)}${c(62, 60, 10, '#1E2A4A', 'class="sky" stroke="none"')}${c(118, 112, 2, WH, NS)}${c(130, 70, 2, WH, NS)}</g><g class="day">${c(118, 70, 12, YEL, NS)}</g>${p('M88 40 V140 M26 90 H150', 'none', 'stroke-width="4"')}
    ${HOT('armoire', r(244, 30, 104, 210, 8, '#C98B4E') + p('M296 30 V240') + c(288, 136, 3, K, NS) + c(304, 136, 3, K, NS))}
    ${HOT('lampe', r(262, 300, 80, 76, 6, '#B07A47') + p('M302 300 V282', 'none', 'stroke-width="4"') + p('M272 244 H332 L342 284 H262Z', YEL))}
    ${el(160, 446, 120, 24, '#B8A4E6', 'stroke-width="2"')}
    ${HOT('casque', hit(170, 150, 64, 64) + p('M180 196 V186 Q180 160 202 160 Q224 160 224 186 V196', 'none', 'stroke-width="5"') + r(172, 188, 16, 24, 6, PUR) + r(216, 188, 16, 24, 6, PUR))}
    ${HOT('lit', r(10, 232, 30, 160, 8, '#2F6FD6') + r(14, 292, 236, 72, 12, '#3B82F6') + r(36, 270, 64, 30, 12, WH) + r(110, 278, 140, 34, 12, '#7FB3F5') + p('M24 364 V392 M240 364 V392', 'none', 'stroke-width="6"'))}
    ${HOT('doudou', at(98, 214, 1, teddy()))}<rect class="dim" x="0" y="0" width="360" height="480" fill="#0B1030" stroke="none"/>`,
  ecole: `${r(0, 0, 360, 300, 0, '#E7EFE2', NS)}${r(0, 300, 360, 180, 0, '#C9B79C', NS)}${p('M0 350 H360 M0 410 H360', 'none', 'stroke="#B59873" stroke-width="2"')}
    ${HOT('tableau', r(20, 34, 206, 116, 6, '#8C5A2E') + r(28, 42, 190, 100, 3, '#2F6B4F') + t(70, 86, 30, 'A b c', '#F4F6FA') + t(160, 124, 26, '1 2 3', '#F4F6FA'))}
    ${HOT('maitresse', hit(250, 70, 104, 160) + at(232, 66, 2.3, person(32, 1, { hair: 'long', hc: '#3B2A1E', shirt: '#2F7FE0', dress: 1 })))}
    ${HOT('porte', r(286, 236, 64, 122, 4, '#B07A47') + c(298, 300, 3.5, YEL) + r(298, 250, 40, 34, 3, LB) + c(326, 262, 6, YEL, NS))}
    ${HOT('cartable', p('M22 392 Q22 360 56 360 Q90 360 90 392 V452 Q90 462 80 462 H32 Q22 462 22 452Z', RED) + p('M40 360 Q40 344 56 344 Q72 344 72 360', 'none', 'stroke-width="4"') + r(36, 400, 40, 22, 4, '#F08A24'))}
    ${HOT('pupitre', p('M126 380 V458 M262 380 V458', 'none', 'stroke-width="7"') + r(110, 362, 168, 20, 5, '#C98B4E') + r(140, 344, 52, 20, 2, WH, 'transform="rotate(-6 166 354)"') + r(206, 340, 7, 26, 2, RED, 'transform="rotate(20 210 353)"') + r(222, 340, 7, 26, 2, BLU, 'transform="rotate(30 226 353)"'))}`,
  dehors: `${r(0, 0, 360, 480, 0, '#CDE9FF', 'class="sky" stroke="none"')}<g class="night">${[[40, 150], [120, 40], [200, 120], [330, 30], [300, 160], [170, 30]].map(([x, y]) => c(x, y, 2.5, WH, NS)).join('')}</g><g class="cloud">${el(250, 70, 46, 18, WH, NS)}${el(280, 58, 30, 16, WH, NS)}</g><g class="cloud c2">${el(150, 130, 34, 12, WH, NS)}</g>${p('M0 300 Q180 266 360 300 V480 H0Z', '#9BD17A', NS)}
    ${HOT('soleil', hit(20, 20, 84, 84) + '<g class="day spin">' + sun(62, 62, 24) + '</g><g class="night">' + c(62, 62, 24, '#F4F1D0') + c(74, 54, 20, '#1E2A4A', 'class="sky" stroke="none"') + '</g>')}
    ${HOT('balancoire', p('M28 336 L62 150 H156 L190 336', 'none', 'stroke="#8C5A2E" stroke-width="8"') + p('M92 150 V262 M126 150 V262', 'none', 'stroke-width="3"') + r(84, 262, 50, 10, 4, YEL))}
    ${HOT('toboggan', p('M226 330 V142 H250 V330', 'none', 'stroke-width="5"') + p('M226 182 H250 M226 222 H250 M226 262 H250 M226 302 H250', 'none', 'stroke-width="3"') + p('M250 142 Q284 142 304 230 Q314 300 352 304 V324 Q300 324 290 240 Q276 166 250 166Z', RED))}
    ${HOT('ballon', c(160, 404, 24, WH) + p('M160 380 Q146 404 160 428 M136 404 Q160 394 184 404', 'none', `stroke="${RED}" stroke-width="3"`) + c(160, 404, 24))}
    ${HOT('chien', at(4, 380, 1.45, ICONS.chien))}
    ${HOT('voiture', at(194, 332, 2.4, car(BLU)))}`,
};

/* Options : veux:mot, verb:mot, vais:mot, ouest:mot, say:mot, soc:mot, mal / peu / tres:partie, tpl:modèle:personne */
const SCENES = [
  { id: 'moi', fr: 'Moi', en: 'Me' },
  { id: 'gens', fr: 'Les gens', en: 'People' },
  { id: 'cuisine', fr: 'Cuisine', en: 'Kitchen' },
  { id: 'salon', fr: 'Salon', en: 'Living room', gb: 'Lounge' },
  { id: 'bain', fr: 'Salle de bain', en: 'Bathroom' },
  { id: 'chambre', fr: 'Chambre', en: 'Bedroom' },
  { id: 'ecole', fr: 'École', en: 'School' },
  { id: 'dehors', fr: 'Dehors', en: 'Outside' },
];
const pain = (id) => ({ w: id, mode: 'pain', o: ['mal:' + id, 'peu:' + id, 'tres:' + id] });
const HOTS = {
  tete: pain('tete'), gorge: pain('gorge'), ventre: pain('ventre'), bras: pain('bras'), main: pain('main'), jambe: pain('jambe'), pied: pain('pied'),
  oreille: pain('oreille'), oeil: pain('oeil'), nez: pain('nez'), dents: pain('dents'),
  partout: { w: 'partout', direct: 'mal:partout' },
  emotions: { fr: 'Ce que je ressens', en: 'How I feel', ic: 'content', o: ['say:content', 'say:triste', 'say:colere', 'say:fatigue', 'say:peur', 'say:malade', 'say:calme', 'say:surpris', 'say:faim', 'say:soif', 'say:chaud', 'say:froid', 'say:ennui'] },
  frigo: { fr: 'Frigo', en: 'Fridge', ic: 'room_cuisine', neg: 1, o: ['veux:lait', 'veux:eau', 'veux:jus', 'veux:yaourt', 'veux:fromage', 'veux:compote', 'veux:glace', 'veux:oeuf'] },
  placard: { fr: 'Placard', en: 'Cupboard', ic: 'biscuit', neg: 1, o: ['veux:biscuit', 'veux:gateau', 'veux:chocolat', 'veux:bonbon', 'veux:pain', 'veux:cereales'] },
  evier: { fr: 'Évier', en: 'Sink', ic: 'eau', o: ['say:soif', 'veux:eau', 'verb:lavermains'] },
  fruits: { fr: 'Fruits', en: 'Fruit', ic: 'pomme', neg: 1, o: ['veux:pomme', 'veux:banane', 'veux:raisin', 'veux:fraises'] },
  table: { fr: 'Table', en: 'Table', ic: 'faim', neg: 1, o: ['say:faim', 'veux:pates', 'veux:riz', 'veux:soupe', 'veux:viande', 'veux:legumes', 'veux:frites', 'veux:pizza', 'veux:sandwich', 'soc:encore', 'soc:jaifini'] },
  cadre: { fr: 'Photos', en: 'Photos', ic: 'tous', go: 'gens' },
  livres: { fr: 'Livres', en: 'Books', ic: 'lire', neg: 1, o: ['verb:lire', 'verb:histoire', 'verb:dessiner', 'veux:livre'] },
  tele: { fr: 'Télé', en: 'TV', ic: 'tele', neg: 1, o: ['verb:televoir', 'verb:ecouter', 'verb:danser', 'verb:chanter', 'veux:tablette'] },
  canape: { fr: 'Canapé', en: 'Sofa', ic: 'reposer', neg: 1, o: ['verb:reposer', 'verb:calin', 'verb:histoire', 'say:fatigue', 'say:ennui'] },
  jouets: { fr: 'Jouets', en: 'Toys', ic: 'jouer', neg: 1, o: ['verb:jouer', 'veux:ballon', 'veux:lego', 'veux:puzzle', 'veux:petitevoiture', 'veux:doudou', 'veux:bulles', 'veux:tablette'] },
  lavabo: { fr: 'Lavabo', en: 'Sink', ic: 'brosser', neg: 1, o: ['verb:brosser', 'verb:lavermains', 'veux:eau', 'mal:dents'] },
  wc: { fr: 'Toilettes', en: 'Toilet', gb: 'Toilet', ic: 'toilettes', o: ['soc:pipi', 'soc:caca', 'verb:allertoilettes', 'soc:jaifini', 'soc:besoinaide'] },
  bain: { fr: 'Bain', en: 'Bath', ic: 'room_bain', neg: 1, o: ['verb:laver', 'veux:bulles', 'say:chaud', 'say:froid', 'soc:jaifini'] },
  lit: { fr: 'Lit', en: 'Bed', ic: 'dormir', neg: 1, o: ['verb:dormir', 'verb:histoire', 'verb:calin', 'say:fatigue', 'say:peur'] },
  doudou: { fr: 'Doudou', en: 'Teddy', ic: 'doudou', mode: 'start', o: ['veux:doudou', 'ouest:doudou'] },
  armoire: { fr: 'Armoire', en: 'Wardrobe', ic: 'habiller', neg: 1, o: ['verb:habiller', 'verb:pyjama', 'say:chaud', 'say:froid'] },
  casque: { fr: 'Casque', en: 'Headphones', ic: 'casque', neg: 1, o: ['veux:casque', 'soc:bruit', 'soc:pause', 'soc:tranquille', 'verb:reposer'] },
  telephone: { fr: 'Téléphone', en: 'Phone', ic: 'appeler', o: ['call:maman', 'call:papa', 'call:mamie', 'call:papy'] },
  chien: { fr: 'Chien', en: 'Dog', ic: 'chien', neg: 1, o: ['verb:caresser', 'soc:peurchien'] },
  tableau: { fr: 'Tableau', en: 'Board', ic: 'tableau_ic', o: ['soc:jesais', 'soc:comprendspas', 'soc:besoinaide', 'soc:regarde'] },
  maitresse: { fr: 'Maîtresse', en: 'Teacher', ic: 'maitresse', o: ['tpl:aide:maitresse', 'tpl:regarde:maitresse', 'tpl:viens:maitresse', 'soc:comprendspas', 'verb:allertoilettes'] },
  porte: { fr: 'Récré', en: 'Playtime', ic: 'recre', neg: 1, o: ['verb:recre', 'verb:jouer', 'soc:montour', 'soc:tranquille'] },
  cartable: { fr: 'Cartable', en: 'School bag', ic: 'cartable_ic', neg: 1, o: ['veux:gouter', 'veux:eau', 'veux:doudou', 'veux:casque'] },
  pupitre: { fr: 'Ma table', en: 'My desk', ic: 'crayons', neg: 1, o: ['veux:crayons', 'veux:livre', 'verb:dessiner', 'verb:lire', 'soc:jaifini', 'soc:pause'] },
  lampe: { fr: 'Lampe', en: 'Lamp', ic: 'allume', o: ['soc:allume', 'soc:eteins', 'say:peur', 'soc:tranquille'] },
  soleil: { fr: 'Soleil', en: 'Sun', ic: 'chaud', o: ['say:chaud', 'say:soif', 'veux:eau'] },
  balancoire: { fr: 'Balançoire', en: 'Swing', ic: 'balancoire', neg: 1, o: ['verb:balancoire', 'soc:encore', 'soc:montour', 'soc:atoi', 'soc:besoinaide'] },
  toboggan: { fr: 'Toboggan', en: 'Slide', ic: 'toboggan', neg: 1, o: ['verb:toboggan', 'soc:encore', 'soc:montour', 'soc:atoi'] },
  ballon: { fr: 'Ballon', en: 'Ball', ic: 'ballon', neg: 1, o: ['veux:ballon', 'verb:jouer', 'soc:montour', 'soc:atoi'] },
  voiture: { fr: 'Voiture', en: 'Car', ic: 'voiture', o: ['aller:maison', 'aller:ecole', 'aller:parc', 'aller:magasin', 'aller:piscine', 'aller:docteur', 'aller:mamie', 'aller:papy'] },
};
const ROUTINE = [[0, 'chambre'], [6.5, 'cuisine'], [9.5, 'salon'], [11.75, 'cuisine'], [13.5, 'dehors'], [16, 'cuisine'], [17, 'salon'], [18.5, 'bain'], [19.5, 'chambre']];
/* Jours d'école (lundi, mardi, jeudi, vendredi ; mercredi matin) si l'option est cochée */
const SCHOOL = [[8.5, 11.75], [13.5, 16.25]];
const TPL = {
  veux: { ic: 'veux', fr: ['Je veux', 'Je veux {p}'], en: ['I want', 'I want {p}'] },
  ouest: { ic: 'ouest', fr: ['Où est ?', 'Où est {p} ?'], en: ['Where?', 'Where is {p}?'] },
  viens: { ic: 'viens', fr: ['Viens', '{P}, viens'], en: ['Come', '{P}, come here'] },
  aide: { ic: 'besoinaide', fr: ['Aide-moi', '{P}, aide-moi'], en: ['Help me', '{P}, help me'] },
  regarde: { ic: 'regarde', fr: ['Regarde', '{P}, regarde'], en: ['Look', '{P}, look'] },
  aime: { ic: 'aime', fr: ["Je t'aime", "Je t'aime, {p}"], en: ['I love you', 'I love you, {p}'] },
};
const QUICKQ = [
  { fr: 'Tu veux quoi ?', en: 'What do you want?', s: 'veux', a: ['eau', 'gouter', 'jouer', 'calin'] },
  { fr: 'Tu as mal où ?', en: 'Where does it hurt?', s: 'mal', a: ['tete', 'ventre', 'dents', 'oreille'] },
  { fr: 'Comment tu te sens ?', en: 'How do you feel?', s: 'say', a: ['content', 'triste', 'colere', 'fatigue'] },
  { fr: 'Tu veux aller où ?', en: 'Where do you want to go?', s: 'veux', a: ['maison', 'parc', 'piscine', 'magasin'] },
  { fr: 'Tu veux jouer à quoi ?', en: 'What do you want to play with?', s: 'veux', a: ['ballon', 'lego', 'puzzle', 'tablette'] },
  { fr: 'Tu veux manger quoi ?', en: 'What do you want to eat?', s: 'veux', a: ['pates', 'riz', 'soupe', 'frites'] },
  { fr: 'Oui ou non ?', en: 'Yes or no?', s: 'say', a: ['oui', 'non'] },
];
