(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4264],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=a,k=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7294),a=r(944),o=r(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,p=e.values,b=e.groupId,d=e.className,k=(0,a.Z)(),f=k.tabGroupChoices,m=k.setTabGroupChoices,v=(0,n.useState)(u),h=v[0],w=v[1],g=n.Children.toArray(e.children),N=[];if(null!=b){var S=f[b];null!=S&&S!==h&&p.some((function(e){return e.value===S}))&&w(S)}var y=function(e){var t=e.currentTarget,r=N.indexOf(t),n=p[r].value;w(n),null!=b&&(m(b,n),setTimeout((function(){var e,r,n,a,o,i,c,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,r>=0&&o<=s&&a<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case s:var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case c:var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:y,onClick:y},r)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6667:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=(r(1395),r(8215),{id:"class-websocket",title:"WebSocket"}),l={unversionedId:"api/class-websocket",id:"version-1.9.0/api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.9.0/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/docs/1.9.0/api/class-websocket",version:"1.9.0",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"version-1.9.0/api",previous:{title:"WebKitBrowser",permalink:"/docs/1.9.0/api/class-webkitbrowser"},next:{title:"Worker",permalink:"/docs/1.9.0/api/class-worker"}},c=[{value:"webSocket.on(&#39;close&#39;)",id:"websocketonclose",children:[]},{value:"webSocket.on(&#39;framereceived&#39;)",id:"websocketonframereceived",children:[]},{value:"webSocket.on(&#39;framesent&#39;)",id:"websocketonframesent",children:[]},{value:"webSocket.on(&#39;socketerror&#39;)",id:"websocketonsocketerror",children:[]},{value:"webSocket.isClosed()",id:"websocketisclosed",children:[]},{value:"webSocket.url()",id:"websocketurl",children:[]},{value:"webSocket.waitForEvent(event, optionsOrPredicate)",id:"websocketwaitforeventevent-optionsorpredicate",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.9.0/api/class-websocket",title:"WebSocket"},"WebSocket")," class represents websocket connections in the page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket#websocketonclose"},"webSocket.on('close')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket#websocketonframereceived"},"webSocket.on('framereceived')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket#websocketonframesent"},"webSocket.on('framesent')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket#websocketonsocketerror"},"webSocket.on('socketerror')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket#websocketisclosed"},"webSocket.isClosed()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket#websocketurl"},"webSocket.url()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket#websocketwaitforeventevent-optionsorpredicate"},"webSocket.waitForEvent(event[, optionsOrPredicate])"))),(0,o.kt)("h2",{id:"websocketonclose"},"webSocket.on('close')"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-websocket",title:"WebSocket"},"WebSocket"),">")),(0,o.kt)("p",null,"Fired when the websocket closes."),(0,o.kt)("h2",{id:"websocketonframereceived"},"webSocket.on('framereceived')"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),"> frame payload")))),(0,o.kt)("p",null,"Fired when the websocket recieves a frame."),(0,o.kt)("h2",{id:"websocketonframesent"},"webSocket.on('framesent')"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),"> frame payload")))),(0,o.kt)("p",null,"Fired when the websocket sends a frame."),(0,o.kt)("h2",{id:"websocketonsocketerror"},"webSocket.on('socketerror')"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"String"),">")),(0,o.kt)("p",null,"Fired when the websocket has an error."),(0,o.kt)("h2",{id:"websocketisclosed"},"webSocket.isClosed()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,o.kt)("p",null,"Indicates that the web socket has been closed."),(0,o.kt)("h2",{id:"websocketurl"},"webSocket.url()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,o.kt)("p",null,"Contains the URL of the WebSocket."),(0,o.kt)("h2",{id:"websocketwaitforeventevent-optionsorpredicate"},"webSocket.waitForEvent(event","[, optionsOrPredicate]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Event name, same one would pass into ",(0,o.kt)("inlineCode",{parentName:"li"},"webSocket.on(event)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"optionsOrPredicate")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"|",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"> Either a predicate that receives an event or an options object. Optional.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"predicate")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"},"function"),"> receives the event data and resolves to truthy value when the waiting should resolve."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"},"browserContext.setDefaultTimeout(timeout)"),"."))),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">>")),(0,o.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."))}u.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);