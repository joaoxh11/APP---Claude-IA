// Meu Banco — funciona sem internet. Versão 05d240c963
const CACHE = "meu-banco-05d240c963";
const ARQUIVOS = ["./","index.html","app.js","manifest.webmanifest","icone.svg","icone-192.png","icone-512.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith("meu-banco-") && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  // Abre na hora com o que está guardado; atualiza em segundo plano quando houver internet.
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const chave = req.mode === "navigate" ? "index.html" : req;
    const guardado = await c.match(chave, { ignoreSearch: true });
    const rede = fetch(req).then((r) => { if (r.ok && r.type === "basic") c.put(chave, r.clone()); return r; }).catch(() => null);
    return guardado || (await rede) || new Response("Sem internet e o app ainda não foi guardado neste aparelho.", { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } });
  }));
});
