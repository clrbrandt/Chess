const C='epl-chess-v1',A=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A)))});
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(e.request.method!=='GET'||(u.origin!==location.origin&&!/cdn/.test(u.hostname)))return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const k=x.clone();caches.open(C).then(c=>c.put(e.request,k));return x}).catch(()=>r)));
});
