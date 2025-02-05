
const CACHE_NAME = 'chatbot-cache-v1';
const urlsToCache = [
    '/',
    '/styles.css',
    '/app.js',
    '/favicon.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response; // Serve from cache
            }
            return fetch(event.request); // Fetch from network
        })
    );
});
