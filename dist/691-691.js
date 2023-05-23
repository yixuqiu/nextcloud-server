(self.webpackChunknextcloud=self.webpackChunknextcloud||[]).push([[691],{53110:e=>{var t;self,t=()=>(()=>{var e={891:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7537),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([e.id,".material-design-icon[data-v-2a1ad7b2]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.app-navigation-entry__counter[data-v-2a1ad7b2]{font-size:calc(var(--default-font-size)*.8);overflow:hidden;width:fit-content;max-width:44px;text-align:center;text-overflow:ellipsis;line-height:1em;padding:4px 8px;border-radius:var(--border-radius-pill);background-color:var(--color-background-darker)}.app-navigation-entry__counter--highlighted[data-v-2a1ad7b2]{padding:4px 6px;color:var(--color-primary-element-text);background-color:var(--color-primary-element)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcAppNavigationCounter/NcAppNavigationCounter.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCND,gDACC,2CAAA,CACA,eAAA,CACA,iBAAA,CACA,cCmBgB,CDlBhB,iBAAA,CACA,sBAAA,CACA,eAAA,CACA,eAAA,CACA,uCAAA,CACA,+CAAA,CAEA,6DACC,eAAA,CACA,uCAAA,CACA,6CAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"caee4c9\"; @import 'variables'; @import 'material-icons';\n\n.app-navigation-entry__counter {\n\tfont-size: calc(var(--default-font-size) * .8);\n\toverflow: hidden;\n\twidth: fit-content;\n\tmax-width: $clickable-area;\n\ttext-align: center;\n\ttext-overflow: ellipsis;\n\tline-height: 1em;\n\tpadding: 4px 8px;\n\tborder-radius: var(--border-radius-pill);\n\tbackground-color: var(--color-background-darker);\n\n\t&--highlighted {\n\t\tpadding: 4px 6px;\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: var(--color-primary-element);\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=i},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},7537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},3379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var p=n(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},1358:()=>{},1900:(e,t,n)=>{"use strict";function r(e,t,n,r,o,a,i,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(e,t){return c.call(t),p(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}n.d(t,{Z:()=>r})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>C});const e={name:"NcAppNavigationCounter",props:{highlighted:{type:Boolean,default:!1}}};var t=n(3379),o=n.n(t),a=n(7795),i=n.n(a),s=n(569),c=n.n(s),u=n(3565),p=n.n(u),l=n(9216),d=n.n(l),f=n(4589),v=n.n(f),h=n(891),A={};A.styleTagTransform=v(),A.setAttributes=p(),A.insert=c().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=d(),o()(h.Z,A),h.Z&&h.Z.locals&&h.Z.locals;var m=n(1900),g=n(1358),y=n.n(g),b=(0,m.Z)(e,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"app-navigation-entry__counter",class:{"app-navigation-entry__counter--highlighted":e.highlighted}},[e._t("default")],2)}),[],!1,null,"2a1ad7b2",null);"function"==typeof y()&&y()(b);const C=b.exports})(),r})(),e.exports=t()},27472:e=>{var t;self,t=()=>(()=>{var e={7168:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7537),o=n.n(r),a=n(3645),i=n.n(a)()(o());i.push([e.id,".material-design-icon[data-v-f8d5ac8e]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.content[data-v-f8d5ac8e]{box-sizing:border-box;margin:var(--body-container-margin);margin-top:50px;display:flex;width:calc(100% - var(--body-container-margin)*2);border-radius:var(--body-container-radius);height:var(--body-height);overflow:hidden;padding:0}.content[data-v-f8d5ac8e]:not(.with-sidebar--full){position:fixed}.content[data-v-f8d5ac8e] *{box-sizing:border-box}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcContent/NcContent.vue"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCND,0BACC,qBAAA,CACA,mCAAA,CACA,eAAA,CACA,YAAA,CACA,iDAAA,CACA,0CAAA,CACA,yBAAA,CACA,eAAA,CACA,SAAA,CAEA,mDACC,cAAA,CAGD,4BACC,qBAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"caee4c9\"; @import 'variables'; @import 'material-icons';\n\n.content {\n\tbox-sizing: border-box;\n\tmargin: var(--body-container-margin);\n\tmargin-top: 50px;\n\tdisplay: flex;\n\twidth: calc(100% - var(--body-container-margin) * 2);\n\tborder-radius: var(--body-container-radius);\n\theight: var(--body-height);\n\toverflow: hidden;\n\tpadding: 0;\n\n\t&:not(.with-sidebar--full) {\n\t\tposition: fixed;\n\t}\n\n\t:deep(*) {\n\t\tbox-sizing: border-box;\n\t}\n}\n"],sourceRoot:""}]);const s=i},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},7537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[t].concat([a]).join("\n")}return[t].join("\n")}},3379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],p=a[u]||0,l="".concat(u," ").concat(p);a[u]=p+1;var d=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:v,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var p=n(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},1152:()=>{},1900:(e,t,n)=>{"use strict";function r(e,t,n,r,o,a,i,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(e,t){return c.call(t),p(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}n.d(t,{Z:()=>r})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>C});const e={props:{appName:{type:String,required:!0}}};var t=n(3379),o=n.n(t),a=n(7795),i=n.n(a),s=n(569),c=n.n(s),u=n(3565),p=n.n(u),l=n(9216),d=n.n(l),f=n(4589),v=n.n(f),h=n(7168),A={};A.styleTagTransform=v(),A.setAttributes=p(),A.insert=c().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=d(),o()(h.Z,A),h.Z&&h.Z.locals&&h.Z.locals;var m=n(1900),g=n(1152),y=n.n(g),b=(0,m.Z)(e,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"content",class:"app-".concat(e.appName.toLowerCase()),attrs:{id:"content-vue"}},[e._t("default")],2)}),[],!1,null,"f8d5ac8e",null);"function"==typeof y()&&y()(b);const C=b.exports})(),r})(),e.exports=t()},87369:function(e,t,n){var r=n(34155),o=n(25108);e.exports=function(){"use strict";var e=function(){this._properties={},this._namespace="",this._isSupported=!0},t={namespace:{}};t.namespace.get=function(){return this._namespace},t.namespace.set=function(e){this._namespace=e?e+".":""},e.prototype._getLsKey=function(e){return""+this._namespace+e},e.prototype._lsSet=function(e,t,n){var r=this._getLsKey(e),o=n&&[Array,Object].includes(n)?JSON.stringify(t):t;window.localStorage.setItem(r,o)},e.prototype._lsGet=function(e){var t=this._getLsKey(e);return window.localStorage[t]},e.prototype.get=function(e,t,n){if(void 0===t&&(t=null),void 0===n&&(n=String),!this._isSupported)return null;if(this._lsGet(e)){var r=n;for(var o in this._properties)if(o===e){r=this._properties[o].type;break}return this._process(r,this._lsGet(e))}return null!==t?t:null},e.prototype.set=function(e,t){var n=this;if(!this._isSupported)return null;for(var r in n._properties){var o=n._properties[r].type;if(r===e)return n._lsSet(e,t,o),t}return this._lsSet(e,t),t},e.prototype.remove=function(e){return this._isSupported?window.localStorage.removeItem(e):null},e.prototype.addProperty=function(e,t,n){void 0===n&&(n=void 0),t=t||String,this._properties[e]={type:t},this._lsGet(e)||null===n||this._lsSet(e,n,t)},e.prototype._process=function(e,t){switch(e){case Boolean:return"true"===t;case Number:return parseFloat(t);case Array:try{var n=JSON.parse(t);return Array.isArray(n)?n:[]}catch(e){return[]}case Object:try{return JSON.parse(t)}catch(e){return{}}default:return t}},Object.defineProperties(e.prototype,t);var n=new e;return{install:function(e,t){if(void 0===t&&(t={}),void 0===r||!(r.server||r.SERVER_BUILD||r.env&&"server"===r.env.VUE_ENV)){var a=!0;try{var i="__vue-localstorage-test__";window.localStorage.setItem(i,i),window.localStorage.removeItem(i)}catch(e){a=!1,n._isSupported=!1,o.error("Local storage is not supported")}var s=t.name||"localStorage",c=t.bind;t.namespace&&(n.namespace=t.namespace),e.mixin({beforeCreate:function(){var t=this;a&&this.$options[s]&&Object.keys(this.$options[s]).forEach((function(r){var a=t.$options[s][r],i=[a.type,a.default],u=i[0],p=i[1];if(n.addProperty(r,u,p),Object.getOwnPropertyDescriptor(n,r))e.config.silent||o.log(r+": is already defined and will be reused");else{var l={get:function(){return e.localStorage.get(r,p)},set:function(t){return e.localStorage.set(r,t)},configurable:!0};Object.defineProperty(n,r,l),e.util.defineReactive(n,r,p)}(c||a.bind)&&!1!==a.bind&&(t.$options.computed=t.$options.computed||{},t.$options.computed[r]||(t.$options.computed[r]={get:function(){return e.localStorage[r]},set:function(t){e.localStorage[r]=t}}))}))}}),e[s]=n,e.prototype["$"+s]=n}}}}()}}]);
//# sourceMappingURL=691-691.js.map?v=7ca8b9873c41f1c404d4