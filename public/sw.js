if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),o={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"941bef73c6a26e1fd2b9edf608fd452d"},{url:"/_next/static/GN-BambN3U2LTobigXT_r/_buildManifest.js",revision:"b9418b3f2fddb202e5112ea6e82c15fe"},{url:"/_next/static/GN-BambN3U2LTobigXT_r/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1242-3597f5b810183b6f.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/1279-56d19211e4281450.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/1318-02df0070b0aeac70.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/1396-57d88b2926743650.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/1399-6c539303d213744e.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/1434-d93f507ccecb3a48.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/1578-9cc5dc9cd35624b3.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/1717-f533cc3a554267ad.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/2472-520375bd3f04ed91.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/2975-7c40621fca624061.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/3388-5cc67df623b1c028.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/3394-922c7803257ba076.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/3914-caca34f4f528adb1.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/430-bbec678abe1a1c95.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/4326-f3c26a9aaf349ac4.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/4e6af11a-db8debd06e681e0c.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/6005-9f5e5b8c0ae88f59.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/6300-02ac8fd15eb83c09.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/6654-0583840c1b205965.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/6757-facb733731897b20.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/6797-ab49cc9d41ddef64.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/_not-found-07c1bd36366c8730.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chamados/%5Bid%5D/layout-7cf51283140cf2c2.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chamados/%5Bid%5D/page-fd2615ec0cc4ab72.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chamados/layout-dc3840eac2c4e4fe.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chamados/novo/layout-5cddbd84a49e57f2.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chamados/novo/page-bec5908dbcb35b4e.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chamados/page-8dc50b14d94a9520.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chat/layout-7dc63d4ff8373abf.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/chat/page-35c5a6572b77ed8c.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/layout-43a9ed1c231af2d2.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/login/layout-c757deab7bc1d50d.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/login/page-75035745d7ede5c7.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/motoristas/%5Bid%5D/layout-0730a85352d9ab72.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/motoristas/%5Bid%5D/page-6be6b74074acb348.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/motoristas/layout-c078ba0ac9ff11a3.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/motoristas/page-03b30eb30d80354a.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/ncv/%5Bid%5D/layout-fdc8cafaefe4c10a.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/ncv/%5Bid%5D/page-bdc37eca8013ce53.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/ncv/layout-1496a5844e2b7105.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/ncv/page-5f692b055b682a8f.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/page-98228accb12af6eb.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/usuarios/%5Bid%5D/layout-c35832c2cb057ae5.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/usuarios/%5Bid%5D/page-ae8349fb8b0e8825.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/usuarios/layout-33f8629b5b832d3e.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/usuarios/novo/layout-6017229a0368ca5a.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/usuarios/novo/page-c3da45b93bac8876.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/app/usuarios/page-59f8e7cbe89b1c70.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/fd9d1056-d9f1cc82d5430a29.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/main-6fa4e1e2467c8cd5.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/main-app-b313c404239f2845.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/pages/_app-0a6f9986ee298e67.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/pages/_error-77acd5d276fadc61.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1bc4c822708f503f.js",revision:"GN-BambN3U2LTobigXT_r"},{url:"/_next/static/css/3bdad3fac0650453.css",revision:"3bdad3fac0650453"},{url:"/_next/static/media/4b4ebe20759bdbf2-s.p.ttf",revision:"093ee89be9ede30383f39a899c485a82"},{url:"/_next/static/media/605324f7af12a99a-s.p.ttf",revision:"9ec263601ee3fcd71763941207c9ad0d"},{url:"/_next/static/media/7572a9b5289f55fe-s.p.ttf",revision:"d45bdbc2d4a98c1ecb17821a1dbbd3a4"},{url:"/_next/static/media/8001a01b32b71ef5-s.p.ttf",revision:"08c20a487911694291bd8c5de41315ad"},{url:"/_next/static/media/8b20023e8f811f53-s.p.ttf",revision:"fcc40ae9a542d001971e53eaed948410"},{url:"/_next/static/media/9102fb8415d8f327-s.p.ttf",revision:"6f8391bbdaeaa540388796c858dfd8ca"},{url:"/_next/static/media/98512bf8da1afe43-s.p.ttf",revision:"6f1520d107205975713ba09df778f93f"},{url:"/_next/static/media/PatioIcon.17d11c40.svg",revision:"4873742fb77cc26fde8a7b819b5068c6"},{url:"/_next/static/media/a52d0bf095c248da-s.p.ttf",revision:"bf59c687bc6d3a70204d3944082c5cc0"},{url:"/_next/static/media/a7317f18e35bd6ef-s.p.ttf",revision:"14d00dab1f6802e787183ecab5cce85e"},{url:"/_next/static/media/chamadocomplete.41bc0cbd.svg",revision:"afb48ae48b08978cccc2e69d6f160b76"},{url:"/_next/static/media/chamadowaintin.e49fd55c.svg",revision:"ad6ac4bc8c4867d4332a0b5ed9800ca3"},{url:"/_next/static/media/favicon.8f6b368d.ico",revision:"700ce40836612b3fc458bc808c41b699"},{url:"/_next/static/media/icon.6c9618a9.svg",revision:"16801fb458aeefc39ddd348756b08385"},{url:"/assets/images/bus.svg",revision:"afb21403f8c5e2943328694efc70ea1d"},{url:"/assets/images/car.svg",revision:"0b6ef76123b4724f86daecc9feeeb2e3"},{url:"/assets/images/img1.jpg",revision:"41c9aa15964d65eed84a9fb82e9bcadd"},{url:"/assets/images/img2.jpg",revision:"42a05a309d2c9ec567830d09b2f7c73f"},{url:"/assets/images/img3.jpg",revision:"f573df1ca3acaaf711b2a0fde1d55eeb"},{url:"/assets/images/tec.svg",revision:"6623b5d1b6e76e99927de7b86327c711"},{url:"/icon-192x192.png",revision:"61c5cc6cf763be9416dbc6204a44e75f"},{url:"/icon-256x256.png",revision:"ff7fdc7ba64191f48fe07674b2c6cde1"},{url:"/icon-384x384.png",revision:"48bf48eeabb459bcdc961270cbd0a291"},{url:"/icon-512x512.png",revision:"e2d9989914c7cb8270f27da42dfacc37"},{url:"/manifest.webmanifest",revision:"e7f18365f6560a61068cc3686fda9b60"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));