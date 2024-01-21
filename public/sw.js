

let cacheData = "appV1"
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/manifest.json',
                '/users',
                '/about',
                '/logo192.png',
                '/favicon.ico',
                '/'
            ])
        })
    )
})


this.addEventListener("cacheFetch", (event) => {
    event.respondWith(
        caches.match(event.request ).then((response) => {
            if (response) {
                return response
            }
        })
    )
})