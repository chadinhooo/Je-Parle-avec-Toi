const APP_VERSION = '2.0.0';
const I18N = {
  fr: {
    app: 'Mon Monde', hint: 'Touche un objet pour parler', adult: 'Adulte', close: 'Fermer', back: 'Retour à l’enfant', replay: 'Redire', now: 'Maintenant',
    want: 'Je veux', notWant: 'Je ne veux pas', pMal: 'Mal', pPeu: 'Un peu', pTres: 'Très mal',
    tAsk: 'Questions', tLog: 'Fil', tWrite: 'Écrire', tSet: 'Réglages',
    askHelp: 'Posez une question, choisissez jusqu’à 4 réponses en images, puis montrez l’écran à l’enfant.', askQ: 'Votre question', askPh: 'Par exemple : tu veux quoi au goûter ?',
    askAns: 'Réponses proposées', askNone: 'Aucune réponse choisie.', search: 'Chercher une image', show: 'Montrer à l’enfant', another: 'Autre question', remove: 'Retirer',
    logEmpty: 'Les questions posées et tout ce que dit l’enfant s’affichent ici, avec l’heure.', logClear: 'Effacer le fil', logAsk: 'Effacer tout le fil ?',
    writeHint: 'Écrivez ce que vous voulez dire', say: 'Dire', clear: 'Effacer',
    lockTitle: 'Réglages protégés', lockEnter: 'Tapez votre code parent', lockCreate: 'Choisissez un code à 4 chiffres', lockConfirm: 'Tapez le même code encore une fois', lockWrong: 'Ce code ne marche pas. Réessayez.', lockMismatch: 'Les deux codes sont différents. Recommencez.', erase: 'Effacer un chiffre',
    sChild: 'Enfant', girl: 'Fille', boy: 'Garçon', lang: 'Langue',
    sDay: 'Journée', autoRoom: 'Ouvrir la bonne pièce selon l’heure', dayHelp: 'À l’ouverture, l’appli montre la pièce de ce moment de la journée :',
    sPeople: 'Les gens', peopleHelp: 'Mettez le vrai prénom et une photo : l’enfant reconnaît sa famille.', name: 'Prénom', photo: 'Photo', addPerson: 'Ajouter une personne',
    sObjects: 'Choix des objets', objHelp: 'Choisissez un objet, puis décochez ce qui ne sert pas à votre enfant ou ajoutez vos propres choix avec une photo.', object: 'Objet',
    addChoice: 'Ajouter un choix', word: 'Le mot', how: 'On dit : je veux …', none: '(rien)', choosePhoto: 'Choisir une photo', add: 'Ajouter', added: 'Ajouté',
    sScenes: 'Scènes avec vos photos', scHelp: 'Prenez en photo une pièce de la maison, puis touchez la photo pour placer les objets que l’enfant pourra toucher.', scName: 'Nom de la scène', scNew: 'Créer la scène', edit: 'Modifier', del: 'Supprimer',
    zHelp: 'Touchez la photo pour ajouter un objet. Touchez un objet pour le régler.', zName: 'Nom de l’objet', zSize: 'Taille', zChoices: 'Ce que l’enfant peut dire (8 au plus)', done: 'Terminé',
    sVoice: 'Voix', voice: 'Voix', vDefault: 'Voix par défaut', rate: 'Vitesse', pitch: 'Hauteur', test: 'Écouter un essai', testText: 'Bonjour, je suis ta voix.',
    sDisplay: 'Affichage', theme: 'Thème', tAuto: 'Comme l’appareil', tLight: 'Clair', tDark: 'Sombre',
    sCode: 'Code parent', newCode: 'Changer le code',
    sBackup: 'Sauvegarde', export: 'Enregistrer une sauvegarde', import: 'Restaurer une sauvegarde', imported: 'Sauvegarde restaurée', badFile: 'Ce fichier n’est pas une sauvegarde de Mon Monde.', full: 'Mémoire pleine : utilisez des photos moins nombreuses.',
    sAbout: 'À propos', about: 'Illustrations et pictogrammes dessinés pour Mon Monde. Police Fira Sans (licence SIL OFL). Fonctionne sans internet.', version: 'Version',
    reset: 'Tout remettre comme au départ', resetAsk: 'Tout effacer et revenir au départ ? Photos, personnes, choix ajoutés et fil seront supprimés.',
  },
  en: {
    app: 'My World', hint: 'Touch something to talk', adult: 'Adult', close: 'Close', back: 'Back to child', replay: 'Say again', now: 'Now',
    want: 'I want', notWant: "I don't want", pMal: 'Hurts', pPeu: 'A little', pTres: 'A lot',
    tAsk: 'Questions', tLog: 'Log', tWrite: 'Type', tSet: 'Settings',
    askHelp: 'Ask a question, pick up to 4 picture answers, then show the screen to the child.', askQ: 'Your question', askPh: 'For example: what do you want for a snack?',
    askAns: 'Answers offered', askNone: 'No answer chosen yet.', search: 'Search a picture', show: 'Show the child', another: 'Another question', remove: 'Remove',
    logEmpty: 'Questions asked and everything the child says appear here, with the time.', logClear: 'Clear the log', logAsk: 'Clear the whole log?',
    writeHint: 'Type what you want to say', say: 'Speak', clear: 'Clear',
    lockTitle: 'Protected settings', lockEnter: 'Enter your parent code', lockCreate: 'Choose a 4-digit code', lockConfirm: 'Enter the same code again', lockWrong: 'That code is not right. Try again.', lockMismatch: 'The two codes are different. Start again.', erase: 'Delete a digit',
    sChild: 'Child', girl: 'Girl', boy: 'Boy', lang: 'Language',
    sDay: 'Day', autoRoom: 'Open the right room for the time of day', dayHelp: 'When opened, the app shows the room for that time of day:',
    sPeople: 'People', peopleHelp: 'Add real names and photos: children recognise their family.', name: 'Name', photo: 'Photo', addPerson: 'Add a person',
    sObjects: 'Object choices', objHelp: 'Pick an object, then untick what your child does not need, or add your own choices with a photo.', object: 'Object',
    addChoice: 'Add a choice', word: 'The word', how: 'We say: I want …', none: '(nothing)', choosePhoto: 'Choose a photo', add: 'Add', added: 'Added',
    sScenes: 'Scenes from your photos', scHelp: 'Take a photo of a room at home, then touch the photo to place the things your child can touch.', scName: 'Scene name', scNew: 'Create the scene', edit: 'Edit', del: 'Delete',
    zHelp: 'Touch the photo to add a thing. Touch a thing to set it up.', zName: 'Name of the thing', zSize: 'Size', zChoices: 'What the child can say (8 at most)', done: 'Done',
    sVoice: 'Voice', voice: 'Voice', vDefault: 'Default voice', rate: 'Speed', pitch: 'Pitch', test: 'Play a sample', testText: 'Hello, I am your voice.',
    sDisplay: 'Display', theme: 'Theme', tAuto: 'Same as device', tLight: 'Light', tDark: 'Dark',
    sCode: 'Parent code', newCode: 'Change the code',
    sBackup: 'Backup', export: 'Save a backup', import: 'Restore a backup', imported: 'Backup restored', badFile: 'This file is not a My World backup.', full: 'Storage is full: use fewer photos.',
    sAbout: 'About', about: 'Illustrations and pictures drawn for My World. Fira Sans font (SIL OFL licence). Works offline.', version: 'Version',
    reset: 'Reset everything', resetAsk: 'Erase everything and start again? Photos, people, added choices and the log will be deleted.',
  },
};

/* ---------- État ---------- */
const KEY = 'monmonde1';
const PEOPLE0 = ['maman', 'papa', 'frere', 'soeur', 'mamie', 'papy', 'maitresse', 'ami'].map((id) => ({ id }));
const DEF = { lang: 'fr', gender: 'f', theme: 'auto', auto: true, rate: 0.95, pitch: 1, voice: '', code: '', hidden: {}, custom: [], people: PEOPLE0, scenes: [], log: [], av: { skin: '#F7CBA5', hair: 'short', hc: '#6B4A2F', shirt: '#3B82F6', glasses: 0 } };
let S = load();
function load() { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { return Object.assign({}, DEF); } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); return true; } catch (e) { toast(T('full')); return false; } }
const L = () => (S.lang === 'fr' ? 'fr' : 'en');
const GB = () => S.lang === 'en-GB';
const T = (k) => I18N[L()][k] || k;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
function list(a, and) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' ' + and + ' ' + a[a.length - 1]; }
const nm = (o) => (L() === 'fr' ? o.fr : (GB() && o.gb) || o.en);

/* ---------- Mots ---------- */
const WD = {};
W.forEach((w) => { WD[w.id] = w; });
const ART = { 'un': { g: 'm', ec: 'count' }, 'une': { g: 'f', ec: 'count' }, 'du': { g: 'm', m: 1, ec: 'mass' }, 'de la': { g: 'f', m: 1, ec: 'mass' }, "de l'": { g: 'm', m: 1, ec: 'mass' }, 'des': { g: 'p', ec: 'pl' }, 'mon': { pos: 1 }, 'ma': { pos: 1 }, 'mes': { pos: 1 }, '': { pos: 1 } };
function customWord(c) {
  const a = ART[c.art] || ART.un;
  const w = { id: c.id, k: 'noun', custom: 1, img: c.img, lbl: cap(c.label), elbl: cap(c.label), fr: c.label, en: c.label, g: a.g || 'm', m: a.m, ec: a.ec || 'count' };
  if (a.pos) { w.pos = (c.art ? c.art + ' ' : '') + c.label; w.epos = c.art ? 'my ' + c.label : c.label; }
  return w;
}
function word(id) {
  if (WD[id]) return WD[id];
  const c = S.custom.find((x) => x.id === id); if (c) return customWord(c);
  const pe = S.people.find((x) => x.id === id); if (pe) return { id, k: 'pers', fr: pe.name || '?', en: pe.name || '?', img: pe.img };
  return null;
}
function persName(w) { const pe = S.people.find((x) => x.id === w.id); return (pe && pe.name) || (L() === 'fr' ? w.fr : (GB() && w.gb) || w.en); }
function label(w) {
  if (w.k === 'pers') return cap(S.people.find((x) => x.id === w.id && x.name) ? persName(w) : (L() === 'fr' ? w.lbl || w.fr : w.elbl || (GB() && w.gb) || w.en));
  if (L() === 'fr') return w.lbl || cap(w.k === 'feel' && Array.isArray(w.fr) ? w.fr[S.gender === 'f' ? 1 : 0] : w.fr);
  if (w.k === 'start' || w.k === 'q' || w.k === 'soc') return w.elbl || cap(w.en);
  return w.elbl || cap(grammarEN.e(w));
}
function pic(w) {
  const pe = w && S.people.find((x) => x.id === w.id);
  const img = (pe && pe.img) || (w && w.img);
  return img ? `<img src="${img}" alt="">` : picto(w ? w.id : 'photo');
}
const COL = { pers: 'pers', start: 'verb', verb: 'verb', noun: 'noun', body: 'noun', place: 'noun', feel: 'desc', soc: 'soc', q: 'q' };
const colOf = (w) => (w && (w.col || COL[w.k])) || 'noun';

/* ---------- Composition (moteur de grammaire) ---------- */
function compose(tokens) {
  const fr = L() === 'fr', G = fr ? grammarFR : grammarEN;
  const ws = tokens.map(word).filter(Boolean);
  if (!ws.length) return '';
  let voc = '';
  if (ws.length > 1 && ws[0].k === 'pers') voc = persName(ws.shift());
  const clauses = []; let cur = null;
  ws.forEach((w) => {
    if (w.k === 'start') { cur = { s: w.id, o: [] }; clauses.push(cur); }
    else if (w.k === 'soc' || w.k === 'q') { clauses.push({ txt: fr ? w.fr : w.en }); cur = null; }
    else { if (!cur) { cur = { s: null, o: [] }; clauses.push(cur); } cur.o.push(w); }
  });
  const out = clauses.map((c) => {
    if (c.txt) return c.txt;
    let s = c.s;
    const feels = c.o.filter((w) => w.k === 'feel'), rest = c.o.filter((w) => w.k !== 'feel');
    const parts = [];
    if (feels.length) parts.push(G.feel(feels.filter((w) => !w.av && !w.fx), feels.filter((w) => w.av), feels.filter((w) => w.fx), S.gender));
    if (feels.length && !rest.length && (!s || s === 'suis')) return parts.join('');
    if (!s && rest.length) s = G.infer(rest[0].k);
    if (!s) parts.unshift(list(rest.map((w) => (w.k === 'pers' ? persName(w) : fr ? (w.pos || w.fr) : (w.epos || grammarEN.e(w)))), G.and));
    else if (!fr && s === 'mal') {
      if (!rest.length) parts.unshift('it hurts');
      else if (rest.some((w) => w.raw)) parts.unshift('I hurt everywhere');
      else parts.unshift(list(rest.map((w) => grammarEN.obj(w, s)), 'and') + (rest.length > 1 || rest[0].pl ? ' hurt' : ' hurts'));
    } else {
      const head = G.head(s, rest);
      parts.unshift(rest.length ? head + ' ' + list(rest.map((w) => G.obj(w, s, S.gender)), G.and) + G.q(s) : head);
    }
    return parts.join(' ' + G.and + ' ');
  }).filter(Boolean);
  if (!out.length) return voc;
  let txt = out.join(', ');
  if (voc) txt = voc + ', ' + txt;
  return cap(txt);
}

/* ---------- Options : ce qu'un objet permet de dire ---------- */
const parts = (o) => { const [k, a, b] = o.split(':'); return { k, a, b }; };
function optText(o, neg) {
  const { k, a, b } = parts(o), fr = L() === 'fr';
  switch (k) {
    case 'veux': case 'verb': return compose([neg ? 'neveux' : 'veux', a]);
    case 'vais': case 'ouest': case 'mal': return compose([k, a]);
    case 'peu': case 'tres': {
      const base = compose(['mal', a]);
      if (fr) return base.replace(/^J'ai mal/, k === 'peu' ? "J'ai un peu mal" : "J'ai très mal");
      return base + (k === 'peu' ? ' a little' : ' a lot');
    }
    case 'aller': { const w = word(a); if (w && w.k === 'pers') return fr ? 'Je veux aller chez ' + persName(w) : 'I want to go and see ' + persName(w); return compose(['veux', a]); }
    case 'soc': { const w = word(a); return w ? (fr ? w.fr : w.en) : ''; }
    case 'tpl': { const n = persName(word(b)), t = TPL[a][L()][1]; return t.replace('{P}', cap(n)).replace('{p}', n); }
    default: return compose([a]);
  }
}
function defOpt(w) { return ({ noun: 'veux:', verb: 'verb:', place: 'aller:', feel: 'say:', body: 'mal:', soc: 'soc:', q: 'soc:' }[w.k] || 'say:') + w.id; }
function optView(o, h, neg) {
  const { k, a, b } = parts(o);
  if (k === 'tpl') return { ic: picto(TPL[a].ic), lb: TPL[a][L()][0], col: a === 'veux' ? 'verb' : a === 'ouest' ? 'q' : 'soc' };
  if (h && h.mode === 'pain') return { ic: picto(k === 'mal' ? 'mal' : k), lb: T({ mal: 'pMal', peu: 'pPeu', tres: 'pTres' }[k]), col: 'neg' };
  if (h && h.mode === 'start') return { ic: picto(TPL[k] ? TPL[k].ic : k), lb: TPL[k] ? TPL[k][L()][0] : k, col: k === 'ouest' ? 'q' : 'verb' };
  const w = word(a) || {};
  return { ic: pic(w), lb: w.id ? label(w) : '?', col: neg && (k === 'veux' || k === 'verb') ? 'neg' : colOf(w) };
}

/* ---------- Objets des scènes ---------- */
function hotDef(id) {
  if (id.startsWith('p:')) { const pid = id.slice(2); return { w: pid, mode: 'tpl', o: Object.keys(TPL).map((t) => 'tpl:' + t + ':' + pid) }; }
  if (id.startsWith('z:')) {
    const [, sid, i] = id.split(':'), sc = S.scenes.find((x) => x.id === sid), z = sc && sc.zones[+i];
    if (!z) return null;
    return { fr: z.name, en: z.name, ic: z.o[0] && parts(z.o[0]).a, o: z.o, neg: z.o.some((o) => /^(veux|verb):/.test(o)) };
  }
  const h = HOTS[id]; if (!h) return null;
  const hid = S.hidden[id] || [];
  return Object.assign({}, h, { o: (h.o || []).concat(S.custom.filter((c) => c.hot === id).map((c) => 'veux:' + c.id)).filter((o) => !hid.includes(o)) });
}
const hotName = (h) => (h.fr ? nm(h) : label(word(h.w)));
const hotIcon = (h) => (h.ic ? (word(h.ic) && word(h.ic).img ? pic(word(h.ic)) : picto(h.ic)) : pic(word(h.w)));

/* ---------- Voix ---------- */
let voices = [];
function loadVoices() { if ('speechSynthesis' in window) voices = speechSynthesis.getVoices(); }
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
const langCode = () => (S.lang === 'fr' ? 'fr-FR' : S.lang);
function speak(text) {
  if (!text || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = langCode(); u.rate = S.rate; u.pitch = S.pitch;
  const v = voices.find((x) => x.voiceURI === S.voice) || voices.find((x) => x.lang.replace('_', '-') === langCode()) || voices.find((x) => x.lang.startsWith(L()));
  if (v) u.voice = v;
  u.onstart = () => talk(true); u.onend = u.onerror = () => talk(false);
  clearTimeout(talkT); talkT = setTimeout(() => talk(false), 1500 + text.length * 90);
  speechSynthesis.speak(u);
}
function logIt(who, t) { S.log.push({ w: who, t, ts: Date.now() }); if (S.log.length > 600) S.log.splice(0, S.log.length - 600); save(); }
function say(text, icon, o) {
  if (!text) return;
  speak(text);
  S.log.push({ w: 'c', t: text, o: o || '', r: scene, ts: Date.now() }); if (S.log.length > 600) S.log.splice(0, S.log.length - 600); save();
  const b = $('#bubble');
  b.innerHTML = `<span class="av">${avatarSVG(moodOf(o))}</span><span class="btx">${esc(text)}</span>${icon ? `<span class="bic">${icon}</span>` : ''}${ui('say')}`;
  if (o === 'soc:eteins') lights(false); if (o === 'soc:allume') lights(true);
  renderSugg();
  b.setAttribute('aria-label', T('replay') + ' : ' + text); b.dataset.t = text; b.classList.remove('idle');
  b.style.animation = 'none'; void b.offsetWidth; b.style.animation = '';
  if (!$('#ask').hidden) $('#ask .askav') && ($('#ask .askav').innerHTML = avatarSVG(moodOf(o)));
}

/* ---------- Icônes d'interface ---------- */
const UI = {
  say: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>', del: '<path d="M21 5H9l-6 7 6 7h12z"/><path d="M12 9l6 6M18 9l-6 6"/>',
  ask: '<path d="M4 5h16v11H9l-5 4z"/><path d="M10 9a2 2 0 1 1 2.5 2c-.5.2-.5.6-.5 1"/><path d="M12 14.2v.1"/>',
  log: '<path d="M5 6h14M5 12h14M5 18h9"/>', write: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h1M10 10h1M14 10h1M7 14h10"/>',
  set: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
  bilan: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>', plus: '<path d="M12 5v14M5 12h14"/>', cam: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
};
const ui = (k) => `<svg class="ui" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${UI[k]}</g></svg>`;

/* ---------- Écran enfant ---------- */
const URG = [
  { id: 'oui', ic: 'oui', col: 'soc', fr: ['Oui', 'Oui'], en: ['Yes', 'Yes'] },
  { id: 'non', ic: 'non', col: 'neg', fr: ['Non', 'Non'], en: ['No', 'No'] },
  { id: 'aide', ic: 'aide', col: 'neg', fr: ['Aide', "J'ai besoin d'aide"], en: ['Help', 'I need help'] },
  { id: 'stop', ic: 'stop', col: 'neg', fr: ['Stop', 'Stop'], en: ['Stop', 'Stop'] },
  { id: 'wc', ic: 'toilettes', col: 'noun', fr: ['Toilettes', 'Je veux aller aux toilettes'], en: ['Bathroom', 'I need the bathroom'], gb: ['Toilet', 'I need the toilet'] },
  { id: 'mal', ic: 'mal', col: 'neg', fr: ['Mal', "J'ai mal"], en: ['Hurt', 'It hurts'] },
];
let scene = 'cuisine', sheetHot = null, neg = false, view = 'child', adultTab = 'ask', unlocked = false;
const urgTxt = (u) => (L() === 'fr' ? u.fr : (GB() && u.gb) || u.en);
function nowRoom() { const d = new Date(), h = d.getHours() + d.getMinutes() / 60; let r0 = ROUTINE[0][1]; ROUTINE.forEach(([t, r]) => { if (h >= t) r0 = r; }); return r0; }
function allScenes() { return SCENES.map((s) => ({ id: s.id, name: nm(s), ic: picto('room_' + s.id) })).concat(S.scenes.map((s) => ({ id: s.id, name: s.name, ic: `<img src="${s.img}" alt="">` }))); }
function renderUrg() {
  $('#urg').innerHTML = URG.map((u) => `<button class="urg c-${u.col}" data-urg="${u.id}" aria-label="${esc(urgTxt(u)[1])}"><span class="pic">${picto(u.ic)}</span><span class="lbl">${esc(urgTxt(u)[0])}</span></button>`).join('');
}
function renderRooms() {
  const nr = nowRoom();
  $('#rooms').innerHTML = allScenes().map((s) => `<button data-room="${s.id}" aria-current="${s.id === scene}"><span class="rpic">${s.ic}</span><span class="rl">${esc(s.name)}</span>${S.auto && s.id === nr ? `<span class="nowdot" title="${T('now')}"></span>` : ''}</button>`).join('') +
    `<button class="listenbtn" data-open="listen"><span class="rpic">${ui('mic')}</span><span class="rl">${T('listen')}</span></button><button class="adultbtn" data-open="adult"><span class="rpic">${picto('adulte')}</span><span class="rl">${T('adult')}</span></button>`;
  const on = $('#rooms [aria-current="true"]'); if (on) on.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}
function sceneSVG(id) {
  const sc = S.scenes.find((x) => x.id === id);
  if (sc) {
    return `<svg class="scene" viewBox="0 0 ${sc.w} ${sc.h}" preserveAspectRatio="xMidYMid meet"><image href="${sc.img}" width="${sc.w}" height="${sc.h}"/>` +
      sc.zones.map((z, i) => `<g class="hot zone" data-hot="z:${sc.id}:${i}" tabindex="0" role="button"><circle cx="${z.x * sc.w}" cy="${z.y * sc.h}" r="${z.r * sc.w}"/></g>`).join('') + '</svg>';
  }
  let art = SCENE_ART[id];
  if (id === 'moi') art = art.split(SK).join(S.av.skin).split(HB).join(S.av.hc).split(SHIRT).join(S.av.shirt);
  return `<svg class="scene" viewBox="0 0 360 480" preserveAspectRatio="xMidYMid meet"><g stroke="${K}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${art}</g></svg>`;
}
function renderScene() {
  const st = $('#scene');
  if (scene !== 'gens' && !SCENE_ART[scene] && !S.scenes.find((x) => x.id === scene)) scene = 'cuisine';
  st.className = 'sc-' + (S.scenes.find((x) => x.id === scene) ? 'photo' : scene);
  if (scene === 'gens') {
    st.innerHTML = `<div class="people">${S.people.map((pe) => { const w = word(pe.id); return `<button class="pcard c-pers" data-hot="p:${pe.id}"><span class="pic">${pic(w)}</span><span class="lbl">${esc(label(w))}</span></button>`; }).join('')}</div>`;
  } else st.innerHTML = sceneSVG(scene);
  if (st.firstElementChild) st.firstElementChild.classList.add('enter');
  st.classList.toggle('lights-off', lightsOff); live();
  $$('#scene [data-hot]').forEach((g) => { const h = hotDef(g.dataset.hot); if (h) g.setAttribute('aria-label', hotName(h)); });
}
function goScene(id) { scene = id; renderScene(); renderRooms(); closeSheet(); }

/* ---------- Bulle de choix ---------- */
function openSheet(id) {
  const h = hotDef(id); if (!h) return;
  if (h.go) return goScene(h.go);
  if (h.direct) return say(optText(h.direct), hotIcon(h), h.direct);
  if (!h.o.length) return;
  sheetHot = id; neg = false; renderSheet();
  $$('#scene .hot.on').forEach((g) => g.classList.remove('on'));
  const g = $(`#scene [data-hot="${CSS.escape(id)}"]`); if (g) { g.classList.add('on', 'tap'); setTimeout(() => g.classList.remove('tap'), 500); }
}
function renderSheet() {
  const h = hotDef(sheetHot), sh = $('#sheet');
  const n = h.o.length;
  sh.innerHTML = `<div class="sh-card" role="dialog" aria-modal="true" aria-label="${esc(hotName(h))}">
    <div class="sh-top"><span class="sh-ic">${hotIcon(h)}</span><h2>${esc(hotName(h))}</h2><button class="iconbtn" data-close="sheet" aria-label="${T('close')}">${ui('close')}</button></div>
    ${h.neg ? `<div class="neg" role="radiogroup"><button role="radio" aria-checked="${!neg}" data-neg="0"><span class="mini">${picto('veux')}</span>${T('want')}</button><button role="radio" aria-checked="${neg}" data-neg="1"><span class="mini">${picto('neveux')}</span>${T('notWant')}</button></div>` : ''}
    <div class="opts n${Math.min(n, 9)}">${h.o.map((o, i) => { const v = optView(o, h, neg); return `<button class="opt c-${v.col}" data-o="${i}"><span class="pic">${v.ic}</span><span class="lbl">${esc(v.lb)}</span></button>`; }).join('')}</div></div>`;
  sh.hidden = false;
  const f = $('.opt', sh); if (f && matchMedia('(pointer: fine)').matches) f.focus();
}
function closeSheet() { sheetHot = null; $('#sheet').hidden = true; $$('#scene .hot.on').forEach((g) => g.classList.remove('on')); }

/* ---------- Adulte : questions ---------- */
let ask = { q: '', a: [] }, query = '';
const libWords = () => W.filter((w) => w.k !== 'start' && w.k !== 'q').concat(S.custom.map(customWord), S.people.filter((pe) => !WD[pe.id]).map((pe) => word(pe.id)));
function libResults(q, n = 36) {
  const qq = norm(q.trim());
  return libWords().filter((w) => !qq || norm(label(w)).includes(qq)).slice(0, qq ? 60 : n);
}
function renderAsk() {
  return `<p class="hint">${T('askHelp')}</p>
  <div class="chips2">${QUICKQ.map((q, i) => `<button class="qchip" data-qq="${i}">${esc(nm(q))}</button>`).join('')}</div>
  <label class="f">${T('askQ')}<input id="askQ" value="${esc(ask.q)}" placeholder="${esc(T('askPh'))}" autocomplete="off"></label>
  <p class="flabel">${T('askAns')}</p>
  <div class="sel">${ask.a.length ? ask.a.map((id, i) => { const w = word(id); return w ? `<button class="selc c-${colOf(w)}" data-rma="${i}" aria-label="${esc(T('remove') + ' ' + label(w))}"><span class="mini">${pic(w)}</span>${esc(label(w))}${ui('close')}</button>` : ''; }).join('') : `<span class="hint">${T('askNone')}</span>`}</div>
  <label class="f">${T('search')}<input id="askS" type="search" value="${esc(query)}" autocomplete="off"></label>
  <div class="lib" id="lib">${libHTML()}</div>
  <div class="stick"><button class="btn primary big" data-open="ask"${ask.a.length ? '' : ' disabled'}>${ui('ask')}${T('show')}</button></div>`;
}
function libHTML() { return libResults(query).map((w) => `<button class="libw${ask.a.includes(w.id) ? ' is-on' : ''}" data-lib="${w.id}" aria-pressed="${ask.a.includes(w.id)}"><span class="mini">${pic(w)}</span><span>${esc(label(w))}</span></button>`).join(''); }
function showAsk(fromVoice) {
  const q = ask.q.trim();
  $('#ask').innerHTML = `<button class="iconbtn askx" data-close="ask" aria-label="${T('close')}">${ui('close')}</button>
    <div class="askhead"><span class="askav">${avatarSVG('happy')}</span><p class="askq">${esc(q || '…')}</p></div>
    <div class="askg n${ask.a.length}">${ask.a.map((id) => { const w = word(id); return `<button class="opt c-${colOf(w)}" data-ans="${id}"><span class="pic">${pic(w)}</span><span class="lbl">${esc(label(w))}</span></button>`; }).join('')}</div>
    <div class="askfoot" hidden><button class="btn" data-again="1">${T('another')}</button><button class="btn" data-close="ask">${T('back')}</button></div>`;
  $('#ask').hidden = false;
  if (q && !fromVoice) { speak(q); logIt('a', q); }
}

/* ---------- Adulte : fil, écrire ---------- */
function renderLog() {
  if (!S.log.length) return `<p class="hint">${T('logEmpty')}</p>`;
  let day = '';
  const loc = L() === 'fr' ? 'fr-FR' : S.lang;
  return `<ol class="fil">${S.log.map((m) => {
    const d = new Date(m.ts), ds = d.toLocaleDateString(loc, { weekday: 'long', day: 'numeric', month: 'long' });
    const head = ds !== day ? `<li class="day">${esc(ds)}</li>` : ''; day = ds;
    return `${head}<li class="msg ${m.w === 'a' ? 'from-a' : 'from-c'}"><span>${esc(m.t)}</span><time>${d.toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' })}</time></li>`;
  }).join('')}</ol><button class="btn danger" id="logClr">${ui('trash')}${T('logClear')}</button>`;
}
function renderWrite() { return `<label class="sr" for="wTxt">${T('writeHint')}</label><textarea id="wTxt" placeholder="${esc(T('writeHint'))}"></textarea><div class="row"><button class="btn" id="wClr">${T('clear')}</button><button class="btn primary" id="wSay">${ui('say')}${T('say')}</button></div>`; }

/* ---------- Adulte : code et réglages ---------- */
let pin = '', firstPin = '';
function renderLock(msg) {
  const mode = !S.code ? (firstPin ? 'confirm' : 'create') : 'enter';
  return `<div class="lock"><h2>${T('lockTitle')}</h2><p class="${msg ? 'err' : ''}" role="status">${esc(msg || T(mode === 'create' ? 'lockCreate' : mode === 'confirm' ? 'lockConfirm' : 'lockEnter'))}</p>
  <div class="dots" aria-hidden="true">${[0, 1, 2, 3].map((i) => `<span class="${i < pin.length ? 'on' : ''}"></span>`).join('')}</div>
  <div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => `<button data-d="${d}">${d}</button>`).join('')}<span></span><button data-d="0">0</button><button data-d="x" aria-label="${T('erase')}">${ui('del')}</button></div></div>`;
}
function pinKey(d) {
  if (d === 'x') { pin = pin.slice(0, -1); return renderAdult(); }
  if (pin.length >= 4) return;
  pin += d; renderAdult();
  if (pin.length < 4) return;
  setTimeout(() => {
    let msg = '';
    if (!S.code && !firstPin) { firstPin = pin; }
    else if (!S.code) { if (pin === firstPin) { S.code = pin; save(); unlocked = true; } else msg = T('lockMismatch'); firstPin = ''; }
    else if (pin === S.code) unlocked = true; else msg = T('lockWrong');
    pin = ''; renderAdult(msg);
  }, 150);
}
let objHot = 'frigo', newImg = '', editSc = null, selZ = -1, zq = '';
const opt = (v, t, cur) => `<option value="${esc(v)}"${String(v) === String(cur) ? ' selected' : ''}>${esc(t)}</option>`;
const seg = (name, items, cur) => `<div class="seg">${items.map(([v, t]) => `<label><input type="radio" name="${name}" value="${v}"${String(v) === String(cur) ? ' checked' : ''}><span>${esc(t)}</span></label>`).join('')}</div>`;
const photoBtn = (id, cls = 'btn') => `<label class="${cls}">${ui('cam')}${T('choosePhoto')}<input type="file" id="${id}" accept="image/*" class="sr"></label>`;
function renderSettings() {
  if (editSc) return renderEditor();
  const lv = voices.filter((v) => v.lang.replace('_', '-').startsWith(L()));
  const h = hotDef(objHot), base = HOTS[objHot];
  const hotOpts = SCENES.filter((s) => s.id !== 'gens').map((s) => `<optgroup label="${esc(nm(s))}">${Object.keys(HOTS).filter((k) => SCENE_ART[s.id].includes(`data-hot="${k}"`) && (HOTS[k].o || []).length && HOTS[k].mode !== 'pain').map((k) => opt(k, nm(HOTS[k]), objHot)).join('')}</optgroup>`).join('');
  const allO = (base.o || []).concat(S.custom.filter((c) => c.hot === objHot).map((c) => 'veux:' + c.id));
  return `${renderAvatarSet()}<details><summary>${T('sChild')}</summary>${seg('gender', [['f', T('girl')], ['m', T('boy')]], S.gender)}
    <label class="f">${T('lang')}<select id="sLang">${opt('fr', 'Français', S.lang)}${opt('en-US', 'English (US)', S.lang)}${opt('en-GB', 'English (UK)', S.lang)}</select></label></details>
  <details><summary>${T('sDay')}</summary><label class="chk"><input type="checkbox" id="sAuto"${S.auto ? ' checked' : ''}> ${T('autoRoom')}</label><p class="hint">${T('dayHelp')}</p>
    <ul class="routine">${ROUTINE.map(([t, r]) => `<li><b>${String(Math.floor(t)).padStart(2, '0')}:${String(Math.round((t % 1) * 60)).padStart(2, '0')}</b> ${esc(nm(SCENES.find((s) => s.id === r)))}</li>`).join('')}</ul></details>
  <details><summary>${T('sPeople')}</summary><p class="hint">${T('peopleHelp')}</p>
    <ul class="plist">${S.people.map((pe, i) => { const w = word(pe.id); return `<li><span class="mini big">${pic(w)}</span><input aria-label="${T('name')}" data-pname="${i}" value="${esc(pe.name || '')}" placeholder="${esc(label(WD[pe.id] || w))}">${photoBtn('pimg' + i, 'iconbtn')}<button class="iconbtn" data-pdel="${i}" aria-label="${T('del')}">${ui('trash')}</button></li>`; }).join('')}</ul>
    <button class="btn" id="pAdd">${ui('plus')}${T('addPerson')}</button></details>
  <details id="dObj"><summary>${T('sObjects')}</summary><p class="hint">${T('objHelp')}</p>
    <label class="f">${T('object')}<select id="sHot">${hotOpts}</select></label>
    <ul class="olist">${allO.map((o) => { const v = optView(o, h); return `<li><label class="chk"><input type="checkbox" data-hide="${esc(o)}"${(S.hidden[objHot] || []).includes(o) ? '' : ' checked'}><span class="mini">${v.ic}</span>${esc(optText(o))}</label>${parts(o).a.startsWith('c') && word(parts(o).a) && word(parts(o).a).custom ? `<button class="iconbtn" data-cdel="${parts(o).a}" aria-label="${T('del')}">${ui('trash')}</button>` : ''}</li>`; }).join('')}</ul>
    <fieldset class="add"><legend>${T('addChoice')}</legend><label class="f">${T('word')}<input id="nLabel" autocomplete="off"></label>
      <label class="f">${T('how')}<select id="nArt">${Object.keys(ART).map((a) => opt(a, a || T('none'), 'un')).join('')}</select></label>
      <div class="photo"><span class="mini big" id="nPrev">${newImg ? `<img src="${newImg}" alt="">` : picto('photo')}</span>${photoBtn('nImg')}</div>
      <button class="btn primary" id="nAdd">${T('add')}</button></fieldset></details>
  <details id="dSc"><summary>${T('sScenes')}</summary><p class="hint">${T('scHelp')}</p>
    <ul class="plist">${S.scenes.map((s) => `<li><span class="mini big"><img src="${s.img}" alt=""></span><span class="grow">${esc(s.name)}</span><button class="btn" data-sedit="${s.id}">${T('edit')}</button><button class="iconbtn" data-sdel="${s.id}" aria-label="${T('del')}">${ui('trash')}</button></li>`).join('')}</ul>
    <fieldset class="add"><label class="f">${T('scName')}<input id="scName" autocomplete="off"></label><div class="photo"><span class="mini big" id="scPrev">${newImg ? `<img src="${newImg}" alt="">` : picto('photo')}</span>${photoBtn('scImg')}</div><button class="btn primary" id="scNew">${T('scNew')}</button></fieldset></details>
  <details><summary>${T('sVoice')}</summary>
    <label class="f">${T('voice')}<select id="sVoice">${opt('', T('vDefault'), S.voice)}${lv.map((v) => opt(v.voiceURI, v.name + ' (' + v.lang + ')', S.voice)).join('')}</select></label>
    <label class="f">${T('rate')}<input type="range" id="sRate" min="0.6" max="1.3" step="0.05" value="${S.rate}"></label>
    <label class="f">${T('pitch')}<input type="range" id="sPitch" min="0.7" max="1.4" step="0.05" value="${S.pitch}"></label>
    <button class="btn" id="sTest">${ui('say')}${T('test')}</button></details>
  <details><summary>${T('sDisplay')}</summary><p class="flabel">${T('theme')}</p>${seg('theme', [['auto', T('tAuto')], ['light', T('tLight')], ['dark', T('tDark')]], S.theme)}</details>
  <details><summary>${T('sCode')}</summary><button class="btn" id="sCode">${T('newCode')}</button></details>
  <details><summary>${T('sBackup')}</summary><div class="row"><button class="btn" id="sExp">${T('export')}</button><label class="btn">${T('import')}<input type="file" id="sImp" accept="application/json,.json" class="sr"></label></div></details>
  <details><summary>${T('sAbout')}</summary><p class="hint">${T('about')}</p><p class="hint">${T('version')} ${APP_VERSION}</p><button class="btn danger" id="sReset">${T('reset')}</button></details>`;
}
function renderEditor() {
  const sc = S.scenes.find((x) => x.id === editSc), z = sc.zones[selZ];
  const qq = norm(zq.trim()), lib = libWords().filter((w) => !qq || norm(label(w)).includes(qq)).slice(0, qq ? 60 : 30);
  return `<div class="ptop"><h2>${esc(sc.name)}</h2><button class="btn primary" id="edDone">${T('done')}</button></div><p class="hint">${T('zHelp')}</p>
  <div class="edwrap"><svg class="edsvg" viewBox="0 0 ${sc.w} ${sc.h}"><image href="${sc.img}" width="${sc.w}" height="${sc.h}"/>${sc.zones.map((zz, i) => `<circle class="zc${i === selZ ? ' sel' : ''}" data-z="${i}" cx="${zz.x * sc.w}" cy="${zz.y * sc.h}" r="${zz.r * sc.w}"/>`).join('')}</svg></div>
  ${z ? `<fieldset class="add"><label class="f">${T('zName')}<input id="zName" value="${esc(z.name)}" autocomplete="off"></label>
    <label class="f">${T('zSize')}<input type="range" id="zSize" min="0.03" max="0.3" step="0.01" value="${z.r}"></label>
    <p class="flabel">${T('zChoices')}</p><div class="sel">${z.o.map((o, i) => { const v = optView(o); return `<button class="selc c-${v.col}" data-zrm="${i}" aria-label="${esc(T('remove') + ' ' + v.lb)}"><span class="mini">${v.ic}</span>${esc(v.lb)}${ui('close')}</button>`; }).join('')}</div>
    <label class="f">${T('search')}<input id="zS" type="search" value="${esc(zq)}" autocomplete="off"></label>
    <div class="lib">${lib.map((w) => `<button class="libw" data-zadd="${w.id}"><span class="mini">${pic(w)}</span><span>${esc(label(w))}</span></button>`).join('')}</div>
    <button class="btn danger" id="zDel">${ui('trash')}${T('del')}</button></fieldset>` : ''}`;
}
function renderAdult(msg) {
  const body = adultTab === 'ask' ? renderAsk() : adultTab === 'log' ? renderLog() : adultTab === 'bilan' ? renderBilan() : adultTab === 'write' ? renderWrite() : unlocked ? renderSettings() : renderLock(msg);
  const was = $$('#adult details').map((d) => d.open);
  $('#adult').innerHTML = `<div class="ahead"><button class="btn" data-close="adult">${ui('close')}${T('back')}</button></div>
    <div class="atabs" role="tablist">${[['ask', 'tAsk'], ['log', 'tLog'], ['bilan', 'tBilan'], ['write', 'tWrite'], ['set', 'tSet']].map(([k, t]) => `<button role="tab" aria-selected="${k === adultTab}" data-atab="${k}">${ui(k)}<span>${T(t)}</span></button>`).join('')}</div>
    <div class="abody">${body}</div>`;
  const ds = $$('#adult details'); if (was.length === ds.length) ds.forEach((d, i) => { d.open = was[i]; });
  $('#adult').hidden = false;
}
function resizeImg(file, max) {
  return new Promise((res, rej) => {
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => {
      const s = Math.min(1, max / Math.max(img.width, img.height)), cv = document.createElement('canvas');
      cv.width = Math.round(img.width * s); cv.height = Math.round(img.height * s);
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height); URL.revokeObjectURL(url);
      res({ src: cv.toDataURL('image/jpeg', 0.78), w: cv.width, h: cv.height }); // shortcut: photos en base64 dans localStorage (~5 Mo), passer à @capacitor/filesystem dans l'appli native
    };
    img.onerror = rej; img.src = url;
  });
}

/* ---------- Thème, langue, démarrage ---------- */
function applyTheme() {
  const dark = S.theme === 'dark' || (S.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  $('meta[name=theme-color]').content = dark ? '#12161D' : '#F4F6F8';
}
function idleBubble() { const b = $('#bubble'); b.className = 'idle'; b.dataset.t = ''; b.innerHTML = `<span class="av">${avatarSVG('happy')}</span><span class="btx">${esc(T('hint'))}</span>`; }
function renderAll() { if ($('#bubble').classList.contains('idle')) idleBubble(); renderSugg(); document.documentElement.lang = L(); document.title = T('app'); applyTheme(); renderUrg(); renderRooms(); renderScene(); if (sheetHot) renderSheet(); }
let toastT;
function toast(m) { const t = $('#toast'); t.textContent = m; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2400); }

/* ---------- Événements ---------- */
document.addEventListener('click', (e) => {
  const zc = e.target.closest('.edsvg');
  if (zc) {
    const sc = S.scenes.find((x) => x.id === editSc), c = e.target.closest('[data-z]');
    if (c) selZ = +c.dataset.z;
    else { const pt = zc.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY; const q = pt.matrixTransform(zc.getScreenCTM().inverse()); sc.zones.push({ x: q.x / sc.w, y: q.y / sc.h, r: 0.08, name: '', o: [] }); selZ = sc.zones.length - 1; save(); }
    zq = ''; return renderAdult();
  }
  const b = e.target.closest('button, [data-hot]'); if (!b) return;
  const d = b.dataset;
  if (d.hot) return openSheet(d.hot);
  if (d.urg) {
    const u = URG.find((x) => x.id === d.urg); say(urgTxt(u)[1], picto(u.ic), 'urg:' + u.id);
    if (u.id === 'mal') goScene('moi');
    return;
  }
  if (d.room) return goScene(d.room);
  if (d.o !== undefined) { const h = hotDef(sheetHot), o = h.o[+d.o]; const v = optView(o, h, neg); say(optText(o, neg), v.ic, o + (neg ? '|n' : '')); return closeSheet(); }
  if (d.neg !== undefined) { neg = d.neg === '1'; return renderSheet(); }
  if (d.close === 'sheet') return closeSheet();
  if (d.close === 'adult') { $('#adult').hidden = true; unlocked = false; pin = firstPin = ''; editSc = null; view = 'child'; return renderAll(); }
  if (d.close === 'ask') { $('#ask').hidden = true; return; }
  if (d.open === 'adult') { view = 'adult'; closeSheet(); return renderAdult(); }
  if (d.open === 'listen') { closeSheet(); return startListen(); }
  if (d.close === 'listen') return stopListen();
  if (d.sg) { const [o, n] = d.sg.split('|'); const v = optView(o, null, !!n); return say(optText(o, !!n), v.ic, d.sg); }
  if (b.id === 'bPrint') return window.print();
  if (d.open === 'ask') { ask.q = $('#askQ').value; return showAsk(); }
  if (d.again) { $('#ask').hidden = true; if (ask.voice) return startListen(); ask = { q: '', a: [] }; adultTab = 'ask'; view = 'adult'; return renderAdult(); }
  if (d.ans) {
    const w = word(d.ans); say(optText(defOpt(w)), pic(w), defOpt(w));
    $$('#ask .opt').forEach((x) => x.classList.toggle('dim', x !== b)); $('.askfoot').hidden = false; return;
  }
  if (d.atab) { adultTab = d.atab; if (d.atab !== 'set') { unlocked = false; editSc = null; } return renderAdult(); }
  if (d.qq !== undefined) { const q = QUICKQ[+d.qq]; ask = { q: nm(q), a: q.a.slice() }; return renderAdult(); }
  if (d.lib) { ask.q = $('#askQ').value; const i = ask.a.indexOf(d.lib); if (i >= 0) ask.a.splice(i, 1); else if (ask.a.length < 4) ask.a.push(d.lib); return renderAdult(); }
  if (d.rma !== undefined) { ask.q = $('#askQ').value; ask.a.splice(+d.rma, 1); return renderAdult(); }
  if (d.d) return pinKey(d.d);
  if (d.pdel !== undefined) { S.people.splice(+d.pdel, 1); save(); return renderAdult(); }
  if (d.cdel) { S.custom = S.custom.filter((c) => c.id !== d.cdel); save(); return renderAdult(); }
  if (d.sedit) { editSc = d.sedit; selZ = -1; return renderAdult(); }
  if (d.sdel) { S.scenes = S.scenes.filter((s) => s.id !== d.sdel); if (scene === d.sdel) scene = 'cuisine'; save(); return renderAdult(); }
  if (d.zadd) { const z = S.scenes.find((x) => x.id === editSc).zones[selZ]; const o = defOpt(word(d.zadd)); if (z.o.length < 8 && !z.o.includes(o)) { z.o.push(o); if (!z.name) z.name = label(word(d.zadd)); } save(); return renderAdult(); }
  if (d.zrm !== undefined) { S.scenes.find((x) => x.id === editSc).zones[selZ].o.splice(+d.zrm, 1); save(); return renderAdult(); }
  switch (b.id) {
    case 'bubble': return b.dataset.t && speak(b.dataset.t);
    case 'logClr': if (confirm(T('logAsk'))) { S.log = []; save(); renderAdult(); } return;
    case 'wSay': { const x = $('#wTxt').value.trim(); if (x) { speak(x); logIt('c', x); } return; }
    case 'wClr': $('#wTxt').value = ''; return $('#wTxt').focus();
    case 'sTest': return speak(T('testText'));
    case 'sCode': S.code = ''; save(); unlocked = false; pin = firstPin = ''; return renderAdult();
    case 'pAdd': S.people.push({ id: 'p' + Date.now().toString(36), name: '' }); save(); return renderAdult();
    case 'nAdd': {
      const lab = $('#nLabel').value.trim(); if (!lab) return $('#nLabel').focus();
      S.custom.push({ id: 'c' + Date.now().toString(36), hot: objHot, label: lab, art: $('#nArt').value, img: newImg }); newImg = '';
      save(); toast(T('added')); return renderAdult();
    }
    case 'scNew': {
      const n = $('#scName').value.trim(); if (!n) return $('#scName').focus(); if (!newImg) return toast(T('choosePhoto'));
      const sc = { id: 's' + Date.now().toString(36), name: n, img: newImg, w: newDim.w, h: newDim.h, zones: [] };
      S.scenes.push(sc); newImg = ''; if (!save()) { S.scenes.pop(); return; }
      editSc = sc.id; selZ = -1; return renderAdult();
    }
    case 'edDone': editSc = null; renderRooms(); return renderAdult();
    case 'zDel': S.scenes.find((x) => x.id === editSc).zones.splice(selZ, 1); selZ = -1; save(); return renderAdult();
    case 'sExp': {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(Object.assign({ app: 'monmonde', v: APP_VERSION }, S, { code: '' }))], { type: 'application/json' }));
      a.download = 'mon-monde-sauvegarde.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); return;
    }
    case 'sReset': if (confirm(T('resetAsk'))) { const code = S.code; S = JSON.parse(JSON.stringify(DEF)); S.code = code; save(); renderAll(); renderAdult(); } return;
  }
});
let newDim = { w: 0, h: 0 };
document.addEventListener('input', (e) => {
  const t = e.target;
  if (t.id === 'askS') { query = t.value; $('#lib').innerHTML = libHTML(); }
  else if (t.id === 'zS') { zq = t.value; const pos = t.selectionStart; renderAdult(); const n = $('#zS'); n.focus(); n.setSelectionRange(pos, pos); }
  else if (t.id === 'askQ') ask.q = t.value;
  else if (t.id === 'zSize' || t.id === 'zName') {
    const z = S.scenes.find((x) => x.id === editSc).zones[selZ];
    if (t.id === 'zSize') { z.r = +t.value; const c = $(`.zc[data-z="${selZ}"]`); if (c) c.setAttribute('r', z.r * S.scenes.find((x) => x.id === editSc).w); } else z.name = t.value;
    save();
  }
});
document.addEventListener('change', async (e) => {
  const t = e.target, d = t.dataset;
  if (t.name && t.name.startsWith('av_')) { S.av[t.name.slice(3)] = t.type === 'checkbox' ? (t.checked ? 1 : 0) : t.value; save(); renderAll(); return renderAdult(); }
  if (t.name === 'gender') S.gender = t.value;
  else if (t.name === 'theme') { S.theme = t.value; applyTheme(); }
  else if (t.id === 'sLang') { S.lang = t.value; S.voice = ''; save(); renderAll(); return renderAdult(); }
  else if (t.id === 'sAuto') S.auto = t.checked;
  else if (t.id === 'sVoice') S.voice = t.value;
  else if (t.id === 'sRate') S.rate = +t.value;
  else if (t.id === 'sPitch') S.pitch = +t.value;
  else if (t.id === 'sHot') { objHot = t.value; return renderAdult(); }
  else if (d.pname !== undefined) S.people[+d.pname].name = t.value.trim();
  else if (d.hide) { const a = S.hidden[objHot] || []; S.hidden[objHot] = t.checked ? a.filter((x) => x !== d.hide) : a.concat(d.hide); }
  else if (t.type === 'file' && t.files[0]) {
    try {
      if (t.id === 'sImp') {
        const j = JSON.parse(await t.files[0].text()); if (j.app !== 'monmonde') throw new Error('bad');
        const code = S.code; S = Object.assign({}, DEF, j, { code }); delete S.app; delete S.v; save(); renderAll(); toast(T('imported')); return renderAdult();
      }
      const big = t.id === 'scImg', r0 = await resizeImg(t.files[0], big ? 1000 : 260);
      if (t.id.startsWith('pimg')) { S.people[+t.id.slice(4)].img = r0.src; save(); return renderAdult(); }
      newImg = r0.src; newDim = r0; $(big ? '#scPrev' : '#nPrev').innerHTML = `<img src="${newImg}" alt="">`;
    } catch (err) { toast(T('badFile')); }
    return;
  } else return;
  save();
  if (t.name === 'gender' || t.id === 'sAuto') renderAll();
});
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('g[data-hot]')) { e.preventDefault(); openSheet(e.target.dataset.hot); }
  if (e.key === 'Escape') { if (!$('#ask').hidden) $('#ask').hidden = true; else if (sheetHot) closeSheet(); }
});
$('#sheet').addEventListener('click', (e) => { if (e.target.id === 'sheet') closeSheet(); });
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
document.addEventListener('visibilitychange', () => { if (!document.hidden && S.auto && view === 'child' && !sheetHot && scene !== nowRoom() && SCENE_ART[scene] && Date.now() - lastTouch > 15 * 60e3) goScene(nowRoom()); });
let lastTouch = Date.now();
document.addEventListener('pointerdown', () => { lastTouch = Date.now(); }, true);

function boot() {
if (S.auto) scene = nowRoom();
renderAll(); setInterval(live, 30000);
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) navigator.serviceWorker.register('service-worker.js');
}
