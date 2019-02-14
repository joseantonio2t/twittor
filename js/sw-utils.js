//Guarda en el caché dinámico
function updateDynamicCache(dynamicCache, req, res) {
    if (res.ok) {
        caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}