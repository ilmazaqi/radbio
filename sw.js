const cacheName = 'v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js' // Daftarkan semua file yang ingin disimpan offline
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// Fetch konten saat offline
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
