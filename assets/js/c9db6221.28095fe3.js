"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1919],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),o=a(79443);var l=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(86010),i="tabItem_1uMI",d="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,u=e.groupId,m=e.className,f=l(),h=f.tabGroupChoices,w=f.setTabGroupChoices,v=(0,n.useState)(o),g=v[0],k=v[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var y=h[u];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&k(y)}var S=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;k(n),null!=u&&(w(u,n),setTimeout((function(){var e,a,n,o,l,r,i,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,l=e.right,r=window,i=r.innerHeight,s=r.innerWidth,a>=0&&l<=s&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var o=N.indexOf(e.target)-1;a=N[o]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:S,onClick:S},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},32778:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var n=a(22122),o=a(19756),l=(a(67294),a(3905)),r=(a(55064),a(58215),{id:"class-download",title:"Download"}),i=void 0,d={unversionedId:"api/class-download",id:"version-1.12.0/api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the [page.on('download') event.",source:"@site/versioned_docs/version-1.12.0/api/class-download.mdx",sourceDirName:"api",slug:"/api/class-download",permalink:"/docs/1.12.0/api/class-download",version:"1.12.0",frontMatter:{id:"class-download",title:"Download"},sidebar:"version-1.12.0/api",previous:{title:"Dialog",permalink:"/docs/1.12.0/api/class-dialog"},next:{title:"ElementHandle",permalink:"/docs/1.12.0/api/class-elementhandle"}},s=[{value:"download.createReadStream()",id:"download-create-read-stream",children:[]},{value:"download.delete()",id:"download-delete",children:[]},{value:"download.failure()",id:"download-failure",children:[]},{value:"download.page()",id:"download-page",children:[]},{value:"download.path()",id:"download-path",children:[]},{value:"download.saveAs(path)",id:"download-save-as",children:[]},{value:"download.suggestedFilename()",id:"download-suggested-filename",children:[]},{value:"download.url()",id:"download-url",children:[]}],c={toc:s};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-download",title:"Download"},"Download")," objects are dispatched by page via the ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-page#page-event-download"},"page.on('download')")," event."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"downloadsPath")," isn't specified, all the downloaded files belonging to the browser context are deleted when the browser context is closed. And all downloaded files are deleted when the browser closes."),(0,l.kt)("p",null,"Download event is emitted once the download starts. Download path becomes available once download completes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Browser context ",(0,l.kt)("strong",{parentName:"p"},"must")," be created with the ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",(0,l.kt)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set, download events are emitted, but the actual download is not performed and user has no access to the downloaded files."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-create-read-stream"},"download.createReadStream()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-delete"},"download.delete()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-failure"},"download.failure()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-page"},"download.page()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-path"},"download.path()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-save-as"},"download.saveAs(path)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-suggested-filename"},"download.suggestedFilename()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-download#download-url"},"download.url()"))),(0,l.kt)("h2",{id:"download-create-read-stream"},"download.createReadStream()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.html#stream_class_stream_readable",title:"Readable"},"Readable"),">",">")),(0,l.kt)("p",null,"Returns readable stream for current download or ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if download failed."),(0,l.kt)("h2",{id:"download-delete"},"download.delete()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">")),(0,l.kt)("p",null,"Deletes the downloaded file. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-failure"},"download.failure()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">")),(0,l.kt)("p",null,"Returns download error if any. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-page"},"download.page()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page",title:"Page"},"Page"),">")),(0,l.kt)("p",null,"Get the page that the download belongs to."),(0,l.kt)("h2",{id:"download-path"},"download.path()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">")),(0,l.kt)("p",null,"Returns path to the downloaded file in case of successful download. The method will wait for the download to finish if necessary. The method throws when connected remotely."),(0,l.kt)("h2",{id:"download-save-as"},"download.saveAs(path)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Path where the download should be copied."),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">")),(0,l.kt)("p",null,"Copy the download to a user-specified path. It is safe to call this method while the download is still in progress. Will wait for the download to finish if necessary."),(0,l.kt)("h2",{id:"download-suggested-filename"},"download.suggestedFilename()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,l.kt)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"},(0,l.kt)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",(0,l.kt)("a",{parentName:"p",href:"https://html.spec.whatwg.org/#downloading-resources"},"whatwg"),". Different browsers can use different logic for computing it."),(0,l.kt)("h2",{id:"download-url"},"download.url()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,l.kt)("p",null,"Returns downloaded url."))}p.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);