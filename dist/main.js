!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){var n=a(1),r=a(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},function(e,t,a){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function s(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function l(e,t){for(var a={},n=[],r=0;r<e.length;r++){var o=e[r],l=t.base?o[0]+t.base:o[0],c=a[l]||0,d="".concat(l," ").concat(c);a[l]=c+1;var u=s(d),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:g(p,t),references:1}),n.push(d)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=a.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,a,n){var r=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function h(e,t,a){var n=a.css,r=a.media,o=a.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,b=0;function g(e,t){var a,n,r;if(t.singleton){var o=b++;a=f||(f=c(t)),n=p.bind(null,a,o,!1),r=p.bind(null,a,o,!0)}else a=c(t),n=h.bind(null,a,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var a=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var r=s(a[n]);i[r].references--}for(var o=l(e,t),c=0;c<a.length;c++){var d=s(a[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}a=o}}}},function(e,t,a){(t=a(3)(!1)).push([e.i,'*{margin:0;padding:0;box-sizing:border-box}*:focus{outline-color:olivedrab}body{font-family:sans-serif;font-size:16px;line-height:1.5;color:#333}.tables{display:flex;justify-content:space-around}.tables__item{width:70%;margin-right:30px;margin-left:20px}.tables__item:last-of-type{margin-right:20px}.table-sortable{width:100%;border-collapse:collapse;border:1px solid darkolivegreen;margin-top:10px}.table-sortable caption{margin-bottom:20px;text-align:right}.table-sortable caption input{display:inline-block;margin-right:10px;line-height:1.5;padding:6px 16px;font-family:sans-serif;border:1px solid olive;border-radius:2px}.table-sortable caption button{font-family:sans-serif;padding:8px 16px;cursor:pointer;background:none;border:1px solid olive;border-radius:2px}.table-sortable caption button:hover{background-color:rgba(255,255,0,0.2)}.table-sortable th{border:1px solid olive;text-align:left;padding:8px 24px 8px 8px;position:relative;user-select:none;cursor:pointer}.table-sortable th:hover{color:olive}.table-sortable th:hover:after,.table-sortable th:hover:before{border-bottom-color:olive}.table-sortable th:after,.table-sortable th:before{content:\'\';position:absolute;top:50%;right:6px;display:block;border:5px solid transparent;border-bottom:5px solid darkolivegreen;width:1px}.table-sortable th:before{transform:rotate(180deg) translateY(calc(-50% + 3px))}.table-sortable th:after{transform:translateY(calc(-50% - 7px))}.table-sortable th[data-asc="true"].active:after{display:none}.table-sortable th[data-asc="false"].active:before{display:none}.table-sortable td{border:1px solid olivedrab;padding:8px 12px;white-space:nowrap}.table-sortable tbody tr:hover{background-color:rgba(255,255,0,0.2)}ul{margin:20px 0 40px;list-style:none;display:flex;justify-content:flex-start;align-items:center}ul>li{width:1.9em;padding:2px 0;text-align:center;margin-right:10px;border:1px solid gray;cursor:pointer;line-height:1.9em}ul>li:hover{background-color:rgba(255,255,0,0.2)}.table-sortable-results{padding-top:30px}.table-sortable-results textarea{width:100%;resize:vertical;min-height:auto;line-height:1.5;padding:6px 16px;font-family:sans-serif;border:1px solid olive;border-radius:2px;font-size:16px}::selection{background-color:olive;color:white}\n',""]),e.exports=t},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var r=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(o).concat([r]).join("\n")}var i,s,l;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&r[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},function(e,t,a){"use strict";a.r(t);a(0);class n{constructor(e){this.config=e,this.data=[];const t=document.querySelectorAll(this.config.table);if(!t||!t.length)return!1;t.forEach(e=>{fetch(this.config.url).then(e=>e.json()).then(t=>{this.data=t,this.getHeaders(this.data),this.hydrateTable(this.data),e.addEventListener("click",this.selectRow().bind(this)),this.config.hasSearch&&this.addSearch(e),this.config.itemsPerPage&&(this.pages=Math.ceil(this.data.length/this.config.itemsPerPage),this.addPagination(e),this.selectPage(e))}).catch(e=>{console.error(e)})})}addPagination(e){const t=document.createElement("ul");t.classList.add("table-sortable-pagination");for(let e=1;e<=this.pages;e++){const a=document.createElement("li");a.innerText=e,t.appendChild(a)}e.parentNode.appendChild(t)}updatePagination(e){const t=document.querySelector(".table-sortable-pagination");t.innerHTML="";const a=Math.ceil(e/this.config.itemsPerPage);for(let e=1;e<=a;e++){const a=document.createElement("li");a.innerText=e,t.appendChild(a)}}getColsNum(e){return e.querySelectorAll("thead th").length}getTable(){return document.querySelector(this.config.table)}sortColumn(e,t,a){let n;const r="true"===a.dataset.asc;switch(t){case"number":n=function(t,a){return r?t[e]-a[e]:a[e]-t[e]};break;case"string":n=function(t,a){return 1==r?t[e].toLowerCase()>a[e].toLowerCase()?1:-1:t[e].toLowerCase()<a[e].toLowerCase()?1:-1}}a.dataset.asc=!r;let o=this.data.sort(n);this.filteredData&&this.filteredData.length&&(o=this.filteredData.sort(n)),this.clearTable(),this.hydrateTable(o)}selectRow(){return function(e){const t=this.getTable(),a=e.target.closest("tbody tr");if(!a)return!1;const n=a.dataset.id,r=this.data.filter(e=>e.id==n)[0],o=this.config.table+"-results";let i=document.getElementById(o);i&&t.parentNode.removeChild(i),i=document.createElement("div"),i.id=o,i.classList.add("table-sortable-results"),i.innerHTML=`<p>Выбран пользователь: <b>${r.firstName} ${r.lastName}</b></p>\n            <p>Описание:</p>\n            <textarea>${r.description}</textarea>\n            <p>Адрес проживания: <b>${r.adress.streetAddress}</b></p>\n            <p>Город: <b>${r.adress.city}</b></p>\n            <p>Провинция/штат: <b>${r.adress.state}</b></p>\n            <p>Индекс: <b>${r.adress.zip}</b></p>`,t.parentNode.appendChild(i),i.scrollIntoView({behavior:"smooth"})}}selectPage(e){const t=this;document.querySelector(".table-sortable-pagination").addEventListener("click",(function(e){if(e.target.closest("li")){t.selectedPage=+e.target.innerText;const a=t.filteredData&&t.filteredData.length?t.filteredData:t.data;t.clearTable(),t.hydrateTable(a)}}))}addSearch(e){const t=this,a=document.createElement("caption"),n=document.createElement("input");n.type="search",a.appendChild(n);const r=document.createElement("button");r.innerText="Search",r.type="button",a.appendChild(r),e.appendChild(a),r.addEventListener("click",(function(){t.selectedPage=1;let e=t.data;n.value.length?e=t.filteredData=t.data.filter(e=>{const t=Object.keys(e),a=Object.values(e);for(let e=0;e<a.length;e++)if("adress"!==t[e]&&"description"!==t[e]&&-1!==a[e].toString().toLowerCase().indexOf(n.value.toLowerCase()))return!0}):t.filteredData=[],t.clearTable(),t.hydrateTable(e),t.updatePagination(e.length)}))}getHeaders(e){const t=this,a=this.getTable(),n=document.createElement("thead"),r=document.createElement("tr"),o=Object.keys(this.data[0]),i=Object.values(this.data[0]);for(const e in o){if("adress"===o[e]||"description"===o[e])continue;const n=document.createElement("th");n.dataset.asc=!0,n.innerHTML=`<span>${o[e]}</span>`,r.appendChild(n),n.addEventListener("click",(function(){const r=a.querySelectorAll("th.active");r.length&&r.forEach(e=>e.classList.remove("active")),this.classList.add("active"),t.sortColumn(o[e],typeof i[e],n)}))}n.appendChild(r),a.appendChild(n)}clearTable(){const e=this.getTable(),t=e.querySelector("tbody");e.removeChild(t)}hydrateTable(e){const t=this.getTable(),a=document.createElement("tbody");if(!e){document.createElement("tr").innerHTML=`<td colspan="${this.getColsNum}">No data provided</td>`}this.selectedPage||(this.selectedPage=1);const n=this.selectedPage<2?this.config.itemsPerPage:(this.selectedPage-1)*this.config.itemsPerPage+this.config.itemsPerPage;e.slice((this.selectedPage-1)*this.config.itemsPerPage,n).map(e=>{const t=document.createElement("tr");t.dataset.id=e.id;for(const a in e)if("object"!=typeof e[a]&&"description"!==a){const n=document.createElement("td");n.innerText=e[a],t.appendChild(n)}a.appendChild(t)}),t.appendChild(a)}}new n({table:"#table-1",hasSearch:!0,itemsPerPage:50,url:"http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}"}),new n({table:"#table-2",hasSearch:!0,url:"http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|5}"})}]);