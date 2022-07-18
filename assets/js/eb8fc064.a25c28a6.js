"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4408],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=r.length,i=new Array(l);i[0]=d;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:s,i[1]=n;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71918:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var a=r(3905),s=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(n)for(var r of n(t))u.call(t,r)&&p(e,r,t[r]);return e};const d={id:"class-request",title:"Request"},m=void 0,h={unversionedId:"api/class-request",id:"version-1.21/api/class-request",title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.21/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/docs/1.21/api/class-request",tags:[],version:"1.21",frontMatter:{id:"class-request",title:"Request"},sidebar:"api",previous:{title:"Page",permalink:"/docs/1.21/api/class-page"},next:{title:"Response",permalink:"/docs/1.21/api/class-response"}},k={},f=[{value:"request.allHeaders()",id:"request-all-headers",level:2},{value:"request.failure()",id:"request-failure",level:2},{value:"request.frame()",id:"request-frame",level:2},{value:"request.headerValue(name)",id:"request-header-value",level:2},{value:"request.headers()",id:"request-headers",level:2},{value:"request.headersArray()",id:"request-headers-array",level:2},{value:"request.isNavigationRequest()",id:"request-is-navigation-request",level:2},{value:"request.method()",id:"request-method",level:2},{value:"request.postData()",id:"request-post-data",level:2},{value:"request.postDataBuffer()",id:"request-post-data-buffer",level:2},{value:"request.postDataJSON()",id:"request-post-data-json",level:2},{value:"request.redirectedFrom()",id:"request-redirected-from",level:2},{value:"request.redirectedTo()",id:"request-redirected-to",level:2},{value:"request.resourceType()",id:"request-resource-type",level:2},{value:"request.response()",id:"request-response",level:2},{value:"request.sizes()",id:"request-sizes",level:2},{value:"request.timing()",id:"request-timing",level:2},{value:"request.url()",id:"request-url",level:2}],b={toc:f};function v(e){var t,r=e,{components:s}=r,p=((e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&n)for(var a of n(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},b),p),l(t,i({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-page",title:"Page"}),"Page"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-page#page-event-request"}),"page.on('request')")," emitted when the request is issued by the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-page#page-event-response"}),"page.on('response')")," emitted when/if the response status and headers are received for the request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-page#page-event-request-finished"}),"page.on('requestfinished')")," emitted when the response body is downloaded and the request is complete.")),(0,a.kt)("p",null,"If request fails at some point, then instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-page#page-event-request-failed"}),"page.on('requestfailed')")," event is emitted."),(0,a.kt)("div",c({},{className:"admonition admonition-note alert alert--secondary"}),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-heading"}),(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",c({parentName:"h5"},{className:"admonition-icon"}),(0,a.kt)("svg",c({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,a.kt)("path",c({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,a.kt)("div",c({parentName:"div"},{className:"admonition-content"}),(0,a.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,a.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,a.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-all-headers"}),"request.allHeaders()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-failure"}),"request.failure()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-frame"}),"request.frame()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-headers"}),"request.headers()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-headers-array"}),"request.headersArray()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-header-value"}),"request.headerValue(name)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-is-navigation-request"}),"request.isNavigationRequest()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-method"}),"request.method()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-post-data"}),"request.postData()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-post-data-buffer"}),"request.postDataBuffer()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-post-data-json"}),"request.postDataJSON()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-redirected-from"}),"request.redirectedFrom()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-redirected-to"}),"request.redirectedTo()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-resource-type"}),"request.resourceType()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-response"}),"request.response()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-sizes"}),"request.sizes()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-timing"}),"request.timing()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request#request-url"}),"request.url()"))),(0,a.kt)("h2",c({},{id:"request-all-headers"}),"request.allHeaders()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-all-headers-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">>",">",(0,a.kt)("a",{href:"#request-all-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"An object with all the request HTTP headers associated with this request. The header names are lower-cased."),(0,a.kt)("h2",c({},{id:"request-failure"}),"request.failure()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"errorText")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Human-readable error message, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),(0,a.kt)("p",null,"The method returns ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,a.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,a.kt)("p",null,"Example of logging of all the failed requests:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,a.kt)("h2",c({},{id:"request-frame"}),"request.frame()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-frame",title:"Frame"}),"Frame"),">",(0,a.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-frame",title:"Frame"}),"Frame")," that initiated this request."),(0,a.kt)("h2",c({},{id:"request-header-value"}),"request.headerValue(name)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-option-name"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Name of the header.",(0,a.kt)("a",{href:"#request-header-value-option-name",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-header-value-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,a.kt)("a",{href:"#request-header-value-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive."),(0,a.kt)("h2",c({},{id:"request-headers"}),"request.headers()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,a.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DEPRECATED")," Incomplete list of headers as seen by the rendering engine. Use ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-request#request-all-headers"}),"request.allHeaders()")," instead."),(0,a.kt)("h2",c({},{id:"request-headers-array"}),"request.headersArray()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-array-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>",">",(0,a.kt)("a",{href:"#request-headers-array-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Name of the header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Value of the header.")))),(0,a.kt)("p",null,"An array with all the request HTTP headers associated with this request. Unlike ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-request#request-all-headers"}),"request.allHeaders()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,a.kt)("h2",c({},{id:"request-is-navigation-request"}),"request.isNavigationRequest()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,a.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Whether this request is driving frame's navigation."),(0,a.kt)("h2",c({},{id:"request-method"}),"request.method()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,a.kt)("h2",c({},{id:"request-post-data"}),"request.postData()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request's post body, if any."),(0,a.kt)("h2",c({},{id:"request-post-data-buffer"}),"request.postDataBuffer()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">",(0,a.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request's post body in a binary form, if any."),(0,a.kt)("h2",c({},{id:"request-post-data-json"}),"request.postDataJSON()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-json-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",(0,a.kt)("a",{href:"#request-post-data-json-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns parsed request's body for ",(0,a.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,a.kt)("p",null,"When the response is ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,a.kt)("h2",c({},{id:"request-redirected-from"}),"request.redirectedFrom()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request",title:"Request"}),"Request"),">",(0,a.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,a.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-request",title:"Request"}),"Request")," object. The two requests are connected by ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,a.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,a.kt)("p",null,"For example, if the website ",(0,a.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),(0,a.kt)("p",null,"If the website ",(0,a.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),(0,a.kt)("h2",c({},{id:"request-redirected-to"}),"request.redirectedTo()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-request",title:"Request"}),"Request"),">",(0,a.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,a.kt)("p",null,"This method is the opposite of ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-request#request-redirected-from"}),"request.redirectedFrom()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),(0,a.kt)("h2",c({},{id:"request-resource-type"}),"request.resourceType()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,a.kt)("h2",c({},{id:"request-response"}),"request.response()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",(0,a.kt)("a",c({parentName:"li"},{href:"/docs/1.21/api/class-response",title:"Response"}),"Response"),">",">",(0,a.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the matching ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/1.21/api/class-response",title:"Response"}),"Response")," object, or ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,a.kt)("h2",c({},{id:"request-sizes"}),"request.sizes()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-sizes-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,a.kt)("a",{href:"#request-sizes-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestBodySize")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Size of the request body (POST data payload) in bytes. Set to 0 if there was no body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestHeadersSize")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Total number of bytes from the start of the HTTP request message until (and including) the double CRLF before the body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseBodySize")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Size of the received response body (encoded) in bytes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseHeadersSize")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Total number of bytes from the start of the HTTP response message until (and including) the double CRLF before the body.")))),(0,a.kt)("p",null,"Returns resource size information for given request."),(0,a.kt)("h2",c({},{id:"request-timing"}),"request.timing()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,a.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,a.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,a.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,a.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"}),"Resource Timing API"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto('http://example.com')\n]);\nconsole.log(request.timing());\n")),(0,a.kt)("h2",c({},{id:"request-url"}),"request.url()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"URL of the request."))}v.isMDXComponent=!0}}]);