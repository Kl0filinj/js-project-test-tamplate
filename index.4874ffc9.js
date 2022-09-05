"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e,t){return Object.keys(t).forEach((function(n){"default"===n||"__esModule"===n||e.hasOwnProperty(n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n=!1,i=!1,s="${JSCORE_VERSION}",r=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+s+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){const t=a(e);return l.encodeByteArray(t,!0)},h=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=p(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function m(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function g(){return!0===n||!0===i}class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,y.prototype.create)}}class y{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(b,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new v(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const b=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){return JSON.parse(e)}function C(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=w(u(r[0])||""),n=w(u(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},T=function(e){const t=E(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},I=function(e){const t=E(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function S(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function x(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function A(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(P(n)&&P(r)){if(!A(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function P(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function L(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},M=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){return e&&e._delegate?e._delegate:e}class q{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new f;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class B{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new j(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=[];var H,U;(U=H||(H={}))[U.DEBUG=0]="DEBUG",U[U.VERBOSE=1]="VERBOSE",U[U.INFO=2]="INFO",U[U.WARN=3]="WARN",U[U.ERROR=4]="ERROR",U[U.SILENT=5]="SILENT";const z={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},$=H.INFO,V={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Y=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=V[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class K{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?z[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}constructor(e){this.name=e,this._logLevel=$,this._logHandler=Y,this._userLogHandler=null,W.push(this)}}let G,Q;const X=new WeakMap,J=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap;let ne={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return J.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Z.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return re(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ie(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(oe(this),t),re(X.get(this))}:function(...t){return re(e.apply(oe(this),t))}:function(t,...n){const i=e.call(oe(this),t,...n);return Z.set(i,t.sort?t.sort():[t]),re(i)}}function se(e){return"function"==typeof e?ie(e):(e instanceof IDBTransaction&&function(e){if(J.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));J.set(e,t)}(e),t=e,(G||(G=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ne):e);var t}function re(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(re(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&X.set(t,e)})).catch((()=>{})),te.set(t,e),t}(e);if(ee.has(e))return ee.get(e);const t=se(e);return t!==e&&(ee.set(e,t),te.set(t,e)),t}const oe=e=>te.get(e);function ae(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=re(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(re(o.result),e.oldVersion,e.newVersion,re(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const le=["get","getKey","getAll","getAllKeys","count"],ce=["put","add","delete","clear"],he=new Map;function ue(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(he.get(t))return he.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=ce.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!le.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return he.set(t,r),r}ne=(e=>({...e,get:(t,n,i)=>ue(t,n)||e.get(t,n,i),has:(t,n)=>!!ue(t,n)||e.has(t,n)}))(ne);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const pe=new K("@firebase/app"),fe={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},_e=new Map,me=new Map;function ge(e,t){try{e.container.addComponent(t)}catch(n){pe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ve(e){const t=e.name;if(me.has(t))return pe.debug(`There were multiple attempts to register component ${t}.`),!1;me.set(t,e);for(const t of _e.values())ge(t,e);return!0}function ye(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=new y("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new q("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw be.create("bad-app-name",{appName:String(i)});const s=_e.get(i);if(s){if(A(e,s.options)&&A(n,s.config))return s;throw be.create("duplicate-app",{appName:i})}const r=new B(i);for(const e of me.values())r.addComponent(e);const o=new we(e,n,r);return _e.set(i,o),o}function Ee(e="[DEFAULT]"){const t=_e.get(e);if(!t)throw be.create("no-app",{appName:e});return t}function Te(e,t,n){var i;let s=null!==(i=fe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void pe.warn(e.join(" "))}ve(new q(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}let Ie=null;function ke(){return Ie||(Ie=ae("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw be.create("idb-open",{originalErrorMessage:e.message})}))),Ie}async function Se(e,t){var n;try{const n=(await ke()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Ne(e)),n.done}catch(e){if(e instanceof v)pe.warn(e.message);else{const t=be.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});pe.warn(t.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ae(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),De(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=h(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Ae(){return(new Date).toISOString().substring(0,10)}class Pe{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await ke()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ne(e))}catch(e){if(e instanceof v)pe.warn(e.message);else{const n=be.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});pe.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function De(e){return h(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;Oe="",ve(new q("platform-logger",(e=>new de(e)),"PRIVATE")),ve(new q("heartbeat",(e=>new xe(e)),"PRIVATE")),Te("@firebase/app","0.7.32",Oe),Te("@firebase/app","0.7.32","esm2017"),Te("fire-js","");var Le,Re,Me,Fe=Le={};function qe(){throw new Error("setTimeout has not been defined")}function je(){throw new Error("clearTimeout has not been defined")}function Be(e){if(Re===setTimeout)return setTimeout(e,0);if((Re===qe||!Re)&&setTimeout)return Re=setTimeout,setTimeout(e,0);try{return Re(e,0)}catch(t){try{return Re.call(null,e,0)}catch(t){return Re.call(this,e,0)}}}!function(){try{Re="function"==typeof setTimeout?setTimeout:qe}catch(e){Re=qe}try{Me="function"==typeof clearTimeout?clearTimeout:je}catch(e){Me=je}}();var We,He=[],Ue=!1,ze=-1;function $e(){Ue&&We&&(Ue=!1,We.length?He=We.concat(He):ze=-1,He.length&&Ve())}function Ve(){if(!Ue){var e=Be($e);Ue=!0;for(var t=He.length;t;){for(We=He,He=[];++ze<t;)We&&We[ze].run();ze=-1,t=He.length}We=null,Ue=!1,function(e){if(Me===clearTimeout)return clearTimeout(e);if((Me===je||!Me)&&clearTimeout)return Me=clearTimeout,clearTimeout(e);try{Me(e)}catch(t){try{return Me.call(null,e)}catch(t){return Me.call(this,e)}}}(e)}}function Ye(e,t){this.fun=e,this.array=t}function Ke(){}Fe.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];He.push(new Ye(e,t)),1!==He.length||Ue||Be(Ve)},Ye.prototype.run=function(){this.fun.apply(null,this.array)},Fe.title="browser",Fe.browser=!0,Fe.env={},Fe.argv=[],Fe.version="",Fe.versions={},Fe.on=Ke,Fe.addListener=Ke,Fe.once=Ke,Fe.off=Ke,Fe.removeListener=Ke,Fe.removeAllListeners=Ke,Fe.emit=Ke,Fe.prependListener=Ke,Fe.prependOnceListener=Ke,Fe.listeners=function(e){return[]},Fe.binding=function(e){throw new Error("process.binding is not supported")},Fe.cwd=function(){return"/"},Fe.chdir=function(e){throw new Error("process.chdir is not supported")},Fe.umask=function(){return 0};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ge="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),C(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:w(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return k(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Qe(t)}}catch(e){}return new Xe},Ze=Je("localStorage"),et=Je("sessionStorage"),tt=new K("@firebase/database"),nt=function(){let e=1;return function(){return e++}}(),it=function(e){const t=R(e),n=new O;n.update(t);const i=n.digest();return l.encodeByteArray(i)},st=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=st.apply(null,i):t+="object"==typeof i?C(i):i,t+=" "}return t};let rt=null,ot=!0;const at=function(e,t){r(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(tt.logLevel=H.VERBOSE,rt=tt.log.bind(tt),t&&et.set("logging_enabled",!0)):"function"==typeof e?rt=e:(rt=null,et.remove("logging_enabled"))},lt=function(...e){if(!0===ot&&(ot=!1,null===rt&&!0===et.get("logging_enabled")&&at(!0)),rt){const t=st.apply(null,e);rt(t)}},ct=function(e){return function(...t){lt(e,...t)}},ht=function(...e){const t="FIREBASE INTERNAL ERROR: "+st(...e);tt.error(t)},ut=function(...e){const t=`FIREBASE FATAL ERROR: ${st(...e)}`;throw tt.error(t),new Error(t)},dt=function(...e){const t="FIREBASE WARNING: "+st(...e);tt.warn(t)},pt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ft=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Ct(e),i=Ct(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},_t=function(e,t){return e===t?0:e<t?-1:1},mt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+C(t))},gt=function(e){if("object"!=typeof e||null===e)return C(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=C(t[i]),n+=":",n+=gt(e[t[i]]);return n+="}",n},vt=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function yt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const bt=function(e){r(!pt(e),"Invalid JSON number");const t=1023;let n,i,s,o,a;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,s=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(n?1:0),l.reverse();const c=l.join("");let h="";for(a=0;a<64;a+=8){let e=parseInt(c.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),h+=e}return h.toLowerCase()};const wt=new RegExp("^-?(0*)\\d{1,10}$"),Ct=function(e){if(wt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Et=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw dt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Tt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class St{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}St.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ze.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ze.get("host:"+e)||this._host}}function At(e,t,n){let i;if(r("string"==typeof t,"typeof type must == string"),r("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return yt(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{incrementCounter(e,t=1){k(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return d(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={},Ot={};function Lt(e){const t=e.toString();return Dt[t]||(Dt[t]=new Pt),Dt[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Et((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Rt(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(g()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ft(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Nt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Mt.forceAllow_=!0}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){return!g()&&(!!Mt.forceAllow_||!(Mt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=C(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=c(t),i=vt(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(g())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=C(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ct(e),this.stats_=Lt(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),At(t,"long_polling",e))}}class Ft{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){g()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,g())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=nt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ft.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){lt("frame writing exception"),e.stack&&lt(e.stack),lt(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt=null;"undefined"!=typeof MozWebSocket?qt=MozWebSocket:"undefined"!=typeof WebSocket&&(qt=WebSocket);class jt{static connectionURL_(e,t,n,i,s){const r={v:"5"};return!g()&&"undefined"!=typeof location&&location.hostname&&Nt.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),At(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ze.set("previous_websocket_failure",!0);try{let e;if(g()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${Ge}/${Le.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new qt(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qt&&!jt.forceDisallow_}static previouslyFailed(){return Ze.isInMemoryStorage||!0===Ze.get("previous_websocket_failure")}markConnectionHealthy(){Ze.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=w(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(r(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=C(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=vt(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ct(this.connId),this.stats_=Lt(t),this.connURL=jt.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}}jt.responsesRequiredToBeHealthy=2,jt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{static get ALL_TRANSPORTS(){return[Mt,jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=jt&&jt.isAvailable();let n=t&&!jt.previouslyFailed();if(e.webSocketOnly&&(t||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[jt];else{const e=this.transports_=[];for(const t of Bt.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Bt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Bt.globalTransportInitialized_=!1;class Wt{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=mt("t",e),n=mt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=mt("t",e),n=mt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=mt("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ht("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ht("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Tt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ze.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ct("c:"+this.id+":"),this.transportManager_=new Bt(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){r(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},r(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ut{static getInstance(){return new zt}getInitialEvent(e){return r("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||m()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Vt(){return new $t("")}function Yt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Kt(e){return e.pieces_.length-e.pieceNum_}function Gt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new $t(e.pieces_,t)}function Qt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Xt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Jt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new $t(t,0)}function Zt(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof $t)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new $t(n,0)}function en(e){return e.pieceNum_>=e.pieces_.length}function tn(e,t){const n=Yt(e),i=Yt(t);if(null===n)return t;if(n===i)return tn(Gt(e),Gt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function nn(e,t){if(Kt(e)!==Kt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function sn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Kt(e)>Kt(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class rn{constructor(e,t){this.errorPrefix_=t,this.parts_=Xt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=M(this.parts_[e]);on(this)}}function on(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+an(e))}function an(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ut{static getInstance(){return new ln}getInitialEvent(e){return r("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Ht{sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(C(s)),r(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new f,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),r(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;cn.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&k(e,"w")){const n=S(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||I(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=T(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+C(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ht("Unrecognized action received from server: "+C(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){r(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){r(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=l&&l.token,a=new Wt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{dt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&dt(e),l())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],N(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>gt(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new $t(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){lt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){lt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";g()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ge.replace(/\./g,"-")]=1,m()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zt.getInstance().currentlyOnline();return N(this.interruptReasons_)&&e}constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=cn.nextPersistentConnectionId_++,this.log_=ct("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!g())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ln.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&zt.getInstance().on("online",this.onOnline_,this)}}cn.nextPersistentConnectionId_=0,cn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hn{static Wrap(e,t){return new hn(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new hn("[MIN_NAME]",e),i=new hn("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return hn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;class pn extends un{static get __EMPTY_NODE(){return dn}static set __EMPTY_NODE(e){dn=e}compare(e,t){return ft(e.name,t.name)}isDefinedOn(e){throw o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return hn.MIN}maxPost(){return new hn("[MAX_NAME]",dn)}makePost(e,t){return r("string"==typeof e,"KeyIndex indexValue must always be a string."),new hn(e,dn)}toString(){return".key"}}const fn=new pn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class mn{copy(e,t,n,i,s){return new mn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return gn.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:mn.RED,this.left=null!=i?i:gn.EMPTY_NODE,this.right=null!=s?s:gn.EMPTY_NODE}}mn.RED=!0,mn.BLACK=!1;class gn{insert(e,t){return new gn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,mn.BLACK,null,null))}remove(e){return new gn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _n(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _n(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _n(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _n(this.root_,null,this.comparator_,!0,e)}constructor(e,t=gn.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vn(e,t){return ft(e.name,t.name)}function yn(e,t){return ft(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn;gn.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new mn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const wn=function(e){return"number"==typeof e?"number:"+bt(e):"string:"+e},Cn=function(e){if(e.isLeafNode()){const t=e.val();r("string"==typeof t||"number"==typeof t||"object"==typeof t&&k(t,".sv"),"Priority must be a string or number.")}else r(e===bn||e.isEmpty(),"priority of unexpected type.");r(e===bn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let En,Tn,In;class kn{static set __childrenNodeConstructor(e){En=e}static get __childrenNodeConstructor(){return En}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new kn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:kn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return en(e)?this:".priority"===Yt(e)?this.priorityNode_:kn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:kn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Yt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(r(".priority"!==n||1===Kt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,kn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Gt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?bt(this.value_):this.value_,this.lazyHash_=it(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===kn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof kn.__childrenNodeConstructor?-1:(r(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=kn.VALUE_TYPE_ORDER.indexOf(t),s=kn.VALUE_TYPE_ORDER.indexOf(n);return r(i>=0,"Unknown leaf type: "+t),r(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=kn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,r(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Cn(this.priorityNode_)}}kn.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Sn=new class extends un{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?ft(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return hn.MIN}maxPost(){return new hn("[MAX_NAME]",new kn("[PRIORITY-POST]",In))}makePost(e,t){const n=Tn(e);return new hn(t,new kn("[PRIORITY-POST]",n))}toString(){return".priority"}},Nn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Nn,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const An=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new mn(a,o.node,mn.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new mn(a,o.node,mn.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new mn(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,mn.BLACK):(a(i,mn.BLACK),a(i,mn.RED))}return r}(new xn(e.length));return new gn(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pn;const Dn={};class On{static get Default(){return r(Dn&&Sn,"ChildrenNode.ts has not been loaded"),Pn=Pn||new On({".priority":Dn},{".priority":Sn}),Pn}get(e){const t=S(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof gn?t:null}hasIndex(e){return k(this.indexSet_,e.toString())}addIndex(e,t){r(e!==fn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(hn.Wrap);let o,a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?An(n,e.getCompare()):Dn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=o,new On(h,c)}addToIndexes(e,t){const n=x(this.indexes_,((n,i)=>{const s=S(this.indexSet_,i);if(r(s,"Missing index implementation for "+i),n===Dn){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(hn.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),An(n,s.getCompare())}return Dn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new hn(e.name,i))),s.insert(e,e.node)}}));return new On(n,this.indexSet_)}removeFromIndexes(e,t){const n=x(this.indexes_,(n=>{if(n===Dn)return n;{const i=t.get(e.name);return i?n.remove(new hn(e.name,i)):n}}));return new On(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;class Rn{static get EMPTY_NODE(){return Ln||(Ln=new Rn(new gn(yn),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new Rn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ln:t}}getChild(e){const t=Yt(e);return null===t?this:this.getImmediateChild(t).getChild(Gt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(r(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new hn(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Ln:this.priorityNode_;return new Rn(i,r,s)}}updateChild(e,t){const n=Yt(e);if(null===n)return t;{r(".priority"!==Yt(e)||1===Kt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Gt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Sn,((r,o)=>{t[r]=o.val(e),n++,s&&Rn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+wn(this.getPriority().val())+":"),this.forEachChild(Sn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":it(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new hn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new hn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new hn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,hn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,hn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mn?-1:0}withIndex(e){if(e===fn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Rn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Sn),n=t.getIterator(Sn);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===fn?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Cn(this.priorityNode_),this.children_.isEmpty()&&r(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Rn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Mn=new class extends Rn{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Rn.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new gn(yn),Rn.EMPTY_NODE,On.Default)}};Object.defineProperties(hn,{MIN:{value:new hn("[MIN_NAME]",Rn.EMPTY_NODE)},MAX:{value:new hn("[MAX_NAME]",Mn)}}),pn.__EMPTY_NODE=Rn.EMPTY_NODE,kn.__childrenNodeConstructor=Rn,bn=Mn,function(e){In=e}(Mn);function Fn(e,t=null){if(null===e)return Rn.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),r(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new kn(e,Fn(t))}if(e instanceof Array){let n=Rn.EMPTY_NODE;return yt(e,((t,i)=>{if(k(e,t)&&"."!==t.substring(0,1)){const e=Fn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Fn(t))}{const n=[];let i=!1;if(yt(e,((e,t)=>{if("."!==e.substring(0,1)){const s=Fn(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new hn(e,s)))}})),0===n.length)return Rn.EMPTY_NODE;const s=An(n,vn,(e=>e.name),yn);if(i){const e=An(n,Sn.getCompare());return new Rn(s,Fn(t),new On({".priority":e},{".priority":Sn}))}return new Rn(s,Fn(t),On.Default)}}!function(e){Tn=e}(Fn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn extends un{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?ft(e.name,t.name):s}makePost(e,t){const n=Fn(e),i=Rn.EMPTY_NODE.updateChild(this.indexPath_,n);return new hn(t,i)}maxPost(){const e=Rn.EMPTY_NODE.updateChild(this.indexPath_,Mn);return new hn("[MAX_NAME]",e)}toString(){return Xt(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,r(!en(e)&&".priority"!==Yt(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new class extends un{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?ft(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return hn.MIN}maxPost(){return hn.MAX}makePost(e,t){const n=Fn(e);return new hn(t,n)}toString(){return".value"}},Bn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Wn=function(){let e=0;const t=[];return function(n){const i=n===e;let s;e=n;const o=new Array(8);for(s=7;s>=0;s--)o[s]=Bn.charAt(n%64),n=Math.floor(n/64);r(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(s=11;s>=0&&63===t[s];s--)t[s]=0;t[s]++}else for(s=0;s<12;s++)t[s]=Math.floor(64*Math.random());for(s=0;s<12;s++)a+=Bn.charAt(t[s]);return r(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hn(e){return{type:"value",snapshotNode:e}}function Un(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function zn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function $n(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vn{updateChild(e,t,n,i,s,o){r(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(zn(t,a)):r(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Un(t,n)):o.trackChildChange($n(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Sn,((e,i)=>{t.hasChild(e)||n.trackChildChange(zn(e,i))})),t.isLeafNode()||t.forEachChild(Sn,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange($n(t,i,s))}else n.trackChildChange(Un(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Rn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new hn(t,n))||(n=Rn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Rn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Rn.EMPTY_NODE);const s=this;return t.forEachChild(Sn,((e,t)=>{s.matches(new hn(e,t))||(i=i.updateImmediateChild(e,Rn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new Vn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yn.getStartPost_(e),this.endPost_=Yn.getEndPost_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new hn(t,n))||(n=Rn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Rn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Rn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(Rn.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;for(;r.hasNext();){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);a&&o<this.limit_&&s(t,n)<=0?o++:i=i.updateImmediateChild(t.name,Rn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;r(a.numChildren()===this.limit_,"");const l=new hn(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let r=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=r&&(r.name===t||a.hasChild(r.name));)r=i.getChildAfterChild(this.index_,r,this.reverse_);const u=null==r?1:o(r,l);if(h&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange($n(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(zn(t,e));const n=a.updateImmediateChild(t,Rn.EMPTY_NODE);return null!=r&&this.rangedFilter_.matches(r)?(null!=s&&s.trackChildChange(Un(r.name,r.node)),n.updateImmediateChild(r.name,r.node)):n}}return n.isEmpty()?e:h&&o(c,l)>=0?(null!=s&&(s.trackChildChange(zn(c.name,c.node)),s.trackChildChange(Un(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,Rn.EMPTY_NODE)):e}constructor(e){this.rangedFilter_=new Yn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return r(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return r(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return r(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return r(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return r(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Sn}copy(){const e=new Gn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Sn}}function Qn(e){const t={};if(e.isDefault())return t;let n;return e.index_===Sn?n="$priority":e.index_===jn?n="$value":e.index_===fn?n="$key":(r(e.index_ instanceof qn,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=C(n),e.startSet_&&(t.startAt=C(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+C(e.indexStartName_))),e.endSet_&&(t.endAt=C(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+C(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Xn(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Sn&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ht{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(r(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Jn.getListenId_(e,n),o={};this.listens_[r]=o;const a=Qn(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),S(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Jn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Qn(e._queryParams),n=e._path.toString(),i=new f;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+D(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=w(o.responseText)}catch(e){dt("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&dt("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ct("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Rn.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return{value:null,children:new Map}}function ti(e,t,n){if(en(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Yt(t);e.children.has(i)||e.children.set(i,ei());ti(e.children.get(i),t=Gt(t),n)}}function ni(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{ni(i,new $t(t.toString()+"/"+e),n)}))}class ii{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&yt(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;yt(e,((e,i)=>{i>0&&k(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Tt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ii(e);const n=1e4+2e4*Math.random();Tt(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ri,oi;function ai(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(oi=ri||(ri={}))[oi.OVERWRITE=0]="OVERWRITE",oi[oi.MERGE=1]="MERGE",oi[oi.ACK_USER_WRITE=2]="ACK_USER_WRITE",oi[oi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class li{operationForChild(e){if(en(this.path)){if(null!=this.affectedTree.value)return r(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $t(e));return new li(Vt(),t,this.revert)}}return r(Yt(this.path)===e,"operationForChild called for unrelated child."),new li(Gt(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ri.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{operationForChild(e){return en(this.path)?new ci(this.source,Vt()):new ci(this.source,Gt(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=ri.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{operationForChild(e){return en(this.path)?new hi(this.source,Vt(),this.snap.getImmediateChild(e)):new hi(this.source,Gt(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ri.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{operationForChild(e){if(en(this.path)){const t=this.children.subtree(new $t(e));return t.isEmpty()?null:t.value?new hi(this.source,Vt(),t.value):new ui(this.source,Vt(),t)}return r(Yt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,Gt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ri.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(en(e))return this.isFullyInitialized()&&!this.filtered_;const t=Yt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fi(e,t,n,i,s,r){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw o("Should only compare child_ events.");const i=new hn(t.childName,t.snapshotNode),s=new hn(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function _i(e,t){return{eventCache:e,serverCache:t}}function mi(e,t,n,i){return _i(new di(t,n,i),e.serverCache)}function gi(e,t,n,i){return _i(e.eventCache,new di(t,n,i))}function vi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function yi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bi;class wi{static fromObject(e){let t=new wi(null);return yt(e,((e,n)=>{t=t.set(new $t(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Vt(),value:this.value};if(en(e))return null;{const n=Yt(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Gt(e),t);if(null!=s){return{path:Zt(new $t(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(en(e))return this;{const t=Yt(e),n=this.children.get(t);return null!==n?n.subtree(Gt(e)):new wi(null)}}set(e,t){if(en(e))return new wi(t,this.children);{const n=Yt(e),i=(this.children.get(n)||new wi(null)).set(Gt(e),t),s=this.children.insert(n,i);return new wi(this.value,s)}}remove(e){if(en(e))return this.children.isEmpty()?new wi(null):new wi(null,this.children);{const t=Yt(e),n=this.children.get(t);if(n){const i=n.remove(Gt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new wi(null):new wi(this.value,s)}return this}}get(e){if(en(e))return this.value;{const t=Yt(e),n=this.children.get(t);return n?n.get(Gt(e)):null}}setTree(e,t){if(en(e))return t;{const n=Yt(e),i=(this.children.get(n)||new wi(null)).setTree(Gt(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new wi(this.value,s)}}fold(e){return this.fold_(Vt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Zt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Vt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(en(e))return null;{const i=Yt(e),s=this.children.get(i);return s?s.findOnPath_(Gt(e),Zt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Vt(),t)}foreachOnPath_(e,t,n){if(en(e))return this;{this.value&&n(t,this.value);const i=Yt(e),s=this.children.get(i);return s?s.foreachOnPath_(Gt(e),Zt(t,i),n):new wi(null)}}foreach(e){this.foreach_(Vt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Zt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(bi||(bi=new gn(_t)),bi))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{static empty(){return new Ci(new wi(null))}constructor(e){this.writeTree_=e}}function Ei(e,t,n){if(en(t))return new Ci(new wi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=tn(s,t);return r=r.updateChild(o,n),new Ci(e.writeTree_.set(s,r))}{const i=new wi(n),s=e.writeTree_.setTree(t,i);return new Ci(s)}}}function Ti(e,t,n){let i=e;return yt(n,((e,n)=>{i=Ei(i,Zt(t,e),n)})),i}function Ii(e,t){if(en(t))return Ci.empty();{const n=e.writeTree_.setTree(t,new wi(null));return new Ci(n)}}function ki(e,t){return null!=Si(e,t)}function Si(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(tn(n.path,t)):null}function Ni(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Sn,((e,n)=>{t.push(new hn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new hn(e,n.value))})),t}function xi(e,t){if(en(t))return e;{const n=Si(e,t);return new Ci(null!=n?new wi(n):e.writeTree_.subtree(t))}}function Ai(e){return e.writeTree_.isEmpty()}function Pi(e,t){return Di(Vt(),e.writeTree_,t)}function Di(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(r(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Di(Zt(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Zt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(e,t){return Vi(t,e)}function Li(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));r(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&Ri(t,i.path)?s=!1:sn(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return function(e){e.visibleWrites=Fi(e.allWrites,Mi,Vt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ii(e.visibleWrites,i.path);else{yt(i.children,(t=>{e.visibleWrites=Ii(e.visibleWrites,Zt(i.path,t))}))}return!0}return!1}function Ri(e,t){if(e.snap)return sn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&sn(Zt(e.path,n),t))return!0;return!1}function Mi(e){return e.visible}function Fi(e,t,n){let i=Ci.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)sn(n,e)?(t=tn(n,e),i=Ei(i,t,r.snap)):sn(e,n)&&(t=tn(e,n),i=Ei(i,Vt(),r.snap.getChild(t)));else{if(!r.children)throw o("WriteRecord should have .snap or .children");if(sn(n,e))t=tn(n,e),i=Ti(i,t,r.children);else if(sn(e,n))if(t=tn(e,n),en(t))i=Ti(i,Vt(),r.children);else{const e=S(r.children,Yt(t));if(e){const n=e.getChild(Gt(t));i=Ei(i,Vt(),n)}}}}}return i}function qi(e,t,n,i,s){if(i||s){const r=xi(e.visibleWrites,t);if(!s&&Ai(r))return n;if(s||null!=n||ki(r,Vt())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(sn(e.path,t)||sn(t,e.path))};return Pi(Fi(e.allWrites,r,t),n||Rn.EMPTY_NODE)}return null}{const i=Si(e.visibleWrites,t);if(null!=i)return i;{const i=xi(e.visibleWrites,t);if(Ai(i))return n;if(null!=n||ki(i,Vt())){return Pi(i,n||Rn.EMPTY_NODE)}return null}}}function ji(e,t,n,i){return qi(e.writeTree,e.treePath,t,n,i)}function Bi(e,t){return function(e,t,n){let i=Rn.EMPTY_NODE;const s=Si(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Sn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=xi(e.visibleWrites,t);return n.forEachChild(Sn,((e,t)=>{const n=Pi(xi(s,new $t(e)),t);i=i.updateImmediateChild(e,n)})),Ni(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Ni(xi(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Wi(e,t,n,i){return function(e,t,n,i,s){r(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=Zt(t,n);if(ki(e.visibleWrites,o))return null;{const t=xi(e.visibleWrites,o);return Ai(t)?s.getChild(n):Pi(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Hi(e,t){return function(e,t){return Si(e.visibleWrites,t)}(e.writeTree,Zt(e.treePath,t))}function Ui(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=xi(e.visibleWrites,t),c=Si(l,Vt());if(null!=c)a=c;else{if(null==n)return[];a=Pi(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function zi(e,t,n){return function(e,t,n,i){const s=Zt(t,n),r=Si(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Pi(xi(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function $i(e,t){return Vi(Zt(e.treePath,t),e.writeTree)}function Vi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{trackChildChange(e){const t=e.type,n=e.childName;r("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),r(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,$n(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,zn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Un(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw o("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,$n(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Gi{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new di(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:yi(this.viewCache_),s=Ui(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,n,i,s){const a=new Yi;let l,c;if(n.type===ri.OVERWRITE){const o=n;o.source.fromUser?l=Zi(e,t,o.path,o.snap,i,s,a):(r(o.source.fromServer,"Unknown source."),c=o.source.tagged||t.serverCache.isFiltered()&&!en(o.path),l=Ji(e,t,o.path,o.snap,i,s,c,a))}else if(n.type===ri.MERGE){const o=n;o.source.fromUser?l=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Zt(n,i);es(t,Yt(c))&&(a=Zi(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Zt(n,i);es(t,Yt(c))||(a=Zi(e,a,c,l,s,r,o))})),a}(e,t,o.path,o.children,i,s,a):(r(o.source.fromServer,"Unknown source."),c=o.source.tagged||t.serverCache.isFiltered(),l=ns(e,t,o.path,o.children,i,s,c,a))}else if(n.type===ri.ACK_USER_WRITE){const o=n;l=o.revert?function(e,t,n,i,s,o){let a;if(null!=Hi(i,n))return t;{const l=new Gi(i,t,s),c=t.eventCache.getNode();let h;if(en(n)||".priority"===Yt(n)){let n;if(t.serverCache.isFullyInitialized())n=ji(i,yi(t));else{const e=t.serverCache.getNode();r(e instanceof Rn,"serverChildren would be complete if leaf node"),n=Bi(i,e)}h=e.filter.updateFullNode(c,n,o)}else{const s=Yt(n);let r=zi(i,s,t.serverCache);null==r&&t.serverCache.isCompleteForChild(s)&&(r=c.getImmediateChild(s)),h=null!=r?e.filter.updateChild(c,s,r,Gt(n),l,o):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,Rn.EMPTY_NODE,Gt(n),l,o):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ji(i,yi(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Hi(i,Vt()),mi(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,o.path,i,s,a):function(e,t,n,i,s,r,o){if(null!=Hi(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(en(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ji(e,t,n,l.getNode().getChild(n),s,r,a,o);if(en(n)){let i=new wi(null);return l.getNode().forEachChild(fn,((e,t)=>{i=i.set(new $t(e),t)})),ns(e,t,n,i,s,r,a,o)}return t}{let c=new wi(null);return i.foreach(((e,t)=>{const i=Zt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),ns(e,t,n,c,s,r,a,o)}}(e,t,o.path,o.affectedTree,i,s,a)}else{if(n.type!==ri.LISTEN_COMPLETE)throw o("Unknown operation type: "+n.type);l=function(e,t,n,i,s){const r=t.serverCache,o=gi(t,r.getNode(),r.isFullyInitialized()||en(n),r.isFiltered());return Xi(e,o,n,i,Ki,s)}(e,t,n.path,i,a)}const h=a.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=vi(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Hn(vi(t)))}}(t,l,h),{viewCache:l,changes:h}}function Xi(e,t,n,i,s,o){const a=t.eventCache;if(null!=Hi(i,n))return t;{let l,c;if(en(n))if(r(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=yi(t),s=Bi(i,n instanceof Rn?n:Rn.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=ji(i,yi(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=Yt(n);if(".priority"===h){r(1===Kt(n),"Can't have a priority with additional path components");const s=a.getNode();c=t.serverCache.getNode();const o=Wi(i,n,s,c);l=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=Gt(n);let u;if(a.isCompleteForChild(h)){c=t.serverCache.getNode();const e=Wi(i,n,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(r,e):a.getNode().getImmediateChild(h)}else u=zi(i,h,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,r,s,o):a.getNode()}}return mi(t,l,a.isFullyInitialized()||en(n),e.filter.filtersNodes())}}function Ji(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(en(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Yt(n);if(!l.isCompleteForPath(n)&&Kt(n)>1)return t;const s=Gt(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,Ki,null)}const u=gi(t,c,l.isFullyInitialized()||en(n),h.filtersNodes());return Xi(e,u,n,s,new Gi(s,u,r),a)}function Zi(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new Gi(s,t,r);if(en(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=mi(t,c,!0,e.filter.filtersNodes());else{const s=Yt(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=mi(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Gt(n),c=a.getNode().getImmediateChild(s);let u;if(en(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===Qt(r)&&e.getChild(Jt(r)).isEmpty()?e:e.updateChild(r,i):Rn.EMPTY_NODE}if(c.equals(u))l=t;else{l=mi(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function es(e,t){return e.eventCache.isCompleteForChild(t)}function ts(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ns(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=en(n)?i:new wi(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=ts(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ji(e,c,new $t(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=ts(0,t.serverCache.getNode().getImmediateChild(n),i);c=Ji(e,c,new $t(n),l,s,r,o,a)}})),c}class is{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Vn(n.getIndex()),s=(r=n).loadsAllData()?new Vn(r.getIndex()):r.hasLimit()?new Kn(r):new Yn(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(Rn.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(Rn.EMPTY_NODE,a.getNode(),null),h=new di(l,o.isFullyInitialized(),i.filtersNodes()),u=new di(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_i(u,h),this.eventGenerator_=new pi(this.query_)}}function ss(e,t){const n=yi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!en(t)&&!n.getImmediateChild(Yt(t)).isEmpty())?n.getChild(t):null}function rs(e){return 0===e.eventRegistrations_.length}function os(e,t,n){const i=[];if(n){r(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function as(e,t,n,i){t.type===ri.MERGE&&null!==t.source.queryId&&(r(yi(e.viewCache_),"We should always have a full cache before handling merges"),r(vi(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=Qi(e.processor_,s,t,n,i);var a,l;return a=e.processor_,l=o.viewCache,r(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),r(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),r(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,ls(e,o.changes,o.viewCache.eventCache.getNode(),null)}function ls(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),fi(e,s,"child_removed",t,i,n),fi(e,s,"child_added",t,i,n),fi(e,s,"child_moved",r,i,n),fi(e,s,"child_changed",t,i,n),fi(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs,hs;class us{constructor(){this.views=new Map}}function ds(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return r(null!=o,"SyncTree gave us an op for an invalid query."),as(o,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(as(r,t,n,i));return s}}function ps(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=ji(n,s?i:null),r=!1;e?r=!0:i instanceof Rn?(e=Bi(n,i),r=!1):(e=Rn.EMPTY_NODE,r=!1);const o=_i(new di(e,r,!1),new di(i,s,!1));return new is(t,o)}return o}function fs(e,t,n,i,s,r){const o=ps(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Sn,((e,t)=>{i.push(Un(e,t))}));return n.isFullyInitialized()&&i.push(Hn(n.getNode())),ls(e,i,n.getNode(),t)}(o,n)}function _s(e,t,n,i){const s=t._queryIdentifier,o=[];let a=[];const l=bs(e);if("default"===s)for(const[t,s]of e.views.entries())a=a.concat(os(s,n,i)),rs(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||o.push(s.query));else{const t=e.views.get(s);t&&(a=a.concat(os(t,n,i)),rs(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||o.push(t.query)))}return l&&!bs(e)&&o.push(new(r(cs,"Reference.ts has not been loaded"),cs)(t._repo,t._path)),{removed:o,events:a}}function ms(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function gs(e,t){let n=null;for(const i of e.views.values())n=n||ss(i,t);return n}function vs(e,t){if(t._queryParams.loadsAllData())return ws(e);{const n=t._queryIdentifier;return e.views.get(n)}}function ys(e,t){return null!=vs(e,t)}function bs(e){return null!=ws(e)}function ws(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs=1;class Es{constructor(e){this.listenProvider_=e,this.syncPointTree_=new wi(null),this.pendingWriteTree_={visibleWrites:Ci.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ts(e,t,n,i,s){return function(e,t,n,i,s){r(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Ei(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Ds(e,new hi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Is(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Li(e.pendingWriteTree_,t)){let t=new wi(null);return null!=i.snap?t=t.set(Vt(),!0):yt(i.children,(e=>{t=t.set(new $t(e),!0)})),Ds(e,new li(i.path,t,n))}return[]}function ks(e,t,n){return Ds(e,new hi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ss(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||ys(o,t))){const l=_s(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>bs(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&bs(t)){return[ws(t)]}{let e=[];return t&&(e=ms(t)),yt(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=Rs(e,i);e.listenProvider_.startListening(Ws(s),Ms(e,s),r.hashFn,r.onComplete)}}}if(!s&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Ws(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(Fs(t));e.listenProvider_.stopListening(Ws(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Fs(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Ns(e,t,n,i){const s=qs(e,i);if(null!=s){const i=js(s),r=i.path,o=i.queryId,a=tn(r,t);return Bs(e,r,new hi(ai(o),a,n))}return[]}function xs(e,t,n,i=!1){const s=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=tn(e,s);o=o||gs(t,n),a=a||bs(t)}));let l,c=e.syncPointTree_.get(s);if(c?(a=a||bs(c),o=o||gs(c,Vt())):(c=new us,e.syncPointTree_=e.syncPointTree_.set(s,c)),null!=o)l=!0;else{l=!1,o=Rn.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=gs(t,Vt());n&&(o=o.updateImmediateChild(e,n))}))}const h=ys(c,t);if(!h&&!t._queryParams.loadsAllData()){const n=Fs(t);r(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Cs++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=fs(c,t,n,Oi(e.pendingWriteTree_,s),o,l);if(!h&&!a&&!i){const n=vs(c,t);u=u.concat(function(e,t,n){const i=t._path,s=Ms(e,t),o=Rs(e,n),a=e.listenProvider_.startListening(Ws(t),s,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(s)r(!bs(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!en(e)&&t&&bs(t))return[ws(t).query];{let e=[];return t&&(e=e.concat(ms(t).map((e=>e.query)))),yt(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Ws(i),Ms(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function As(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=gs(n,tn(e,t));if(i)return i}));return qi(i,t,s,n,!0)}function Ps(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=tn(e,n);i=i||gs(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||gs(s,Vt()):(s=new us,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new di(i,!0,!1):null;return function(e){return vi(e.viewCache_)}(ps(s,t,Oi(e.pendingWriteTree_,t._path),r?o.getNode():Rn.EMPTY_NODE,r))}function Ds(e,t){return Os(t,e.syncPointTree_,null,Oi(e.pendingWriteTree_,Vt()))}function Os(e,t,n,i){if(en(e.path))return Ls(e,t,n,i);{const s=t.get(Vt());null==n&&null!=s&&(n=gs(s,Vt()));let r=[];const o=Yt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=$i(i,o);r=r.concat(Os(a,l,e,t))}return s&&(r=r.concat(ds(s,e,i,n))),r}}function Ls(e,t,n,i){const s=t.get(Vt());null==n&&null!=s&&(n=gs(s,Vt()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=$i(i,t),l=e.operationForChild(t);l&&(r=r.concat(Ls(l,s,o,a)))})),s&&(r=r.concat(ds(s,e,i,n))),r}function Rs(e,t){const n=t.query,i=Ms(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Rn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=qs(e,n);if(i){const n=js(i),s=n.path,r=n.queryId,o=tn(s,t);return Bs(e,s,new ci(ai(r),o))}return[]}(e,n._path,i):function(e,t){return Ds(e,new ci({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Ss(e,n,null,i)}}}}function Ms(e,t){const n=Fs(t);return e.queryToTagMap.get(n)}function Fs(e){return e._path.toString()+"$"+e._queryIdentifier}function qs(e,t){return e.tagToQueryMap.get(t)}function js(e){const t=e.indexOf("$");return r(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new $t(e.substr(0,t))}}function Bs(e,t,n){const i=e.syncPointTree_.get(t);r(i,"Missing sync point for query tag that we're tracking");return ds(i,n,Oi(e.pendingWriteTree_,t),null)}function Ws(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(r(hs,"Reference.ts has not been loaded"),hs)(e._repo,e._path):e}class Hs{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hs(t)}node(){return this.node_}constructor(e){this.node_=e}}class Us{getImmediateChild(e){const t=Zt(this.path_,e);return new Us(this.syncTree_,t)}node(){return As(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const zs=function(e,t,n){return e&&"object"==typeof e?(r(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?$s(e[".sv"],t,n):"object"==typeof e[".sv"]?Vs(e[".sv"],t):void r(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},$s=function(e,t,n){if("timestamp"===e)return n.timestamp;r(!1,"Unexpected server value: "+e)},Vs=function(e,t,n){e.hasOwnProperty("increment")||r(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&r(!1,"Unexpected increment value: "+i);const s=t.node();if(r(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return"number"!=typeof o?i:o+i},Ys=function(e,t,n,i){return Gs(t,new Us(n,e),i)},Ks=function(e,t,n){return Gs(e,new Hs(t),n)};function Gs(e,t,n){const i=e.getPriority().val(),s=zs(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=zs(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new kn(r,Fn(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new kn(s))),i.forEachChild(Sn,((e,i)=>{const s=Gs(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Xs(e,t){let n=t instanceof $t?t:new $t(t),i=e,s=Yt(n);for(;null!==s;){const e=S(i.node.children,s)||{children:{},childCount:0};i=new Qs(s,i,e),n=Gt(n),s=Yt(n)}return i}function Js(e){return e.node.value}function Zs(e,t){e.node.value=t,sr(e)}function er(e){return e.node.childCount>0}function tr(e,t){yt(e.node.children,((n,i)=>{t(new Qs(n,e,i))}))}function nr(e,t,n,i){n&&!i&&t(e),tr(e,(e=>{nr(e,t,!0,i)})),n&&i&&t(e)}function ir(e){return new $t(null===e.parent?e.name:ir(e.parent)+"/"+e.name)}function sr(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Js(e)&&!er(e)}(n),s=k(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,sr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,sr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const rr=/[\[\].#$\/\u0000-\u001F\u007F]/,or=/[\[\].#$\u0000-\u001F\u007F]/,ar=function(e){return"string"==typeof e&&0!==e.length&&!rr.test(e)},lr=function(e){return"string"==typeof e&&0!==e.length&&!or.test(e)},cr=function(e,t,n,i){i&&void 0===t||hr(L(e,"value"),t,n)},hr=function(e,t,n){const i=n instanceof $t?new rn(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+an(i));if("function"==typeof t)throw new Error(e+"contains a function "+an(i)+" with contents = "+t.toString());if(pt(t))throw new Error(e+"contains "+t.toString()+" "+an(i));if("string"==typeof t&&t.length>10485760/3&&M(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+an(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(yt(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!ar(t)))throw new Error(e+" contains an invalid key ("+t+") "+an(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=M(a),on(o),hr(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=M(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+an(i)+" in addition to actual children.")}},ur=function(e,t,n,i){if(!(i&&void 0===n||lr(n)))throw new Error(L(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},dr=function(e,t){if(".info"===Yt(t))throw new Error(e+" failed = Can't modify data under /.info/")},pr=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ar(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),lr(e)}(n))throw new Error(L(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _r(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||nn(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function mr(e,t,n){_r(e,n),gr(e,(e=>sn(e,t)||sn(t,e)))}function gr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(vr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function vr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();rt&&lt("event: "+n.toString()),Et(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ei(),this.transactionQueueTree_=new Qs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function br(e,t,n){if(e.stats_=Lt(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Jn(e.repoInfo_,((t,n,i,s)=>{Er(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Tr(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{C(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new cn(e.repoInfo_,t,((t,n,i,s)=>{Er(e,t,n,i,s)}),(t=>{Tr(e,t)}),(t=>{!function(e,t){yt(t,((t,n)=>{Ir(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ot[n]||(Ot[n]=t()),Ot[n]}(e.repoInfo_,(()=>new si(e.stats_,e.server_))),e.infoData_=new Zn,e.infoSyncTree_=new Es({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=ks(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Ir(e,"connected",!1),e.serverSyncTree_=new Es({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);mr(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function wr(e){const t=e.infoData_.getNode(new $t(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Cr(e){return(t=(t={timestamp:wr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Er(e,t,n,i,s){e.dataUpdateCount++;const r=new $t(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=x(n,(e=>Fn(e)));o=function(e,t,n,i){const s=qs(e,i);if(s){const i=js(s),r=i.path,o=i.queryId,a=tn(r,t),l=wi.fromObject(n);return Bs(e,r,new ui(ai(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=Fn(n);o=Ns(e.serverSyncTree_,r,t,s)}else if(i){const t=x(n,(e=>Fn(e)));o=function(e,t,n){const i=wi.fromObject(n);return Ds(e,new ui({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Fn(n);o=ks(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Or(e,r)),mr(e.eventQueue_,a,o)}function Tr(e,t){Ir(e,"connected",t),!1===t&&function(e){xr(e,"onDisconnectEvents");const t=Cr(e),n=ei();ni(e.onDisconnect_,Vt(),((i,s)=>{const r=Ys(i,s,e.serverSyncTree_,t);ti(n,i,r)}));let i=[];ni(n,Vt(),((t,n)=>{i=i.concat(ks(e.serverSyncTree_,t,n));const s=qr(e,t);Or(e,s)})),e.onDisconnect_=ei(),mr(e.eventQueue_,Vt(),i)}(e)}function Ir(e,t,n){const i=new $t("/.info/"+t),s=Fn(n);e.infoData_.updateSnapshot(i,s);const r=ks(e.infoSyncTree_,i,s);mr(e.eventQueue_,i,r)}function kr(e){return e.nextWriteId_++}function Sr(e,t,n,i,s){xr(e,"set",{path:t.toString(),value:n,priority:i});const r=Cr(e),o=Fn(n,i),a=As(e.serverSyncTree_,t),l=Ks(o,a,r),c=kr(e),h=Ts(e.serverSyncTree_,t,l,c,!0);_r(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||dt("set at "+t+" failed: "+n);const o=Is(e.serverSyncTree_,c,!r);mr(e.eventQueue_,t,o),Ar(e,s,n,i)}));const u=qr(e,t);Or(e,u),mr(e.eventQueue_,u,[])}function Nr(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function xr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),lt(n,...t)}function Ar(e,t,n,i){t&&Et((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function Pr(e,t,n){return As(e.serverSyncTree_,t,n)||Rn.EMPTY_NODE}function Dr(e,t=e.transactionQueueTree_){if(t||Fr(e,t),Js(t)){const n=Rr(e,t);r(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Pr(e,t,i);let o=s;const a=s.hash();for(let e=0;e<n.length;e++){const i=n[e];r(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=tn(t,i.path);o=o.updateChild(s,i.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,(i=>{xr(e,"transaction put response",{path:c.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Is(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Fr(e,Xs(e.transactionQueueTree_,t)),Dr(e,e.transactionQueueTree_),mr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Et(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{dt("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Or(e,t)}}),a)}(e,ir(t),n)}else er(t)&&tr(t,(t=>{Dr(e,t)}))}function Or(e,t){const n=Lr(e,t),i=ir(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const c=t[l],h=tn(n,c.path);let u,d=!1;if(r(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)d=!0,u=c.abortReason,s=s.concat(Is(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)d=!0,u="maxretry",s=s.concat(Is(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Pr(e,c.path,o);c.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){hr("transaction failed: Data returned ",i,c.path);let t=Fn(i);"object"==typeof i&&null!=i&&k(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=c.currentWriteId,a=Cr(e),l=Ks(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=kr(e),o.splice(o.indexOf(r),1),s=s.concat(Ts(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),s=s.concat(Is(e.serverSyncTree_,r,!0))}else d=!0,u="nodata",s=s.concat(Is(e.serverSyncTree_,c.currentWriteId,!0))}mr(e.eventQueue_,n,s),s=[],d&&(t[l].status=2,a=t[l].unwatcher,setTimeout(a,Math.floor(0)),t[l].onComplete&&("nodata"===u?i.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):i.push((()=>t[l].onComplete(new Error(u),!1,null)))))}var a;Fr(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Et(i[e]);Dr(e,e.transactionQueueTree_)}(e,Rr(e,n),i),i}function Lr(e,t){let n,i=e.transactionQueueTree_;for(n=Yt(t);null!==n&&void 0===Js(i);)i=Xs(i,n),n=Yt(t=Gt(t));return i}function Rr(e,t){const n=[];return Mr(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Mr(e,t,n){const i=Js(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);tr(t,(t=>{Mr(e,t,n)}))}function Fr(e,t){const n=Js(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Zs(t,n.length>0?n:void 0)}tr(t,(t=>{Fr(e,t)}))}function qr(e,t){const n=ir(Lr(e,t)),i=Xs(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{jr(e,t)})),jr(e,i),nr(i,(t=>{jr(e,t)})),n}function jr(e,t){const n=Js(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(r(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(r(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Is(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Zs(t,void 0):n.length=o+1,mr(e.eventQueue_,ir(t),s);for(let e=0;e<i.length;e++)Et(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=function(e,t){const n=Wr(e),i=n.namespace;"firebase.com"===n.domain&&ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new xt(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new $t(n.pathString)}},Wr=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+C(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class Ur{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return r(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{get key(){return en(this._path)?null:Qt(this._path)}get ref(){return new Vr(this._repo,this._path)}get _queryIdentifier(){const e=Xn(this._queryParams),t=gt(e);return"{}"===t?"default":t}get _queryObject(){return Xn(this._queryParams)}isEqual(e){if(!((e=F(e))instanceof $r))return!1;const t=this._repo===e._repo,n=nn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Vr extends $r{get parent(){const e=Jt(this._path);return null===e?null:new Vr(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Gn,!1)}}class Yr{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new $t(e),n=Gr(this.ref,e);return new Yr(this._node.getChild(t),n,Sn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Yr(n,Gr(this.ref,t),Sn))))}hasChild(e){const t=new $t(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function Kr(e,t){return(e=F(e))._checkNotDeleted("ref"),void 0!==t?Gr(e._root,t):e._root}function Gr(e,t){var n,i,s,r;return null===Yt((e=F(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),ur(n,i,s,r)):ur("child","path",t,!1),new Vr(e._repo,Zt(e._path,t))}function Qr(e,t){e=F(e),dr("push",e._path),cr("push",t,e._path,!0);const n=wr(e._repo),i=Wn(n),s=Gr(e,i),r=Gr(e,i);let o;return o=null!=t?Xr(r,t).then((()=>r)):Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Xr(e,t){e=F(e),dr("set",e._path),cr("set",t,e._path,!1);const n=new f;return Sr(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Jr(e){e=F(e);const t=new zr((()=>{})),n=new Zr(t);return function(e,t,n){const i=Ps(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const s=Fn(i).withIndex(t._queryParams.getIndex());let r;if(xs(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=ks(e.serverSyncTree_,t._path,s);else{const n=Ms(e.serverSyncTree_,t);r=Ns(e.serverSyncTree_,t._path,s,n)}return mr(e.eventQueue_,t._path,r),Ss(e.serverSyncTree_,t,n,null,!0),s}),(n=>(xr(e,"get for query "+C(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Yr(t,new Vr(e._repo,e._path),e._queryParams.getIndex())))}class Zr{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Hr("value",this,new Yr(e.snapshotNode,new Vr(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ur(this,e,t):null}matches(e){return e instanceof Zr&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){r(!cs,"__referenceConstructor has already been defined"),cs=e}(Vr),function(e){r(!hs,"__referenceConstructor has already been defined"),hs=e}(Vr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const eo={};let to=!1;function no(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Br(r,s),c=l.repoInfo;void 0!==Le&&Le.env&&(a=Le.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=Br(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const h=s&&o?new St(St.OWNER):new kt(e.name,e.options,t);pr("Invalid Firebase Database URL",l),en(l.path)||ut("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=eo[t.name];s||(s={},eo[t.name]=s);let r=s[e.toURLString()];r&&ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new yr(e,to,n,i),s[e.toURLString()]=r,r}(c,e,h,new It(e.name,n));return new io(u,e)}class io{get _repo(){return this._instanceStarted||(br(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vr(this._repo,Vt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=eo[t];n&&n[e.key]===e||ut(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Nr(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ut("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function so(e=Ee(),t){return ye(e,"database").getImmediate({identifier:t})}cn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},cn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){Ge="9.9.4",ve(new q("database",((e,{instanceIdentifier:t})=>no(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Te("@firebase/database","0.13.6",e),Te("@firebase/database","0.13.6","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Te("firebase","9.9.4","app");Ce({apiKey:"AIzaSyCv6MxU8A-pjcYfh7e--9UuG9oU8ESw1yo",authDomain:"test-template-f17b9.firebaseapp.com",databaseURL:"https://test-template-f17b9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"test-template-f17b9",storageBucket:"test-template-f17b9.appspot.com",messagingSenderId:"739422049395",appId:"1:739422049395:web:61f14da0b2bfc36e7f8606"});class ro{static createWithAuth(e,t){const n=so(),i=Kr(n);ro.createWithoutAuth(e),Qr(Kr(n,`UsersList/${t}/userFilmList`),{filmTitle:e.title,filmRate:e.rating}).catch(console.log),Jr(Gr(i,`UsersList/${t}/userFilmList`)).then((e=>console.dir(e.val())))}static createWithoutAuth(e){const t=oo();t.push(e),localStorage.setItem("films",JSON.stringify(t))}static renderFilmList(){const e=oo(),t=e.length?e.map(ao).join(""):"<li><p>У вас ещё нету фильмов в списке :(</p></li>";document.getElementById("list").innerHTML=t}static renderCurrentUserFilmList(e){const t=Kr(so());let n="";Jr(Gr(t,`UsersList/${e}/userFilmList`)).then((e=>{if(console.log(e.val()),e.exists())for(const t in e.val()){const i=e.val()[t];n+=`\n    <li>\n        <p class="h4">Название: ${i.filmTitle}</p>\n        <p class="h4">Рейтинг: <span class="rating">${i.filmRate}</span></p>\n    </li>`,console.log(n)}else n="У вас ещё нету фильмов в библиотеке :(";document.getElementById("list").innerHTML=n}))}}function oo(){return JSON.parse(localStorage.getItem("films")||"[]")}function ao(e){return`\n    <li>\n        <p class="h4">Название: ${e.title}</p>\n        <p class="h4">Рейтинг: <span class="rating">${e.rating}</span></p>\n    </li>`}Ce({apiKey:"AIzaSyCv6MxU8A-pjcYfh7e--9UuG9oU8ESw1yo",authDomain:"test-template-f17b9.firebaseapp.com",databaseURL:"https://test-template-f17b9-default-rtdb.europe-west1.firebasedatabase.app",projectId:"test-template-f17b9",storageBucket:"test-template-f17b9.appspot.com",messagingSenderId:"739422049395",appId:"1:739422049395:web:61f14da0b2bfc36e7f8606"});function lo(e){e.preventDefault();const t=so(),n=document.getElementById("reg-user-name"),i=document.getElementById("modal-email"),s=document.getElementById("modal-password");if(!bo(n.value,i.value,s.value))return alert("You filled form uncorrect");Jr(Gr(Kr(t),"UsersList/"+n.value)).then((e=>{e.exists()?alert("User already exist !"):Xr(Kr(t,"UsersList/"+n.value),{userName:n.value,email:i.value,password:s.value}).then(alert("User Successfuly registraited")).then(document.getElementById("modal-form").reset()).catch(console.log)}))}function co(e){e.preventDefault();const t=so(),n=document.getElementById("reg-user-name"),i=document.getElementById("modal-password");Jr(Gr(Kr(t),"UsersList/"+n.value)).then((e=>{if(!e.exists())return alert("User not exist yet !");{let s=e.val().password;console.log(s),console.log(i.value),s===i.value&&(alert(`You Successfuly enter in your accaunt  ${n.value} !`),console.log(n.value),ro.renderCurrentUserFilmList(n.value),t=e.val(),sessionStorage.setItem("userData",JSON.stringify(t)),document.querySelector(".btn-close").click(),ho(),uo())}var t}))}function ho(){const e=`\n            <button\n            type="button"\n            class="btn btn-warning "\n            id="sign-out-btn"\n          >Выход\n          </button>\n          <p class="h1">Hello ,${JSON.parse(sessionStorage.getItem("userData")).userName} !</p>\n    `;document.getElementById("nav-user-name").innerHTML=e,document.getElementById("my-modal-btn").classList.add("visually-hidden")}function uo(){document.getElementById("sign-out-btn").addEventListener("click",wo)}let po,fo,_o,mo;function go(e,t){return e>=5&&t>0&&t<=10}function vo(e){mo.removeEventListener("submit",co),mo.addEventListener("submit",lo),e.target.className+=" selected-btn",fo.className="btn btn-primary";mo.innerHTML='\n                  <h6>Registration</h6>\n                  <div class="mb-3">\n                  <label for="reg-user-name" class="form-label"\n                    >Profile Name</label\n                  >\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="reg-user-name"\n                    aria-describedby="textHelp"\n                  />\n                </div>\n                <div class="mb-3">\n                  <label for="modal-email" class="form-label"\n                    >Email</label\n                  >\n                  <input\n                    type="email"\n                    class="form-control"\n                    id="modal-email"\n                    aria-describedby="emailHelp"\n                  />\n                </div>\n                <div class="mb-3">\n                  <label for="modal-password" class="form-label"\n                    >Password</label\n                  >\n                  <input\n                    type="password"\n                    class="form-control"\n                    id="modal-password"\n                  />\n                </div>\n                <div class="modal-footer">\n                  <button type="submit" class="btn btn-success">Log</button>\n                </div>\n  '}function yo(e){mo.removeEventListener("submit",lo),mo.addEventListener("submit",co),e.target.className+=" selected-btn",po.className="btn btn-primary";mo.innerHTML='\n                  <h6>Log in</h6>\n                  <div class="mb-3">\n                  <label for="reg-user-name" class="form-label"\n                    >Profile Name</label\n                  >\n                  <input\n                    type="text"\n                    class="form-control"\n                    id="reg-user-name"\n                    aria-describedby="textHelp"\n                  />\n                </div>\n                <div class="mb-3">\n                  <label for="modal-password" class="form-label"\n                    >Password</label\n                  >\n                  <input\n                    type="password"\n                    class="form-control"\n                    id="modal-password"\n                  />\n                </div>\n                <div class="modal-footer">\n                  <button type="submit" class="btn btn-success">Log</button>\n                </div>\n  '}function bo(e,t,n){return!!(/[a-zA-Z\s]+/.test(e)&&/[a-zA-Z0-9]+@(gmail|yahoo|mail)\.com/.test(t)&&/[a-zA-Z0-9]{5,}/.test(n))}function wo(){sessionStorage.clear(),localStorage.removeItem("films"),ro.renderFilmList(),document.getElementById("my-modal-btn").classList.remove("visually-hidden"),document.getElementById("nav-user-name").innerHTML=""}var Co={};e(Co,"popperGenerator",(function(){return sl})),e(Co,"detectOverflow",(function(){return Ua})),e(Co,"createPopperBase",(function(){return rl})),e(Co,"createPopper",(function(){return ol})),e(Co,"createPopperLite",(function(){return al}));var Eo={};e(Eo,"top",(function(){return To})),e(Eo,"bottom",(function(){return Io})),e(Eo,"right",(function(){return ko})),e(Eo,"left",(function(){return So})),e(Eo,"auto",(function(){return No})),e(Eo,"basePlacements",(function(){return xo})),e(Eo,"start",(function(){return Ao})),e(Eo,"end",(function(){return Po})),e(Eo,"clippingParents",(function(){return Do})),e(Eo,"viewport",(function(){return Oo})),e(Eo,"popper",(function(){return Lo})),e(Eo,"reference",(function(){return Ro})),e(Eo,"variationPlacements",(function(){return Mo})),e(Eo,"placements",(function(){return Fo})),e(Eo,"beforeRead",(function(){return qo})),e(Eo,"read",(function(){return jo})),e(Eo,"afterRead",(function(){return Bo})),e(Eo,"beforeMain",(function(){return Wo})),e(Eo,"main",(function(){return Ho})),e(Eo,"afterMain",(function(){return Uo})),e(Eo,"beforeWrite",(function(){return zo})),e(Eo,"write",(function(){return $o})),e(Eo,"afterWrite",(function(){return Vo})),e(Eo,"modifierPhases",(function(){return Yo}));var To="top",Io="bottom",ko="right",So="left",No="auto",xo=[To,Io,ko,So],Ao="start",Po="end",Do="clippingParents",Oo="viewport",Lo="popper",Ro="reference",Mo=xo.reduce((function(e,t){return e.concat([t+"-"+Ao,t+"-"+Po])}),[]),Fo=[].concat(xo,[No]).reduce((function(e,t){return e.concat([t,t+"-"+Ao,t+"-"+Po])}),[]),qo="beforeRead",jo="read",Bo="afterRead",Wo="beforeMain",Ho="main",Uo="afterMain",zo="beforeWrite",$o="write",Vo="afterWrite",Yo=[qo,jo,Bo,Wo,Ho,Uo,zo,$o,Vo],Ko={};function Go(e){return e?(e.nodeName||"").toLowerCase():null}function Qo(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Xo(e){return e instanceof Qo(e).Element||e instanceof Element}function Jo(e){return e instanceof Qo(e).HTMLElement||e instanceof HTMLElement}function Zo(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Qo(e).ShadowRoot||e instanceof ShadowRoot)}e(Ko,"applyStyles",(function(){return ea})),e(Ko,"arrow",(function(){return wa})),e(Ko,"computeStyles",(function(){return Ia})),e(Ko,"eventListeners",(function(){return Sa})),e(Ko,"flip",(function(){return $a})),e(Ko,"hide",(function(){return Ka})),e(Ko,"offset",(function(){return Ga})),e(Ko,"popperOffsets",(function(){return Qa})),e(Ko,"preventOverflow",(function(){return Xa}));var ea={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];Jo(s)&&Go(s)&&(Object.assign(s.style,n),Object.keys(i).forEach((function(e){var t=i[e];!1===t?s.removeAttribute(e):s.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],s=t.attributes[e]||{},r=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});Jo(i)&&Go(i)&&(Object.assign(i.style,r),Object.keys(s).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]};function ta(e){return e.split("-")[0]}var na=Math.max,ia=Math.min,sa=Math.round;function ra(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function oa(){return!/^((?!chrome|android).)*safari/i.test(ra())}function aa(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var i=e.getBoundingClientRect(),s=1,r=1;t&&Jo(e)&&(s=e.offsetWidth>0&&sa(i.width)/e.offsetWidth||1,r=e.offsetHeight>0&&sa(i.height)/e.offsetHeight||1);var o=(Xo(e)?Qo(e):window).visualViewport,a=!oa()&&n,l=(i.left+(a&&o?o.offsetLeft:0))/s,c=(i.top+(a&&o?o.offsetTop:0))/r,h=i.width/s,u=i.height/r;return{width:h,height:u,top:c,right:l+h,bottom:c+u,left:l,x:l,y:c}}function la(e){var t=aa(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function ca(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Zo(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ha(e){return Qo(e).getComputedStyle(e)}function ua(e){return["table","td","th"].indexOf(Go(e))>=0}function da(e){return((Xo(e)?e.ownerDocument:e.document)||window.document).documentElement}function pa(e){return"html"===Go(e)?e:e.assignedSlot||e.parentNode||(Zo(e)?e.host:null)||da(e)}function fa(e){return Jo(e)&&"fixed"!==ha(e).position?e.offsetParent:null}function _a(e){for(var t=Qo(e),n=fa(e);n&&ua(n)&&"static"===ha(n).position;)n=fa(n);return n&&("html"===Go(n)||"body"===Go(n)&&"static"===ha(n).position)?t:n||function(e){var t=/firefox/i.test(ra());if(/Trident/i.test(ra())&&Jo(e)&&"fixed"===ha(e).position)return null;var n=pa(e);for(Zo(n)&&(n=n.host);Jo(n)&&["html","body"].indexOf(Go(n))<0;){var i=ha(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}function ma(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ga(e,t,n){return na(e,ia(t,n))}function va(e,t,n){var i=ga(e,t,n);return i>n?n:i}function ya(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ba(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var wa={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,i=e.name,s=e.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=ta(n.placement),l=ma(a),c=[So,ko].indexOf(a)>=0?"height":"width";if(r&&o){var h=function(e,t){return ya("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ba(e,xo))}(s.padding,n),u=la(r),d="y"===l?To:So,p="y"===l?Io:ko,f=n.rects.reference[c]+n.rects.reference[l]-o[l]-n.rects.popper[c],_=o[l]-n.rects.reference[l],m=_a(r),g=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,v=f/2-_/2,y=h[d],b=g-u[c]-h[p],w=g/2-u[c]/2+v,C=ga(y,w,b),E=l;n.modifiersData[i]=((t={})[E]=C,t.centerOffset=C-w,t)}},effect:function(e){var t=e.state,n=e.options.element,i=void 0===n?"[data-popper-arrow]":n;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&ca(t.elements.popper,i)&&(t.elements.arrow=i)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ca(e){return e.split("-")[1]}var Ea={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ta(e){var t,n=e.popper,i=e.popperRect,s=e.placement,r=e.variation,o=e.offsets,a=e.position,l=e.gpuAcceleration,c=e.adaptive,h=e.roundOffsets,u=e.isFixed,d=o.x,p=void 0===d?0:d,f=o.y,_=void 0===f?0:f,m="function"==typeof h?h({x:p,y:_}):{x:p,y:_};p=m.x,_=m.y;var g=o.hasOwnProperty("x"),v=o.hasOwnProperty("y"),y=So,b=To,w=window;if(c){var C=_a(n),E="clientHeight",T="clientWidth";if(C===Qo(n)&&"static"!==ha(C=da(n)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),s===To||(s===So||s===ko)&&r===Po)b=Io,_-=(u&&C===w&&w.visualViewport?w.visualViewport.height:C[E])-i.height,_*=l?1:-1;if(s===So||(s===To||s===Io)&&r===Po)y=ko,p-=(u&&C===w&&w.visualViewport?w.visualViewport.width:C[T])-i.width,p*=l?1:-1}var I,k=Object.assign({position:a},c&&Ea),S=!0===h?function(e){var t=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:sa(t*i)/i||0,y:sa(n*i)/i||0}}({x:p,y:_}):{x:p,y:_};return p=S.x,_=S.y,l?Object.assign({},k,((I={})[b]=v?"0":"",I[y]=g?"0":"",I.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+_+"px)":"translate3d("+p+"px, "+_+"px, 0)",I)):Object.assign({},k,((t={})[b]=v?_+"px":"",t[y]=g?p+"px":"",t.transform="",t))}var Ia={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,i=n.gpuAcceleration,s=void 0===i||i,r=n.adaptive,o=void 0===r||r,a=n.roundOffsets,l=void 0===a||a,c={placement:ta(t.placement),variation:Ca(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Ta(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ta(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},ka={passive:!0};var Sa={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,s=i.scroll,r=void 0===s||s,o=i.resize,a=void 0===o||o,l=Qo(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&c.forEach((function(e){e.addEventListener("scroll",n.update,ka)})),a&&l.addEventListener("resize",n.update,ka),function(){r&&c.forEach((function(e){e.removeEventListener("scroll",n.update,ka)})),a&&l.removeEventListener("resize",n.update,ka)}},data:{}},Na={left:"right",right:"left",bottom:"top",top:"bottom"};function xa(e){return e.replace(/left|right|bottom|top/g,(function(e){return Na[e]}))}var Aa={start:"end",end:"start"};function Pa(e){return e.replace(/start|end/g,(function(e){return Aa[e]}))}function Da(e){var t=Qo(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Oa(e){return aa(da(e)).left+Da(e).scrollLeft}function La(e,t){var n=Qo(e),i=da(e),s=n.visualViewport,r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;var c=oa();(c||!c&&"fixed"===t)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a+Oa(e),y:l}}function Ra(e){var t,n=da(e),i=Da(e),s=null==(t=e.ownerDocument)?void 0:t.body,r=na(n.scrollWidth,n.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=na(n.scrollHeight,n.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-i.scrollLeft+Oa(e),l=-i.scrollTop;return"rtl"===ha(s||n).direction&&(a+=na(n.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Ma(e){var t=ha(e),n=t.overflow,i=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+s+i)}function Fa(e){return["html","body","#document"].indexOf(Go(e))>=0?e.ownerDocument.body:Jo(e)&&Ma(e)?e:Fa(pa(e))}function qa(e,t){var n;void 0===t&&(t=[]);var i=Fa(e),s=i===(null==(n=e.ownerDocument)?void 0:n.body),r=Qo(i),o=s?[r].concat(r.visualViewport||[],Ma(i)?i:[]):i,a=t.concat(o);return s?a:a.concat(qa(pa(o)))}function ja(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ba(e,t,n){return t===Oo?ja(La(e,n)):Xo(t)?function(e,t){var n=aa(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ja(Ra(da(e)))}function Wa(e,t,n,i){var s="clippingParents"===t?function(e){var t=qa(pa(e)),n=["absolute","fixed"].indexOf(ha(e).position)>=0&&Jo(e)?_a(e):e;return Xo(n)?t.filter((function(e){return Xo(e)&&ca(e,n)&&"body"!==Go(e)})):[]}(e):[].concat(t),r=[].concat(s,[n]),o=r[0],a=r.reduce((function(t,n){var s=Ba(e,n,i);return t.top=na(s.top,t.top),t.right=ia(s.right,t.right),t.bottom=ia(s.bottom,t.bottom),t.left=na(s.left,t.left),t}),Ba(e,o,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ha(e){var t,n=e.reference,i=e.element,s=e.placement,r=s?ta(s):null,o=s?Ca(s):null,a=n.x+n.width/2-i.width/2,l=n.y+n.height/2-i.height/2;switch(r){case To:t={x:a,y:n.y-i.height};break;case Io:t={x:a,y:n.y+n.height};break;case ko:t={x:n.x+n.width,y:l};break;case So:t={x:n.x-i.width,y:l};break;default:t={x:n.x,y:n.y}}var c=r?ma(r):null;if(null!=c){var h="y"===c?"height":"width";switch(o){case Ao:t[c]=t[c]-(n[h]/2-i[h]/2);break;case Po:t[c]=t[c]+(n[h]/2-i[h]/2)}}return t}function Ua(e,t){void 0===t&&(t={});var n=t,i=n.placement,s=void 0===i?e.placement:i,r=n.strategy,o=void 0===r?e.strategy:r,a=n.boundary,l=void 0===a?Do:a,c=n.rootBoundary,h=void 0===c?Oo:c,u=n.elementContext,d=void 0===u?Lo:u,p=n.altBoundary,f=void 0!==p&&p,_=n.padding,m=void 0===_?0:_,g=ya("number"!=typeof m?m:ba(m,xo)),v=d===Lo?Ro:Lo,y=e.rects.popper,b=e.elements[f?v:d],w=Wa(Xo(b)?b:b.contextElement||da(e.elements.popper),l,h,o),C=aa(e.elements.reference),E=Ha({reference:C,element:y,strategy:"absolute",placement:s}),T=ja(Object.assign({},y,E)),I=d===Lo?T:C,k={top:w.top-I.top+g.top,bottom:I.bottom-w.bottom+g.bottom,left:w.left-I.left+g.left,right:I.right-w.right+g.right},S=e.modifiersData.offset;if(d===Lo&&S){var N=S[s];Object.keys(k).forEach((function(e){var t=[ko,Io].indexOf(e)>=0?1:-1,n=[To,Io].indexOf(e)>=0?"y":"x";k[e]+=N[n]*t}))}return k}function za(e,t){void 0===t&&(t={});var n=t,i=n.placement,s=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?Fo:l,h=Ca(i),u=h?a?Mo:Mo.filter((function(e){return Ca(e)===h})):xo,d=u.filter((function(e){return c.indexOf(e)>=0}));0===d.length&&(d=u);var p=d.reduce((function(t,n){return t[n]=Ua(e,{placement:n,boundary:s,rootBoundary:r,padding:o})[ta(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}var $a={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var s=n.mainAxis,r=void 0===s||s,o=n.altAxis,a=void 0===o||o,l=n.fallbackPlacements,c=n.padding,h=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,f=void 0===p||p,_=n.allowedAutoPlacements,m=t.options.placement,g=ta(m),v=l||(g===m||!f?[xa(m)]:function(e){if(ta(e)===No)return[];var t=xa(e);return[Pa(e),t,Pa(t)]}(m)),y=[m].concat(v).reduce((function(e,n){return e.concat(ta(n)===No?za(t,{placement:n,boundary:h,rootBoundary:u,padding:c,flipVariations:f,allowedAutoPlacements:_}):n)}),[]),b=t.rects.reference,w=t.rects.popper,C=new Map,E=!0,T=y[0],I=0;I<y.length;I++){var k=y[I],S=ta(k),N=Ca(k)===Ao,x=[To,Io].indexOf(S)>=0,A=x?"width":"height",P=Ua(t,{placement:k,boundary:h,rootBoundary:u,altBoundary:d,padding:c}),D=x?N?ko:So:N?Io:To;b[A]>w[A]&&(D=xa(D));var O=xa(D),L=[];if(r&&L.push(P[S]<=0),a&&L.push(P[D]<=0,P[O]<=0),L.every((function(e){return e}))){T=k,E=!1;break}C.set(k,L)}if(E)for(var R=function(e){var t=y.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},M=f?3:1;M>0;M--){if("break"===R(M))break}t.placement!==T&&(t.modifiersData[i]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Va(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ya(e){return[To,ko,Io,So].some((function(t){return e[t]>=0}))}var Ka={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,i=t.rects.reference,s=t.rects.popper,r=t.modifiersData.preventOverflow,o=Ua(t,{elementContext:"reference"}),a=Ua(t,{altBoundary:!0}),l=Va(o,i),c=Va(a,s,r),h=Ya(l),u=Ya(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":u})}};var Ga={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,i=e.name,s=n.offset,r=void 0===s?[0,0]:s,o=Fo.reduce((function(e,n){return e[n]=function(e,t,n){var i=ta(e),s=[So,To].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign({},t,{placement:e})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[So,ko].indexOf(i)>=0?{x:a,y:o}:{x:o,y:a}}(n,t.rects,r),e}),{}),a=o[t.placement],l=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[i]=o}};var Qa={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Ha({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var Xa={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,i=e.name,s=n.mainAxis,r=void 0===s||s,o=n.altAxis,a=void 0!==o&&o,l=n.boundary,c=n.rootBoundary,h=n.altBoundary,u=n.padding,d=n.tether,p=void 0===d||d,f=n.tetherOffset,_=void 0===f?0:f,m=Ua(t,{boundary:l,rootBoundary:c,padding:u,altBoundary:h}),g=ta(t.placement),v=Ca(t.placement),y=!v,b=ma(g),w="x"===b?"y":"x",C=t.modifiersData.popperOffsets,E=t.rects.reference,T=t.rects.popper,I="function"==typeof _?_(Object.assign({},t.rects,{placement:t.placement})):_,k="number"==typeof I?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(C){if(r){var x,A="y"===b?To:So,P="y"===b?Io:ko,D="y"===b?"height":"width",O=C[b],L=O+m[A],R=O-m[P],M=p?-T[D]/2:0,F=v===Ao?E[D]:T[D],q=v===Ao?-T[D]:-E[D],j=t.elements.arrow,B=p&&j?la(j):{width:0,height:0},W=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=W[A],U=W[P],z=ga(0,E[D],B[D]),$=y?E[D]/2-M-z-H-k.mainAxis:F-z-H-k.mainAxis,V=y?-E[D]/2+M+z+U+k.mainAxis:q+z+U+k.mainAxis,Y=t.elements.arrow&&_a(t.elements.arrow),K=Y?"y"===b?Y.clientTop||0:Y.clientLeft||0:0,G=null!=(x=null==S?void 0:S[b])?x:0,Q=O+V-G,X=ga(p?ia(L,O+$-G-K):L,O,p?na(R,Q):R);C[b]=X,N[b]=X-O}if(a){var J,Z="x"===b?To:So,ee="x"===b?Io:ko,te=C[w],ne="y"===w?"height":"width",ie=te+m[Z],se=te-m[ee],re=-1!==[To,So].indexOf(g),oe=null!=(J=null==S?void 0:S[w])?J:0,ae=re?ie:te-E[ne]-T[ne]-oe+k.altAxis,le=re?te+E[ne]+T[ne]-oe-k.altAxis:se,ce=p&&re?va(ae,te,le):ga(p?ae:ie,te,p?le:se);C[w]=ce,N[w]=ce-te}t.modifiersData[i]=N}},requiresIfExists:["offset"]};function Ja(e,t,n){void 0===n&&(n=!1);var i,s,r=Jo(t),o=Jo(t)&&function(e){var t=e.getBoundingClientRect(),n=sa(t.width)/e.offsetWidth||1,i=sa(t.height)/e.offsetHeight||1;return 1!==n||1!==i}(t),a=da(t),l=aa(e,o,n),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(r||!r&&!n)&&(("body"!==Go(t)||Ma(a))&&(c=(i=t)!==Qo(i)&&Jo(i)?{scrollLeft:(s=i).scrollLeft,scrollTop:s.scrollTop}:Da(i)),Jo(t)?((h=aa(t,!0)).x+=t.clientLeft,h.y+=t.clientTop):a&&(h.x=Oa(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function Za(e){var t=new Map,n=new Set,i=[];function s(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=t.get(e);i&&s(i)}})),i.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||s(e)})),i}function el(e){var t=Za(e);return Yo.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function tl(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var nl={placement:"bottom",modifiers:[],strategy:"absolute"};function il(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function sl(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,s=t.defaultOptions,r=void 0===s?nl:s;return function(e,t,n){void 0===n&&(n=r);var s,o,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},nl,r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(n){var s="function"==typeof n?n(a.options):n;u(),a.options=Object.assign({},r,a.options,s),a.scrollParents={reference:Xo(e)?qa(e):e.contextElement?qa(e.contextElement):[],popper:qa(t)};var o=el(tl([].concat(i,a.options.modifiers)));return a.orderedModifiers=o.filter((function(e){return e.enabled})),a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,i=void 0===n?{}:n,s=e.effect;if("function"==typeof s){var r=s({state:a,name:t,instance:h,options:i}),o=function(){};l.push(r||o)}})),h.update()},forceUpdate:function(){if(!c){var e=a.elements,t=e.reference,n=e.popper;if(il(t,n)){a.rects={reference:Ja(t,_a(n),"fixed"===a.options.strategy),popper:la(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<a.orderedModifiers.length;i++)if(!0!==a.reset){var s=a.orderedModifiers[i],r=s.fn,o=s.options,l=void 0===o?{}:o,u=s.name;"function"==typeof r&&(a=r({state:a,options:l,name:u,instance:h})||a)}else a.reset=!1,i=-1}}},update:(s=function(){return new Promise((function(e){h.forceUpdate(),e(a)}))},function(){return o||(o=new Promise((function(e){Promise.resolve().then((function(){o=void 0,e(s())}))}))),o}),destroy:function(){u(),c=!0}};if(!il(e,t))return h;function u(){l.forEach((function(e){return e()})),l=[]}return h.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),h}}var rl=sl(),ol=sl({defaultModifiers:[Sa,Qa,Ia,ea,Ga,$a,Xa,wa,Ka]}),al=sl({defaultModifiers:[Sa,Qa,Ia,ea]});t(Co,Eo),t(Co,Ko);const ll=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},cl=e=>{const t=ll(e);return t&&document.querySelector(t)?t:null},hl=e=>{const t=ll(e);return t?document.querySelector(t):null},ul=e=>{e.dispatchEvent(new Event("transitionend"))},dl=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),pl=e=>dl(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(e):null,fl=e=>{if(!dl(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},_l=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),ml=e=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?ml(e.parentNode):null},gl=()=>{},vl=e=>{e.offsetHeight},yl=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,bl=[],wl=()=>"rtl"===document.documentElement.dir,Cl=e=>{var t;t=()=>{const t=yl();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}},"loading"===document.readyState?(bl.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of bl)e()})),bl.push(t)):t()},El=e=>{"function"==typeof e&&e()},Tl=(e,t,n=!0)=>{if(!n)return void El(e);const i=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let s=!1;const r=({target:n})=>{n===t&&(s=!0,t.removeEventListener("transitionend",r),El(e))};t.addEventListener("transitionend",r),setTimeout((()=>{s||ul(t)}),i)},Il=(e,t,n,i)=>{const s=e.length;let r=e.indexOf(t);return-1===r?!n&&i?e[s-1]:e[0]:(r+=n?1:-1,i&&(r=(r+s)%s),e[Math.max(0,Math.min(r,s-1))])},kl=/[^.]*(?=\..*)\.|.*/,Sl=/\..*/,Nl=/::\d+$/,xl={};let Al=1;const Pl={mouseenter:"mouseover",mouseleave:"mouseout"},Dl=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ol(e,t){return t&&`${t}::${Al++}`||e.uidEvent||Al++}function Ll(e){const t=Ol(e);return e.uidEvent=t,xl[t]=xl[t]||{},xl[t]}function Rl(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function Ml(e,t,n){const i="string"==typeof t,s=i?n:t||n;let r=Bl(e);return Dl.has(r)||(r=e),[i,s,r]}function Fl(e,t,n,i,s){if("string"!=typeof t||!e)return;let[r,o,a]=Ml(t,n,i);if(t in Pl){o=(e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)})(o)}const l=Ll(e),c=l[a]||(l[a]={}),h=Rl(c,o,r?n:null);if(h)return void(h.oneOff=h.oneOff&&s);const u=Ol(o,t.replace(kl,"")),d=r?function(e,t,n){return function i(s){const r=e.querySelectorAll(t);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Hl(s,{delegateTarget:o}),i.oneOff&&Wl.off(e,s.type,t,n),n.apply(o,[s])}}(e,n,o):function(e,t){return function n(i){return Hl(i,{delegateTarget:e}),n.oneOff&&Wl.off(e,i.type,t),t.apply(e,[i])}}(e,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=s,d.uidEvent=u,c[u]=d,e.addEventListener(a,d,r)}function ql(e,t,n,i,s){const r=Rl(t[n],i,s);r&&(e.removeEventListener(n,r,Boolean(s)),delete t[n][r.uidEvent])}function jl(e,t,n,i){const s=t[n]||{};for(const r of Object.keys(s))if(r.includes(i)){const i=s[r];ql(e,t,n,i.callable,i.delegationSelector)}}function Bl(e){return e=e.replace(Sl,""),Pl[e]||e}const Wl={on(e,t,n,i){Fl(e,t,n,i,!1)},one(e,t,n,i){Fl(e,t,n,i,!0)},off(e,t,n,i){if("string"!=typeof t||!e)return;const[s,r,o]=Ml(t,n,i),a=o!==t,l=Ll(e),c=l[o]||{},h=t.startsWith(".");if(void 0===r){if(h)for(const n of Object.keys(l))jl(e,l,n,t.slice(1));for(const n of Object.keys(c)){const i=n.replace(Nl,"");if(!a||t.includes(i)){const t=c[n];ql(e,l,o,t.callable,t.delegationSelector)}}}else{if(!Object.keys(c).length)return;ql(e,l,o,r,s?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const i=yl();let s=null,r=!0,o=!0,a=!1;t!==Bl(t)&&i&&(s=i.Event(t,n),i(e).trigger(s),r=!s.isPropagationStopped(),o=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());let l=new Event(t,{bubbles:r,cancelable:!0});return l=Hl(l,n),a&&l.preventDefault(),o&&e.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function Hl(e,t){for(const[n,i]of Object.entries(t||{}))try{e[n]=i}catch(t){Object.defineProperty(e,n,{configurable:!0,get:()=>i})}return e}const Ul=new Map,zl={set(e,t,n){Ul.has(e)||Ul.set(e,new Map);const i=Ul.get(e);i.has(t)||0===i.size?i.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get:(e,t)=>Ul.has(e)&&Ul.get(e).get(t)||null,remove(e,t){if(!Ul.has(e))return;const n=Ul.get(e);n.delete(t),0===n.size&&Ul.delete(e)}};function $l(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch(t){return e}}function Vl(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const Yl={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Vl(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Vl(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const i of n){let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=$l(e.dataset[i])}return t},getDataAttribute:(e,t)=>$l(e.getAttribute(`data-bs-${Vl(t)}`))};class Kl{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=dl(t)?Yl.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...dl(t)?Yl.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const i of Object.keys(t)){const s=t[i],r=e[i],o=dl(r)?"element":null==(n=r)?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${s}".`)}var n}}class Gl extends Kl{dispose(){zl.remove(this._element,this.constructor.DATA_KEY),Wl.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Tl(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return zl.get(pl(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.2.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}constructor(e,t){super(),(e=pl(e))&&(this._element=e,this._config=this._getConfig(t),zl.set(this._element,this.constructor.DATA_KEY,this))}}const Ql=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;Wl.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),_l(this))return;const s=hl(this)||this.closest(`.${i}`);e.getOrCreateInstance(s)[t]()}))};class Xl extends Gl{static get NAME(){return"alert"}close(){if(Wl.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const e=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,e)}_destroyElement(){this._element.remove(),Wl.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=Xl.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Ql(Xl,"close"),Cl(Xl);class Jl extends Gl{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(e){return this.each((function(){const t=Jl.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}Wl.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',(e=>{e.preventDefault();const t=e.target.closest('[data-bs-toggle="button"]');Jl.getOrCreateInstance(t).toggle()})),Cl(Jl);const Zl={find:(e,t=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(t,e)),findOne:(e,t=document.documentElement)=>Element.prototype.querySelector.call(t,e),children:(e,t)=>[].concat(...e.children).filter((e=>e.matches(t))),parents(e,t){const n=[];let i=e.parentNode.closest(t);for(;i;)n.push(i),i=i.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(",");return this.find(t,e).filter((e=>!_l(e)&&fl(e)))}},ec={endCallback:null,leftCallback:null,rightCallback:null},tc={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class nc extends Kl{static get Default(){return ec}static get DefaultType(){return tc}static get NAME(){return"swipe"}dispose(){Wl.off(this._element,".bs.swipe")}_start(e){this._supportPointerEvents?this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX):this._deltaX=e.touches[0].clientX}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),El(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=40)return;const t=e/this._deltaX;this._deltaX=0,t&&El(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Wl.on(this._element,"pointerdown.bs.swipe",(e=>this._start(e))),Wl.on(this._element,"pointerup.bs.swipe",(e=>this._end(e))),this._element.classList.add("pointer-event")):(Wl.on(this._element,"touchstart.bs.swipe",(e=>this._start(e))),Wl.on(this._element,"touchmove.bs.swipe",(e=>this._move(e))),Wl.on(this._element,"touchend.bs.swipe",(e=>this._end(e))))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&("pen"===e.pointerType||"touch"===e.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}constructor(e,t){super(),this._element=e,e&&nc.isSupported()&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}}const ic={ArrowLeft:"right",ArrowRight:"left"},sc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class oc extends Gl{static get Default(){return sc}static get DefaultType(){return rc}static get NAME(){return"carousel"}next(){this._slide("next")}nextWhenVisible(){!document.hidden&&fl(this._element)&&this.next()}prev(){this._slide("prev")}pause(){this._isSliding&&ul(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?Wl.one(this._element,"slid.bs.carousel",(()=>this.cycle())):this.cycle())}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding)return void Wl.one(this._element,"slid.bs.carousel",(()=>this.to(e)));const n=this._getItemIndex(this._getActive());if(n===e)return;const i=e>n?"next":"prev";this._slide(i,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&Wl.on(this._element,"keydown.bs.carousel",(e=>this._keydown(e))),"hover"===this._config.pause&&(Wl.on(this._element,"mouseenter.bs.carousel",(()=>this.pause())),Wl.on(this._element,"mouseleave.bs.carousel",(()=>this._maybeEnableCycle()))),this._config.touch&&nc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const e of Zl.find(".carousel-item img",this._element))Wl.on(e,"dragstart.bs.carousel",(e=>e.preventDefault()));const e={leftCallback:()=>this._slide(this._directionToOrder("left")),rightCallback:()=>this._slide(this._directionToOrder("right")),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new nc(this._element,e)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=ic[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=Zl.findOne(".active",this._indicatorsElement);t.classList.remove("active"),t.removeAttribute("aria-current");const n=Zl.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add("active"),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),i="next"===e,s=t||Il(this._getItems(),n,i,this._config.wrap);if(s===n)return;const r=this._getItemIndex(s),o=t=>Wl.trigger(this._element,t,{relatedTarget:s,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:r});if(o("slide.bs.carousel").defaultPrevented)return;if(!n||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(r),this._activeElement=s;const l=i?"carousel-item-start":"carousel-item-end",c=i?"carousel-item-next":"carousel-item-prev";s.classList.add(c),vl(s),n.classList.add(l),s.classList.add(l);this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add("active"),n.classList.remove("active",c,l),this._isSliding=!1,o("slid.bs.carousel")}),n,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return Zl.findOne(".active.carousel-item",this._element)}_getItems(){return Zl.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return wl()?"left"===e?"prev":"next":"left"===e?"next":"prev"}_orderToDirection(e){return wl()?"prev"===e?"left":"right":"prev"===e?"right":"left"}static jQueryInterface(e){return this.each((function(){const t=oc.getOrCreateInstance(this,e);if("number"!=typeof e){if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}else t.to(e)}))}constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Zl.findOne(".carousel-indicators",this._element),this._addEventListeners(),"carousel"===this._config.ride&&this.cycle()}}Wl.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",(function(e){const t=hl(this);if(!t||!t.classList.contains("carousel"))return;e.preventDefault();const n=oc.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");return i?(n.to(i),void n._maybeEnableCycle()):"next"===Yl.getDataAttribute(this,"slide")?(n.next(),void n._maybeEnableCycle()):(n.prev(),void n._maybeEnableCycle())})),Wl.on(window,"load.bs.carousel.data-api",(()=>{const e=Zl.find('[data-bs-ride="carousel"]');for(const t of e)oc.getOrCreateInstance(t)})),Cl(oc);const ac={parent:null,toggle:!0},lc={parent:"(null|element)",toggle:"boolean"};class cc extends Gl{static get Default(){return ac}static get DefaultType(){return lc}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e=>e!==this._element)).map((e=>cc.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(Wl.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const n=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[t]="",Wl.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[t]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(Wl.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,vl(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");for(const e of this._triggerArray){const t=hl(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),Wl.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}_isShown(e=this._element){return e.classList.contains("show")}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=pl(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren('[data-bs-toggle="collapse"]');for(const t of e){const e=hl(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}}_getFirstLevelChildren(e){const t=Zl.find(":scope .collapse .collapse",this._config.parent);return Zl.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const n=cc.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=Zl.find('[data-bs-toggle="collapse"]');for(const e of n){const t=cl(e),n=Zl.find(t).filter((e=>e===this._element));null!==t&&n.length&&this._triggerArray.push(e)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}}Wl.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=cl(this),n=Zl.find(t);for(const e of n)cc.getOrCreateInstance(e,{toggle:!1}).toggle()})),Cl(cc);const hc="ArrowUp",uc="ArrowDown",dc=wl()?"top-end":"top-start",pc=wl()?"top-start":"top-end",fc=wl()?"bottom-end":"bottom-start",_c=wl()?"bottom-start":"bottom-end",mc=wl()?"left-start":"right-start",gc=wl()?"right-start":"left-start",vc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},yc={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class bc extends Gl{static get Default(){return vc}static get DefaultType(){return yc}static get NAME(){return"dropdown"}toggle(){return this._isShown()?this.hide():this.show()}show(){if(_l(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!Wl.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const e of[].concat(...document.body.children))Wl.on(e,"mouseover",gl);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add("show"),this._element.classList.add("show"),Wl.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(_l(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!Wl.trigger(this._element,"hide.bs.dropdown",e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))Wl.off(e,"mouseover",gl);this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),Yl.removeDataAttribute(this._menu,"popper"),Wl.trigger(this._element,"hidden.bs.dropdown",e)}}_getConfig(e){if("object"==typeof(e=super._getConfig(e)).reference&&!dl(e.reference)&&"function"!=typeof e.reference.getBoundingClientRect)throw new TypeError(`${"dropdown".toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(void 0===Co)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=this._parent:dl(this._config.reference)?e=pl(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Co.createPopper(e,this._menu,t)}_isShown(){return this._menu.classList.contains("show")}_getPlacement(){const e=this._parent;if(e.classList.contains("dropend"))return mc;if(e.classList.contains("dropstart"))return gc;if(e.classList.contains("dropup-center"))return"top";if(e.classList.contains("dropdown-center"))return"bottom";const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains("dropup")?t?pc:dc:t?_c:fc}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(Yl.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=Zl.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((e=>fl(e)));n.length&&Il(n,t,e===uc,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=bc.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(2===e.button||"keyup"===e.type&&"Tab"!==e.key)return;const t=Zl.find('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled).show');for(const n of t){const t=bc.getInstance(n);if(!t||!1===t._config.autoClose)continue;const i=e.composedPath(),s=i.includes(t._menu);if(i.includes(t._element)||"inside"===t._config.autoClose&&!s||"outside"===t._config.autoClose&&s)continue;if(t._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const r={relatedTarget:t._element};"click"===e.type&&(r.clickEvent=e),t._completeHide(r)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n="Escape"===e.key,i=[hc,uc].includes(e.key);if(!i&&!n)return;if(t&&!n)return;e.preventDefault();const s=Zl.findOne('[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',e.delegateTarget.parentNode),r=bc.getOrCreateInstance(s);if(i)return e.stopPropagation(),r.show(),void r._selectMenuItem(e);r._isShown()&&(e.stopPropagation(),r.hide(),s.focus())}constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=Zl.findOne(".dropdown-menu",this._parent),this._inNavbar=this._detectNavbar()}}Wl.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',bc.dataApiKeydownHandler),Wl.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",bc.dataApiKeydownHandler),Wl.on(document,"click.bs.dropdown.data-api",bc.clearMenus),Wl.on(document,"keyup.bs.dropdown.data-api",bc.clearMenus),Wl.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',(function(e){e.preventDefault(),bc.getOrCreateInstance(this).toggle()})),Cl(bc);class wc{getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"padding-right",(t=>t+e)),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","padding-right",(t=>t+e)),this._setElementAttributes(".sticky-top","margin-right",(t=>t-e))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"padding-right"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","padding-right"),this._resetElementAttributes(".sticky-top","margin-right")}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth();this._applyManipulationCallback(e,(e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const s=window.getComputedStyle(e).getPropertyValue(t);e.style.setProperty(t,`${n(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&Yl.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){this._applyManipulationCallback(e,(e=>{const n=Yl.getDataAttribute(e,t);null!==n?(Yl.removeDataAttribute(e,t),e.style.setProperty(t,n)):e.style.removeProperty(t)}))}_applyManipulationCallback(e,t){if(dl(e))t(e);else for(const n of Zl.find(e,this._element))t(n)}constructor(){this._element=document.body}}const Cc={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ec={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Tc extends Kl{static get Default(){return Cc}static get DefaultType(){return Ec}static get NAME(){return"backdrop"}show(e){if(!this._config.isVisible)return void El(e);this._append();const t=this._getElement();this._config.isAnimated&&vl(t),t.classList.add("show"),this._emulateAnimation((()=>{El(e)}))}hide(e){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation((()=>{this.dispose(),El(e)}))):El(e)}dispose(){this._isAppended&&(Wl.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add("fade"),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=pl(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),Wl.on(e,"mousedown.bs.backdrop",(()=>{El(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(e){Tl(e,this._getElement(),this._config.isAnimated)}constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}}const Ic={autofocus:!0,trapElement:null},kc={autofocus:"boolean",trapElement:"element"};class Sc extends Kl{static get Default(){return Ic}static get DefaultType(){return kc}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Wl.off(document,".bs.focustrap"),Wl.on(document,"focusin.bs.focustrap",(e=>this._handleFocusin(e))),Wl.on(document,"keydown.tab.bs.focustrap",(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,Wl.off(document,".bs.focustrap"))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=Zl.focusableChildren(t);0===n.length?t.focus():"backward"===this._lastTabNavDirection?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){"Tab"===e.key&&(this._lastTabNavDirection=e.shiftKey?"backward":"forward")}constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}}const Nc={backdrop:!0,focus:!0,keyboard:!0},xc={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ac extends Gl{static get Default(){return Nc}static get DefaultType(){return xc}static get NAME(){return"modal"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;Wl.trigger(this._element,"show.bs.modal",{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._backdrop.show((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;Wl.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove("show"),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){for(const e of[window,this._dialog])Wl.off(e,".bs.modal");this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Tc({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Sc({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=Zl.findOne(".modal-body",this._dialog);t&&(t.scrollTop=0),vl(this._element),this._element.classList.add("show");this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Wl.trigger(this._element,"shown.bs.modal",{relatedTarget:e})}),this._dialog,this._isAnimated())}_addEventListeners(){Wl.on(this._element,"keydown.dismiss.bs.modal",(e=>{if("Escape"===e.key)return this._config.keyboard?(e.preventDefault(),void this.hide()):void this._triggerBackdropTransition()})),Wl.on(window,"resize.bs.modal",(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),Wl.on(this._element,"mousedown.dismiss.bs.modal",(e=>{e.target===e.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),Wl.trigger(this._element,"hidden.bs.modal")}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(Wl.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._element.style.overflowY;"hidden"===t||this._element.classList.contains("modal-static")||(e||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static"),this._queueCallback((()=>{this._element.classList.remove("modal-static"),this._queueCallback((()=>{this._element.style.overflowY=t}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const e=wl()?"paddingLeft":"paddingRight";this._element.style[e]=`${t}px`}if(!n&&e){const e=wl()?"paddingRight":"paddingLeft";this._element.style[e]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Ac.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}constructor(e,t){super(e,t),this._dialog=Zl.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new wc,this._addEventListeners()}}Wl.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(e){const t=hl(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),Wl.one(t,"show.bs.modal",(e=>{e.defaultPrevented||Wl.one(t,"hidden.bs.modal",(()=>{fl(this)&&this.focus()}))}));const n=Zl.findOne(".modal.show");n&&Ac.getInstance(n).hide();Ac.getOrCreateInstance(t).toggle(this)})),Ql(Ac),Cl(Ac);const Pc={backdrop:!0,keyboard:!0,scroll:!1},Dc={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Oc extends Gl{static get Default(){return Pc}static get DefaultType(){return Dc}static get NAME(){return"offcanvas"}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;if(Wl.trigger(this._element,"show.bs.offcanvas",{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new wc).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("showing");this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add("show"),this._element.classList.remove("showing"),Wl.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:e})}),this._element,!0)}hide(){if(!this._isShown)return;if(Wl.trigger(this._element,"hide.bs.offcanvas").defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add("hiding"),this._backdrop.hide();this._queueCallback((()=>{this._element.classList.remove("show","hiding"),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new wc).reset(),Wl.trigger(this._element,"hidden.bs.offcanvas")}),this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=Boolean(this._config.backdrop);return new Tc({className:"offcanvas-backdrop",isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?()=>{"static"!==this._config.backdrop?this.hide():Wl.trigger(this._element,"hidePrevented.bs.offcanvas")}:null})}_initializeFocusTrap(){return new Sc({trapElement:this._element})}_addEventListeners(){Wl.on(this._element,"keydown.dismiss.bs.offcanvas",(e=>{"Escape"===e.key&&(this._config.keyboard?this.hide():Wl.trigger(this._element,"hidePrevented.bs.offcanvas"))}))}static jQueryInterface(e){return this.each((function(){const t=Oc.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}}Wl.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const t=hl(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),_l(this))return;Wl.one(t,"hidden.bs.offcanvas",(()=>{fl(this)&&this.focus()}));const n=Zl.findOne(".offcanvas.show");n&&n!==t&&Oc.getInstance(n).hide();Oc.getOrCreateInstance(t).toggle(this)})),Wl.on(window,"load.bs.offcanvas.data-api",(()=>{for(const e of Zl.find(".offcanvas.show"))Oc.getOrCreateInstance(e).show()})),Wl.on(window,"resize.bs.offcanvas",(()=>{for(const e of Zl.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(e).position&&Oc.getOrCreateInstance(e).hide()})),Ql(Oc),Cl(Oc);const Lc=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Rc=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Mc=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Fc=(e,t)=>{const n=e.nodeName.toLowerCase();return t.includes(n)?!Lc.has(n)||Boolean(Rc.test(e.nodeValue)||Mc.test(e.nodeValue)):t.filter((e=>e instanceof RegExp)).some((e=>e.test(n)))},qc={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};const jc={allowList:qc,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Bc={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Wc={entry:"(string|element|function|null)",selector:"(string|element)"};class Hc extends Kl{static get Default(){return jc}static get DefaultType(){return Bc}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((e=>this._resolvePossibleFunction(e))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[t,n]of Object.entries(this._config.content))this._setContent(e,n,t);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Wc)}_setContent(e,t,n){const i=Zl.findOne(n,e);i&&((t=this._resolvePossibleFunction(t))?dl(t)?this._putElementInTemplate(pl(t),i):this._config.html?i.innerHTML=this._maybeSanitize(t):i.textContent=t:i.remove())}_maybeSanitize(e){return this._config.sanitize?function(e,t,n){if(!e.length)return e;if(n&&"function"==typeof n)return n(e);const i=(new window.DOMParser).parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const e of s){const n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const i=[].concat(...e.attributes),s=[].concat(t["*"]||[],t[n]||[]);for(const t of i)Fc(t,s)||e.removeAttribute(t.nodeName)}return i.body.innerHTML}(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return"function"==typeof e?e(this):e}_putElementInTemplate(e,t){if(this._config.html)return t.innerHTML="",void t.append(e);t.textContent=e.textContent}constructor(e){super(),this._config=this._getConfig(e)}}const Uc=new Set(["sanitize","allowList","sanitizeFn"]),zc={AUTO:"auto",TOP:"top",RIGHT:wl()?"left":"right",BOTTOM:"bottom",LEFT:wl()?"right":"left"},$c={allowList:qc,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Vc={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Yc extends Gl{static get Default(){return $c}static get DefaultType(){return Vc}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled){if(e){const t=this._initializeOnDelegatedTarget(e);return t._activeTrigger.click=!t._activeTrigger.click,void(t._isWithActiveTrigger()?t._enter():t._leave())}this._isShown()?this._leave():this._enter()}}dispose(){clearTimeout(this._timeout),Wl.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const e=Wl.trigger(this._element,this.constructor.eventName("show")),t=(ml(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!t)return;this.tip&&(this.tip.remove(),this.tip=null);const n=this._getTipElement();this._element.setAttribute("aria-describedby",n.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(n),Wl.trigger(this._element,this.constructor.eventName("inserted"))),this._popper?this._popper.update():this._popper=this._createPopper(n),n.classList.add("show"),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))Wl.on(e,"mouseover",gl);this._queueCallback((()=>{const e=this._isHovered;this._isHovered=!1,Wl.trigger(this._element,this.constructor.eventName("shown")),e&&this._leave()}),this.tip,this._isAnimated())}hide(){if(!this._isShown())return;if(Wl.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented)return;const e=this._getTipElement();if(e.classList.remove("show"),"ontouchstart"in document.documentElement)for(const e of[].concat(...document.body.children))Wl.off(e,"mouseover",gl);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=!1;this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||e.remove(),this._element.removeAttribute("aria-describedby"),Wl.trigger(this._element,this.constructor.eventName("hidden")),this._disposePopper())}),this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove("fade","show"),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=(e=>{do{e+=Math.floor(1e6*Math.random())}while(document.getElementById(e));return e})(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add("fade"),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Hc({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._config.originalTitle}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains("fade")}_isShown(){return this.tip&&this.tip.classList.contains("show")}_createPopper(e){const t="function"==typeof this._config.placement?this._config.placement.call(this,e,this._element):this._config.placement,n=zc[t.toUpperCase()];return Co.createPopper(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return"string"==typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"==typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"==typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:e=>{this._getTipElement().setAttribute("data-popper-placement",e.state.placement)}}]};return{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if("click"===t)Wl.on(this._element,this.constructor.eventName("click"),this._config.selector,(e=>this.toggle(e)));else if("manual"!==t){const e="hover"===t?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),n="hover"===t?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");Wl.on(this._element,e,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusin"===e.type?"focus":"hover"]=!0,t._enter()})),Wl.on(this._element,n,this._config.selector,(e=>{const t=this._initializeOnDelegatedTarget(e);t._activeTrigger["focusout"===e.type?"focus":"hover"]=t._element.contains(e.relatedTarget),t._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},Wl.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._config.originalTitle;e&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",e),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=Yl.getDataAttributes(this._element);for(const e of Object.keys(t))Uc.has(e)&&delete t[e];return e={...t,..."object"==typeof e&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=!1===e.container?document.body:pl(e.container),"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e.originalTitle=this._element.getAttribute("title")||"","number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=Yc.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}constructor(e,t){if(void 0===Co)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=!1,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners()}}Cl(Yc);const Kc={...Yc.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Gc={...Yc.DefaultType,content:"(null|string|element|function)"};class Qc extends Yc{static get Default(){return Kc}static get DefaultType(){return Gc}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each((function(){const t=Qc.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Cl(Qc);const Xc={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null},Jc={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element"};class Zc extends Gl{static get Default(){return Xc}static get DefaultType(){return Jc}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=pl(e.target)||document.body,e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(Wl.off(this._config.target,"click.bs.scrollspy"),Wl.on(this._config.target,"click.bs.scrollspy","[href]",(e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,i=t.offsetTop-this._element.offsetTop;if(n.scrollTo)return void n.scrollTo({top:i,behavior:"smooth"});n.scrollTop=i}})))}_getNewObserver(){const e={root:this._rootElement,threshold:[.1,.5,1],rootMargin:this._getRootMargin()};return new IntersectionObserver((e=>this._observerCallback(e)),e)}_observerCallback(e){const t=e=>this._targetLinks.get(`#${e.target.id}`),n=e=>{this._previousScrollData.visibleEntryTop=e.target.offsetTop,this._process(t(e))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const r of e){if(!r.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(r));continue}const e=r.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&e){if(n(r),!i)return}else s||e||n(r)}}_getRootMargin(){return this._config.offset?`${this._config.offset}px 0px -30%`:this._config.rootMargin}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Zl.find("[href]",this._config.target);for(const t of e){if(!t.hash||_l(t))continue;const e=Zl.findOne(t.hash,this._element);fl(e)&&(this._targetLinks.set(t.hash,t),this._observableSections.set(t.hash,e))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add("active"),this._activateParents(e),Wl.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:e}))}_activateParents(e){if(e.classList.contains("dropdown-item"))Zl.findOne(".dropdown-toggle",e.closest(".dropdown")).classList.add("active");else for(const t of Zl.parents(e,".nav, .list-group"))for(const e of Zl.prev(t,".nav-link, .nav-item > .nav-link, .list-group-item"))e.classList.add("active")}_clearActiveClass(e){e.classList.remove("active");const t=Zl.find("[href].active",e);for(const e of t)e.classList.remove("active")}static jQueryInterface(e){return this.each((function(){const t=Zc.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}}Wl.on(window,"load.bs.scrollspy.data-api",(()=>{for(const e of Zl.find('[data-bs-spy="scroll"]'))Zc.getOrCreateInstance(e)})),Cl(Zc);const eh="ArrowLeft",th="ArrowRight",nh="ArrowUp",ih="ArrowDown",sh='.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), [data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';class rh extends Gl{static get NAME(){return"tab"}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?Wl.trigger(t,"hide.bs.tab",{relatedTarget:e}):null;Wl.trigger(e,"show.bs.tab",{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add("active"),this._activate(hl(e));this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.focus(),e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),Wl.trigger(e,"shown.bs.tab",{relatedTarget:t})):e.classList.add("show")}),e,e.classList.contains("fade"))}_deactivate(e,t){if(!e)return;e.classList.remove("active"),e.blur(),this._deactivate(hl(e));this._queueCallback((()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),Wl.trigger(e,"hidden.bs.tab",{relatedTarget:t})):e.classList.remove("show")}),e,e.classList.contains("fade"))}_keydown(e){if(![eh,th,nh,ih].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=[th,ih].includes(e.key),n=Il(this._getChildren().filter((e=>!_l(e))),e.target,t,!0);n&&rh.getOrCreateInstance(n).show()}_getChildren(){return Zl.find(sh,this._parent)}_getActiveElem(){return this._getChildren().find((e=>this._elemIsActive(e)))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const e of t)this._setInitialAttributesOnChild(e)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=hl(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`#${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains("dropdown"))return;const i=(e,i)=>{const s=Zl.findOne(e,n);s&&s.classList.toggle(i,t)};i(".dropdown-toggle","active"),i(".dropdown-menu","show"),i(".dropdown-item","active"),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains("active")}_getInnerElement(e){return e.matches(sh)?e:Zl.findOne(sh,e)}_getOuterElement(e){return e.closest(".nav-item, .list-group-item")||e}static jQueryInterface(e){return this.each((function(){const t=rh.getOrCreateInstance(this);if("string"==typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e]()}}))}constructor(e){super(e),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Wl.on(this._element,"keydown.bs.tab",(e=>this._keydown(e))))}}Wl.on(document,"click.bs.tab",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),_l(this)||rh.getOrCreateInstance(this).show()})),Wl.on(window,"load.bs.tab",(()=>{for(const e of Zl.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))rh.getOrCreateInstance(e)})),Cl(rh);const oh={animation:"boolean",autohide:"boolean",delay:"number"},ah={animation:!0,autohide:!0,delay:5e3};class lh extends Gl{static get Default(){return ah}static get DefaultType(){return oh}static get NAME(){return"toast"}show(){if(Wl.trigger(this._element,"show.bs.toast").defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");this._element.classList.remove("hide"),vl(this._element),this._element.classList.add("show","showing"),this._queueCallback((()=>{this._element.classList.remove("showing"),Wl.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()}),this._element,this._config.animation)}hide(){if(!this.isShown())return;if(Wl.trigger(this._element,"hide.bs.toast").defaultPrevented)return;this._element.classList.add("showing"),this._queueCallback((()=>{this._element.classList.add("hide"),this._element.classList.remove("showing","show"),Wl.trigger(this._element,"hidden.bs.toast")}),this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove("show"),super.dispose()}isShown(){return this._element.classList.contains("show")}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){Wl.on(this._element,"mouseover.bs.toast",(e=>this._onInteraction(e,!0))),Wl.on(this._element,"mouseout.bs.toast",(e=>this._onInteraction(e,!1))),Wl.on(this._element,"focusin.bs.toast",(e=>this._onInteraction(e,!0))),Wl.on(this._element,"focusout.bs.toast",(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=lh.getOrCreateInstance(this,e);if("string"==typeof e){if(void 0===t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}}Ql(lh),Cl(lh);const ch={filmForm:document.getElementById("film-form"),filmName:document.getElementById("film"),filmRating:document.getElementById("rating"),filmSubmitBtn:document.getElementById("film-submit-btn"),authModalBtn:document.getElementById("my-modal-btn"),authModal:document.getElementById("my-modal")};ch.authModalBtn.addEventListener("click",(function(){po=document.getElementById("reg-btn"),fo=document.getElementById("log-btn"),_o=document.querySelector(".btn-close"),mo=document.getElementById("modal-form"),po.addEventListener("click",vo),fo.addEventListener("click",yo),mo.addEventListener("submit",lo),_o.addEventListener("click",(()=>{po.removeEventListener("click",vo),fo.removeEventListener("click",yo)}))})),window.addEventListener("load",(()=>{null!==sessionStorage.getItem("userData")?(console.log(111),ro.renderCurrentUserFilmList(JSON.parse(sessionStorage.getItem("userData")).userName),ho(),uo()):ro.renderFilmList()})),ch.filmForm.addEventListener("submit",(function(e){if(e.preventDefault(),go(ch.filmName.value.length,ch.filmRating.value.length)){const e={title:ch.filmName.value.trim(),rating:ch.filmRating.value.trim()};if(ch.filmSubmitBtn.disabled=!0,null!==sessionStorage.getItem("userData")){const t=JSON.parse(sessionStorage.getItem("userData")).userName;console.log(t),ro.createWithAuth(e,t),ch.filmForm.reset(),ch.filmSubmitBtn.disabled=!1,ro.renderCurrentUserFilmList(t)}else ro.createWithoutAuth(e),ch.filmForm.reset(),ch.filmSubmitBtn.disabled=!1,ro.renderFilmList()}})),ch.filmForm.addEventListener("input",(()=>{ch.filmSubmitBtn.disabled=!go(ch.filmName.value.length,ch.filmRating.value.length)}));
//# sourceMappingURL=index.4874ffc9.js.map
