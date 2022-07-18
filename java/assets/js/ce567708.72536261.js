"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5263],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},w=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),w=l(r),m=o,f=w["".concat(c,".").concat(m)]||w[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=w;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}w.displayName="MDXCreateElement"},8482:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return w},metadata:function(){return f},toc:function(){return d}});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))l.call(t,r)&&p(e,r,t[r]);return e};const w={id:"browser-contexts",title:"Browser Contexts"},m=void 0,f={unversionedId:"browser-contexts",id:"version-1.21/browser-contexts",title:"Browser Contexts",description:"- Browser context",source:"@site/versioned_docs/version-1.21/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/java/docs/1.21/browser-contexts",tags:[],version:"1.21",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"docs",previous:{title:"Browsers",permalink:"/java/docs/1.21/browsers"},next:{title:"Command line tools",permalink:"/java/docs/1.21/cli"}},b={},d=[{value:"Browser context",id:"browser-context",level:2},{value:"Multiple contexts",id:"multiple-contexts",level:2},{value:"API reference",id:"api-reference",level:3}],x={toc:d};function y(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},x),p),a(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#browser-context"}),"Browser context")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"#multiple-contexts"}),"Multiple contexts"))),(0,n.kt)("h2",u({},{id:"browser-context"}),"Browser context"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.21/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.21/intro"}),"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\nPage page = context.newPage();\n")),(0,n.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// FIXME\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType devices = playwright.devices();\n      BrowserContext context = browser.newContext(new Browser.NewContextOptions()\n        .setUserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1")\n        .setViewportSize(375, 812)\n        .setDeviceScaleFactor(3)\n        .setIsMobile(true)\n        .setHasTouch(true)\n        .setPermissions(Arrays.asList("geolocation"))\n        .setGeolocation(52.52, 13.39)\n        .setColorScheme(ColorScheme.DARK)\n        .setLocale("de-DE"));\n      Page page = context.newPage();\n    }\n  }\n}\n')),(0,n.kt)("h2",u({},{id:"multiple-contexts"}),"Multiple contexts"),(0,n.kt)("p",null,(0,n.kt)("a",u({parentName:"p"},{href:"/java/docs/1.21/browser-contexts"}),"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Create a Chromium browser instance\n      Browser browser = chromium.launch();\n      // Create two isolated browser contexts\n      BrowserContext userContext = browser.newContext();\n      BrowserContext adminContext = browser.newContext();\n      // Create pages and interact with contexts independently\n    }\n  }\n}\n")),(0,n.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/1.21/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/1.21/api/class-browser#browser-new-context"}),"Browser.newContext([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"/java/docs/1.21/api/class-browsercontext#browser-context-add-cookies"}),"BrowserContext.addCookies(cookies)"))))}y.isMDXComponent=!0}}]);