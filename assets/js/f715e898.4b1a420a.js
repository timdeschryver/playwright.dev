"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[31834],{3905:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return m}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=n,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(d,i(i({ref:r},g),{},{components:t})):a.createElement(d,i({ref:r},g))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,r,t){var a=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)}},55064:function(e,r,t){t.d(r,{Z:function(){return u}});var a=t(67294),n=t(79443);var l=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,g=39;var u=function(e){var r=e.lazy,t=e.block,n=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=l(),f=d.tabGroupChoices,h=d.setTabGroupChoices,v=(0,a.useState)(n),b=v[0],k=v[1],y=a.Children.toArray(e.children),N=[];if(null!=p){var O=f[p];null!=O&&O!==b&&u.some((function(e){return e.value===O}))&&k(O)}var w=function(e){var r=e.currentTarget,t=N.indexOf(r),a=u[t].value;k(a),null!=p&&(h(p,a),setTimeout((function(){var e,t,a,n,l,i,o,c;(e=r.getBoundingClientRect(),t=e.top,a=e.left,n=e.bottom,l=e.right,i=window,o=i.innerHeight,c=i.innerWidth,t>=0&&l<=c&&n<=o&&a>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},j=function(e){var r,t;switch(e.keyCode){case g:var a=N.indexOf(e.target)+1;t=N[a]||N[0];break;case c:var n=N.indexOf(e.target)-1;t=N[n]||N[N.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},u.map((function(e){var r=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:b===r?0:-1,"aria-selected":b===r,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===r}),key:r,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:w,onClick:w},t)}))),r?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==b})}))))}},79443:function(e,r,t){var a=(0,t(67294).createContext)(void 0);r.Z=a},25436:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=t(22122),n=t(19756),l=(t(67294),t(3905)),i=(t(55064),t(58215),{id:"class-logger",title:"Logger"}),o=void 0,s={unversionedId:"api/class-logger",id:"version-1.13.0/api/class-logger",isDocsHomePage:!1,title:"Logger",description:"Playwright generates a lot of logs and they are accessible via the pluggable logger sink.",source:"@site/versioned_docs/version-1.13.0/api/class-logger.mdx",sourceDirName:"api",slug:"/api/class-logger",permalink:"/docs/api/class-logger",version:"1.13.0",frontMatter:{id:"class-logger",title:"Logger"},sidebar:"version-1.13.0/api",previous:{title:"Keyboard",permalink:"/docs/api/class-keyboard"},next:{title:"Mouse",permalink:"/docs/api/class-mouse"}},c=[{value:"logger.isEnabled(name, severity)",id:"logger-is-enabled",children:[]},{value:"logger.log(name, severity, message, args, hints)",id:"logger-log",children:[]}],g={toc:c};function u(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright generates a lot of logs and they are accessible via the pluggable logger sink."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch({\n    logger: {\n      isEnabled: (name, severity) => name === 'browser',\n      log: (name, severity, message, args) => console.log(`${name} ${message}`)\n    }\n  });\n  ...\n})();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-logger#logger-is-enabled"},"logger.isEnabled(name, severity)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-logger#logger-log"},"logger.log(name, severity, message, args, hints)"))),(0,l.kt)("h2",{id:"logger-is-enabled"},"logger.isEnabled(name, severity)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-param-name"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," logger name",(0,l.kt)("a",{href:"#logger-is-enabled-param-name",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"severity"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-param-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,l.kt)("a",{href:"#logger-is-enabled-param-severity",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-is-enabled-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,l.kt)("a",{href:"#logger-is-enabled-return",class:"list-anchor"},"#"))),(0,l.kt)("p",null,"Determines whether sink is interested in the logger with the given name and severity."),(0,l.kt)("h2",{id:"logger-log"},"logger.log(name, severity, message, args, hints)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-param-name"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," logger name",(0,l.kt)("a",{href:"#logger-log-param-name",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"severity"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-param-severity"})," ","<",'"verbose"|"info"|"warning"|"error"',">",(0,l.kt)("a",{href:"#logger-log-param-severity",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"message"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-param-message"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error"),">"," log message format",(0,l.kt)("a",{href:"#logger-log-param-message",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"args"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-param-args"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," message arguments",(0,l.kt)("a",{href:"#logger-log-param-args",class:"list-anchor"},"#")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hints"),(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-param-hints"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," optional formatting hints",(0,l.kt)("a",{href:"#logger-log-param-hints",class:"list-anchor"},"#"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"color")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional preferred logger color."))),(0,l.kt)("li",{parentName:"ul"},"returns:",(0,l.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"logger-log-return"})," ","<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,l.kt)("a",{href:"#logger-log-return",class:"list-anchor"},"#"))))}u.isMDXComponent=!0},86010:function(e,r,t){function a(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=a(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function n(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=a(e))&&(n&&(n+=" "),n+=r);return n}t.d(r,{Z:function(){return n}})}}]);