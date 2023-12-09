const cacheName = "leboncotePWA-v1";
const appShellFiles = [
  "/index.html",
  "/public/shop.html",
  "/public/info.html",
  "/assets/js/pwa.js",
  "/assets/css/style.css",
  "/assets/images/logo.png",
  "/assets/fonts/Arvo/Arvo-Bold.ttf",
  "/assets/fonts/Arvo/Arvo-BoldItalic.ttf",
  "/assets/fonts/Arvo/Arvo-Italic.ttf",
  "/assets/fonts/Arvo/Arvo-Regular.ttf",
  "/assets/fonts/Raleway",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");

      const addAllPromises = appShellFiles.map(async (url) => {
        try {
          const response = await fetch(url);
          await cache.put(url, response.clone());
        } catch (error) {
          console.error(
            "[Service Worker] Cache add error for",
            url,
            ":",
            error
          );
          // Gérez l'erreur en conséquence
        }
      });

      await Promise.all(addAllPromises);
    })()
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
