self.addEventListener('install', (e) => {
    console.log('[KanjiMon] Service Worker Instalado');
});

self.addEventListener('fetch', (e) => {
    // Motor silencioso para validação de PWA
});