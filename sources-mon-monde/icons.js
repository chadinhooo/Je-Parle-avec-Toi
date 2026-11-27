/* Pictogrammes dessinés pour l'appli (pas de licence tierce). Grille 64x64. */
const K = '#22293A', SK = '#F7CBA5', HB = '#6B4A2F', HG = '#C9CED6', HY = '#E3B04B',
  RED = '#E5484D', BLU = '#3B82F6', GRN = '#3BA55C', YEL = '#F7C948', ORA = '#F08A24',
  PUR = '#8B5CF6', PNK = '#F27BB0', BRN = '#9A6236', WH = '#FFFFFF', LB = '#BFE3FF', CRM = '#F6E3BE';
const NS = 'stroke="none"';
const c = (x, y, r, f = 'none', e = '') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${e}/>`;
const el = (x, y, rx, ry, f = 'none', e = '') => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${e}/>`;
const r = (x, y, w, h, rx, f = 'none', e = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${f}" ${e}/>`;
const p = (d, f = 'none', e = '') => `<path d="${d}" fill="${f}" ${e}/>`;
const t = (x, y, s, txt, f = K) => `<text x="${x}" y="${y}" font-size="${s}" font-weight="700" font-family="Fira Sans,system-ui,sans-serif" fill="${f}" stroke="none" text-anchor="middle">${txt}</text>`;
const dot = (x, y, s = 1.6) => c(x, y, s, K, NS);

function face(cx, cy, R, mood = 'happy', fill = SK) {
  const ex = R * 0.36, ey = cy - R * 0.1, m = cy + R * 0.38;
  let s = c(cx, cy, R, fill), eyes = dot(cx - ex, ey, R * 0.09) + dot(cx + ex, ey, R * 0.09);
  const arc = (y1, y2) => p(`M${cx - R * .38} ${y1} Q${cx} ${y2} ${cx + R * .38} ${y1}`);
  switch (mood) {
    case 'happy': return s + eyes + arc(m - R * .08, m + R * .32);
    case 'sad': return s + eyes + arc(m + R * .18, m - R * .2) + p(`M${cx - ex - R * .2} ${ey - R * .3} L${cx - ex + R * .15} ${ey - R * .42} M${cx + ex + R * .2} ${ey - R * .3} L${cx + ex - R * .15} ${ey - R * .42}`) + el(cx + ex + R * .05, ey + R * .32, R * .07, R * .12, LB, NS);
    case 'angry': return c(cx, cy, R, '#F6A9A0') + eyes + p(`M${cx - ex - R * .22} ${ey - R * .38} L${cx - ex + R * .2} ${ey - R * .18} M${cx + ex + R * .22} ${ey - R * .38} L${cx + ex - R * .2} ${ey - R * .18}`) + arc(m + R * .12, m - R * .12);
    case 'tired': return s + p(`M${cx - ex - R * .14} ${ey} q${R * .14} ${R * .12} ${R * .28} 0 M${cx + ex - R * .14} ${ey} q${R * .14} ${R * .12} ${R * .28} 0`) + el(cx, m + R * .05, R * .1, R * .13, K, NS) + t(cx + R * .95, cy - R * .7, R * .55, 'z');
    case 'scared': return s + c(cx - ex, ey, R * .17, WH) + c(cx + ex, ey, R * .17, WH) + dot(cx - ex, ey, R * .07) + dot(cx + ex, ey, R * .07) + p(`M${cx - ex - R * .2} ${ey - R * .36} Q${cx - ex} ${ey - R * .5} ${cx - ex + R * .2} ${ey - R * .36} M${cx + ex - R * .2} ${ey - R * .36} Q${cx + ex} ${ey - R * .5} ${cx + ex + R * .2} ${ey - R * .36}`) + el(cx, m + R * .06, R * .13, R * .19, K, NS);
    case 'sick': return c(cx, cy, R, '#CDE7B0') + p(`M${cx - ex - R * .14} ${ey} h${R * .28} M${cx + ex - R * .14} ${ey} h${R * .28}`) + p(`M${cx - R * .34} ${m + R * .05} q${R * .11} -${R * .14} ${R * .22} 0 q${R * .11} ${R * .14} ${R * .22} 0 q${R * .11} -${R * .14} ${R * .22} 0`);
    case 'calm': return s + p(`M${cx - ex - R * .14} ${ey + R * .04} q${R * .14} -${R * .14} ${R * .28} 0 M${cx + ex - R * .14} ${ey + R * .04} q${R * .14} -${R * .14} ${R * .28} 0`) + arc(m - R * .05, m + R * .18);
    case 'surprised': return s + c(cx - ex, ey, R * .12, WH) + c(cx + ex, ey, R * .12, WH) + dot(cx - ex, ey, R * .06) + dot(cx + ex, ey, R * .06) + c(cx, m + R * .08, R * .17, K, NS);
    case 'pain': return s + p(`M${cx - ex - R * .16} ${ey - R * .12} l${R * .26} ${R * .12} l-${R * .26} ${R * .12} M${cx + ex + R * .16} ${ey - R * .12} l-${R * .26} ${R * .12} l${R * .26} ${R * .12}`) + p(`M${cx - R * .34} ${m + R * .08} q${R * .11} -${R * .16} ${R * .22} 0 q${R * .11} ${R * .16} ${R * .22} 0 q${R * .11} -${R * .16} ${R * .22} 0`);
    case 'open': return s + eyes + el(cx, m + R * .05, R * .2, R * .16, '#8A2A2F');
    default: return s + eyes + p(`M${cx - R * .25} ${m + R * .05} h${R * .5}`);
  }
}

/* Personnage : x centre, s échelle (1 adulte, .74 enfant), o = {hair, hc, shirt, glasses, mood} */
function person(x, s, o = {}) {
  const top = 61 - 50 * s, hr = 7.6 * s, hy = top + 8.5 * s, hc = o.hc || HB, sh = o.shirt || BLU;
  const cap = p(`M${x - hr} ${hy + 1 * s} Q${x - hr - 1 * s} ${hy - hr * 1.35} ${x} ${hy - hr * 1.05} Q${x + hr + 1 * s} ${hy - hr * 1.35} ${x + hr} ${hy + 1 * s} Q${x} ${hy - hr * .55} ${x - hr} ${hy + 1 * s}Z`, hc);
  let back = '', front = '';
  if (o.hair === 'long') back = p(`M${x - hr - 1.5 * s} ${hy} Q${x - hr - 3 * s} ${hy + hr * 1.7} ${x - hr + 2 * s} ${hy + hr * 1.8} L${x + hr - 2 * s} ${hy + hr * 1.8} Q${x + hr + 3 * s} ${hy + hr * 1.7} ${x + hr + 1.5 * s} ${hy}Z`, hc);
  if (o.hair === 'bun') back = c(x, hy - hr * 1.1, hr * .45, hc);
  if (o.hair === 'pig') back = c(x - hr - 1.5 * s, hy - 1 * s, hr * .45, hc) + c(x + hr + 1.5 * s, hy - 1 * s, hr * .45, hc);
  if (o.hair !== 'bald') front = cap; else front = p(`M${x - hr} ${hy} q${-1 * s} ${-hr * .6} ${hr * .3} ${-hr * .7} M${x + hr} ${hy} q${1 * s} ${-hr * .6} ${-hr * .3} ${-hr * .7}`, 'none', `stroke="${HG}" stroke-width="${3 * s}"`);
  const ey = hy + .5 * s;
  let fc = dot(x - hr * .38, ey, 1.2 * s + .3) + dot(x + hr * .38, ey, 1.2 * s + .3) + p(`M${x - hr * .32} ${hy + hr * .42} Q${x} ${hy + hr * .68} ${x + hr * .32} ${hy + hr * .42}`, 'none', `stroke-width="${2 * s}"`);
  if (o.glasses) fc += c(x - hr * .38, ey, hr * .3, 'none', `stroke-width="${1.6 * s}"`) + c(x + hr * .38, ey, hr * .3, 'none', `stroke-width="${1.6 * s}"`);
  const ty = top + 17 * s, by = top + 38 * s;
  const arms = o.armsUp
    ? p(`M${x - 8 * s} ${ty + 3 * s} L${x - 15 * s} ${ty - 9 * s} M${x + 8 * s} ${ty + 3 * s} L${x + 15 * s} ${ty - 9 * s}`, 'none', `stroke-width="${3.2 * s}"`)
    : p(`M${x - 8 * s} ${ty + 3 * s} L${x - 13 * s} ${ty + 17 * s} M${x + 8 * s} ${ty + 3 * s} L${x + 13 * s} ${ty + 17 * s}`, 'none', `stroke-width="${3.2 * s}"`);
  const legs = p(`M${x - 4.5 * s} ${by} L${x - 5 * s} 61 M${x + 4.5 * s} ${by} L${x + 5 * s} 61`, 'none', `stroke-width="${3.6 * s}"`);
  const body = o.dress
    ? p(`M${x - 8 * s} ${ty} Q${x} ${ty - 3 * s} ${x + 8 * s} ${ty} L${x + 13 * s} ${by + 4 * s} L${x - 13 * s} ${by + 4 * s}Z`, sh)
    : p(`M${x - 8.5 * s} ${ty} Q${x} ${ty - 3 * s} ${x + 8.5 * s} ${ty} L${x + 9.5 * s} ${by} L${x - 9.5 * s} ${by}Z`, sh);
  return back + legs + arms + body + c(x, hy, hr, SK) + front + fc;
}

function hand(x, y, s = 1, f = SK) {
  let g = '';
  [-7.5, -2.5, 2.5, 7.5].forEach((dx, i) => { g += r(x + dx * s - 2.4 * s, y - (i === 0 || i === 3 ? 12 : 16) * s, 4.8 * s, 20 * s, 2.4 * s, f); });
  g += p(`M${x - 10 * s} ${y + 2 * s} L${x - 16 * s} ${y - 6 * s} Q${x - 19 * s} ${y - 2 * s} ${x - 14 * s} ${y + 8 * s}`, f);
  g += p(`M${x - 10 * s} ${y} H${x + 10 * s} V${y + 12 * s} Q${x + 10 * s} ${y + 20 * s} ${x} ${y + 20 * s} Q${x - 10 * s} ${y + 20 * s} ${x - 10 * s} ${y + 12 * s}Z`, f);
  return g;
}

const noOver = () => c(32, 32, 27, 'none', `stroke="${RED}" stroke-width="5"`) + p('M13 13 L51 51', 'none', `stroke="${RED}" stroke-width="5"`);
const hi = (x, y, rr) => c(x, y, rr, RED, `fill-opacity=".28" stroke="${RED}" stroke-width="3"`);

function bodyFig(back) {
  return p('M32 20 L32 22', 'none') +
    p('M22 24 Q32 20 42 24 L41 42 L23 42Z', back ? '#7FB3F5' : '#7FB3F5') +
    p('M22 25 L15 40 M42 25 L49 40', 'none', 'stroke-width="4"') +
    c(14.5, 42, 2.8, SK) + c(49.5, 42, 2.8, SK) +
    p('M27 42 L26 58 M37 42 L38 58', 'none', 'stroke-width="5"') +
    el(25, 59.5, 4, 2.2, '#5B6475') + el(39, 59.5, 4, 2.2, '#5B6475') +
    c(32, 13, 8, back ? HB : SK) + (back ? '' : dot(29, 12.5, 1.1) + dot(35, 12.5, 1.1) + p('M29.5 16 Q32 17.8 34.5 16', 'none', 'stroke-width="1.6"'));
}
function bigFace(open) {
  return el(13, 31, 4, 6, SK) + el(51, 31, 4, 6, SK) + c(32, 30, 19, SK) +
    p('M14 26 Q14 9 32 10 Q50 9 50 26 Q44 17 32 18 Q20 17 14 26Z', HB) +
    c(25, 29, 2.4, K, NS) + c(39, 29, 2.4, K, NS) + p('M32 31 L30 37 L33 37', 'none', 'stroke-width="2"') +
    (open ? p('M25 41 Q32 50 39 41Z', '#8A2A2F') + p('M26.5 41.6 H37.5 L37 43.5 H27Z', WH, 'stroke-width="1.2"') : p('M26 42 Q32 46 38 42', 'none'));
}
const glass = (fill) => (fill ? p('M21 30 H43 L41 54 Q41 57 38 57 H26 Q23 57 23 54Z', fill, NS) : '') + p('M18 12 H46 L42 55 Q41.6 59 38 59 H26 Q22.4 59 22 55Z');
const bowl = (f = WH) => p('M8 34 H56 Q56 56 32 56 Q8 56 8 34Z', f);
const toilet = () => r(16, 6, 18, 22, 3, WH) + p('M10 30 H48 Q48 44 36 47 L38 58 H22 L24 47 Q10 44 10 30Z', WH) + el(29, 30, 19, 4.5, LB);
const house = (wall = CRM, roof = RED) => p('M10 30 L32 10 L54 30', roof, 'stroke-width="3"') + r(15, 29, 34, 28, 2, wall) + r(27, 40, 10, 17, 1.5, BRN) + r(39, 35, 7, 7, 1, LB);
const car = (body = RED) => p('M6 42 Q6 34 14 33 L20 24 Q22 21 26 21 H40 Q44 21 46 24 L51 33 Q58 34 58 42 V46 H6Z', body) + p('M22 32 L25 25 H31 V32Z M35 32 V25 H41 L45 32Z', LB) + c(18, 47, 6, '#3A4252') + c(46, 47, 6, '#3A4252') + c(18, 47, 2, WH, NS) + c(46, 47, 2, WH, NS);
const tv = () => r(7, 12, 50, 34, 4, '#34405A') + r(11, 16, 42, 26, 2, '#8EC5FF', NS) + p('M12 38 L22 28 L30 35 L38 26 L52 40 V42 H12Z', GRN, NS) + p('M24 52 L28 46 M40 52 L36 46 M20 53 H44');
const bed = () => r(6, 30, 52, 14, 3, BLU) + r(9, 24, 16, 9, 4, WH) + p('M6 20 V54 M58 34 V54', 'none', 'stroke-width="4"') + p('M24 30 Q40 24 58 30', 'none');
const note = (x, y, s = 1) => el(x, y, 5 * s, 3.8 * s, K) + p(`M${x + 4.6 * s} ${y} V${y - 20 * s} L${x + 13 * s} ${y - 16 * s}`, 'none', `stroke-width="${3 * s}"`);
const teddy = () => c(18, 14, 7, BRN) + c(46, 14, 7, BRN) + c(32, 24, 14, '#B87A45') + el(32, 30, 6, 4.5, CRM) + dot(27, 21, 1.8) + dot(37, 21, 1.8) + dot(32, 28.5, 2) + el(32, 48, 15, 13, '#B87A45') + el(32, 49, 8, 7, CRM) + c(18, 58, 5, BRN) + c(46, 58, 5, BRN);
const plate = () => c(32, 34, 20, WH) + c(32, 34, 13, 'none', 'stroke-width="1.6"') + p('M6 18 V30 M3 18 V25 Q3 29 6 30 Q9 29 9 25 V18 M6 30 V54', 'none', 'stroke-width="2.2"') + p('M58 54 V16 Q51 22 52 36 H58', '#D5DAE2', 'stroke-width="2.2"');
const tree = (x = 44) => r(x - 3, 34, 6, 22, 1, BRN) + c(x, 26, 13, GRN);
const sun = (x, y, rr = 7) => c(x, y, rr, YEL) + p(`M${x} ${y - rr - 6} v3 M${x} ${y + rr + 3} v3 M${x - rr - 6} ${y} h3 M${x + rr + 3} ${y} h3 M${x - rr - 3} ${y - rr - 3} l2.5 2.5 M${x + rr + 3} ${y + rr + 3} l-2.5 -2.5 M${x + rr + 3} ${y - rr - 3} l-2.5 2.5 M${x - rr - 3} ${y + rr + 3} l2.5 -2.5`, 'none', 'stroke-width="2"');
const thermo = (x, col) => r(x - 4, 8, 8, 38, 4, WH) + c(x, 50, 7, col) + r(x - 1.6, 24, 3.2, 26, 1.6, col, NS);
const speech = (f = WH) => p('M10 14 Q10 8 16 8 H48 Q54 8 54 14 V36 Q54 42 48 42 H26 L16 52 V42 Q10 42 10 36Z', f);
const book = (f = BLU) => p('M8 16 Q20 11 32 17 Q44 11 56 16 V52 Q44 47 32 53 Q20 47 8 52Z', WH) + p('M32 17 V53') + p('M13 24 Q20 22 27 25 M13 31 Q20 29 27 32 M37 25 Q44 22 51 24 M37 32 Q44 29 51 31', 'none', `stroke="${f}" stroke-width="2"`);
const heart = (f = RED, x = 32, y = 34, s = 1) => p(`M${x} ${y + 18 * s} C${x - 26 * s} ${y + 2 * s} ${x - 20 * s} ${y - 20 * s} ${x} ${y - 9 * s} C${x + 20 * s} ${y - 20 * s} ${x + 26 * s} ${y + 2 * s} ${x} ${y + 18 * s}Z`, f);

const ICONS = {
  /* essentiels */
  oui: c(32, 32, 25, GRN) + p('M19 33 L28 42 L45 23', 'none', `stroke="${WH}" stroke-width="6"`),
  non: c(32, 32, 25, RED) + p('M21 21 L43 43 M43 21 L21 43', 'none', `stroke="${WH}" stroke-width="6"`),
  stop: p('M22 6 H42 L58 22 V42 L42 58 H22 L6 42 V22Z', RED) + hand(32, 30, 1.05, WH),
  aide: c(32, 32, 25, WH) + p('M32 7 A25 25 0 0 1 57 32 H45 A13 13 0 0 0 32 19Z M32 57 A25 25 0 0 1 7 32 H19 A13 13 0 0 0 32 45Z', RED) + c(32, 32, 13, '#EEF4FB'),
  toilettes: toilet(),
  mal: face(30, 34, 22, 'pain') + p('M50 4 L44 16 L52 16 L45 28', 'none', `stroke="${RED}" stroke-width="3.5"`),
  encore: c(32, 32, 25, GRN) + p('M32 19 V45 M19 32 H45', 'none', `stroke="${WH}" stroke-width="7"`),
  fini: r(10, 10, 44, 44, 6, WH) + p('M10 10 h11 v11 h-11Z M32 10 h11 v11 h-11Z M21 21 h11 v11 h-11Z M43 21 h11 v11 h-11Z M10 32 h11 v11 h-11Z M32 32 h11 v11 h-11Z M21 43 h11 v11 h-11Z M43 43 h11 v11 h-11Z', K, NS) + r(10, 10, 44, 44, 6),
  /* personnes */
  tous: person(16, .7, { hair: 'long', shirt: PNK, dress: 1 }) + person(48, .7, { hair: 'short', shirt: GRN }) + person(32, .84, { hair: 'short', hc: HY, shirt: ORA }),
  maman: person(32, 1, { hair: 'long', shirt: RED, dress: 1 }),
  papa: person(32, 1, { hair: 'short', shirt: BLU }),
  mamie: person(32, .95, { hair: 'bun', hc: HG, shirt: PUR, glasses: 1, dress: 1 }),
  papy: person(32, .95, { hair: 'bald', shirt: GRN, glasses: 1 }),
  frere: person(32, .78, { hair: 'short', hc: HY, shirt: ORA }),
  soeur: person(32, .78, { hair: 'pig', shirt: PNK, dress: 1 }),
  maitresse: r(36, 8, 24, 18, 2, '#2F6B4F') + p('M41 14 h8 M41 19 h12', 'none', `stroke="${WH}" stroke-width="2"`) + person(24, .95, { hair: 'long', hc: '#3B2A1E', shirt: BLU, dress: 1 }),
  ami: person(32, .78, { hair: 'short', hc: '#2B2B2B', shirt: YEL }),
  moi: person(32, .82, { hair: 'short', shirt: GRN }) + p('M54 12 L40 24 M40 24 h7 M40 24 v-7', 'none', `stroke="${RED}" stroke-width="3"`),
  /* débuts de phrase */
  veux: hand(36, 30, 1.15) + p('M6 46 Q4 26 18 18', 'none', `stroke="${GRN}" stroke-width="3.5"`) + p('M12 18 L18 18 L18 24', 'none', `stroke="${GRN}" stroke-width="3.5"`),
  neveux: hand(32, 30, 1.05) + noOver(),
  suis: person(28, .9, { hair: 'short', shirt: GRN }) + p('M56 10 L38 26 M38 26 h8 M38 26 v-8', 'none', `stroke="${RED}" stroke-width="3.5"`),
  aime: heart(RED),
  naime: heart('#F3A3A6') + noOver(),
  besoin: hand(26, 32, 1.05) + c(48, 16, 11, YEL) + p('M48 10 V18', 'none', 'stroke-width="3.5"') + dot(48, 23, 2),
  vais: person(24, .9, { hair: 'short', shirt: GRN }) + p('M40 36 H58 M51 29 L58 36 L51 43', 'none', `stroke="${GRN}" stroke-width="4"`),
  ouest: c(26, 26, 16, LB) + p('M38 38 L56 56', 'none', 'stroke-width="6"') + t(26, 33, 20, '?'),
  cest: r(34, 30, 24, 24, 3, ORA) + hand(18, 28, .85) + p('M30 22 L36 28', 'none', `stroke="${GRN}" stroke-width="3"`),
  /* social et questions */
  bonjour: hand(34, 30, 1.1) + p('M8 18 Q4 26 8 34 M14 22 Q11 26 14 30', 'none', 'stroke-width="2.5"') + sun(52, 12, 5),
  aurevoir: r(4, 8, 22, 50, 2, BRN) + c(21, 34, 1.8, YEL) + hand(42, 30, 1),
  merci: heart(RED, 32, 22, .75) + hand(32, 40, .95),
  stp: p('M32 6 Q24 8 22 20 L18 40 Q16 50 22 56 L32 58Z', SK) + p('M32 6 Q40 8 42 20 L46 40 Q48 50 42 56 L32 58Z', SK) + p('M32 7 V57') + p('M22 30 Q26 32 26 38 M42 30 Q38 32 38 38', 'none', 'stroke-width="2"') + heart(PNK, 52, 12, .3),
  pardon: face(32, 32, 24, 'sad'),
  bravo: p('M12 30 H22 V56 H12Z', BLU) + p('M22 32 L32 12 Q38 12 37 20 L35 28 H50 Q55 29 53 35 L48 52 Q46 56 41 56 H22Z', SK) + sun(50, 10, 3),
  attends: p('M16 6 H48 M16 58 H48', 'none', 'stroke-width="4"') + p('M20 8 H44 Q44 24 32 32 Q44 40 44 56 H20 Q20 40 32 32 Q20 24 20 8Z', LB) + p('M25 52 H39 Q36 44 32 42 Q28 44 25 52Z', YEL, NS),
  jesaispas: face(26, 36, 20, 'neutral') + t(52, 30, 28, '?', PUR),
  regarde: p('M4 32 Q32 6 60 32 Q32 58 4 32Z', WH) + c(32, 32, 11, BLU) + c(32, 32, 5, K, NS) + c(35, 29, 2, WH, NS),
  qui: person(26, .9, { hair: 'short', hc: '#8A94A6', shirt: '#B9C1CE' }) + t(50, 30, 28, '?', PUR),
  quoi: r(6, 22, 30, 30, 4, ORA) + t(48, 40, 32, '?', PUR),
  quand: c(28, 34, 22, WH) + p('M28 34 V20 M28 34 L38 40', 'none', 'stroke-width="3"') + t(54, 22, 22, '?', PUR),
  /* manger et boire */
  eau: glass(LB) + el(52, 14, 4, 6, BLU, NS),
  lait: p('M20 22 L26 10 H38 L44 22 V58 H20Z', WH) + p('M20 22 H44 L38 10') + r(20, 32, 24, 14, 0, BLU, NS) + p('M20 22 V58 H44 V22'),
  jus: glass(ORA) + p('M38 4 L33 30', 'none', `stroke="${RED}" stroke-width="3"`) + c(17, 13, 6, YEL),
  pain: p('M8 46 Q4 38 12 34 L46 14 Q56 9 58 17 Q60 25 50 29 L16 48 Q10 52 8 46Z', '#E2A65B') + p('M20 36 L25 41 M30 30 L35 35 M40 24 L45 29', 'none', 'stroke-width="2"'),
  pomme: p('M32 22 C20 13 7 23 11 39 C14 52 25 59 32 55 C39 59 50 52 53 39 C57 23 44 13 32 22Z', RED) + p('M32 22 Q32 12 36 7', 'none') + p('M35 14 Q43 7 48 13 Q41 19 35 14Z', GRN),
  banane: p('M10 16 Q12 46 40 52 Q52 53 56 44 Q42 46 31 38 Q20 29 18 14Z', YEL) + p('M10 16 L14 9 L18 14', 'none') + p('M56 44 L58 48', 'none'),
  gateau: p('M8 30 L56 22 V52 L8 56Z', CRM) + p('M8 30 L56 22 V30 Q50 35 45 30 Q39 37 33 32 Q25 39 19 33 Q13 39 8 36Z', PNK) + r(28, 6, 5, 18, 1.5, BLU) + p('M30.5 6 Q26 1 30.5 -2 Q35 1 30.5 6Z', ORA, NS),
  chocolat: r(14, 8, 36, 50, 4, BRN) + p('M26 8 V34 M38 8 V34 M14 21 H50', 'none', 'stroke-width="2"') + r(12, 34, 40, 24, 2, RED),
  pates: bowl(WH) + p('M14 34 q4-10 8 0 q4-10 8 0 q4-10 8 0 q4-10 8 0 q4-10 8 0', 'none', `stroke="${HY}" stroke-width="4"`) + p('M8 34 H56'),
  riz: bowl(BLU) + p('M12 34 Q32 14 52 34Z', WH) + dot(24, 28, 1.2) + dot(32, 25, 1.2) + dot(40, 28, 1.2) + dot(30, 31, 1.2) + dot(36, 31, 1.2),
  soupe: el(32, 34, 24, 6, ORA) + bowl(WH) + el(32, 34, 24, 5, ORA) + p('M24 24 q-4-5 0-10 q4-5 0-10 M36 24 q-4-5 0-10 q4-5 0-10', 'none', 'stroke-width="2.2"'),
  yaourt: p('M17 20 H47 L43 58 H21Z', WH) + r(14, 13, 36, 8, 3, BLU) + r(19, 32, 26, 12, 0, PNK, NS) + p('M17 20 H47 L43 58 H21Z'),
  fromage: p('M8 40 L50 20 L56 40Z', YEL) + r(8, 40, 48, 16, 1, YEL) + c(22, 48, 3, '#E8B23A') + c(40, 46, 4, '#E8B23A') + c(46, 31, 2.5, '#E8B23A'),
  biscuit: c(32, 32, 24, '#D9A066') + c(24, 24, 3, BRN, NS) + c(38, 22, 2.6, BRN, NS) + c(42, 36, 3, BRN, NS) + c(26, 40, 2.6, BRN, NS) + c(34, 32, 2.2, BRN, NS),
  frites: r(18, 8, 6, 30, 1, YEL) + r(26, 4, 6, 32, 1, YEL) + r(34, 7, 6, 30, 1, YEL) + r(41, 11, 6, 28, 1, YEL) + p('M12 26 H52 L46 58 H18Z', RED) + c(32, 40, 5, YEL, NS),
  compote: r(16, 20, 32, 38, 6, '#F3E2A9') + r(14, 12, 36, 10, 3, RED) + p('M32 34 C27 30 22 34 23 40 C24 46 29 48 32 46 C35 48 40 46 41 40 C42 34 37 30 32 34Z', GRN),
  bonbon: p('M18 32 L4 22 V42Z M46 32 L60 22 V42Z', PNK) + el(32, 32, 15, 12, PNK) + p('M26 24 Q30 32 26 40 M34 22 Q38 32 34 42', 'none', `stroke="${WH}" stroke-width="2.5"`),
  legumes: p('M10 56 L30 20 Q36 16 38 22 Z', ORA) + p('M32 20 L30 8 M34 20 L40 10 M36 22 L46 16', 'none', `stroke="${GRN}" stroke-width="3"`) + r(46, 38, 6, 18, 2, '#7DBB5A') + c(44, 34, 7, GRN) + c(54, 34, 7, GRN) + c(49, 28, 7, GRN),
  viande: p('M40 8 C56 8 60 26 50 36 C44 42 34 42 30 38 L18 50', '#C8693B') + c(14, 50, 5, WH) + c(18, 56, 5, WH) + p('M30 38 L18 50', 'none', `stroke="${WH}" stroke-width="6"`) + p('M30 38 L18 50', 'none'),
  gouter: r(10, 30, 26, 26, 3, '#D9A066') + c(46, 38, 12, RED) + p('M46 26 Q46 20 50 18', 'none'),
  /* corps */
  tete: bodyFig() + hi(32, 13, 10),
  ventre: bodyFig() + hi(32, 33, 8),
  dos: bodyFig(true) + hi(32, 30, 9),
  bras: bodyFig() + hi(18, 32, 7),
  main: bodyFig() + hi(14.5, 42, 6),
  jambe: bodyFig() + hi(26, 50, 7),
  pied: bodyFig() + hi(39, 58, 6.5),
  dents: bigFace(1) + hi(32, 43, 8),
  gorge: p('M24 46 H40 V60 H24Z', SK) + bigFace() + hi(32, 54, 7),
  oreille: bigFace() + hi(13, 31, 8),
  oeil: bigFace() + hi(25, 29, 7),
  nez: bigFace() + hi(32, 34, 6.5),
  partout: bodyFig() + hi(32, 13, 6) + hi(32, 33, 6) + hi(18, 32, 5) + hi(39, 52, 5),
  /* émotions */
  content: face(32, 32, 25, 'happy'),
  triste: face(32, 32, 25, 'sad'),
  colere: face(32, 32, 25, 'angry'),
  fatigue: face(30, 34, 24, 'tired'),
  peur: face(32, 32, 25, 'scared'),
  malade: face(28, 32, 23, 'sick') + thermo(53, RED),
  calme: face(32, 32, 25, 'calm'),
  surpris: face(32, 32, 25, 'surprised'),
  faim: plate(),
  soif: glass() + el(32, 50, 4, 2, LB, NS) + p('M50 18 Q56 26 50 30 Q44 26 50 18Z', LB),
  chaud: sun(24, 24, 11) + thermo(50, RED),
  froid: p('M24 8 V48 M8 28 H40 M12 16 L36 40 M36 16 L12 40', 'none', `stroke="${BLU}" stroke-width="3.5"`) + thermo(50, BLU),
  ennui: face(32, 34, 24, 'neutral') + t(52, 16, 14, '...'),
  /* actions */
  jouer: r(8, 34, 22, 22, 3, RED) + r(34, 34, 22, 22, 3, BLU) + r(21, 10, 22, 22, 3, YEL) + t(19, 50, 13, 'A', WH) + t(45, 50, 13, 'B', WH) + t(32, 26, 13, 'C'),
  manger: face(24, 34, 20, 'open') + p('M58 20 L40 40', 'none', 'stroke-width="3"') + el(38, 42, 6, 4, '#D5DAE2'),
  boire: face(22, 34, 19, 'happy') + p('M38 22 H56 L53 50 H41Z', WH) + p('M40 30 H55 L53 48 H42Z', LB, NS) + p('M38 22 H56 L53 50 H41Z'),
  dormir: bed() + t(42, 18, 13, 'z') + t(52, 12, 10, 'z'),
  sortir: r(8, 8, 26, 50, 2, BRN) + c(29, 34, 2, YEL) + p('M38 32 H58 M51 25 L58 32 L51 39', 'none', `stroke="${GRN}" stroke-width="4"`),
  lire: book(BLU),
  dessiner: p('M8 52 Q20 36 30 46 Q38 54 50 40', 'none', `stroke="${PNK}" stroke-width="3.5"`) + p('M40 8 L56 24 L30 50 L20 54 L24 44Z', YEL) + p('M40 8 L56 24 L52 28 L36 12Z', PNK) + p('M24 44 L30 50'),
  televoir: tv(),
  ecouter: p('M14 38 V30 Q14 12 32 12 Q50 12 50 30 V38', 'none', 'stroke-width="4"') + r(8, 34, 12, 18, 4, RED) + r(44, 34, 12, 18, 4, RED) + note(30, 48, .55),
  laver: p('M12 8 H38 V14', 'none', 'stroke-width="3"') + el(38, 18, 10, 4, '#9AA3B2') + p('M32 26 L30 32 M38 26 V33 M44 26 L46 32 M35 38 L34 44 M41 38 L42 44', 'none', `stroke="${BLU}" stroke-width="2.5"`) + c(18, 48, 6, LB) + c(28, 54, 4, LB) + c(46, 52, 5, LB),
  calin: person(22, .9, { hair: 'long', shirt: RED, dress: 1 }) + person(40, .72, { hair: 'short', hc: HY, shirt: ORA }) + p('M14 34 Q30 44 46 32', 'none', 'stroke-width="3.2"') + heart(PNK, 50, 12, .35),
  reposer: r(6, 30, 52, 18, 5, PUR) + r(12, 20, 40, 16, 4, '#A78BFA') + r(4, 28, 10, 22, 4, PUR) + r(50, 28, 10, 22, 4, PUR) + p('M10 50 V56 M54 50 V56', 'none', 'stroke-width="3"'),
  allertoilettes: toilet() + p('M46 10 H60 M54 4 L60 10 L54 16', 'none', `stroke="${GRN}" stroke-width="3"`),
  danser: person(30, .95, { hair: 'pig', shirt: PNK, dress: 1, armsUp: 1 }) + note(50, 22, .5) + note(10, 18, .45),
  chanter: face(24, 34, 20, 'open') + note(48, 24, .6) + note(56, 40, .45),
  /* lieux */
  maison: house(),
  ecole: r(10, 26, 44, 32, 1, '#F2C36B') + p('M6 28 L32 12 L58 28', RED, 'stroke-width="3"') + r(27, 42, 10, 16, 1, BRN) + r(15, 34, 8, 7, 1, LB) + r(41, 34, 8, 7, 1, LB) + p('M32 12 V2 L42 5 L32 8', BLU, 'stroke-width="2"'),
  parc: p('M2 56 H62', 'none', `stroke="${GRN}" stroke-width="4"`) + tree(46) + r(6, 38, 26, 5, 1, BRN) + p('M9 43 V52 M29 43 V52', 'none', 'stroke-width="3"') + sun(14, 14, 6),
  chambre: bed() + r(40, 6, 14, 12, 1, LB),
  voiture: car(RED),
  magasin: r(8, 26, 48, 32, 1, WH) + p('M6 14 H58 L56 26 H8Z', WH) + p('M14 14 L13 26 M24 14 V26 M34 14 V26 M44 14 L45 26', 'none', `stroke="${RED}" stroke-width="5"`) + p('M6 14 H58 L56 26 H8Z') + r(16, 34, 14, 24, 1, LB) + r(36, 34, 14, 12, 1, ORA),
  dehors: sun(16, 16, 8) + tree(46) + p('M2 58 Q32 48 62 58', GRN, 'stroke-width="2.5"'),
  piscine: p('M18 6 V40 M30 6 V40 M18 16 H30 M18 26 H30', 'none', `stroke="#9AA3B2" stroke-width="3.5"`) + p('M4 44 q7-6 14 0 q7 6 14 0 q7-6 14 0 q7 6 14 0 V58 H4Z', '#6EC1F5', NS) + p('M4 44 q7-6 14 0 q7 6 14 0 q7-6 14 0 q7 6 14 0', 'none', `stroke="${BLU}" stroke-width="2.5"`),
  docteur: r(8, 18, 48, 36, 5, WH) + p('M24 18 V12 H40 V18', 'none', 'stroke-width="3"') + p('M28 26 H36 V32 H42 V40 H36 V46 H28 V40 H22 V32 H28Z', RED),
  /* objets */
  doudou: teddy(),
  tablette: r(10, 6, 44, 52, 6, '#34405A') + r(15, 11, 34, 38, 2, '#8EC5FF', NS) + c(32, 53, 2, WH, NS) + r(20, 18, 8, 8, 2, YEL, NS) + r(32, 18, 8, 8, 2, PNK, NS) + r(20, 30, 8, 8, 2, GRN, NS) + r(32, 30, 8, 8, 2, ORA, NS),
  ballon: c(32, 32, 24, WH) + p('M32 8 Q20 32 32 56 M8 32 Q32 22 56 32', 'none', `stroke="${RED}" stroke-width="3"`) + p('M14 15 Q30 30 50 50', 'none', `stroke="${BLU}" stroke-width="3"`) + c(32, 32, 24),
  livre: r(14, 6, 38, 52, 3, BLU) + r(18, 6, 34, 52, 2, '#2F6FD6') + r(24, 16, 22, 10, 1, WH) + p('M14 6 V58'),
  tele: tv(),
  musique: note(22, 46, 1) + note(42, 40, .8),
  puzzle: p('M10 18 H24 Q22 10 30 10 Q38 10 36 18 H50 V32 Q58 30 58 38 Q58 46 50 44 V58 H10Z', GRN),
  petitevoiture: car(YEL),
  velo: c(16, 42, 11) + c(48, 42, 11) + p('M16 42 L26 24 H44 L48 42 M26 24 L32 42 L44 24 M22 18 H30 M44 24 L42 16 H48', 'none', `stroke="${RED}" stroke-width="3"`),
  lego: r(8, 26, 48, 28, 3, RED) + r(14, 18, 10, 9, 2, RED) + r(27, 18, 10, 9, 2, RED) + r(40, 18, 10, 9, 2, RED),
  bulles: c(22, 38, 14, LB) + c(44, 22, 10, LB) + c(46, 48, 7, LB) + c(17, 33, 3, WH, NS) + c(41, 19, 2.5, WH, NS),
  telephone: r(18, 4, 28, 56, 5, '#34405A') + r(21, 10, 22, 40, 1.5, '#8EC5FF', NS) + c(32, 55, 2, WH, NS),
  /* catégories */
  cat_debut: speech(WH) + c(22, 25, 3, K, NS) + c(32, 25, 3, K, NS) + c(42, 25, 3, K, NS),
  cat_manger: '', cat_corps: '', cat_emotions: '', cat_faire: '', cat_lieux: '', cat_objets: '',
  photo: r(6, 14, 52, 38, 5, '#D5DAE2') + c(32, 33, 11, WH) + c(32, 33, 6, BLU) + r(20, 9, 14, 7, 2, '#D5DAE2'),
};
ICONS.cat_manger = ICONS.pomme; ICONS.cat_corps = bodyFig(); ICONS.cat_emotions = ICONS.content;
ICONS.cat_faire = ICONS.jouer; ICONS.cat_lieux = ICONS.maison; ICONS.cat_objets = ICONS.doudou;

function picto(id) {
  const g = ICONS[id] || ICONS.photo;
  return `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><g stroke="${K}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${g}</g></svg>`;
}
