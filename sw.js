const cacheName = "v2";

const cacheAssets = [
  "index.html",
  "./models/arrow2.png",
  "./models/ccd.gltf",
  "./models/civil.gltf",
  "./models/dg.gltf",
  "./models/gtac.gltf",
  "./models/iit.gltf",
  "./models/lc.gltf",
  "./models/karma.gltf",
  "./models/lib.gltf",
  "./models/lt1.gltf",
  "./models/sb.gltf",
  "./models/sryia.gltf",
  "./models/direction2atccd.bin",
  "./models/direction2atcivil.bin",
  "./models/direction2atdg.bin",
  "./models/direction2atgamcha.bin",
  "./models/direction2atkarma.bin",
  "./models/directionatiitlogo.bin",
  "./models/direction2atlc.bin",
  "./models/direction2atlib.bin",
  "./models/direction2atsb.bin",
  "./models/direction2atviswarayya.bin",
  "./models/directionatLT1.bin",
  "./models/directionatvt.bin",
  "./SVG/csi.svg",
  "./SVG/augnex.svg",
  "./SVG/Technex.svg",
  "./ar.js",
  "./canvas.js"
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
