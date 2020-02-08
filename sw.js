const cacheName = "v1";

const cacheAssets = [
  "index.html",
  "ar.js",
  "/models/arrow2.png",
  "/models/ccd.gltf",
  "/models/civil.gltf",
  "/models/dg.gltf",
  "/models/gtac.gltf",
  "/models/karma.gltf",
  "/models/lib.gltf",
  "/models/lt1.gltf",
  "/models/sb.gltf",
  "/models/sryia.gltf",
  "/models/vt.gltf",
  "/models/direction2atcivil.bin",
  "/models/direction2atdg.bin",
  "/models/direction2atgamcha.bin",
  "/models/direction2atkarma.bin",
  "/models/direction2atlc.bin",
  "/models/direction2atlib.bin",
  "/models/direction2atsb.bin",
  "/models/direction2atviswarayya.bin",
  "/models/directionatLT1.bin",
  "/models/directionatvt.bin",
  "https://apis.mapmyindia.com/advancedmaps/v1/mlshmhqdw8sytpv197pbjfdes81y5k93/map_load?v=1.3",
  "https://aframe.io/releases/0.9.2/aframe.min.js",
  "https://raw.githack.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.min.js"
];

// Call Install Event
self.addEventListener("install", e => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", e => {
  console.log("Service Worker: Activated");
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener("fetch", e => {
  console.log("Service Worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
