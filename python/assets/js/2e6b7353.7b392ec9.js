(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3933],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(o,".").concat(h)]||u[h]||c[h]||l;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),r=a(944),l=a(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var o=37,p=39;var d=function(e){var t=e.lazy,a=e.block,d=e.defaultValue,c=e.values,u=e.groupId,h=e.className,m=(0,r.Z)(),k=m.tabGroupChoices,v=m.setTabGroupChoices,f=(0,n.useState)(d),y=f[0],g=f[1],_=n.Children.toArray(e.children),N=[];if(null!=u){var b=k[u];null!=b&&b!==y&&c.some((function(e){return e.value===b}))&&g(b)}var w=function(e){var t=e.currentTarget,a=N.indexOf(t),n=c[a].value;g(n),null!=u&&(v(u,n),setTimeout((function(){var e,a,n,r,l,s,o,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,s=window,o=s.innerHeight,p=s.innerWidth,a>=0&&l<=p&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},j=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case o:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(_.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6131:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),s=a(1395),i=a(8215),o={id:"class-jshandle",title:"JSHandle"},p={unversionedId:"api/class-jshandle",id:"version-1.9.0/api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluatehandle(expression, **kwargs) method.",source:"@site/versioned_docs/version-1.9.0/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/python/docs/1.9.0/api/class-jshandle",version:"1.9.0",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"version-1.9.0/api",previous:{title:"Frame",permalink:"/python/docs/1.9.0/api/class-frame"},next:{title:"Keyboard",permalink:"/python/docs/1.9.0/api/class-keyboard"}},d=[{value:"js_handle.as_element()",id:"js_handleas_element",children:[]},{value:"js_handle.dispose()",id:"js_handledispose",children:[]},{value:"js_handle.evaluate(expression, **kwargs)",id:"js_handleevaluateexpression-kwargs",children:[]},{value:"js_handle.evaluate_handle(expression, **kwargs)",id:"js_handleevaluate_handleexpression-kwargs",children:[]},{value:"js_handle.get_properties()",id:"js_handleget_properties",children:[]},{value:"js_handle.get_property(property_name)",id:"js_handleget_propertyproperty_name",children:[]},{value:"js_handle.json_value()",id:"js_handlejson_value",children:[]}],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-page#pageevaluate_handleexpression-kwargs"},"page.evaluate_handle(expression, **kwargs)")," method."),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'window_handle = page.evaluate_handle("window")\n# ...\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'window_handle = await page.evaluate_handle("window")\n# ...\n')))),(0,l.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-jshandle#js_handledispose"},"js_handle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,l.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-page#pageeval_on_selectorselector-expression-kwargs"},"page.eval_on_selector(selector, expression, **kwargs)"),", ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-page#pageevaluateexpression-kwargs"},"page.evaluate(expression, **kwargs)")," and ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-page#pageevaluate_handleexpression-kwargs"},"page.evaluate_handle(expression, **kwargs)")," methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle#js_handleas_element"},"js_handle.as_element()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle#js_handledispose"},"js_handle.dispose()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle#js_handleevaluateexpression-kwargs"},"js_handle.evaluate(expression, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle#js_handleevaluate_handleexpression-kwargs"},"js_handle.evaluate_handle(expression, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle#js_handleget_properties"},"js_handle.get_properties()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle#js_handleget_propertyproperty_name"},"js_handle.get_property(property_name)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle#js_handlejson_value"},"js_handle.json_value()"))),(0,l.kt)("h2",{id:"js_handleas_element"},"js_handle.as_element()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),"|",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,l.kt)("p",null,"Returns either ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),"."),(0,l.kt)("h2",{id:"js_handledispose"},"js_handle.dispose()"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,l.kt)("h2",{id:"js_handleevaluateexpression-kwargs"},"js_handle.evaluate(expression, **kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'tweet_handle = page.query_selector(".tweet .retweets")\nassert tweet_handle.evaluate("node => node.innerText") == "10 retweets"\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'tweet_handle = await page.query_selector(".tweet .retweets")\nassert await tweet_handle.evaluate("node => node.innerText") == "10 retweets"\n')))),(0,l.kt)("h2",{id:"js_handleevaluate_handleexpression-kwargs"},"js_handle.evaluate_handle(expression, **kwargs)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," <","[EvaluationArgument]","> Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"The only difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/python/docs/1.9.0/api/class-page#pageevaluate_handleexpression-kwargs"},"page.evaluate_handle(expression, **kwargs)")," for more details."),(0,l.kt)("h2",{id:"js_handleget_properties"},"js_handle.get_properties()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <","[Map]","[",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"]",">")),(0,l.kt)("p",null,"The method returns a map with ",(0,l.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,l.kt)(s.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'handle = page.evaluate_handle("{window, document}")\nproperties = handle.get_properties()\nwindow_handle = properties.get("window")\ndocument_handle = properties.get("document")\nhandle.dispose()\n'))),(0,l.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'handle = await page.evaluate_handle("{window, document}")\nproperties = await handle.get_properties()\nwindow_handle = properties.get("window")\ndocument_handle = properties.get("document")\nawait handle.dispose()\n')))),(0,l.kt)("h2",{id:"js_handleget_propertyproperty_name"},"js_handle.get_property(property_name)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"property_name")," <",(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"> property to get"),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/python/docs/1.9.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,l.kt)("p",null,"Fetches a single property from the referenced object."),(0,l.kt)("h2",{id:"js_handlejson_value"},"js_handle.json_value()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">")),(0,l.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,l.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,l.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}u.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);