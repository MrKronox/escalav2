// Nome do cache
const CACHE_NAME = 'escalav2';

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('SW: Instalado');
});

// Resposta às requisições (mantém o app online)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});