if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const o=e=>r(e,c),f={module:{uri:c},exports:n,require:o};i[c]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(d(...e),n)))}}define(["./workbox-4ad4face"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"4064e5d9.js",revision:"8f710c83c2155e2aeb8c03bb18f7fcb8"},{url:"7041c35a.js",revision:"f1dbbf2fe0933bc415efbed24d703d32"},{url:"98ab01e1.js",revision:"2caec087cf1cf363de1700bdd082e86e"},{url:"a8d89099.js",revision:"e921979a992fd87ea3e855eb0dcc0792"},{url:"bde14aa8.js",revision:"94da968587de88a8ebd10bd9f8f586f6"},{url:"e72cf0c9.js",revision:"d35a0f4fdada2c5b67952e7678b36a92"},{url:"index.html",revision:"7684824cc59241c0af3e4db741ae85e9"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
