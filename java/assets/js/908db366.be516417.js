"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2124],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||l;return t?n.createElement(h,s(s({ref:a},d),{},{components:t})):n.createElement(h,s({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(7294),r=t(9443);var l=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,d=39;var c=function(e){var a=e.lazy,t=e.block,r=e.defaultValue,c=e.values,u=e.groupId,m=e.className,h=l(),v=h.tabGroupChoices,f=h.setTabGroupChoices,g=(0,n.useState)(r),k=g[0],j=g[1],N=n.Children.toArray(e.children),b=[];if(null!=u){var H=v[u];null!=H&&H!==k&&c.some((function(e){return e.value===H}))&&j(H)}var y=function(e){var a=e.currentTarget,t=b.indexOf(a),n=c[t].value;j(n),null!=u&&(f(u,n),setTimeout((function(){var e,t,n,r,l,s,i,p;(e=a.getBoundingClientRect(),t=e.top,n=e.left,r=e.bottom,l=e.right,s=window,i=s.innerHeight,p=s.innerWidth,t>=0&&l<=p&&r<=i&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(o),setTimeout((function(){return a.classList.remove(o)}),2e3))}),150))},w=function(e){var a,t;switch(e.keyCode){case d:var n=b.indexOf(e.target)+1;t=b[n]||b[0];break;case p:var r=b.indexOf(e.target)-1;t=b[r]||b[b.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},m)},c.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":k===a}),key:a,ref:function(e){return b.push(e)},onKeyDown:w,onFocus:y,onClick:y},t)}))),a?(0,n.cloneElement)(N.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==k})}))))}},9443:function(e,a,t){var n=(0,t(7294).createContext)(void 0);a.Z=n},7150:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return c}});var n=t(2122),r=t(9756),l=(t(7294),t(3905)),s=(t(5064),t(8215),{id:"class-jshandle",title:"JSHandle"}),i=void 0,o={unversionedId:"api/class-jshandle",id:"version-1.11.0/api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the Page.evaluateHandle(expression[, arg]) method.",source:"@site/versioned_docs/version-1.11.0/api/class-jshandle.mdx",sourceDirName:"api",slug:"/api/class-jshandle",permalink:"/java/docs/1.11.0/api/class-jshandle",version:"1.11.0",frontMatter:{id:"class-jshandle",title:"JSHandle"},sidebar:"version-1.11.0/api",previous:{title:"Frame",permalink:"/java/docs/1.11.0/api/class-frame"},next:{title:"Keyboard",permalink:"/java/docs/1.11.0/api/class-keyboard"}},p=[{value:"JsHandle.asElement()",id:"jshandleaselement",children:[]},{value:"JsHandle.dispose()",id:"jshandledispose",children:[]},{value:"JsHandle.evaluate(expression, arg)",id:"jshandleevaluateexpression-arg",children:[]},{value:"JsHandle.evaluateHandle(expression, arg)",id:"jshandleevaluatehandleexpression-arg",children:[]},{value:"JsHandle.getProperties()",id:"jshandlegetproperties",children:[]},{value:"JsHandle.getProperty(propertyName)",id:"jshandlegetpropertypropertyname",children:[]},{value:"JsHandle.jsonValue()",id:"jshandlejsonvalue",children:[]}],d={toc:p};function c(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pageevaluatehandleexpression-arg"},"Page.evaluateHandle(expression[, arg])")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'JSHandle windowHandle = page.evaluateHandle("() => window");\n// ...\n')),(0,l.kt)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-jshandle#jshandledispose"},"JsHandle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,l.kt)("p",null,"JSHandle instances can be used as an argument in ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pageevalonselectorselector-expression-arg"},"Page.evalOnSelector(selector, expression[, arg])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pageevaluateexpression-arg"},"Page.evaluate(expression[, arg])")," and ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pageevaluatehandleexpression-arg"},"Page.evaluateHandle(expression[, arg])")," methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle#jshandleaselement"},"JsHandle.asElement()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle#jshandledispose"},"JsHandle.dispose()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle#jshandleevaluateexpression-arg"},"JsHandle.evaluate(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle#jshandleevaluatehandleexpression-arg"},"JsHandle.evaluateHandle(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle#jshandlegetproperties"},"JsHandle.getProperties()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle#jshandlegetpropertypropertyname"},"JsHandle.getProperty(propertyName)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle#jshandlejsonvalue"},"JsHandle.jsonValue()"))),(0,l.kt)("h2",{id:"jshandleaselement"},"JsHandle.asElement()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,l.kt)("p",null,"Returns either ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),"."),(0,l.kt)("h2",{id:"jshandledispose"},"JsHandle.dispose()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),(0,l.kt)("h2",{id:"jshandleevaluateexpression-arg"},"JsHandle.evaluate(expression","[, arg]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ElementHandle tweetHandle = page.querySelector(".tweet .retweets");\nassertEquals("10 retweets", tweetHandle.evaluate("node => node.innerText"));\n')),(0,l.kt)("h2",{id:"jshandleevaluatehandleexpression-arg"},"JsHandle.evaluateHandle(expression","[, arg]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,l.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,l.kt)("p",null,"Returns the return value of ",(0,l.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"This method passes this handle as the first argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,l.kt)("p",null,"The only difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("p",null,"If the function passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pageevaluatehandleexpression-arg"},"Page.evaluateHandle(expression[, arg])")," for more details."),(0,l.kt)("h2",{id:"jshandlegetproperties"},"JsHandle.getProperties()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">>")),(0,l.kt)("p",null,"The method returns a map with ",(0,l.kt)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'JSHandle handle = page.evaluateHandle("() => ({window, document}"););\nMap<String, JSHandle> properties = handle.getProperties();\nJSHandle windowHandle = properties.get("window");\nJSHandle documentHandle = properties.get("document");\nhandle.dispose();\n')),(0,l.kt)("h2",{id:"jshandlegetpropertypropertyname"},"JsHandle.getProperty(propertyName)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"propertyName")," <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"> property to get"),(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,l.kt)("p",null,"Fetches a single property from the referenced object."),(0,l.kt)("h2",{id:"jshandlejsonvalue"},"JsHandle.jsonValue()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"returns: <",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">")),(0,l.kt)("p",null,"Returns a JSON representation of the object. If the object has a ",(0,l.kt)("inlineCode",{parentName:"p"},"toJSON")," function, it ",(0,l.kt)("strong",{parentName:"p"},"will not be called"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}c.isMDXComponent=!0},6010:function(e,a,t){function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function r(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}t.d(a,{Z:function(){return r}})}}]);