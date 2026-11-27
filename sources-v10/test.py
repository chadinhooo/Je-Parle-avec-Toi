import json, subprocess, time, sys
from playwright.sync_api import sync_playwright
srv = subprocess.Popen(['python3','-m','http.server','8765','-d','/home/claude/je-parle-avec-toi/v10'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(.8)
CASES = [
 ('fr','f',['veux','eau'],"Je veux de l'eau"),
 ('fr','f',['mal','ventre'],"J'ai mal au ventre"),
 ('fr','f',['suis','content'],"Je suis contente"),
 ('fr','m',['suis','content'],"Je suis content"),
 ('fr','f',['neveux','soupe'],"Je ne veux pas de soupe"),
 ('fr','f',['neveux','eau'],"Je ne veux pas d'eau"),
 ('fr','f',['vais','parc'],"Je vais au parc"),
 ('fr','f',['ouest','doudou'],"Où est mon doudou ?"),
 ('fr','f',['aime','pates'],"J'aime les pâtes"),
 ('fr','f',['besoin','dormir'],"J'ai besoin de dormir"),
 ('fr','f',['mal','oreille'],"J'ai mal à l'oreille"),
 ('fr','f',['mal','dents'],"J'ai mal aux dents"),
 ('fr','f',['ventre'],"J'ai mal au ventre"),
 ('fr','f',['faim'],"J'ai faim"),
 ('fr','f',['fatigue','faim'],"Je suis fatiguée et j'ai faim"),
 ('fr','f',['veux','jouer'],"Je veux jouer"),
 ('fr','f',['parc'],"Je veux aller au parc"),
 ('fr','f',['veux','pomme','banane'],"Je veux une pomme et une banane"),
 ('fr','f',['papa','vais','maison'],"Papa, je vais à la maison"),
 ('fr','f',['maman','veux','calin'],"Maman, je veux faire un câlin"),
 ('fr','f',['mal','partout'],"J'ai mal partout"),
 ('fr','f',['besoin','eau'],"J'ai besoin d'eau"),
 ('fr','f',['veux','tele'],"Je veux la télé"),
 ('fr','f',['naime','bruit'] if False else ['naime','legumes'],"Je n'aime pas les légumes"),
 ('en-US','f',['veux','pomme'],"I want an apple"),
 ('en-US','f',['veux','eau'],"I want some water"),
 ('en-US','f',['mal','ventre'],"My tummy hurts"),
 ('en-US','f',['ventre','tete'],"My tummy and my head hurt"),
 ('en-US','f',['neveux','soupe'],"I don't want soup"),
 ('en-US','f',['maman','vais','parc'],"Mom, I'm going to the park"),
 ('en-GB','f',['maman','veux','biscuit'],"Mum, I want a biscuit"),
 ('en-US','f',['fatigue','faim'],"I'm tired and hungry"),
 ('en-US','f',['ouest','doudou'],"Where is my teddy?"),
 ('en-US','f',['aime','pomme'],"I like apples"),
]
bad=0
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome')
    pg=b.new_page(viewport={'width':390,'height':844})
    errs=[]; pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m: m.type=='error' and errs.append(m.text))
    pg.goto('http://localhost:8765/'); pg.wait_for_timeout(500)
    for lang,g,toks,exp in CASES:
        got=pg.evaluate("([l,g,t])=>{S.lang=l;S.gender=g;return compose(t)}",[lang,g,toks])
        ok=got==exp; bad+= not ok
        print(('OK  ' if ok else 'FAIL'),toks,'->',got, '' if ok else '| attendu: '+exp)
    print('erreurs:',errs)
    b.close()
srv.terminate(); sys.exit(bad)
