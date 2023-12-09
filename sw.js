const CACHE_NAME = "my-cache-v1";
const cacheUrls = [
  "/",
  "/index.html",
  "/public/info.html",
  "/public/shop.html",
  "/styles.css",
  "/script.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheUrls);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        networkFirst({ request: event.request, fallbackUrl: "/offline.html" })
      );
    })
  );
});

const networkFirst = async ({ request, fallbackUrl }) => {
  try {
    const responseFromNetwork = await fetch(request);
    const cache = await caches.open(CACHE_NAME);

    await cache.put(request, responseFromNetwork.clone());

    return responseFromNetwork;
  } catch (error) {
    const responseFromCache = await caches.match(request);

    if (responseFromCache) {
      return responseFromCache;
    }

    const fallbackResponse = await caches.match(fallbackUrl);

    if (fallbackResponse) {
      return fallbackResponse;
    }

    return new Response("Network error", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};
