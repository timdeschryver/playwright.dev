"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1368],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(67294),n=r(79443);var s=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,c=e.values,d=e.groupId,m=e.className,h=s(),f=h.tabGroupChoices,y=h.setTabGroupChoices,k=(0,a.useState)(n),N=k[0],q=k[1],v=a.Children.toArray(e.children),g=[];if(null!=d){var b=f[d];null!=b&&b!==N&&c.some((function(e){return e.value===b}))&&q(b)}var _=function(e){var t=e.currentTarget,r=g.indexOf(t),a=c[r].value;q(a),null!=d&&(y(d,a),setTimeout((function(){var e,r,a,n,s,i,l,p;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,s=e.right,i=window,l=i.innerHeight,p=i.innerWidth,r>=0&&s<=p&&n<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case u:var a=g.indexOf(e.target)+1;r=g[a]||g[0];break;case p:var n=g.indexOf(e.target)-1;r=g[n]||g[g.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:w,onFocus:_,onClick:_},r)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},30597:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=r(22122),n=r(19756),s=(r(67294),r(3905)),i=r(55064),l=r(58215),o={id:"class-request",title:"Request"},p=void 0,u={unversionedId:"api/class-request",id:"version-1.11.0/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.11.0/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/python/docs/1.11.0/api/class-request",version:"1.11.0",frontMatter:{id:"class-request",title:"Request"},sidebar:"version-1.11.0/api",previous:{title:"Page",permalink:"/python/docs/1.11.0/api/class-page"},next:{title:"Response",permalink:"/python/docs/1.11.0/api/class-response"}},c=[{value:"request.failure",id:"requestfailure",children:[]},{value:"request.frame",id:"requestframe",children:[]},{value:"request.headers",id:"requestheaders",children:[]},{value:"request.is_navigation_request()",id:"requestis_navigation_request",children:[]},{value:"request.method",id:"requestmethod",children:[]},{value:"request.post_data",id:"requestpost_data",children:[]},{value:"request.post_data_buffer",id:"requestpost_data_buffer",children:[]},{value:"request.post_data_json",id:"requestpost_data_json",children:[]},{value:"request.redirected_from",id:"requestredirected_from",children:[]},{value:"request.redirected_to",id:"requestredirected_to",children:[]},{value:"request.resource_type",id:"requestresource_type",children:[]},{value:"request.response()",id:"requestresponse",children:[]},{value:"request.timing",id:"requesttiming",children:[]},{value:"request.url",id:"requesturl",children:[]}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-page",title:"Page"},"Page"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageonrequest"},'page.on("request")')," emitted when the request is issued by the page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageonresponse"},'page.on("response")')," emitted when/if the response status and headers are received for the request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-page#pageonrequestfinished"},'page.on("requestfinished")')," emitted when the response body is downloaded and the request is complete.")),(0,s.kt)("p",null,"If request fails at some point, then instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-page#pageonrequestfailed"},'page.on("requestfailed")')," event is emitted."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,s.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestfailure"},"request.failure")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestframe"},"request.frame")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestheaders"},"request.headers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestis_navigation_request"},"request.is_navigation_request()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestmethod"},"request.method")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestpost_data"},"request.post_data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestpost_data_buffer"},"request.post_data_buffer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestpost_data_json"},"request.post_data_json")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestredirected_from"},"request.redirected_from")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestredirected_to"},"request.redirected_to")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestresource_type"},"request.resource_type")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requestresponse"},"request.response()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requesttiming"},"request.timing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request#requesturl"},"request.url"))),(0,s.kt)("h2",{id:"requestfailure"},"request.failure"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,s.kt)("p",null,"The method returns ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,s.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,s.kt)("p",null,"Example of logging of all the failed requests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'page.on("requestfailed", lambda request: print(request.url + " " + request.failure))\n')),(0,s.kt)("h2",{id:"requestframe"},"request.frame"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-frame",title:"Frame"},"Frame"),">")),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,s.kt)("h2",{id:"requestheaders"},"request.headers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">")),(0,s.kt)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),(0,s.kt)("h2",{id:"requestis_navigation_request"},"request.is_navigation_request()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">")),(0,s.kt)("p",null,"Whether this request is driving frame's navigation."),(0,s.kt)("h2",{id:"requestmethod"},"request.method"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,s.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,s.kt)("h2",{id:"requestpost_data"},"request.post_data"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,s.kt)("p",null,"Request's post body, if any."),(0,s.kt)("h2",{id:"requestpost_data_buffer"},"request.post_data_buffer"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">")),(0,s.kt)("p",null,"Request's post body in a binary form, if any."),(0,s.kt)("h2",{id:"requestpost_data_json"},"request.post_data_json"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"},"Any"),">")),(0,s.kt)("p",null,"Returns parsed request's body for ",(0,s.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,s.kt)("p",null,"When the response is ",(0,s.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,s.kt)("h2",{id:"requestredirected_from"},"request.redirected_from"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request",title:"Request"},"Request"),">")),(0,s.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,s.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,s.kt)("p",null,"For example, if the website ",(0,s.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n'))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = await page.goto("http://example.com")\nprint(response.request.redirected_from.url) # "http://example.com"\n')))),(0,s.kt)("p",null,"If the website ",(0,s.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n'))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'response = await page.goto("https://google.com")\nprint(response.request.redirected_from) # None\n')))),(0,s.kt)("h2",{id:"requestredirected_to"},"request.redirected_to"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-request",title:"Request"},"Request"),">")),(0,s.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,s.kt)("p",null,"This method is the opposite of ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-request#requestredirected_from"},"request.redirected_from"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"assert request.redirected_from.redirected_to == request\n")),(0,s.kt)("h2",{id:"requestresource_type"},"request.resource_type"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,s.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,s.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,s.kt)("h2",{id:"requestresponse"},"request.response()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,s.kt)("a",{parentName:"li",href:"/python/docs/1.11.0/api/class-response",title:"Response"},"Response"),">")),(0,s.kt)("p",null,"Returns the matching ",(0,s.kt)("a",{parentName:"p",href:"/python/docs/1.11.0/api/class-response",title:"Response"},"Response")," object, or ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,s.kt)("h2",{id:"requesttiming"},"request.timing"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"startTime")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectStart")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectEnd")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestStart")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseStart")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseEnd")," <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,s.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,s.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,s.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_event("requestfinished") as request_info:\n    page.goto("http://example.com")\nrequest = request_info.value\nprint(request.timing)\n'))),(0,s.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_event("requestfinished") as request_info:\n    await page.goto("http://example.com")\nrequest = await request_info.value\nprint(request.timing)\n')))),(0,s.kt)("h2",{id:"requesturl"},"request.url"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns: <",(0,s.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,s.kt)("p",null,"URL of the request."))}m.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);