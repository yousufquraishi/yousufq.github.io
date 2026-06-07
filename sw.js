const CACHE_NAME = 'walima-seating-v1';
const urlsToCache = [
  './',
  './index.html',
  './banner.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached version if found, otherwise pull from the network
        return response || fetch(event.request);
      })
  );
});
