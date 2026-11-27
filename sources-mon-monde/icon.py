from playwright.sync_api import sync_playwright
def svg(pad):
    s=512; i=pad
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
<rect width="512" height="512" rx="{0 if pad else 112}" fill="#4338CA"/>
<g transform="translate({256-200*(1-pad/256)} {256-200*(1-pad/256)}) scale({1-pad/256})">
<path d="M40 70 Q40 30 80 30 H320 Q360 30 360 70 V250 Q360 290 320 290 H170 L90 360 V290 H80 Q40 290 40 250Z" fill="#FFFFFF"/>
<path d="M110 180 L200 100 L290 180" fill="none" stroke="#F7C948" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="130" y="172" width="140" height="92" rx="8" fill="#F7C948"/>
<rect x="183" y="206" width="34" height="58" rx="5" fill="#4338CA"/>
</g></svg>'''
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome')
    for name,size,pad in [('icon-512.png',512,0),('icon-192.png',192,0),('icon-maskable-512.png',512,70)]:
        pg=b.new_page(viewport={'width':size,'height':size},device_scale_factor=1)
        pg.set_content(f'<html><body style="margin:0;background:transparent">{svg(pad).replace(chr(39)+"512"+chr(39),"")}</body></html>'.replace('width="512" height="512">',f'width="{size}" height="{size}">',1))
        pg.screenshot(path='/home/claude/mm/'+name, omit_background=True); pg.close()
    b.close()
