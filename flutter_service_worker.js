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
"index.html": "9088f402b96febac84330bd3fdbedee0",
"/": "9088f402b96febac84330bd3fdbedee0",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"manifest.json": "4d2a074e955647542596586cbde41715",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "97dbaa9593fcbd705cff16920d5e7de0",
".git/logs/refs/heads/main": "97dbaa9593fcbd705cff16920d5e7de0",
".git/logs/refs/remotes/origin/main": "99dda906dc4f2c73d6b1d3a778ebf123",
".git/index": "733508a018a4abb029f11b65ddba63db",
".git/config": "8eb136869d76b17a9acc942efb4bc38c",
".git/refs/heads/main": "a063ac3a622d0db5163a8cd099d0c321",
".git/refs/remotes/origin/main": "a063ac3a622d0db5163a8cd099d0c321",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/objects/c3/51f7deeda468257dfdb45ae308726dcbc28042": "19890c75a8ba27275c57431bd95e370e",
".git/objects/8b/b2d2adfc19247120a6a69f1f9397a195a9b693": "a3e973badd09cfb71e6bb2fef9089b53",
".git/objects/fa/5e641f4060ab1611c367839eb128c9e1aab01a": "aa1f1ab01345d23f197e74822f387aee",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/6a/d0e5c0fa075a924683617da48c106674b75955": "1cd4e9cb78583a3101f4f7cef6557990",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/48/a706dc7de1c0ab37bb52066be238e597bbed73": "76a899f3a701bb15ae765ff14bf4df67",
".git/objects/62/df9a21c5939e59040f7f18fedef1aac3f0568c": "f1408a79b6dab6a0908e651b6a5b2d77",
".git/objects/96/563ef639fb9000f8d237b61933723339e12eed": "6a9c28edd78d942e30ab7e02acd8ebb0",
".git/objects/98/9f323b1e32b3522c404c91818fb9b67a5e76c0": "40621651a2d95c3406fd94d623dfce09",
".git/objects/14/5b3df5cd35be499b96e20bd89393586a127ff0": "6aaf85aa37dae2f7ae0f89751638d5d2",
".git/objects/e2/e7830ae4fd1380fc0c1b20afc1cf37a89bba79": "e136dd84ec2427dbe29479fd9d7b6595",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/01/6359c024c8fd5aa2f4551f424c5a22db20d136": "138c33fb2bd6d92206ece1e7ce248f4c",
".git/objects/43/4f12f7d1775736d277b8f3ade303d0e85b38b9": "07d4a19f039c8e154f7624b1172d0773",
".git/objects/da/2983c112499d14a751a4c5f13838044f796441": "14df9415b76b419b669223ccebe14c41",
".git/objects/2f/d90c6863219f80fb7faed064d4b414fdbe050a": "b6ad001b0a43ebaaed36d65b787ecd38",
".git/objects/bd/e76afc19a11c5ac38e56820bf4d9d9f8e3b8c9": "4c1bacfdca3ebd27c8258903d31a266a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/d0/91c28f04211f6ea515ecdd907ecf6e16ed0d85": "f9f4b973fcb52d2080a3abfd4b71e50a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/55/099e822b86c848fc2f9ebf038e88c37f240fc5": "db88dba498015f73b9b3d2f99f769667",
".git/objects/32/28e2824ebac8ed4efb8e04cf1ba24c0bab2f92": "94e8b18318c6f95b36eb203bb1e94f17",
".git/objects/39/3a3ed1624392af703b64565de97becf838799b": "eef3647ea8114e9ed3666876a6842950",
".git/objects/6f/dea7d61b2f5414abf88025d41260c09ab4d2f9": "62251d80fa42620316441ffaa6c3701f",
".git/objects/54/0cd2b04742810b8d57e24df6dad8d8ddec10ec": "51e2bfd6f13cb64bb78744d655b6ae6e",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/d9/e6690df714c023294ac9eed8d856911a331f3f": "71f01879e31abb9659391a9fd3c2a915",
".git/objects/0a/8c2fbe2ea8bf5536c824e2cd2ead7e3677336d": "58599e0dd1c53e30113aa1b2a55e729b",
".git/objects/56/0f52b24a89ab9ac9559ee42783f701d20b47f2": "a8aec8eb315fecea41cb3779543d5b87",
".git/objects/20/1cc58b85387a7c15ca41662393dbd53e9c600f": "0250a4f0eb6d058379358ed628505414",
".git/objects/03/e234d45ebeeb4f833a140cc8e6a3000e7bac56": "2d610fd1716ef88585257caf661c0c4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/df/05a94554e304869675f4af6c9d121b564c9854": "b675b1d3ff2c500c1ff5c48b51492931",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/71/94962f7800cc444037ab05950ace0b15297000": "ede8cc34e4a2c5284e9f9ae1423455b4",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/60/c8c1db4aeeb438859fefe215b845f100ece10a": "9168b14b9298fbca526fd3f7b800dc62",
".git/objects/c4/7e492fcf86978e27ed906a8c25a4eb843c9640": "6b6382b38d824d30519460324cea898e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/52841e015cda984f26c67ed409ebed9d47637c": "e1a3b3afc870c9706dff405b2ec47f5f",
".git/objects/05/e29fe1db9800960a3b39bc6e71477e1ad1b075": "22cbc86c8591f4876d0ad5a54daa41ef",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/e8a0671844bb6a108e716a25c56ba1739023b4": "e4631187ebfde285c986b4e055332302",
".git/objects/02/b55645aa87b11a5d8b9dfef27fb058e9f60efb": "0fe548ae66a4dac451004b9febae5a8f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e3/e6a270e703a33abfc60423167dbb4b0e907d77": "563dae35496c07eea867e8f377856c38",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/47/246d47b2ecf2527280afe2a811b3dea6b16927": "58fa6fdab6dc410e2c94aa484d841176",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/objects/11/e55532af13ca50a56e376ddfe24c23a02cd112": "1e3bc902c4a43ad449e3aaf3fad6e50b",
".git/objects/12/42cc250cedcdeef69654e117a3bc458670fda0": "1f55a1bef0e162eb7fa81357d1bc5244",
".git/objects/4a/04d463e25d807ab9c094c85b27121d3d25eb96": "c4fb92067f5d4167c57e1b7c2ca0937e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/7e/4d3e30a26c94cf84ace8dee2e8cef6ae263301": "25b7dc3f520e4e5a0c0fe50936eef671",
".git/objects/b4/a95b7343dd96da33eed296d5decd2b2b0ab347": "fd502f905253973253974c8d5c4340d7",
".git/objects/4d/545bd7ab8def466c6fd1b546d19ca87e2effe7": "559d984d2b2b56131171d1e0994f19bd",
".git/objects/ba/b2bae8038e18710ddb687612c7ee8dced7a76b": "1ac83782b3f8d286024c0c7fcc4fc097",
".git/objects/19/20af1e526a255ee2c70c5c4fe6eca54e768f0e": "eba684fae2f6d88d01f1c37af7c7d306",
".git/objects/6d/2de3a9419826595b1fef084a867bc415369668": "5dbceab13b68b911af0f3475c155607a",
".git/objects/9f/46bb964af7d8c41a134391edb52ffe8753b078": "a0cbe4b89871c9a19495997dc3e45e1f",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/1b/64247fe4609b2f815eb314a29f27564653e05b": "f23e763b990bfb781c59dbf6c9d967a7",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/2c/6f3e2168effebc96e75904c97936794df6c3ad": "d41f67c341218ebb88a969b75b83b820",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/ac/7b3a79a4f4fde1508a49886dbabf6818c4aa76": "119b08681dc61ca71bf1c5695ec2ff76",
".git/objects/99/89d25f02d658d3a5d69af0c3c8a09c1862a980": "b11ec429b30fb2d60e7db5284363abab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/61f89d8b0da578b3136636a289823615d2f204": "3481cb8942dbb622c20707043ce31b12",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/80/44a658756ea062f3dcd099d5750478b050c511": "dde49263c4c490db356b0d0297c9df61"};
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
