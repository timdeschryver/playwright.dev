"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8395],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3190:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return y}});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const d={id:"selenium-grid",title:"Selenium Grid"},m=void 0,f={unversionedId:"selenium-grid",id:"version-1.23/selenium-grid",title:"Selenium Grid",description:"Selenium 4",source:"@site/versioned_docs/version-1.23/selenium-grid.mdx",sourceDirName:".",slug:"/selenium-grid",permalink:"/java/docs/selenium-grid",tags:[],version:"1.23",frontMatter:{id:"selenium-grid",title:"Selenium Grid"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/java/docs/ci"},next:{title:"Supported languages",permalink:"/java/docs/languages"}},b={},y=[{value:"Selenium 4",id:"selenium-4",level:2},{value:"Selenium 3",id:"selenium-3",level:2}],g={toc:y};function h(e){var t,r=e,{components:o}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),c),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",p({},{id:"selenium-4"}),"Selenium 4"),(0,n.kt)("p",null,"Playwright can connect to ",(0,n.kt)("a",p({parentName:"p"},{href:"https://www.selenium.dev/documentation/grid/"}),"Selenium Grid Hub")," that runs Selenium 4 to launch ",(0,n.kt)("strong",{parentName:"p"},"Chrome")," or ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Edge")," browser, instead of running browser on the local machine. To enable this mode, set ",(0,n.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_URL")," environment variable pointing to your Selenium Grid Hub."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub mvn test\n")),(0,n.kt)("p",null,"You don't have to change your code, just use ",(0,n.kt)("a",p({parentName:"p"},{href:"/java/docs/api/class-browsertype#browser-type-launch"}),"BrowserType.launch([options])")," as usual."),(0,n.kt)("p",null,"When using Selenium Grid Hub, you can ",(0,n.kt)("a",p({parentName:"p"},{href:"/java/docs/browsers#skip-browser-downloads"}),"skip browser downloads"),"."),(0,n.kt)("p",null,"If your grid requires additional capabilities to be set (for example, you use an external service), you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"SELENIUM_REMOTE_CAPABILITIES")," environment variable to provide JSON-serialized capabilities."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"SELENIUM_REMOTE_URL=http://internal.grid:4444/wd/hub SELENIUM_REMOTE_CAPABILITIES=\"{'mygrid:options':{os:'windows',username:'John',password:'secure'}}\" mvn test\n")),(0,n.kt)("h2",p({},{id:"selenium-3"}),"Selenium 3"),(0,n.kt)("p",null,"Internally, Playwright connects to the browser using ",(0,n.kt)("a",p({parentName:"p"},{href:"https://chromedevtools.github.io/devtools-protocol/"}),"Chrome DevTools Protocol")," websocket. Selenium 4 hub exposes this capability, while Selenium 3 does not."),(0,n.kt)("p",null,"This means that Selenium 3 is supported in a best-effort manner, where Playwright tries to connect to the grid node directly. Grid nodes must be directly accessible from the machine that runs Playwright."))}h.isMDXComponent=!0}}]);