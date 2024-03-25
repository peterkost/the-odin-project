(()=>{"use strict";var e={830:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"#taskview-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#taskview-add {\n  background: none;\n  outline: none;\n  border: none;\n  align-self: flex-end;\n  justify-self: flex-end;\n}\n\n#taskview-add {\n  color: rgb(150 152 152);\n  font-size: 2rem;\n  margin-top: 0;\n  margin-bottom: -1rem;\n}\n\n#taskview-title {\n  color: rgb(10 132 255);\n  margin-top: 0;\n}\n",""]);const s=i},936:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,".task-container {\n  --main-outline-color: rgb(54 57 59);\n  padding-bottom: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.task-complete-button {\n  --size: 1.5rem;\n  background-color: transparent;\n  height: var(--size);\n  width: var(--size);\n  border-radius: 50%;\n  border: 2px solid var(--main-outline-color);\n}\n\n.task-content {\n  border-bottom: 2px solid var(--main-outline-color);\n  flex: 1;\n}\n\ndiv.task-content p {\n  margin: 0;\n}\n\ndiv.task-content p:last-child {\n  padding-bottom: 0.5rem;\n}\n\n.task-title {\n  font-size: 1.25rem;\n}\n\n.task-details-row {\n  display: flex;\n  gap: 0.5rem;\n  color: rgb(154 156 157);\n}\n",""]);const s=i},208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"body {\n  background-color: rgb(32 36 38);\n  color: white;\n  font-family: Helvetica, Arial, sans-serif;\n}\n",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),a=n(659),i=n.n(a),s=n(56),l=n.n(s),c=n(540),d=n.n(c),u=n(113),p=n.n(u),m=n(208),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(m.A,f),m.A&&m.A.locals&&m.A.locals;var v=n(830),h={};h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(v.A,h),v.A&&v.A.locals&&v.A.locals;var y=n(936),b={};b.styleTagTransform=p(),b.setAttributes=l(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),t()(y.A,b),y.A&&y.A.locals&&y.A.locals;const g=class{constructor(e,t,n,r){this.title=e,this.description=t,this.dueDate=n,this.priority=r}getEl(){return console.log(this),(e=>{const t=document.createElement("div");return t.classList="task-container",t.innerHTML='<button class="task-complete-button"></button> <div class="task-content"> <p class="task-title"></p> <p class="task-description"></p> <div class="task-details-row"> <p class="task-date"></p> <p class="task-details-divider">-</p> <p class="task-priority"></p> </div> </div> ',t.getElementsByClassName("task-title")[0].innerText=e.title,t.getElementsByClassName("task-description")[0].innerText=e.description,t.getElementsByClassName("task-date")[0].innerText=e.dueDate,e.priority&&(t.getElementsByClassName("task-priority")[0].innerText=`Priority: ${e.priority}`),e.dueDate&&e.priority||(t.getElementsByClassName("task-details-divider")[0].style.display="none"),t})(this)}};let k;const T=Object.freeze(new class{constructor(){if(k)throw new Error("State already exists, you can not initalize multiple!");k=this}renderTasks(){const e=document.getElementById("task-list");e.innerHTML="",A.getTasks().forEach((t=>e.appendChild(t.getEl())))}});let w;const x=Object.freeze(new class{constructor(){if(w)throw new Error("Mock already exists, you can not initalize multiple!");w=this}getTasks(){const e=[],t=new g("Program","Work on The Odin Project for 4 hours",(new Date).toLocaleDateString(),1);for(let n=0;n<5;n++)e.push(t);return e}});let E;const A=Object.freeze(new class{constructor(){if(E)throw new Error("State already exists, you can not initalize multiple!");E=this,this.tasks=x.getTasks()}getTasks(){return this.tasks}addTask(e){this.tasks.push(e),T.renderTasks()}}),C=e=>{e.preventDefault();const t=function(e){const t=new FormData(e),n=Object.fromEntries(t);return new g(n.title,n.description,n.dueDate,n.priority)}(e.target);A.addTask(t),e.srcElement.parentNode.close()},D=()=>{const e=document.createElement("div");e.id="taskview-container";const t=(()=>{const e=document.createElement("dialog");return e.id="add-modal",e.innerHTML='<h1>New task</h1> <form id="form"> <label>Title: <input type="text" name="title"/> </label> <label>Description: <input type="text" name="description"/> </label> <label>Due Date: <input type="date" name="dueDate"/> </label> <label for="priority">Priority:</label> <select name="priority"> <option value="">-</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> </select> <div> <button id="close-button" type="button">Cancel</button> <button id="add-button">Add</button> </div> </form> ',e.getElementsByTagName("form")[0].addEventListener("submit",C),e.getElementsByTagName("button")[0].onclick=()=>e.close(),e})();e.appendChild(t);const n=document.createElement("button");n.type="button",n.innerText="+",n.id="taskview-add",n.addEventListener("click",(()=>t.showModal())),e.appendChild(n);const r=document.createElement("h1");r.id="taskview-title",r.innerText="Tasks",e.appendChild(r);const o=document.createElement("div");return o.id="task-list",e.appendChild(o),e};document.body.appendChild(function(){const e=document.createElement("div");return e.appendChild(D()),e}()),window.onload=()=>T.renderTasks()})()})();