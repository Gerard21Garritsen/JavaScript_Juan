//This file has all code related with Servive Worker

const cache_name = "apv-v1";

const datos_cache = [
    "/",
    "/47-ServiceWorkers-PWA/index.html",
    "/47-ServiceWorkers-PWA/error.html",
    "/47-ServiceWorkers-PWA/css/bootstrap.css",
    "/47-ServiceWorkers-PWA/css/styles.css",
    "/47-ServiceWorkers-PWA/js/app.js",
    "/47-ServiceWorkers-PWA/js/apv.js"
]


self.addEventListener("install", e =>
{
    console.log("Installing...", e);

    //adding to the cache
    // e.waitUntil(
    //     caches.open(cache_name)
    //     .then(cache => cache.addAll(datos_cache))
    // )

});


self.addEventListener("activate", () => console.log("Activando Service Worker..."));


self.addEventListener("fetch", e =>
{
    console.log(e)
    //get cache data
    // e.respondWith(
    //     caches.match(e.request)
    //     .then(result => result)
    //     .catch(() => caches.match("/47-ServiceWorkers-PWA/error.html"))
    // )
    
});

