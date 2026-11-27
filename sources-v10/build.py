import re, pathlib
B = pathlib.Path('/home/claude/build'); OUT = pathlib.Path('/home/claude/je-parle-avec-toi/v10')
shell = (B / 'shell.html').read_text()
js = '\n'.join((B / f).read_text() for f in ['icons.js', 'data.js', 'app.js'])
html = shell.replace('/*CSS*/', (B / 'style.css').read_text()).replace('/*JS*/', js)
(OUT / 'index.html').write_text(html)
ver = re.search(r"APP_VERSION = '([^']+)'", js).group(1)
(OUT / 'service-worker.js').write_text(f"""const VERSION = 'jpat10-v{ver}';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'fonts/FiraSans-Regular.woff', 'fonts/FiraSans-SemiBold.woff', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', (e) => {{ e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); }});
self.addEventListener('activate', (e) => {{
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('jpat10-') && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
}});
self.addEventListener('fetch', (e) => {{
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, {{ ignoreSearch: true }}).then((hit) => {{
    const net = fetch(e.request).then((res) => {{ if (res.ok) {{ const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)); }} return res; }}).catch(() => hit);
    return hit || net;
  }}));
}});
""")
print('ok', len(html) // 1024, 'Ko', ver)
