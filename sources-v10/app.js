const APP_VERSION = '10.0.0';
const I18N = {
  fr: {
    say: 'Dire', del: 'Retirer le dernier mot', clear: 'Tout effacer', keep: 'Garder cette phrase', kept: 'Phrase gardée',
    empty: 'Touche les images pour parler', prev: 'Page précédente', next: 'Page suivante', page: 'Page',
    tTalk: 'Parler', tPhrases: 'Phrases', tWrite: 'Écrire', tParents: 'Parents',
    saved: 'Mes phrases', recent: 'Dites récemment', noSaved: 'Aucune phrase gardée. Fais une phrase, puis touche l’étoile pour la garder ici.', noRecent: 'Les phrases dites apparaîtront ici.',
    writeHint: 'Écris ici ce que tu veux dire', writeKeep: 'Garder',
    lockTitle: 'Espace parents', lockEnter: 'Tape ton code parent', lockCreate: 'Choisis un code à 4 chiffres', lockConfirm: 'Tape le même code encore une fois', lockWrong: 'Ce code ne marche pas. Réessaie.', lockMismatch: 'Les deux codes sont différents. Recommence.', erase: 'Effacer un chiffre',
    close: 'Fermer l’espace parents',
    sChild: 'Enfant', name: 'Prénom', girl: 'Fille', boy: 'Garçon', lang: 'Langue',
    sDisplay: 'Affichage', gridSize: 'Images par page', theme: 'Thème', tAuto: 'Comme l’appareil', tLight: 'Clair', tDark: 'Sombre', sayWords: 'Dire chaque mot touché',
    sVoice: 'Voix', rate: 'Vitesse', pitch: 'Hauteur', voice: 'Voix', vDefault: 'Voix par défaut', test: 'Écouter un essai', testText: 'Bonjour, je suis ta voix.',
    sWords: 'Mots', wordsHelp: 'Décoche un mot pour le cacher. Sa place reste vide, pour que les autres mots ne bougent jamais.', category: 'Catégorie', rename: 'Renommer',
    addWord: 'Ajouter un mot', word: 'Le mot', how: 'On dit : Je veux …', howPlace: 'On dit : Je vais …', none: '(rien)', photo: 'Photo ou image', choosePhoto: 'Choisir une photo', add: 'Ajouter', remove: 'Supprimer', added: 'Mot ajouté',
    sSecurity: 'Code parent', newCode: 'Changer le code',
    sBackup: 'Sauvegarde', export: 'Enregistrer une sauvegarde', import: 'Restaurer une sauvegarde', imported: 'Sauvegarde restaurée', badFile: 'Ce fichier n’est pas une sauvegarde de l’appli.',
    sAbout: 'À propos', about: 'Pictogrammes dessinés pour l’appli. Police Fira Sans (licence SIL OFL). Fonctionne sans internet.', version: 'Version',
    reset: 'Tout remettre comme au départ', resetAsk: 'Tout effacer et revenir aux réglages de départ ? Les mots ajoutés et les phrases gardées seront supprimés.',
  },
  en: {
    say: 'Speak', del: 'Remove last word', clear: 'Clear all', keep: 'Keep this sentence', kept: 'Sentence kept',
    empty: 'Touch the pictures to talk', prev: 'Previous page', next: 'Next page', page: 'Page',
    tTalk: 'Talk', tPhrases: 'Phrases', tWrite: 'Type', tParents: 'Parents',
    saved: 'My phrases', recent: 'Said recently', noSaved: 'No phrases kept yet. Build a sentence, then touch the star to keep it here.', noRecent: 'Sentences you say will appear here.',
    writeHint: 'Type what you want to say', writeKeep: 'Keep',
    lockTitle: 'Parents area', lockEnter: 'Enter your parent code', lockCreate: 'Choose a 4-digit code', lockConfirm: 'Enter the same code again', lockWrong: 'That code is not right. Try again.', lockMismatch: 'The two codes are different. Start again.', erase: 'Delete a digit',
    close: 'Close parents area',
    sChild: 'Child', name: 'First name', girl: 'Girl', boy: 'Boy', lang: 'Language',
    sDisplay: 'Display', gridSize: 'Pictures per page', theme: 'Theme', tAuto: 'Same as device', tLight: 'Light', tDark: 'Dark', sayWords: 'Speak each word touched',
    sVoice: 'Voice', rate: 'Speed', pitch: 'Pitch', voice: 'Voice', vDefault: 'Default voice', test: 'Play a sample', testText: 'Hello, I am your voice.',
    sWords: 'Words', wordsHelp: 'Untick a word to hide it. Its place stays empty, so the other words never move.', category: 'Category', rename: 'Rename',
    addWord: 'Add a word', word: 'The word', how: 'We say: I want …', howPlace: 'We say: I’m going …', none: '(nothing)', photo: 'Photo or picture', choosePhoto: 'Choose a photo', add: 'Add', remove: 'Delete', added: 'Word added',
    sSecurity: 'Parent code', newCode: 'Change the code',
    sBackup: 'Backup', export: 'Save a backup', import: 'Restore a backup', imported: 'Backup restored', badFile: 'This file is not a backup from the app.',
    sAbout: 'About', about: 'Pictures drawn for the app. Fira Sans font (SIL OFL licence). Works offline.', version: 'Version',
    reset: 'Reset everything', resetAsk: 'Erase everything and go back to the starting settings? Added words and kept phrases will be deleted.',
  },
};

/* ---------- État ---------- */
const KEY = 'jpat10';
const DEF = { lang: 'fr', gender: 'f', grid: 4, theme: 'auto', sayWords: true, rate: 0.95, pitch: 1, voice: '', code: '', hidden: [], labels: {}, custom: [], saved: [], history: [] };
let S = load();
function load() { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { return Object.assign({}, DEF); } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast('⚠ ' + e.name); } }
const L = () => (S.lang === 'fr' ? 'fr' : 'en');
const GB = () => S.lang === 'en-GB';
const T = (k) => I18N[L()][k] || k;
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
function list(a, and) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' ' + and + ' ' + a[a.length - 1]; }

/* ---------- Mots (de base + ajoutés) ---------- */
const WD = {};
W.forEach((w) => { WD[w.id] = w; });
const ART = { 'un': { g: 'm', ec: 'count' }, 'une': { g: 'f', ec: 'count' }, 'du': { g: 'm', m: 1, ec: 'mass' }, 'de la': { g: 'f', m: 1, ec: 'mass' }, "de l'": { g: 'm', m: 1, ec: 'mass' }, 'des': { g: 'p', ec: 'pl' }, 'mon': { pos: 1 }, 'ma': { pos: 1 }, 'mes': { pos: 1 }, '': { pos: 1 } };
const PREP = ['au', 'à la', "à l'", 'aux', 'chez', 'dans', ''];
function customWord(c) {
  const base = { id: c.id, cat: c.cat, custom: 1, img: c.img, lbl: cap(c.label), elbl: cap(c.label) };
  if (c.cat === 'debut') return Object.assign(base, { k: 'pers', fr: c.label, en: c.label });
  if (c.cat === 'lieux') {
    const fa = c.art === "à l'" ? "à l'" + c.label : (c.art ? c.art + ' ' : '') + c.label;
    return Object.assign(base, { k: 'place', fr: c.label, fa, fd: c.label, en: c.label, ea: 'to ' + c.label, ed: c.label });
  }
  const a = ART[c.art] || ART['un'];
  const w = Object.assign(base, { k: 'noun', fr: c.label, en: c.label, g: a.g || 'm', m: a.m, ec: a.ec || 'count' });
  if (a.pos) { w.pos = (c.art === "de l'" || !c.art ? '' : c.art + ' ') + c.label; w.epos = c.art ? 'my ' + c.label : c.label; }
  return w;
}
function allWords() { return W.concat(S.custom.map(customWord)); }
function word(id) { return WD[id] || (S.custom.find((c) => c.id === id) && customWord(S.custom.find((c) => c.id === id))); }
function persName(w) { return S.labels[w.id] || (L() === 'fr' ? w.fr : (GB() && w.gb) || w.en); }
function label(w) {
  if (S.labels[w.id]) return S.labels[w.id];
  if (L() === 'fr') return w.lbl || cap(w.k === 'feel' && Array.isArray(w.fr) ? w.fr[S.gender === 'f' ? 1 : 0] : w.fr);
  if (w.k === 'start' || w.k === 'q' || w.k === 'pers') return w.elbl || cap((GB() && typeof w.gb === 'string' && w.gb) || w.en);
  return w.elbl || cap(grammarEN.e(w));
}
const COL = { pers: 'pers', start: 'verb', verb: 'verb', noun: 'noun', body: 'noun', place: 'noun', feel: 'desc', soc: 'soc', q: 'q' };
const colOf = (w) => w.col || COL[w.k];

/* ---------- Composition de la phrase ---------- */
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

/* ---------- Voix ---------- */
let voices = [];
function loadVoices() { if ('speechSynthesis' in window) voices = speechSynthesis.getVoices(); }
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); if (view === 'parents' && unlocked) renderParents(); }; }
const langCode = () => (S.lang === 'fr' ? 'fr-FR' : S.lang);
function speak(text) {
  if (!text || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = langCode(); u.rate = S.rate; u.pitch = S.pitch;
  const v = voices.find((x) => x.voiceURI === S.voice) || voices.find((x) => x.lang.replace('_', '-') === langCode()) || voices.find((x) => x.lang.startsWith(L()));
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

/* ---------- Icônes d'interface ---------- */
const UI = {
  say: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
  del: '<path d="M21 5H9l-6 7 6 7h12z"/><path d="M12 9l6 6M18 9l-6 6"/>',
  clear: '<path d="M6 6l12 12M18 6L6 18"/>',
  star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>',
  prev: '<path d="M15 5l-7 7 7 7"/>', next: '<path d="M9 5l7 7-7 7"/>',
  talk: '<path d="M4 5h16v11H9l-5 4z"/>', phrases: '<path d="M5 6h14M5 12h14M5 18h9"/>',
  write: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h1M10 10h1M14 10h1M18 10h0M7 14h10"/>',
  parents: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
};
const ui = (k, cls = '') => `<svg class="ui ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${UI[k]}</g></svg>`;
const pic = (w) => (w.img ? `<img src="${w.img}" alt="">` : picto(w.id));

/* ---------- Écran Parler ---------- */
let tokens = [], cat = 'debut', pages = {}, view = 'talk', unlocked = false;
function tile(w, ess) {
  const lbl = ess ? w[L() === 'fr' ? 'fr' : GB() && w.gb ? 'gb' : 'en'][0] : label(w);
  return `<button class="tile c-${ess ? w.col : colOf(w)}${ess ? ' ess-t' : ''}" data-id="${w.id}" ${ess ? 'data-ess="1"' : ''} aria-label="${esc(lbl)}"><span class="pic">${ess ? picto(w.id) : pic(w)}</span><span class="lbl">${esc(lbl)}</span></button>`;
}
function renderPhrase() {
  const txt = compose(tokens);
  $('#chips').innerHTML = tokens.map((id) => { const w = word(id); return w ? `<span class="chip">${pic(w)}</span>` : ''; }).join('');
  $('#txt').textContent = txt || T('empty');
  $('#phrase').classList.toggle('is-empty', !txt);
  ['#bDel', '#bClr', '#bKeep', '#bSay'].forEach((s) => { $(s).disabled = !tokens.length; });
}
function renderEss() { $('#ess').innerHTML = ESS.map((w) => tile(w, true)).join(''); }
function renderCats() {
  $('#cats').innerHTML = CATS.map((c) => `<button role="tab" aria-selected="${c.id === cat}" data-cat="${c.id}"><span class="cpic">${picto('cat_' + c.id)}</span><span>${esc(c[L()])}</span></button>`).join('');
  const on = $('#cats [aria-selected="true"]'); if (on) on.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}
function renderGrid() {
  const n = S.grid, per = n * n, words = allWords().filter((w) => w.cat === cat);
  const max = Math.max(1, Math.ceil(words.length / per));
  const pg = Math.min(pages[cat] || 0, max - 1); pages[cat] = pg;
  const slice = words.slice(pg * per, pg * per + per);
  let h = slice.map((w) => (S.hidden.includes(w.id) ? '<div class="slot"></div>' : tile(w))).join('');
  for (let i = slice.length; i < per; i++) h += '<div class="slot"></div>';
  const g = $('#grid'); g.style.setProperty('--n', n); g.innerHTML = h;
  $('#pager').hidden = max < 2;
  $('#pgTxt').textContent = `${pg + 1} / ${max}`;
  $('#pgPrev').disabled = pg === 0; $('#pgNext').disabled = pg >= max - 1;
}
function goCat(id) { cat = id; pages[id] = 0; renderCats(); renderGrid(); }
function addToken(id) {
  const w = word(id); if (!w) return;
  if (w.k === 'soc' || w.k === 'q') { speak(L() === 'fr' ? w.fr : w.en); return; }
  tokens.push(id); renderPhrase();
  if (S.sayWords) speak(w.k === 'pers' ? persName(w) : label(w));
  if (w.k === 'start' && w.go) goCat(w.go);
}
function sayAll() {
  const txt = compose(tokens); if (!txt) return;
  speak(txt);
  S.history = [tokens.slice()].concat(S.history.filter((h) => h.join() !== tokens.join())).slice(0, 12); save();
}

/* ---------- Phrases ---------- */
function phraseRow(p, i, kind) {
  const toks = p.t || [], txt = toks.length ? compose(toks) : p.x;
  return `<li><button class="prow" data-kind="${kind}" data-i="${i}"><span class="pchips">${toks.map((id) => { const w = word(id); return w ? `<span class="chip">${pic(w)}</span>` : ''; }).join('')}</span><span class="ptxt">${esc(txt)}</span></button>${kind === 'saved' ? `<button class="iconbtn" data-rm="${i}" aria-label="${esc(T('remove'))}">${ui('trash')}</button>` : ''}</li>`;
}
function renderPhrases() {
  $('#vPhrases').innerHTML = `<h2>${T('saved')}</h2>${S.saved.length ? `<ul class="plist">${S.saved.map((p, i) => phraseRow(p, i, 'saved')).join('')}</ul>` : `<p class="hint">${T('noSaved')}</p>`}
  <h2>${T('recent')}</h2>${S.history.length ? `<ul class="plist">${S.history.map((t, i) => phraseRow({ t }, i, 'recent')).join('')}</ul>` : `<p class="hint">${T('noRecent')}</p>`}`;
}

/* ---------- Écrire ---------- */
function renderWrite() {
  $('#vWrite').innerHTML = `<label class="sr" for="wTxt">${T('writeHint')}</label><textarea id="wTxt" placeholder="${esc(T('writeHint'))}" autocomplete="off"></textarea>
  <div class="row"><button class="btn" id="wClr">${ui('clear')}${T('clear')}</button><button class="btn" id="wKeep">${ui('star')}${T('writeKeep')}</button><button class="btn primary" id="wSay">${ui('say')}${T('say')}</button></div>`;
}

/* ---------- Parents : code ---------- */
let pin = '', firstPin = '';
function renderLock(msg) {
  const mode = !S.code ? (firstPin ? 'confirm' : 'create') : 'enter';
  const title = mode === 'create' ? T('lockCreate') : mode === 'confirm' ? T('lockConfirm') : T('lockEnter');
  $('#vParents').innerHTML = `<div class="lock"><h2>${T('lockTitle')}</h2><p id="lockMsg" class="${msg ? 'err' : ''}" role="status">${esc(msg || title)}</p>
  <div class="dots" aria-hidden="true">${[0, 1, 2, 3].map((i) => `<span class="${i < pin.length ? 'on' : ''}"></span>`).join('')}</div>
  <div class="pad">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => `<button data-d="${d}">${d}</button>`).join('')}<span></span><button data-d="0">0</button><button data-d="x" aria-label="${T('erase')}">${ui('del')}</button></div></div>`;
}
function pinKey(d) {
  if (d === 'x') { pin = pin.slice(0, -1); renderLock(); return; }
  if (pin.length >= 4) return;
  pin += d; renderLock();
  if (pin.length < 4) return;
  setTimeout(() => {
    if (!S.code && !firstPin) { firstPin = pin; pin = ''; renderLock(); }
    else if (!S.code) {
      if (pin === firstPin) { S.code = pin; save(); unlocked = true; pin = firstPin = ''; renderParents(); }
      else { pin = firstPin = ''; renderLock(T('lockMismatch')); }
    } else if (pin === S.code) { unlocked = true; pin = ''; renderParents(); }
    else { pin = ''; renderLock(T('lockWrong')); }
  }, 150);
}

/* ---------- Parents : réglages ---------- */
let wCat = 'manger', newImg = '';
function opt(v, txt, cur) { return `<option value="${esc(v)}"${String(v) === String(cur) ? ' selected' : ''}>${esc(txt)}</option>`; }
function seg(name, items, cur) { return `<div class="seg" role="radiogroup">${items.map(([v, t]) => `<label><input type="radio" name="${name}" value="${v}"${String(v) === String(cur) ? ' checked' : ''}><span>${esc(t)}</span></label>`).join('')}</div>`; }
function renderParents() {
  const lv = voices.filter((v) => v.lang.replace('_', '-').startsWith(L()));
  const ws = allWords().filter((w) => w.cat === wCat);
  const place = wCat === 'lieux', pers = wCat === 'debut';
  const was = [...document.querySelectorAll('#vParents details')].map((d) => d.open);
  $('#vParents').innerHTML = `<div class="ptop"><h2>${T('lockTitle')}</h2><button class="btn" id="pClose">${ui('parents')}${T('close')}</button></div>
  <details open><summary>${T('sChild')}</summary>
    ${seg('gender', [['f', T('girl')], ['m', T('boy')]], S.gender)}
    <label class="f">${T('lang')}<select id="pLang">${opt('fr', 'Français', S.lang)}${opt('en-US', 'English (US)', S.lang)}${opt('en-GB', 'English (UK)', S.lang)}</select></label>
  </details>
  <details><summary>${T('sDisplay')}</summary>
    <p class="flabel">${T('gridSize')}</p>${seg('grid', [[2, '4'], [3, '9'], [4, '16'], [5, '25']], S.grid)}
    <p class="flabel">${T('theme')}</p>${seg('theme', [['auto', T('tAuto')], ['light', T('tLight')], ['dark', T('tDark')]], S.theme)}
    <label class="chk"><input type="checkbox" id="pSayW"${S.sayWords ? ' checked' : ''}> ${T('sayWords')}</label>
  </details>
  <details><summary>${T('sVoice')}</summary>
    <label class="f">${T('voice')}<select id="pVoice">${opt('', T('vDefault'), S.voice)}${lv.map((v) => opt(v.voiceURI, v.name + ' (' + v.lang + ')', S.voice)).join('')}</select></label>
    <label class="f">${T('rate')}<input type="range" id="pRate" min="0.6" max="1.3" step="0.05" value="${S.rate}"></label>
    <label class="f">${T('pitch')}<input type="range" id="pPitch" min="0.7" max="1.4" step="0.05" value="${S.pitch}"></label>
    <button class="btn" id="pTest">${ui('say')}${T('test')}</button>
  </details>
  <details id="dWords"><summary>${T('sWords')}</summary>
    <label class="f">${T('category')}<select id="pCat">${CATS.map((c) => opt(c.id, c[L()], wCat)).join('')}</select></label>
    <p class="hint">${T('wordsHelp')}</p>
    <ul class="wlist">${ws.map((w) => `<li><label class="wchk"><input type="checkbox" data-vis="${w.id}"${S.hidden.includes(w.id) ? '' : ' checked'}><span class="mini">${pic(w)}</span><span>${esc(label(w))}</span></label>
      ${w.k === 'pers' && !w.custom ? `<button class="iconbtn" data-ren="${w.id}" aria-label="${esc(T('rename') + ' ' + label(w))}">${ui('write')}</button>` : ''}
      ${w.custom ? `<button class="iconbtn" data-del="${w.id}" aria-label="${esc(T('remove') + ' ' + label(w))}">${ui('trash')}</button>` : ''}</li>`).join('')}</ul>
    ${['debut', 'manger', 'lieux', 'objets'].includes(wCat) ? `<fieldset class="add"><legend>${T('addWord')}</legend>
      <label class="f">${T('word')}<input id="nLabel" autocomplete="off"></label>
      ${pers ? '' : `<label class="f">${place ? T('howPlace') : T('how')}<select id="nArt">${(place ? PREP : Object.keys(ART)).map((a) => opt(a, a || T('none'), place ? 'au' : 'un')).join('')}</select></label>`}
      <div class="photo"><span class="mini" id="nPrev">${newImg ? `<img src="${newImg}" alt="">` : picto('photo')}</span><label class="btn">${T('choosePhoto')}<input type="file" id="nImg" accept="image/*" class="sr"></label></div>
      <button class="btn primary" id="nAdd">${T('add')}</button></fieldset>` : ''}
  </details>
  <details><summary>${T('sSecurity')}</summary><button class="btn" id="pCode">${T('newCode')}</button></details>
  <details><summary>${T('sBackup')}</summary><div class="row"><button class="btn" id="pExp">${T('export')}</button><label class="btn">${T('import')}<input type="file" id="pImp" accept="application/json,.json" class="sr"></label></div></details>
  <details><summary>${T('sAbout')}</summary><p class="hint">${T('about')}</p><p class="hint">${T('version')} ${APP_VERSION}</p><button class="btn danger" id="pReset">${T('reset')}</button></details>`;
  const ds = document.querySelectorAll('#vParents details');
  if (was.length === ds.length) ds.forEach((d, i) => { d.open = was[i]; });
}
function resizeImg(file) {
  return new Promise((res, rej) => {
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => {
      const s = 240 / Math.max(img.width, img.height), cv = document.createElement('canvas');
      cv.width = Math.round(img.width * Math.min(1, s)); cv.height = Math.round(img.height * Math.min(1, s));
      cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height); URL.revokeObjectURL(url);
      res(cv.toDataURL('image/jpeg', 0.82)); // shortcut: photos en base64 dans localStorage (~5 Mo max), passer à @capacitor/filesystem dans l'appli native
    };
    img.onerror = rej; img.src = url;
  });
}

/* ---------- Navigation et thème ---------- */
function applyTheme() {
  const dark = S.theme === 'dark' || (S.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  $('meta[name=theme-color]').content = dark ? '#151B26' : '#F1F3F7';
}
function applyLang() {
  document.documentElement.lang = L();
  $('#bSay').innerHTML = ui('say') + `<span>${T('say')}</span>`;
  $('#bDel').setAttribute('aria-label', T('del')); $('#bClr').setAttribute('aria-label', T('clear')); $('#bKeep').setAttribute('aria-label', T('keep'));
  $('#pgPrev').setAttribute('aria-label', T('prev')); $('#pgNext').setAttribute('aria-label', T('next'));
  $('#tabs').innerHTML = [['talk', 'tTalk'], ['phrases', 'tPhrases'], ['write', 'tWrite'], ['parents', 'tParents']].map(([v, k]) => `<button data-view="${v}" aria-current="${v === view ? 'page' : 'false'}">${ui(v)}<span>${T(k)}</span></button>`).join('');
}
function show(v) {
  if (view === 'parents' && v !== 'parents') { unlocked = false; pin = firstPin = ''; }
  view = v;
  document.querySelectorAll('.view').forEach((el) => { el.hidden = el.dataset.v !== v; });
  document.querySelectorAll('#tabs button').forEach((b) => b.setAttribute('aria-current', b.dataset.view === v ? 'page' : 'false'));
  if (v === 'phrases') renderPhrases();
  if (v === 'write' && !$('#wTxt')) renderWrite();
  if (v === 'parents') (unlocked ? renderParents() : renderLock());
  if (v === 'talk') { renderPhrase(); renderGrid(); }
}
function renderAll() { applyTheme(); applyLang(); renderEss(); renderCats(); renderGrid(); renderPhrase(); }
let toastT;
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2200); }

/* ---------- Événements ---------- */
document.addEventListener('click', async (e) => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.closest('#ess')) {
    const w = ESS.find((x) => x.id === b.dataset.id), v = w[L() === 'fr' ? 'fr' : GB() && w.gb ? 'gb' : 'en'];
    const p0 = tokens.length === 1 && word(tokens[0]).k === 'pers' ? word(tokens[0]) : null; // « Maman » puis « Aide » → « Maman, j'ai besoin d'aide »
    speak(p0 ? persName(p0) + ', ' + (/^I\b/.test(v[1]) ? v[1] : v[1].charAt(0).toLowerCase() + v[1].slice(1)) : v[1]);
    if (w.id === 'mal' && p0) { tokens.push('mal'); renderPhrase(); goCat('corps'); return; }
    if (w.id === 'mal') { tokens = ['mal']; renderPhrase(); goCat('corps'); }
    return;
  }
  if (b.closest('#grid')) return addToken(b.dataset.id);
  if (b.dataset.cat) return goCat(b.dataset.cat);
  if (b.dataset.view) return show(b.dataset.view);
  switch (b.id) {
    case 'bSay': return sayAll();
    case 'bDel': tokens.pop(); renderPhrase(); if (!tokens.length) goCat('debut'); return;
    case 'bClr': tokens = []; renderPhrase(); goCat('debut'); return;
    case 'bKeep': if (tokens.length) { S.saved.unshift({ t: tokens.slice() }); save(); toast(T('kept')); } return;
    case 'pgPrev': pages[cat]--; return renderGrid();
    case 'pgNext': pages[cat]++; return renderGrid();
    case 'wSay': return speak($('#wTxt').value.trim());
    case 'wClr': $('#wTxt').value = ''; return $('#wTxt').focus();
    case 'wKeep': { const x = $('#wTxt').value.trim(); if (x) { S.saved.unshift({ x }); save(); toast(T('kept')); } return; }
    case 'pClose': return show('talk');
    case 'pTest': return speak(T('testText'));
    case 'pCode': S.code = ''; save(); unlocked = false; pin = firstPin = ''; return renderLock();
    case 'pExp': {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([JSON.stringify(Object.assign({ app: 'jpat', v: APP_VERSION }, S, { code: '' }), null, 1)], { type: 'application/json' }));
      a.download = 'je-parle-avec-toi-sauvegarde.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); return;
    }
    case 'pReset': if (confirm(T('resetAsk'))) { const code = S.code; S = Object.assign({}, DEF, { code }); save(); tokens = []; renderAll(); renderParents(); } return;
    case 'nAdd': {
      const lab = $('#nLabel').value.trim(); if (!lab) return $('#nLabel').focus();
      S.custom.push({ id: 'c' + Date.now().toString(36), cat: wCat, label: lab, art: $('#nArt') ? $('#nArt').value : '', img: newImg });
      newImg = ''; save(); renderParents(); toast(T('added')); return;
    }
  }
  if (b.dataset.d) return pinKey(b.dataset.d);
  if (b.classList.contains('prow')) { const toks = b.dataset.kind === 'saved' ? S.saved[b.dataset.i].t : S.history[b.dataset.i]; return speak(toks ? compose(toks) : S.saved[b.dataset.i].x); }
  if (b.dataset.rm) { S.saved.splice(+b.dataset.rm, 1); save(); return renderPhrases(); }
  if (b.dataset.del) { S.custom = S.custom.filter((c) => c.id !== b.dataset.del); save(); return renderParents(); }
  if (b.dataset.ren) {
    const w = word(b.dataset.ren), v = prompt(T('rename'), label(w));
    if (v !== null) { if (v.trim()) S.labels[w.id] = v.trim(); else delete S.labels[w.id]; save(); renderParents(); }
  }
});
document.addEventListener('change', async (e) => {
  const t = e.target;
  if (t.name === 'gender') S.gender = t.value;
  else if (t.name === 'grid') S.grid = +t.value;
  else if (t.name === 'theme') { S.theme = t.value; applyTheme(); }
  else if (t.id === 'pLang') { S.lang = t.value; S.voice = ''; save(); renderAll(); return renderParents(); }
  else if (t.id === 'pSayW') S.sayWords = t.checked;
  else if (t.id === 'pVoice') S.voice = t.value;
  else if (t.id === 'pRate') S.rate = +t.value;
  else if (t.id === 'pPitch') S.pitch = +t.value;
  else if (t.id === 'pCat') { wCat = t.value; return renderParents(); }
  else if (t.dataset.vis) { const id = t.dataset.vis; S.hidden = t.checked ? S.hidden.filter((x) => x !== id) : S.hidden.concat(id); }
  else if (t.id === 'nImg' && t.files[0]) {
    try { newImg = await resizeImg(t.files[0]); $('#nPrev').innerHTML = `<img src="${newImg}" alt="">`; } catch (err) { toast(T('badFile')); }
    return;
  } else if (t.id === 'pImp' && t.files[0]) {
    try {
      const d = JSON.parse(await t.files[0].text());
      if (d.app !== 'jpat') throw new Error('bad');
      const code = S.code; S = Object.assign({}, DEF, d, { code }); delete S.app; delete S.v;
      save(); tokens = []; renderAll(); renderParents(); toast(T('imported'));
    } catch (err) { toast(T('badFile')); }
    return;
  } else return;
  save(); if (t.name === 'gender' || t.name === 'grid' || t.dataset.vis) { renderGrid(); renderPhrase(); }
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

renderAll();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('service-worker.js');
