"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8365],{3905:function(e,r,a){a.d(r,{Zo:function(){return c},kt:function(){return d}});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),p=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},k=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(a),d=n,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||o;return a?t.createElement(m,l(l({ref:r},c),{},{components:a})):t.createElement(m,l({ref:r},c))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8215:function(e,r,a){var t=a(7294);r.Z=function(e){var r=e.children,a=e.hidden,n=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:n},r)}},5064:function(e,r,a){a.d(r,{Z:function(){return u}});var t=a(7294),n=a(9443);var o=function(){var e=(0,t.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var r=e.lazy,a=e.block,n=e.defaultValue,u=e.values,k=e.groupId,d=e.className,m=o(),v=m.tabGroupChoices,f=m.setTabGroupChoices,h=(0,t.useState)(n),g=h[0],w=h[1],b=t.Children.toArray(e.children),N=[];if(null!=k){var j=v[k];null!=j&&j!==g&&u.some((function(e){return e.value===j}))&&w(j)}var y=function(e){var r=e.currentTarget,a=N.indexOf(r),t=u[a].value;w(t),null!=k&&(f(k,t),setTimeout((function(){var e,a,t,n,o,l,i,p;(e=r.getBoundingClientRect(),a=e.top,t=e.left,n=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&o<=p&&n<=i&&t>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},x=function(e){var r,a;switch(e.keyCode){case c:var t=N.indexOf(e.target)+1;a=N[t]||N[0];break;case p:var n=N.indexOf(e.target)-1;a=N[n]||N[N.length-1]}null==(r=a)||r.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var r=e.value,a=e.label;return t.createElement("li",{role:"tab",tabIndex:g===r?0:-1,"aria-selected":g===r,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===r}),key:r,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:y,onClick:y},a)}))),r?(0,t.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},b.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==g})}))))}},9443:function(e,r,a){var t=(0,a(7294).createContext)(void 0);r.Z=t},1836:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var t=a(2122),n=a(9756),o=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"class-worker",title:"Worker"}),i=void 0,s={unversionedId:"api/class-worker",id:"version-1.11.0/api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.11.0/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/java/docs/1.11.0/api/class-worker",version:"1.11.0",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"version-1.11.0/api",previous:{title:"WebSocketFrame",permalink:"/java/docs/1.11.0/api/class-websocketframe"}},p=[{value:"Worker.onClose(handler)",id:"workeronclosehandler",children:[]},{value:"Worker.evaluate(expression, arg)",id:"workerevaluateexpression-arg",children:[]},{value:"Worker.evaluateHandle(expression, arg)",id:"workerevaluatehandleexpression-arg",children:[]},{value:"Worker.url()",id:"workerurl",children:[]},{value:"Worker.waitForClose(options, callback)",id:"workerwaitforcloseoptions-callback",children:[]}],c={toc:p};function u(e){var r=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.onWorker(worker -> {\n  System.out.println("Worker created: " + worker.url());\n  worker.onClose(worker1 -> System.out.println("Worker destroyed: " + worker1.url()));\n});\nSystem.out.println("Current workers:");\nfor (Worker worker : page.workers())\n  System.out.println("  " + worker.url());\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-worker#workeronclosehandler"},"Worker.onClose(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-worker#workerevaluateexpression-arg"},"Worker.evaluate(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-worker#workerevaluatehandleexpression-arg"},"Worker.evaluateHandle(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-worker#workerurl"},"Worker.url()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-worker#workerwaitforcloseoptions-callback"},"Worker.waitForClose([options], callback)"))),(0,o.kt)("h2",{id:"workeronclosehandler"},"Worker.onClose(handler)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: <",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"workerevaluateexpression-arg"},"Worker.evaluate(expression","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">")),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluateexpression-arg"},"Worker.evaluate(expression[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluateexpression-arg"},"Worker.evaluate(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluateexpression-arg"},"Worker.evaluate(expression[, arg])")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluateexpression-arg"},"Worker.evaluate(expression[, arg])")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"workerevaluatehandleexpression-arg"},"Worker.evaluateHandle(expression","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg")," <",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),"> Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluateexpression-arg"},"Worker.evaluate(expression[, arg])")," and ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluatehandleexpression-arg"},"Worker.evaluateHandle(expression[, arg])")," is that ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluatehandleexpression-arg"},"Worker.evaluateHandle(expression[, arg])")," returns ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluatehandleexpression-arg"},"Worker.evaluateHandle(expression[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-worker#workerevaluatehandleexpression-arg"},"Worker.evaluateHandle(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"workerurl"},"Worker.url()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,o.kt)("h2",{id:"workerwaitforcloseoptions-callback"},"Worker.waitForClose(","[options]",", callback)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," <",(0,o.kt)("inlineCode",{parentName:"li"},"Worker.WaitForCloseOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),"> Maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"},"BrowserContext.setDefaultTimeout(timeout)"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"callback")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"},"Runnable"),"> Callback that performs the action triggering the event."),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Performs action and waits for the Worker to close."))}u.isMDXComponent=!0},6010:function(e,r,a){function t(e){var r,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(a=t(e[r]))&&(n&&(n+=" "),n+=a);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function n(){for(var e,r,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(r=t(e))&&(n&&(n+=" "),n+=r);return n}a.d(r,{Z:function(){return n}})}}]);