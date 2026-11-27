/* ---------- Mon Monde Vivant : personnage, scènes vivantes, interprète, suggestions, bilan ---------- */
Object.assign(I18N.fr, {
  sugg: 'Souvent à cette heure', listen: 'Écouter', listening: 'Je vous écoute…', listenHelp: 'Posez votre question à l’enfant, normalement. Par exemple : « Tu veux des pâtes ou du riz ? »', cancel: 'Annuler',
  noMic: 'L’écoute n’est pas disponible sur cet appareil : tapez la question.', micDenied: 'Le micro est refusé. Autorisez-le dans les réglages du navigateur.', micErr: 'Je n’ai rien entendu. Réessayez.',
  tBilan: 'Bilan', bWeek: 'Phrases dites ces 7 derniers jours', bTop: 'Ce que l’enfant dit le plus', bFeel: 'Émotions exprimées', bPain: 'Douleurs signalées', bNone: 'Pas encore de données. Elles apparaîtront dès que l’enfant utilisera l’appli.',
  bAsk: 'questions posées', bSaid: 'phrases dites', print: 'Imprimer pour l’orthophoniste ou le médecin', times: 'fois', last: 'dernière fois',
  sAvatar: 'Personnage de l’enfant', avHelp: 'Ce personnage parle à la place de l’enfant et montre ce qu’il ressent. Faites-le lui ressembler.',
  skin: 'Peau', hairS: 'Coiffure', hairC: 'Cheveux', shirt: 'Habits', glasses: 'Lunettes',
  hairs: { short: 'Courts', long: 'Longs', pig: 'Couettes', bun: 'Chignon', curly: 'Bouclés', none: 'Ras' },
});
Object.assign(I18N.en, {
  sugg: 'Often at this time', listen: 'Listen', listening: 'Listening…', listenHelp: 'Ask the child your question as usual. For example: “Do you want pasta or rice?”', cancel: 'Cancel',
  noMic: 'Listening is not available on this device: type the question.', micDenied: 'The microphone is blocked. Allow it in the browser settings.', micErr: 'I did not hear anything. Try again.',
  tBilan: 'Report', bWeek: 'Sentences said in the last 7 days', bTop: 'What the child says most', bFeel: 'Feelings expressed', bPain: 'Pain reported', bNone: 'No data yet. It will appear as soon as the child uses the app.',
  bAsk: 'questions asked', bSaid: 'sentences said', print: 'Print for the speech therapist or doctor', times: 'times', last: 'last time',
  sAvatar: 'Child’s character', avHelp: 'This character speaks for the child and shows how they feel. Make it look like them.',
  skin: 'Skin', hairS: 'Hairstyle', hairC: 'Hair', shirt: 'Clothes', glasses: 'Glasses',
  hairs: { short: 'Short', long: 'Long', pig: 'Bunches', bun: 'Bun', curly: 'Curly', none: 'Shaved' },
});
if (!S.av) S.av = JSON.parse(JSON.stringify(DEF.av));

/* Personnage */
function avatarSVG(mood) {
  const a = S.av, sk = a.skin, hc = a.hc;
  let back = '', front = '';
  if (a.hair === 'long') back = p('M22 40 Q16 78 26 84 H74 Q84 78 78 40Z', hc);
  if (a.hair === 'pig') back = c(20, 40, 9, hc) + c(80, 40, 9, hc);
  if (a.hair === 'bun') back = c(50, 14, 9, hc);
  if (a.hair !== 'none' && a.hair !== 'curly') front = p('M24 44 Q20 13 50 14 Q80 13 76 44 Q66 26 50 27 Q34 26 24 44Z', hc);
  if (a.hair === 'curly') front = [[28, 30], [36, 21], [46, 17], [56, 17], [65, 21], [72, 30]].map(([x, y]) => c(x, y, 9, hc)).join('');
  if (a.hair === 'none') front = p('M26 36 Q30 18 50 18 Q70 18 74 36', 'none', `stroke="${hc}" stroke-width="5" opacity=".7"`);
  const gl = a.glasses ? c(40.6, 41.4, 6.5, 'none', 'stroke-width="2"') + c(59.4, 41.4, 6.5, 'none', 'stroke-width="2"') + p('M47 41 H53', 'none', 'stroke-width="2"') : '';
  return `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false"><g stroke="${K}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${back}${p('M16 100 Q16 76 50 74 Q84 76 84 100Z', a.shirt)}${r(43, 62, 14, 14, 2, sk)}${face(50, 44, 26, mood, sk)}${front}${gl}<ellipse class="tm" cx="50" cy="55" rx="6.5" ry="5" fill="#8A2A2F" stroke="none"/></g></svg>`;
}
const FEEL_MOOD = { content: 'happy', triste: 'sad', colere: 'angry', fatigue: 'tired', peur: 'scared', malade: 'sick', calme: 'calm', surpris: 'surprised', ennui: 'neutral', faim: 'neutral', soif: 'neutral', chaud: 'neutral', froid: 'neutral' };
function moodOf(o) {
  if (!o) return 'happy';
  const [k, x] = o.split('|')[0].split(':');
  if (k === 'mal' || k === 'peu' || k === 'tres' || o === 'urg:mal') return 'pain';
  if (k === 'say' && FEEL_MOOD[x]) return FEEL_MOOD[x];
  if (o === 'urg:stop') return 'angry';
  if (o === 'urg:aide' || x === 'besoinaide' || x === 'aide' || x === 'peur') return 'scared';
  if (o.endsWith('|n') || o === 'urg:non') return 'neutral';
  return 'happy';
}
let talkT;
function talk(on) { $$('#bubble, .askav').forEach((el) => el.classList.toggle('talking', on)); }
function renderAvatarSet() {
  const a = S.av, sw = (name, list, cur) => `<div class="sw">${list.map((col) => `<label><input type="radio" name="av_${name}" value="${col}"${col === cur ? ' checked' : ''}><span style="background:${col}" title="${col}"></span></label>`).join('')}</div>`;
  return `<details open><summary>${T('sAvatar')}</summary><div class="avset"><span class="avbig">${avatarSVG('happy')}</span><p class="hint">${T('avHelp')}</p></div>
    <p class="flabel">${T('skin')}</p>${sw('skin', ['#FBDCC4', '#F7CBA5', '#E0A67A', '#B97A50', '#7A4A2A'], a.skin)}
    <p class="flabel">${T('hairS')}</p>${seg('av_hair', Object.entries(T('hairs')), a.hair)}
    <p class="flabel">${T('hairC')}</p>${sw('hc', ['#2B2B2B', '#6B4A2F', '#B5562C', '#E3B04B', '#C9CED6'], a.hc)}
    <p class="flabel">${T('shirt')}</p>${sw('shirt', ['#3B82F6', '#E5484D', '#3BA55C', '#F7C948', '#8B5CF6', '#F27BB0', '#F08A24'], a.shirt)}
    <label class="chk"><input type="checkbox" name="av_glasses"${a.glasses ? ' checked' : ''}> ${T('glasses')}</label></details>`;
}

/* Scènes vivantes : ciel et horloge à l'heure réelle, lumière de la chambre */
let lightsOff = false;
function lights(on) { lightsOff = !on; const st = $('#scene'); if (st) st.classList.toggle('lights-off', lightsOff); }
function live() {
  const d = new Date(), h = d.getHours() + d.getMinutes() / 60, st = $('#scene'); if (!st) return;
  const ph = h < 7 || h >= 20.5 ? 'night' : h >= 18.5 ? 'evening' : 'day';
  st.classList.toggle('is-night', ph === 'night'); st.classList.toggle('is-evening', ph === 'evening');
  st.style.setProperty('--sky', { day: '#C7E6FF', evening: '#F6C49A', night: '#1E2A4A' }[ph]);
  const hh = $('#scene .hh'), mh = $('#scene .mh');
  if (hh) { hh.setAttribute('transform', `rotate(${(d.getHours() % 12) * 30 + d.getMinutes() / 2} 166 106)`); mh.setAttribute('transform', `rotate(${d.getMinutes() * 6} 166 106)`); }
}

/* Suggestions : ce que l'enfant dit souvent à cette heure-ci */
function suggestions() {
  const now = Date.now(), hNow = new Date().getHours() + new Date().getMinutes() / 60, sc = {}, n = {};
  S.log.forEach((m) => {
    if (m.w !== 'c' || !m.o || m.o.startsWith('urg:')) return;
    const dt = new Date(m.ts), hh = dt.getHours() + dt.getMinutes() / 60;
    let dh = Math.abs(hh - hNow); dh = Math.min(dh, 24 - dh);
    sc[m.o] = (sc[m.o] || 0) + Math.exp(-(dh * dh) / 2) * (0.5 + Math.exp(-(now - m.ts) / (7 * 864e5)));
    n[m.o] = (n[m.o] || 0) + 1;
  });
  return Object.keys(sc).filter((k) => n[k] >= 2 && sc[k] > 0.6).sort((x, y) => sc[y] - sc[x]).slice(0, 3);
}
function renderSugg() {
  const el = $('#sugg'); if (!el) return;
  const ks = suggestions().filter((k) => { const [o] = k.split('|'), w = word(o.split(':')[o.startsWith('tpl:') ? 2 : 1]); return !!w; });
  el.hidden = !ks.length;
  el.innerHTML = ks.length ? `<span class="sgt">${T('sugg')}</span>` + ks.map((k) => { const [o, ng] = k.split('|'), v = optView(o, null, !!ng); return `<button class="sg c-${v.col}" data-sg="${esc(k)}"><span class="mini">${v.ic}</span><span>${esc(optText(o, !!ng))}</span></button>`; }).join('') : '';
}

/* Interprète : l'adulte parle, l'appli comprend et prépare les réponses en images */
let rec = null;
function forms(w) {
  const out = new Set(), add = (s) => { if (!s) return; const f = norm(String(s)).replace(/[^a-z0-9]+/g, ' ').trim(); if (f.length >= 3) { out.add(f); out.add(f.replace(/s$/, '')); if (!/s$/.test(f)) out.add(f + 's'); } };
  add(label(w)); [].concat(w.fr || []).forEach(add); add(w.en); if (typeof w.gb === 'string') add(w.gb); add(w.enp);
  return [...out].filter((f) => f.length >= 3);
}
const INTENTS = [
  [/\b(mal|bobo|douleur|hurts?|pain)\b/, ['tete', 'ventre', 'dents', 'oreille']],
  [/\b(sens|ca va|humeur|feel|feeling|how are you)\b/, ['content', 'triste', 'colere', 'fatigue']],
  [/\b(aller|sortir|go|going)\b/, ['maison', 'parc', 'piscine', 'magasin']],
  [/\b(jouer|joue|play)\b/, ['ballon', 'lego', 'puzzle', 'tablette']],
  [/\b(manger|faim|gouter|eat|hungry|snack|lunch|dinner)\b/, ['pates', 'pomme', 'biscuit', 'yaourt']],
  [/\b(boire|soif|drink|thirsty)\b/, ['eau', 'lait', 'jus']],
];
function understand(text) {
  const n = ' ' + norm(text).replace(/[^a-z0-9]+/g, ' ') + ' ';
  let hits = [];
  libWords().forEach((w) => forms(w).forEach((f) => { const i = n.indexOf(' ' + f + ' '); if (i >= 0) hits.push({ id: w.id, i, e: i + f.length }); }));
  hits.sort((x, y) => x.i - y.i || (y.e - y.i) - (x.e - x.i));
  const keep = [];
  hits.forEach((h) => { if (!keep.some((k) => k.id === h.id || (h.i >= k.i && h.e <= k.e))) keep.push(h); });
  // « jouer au ballon » ou « lire une histoire » : le verbe juste avant un autre mot ne compte pas comme une réponse à part
  const kept = keep.filter((h, i) => { const nx = keep[i + 1]; return !(nx && word(h.id).k === 'verb' && nx.i - h.e <= 5 && !/\b(ou|or)\b/.test(n.slice(h.e, nx.i + 1))); });
  hits = kept.slice(0, 4).map((h) => h.id);
  if (hits.length >= 2) return hits;
  if (hits.length === 1 && !['oui', 'non'].includes(hits[0])) return ['oui', 'non'];
  if (/\b(qui|who)\b/.test(n)) return S.people.slice(0, 4).map((pe) => pe.id);
  for (const [re, ids] of INTENTS) if (re.test(n)) return ids;
  return ['oui', 'non'];
}
function startListen() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { toast(T('noMic')); view = 'adult'; adultTab = 'ask'; return renderAdult(); }
  const L0 = $('#listen');
  L0.innerHTML = `<div class="lcard"><span class="lmic">${ui('mic')}</span><h2>${T('listening')}</h2><p class="hint">${T('listenHelp')}</p><p class="ltx" id="ltx" aria-live="polite"></p><button class="btn" data-close="listen">${T('cancel')}</button></div>`;
  L0.hidden = false;
  let finalTxt = '';
  rec = new SR(); rec.lang = langCode(); rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
  rec.onresult = (e) => { const txt = [...e.results].map((x) => x[0].transcript).join(''); $('#ltx').textContent = txt; if (e.results[e.results.length - 1].isFinal) finalTxt = txt; };
  rec.onerror = (e) => { toast(e.error === 'not-allowed' || e.error === 'service-not-allowed' ? T('micDenied') : T('micErr')); };
  rec.onend = () => {
    L0.hidden = true; rec = null;
    const q = finalTxt.trim(); if (!q) return;
    ask = { q: cap(q) + (/[?!.]$/.test(q) ? '' : ' ?'), a: understand(q), voice: true };
    logIt('a', ask.q); showAsk(true);
  };
  try { speechSynthesis.cancel(); rec.start(); } catch (e) { L0.hidden = true; toast(T('micErr')); }
}
function stopListen() { if (rec) { rec.onend = null; rec.abort(); rec = null; } $('#listen').hidden = true; }

/* Bilan pour les parents */
function renderBilan() {
  const kids = S.log.filter((m) => m.w === 'c'); if (!kids.length) return `<p class="hint">${T('bNone')}</p>`;
  const loc = L() === 'fr' ? 'fr-FR' : S.lang, day0 = new Date(); day0.setHours(0, 0, 0, 0);
  const days = [...Array(7)].map((_, i) => { const d = new Date(day0 - (6 - i) * 864e5); return { d, n: kids.filter((m) => m.ts >= +d && m.ts < +d + 864e5).length }; });
  const max = Math.max(1, ...days.map((x) => x.n));
  const count = (arr, key) => arr.reduce((acc, m) => { const k = key(m); if (k) acc[k] = (acc[k] || 0) + 1; return acc; }, {});
  const top = Object.entries(count(kids, (m) => m.t)).sort((x, y) => y[1] - x[1]).slice(0, 6);
  const feels = Object.entries(count(kids, (m) => (m.o && m.o.startsWith('say:') && FEEL_MOOD[m.o.split(':')[1]] ? m.o.split(':')[1] : ''))).sort((x, y) => y[1] - x[1]);
  const pains = {}; kids.forEach((m) => { const k = (m.o || '').split(':'); if (['mal', 'peu', 'tres'].includes(k[0])) { const p0 = pains[k[1]] || (pains[k[1]] = { n: 0, last: 0, tres: 0 }); p0.n++; p0.last = Math.max(p0.last, m.ts); if (k[0] === 'tres') p0.tres++; } });
  const asked = S.log.filter((m) => m.w === 'a' && m.ts >= +days[0].d).length, said = days.reduce((s, x) => s + x.n, 0);
  return `<div class="kpis"><p><b>${said}</b> ${T('bSaid')}</p><p><b>${asked}</b> ${T('bAsk')}</p></div>
  <h2>${T('bWeek')}</h2><div class="bars">${days.map((x) => `<div class="bar"><span class="bv" style="height:${Math.round((x.n / max) * 100)}%"><b>${x.n || ''}</b></span><span class="bl">${esc(x.d.toLocaleDateString(loc, { weekday: 'short' }))}</span></div>`).join('')}</div>
  ${feels.length ? `<h2>${T('bFeel')}</h2><div class="feels">${feels.map(([id, n]) => `<span class="feel"><span class="mini big">${picto(id)}</span><b>${n}</b>${esc(label(WD[id]))}</span>`).join('')}</div>` : ''}
  ${Object.keys(pains).length ? `<h2>${T('bPain')}</h2><ul class="plist">${Object.entries(pains).sort((x, y) => y[1].n - x[1].n).map(([id, v]) => `<li><span class="mini big">${picto(id)}</span><span class="grow">${esc(label(WD[id]))} : ${v.n} ${T('times')}${v.tres ? ` (${v.tres} × ${esc(T('pTres').toLowerCase())})` : ''}<br><small>${T('last')} : ${esc(new Date(v.last).toLocaleString(loc, { weekday: 'long', hour: '2-digit', minute: '2-digit' }))}</small></span></li>`).join('')}</ul>` : ''}
  <h2>${T('bTop')}</h2><ol class="top">${top.map(([t, n]) => `<li><span>${esc(t)}</span><b>${n}</b></li>`).join('')}</ol>
  <button class="btn" id="bPrint">${ui('bilan')}${T('print')}</button>`;
}

boot();
