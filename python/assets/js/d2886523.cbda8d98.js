"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[890],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,m=c["".concat(o,".").concat(h)]||c[h]||d[h]||s;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8215:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(7294),n=r(9443);var s=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,p=39;var d=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,d=e.values,c=e.groupId,h=e.className,m=s(),f=m.tabGroupChoices,k=m.setTabGroupChoices,y=(0,a.useState)(n),q=y[0],N=y[1],g=a.Children.toArray(e.children),b=[];if(null!=c){var v=f[c];null!=v&&v!==q&&d.some((function(e){return e.value===v}))&&N(v)}var x=function(e){var t=e.currentTarget,r=b.indexOf(t),a=d[r].value;N(a),null!=c&&(k(c,a),setTimeout((function(){var e,r,a,n,s,i,l,u;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,s=e.right,i=window,l=i.innerHeight,u=i.innerWidth,r>=0&&s<=u&&n<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},T=function(e){var t,r;switch(e.keyCode){case p:var a=b.indexOf(e.target)+1;r=b[a]||b[0];break;case u:var n=b.indexOf(e.target)-1;r=b[n]||b[b.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},h)},d.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":q===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:T,onFocus:x,onClick:x},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}},9443:function(e,t,r){var a=(0,r(7294).createContext)(void 0);t.Z=a},9162:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=r(2122),n=r(9756),s=(r(7294),r(3905)),i=r(5064),l=r(8215),o={id:"class-request",title:"Request"},u=void 0,p={unversionedId:"api/class-request",id:"api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/docs/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/python/docs/next/api/class-request",version:"current",frontMatter:{id:"class-request",title:"Request"},sidebar:"api",previous:{title:"Page",permalink:"/python/docs/next/api/class-page"},next:{title:"Response",permalink:"/python/docs/next/api/class-response"}},d=[{value:"request.all_headers()",id:"request-all-headers",children:[]},{value:"request.failure",id:"request-failure",children:[]},{value:"request.frame",id:"request-frame",children:[]},{value:"request.header_value(name)",id:"request-header-value",children:[]},{value:"request.headers",id:"request-headers",children:[]},{value:"request.headers_array()",id:"request-headers-array",children:[]},{value:"request.is_navigation_request()",id:"request-is-navigation-request",children:[]},{value:"request.method",id:"request-method",children:[]},{value:"request.post_data",id:"request-post-data",children:[]},{value:"request.post_data_buffer",id:"request-post-data-buffer",children:[]},{value:"request.post_data_json",id:"request-post-data-json",children:[]},{value:"request.redirected_from",id:"request-redirected-from",children:[]},{value:"request.redirected_to",id:"request-redirected-to",children:[]},{value:"request.resource_type",id:"request-resource-type",children:[]},{value:"request.response()",id:"request-response",children:[]},{value:"request.sizes()",id:"request-sizes",children:[]},{value:"request.timing",id:"request-timing",children:[]},{value:"request.url",id:"request-url",children:[]}],c={toc:d};function h(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page",title:"Page"},"Page"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-request"},'page.on("request")')," emitted when the request is issued by the page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-response"},'page.on("response")')," emitted when/if the response status and headers are received for the request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-page#page-event-request-finished"},'page.on("requestfinished")')," emitted when the response body is downloaded and the request is complete.")),(0,s.kt)("p",null,"If request fails at some point, then instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-page#page-event-request-failed"},'page.on("requestfailed")')," event is emitted."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,s.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-all-headers"},"request.all_headers()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-failure"},"request.failure")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-frame"},"request.frame")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-header-value"},"request.header_value(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-headers"},"request.headers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-headers-array"},"request.headers_array()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-is-navigation-request"},"request.is_navigation_request()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-method"},"request.method")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-post-data"},"request.post_data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-post-data-buffer"},"request.post_data_buffer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-post-data-json"},"request.post_data_json")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-redirected-from"},"request.redirected_from")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-redirected-to"},"request.redirected_to")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-resource-type"},"request.resource_type")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-response"},"request.response()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-sizes"},"request.sizes()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-timing"},"request.timing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request#request-url"},"request.url"))),(0,s.kt)("h2",{id:"request-all-headers"},"request.all_headers()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-all-headers-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">",(0,s.kt)("a",{href:"#request-all-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with all the request HTTP headers associated with this request. The header names are lower-cased."),(0,s.kt)("h2",{id:"request-failure"},"request.failure"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The method returns ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,s.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,s.kt)("p",null,"Example of logging of all the failed requests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'page.on("requestfailed", lambda request: print(request.url + " " + request.failure))\n')),(0,s.kt)("h2",{id:"request-frame"},"request.frame"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-frame",title:"Frame"},"Frame"),">",(0,s.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,s.kt)("h2",{id:"request-header-value"},"request.header_value(name)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Name of the header.",(0,s.kt)("a",{href:"#request-header-value-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#request-header-value-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive."),(0,s.kt)("h2",{id:"request-headers"},"request.headers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">",(0,s.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-request#request-all-headers"},"request.all_headers()")," instead."),(0,s.kt)("h2",{id:"request-headers-array"},"request.headers_array()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-array-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,s.kt)("a",{href:"#request-headers-array-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Name of the header."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Value of the header.")))),(0,s.kt)("p",null,"An array with all the request HTTP headers associated with this request. Unlike ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-request#request-all-headers"},"request.all_headers()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,s.kt)("h2",{id:"request-is-navigation-request"},"request.is_navigation_request()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">",(0,s.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Whether this request is driving frame's navigation."),(0,s.kt)("h2",{id:"request-method"},"request.method"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,s.kt)("h2",{id:"request-post-data"},"request.post_data"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body, if any."),(0,s.kt)("h2",{id:"request-post-data-buffer"},"request.post_data_buffer"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">",(0,s.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body in a binary form, if any."),(0,s.kt)("h2",{id:"request-post-data-json"},"request.post_data_json"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-json-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"},"Any"),">",(0,s.kt)("a",{href:"#request-post-data-json-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns parsed request's body for ",(0,s.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,s.kt)("p",null,"When the response is ",(0,s.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,s.kt)("h2",{id:"request-redirected-from"},"request.redirected_from"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request",title:"Request"},"Request"),">",(0,s.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,s.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,s.kt)("p",null,"For example, if the website ",(0,s.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n'))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = await page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n')))),(0,s.kt)("p",null,"If the website ",(0,s.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n'))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = await page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n')))),(0,s.kt)("h2",{id:"request-redirected-to"},"request.redirected_to"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-request",title:"Request"},"Request"),">",(0,s.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,s.kt)("p",null,"This method is the opposite of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-request#request-redirected-from"},"request.redirected_from"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"assert request.redirected_from.redirected_to == request\n")),(0,s.kt)("h2",{id:"request-resource-type"},"request.resource_type"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,s.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,s.kt)("h2",{id:"request-response"},"request.response()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-response",title:"Response"},"Response"),">",(0,s.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the matching ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-response",title:"Response"},"Response")," object, or ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,s.kt)("h2",{id:"request-sizes"},"request.sizes()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-sizes-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,s.kt)("a",{href:"#request-sizes-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestBodySize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," Size of the request body (POST data payload) in bytes. Set to 0 if there was no body."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestHeadersSize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseBodySize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," Size of the received response body (encoded) in bytes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseHeadersSize")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.")))),(0,s.kt)("p",null,"Returns resource size information for given request."),(0,s.kt)("h2",{id:"request-timing"},"request.timing"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,s.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,s.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,s.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_event("requestfinished") as request_info:\n    page.goto("http://example.com")\nrequest = request_info.value\nprint(request.timing)\n'))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_event("requestfinished") as request_info:\n    await page.goto("http://example.com")\nrequest = await request_info.value\nprint(request.timing)\n')))),(0,s.kt)("h2",{id:"request-url"},"request.url"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,s.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"URL of the request."))}h.isMDXComponent=!0},6010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);