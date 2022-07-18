"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9195],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return w}});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),w=l,g=u["".concat(s,".").concat(w)]||u[w]||h[w]||i;return r?a.createElement(g,n(n({ref:t},p),{},{components:r})):a.createElement(g,n({ref:t},p))}));function w(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,n=new Array(i);n[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,n[1]=o;for(var c=2;c<i;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3461:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return w},default:function(){return f},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return m}});var a=r(3905),l=Object.defineProperty,i=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&p(e,r,t[r]);return e};const u={id:"class-playwright",title:"Playwright"},w=void 0,g={unversionedId:"api/class-playwright",id:"version-1.23/api/class-playwright",title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.23/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/java/docs/api/class-playwright",tags:[],version:"1.23",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"api",next:{title:"APIRequest",permalink:"/java/docs/api/class-apirequest"}},y={},m=[{value:"Playwright.close()",id:"playwright-close",level:2},{value:"Playwright.create(options)",id:"playwright-create",level:2},{value:"Playwright.chromium()",id:"playwright-chromium",level:2},{value:"Playwright.firefox()",id:"playwright-firefox",level:2},{value:"Playwright.request()",id:"playwright-request",level:2},{value:"Playwright.selectors()",id:"playwright-selectors",level:2},{value:"Playwright.webkit()",id:"playwright-webkit",level:2}],d={toc:m};function f(e){var t,r=e,{components:l}=r,p=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},d),p),i(t,n({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.navigate("http://example.com");\n      // other actions...\n      browser.close();\n    }\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-close"}),"Playwright.close()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-create"}),"Playwright.create([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-chromium"}),"Playwright.chromium()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-firefox"}),"Playwright.firefox()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-request"}),"Playwright.request()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-selectors"}),"Playwright.selectors()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright#playwright-webkit"}),"Playwright.webkit()"))),(0,a.kt)("h2",h({},{id:"playwright-close"}),"Playwright.close()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-close-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#playwright-close-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Terminates this instance of Playwright, will also close all created browsers if they are still running."),(0,a.kt)("h2",h({},{id:"playwright-create"}),"Playwright.create(","[options]",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("inlineCode",{parentName:"li"},"Playwright.CreateOptions"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setEnv"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-create-option-env"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,a.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">"," Additional environment variables that will be passed to the driver process. By default driver process inherits environment variables of the Playwright process.",(0,a.kt)("a",{href:"#playwright-create-option-env",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"playwright-create-return"})," ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-playwright",title:"Playwright"}),"Playwright"),">",(0,a.kt)("a",{href:"#playwright-create-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Launches new Playwright driver process and connects to it. ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-playwright#playwright-close"}),"Playwright.close()")," should be called when the instance is no longer needed."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-java"}),'Playwright playwright = Playwright.create()) {\nBrowser browser = playwright.webkit().launch();\nPage page = browser.newPage();\npage.navigate("https://www.w3.org/");\nplaywright.close();\n')),(0,a.kt)("h2",h({},{id:"playwright-chromium"}),"Playwright.chromium()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",h({},{id:"playwright-firefox"}),"Playwright.firefox()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",h({},{id:"playwright-request"}),"Playwright.request()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-apirequest",title:"APIRequest"}),"APIRequest"),">")),(0,a.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,a.kt)("h2",h({},{id:"playwright-selectors"}),"Playwright.selectors()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-selectors",title:"Selectors"}),"Selectors"),">")),(0,a.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/selectors"}),"Working with selectors")," for more information."),(0,a.kt)("h2",h({},{id:"playwright-webkit"}),"Playwright.webkit()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",h({parentName:"li"},{href:"/java/docs/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser"),"."))}f.isMDXComponent=!0}}]);