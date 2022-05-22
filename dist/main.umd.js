(function(b){typeof define=="function"&&define.amd?define(b):b()})(function(){"use strict";var Dn=Object.defineProperty;var vt=Object.getOwnPropertySymbols;var Hn=Object.prototype.hasOwnProperty,Rn=Object.prototype.propertyIsEnumerable;var wt=(b,v,w)=>v in b?Dn(b,v,{enumerable:!0,configurable:!0,writable:!0,value:w}):b[v]=w,W=(b,v)=>{for(var w in v||(v={}))Hn.call(v,w)&&wt(b,w,v[w]);if(vt)for(var w of vt(v))Rn.call(v,w)&&wt(b,w,v[w]);return b};var b="",v="",w="";/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under Apache 2.0 or GPL 2.0 at your option.
* If derivative product is not compatible with one of licenses, you can pick one of licenses.
*
* @license Apache 2.0
* @license GPL 2.0
* @version 2.2.1
*/const R=/^[a-z0-9]+(-[a-z0-9]+)*$/,C=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function fe(e){return W(W({},C),e)}function Ct(e,t){const n=W({},e);for(const c in C){const o=c;if(t[o]!==void 0){const r=t[o];if(n[o]===void 0){n[o]=r;continue}switch(o){case"rotate":n[o]=(n[o]+r)%4;break;case"hFlip":case"vFlip":n[o]=r!==n[o];break;default:n[o]=r}}}return n}function Te(e,t,n=!1){function c(r,i){if(e.icons[r]!==void 0)return Object.assign({},e.icons[r]);if(i>5)return null;const s=e.aliases;if(s&&s[r]!==void 0){const a=s[r],f=c(a.parent,i+1);return f&&Ct(f,a)}const l=e.chars;return!i&&l&&l[r]!==void 0?c(l[r],i+1):null}const o=c(t,0);if(o)for(const r in C)o[r]===void 0&&e[r]!==void 0&&(o[r]=e[r]);return o&&n?fe(o):o}function It(e){for(const t in C)if(e[t]!==void 0)return!0;return!1}function Fe(e,t,n){n=n||{};const c=[];if(typeof e!="object"||typeof e.icons!="object")return c;e.not_found instanceof Array&&e.not_found.forEach(i=>{t(i,null),c.push(i)});const o=e.icons;Object.keys(o).forEach(i=>{const s=Te(e,i,!0);s&&(t(i,s),c.push(i))});const r=n.aliases||"all";if(r!=="none"&&typeof e.aliases=="object"){const i=e.aliases;Object.keys(i).forEach(s=>{if(r==="variations"&&It(i[s]))return;const l=Te(e,s,!0);l&&(t(s,l),c.push(s))})}return c}const ue={provider:"string",aliases:"object",not_found:"object"};for(const e in C)ue[e]=typeof C[e];function Ne(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object")return null;for(const o in ue)if(e[o]!==void 0&&typeof e[o]!==ue[o])return null;const n=t.icons;for(const o in n){const r=n[o];if(!o.match(R)||typeof r.body!="string")return null;for(const i in C)if(r[i]!==void 0&&typeof r[i]!=typeof C[i])return null}const c=t.aliases;if(c)for(const o in c){const r=c[o],i=r.parent;if(!o.match(R)||typeof i!="string"||!n[i]&&!c[i])return null;for(const s in C)if(r[s]!==void 0&&typeof r[s]!=typeof C[s])return null}return t}const T=(e,t,n,c="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;c=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const s=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:c,prefix:l,name:s};return t&&!F(a)?null:a}const r=o[0],i=r.split("-");if(i.length>1){const s={provider:c,prefix:i.shift(),name:i.join("-")};return t&&!F(s)?null:s}if(n&&c===""){const s={provider:c,prefix:"",name:r};return t&&!F(s,n)?null:s}return null},F=(e,t)=>e?!!((e.provider===""||e.provider.match(R))&&(t&&e.prefix===""||e.prefix.match(R))&&e.name.match(R)):!1,Ve=1;let S=Object.create(null);try{const e=window||self;e&&e._iconifyStorage.version===Ve&&(S=e._iconifyStorage.storage)}catch{}function xt(){try{const e=window||self;e&&!e._iconifyStorage&&(e._iconifyStorage={version:Ve,storage:S})}catch{}}function At(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function I(e,t){S[e]===void 0&&(S[e]=Object.create(null));const n=S[e];return n[t]===void 0&&(n[t]=At(e,t)),n[t]}function de(e,t){if(!Ne(t))return[];const n=Date.now();return Fe(t,(c,o)=>{o?e.icons[c]=o:e.missing[c]=n})}function jt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]=Object.freeze(fe(n)),!0}catch{}return!1}function he(e,t){const n=e.icons[t];return n===void 0?null:n}function St(e,t){let n=[],c;return typeof e=="string"?c=[e]:c=Object.keys(S),c.forEach(o=>{let r;typeof o=="string"&&typeof t=="string"?r=[t]:r=S[o]===void 0?[]:Object.keys(S[o]),r.forEach(i=>{const s=I(o,i),l=Object.keys(s.icons).map(a=>(o!==""?"@"+o+":":"")+i+":"+a);n=n.concat(l)})}),n}let Z=!1;function Ot(e){return typeof e=="boolean"&&(Z=e),Z}function X(e){const t=typeof e=="string"?T(e,!0,Z):e;return t?he(I(t.provider,t.prefix),t.name):null}function De(e,t){const n=T(e,!0,Z);if(!n)return!1;const c=I(n.provider,n.prefix);return jt(c,n.name,t)}function He(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=typeof e.provider=="string"?e.provider:""),Z&&t===""&&(typeof e.prefix!="string"||e.prefix==="")){let c=!1;return Ne(e)&&(e.prefix="",Fe(e,(o,r)=>{r&&De(o,r)&&(c=!0)})),c}if(typeof e.prefix!="string"||!F({provider:t,prefix:e.prefix,name:"a"}))return!1;const n=I(t,e.prefix);return!!de(n,e)}function Mt(e){return X(e)!==null}function Et(e){const t=X(e);return t?W({},t):null}const q=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function ee(e,t){const n={};for(const c in e){const o=c;if(n[o]=e[o],t[o]===void 0)continue;const r=t[o];switch(o){case"inline":case"slice":typeof r=="boolean"&&(n[o]=r);break;case"hFlip":case"vFlip":r===!0&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":typeof r=="string"&&r!==""&&(n[o]=r);break;case"width":case"height":(typeof r=="string"&&r!==""||typeof r=="number"&&r||r===null)&&(n[o]=r);break;case"rotate":typeof r=="number"&&(n[o]+=r);break}}return n}const Lt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,kt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function te(e,t,n){if(t===1)return e;if(n=n===void 0?100:n,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const c=e.split(Lt);if(c===null||!c.length)return e;const o=[];let r=c.shift(),i=kt.test(r);for(;;){if(i){const s=parseFloat(r);isNaN(s)?o.push(r):o.push(Math.ceil(s*t*n)/n)}else o.push(r);if(r=c.shift(),r===void 0)return o.join("");i=!i}}function Pt(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}function pe(e,t){const n={left:e.left,top:e.top,width:e.width,height:e.height};let c=e.body;[e,t].forEach(s=>{const l=[],a=s.hFlip,f=s.vFlip;let u=s.rotate;a?f?u+=2:(l.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),l.push("scale(-1 1)"),n.top=n.left=0):f&&(l.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),l.push("scale(1 -1)"),n.top=n.left=0);let d;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:d=n.height/2+n.top,l.unshift("rotate(90 "+d.toString()+" "+d.toString()+")");break;case 2:l.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:d=n.width/2+n.left,l.unshift("rotate(-90 "+d.toString()+" "+d.toString()+")");break}u%2===1&&((n.left!==0||n.top!==0)&&(d=n.left,n.left=n.top,n.top=d),n.width!==n.height&&(d=n.width,n.width=n.height,n.height=d)),l.length&&(c='<g transform="'+l.join(" ")+'">'+c+"</g>")});let o,r;t.width===null&&t.height===null?(r="1em",o=te(r,n.width/n.height)):t.width!==null&&t.height!==null?(o=t.width,r=t.height):t.height!==null?(r=t.height,o=te(r,n.width/n.height)):(o=t.width,r=te(o,n.height/n.width)),o==="auto"&&(o=n.width),r==="auto"&&(r=n.height),o=typeof o=="string"?o:o.toString()+"",r=typeof r=="string"?r:r.toString()+"";const i={attributes:{width:o,height:r,preserveAspectRatio:Pt(t),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:c};return t.inline&&(i.inline=!0),i}function Tt(e,t){return pe(fe(e),t?ee(q,t):q)}const Ft=/\sid="(\S+)"/g,Nt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Vt=0;function Re(e,t=Nt){const n=[];let c;for(;c=Ft.exec(e);)n.push(c[1]);return n.length&&n.forEach(o=>{const r=typeof t=="function"?t(o):t+(Vt++).toString(),i=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),e}const Ze="iconify2",_="iconify",qe=_+"-count",_e=_+"-version",Ue=36e5,Dt=168,N={local:!0,session:!0};let ge=!1;const $e={local:0,session:0},Qe={local:[],session:[]};let ne=typeof window=="undefined"?{}:window;function Be(e){const t=e+"Storage";try{if(ne&&ne[t]&&typeof ne[t].length=="number")return ne[t]}catch{}return N[e]=!1,null}function me(e,t,n){try{return e.setItem(qe,n.toString()),$e[t]=n,!0}catch{return!1}}function ze(e){const t=e.getItem(qe);if(t){const n=parseInt(t);return n||0}return 0}function Ht(e,t){try{e.setItem(_e,Ze)}catch{}me(e,t,0)}function Rt(e){try{const t=ze(e);for(let n=0;n<t;n++)e.removeItem(_+n.toString())}catch{}}const Ke=()=>{if(ge)return;ge=!0;const e=Math.floor(Date.now()/Ue)-Dt;function t(n){const c=Be(n);if(!c)return;const o=r=>{const i=_+r.toString(),s=c.getItem(i);if(typeof s!="string")return!1;let l=!0;try{const a=JSON.parse(s);if(typeof a!="object"||typeof a.cached!="number"||a.cached<e||typeof a.provider!="string"||typeof a.data!="object"||typeof a.data.prefix!="string")l=!1;else{const f=a.provider,u=a.data.prefix,d=I(f,u);l=de(d,a.data).length>0}}catch{l=!1}return l||c.removeItem(i),l};try{const r=c.getItem(_e);if(r!==Ze){r&&Rt(c),Ht(c,n);return}let i=ze(c);for(let s=i-1;s>=0;s--)o(s)||(s===i-1?i--:Qe[n].push(s));me(c,n,i)}catch{}}for(const n in N)t(n)},Zt=(e,t)=>{ge||Ke();function n(c){if(!N[c])return!1;const o=Be(c);if(!o)return!1;let r=Qe[c].shift();if(r===void 0&&(r=$e[c],!me(o,c,r+1)))return!1;try{const i={cached:Math.floor(Date.now()/Ue),provider:e,data:t};o.setItem(_+r.toString(),JSON.stringify(i))}catch{return!1}return!0}!Object.keys(t.icons).length||(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))},ye={};function Ge(e,t){switch(e){case"local":case"session":N[e]=t;break;case"all":for(const n in N)N[n]=t;break}}const be=Object.create(null);function Je(e,t){be[e]=t}function ve(e){return be[e]||be[""]}function we(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path===void 0?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:e.random===!0,index:e.index?e.index:0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const oe=Object.create(null),U=["https://api.simplesvg.com","https://api.unisvg.com"],re=[];for(;U.length>0;)U.length===1||Math.random()>.5?re.push(U.shift()):re.push(U.pop());oe[""]=we({resources:["https://api.iconify.design"].concat(re)});function Ye(e,t){const n=we(t);return n===null?!1:(oe[e]=n,!0)}function ce(e){return oe[e]}function qt(){return Object.keys(oe)}const Ce=(e,t)=>{let n=e,c=n.indexOf("?")!==-1;function o(r){switch(typeof r){case"boolean":return r?"true":"false";case"number":return encodeURIComponent(r);case"string":return encodeURIComponent(r);default:throw new Error("Invalid parameter")}}return Object.keys(t).forEach(r=>{let i;try{i=o(t[r])}catch{return}n+=(c?"&":"?")+encodeURIComponent(r)+"="+i,c=!0}),n},We={},ie={};let se=(()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}return null})();function _t(e){se=e}function Ut(){return se}function $t(e,t){const n=ce(e);if(!n)return 0;let c;if(!n.maxURL)c=0;else{let r=0;n.resources.forEach(s=>{r=Math.max(r,s.length)});const i=Ce(t+".json",{icons:""});c=n.maxURL-r-n.path.length-i.length}const o=e+":"+t;return ie[e]=n.path,We[o]=c,c}function Qt(e){return e===404}const Bt=(e,t,n)=>{const c=[];let o=We[t];o===void 0&&(o=$t(e,t));const r="icons";let i={type:r,provider:e,prefix:t,icons:[]},s=0;return n.forEach((l,a)=>{s+=l.length+1,s>=o&&a>0&&(c.push(i),i={type:r,provider:e,prefix:t,icons:[]},s=l.length),i.icons.push(l)}),c.push(i),c};function zt(e){if(typeof e=="string"){if(ie[e]===void 0){const t=ce(e);if(!t)return"/";ie[e]=t.path}return ie[e]}return"/"}const Kt={prepare:Bt,send:(e,t,n)=>{if(!se){n("abort",424);return}let c=zt(t.provider);switch(t.type){case"icons":{const r=t.prefix,s=t.icons.join(",");c+=Ce(r+".json",{icons:s});break}case"custom":{const r=t.uri;c+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;se(e+c).then(r=>{const i=r.status;if(i!==200){setTimeout(()=>{n(Qt(i)?"abort":"next",i)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})}};function Gt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let c={provider:"",prefix:"",name:""};return e.forEach(o=>{if(c.name===o.name&&c.prefix===o.prefix&&c.provider===o.provider)return;c=o;const r=o.provider,i=o.prefix,s=o.name;n[r]===void 0&&(n[r]=Object.create(null));const l=n[r];l[i]===void 0&&(l[i]=I(r,i));const a=l[i];let f;a.icons[s]!==void 0?f=t.loaded:i===""||a.missing[s]!==void 0?f=t.missing:f=t.pending;const u={provider:r,prefix:i,name:s};f.push(u)}),t}const O=Object.create(null),Ie=Object.create(null);function Xe(e,t){e.forEach(n=>{const c=n.provider;if(O[c]===void 0)return;const o=O[c],r=n.prefix,i=o[r];i&&(o[r]=i.filter(s=>s.id!==t))})}function Jt(e,t){Ie[e]===void 0&&(Ie[e]=Object.create(null));const n=Ie[e];n[t]||(n[t]=!0,setTimeout(()=>{if(n[t]=!1,O[e]===void 0||O[e][t]===void 0)return;const c=O[e][t].slice(0);if(!c.length)return;const o=I(e,t);let r=!1;c.forEach(i=>{const s=i.icons,l=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==t)return!0;const f=a.name;if(o.icons[f]!==void 0)s.loaded.push({provider:e,prefix:t,name:f});else if(o.missing[f]!==void 0)s.missing.push({provider:e,prefix:t,name:f});else return r=!0,!0;return!1}),s.pending.length!==l&&(r||Xe([{provider:e,prefix:t}],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let Yt=0;function Wt(e,t,n){const c=Yt++,o=Xe.bind(null,n,c);if(!t.pending.length)return o;const r={id:c,icons:t,callback:e,abort:o};return n.forEach(i=>{const s=i.provider,l=i.prefix;O[s]===void 0&&(O[s]=Object.create(null));const a=O[s];a[l]===void 0&&(a[l]=[]),a[l].push(r)}),o}function Xt(e,t=!0,n=!1){const c=[];return e.forEach(o=>{const r=typeof o=="string"?T(o,!1,n):o;(!t||F(r,n))&&c.push({provider:r.provider,prefix:r.prefix,name:r.name})}),c}var et={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function en(e,t,n,c){const o=e.resources.length,r=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let p=e.resources.slice(0);for(i=[];p.length>1;){const y=Math.floor(Math.random()*p.length);i.push(p[y]),p=p.slice(0,y).concat(p.slice(y+1))}i=i.concat(p)}else i=e.resources.slice(r).concat(e.resources.slice(0,r));const s=Date.now();let l="pending",a=0,f,u=null,d=[],h=[];typeof c=="function"&&h.push(c);function g(){u&&(clearTimeout(u),u=null)}function m(){l==="pending"&&(l="aborted"),g(),d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function J(p,y){y&&(h=[]),typeof p=="function"&&h.push(p)}function A(){return{startTime:s,payload:t,status:l,queriesSent:a,queriesPending:d.length,subscribe:J,abort:m}}function M(){l="failed",h.forEach(p=>{p(void 0,f)})}function j(){d.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),d=[]}function E(p,y,Y){const ae=y!=="success";switch(d=d.filter(P=>P!==p),l){case"pending":break;case"failed":if(ae||!e.dataAfterTimeout)return;break;default:return}if(y==="abort"){f=Y,M();return}if(ae){f=Y,d.length||(i.length?L():M());return}if(g(),j(),!e.random){const P=e.resources.indexOf(p.resource);P!==-1&&P!==e.index&&(e.index=P)}l="completed",h.forEach(P=>{P(Y)})}function L(){if(l!=="pending")return;g();const p=i.shift();if(p===void 0){if(d.length){u=setTimeout(()=>{g(),l==="pending"&&(j(),M())},e.timeout);return}M();return}const y={status:"pending",resource:p,callback:(Y,ae)=>{E(y,Y,ae)}};d.push(y),a++,u=setTimeout(L,e.rotate),n(p,t,y.callback)}return setTimeout(L),A}function tn(e){if(typeof e!="object"||typeof e.resources!="object"||!(e.resources instanceof Array)||!e.resources.length)throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in et)e[n]!==void 0?t[n]=e[n]:t[n]=et[n];return t}function tt(e){const t=tn(e);let n=[];function c(){n=n.filter(s=>s().status==="pending")}function o(s,l,a){const f=en(t,s,l,(u,d)=>{c(),a&&a(u,d)});return n.push(f),f}function r(s){const l=n.find(a=>s(a));return l!==void 0?l:null}return{query:o,find:r,setIndex:s=>{t.index=s},getIndex:()=>t.index,cleanup:c}}function nt(){}const xe=Object.create(null);function nn(e){if(xe[e]===void 0){const t=ce(e);if(!t)return;const n=tt(t),c={config:t,redundancy:n};xe[e]=c}return xe[e]}function ot(e,t,n){let c,o;if(typeof e=="string"){const r=ve(e);if(!r)return n(void 0,424),nt;o=r.send;const i=nn(e);i&&(c=i.redundancy)}else{const r=we(e);if(r){c=tt(r);const i=e.resources?e.resources[0]:"",s=ve(i);s&&(o=s.send)}}return!c||!o?(n(void 0,424),nt):c.query(t,o,n)().abort}function rt(){}const x=Object.create(null),Ae=Object.create(null),je=Object.create(null),Se=Object.create(null);function on(e,t){je[e]===void 0&&(je[e]=Object.create(null));const n=je[e];n[t]||(n[t]=!0,setTimeout(()=>{n[t]=!1,Jt(e,t)}))}const ct=Object.create(null);function rn(e,t,n){function c(){const s=(e===""?"":"@"+e+":")+t,l=Math.floor(Date.now()/6e4);ct[s]<l&&(ct[s]=l,console.error('Unable to retrieve icons for "'+s+'" because API is not configured properly.'))}Ae[e]===void 0&&(Ae[e]=Object.create(null));const o=Ae[e];Se[e]===void 0&&(Se[e]=Object.create(null));const r=Se[e];x[e]===void 0&&(x[e]=Object.create(null));const i=x[e];o[t]===void 0?o[t]=n:o[t]=o[t].concat(n).sort(),r[t]||(r[t]=!0,setTimeout(()=>{r[t]=!1;const s=o[t];delete o[t];const l=ve(e);if(!l){c();return}l.prepare(e,t,s).forEach(f=>{ot(e,f,(u,d)=>{const h=I(e,t);if(typeof u!="object"){if(d!==404)return;const g=Date.now();f.icons.forEach(m=>{h.missing[m]=g})}else try{const g=de(h,u);if(!g.length)return;const m=i[t];g.forEach(J=>{delete m[J]}),ye.store&&ye.store(e,u)}catch(g){console.error(g)}on(e,t)})})}))}const it=e=>{const t=e.provider,n=e.prefix;return x[t]&&x[t][n]&&x[t][n][e.name]!==void 0},Oe=(e,t)=>{const n=Xt(e,!0,Ot()),c=Gt(n);if(!c.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(c.loaded,c.missing,c.pending,rt)}),()=>{a=!1}}const o=Object.create(null),r=[];let i,s;c.pending.forEach(a=>{const f=a.provider,u=a.prefix;if(u===s&&f===i)return;i=f,s=u,r.push({provider:f,prefix:u}),x[f]===void 0&&(x[f]=Object.create(null));const d=x[f];d[u]===void 0&&(d[u]=Object.create(null)),o[f]===void 0&&(o[f]=Object.create(null));const h=o[f];h[u]===void 0&&(h[u]=[])});const l=Date.now();return c.pending.forEach(a=>{const f=a.provider,u=a.prefix,d=a.name,h=x[f][u];h[d]===void 0&&(h[d]=l,o[f][u].push(d))}),r.forEach(a=>{const f=a.provider,u=a.prefix;o[f][u].length&&rn(f,u,o[f][u])}),t?Wt(t,c,r):rt},cn=e=>new Promise((t,n)=>{const c=typeof e=="string"?T(e):e;Oe([c||e],o=>{if(o.length&&c){const r=I(c.provider,c.prefix),i=he(r,c.name);if(i){t(i);return}}n(e)})}),V="iconifyFinder"+Date.now(),$="iconifyData"+Date.now();function st(e,t,n,c){let o;try{o=document.createElement("span")}catch{return c?"":null}const r=pe(n,ee(q,t)),i=e.element,s=e.finder,l=e.name,a=i?i.getAttribute("class"):"",f=s?s.classFilter(a?a.split(/\s+/):[]):[],u="iconify iconify--"+l.prefix+(l.provider===""?"":" iconify--"+l.provider)+(f.length?" "+f.join(" "):""),d='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="'+u+'">'+Re(r.body)+"</svg>";o.innerHTML=d;const h=o.childNodes[0],g=h.style,m=r.attributes;if(Object.keys(m).forEach(A=>{h.setAttribute(A,m[A])}),r.inline&&(g.verticalAlign="-0.125em"),i){const A=i.attributes;for(let j=0;j<A.length;j++){const E=A.item(j);if(E){const L=E.name;if(L!=="class"&&L!=="style"&&m[L]===void 0)try{h.setAttribute(L,E.value)}catch{}}}const M=i.style;for(let j=0;j<M.length;j++){const E=M[j];g[E]=M[E]}}if(s){const A={name:l,status:"loaded",customisations:t};h[$]=A,h[V]=s}const J=c?o.innerHTML:h;return i&&i.parentNode?i.parentNode.replaceChild(h,i):o.removeChild(h),J}let k=[];function Q(e){for(let t=0;t<k.length;t++){const n=k[t];if((typeof n.node=="function"?n.node():n.node)===e)return n}}function lt(e,t=!1){let n=Q(e);return n?(n.temporary&&(n.temporary=t),n):(n={node:e,temporary:t},k.push(n),n)}function sn(){if(document.documentElement)return lt(document.documentElement);k.push({node:()=>document.documentElement})}function ln(e){k=k.filter(t=>{const n=typeof t.node=="function"?t.node():t.node;return e!==n})}function B(){return k}function an(e){const t=document;t.readyState==="complete"||t.readyState!=="loading"&&!t.documentElement.doScroll?e():(t.addEventListener("DOMContentLoaded",e),window.addEventListener("load",e))}let z=null;const fn={childList:!0,subtree:!0,attributes:!0};function at(e){if(!e.observer)return;const t=e.observer;t.pendingScan||(t.pendingScan=setTimeout(()=>{delete t.pendingScan,z&&z(e)}))}function un(e,t){if(!e.observer)return;const n=e.observer;if(!n.pendingScan)for(let c=0;c<t.length;c++){const o=t[c];if(o.addedNodes&&o.addedNodes.length>0||o.type==="attributes"&&o.target[V]!==void 0){n.paused||at(e);return}}}function ft(e,t){e.observer.instance.observe(t,fn)}function le(e){let t=e.observer;if(t&&t.instance)return;const n=typeof e.node=="function"?e.node():e.node;!n||(t||(t={paused:0},e.observer=t),t.instance=new MutationObserver(un.bind(null,e)),ft(e,n),t.paused||at(e))}function ut(){B().forEach(le)}function dt(e){if(!e.observer)return;const t=e.observer;t.pendingScan&&(clearTimeout(t.pendingScan),delete t.pendingScan),t.instance&&(t.instance.disconnect(),delete t.instance)}function dn(e){const t=z!==null;if(z!==e&&(z=e,t&&B().forEach(dt)),t){ut();return}an(ut)}function Me(e){(e?[e]:B()).forEach(t=>{if(!t.observer){t.observer={paused:1};return}const n=t.observer;if(n.paused++,n.paused>1||!n.instance)return;n.instance.disconnect()})}function hn(e){if(e){const t=Q(e);t&&Me(t)}else Me()}function Ee(e){(e?[e]:B()).forEach(t=>{if(!t.observer){le(t);return}const n=t.observer;if(n.paused&&(n.paused--,!n.paused)){const c=typeof t.node=="function"?t.node():t.node;if(c)n.instance?ft(t,c):le(t);else return}})}function pn(e){if(e){const t=Q(e);t&&Ee(t)}else Ee()}function ht(e,t=!1){const n=lt(e,t);return le(n),n}function pt(e){const t=Q(e);t&&(dt(t),ln(e))}const Le=[];function gn(e){Le.indexOf(e)===-1&&Le.push(e)}function gt(e){return typeof e=="string"&&(e=T(e)),e===null||!F(e)?null:e}function mn(e,t){const n=Object.keys(e),c=Object.keys(t);if(n.length!==c.length)return!1;for(let o=0;o<n.length;o++){const r=n[o];if(t[r]!==e[r])return!1}return!0}function yn(e){const t=[];Le.forEach(c=>{const o=c.find(e);Array.prototype.forEach.call(o,r=>{const i=r;if(i[V]!==void 0&&i[V]!==c)return;const s=gt(c.name(i));if(s===null)return;i[V]=c;const l={element:i,finder:c,name:s};t.push(l)})});const n=e.querySelectorAll("svg.iconify");return Array.prototype.forEach.call(n,c=>{const o=c,r=o[V],i=o[$];if(!r||!i)return;const s=gt(r.name(o));if(s===null)return;let l=!1,a;if(s.prefix!==i.name.prefix||s.name!==i.name.name?l=!0:(a=r.customisations(o),mn(i.customisations,a)||(l=!0)),l){const f={element:o,finder:r,name:s,customisations:a};t.push(f)}}),t}let K=!1;function bn(){K||(K=!0,setTimeout(()=>{K&&(K=!1,D())}))}const vn=(e,t)=>e!==null&&t!==null&&e.name===t.name&&e.prefix===t.prefix;function wn(e){const t=Q(e);t?D(t):D({node:e,temporary:!0},!0)}function D(e,t=!1){K=!1;const n=Object.create(null);(e?[e]:B()).forEach(c=>{const o=typeof c.node=="function"?c.node():c.node;if(!o||!o.querySelectorAll)return;let r=!1,i=!1;yn(o).forEach(s=>{const l=s.element,a=s.name,f=a.provider,u=a.prefix,d=a.name;let h=l[$];if(h!==void 0&&vn(h.name,a))switch(h.status){case"missing":return;case"loading":if(it({provider:f,prefix:u,name:d})){r=!0;return}}const g=I(f,u);if(g.icons[d]!==void 0){!i&&c.observer&&(Me(c),i=!0);const m=s.customisations!==void 0?s.customisations:s.finder.customisations(l);st(s,m,he(g,d));return}if(g.missing[d]){h={name:a,status:"missing",customisations:{}},l[$]=h;return}if(!it({provider:f,prefix:u,name:d})){n[f]===void 0&&(n[f]=Object.create(null));const m=n[f];m[u]===void 0&&(m[u]=Object.create(null)),m[u][d]=!0}h={name:a,status:"loading",customisations:{}},l[$]=h,r=!0}),c.temporary&&!r?pt(o):t&&r?ht(o,!0):i&&c.observer&&Ee(c)}),Object.keys(n).forEach(c=>{const o=n[c];Object.keys(o).forEach(r=>{Oe(Object.keys(o[r]).map(i=>({provider:c,prefix:r,name:i})),bn)})})}function Cn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function c(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:c(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?c(r):0)}}return t}const mt=/[\s,]+/;function In(e,t){t.split(mt).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function xn(e,t){t.split(mt).forEach(n=>{const c=n.trim();switch(c){case"left":case"center":case"right":e.hAlign=c;break;case"top":case"middle":case"bottom":e.vAlign=c;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}})}function H(e,t){return e.hasAttribute(t)}function G(e,t){return e.getAttribute(t)}function An(e,t){const n=e.getAttribute(t);return n===t||n==="true"?!0:n===""||n==="false"?!1:null}const jn=["inline","hFlip","vFlip"],Sn=["width","height"],yt="iconify",ke="iconify-inline",On="i."+yt+", span."+yt+", i."+ke+", span."+ke,Mn={find:e=>e.querySelectorAll(On),name:e=>H(e,"data-icon")?G(e,"data-icon"):null,customisations:(e,t={inline:!1})=>{const n=t,c=e.getAttribute("class");if((c?c.split(/\s+/):[]).indexOf(ke)!==-1&&(n.inline=!0),H(e,"data-rotate")){const r=Cn(G(e,"data-rotate"));r&&(n.rotate=r)}return H(e,"data-flip")&&In(n,G(e,"data-flip")),H(e,"data-align")&&xn(n,G(e,"data-align")),jn.forEach(r=>{if(H(e,"data-"+r)){const i=An(e,"data-"+r);typeof i=="boolean"&&(n[r]=i)}}),Sn.forEach(r=>{if(H(e,"data-"+r)){const i=G(e,"data-"+r);i!==""&&(n[r]=i)}}),n},classFilter:e=>{const t=[];return e.forEach(n=>{n!=="iconify"&&n!==""&&n.slice(0,9)!=="iconify--"&&t.push(n)}),t}};function bt(e,t,n){const c=X(e);if(!c)return null;const o=T(e),r=ee(q,typeof t=="object"?t:{});return st({name:o},r,c,n)}function En(){return"2.2.1"}function Ln(e,t){return bt(e,t,!1)}function kn(e,t){return bt(e,t,!0)}function Pn(e,t){const n=X(e);if(!n)return null;const c=ee(q,typeof t=="object"?t:{});return pe(n,c)}function Tn(e){e?wn(e):D()}if(typeof document!="undefined"&&typeof window!="undefined"){sn(),gn(Mn);const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(c=>{try{(typeof c!="object"||c===null||c instanceof Array||typeof c.icons!="object"||typeof c.prefix!="string"||!He(c))&&console.error(n)}catch{console.error(n)}})}setTimeout(()=>{dn(D),D()})}function Fn(e,t){Ge(e,t!==!1)}function Nn(e){Ge(e,!0)}if(Je("",Kt),typeof document!="undefined"&&typeof window!="undefined"){ye.store=Zt,Ke();const e=window;if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const n in t){const c="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Ye(n,o)||console.error(c)}catch{console.error(c)}}}}const Pe={_api:{getAPIConfig:ce,setAPIModule:Je,sendAPIQuery:ot,setFetch:_t,getFetch:Ut,listAPIProviders:qt,mergeParams:Ce},addAPIProvider:Ye,loadIcons:Oe,loadIcon:cn,iconExists:Mt,getIcon:Et,listIcons:St,addIcon:De,addCollection:He,shareStorage:xt,replaceIDs:Re,calculateSize:te,buildIcon:Tt,getVersion:En,renderSVG:Ln,renderHTML:kn,renderIcon:Pn,scan:Tn,observe:ht,stopObserving:pt,pauseObserver:hn,resumeObserver:pn,enableCache:Fn,disableCache:Nn};try{self.Iconify===void 0&&(self.Iconify=Pe)}catch{}const Vn=Pe.default||Pe;JSON.parse('[{"prefix":"mdi","width":24,"height":24,"icons":{"calendar-month-outline":{"body":"<path fill=\\"currentColor\\" d=\\"M7 12h2v2H7v-2m14-6v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2v2h8V2h2v2h1a2 2 0 0 1 2 2M5 8h14V6H5v2m14 12V10H5v10h14m-4-6v-2h2v2h-2m-4 0v-2h2v2h-2m-4 2h2v2H7v-2m8 2v-2h2v2h-2m-4 0v-2h2v2h-2Z\\"/>"},"close":{"body":"<path fill=\\"currentColor\\" d=\\"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z\\"/>"},"comment-outline":{"body":"<path fill=\\"currentColor\\" d=\\"M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6Z\\"/>"},"dribbble":{"body":"<path d=\\"M16.42 18.42A57.5 57.5 0 0 0 15 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37a7.788 7.788 0 0 1-3.24 4.99M12 19.8c-1.74 0-3.34-.57-4.64-1.54c.28-.45.87-1.32 1.82-2.22c.96-.93 2.32-1.89 4.05-2.46c.59 1.67 1.13 3.57 1.54 5.71c-.86.33-1.77.51-2.77.51M4.2 12v-.11c.22.01.51.01.85.01h.01c1.56-.01 4.3-.14 7.08-1.01c.15.33.3.67.45 1.03c-1.86.62-3.32 1.61-4.4 2.58c-1.03.96-1.74 1.89-2.15 2.5a7.704 7.704 0 0 1-1.84-5m4.35-7c.55.65 1.63 2.06 2.79 4.25c-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5M12 4.2c1.84 0 3.53.64 4.86 1.71C15.84 7.14 14.5 8 13.03 8.65C12 6.67 11 5.25 10.34 4.38c.54-.11 1.09-.18 1.66-.18m6.13 2.98a7.823 7.823 0 0 1 1.66 4.45a15.32 15.32 0 0 0-3.19-.35h-.01c-.8 0-1.55.07-2.26.19c-.17-.42-.33-.82-.52-1.21c1.58-.69 3.09-1.68 4.32-3.08M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z\\" fill=\\"currentColor\\"/>","hidden":true},"email":{"body":"<path fill=\\"currentColor\\" d=\\"m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\\"/>"},"eye":{"body":"<path fill=\\"currentColor\\" d=\\"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z\\"/>"},"facebook":{"body":"<path fill=\\"currentColor\\" d=\\"M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z\\"/>"},"folder-outline":{"body":"<path fill=\\"currentColor\\" d=\\"M20 18H4V8h16m0-2h-8l-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z\\"/>"},"github":{"body":"<path fill=\\"currentColor\\" d=\\"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z\\"/>"},"heart-outline":{"body":"<path fill=\\"currentColor\\" d=\\"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z\\"/>"},"instagram":{"body":"<path fill=\\"currentColor\\" d=\\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z\\"/>"},"loading":{"body":"<path fill=\\"currentColor\\" d=\\"M12 4V2A10 10 0 0 0 2 12h2a8 8 0 0 1 8-8Z\\"/>"},"qqchat":{"body":"<path fill=\\"currentColor\\" d=\\"M3.18 13.54c.58-1.38 1.39-2.4 1.99-2.62c-.01-.8.14-1.3.39-1.7c0-.03-.06-.36.16-.77C5.87 4.85 8.21 2 12 2s6.13 2.85 6.28 6.45c.22.41.16.74.16.77c.25.4.4.9.39 1.7c.6.22 1.41 1.24 1.99 2.63c.75 1.76.87 3.45.27 3.75c-.41.2-1.06-.3-1.67-1.18c-.24.98-.84 1.88-1.69 2.59c.9.33 1.48.87 1.48 1.48c0 1-1.58 1.81-3.52 1.81c-1.76 0-3.19-.66-3.48-1.5h-.42c-.29.84-1.72 1.5-3.48 1.5c-1.94 0-3.52-.81-3.52-1.81c0-.61.58-1.15 1.48-1.48c-.85-.71-1.45-1.61-1.69-2.59c-.61.88-1.26 1.38-1.67 1.18c-.6-.3-.48-1.99.27-3.76Z\\"/>"},"rss":{"body":"<path fill=\\"currentColor\\" d=\\"M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z\\"/>"},"sina-weibo":{"body":"<path fill=\\"currentColor\\" d=\\"M9.82 13.87c1.07 0 1.95.87 1.95 1.95a1.95 1.95 0 0 1-1.95 1.95c-1.08 0-1.95-.88-1.95-1.95c0-1.08.87-1.95 1.95-1.95M14.5 3.34l.68-.03c3.76 0 6.82 3.06 6.82 6.82l-.05.82l-1.19-.37l.02-.45c0-3.09-2.51-5.6-5.6-5.6l-.35.01l-.33-1.2m.82 2.89c2.06.07 3.73 1.77 3.76 3.83l-1.24-.38c-.19-1.12-1.06-2-2.17-2.18l-.35-1.27M2 15.41c-.03-.61.07-2.77 2.95-5.44c3.4-3.16 4.87-2.92 4.87-2.92s3.18-.3 1.24 3.41h.07c.47-.5 1.49-1.25 3.56-1.46c2.08-.21 2.08 1.5 1.81 2.7c1.88.94 3.06 2.33 3.06 3.88c0 2.82-3.93 5.11-8.78 5.11h-.28c-3.5 0-6.5-1.27-7.79-3.1c-.46-.62-.71-1.3-.71-2.01v-.17m7.82-3.49c-3.23 0-5.85 1.75-5.85 3.9s2.62 3.9 5.85 3.9c3.23 0 5.85-1.75 5.85-3.9s-2.62-3.9-5.85-3.9Z\\"/>"},"tag":{"body":"<path fill=\\"currentColor\\" d=\\"M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59c.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42Z\\"/>"},"telegram":{"body":"<path d=\\"M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z\\" fill=\\"currentColor\\"/>","hidden":true},"text-box-search":{"body":"<path fill=\\"currentColor\\" d=\\"M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M7 15v2h2c.14 1.55.8 2.94 1.81 4H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v8.03A6.492 6.492 0 0 0 15.5 10c-1.27 0-2.46.37-3.46 1H7v2h3c-.36.6-.66 1.28-.83 2H7m10-6V7H7v2h10Z\\"/>"},"twitter":{"body":"<path fill=\\"currentColor\\" d=\\"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z\\"/>"}}},{"prefix":"ion","width":512,"height":512,"icons":{"enter":{"body":"<path fill=\\"currentColor\\" d=\\"M160 136v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0 0 56 56h208a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56H216a56.06 56.06 0 0 0-56 56ZM48 240a16 16 0 0 0 0 32h112v-32Z\\"/>"}}}]').forEach(e=>Vn.addCollection(e)),document.addEventListener("DOMContentLoaded",()=>{const e=location.href,t=location.pathname,n=location.origin,c=document.querySelectorAll(".nav li a"),r=Array.from(c).find(i=>[e,t,n].includes(i.getAttribute("href")||""));if(r){r.classList.add("current");return}c.forEach(i=>{const s=i.getAttribute("href");if(!!s&&[e,t].includes(s)){console.log(i),i.classList.add("current");return}})})});
