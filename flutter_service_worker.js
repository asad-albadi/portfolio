'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"favicon.png": "b508b91a9dfce1a6c867474d4831a007",
"assets/AssetManifest.json": "fe43aa50014713570f9f3baf77ea8698",
"assets/NOTICES": "7f17afa130974bf8f5a6fa4ade943f0f",
"assets/lib/assets/nginx.png": "b60ecba34f64c319162fdb5d0ba71c32",
"assets/lib/assets/sqlite.png": "26e125bb824588921beb2c97758e7388",
"assets/lib/assets/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/lib/assets/flutter.png": "4262c71228b7aa391e995fe5f1d57795",
"assets/lib/assets/airflow.png": "9d8c0430f3e4cfebd4c4db437d0f1526",
"assets/lib/assets/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/lib/assets/mariadb.png": "abcd075c15f617d2c9a125b0f484717f",
"assets/lib/assets/jmeter.png": "d7860061e5813cce5c933f071bd6ad83",
"assets/lib/assets/android.png": "549d0830da4a9dc0e04608256eedb6f9",
"assets/lib/assets/bash.png": "4abdfcc1e24b7560e96ba42bed5fc0e4",
"assets/lib/assets/automation.png": "20a51ba93e97a6d0fd5286fef7b91518",
"assets/lib/assets/selenium.png": "b016f79a04a1e0e43245dc1cde4cea97",
"assets/lib/assets/mongodb.png": "20d8652c9fd1853ac11a27da7b915ac1",
"assets/lib/assets/grafana.png": "434ae7aef6070e6b8c7cf8fdaa24a131",
"assets/lib/assets/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/lib/assets/mazoon.png": "95040cd5ac58c43f291e839bfa504551",
"assets/lib/assets/docker.png": "d2b89813eec93a004293dc8a723803b6",
"assets/lib/assets/api.png": "c645edab0957e72b7451048da5d4898c",
"assets/lib/assets/arduino.png": "19510f68cff9741fb1f534afd245041b",
"assets/lib/assets/web.png": "70938d7373a3fa0579524878fdfae845",
"assets/lib/assets/fintech.png": "9af758cac28d68ba6223c77690a57cad",
"assets/lib/assets/appium.png": "463aae7aaaa91cb4bbc436c4b52d19e3",
"assets/lib/assets/server.png": "7b2d416676224baf7366fa1efb5a6677",
"assets/lib/assets/desktop_app.png": "f12209a9c29cb0a5e48744985b9b2ed4",
"assets/lib/assets/postgres.png": "de0dbc4293ba7626813b9069007a87c8",
"assets/lib/assets/mysql.png": "07c28adf28e0592b46094aef81fcc655",
"assets/lib/assets/mobile_app.png": "9687a703fdda4a9ef0c2bd226b433777",
"assets/lib/assets/vodafone.png": "e938d8e50902a7e1199a3539f75aa2a0",
"assets/lib/assets/calculator.png": "f9aef2e903a793dc19e5f195b524f55d",
"assets/lib/assets/powershell.png": "f4f835d3e3ece14762ceaa067dcacece",
"assets/lib/assets/dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/lib/assets/linux.png": "4393f6965b7dd8244e1694a4e1a7129e",
"assets/lib/assets/windows.png": "d680311ab38582863543ed37cf9bb901",
"assets/lib/assets/pos.png": "1c5815c1fee675775abe2fd5a141550f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/AssetManifest.bin": "630dec1764c9608a6a272cc22c3e1d56",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "ad6ba7521c8fc790ee7570759c150fe5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"index.html": "bda321c03afc2d49d6f53889129bddf3",
"/": "bda321c03afc2d49d6f53889129bddf3",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"manifest.json": "e737d5139a339769ba08cab75f522284"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
