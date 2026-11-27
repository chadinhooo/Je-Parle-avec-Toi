/* Pictogrammes ajoutés pour Mon Monde */
Object.assign(ICONS, {
  cereales: bowl(WH) + c(20, 32, 3, HY) + c(28, 29, 3, HY) + c(36, 31, 3, HY) + c(44, 30, 3, HY) + c(24, 25, 3, HY) + c(40, 25, 3, HY) + p('M8 34 H56') + p('M46 6 L38 28', 'none', 'stroke-width="3"'),
  raisin: p('M32 14 Q34 6 40 4', 'none') + p('M34 10 Q44 4 48 12 Q40 14 34 10Z', GRN) + [[24, 20], [36, 20], [18, 31], [30, 31], [42, 31], [24, 42], [36, 42], [30, 53]].map(([x, y]) => c(x, y, 6.5, PUR)).join(''),
  fraises: p('M32 58 C16 46 10 30 18 22 Q32 14 46 22 C54 30 48 46 32 58Z', RED) + p('M20 22 L26 14 L32 20 L38 14 L44 22 Q32 26 20 22Z', GRN) + [[26, 32], [38, 32], [32, 40], [26, 46], [38, 44]].map(([x, y]) => el(x, y, 1.2, 2, YEL, NS)).join(''),
  lavermains: hand(24, 36, .85) + hand(42, 36, .85) + p('M30 4 V10 M24 6 V12 M36 6 V12', 'none', `stroke="${BLU}" stroke-width="2.5"`) + c(14, 56, 4, LB) + c(52, 54, 5, LB),
  brosser: r(6, 40, 40, 8, 4, BLU) + r(36, 30, 18, 10, 3, WH) + p('M38 30 V24 M42 30 V24 M46 30 V24 M50 30 V24', 'none', `stroke="${LB}" stroke-width="3"`) + c(20, 18, 7, WH) + c(30, 14, 5, WH),
  habiller: p('M22 8 L8 18 L14 28 L20 24 V58 H44 V24 L50 28 L56 18 L42 8 Q32 16 22 8Z', BLU) + c(32, 26, 2, WH, NS) + c(32, 36, 2, WH, NS),
  histoire: book(PUR) + c(52, 10, 6, YEL) + c(49, 8, 5, '#F4F6FA', NS),
  toboggan: p('M10 58 V18 H20 V58', 'none', 'stroke-width="3"') + p('M10 26 H20 M10 36 H20 M10 46 H20', 'none', 'stroke-width="2"') + p('M20 18 Q30 18 40 40 Q46 52 58 54 V58 Q42 58 36 44 Q28 26 20 24Z', RED),
  balancoire: p('M8 58 L18 6 H46 L56 58', 'none', 'stroke-width="3.5"') + p('M26 6 V40 M38 6 V40', 'none', 'stroke-width="2"') + r(22, 40, 20, 5, 2, YEL),
  jaifini: c(32, 32, 25, BLU) + p('M19 33 L28 42 L45 23', 'none', `stroke="${WH}" stroke-width="6"`),
  besoinaide: c(32, 32, 25, WH) + p('M32 7 A25 25 0 0 1 57 32 H45 A13 13 0 0 0 32 19Z M32 57 A25 25 0 0 1 7 32 H19 A13 13 0 0 0 32 45Z', RED) + c(32, 32, 13, '#EEF4FB'),
  allume: p('M22 30 Q22 12 32 12 Q42 12 42 30 Q42 38 37 42 H27 Q22 38 22 30Z', YEL) + r(27, 42, 10, 10, 2, '#9AA3B2') + p('M32 2 V6 M12 14 L15 17 M52 14 L49 17 M8 30 H12 M52 30 H56', 'none', 'stroke-width="2.5"'),
  eteins: p('M22 30 Q22 12 32 12 Q42 12 42 30 Q42 38 37 42 H27 Q22 38 22 30Z', '#5B6475') + r(27, 42, 10, 10, 2, '#9AA3B2') + c(50, 14, 6, YEL) + c(47, 12, 5, WH, NS),
  montour: person(26, .85, { hair: 'short', shirt: GRN }) + p('M56 10 L40 26 M40 26 h7 M40 26 v-7', 'none', `stroke="${RED}" stroke-width="3.5"`),
  atoi: hand(24, 34, .9) + p('M38 32 H58 M51 25 L58 32 L51 39', 'none', `stroke="${GRN}" stroke-width="4"`),
  viens: hand(28, 32, 1) + p('M48 18 Q58 30 48 44', 'none', `stroke="${GRN}" stroke-width="3.5"`) + p('M44 40 L48 44 L52 39', 'none', `stroke="${GRN}" stroke-width="3.5"`),
  peu: r(10, 40, 12, 16, 2, RED) + r(26, 28, 12, 28, 2, WH) + r(42, 14, 12, 42, 2, WH),
  tres: r(10, 40, 12, 16, 2, RED) + r(26, 28, 12, 28, 2, RED) + r(42, 14, 12, 42, 2, RED),
  adulte: person(32, 1, { hair: 'short', hc: '#3B2A1E', shirt: '#5B6475' }),
  room_moi: ICONS.moi, room_gens: ICONS.tous, room_cuisine: '', room_salon: '', room_bain: '', room_chambre: ICONS.dormir, room_dehors: ICONS.parc,
});
ICONS.room_cuisine = r(14, 6, 36, 52, 5, '#E9EEF5') + p('M14 24 H50') + p('M42 12 V20 M42 30 V44', 'none', 'stroke-width="3"') + c(24, 14, 3, RED, NS) + c(26, 36, 3, YEL, NS);
ICONS.room_salon = ICONS.reposer;
ICONS.room_bain = r(4, 30, 56, 18, 6, WH) + p('M8 48 L10 56 M54 48 L52 56', 'none', 'stroke-width="3"') + c(20, 26, 6, LB) + c(32, 22, 5, LB) + c(42, 26, 6, LB) + p('M52 30 V10 H44', 'none', 'stroke-width="3"');
