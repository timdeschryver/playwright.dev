"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4405],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(t),d=n,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||o;return t?a.createElement(m,l(l({ref:r},c),{},{components:t})):a.createElement(m,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8215:function(e,r,t){var a=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return u}});var a=t(7294),n=t(9443);var o=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var r=e.lazy,t=e.block,n=e.defaultValue,u=e.values,k=e.groupId,d=e.className,m=o(),v=m.tabGroupChoices,f=m.setTabGroupChoices,h=(0,a.useState)(n),w=h[0],b=h[1],g=a.Children.toArray(e.children),N=[];if(null!=k){var j=v[k];null!=j&&j!==w&&u.some((function(e){return e.value===j}))&&b(j)}var y=function(e){var r=e.currentTarget,t=N.indexOf(r),a=u[t].value;b(a),null!=k&&(f(k,a),setTimeout((function(){var e,t,a,n,o,l,i,p;(e=r.getBoundingClientRect(),t=e.top,a=e.left,n=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,t>=0&&o<=p&&n<=i&&a>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},W=function(e){var r,t;switch(e.keyCode){case c:var a=N.indexOf(e.target)+1;t=N[a]||N[0];break;case p:var n=N.indexOf(e.target)-1;t=N[n]||N[N.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},d)},u.map((function(e){var r=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:w===r?0:-1,"aria-selected":w===r,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":w===r}),key:r,ref:function(e){return N.push(e)},onKeyDown:W,onFocus:y,onClick:y},t)}))),r?(0,a.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==w})}))))}},9443:function(e,r,t){var a=(0,t(7294).createContext)(void 0);r.Z=a},8398:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=t(2122),n=t(9756),o=(t(7294),t(3905)),l=(t(5064),t(8215),{id:"class-worker",title:"Worker"}),i=void 0,s={unversionedId:"api/class-worker",id:"version-1.12.0/api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.12.0/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/java/docs/1.12.0/api/class-worker",version:"1.12.0",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"version-1.12.0/api",previous:{title:"WebSocketFrame",permalink:"/java/docs/1.12.0/api/class-websocketframe"}},p=[{value:"Worker.onClose(handler)",id:"worker-event-close",children:[]},{value:"Worker.evaluate(expression, arg)",id:"worker-evaluate",children:[]},{value:"Worker.evaluateHandle(expression, arg)",id:"worker-evaluate-handle",children:[]},{value:"Worker.url()",id:"worker-url",children:[]},{value:"Worker.waitForClose(options, callback)",id:"worker-wait-for-close",children:[]}],c={toc:p};function u(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.onWorker(worker -> {\n  System.out.println("Worker created: " + worker.url());\n  worker.onClose(worker1 -> System.out.println("Worker destroyed: " + worker1.url()));\n});\nSystem.out.println("Current workers:");\nfor (Worker worker : page.workers())\n  System.out.println("  " + worker.url());\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-worker#worker-event-close"},"Worker.onClose(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-worker#worker-url"},"Worker.url()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-worker#worker-wait-for-close"},"Worker.waitForClose([options], callback)"))),(0,o.kt)("h2",{id:"worker-event-close"},"Worker.onClose(handler)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"worker-evaluate"},"Worker.evaluate(expression","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg")," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"},"Object"),">")),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"worker-evaluate-handle"},"Worker.evaluateHandle(expression","[, arg]",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg")," ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),"."),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),">")),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate"},"Worker.evaluate(expression[, arg])")," and ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," is that ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," returns ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-worker#worker-evaluate-handle"},"Worker.evaluateHandle(expression[, arg])")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"worker-url"},"Worker.url()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,o.kt)("h2",{id:"worker-wait-for-close"},"Worker.waitForClose(","[options]",", callback)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"Worker.WaitForCloseOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.setDefaultTimeout(timeout)"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"callback")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"},"Runnable"),">"," Callback that performs the action triggering the event."),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Performs action and waits for the Worker to close."))}u.isMDXComponent=!0},6010:function(e,r,t){function a(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=a(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function n(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=a(e))&&(n&&(n+=" "),n+=r);return n}t.d(r,{Z:function(){return n}})}}]);