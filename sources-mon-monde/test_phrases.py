# Vérifie les phrases produites par Mon Monde (lancer : python3 test_phrases.py, après python3 build.py)
import subprocess, time, sys
from playwright.sync_api import sync_playwright
CASES = [('fr','f','veux:eau',0,"Je veux de l'eau"),('fr','f','veux:eau',1,"Je ne veux pas d'eau"),('fr','f','mal:ventre',0,"J'ai mal au ventre"),
 ('fr','f','tres:oreille',0,"J'ai très mal à l'oreille"),('fr','f','say:content',0,"Je suis contente"),('fr','m','say:content',0,"Je suis content"),
 ('fr','f','veux:yaourt',1,"Je ne veux pas de yaourt"),('fr','f','ouest:doudou',0,"Où est mon doudou ?"),('fr','f','aller:parc',0,"Je veux aller au parc"),
 ('fr','f','aller:mamie',0,"Je veux aller chez Mamie"),('fr','f','tpl:viens:maman',0,"Maman, viens"),('fr','f','verb:brosser',0,"Je veux me brosser les dents"),
 ('en-US','f','veux:pomme',0,"I want an apple"),('en-US','f','mal:dents',0,"My teeth hurt"),('en-US','f','tpl:aime:maman',0,"I love you, Mom"),
 ('en-GB','f','veux:biscuit',0,"I want a biscuit"),('en-GB','f','peu:ventre',0,"My tummy hurts a little")]
srv = subprocess.Popen(['python3','-m','http.server','8767','-d',sys.argv[1] if len(sys.argv)>1 else '../mon-monde'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(.8)
bad = 0
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome'); pg = b.new_page(); pg.goto('http://localhost:8767/'); pg.wait_for_timeout(300)
    for lang, g, o, neg, exp in CASES:
        got = pg.evaluate("([l,g,o,n])=>{S.lang=l;S.gender=g;return optText(o,!!n)}", [lang, g, o, neg])
        if got != exp: bad += 1; print('ÉCHEC', o, '->', got, '| attendu :', exp)
    for q, exp in [("Tu veux des pâtes ou du riz ?", ['pates', 'riz']), ("Tu as mal où ?", ['tete', 'ventre', 'dents', 'oreille']),
                   ("Tu veux jouer au ballon ou aux Lego ?", ['ballon', 'lego']), ("Tu veux regarder la télé ou lire une histoire ?", ['televoir', 'histoire']),
                   ("Tu veux de l'eau ?", ['oui', 'non'])]:
        got = pg.evaluate("q=>{S.lang='fr';return understand(q)}", q)
        if got != exp: bad += 1; print('ÉCHEC écoute', q, '->', got)
    b.close()
srv.terminate(); print('OK' if not bad else f'{bad} échec(s)'); sys.exit(bad)
