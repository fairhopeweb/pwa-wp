this.workbox=this.workbox||{},this.workbox.strategies=function(e,t,s,n,r){"use strict";try{self["workbox:strategies:4.0.0-rc.0"]&&_()}catch(e){}class i{constructor(e={}){this.e=t.cacheNames.getRuntimeName(e.cacheName),this.t=e.plugins||[],this.s=e.fetchOptions||null,this.n=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){"string"==typeof t&&(t=new Request(t));let n,i=await s.cacheWrapper.match({cacheName:this.e,request:t,event:e,matchOptions:this.n,plugins:this.t});if(!i)try{i=await this.r(t,e)}catch(e){n=e}if(!i)throw new r.WorkboxError("no-response",{url:t.url,error:n});return i}async r(e,t){const r=await n.fetchWrapper.fetch({request:e,event:t,fetchOptions:this.s,plugins:this.t}),i=r.clone(),h=s.cacheWrapper.put({cacheName:this.e,request:e,response:i,event:t,plugins:this.t});if(t)try{t.waitUntil(h)}catch(e){}return r}}class h{constructor(e={}){this.e=t.cacheNames.getRuntimeName(e.cacheName),this.t=e.plugins||[],this.n=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const n=await s.cacheWrapper.match({cacheName:this.e,request:t,event:e,matchOptions:this.n,plugins:this.t});if(!n)throw new r.WorkboxError("no-response",{url:t.url});return n}}const u={cacheWillUpdate:({response:e})=>200===e.status||0===e.status?e:null};class a{constructor(e={}){if(this.e=t.cacheNames.getRuntimeName(e.cacheName),e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this.t=t?e.plugins:[u,...e.plugins]}else this.t=[u];this.i=e.networkTimeoutSeconds,this.s=e.fetchOptions||null,this.n=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){const s=[];"string"==typeof t&&(t=new Request(t));const n=[];let i;if(this.i){const{id:r,promise:h}=this.h({request:t,event:e,logs:s});i=r,n.push(h)}const h=this.u({timeoutId:i,request:t,event:e,logs:s});n.push(h);let u=await Promise.race(n);if(u||(u=await h),!u)throw new r.WorkboxError("no-response",{url:t.url});return u}h({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.a({request:e,event:s}))},1e3*this.i)}),id:n}}async u({timeoutId:e,request:t,logs:r,event:i}){let h,u;try{u=await n.fetchWrapper.fetch({request:t,event:i,fetchOptions:this.s,plugins:this.t})}catch(e){h=e}if(e&&clearTimeout(e),h||!u)u=await this.a({request:t,event:i});else{const e=u.clone(),n=s.cacheWrapper.put({cacheName:this.e,request:t,response:e,event:i,plugins:this.t});if(i)try{i.waitUntil(n)}catch(e){}}return u}a({event:e,request:t}){return s.cacheWrapper.match({cacheName:this.e,request:t,event:e,matchOptions:this.n,plugins:this.t})}}class c{constructor(e={}){this.e=t.cacheNames.getRuntimeName(e.cacheName),this.t=e.plugins||[],this.s=e.fetchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){let s,i;"string"==typeof t&&(t=new Request(t));try{i=await n.fetchWrapper.fetch({request:t,event:e,fetchOptions:this.s,plugins:this.t})}catch(e){s=e}if(!i)throw new r.WorkboxError("no-response",{url:t.url,error:s});return i}}class o{constructor(e={}){if(this.e=t.cacheNames.getRuntimeName(e.cacheName),this.t=e.plugins||[],e.plugins){let t=e.plugins.some(e=>!!e.cacheWillUpdate);this.t=t?e.plugins:[u,...e.plugins]}else this.t=[u];this.s=e.fetchOptions||null,this.n=e.matchOptions||null}async handle({event:e,request:t}){return this.makeRequest({event:e,request:t||e.request})}async makeRequest({event:e,request:t}){"string"==typeof t&&(t=new Request(t));const n=this.r({request:t,event:e});let i,h=await s.cacheWrapper.match({cacheName:this.e,request:t,event:e,matchOptions:this.n,plugins:this.t});if(h){if(e)try{e.waitUntil(n)}catch(i){}}else try{h=await n}catch(e){i=e}if(!h)throw new r.WorkboxError("no-response",{url:t.url,error:i});return h}async r({request:e,event:t}){const r=await n.fetchWrapper.fetch({request:e,event:t,fetchOptions:this.s,plugins:this.t}),i=s.cacheWrapper.put({cacheName:this.e,request:e,response:r.clone(),event:t,plugins:this.t});if(t)try{t.waitUntil(i)}catch(e){}return r}}const l={cacheFirst:i,cacheOnly:h,networkFirst:a,networkOnly:c,staleWhileRevalidate:o},q=e=>{const t=l[e];return e=>new t(e)},w=q("cacheFirst"),p=q("cacheOnly"),v=q("networkFirst"),y=q("networkOnly"),m=q("staleWhileRevalidate");return e.CacheFirst=i,e.CacheOnly=h,e.NetworkFirst=a,e.NetworkOnly=c,e.StaleWhileRevalidate=o,e.cacheFirst=w,e.cacheOnly=p,e.networkFirst=v,e.networkOnly=y,e.staleWhileRevalidate=m,e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);

//# sourceMappingURL=workbox-strategies.prod.js.map
