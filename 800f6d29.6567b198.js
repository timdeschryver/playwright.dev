(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{468:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(866)),c={id:"intro",title:"Getting Started"},o={unversionedId:"intro",id:"version-1.6.2/intro",isDocsHomePage:!1,title:"Getting Started",description:"- Installation",source:"@site/versioned_docs/version-1.6.2/intro.md",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.2/intro.md",version:"1.6.2",sidebar:"version-1.6.2/docs",previous:{title:"Why Playwright?",permalink:"/docs/why-playwright"},next:{title:"Core concepts",permalink:"/docs/core-concepts"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"First script",id:"first-script",children:[]},{value:"Record scripts",id:"record-scripts",children:[]},{value:"TypeScript support",id:"typescript-support",children:[{value:"In JavaScript",id:"in-javascript",children:[]},{value:"In TypeScript",id:"in-typescript",children:[]}]},{value:"System requirements",id:"system-requirements",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#installation"}),"Installation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#first-script"}),"First script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#record-scripts"}),"Record scripts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#typescript-support"}),"TypeScript support")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#system-requirements"}),"System requirements"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Use npm or Yarn to install Playwright in your Node.js project. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#system-requirements"}),"system requirements"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D playwright\n")),Object(i.b)("p",null,"This single command downloads the Playwright NPM package and browser binaries for Chromium, Firefox and WebKit. To modify this behavior see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation"}),"installation parameters"),"."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, you can ",Object(i.b)("inlineCode",{parentName:"p"},"require")," Playwright in a Node.js script, and launch any of the 3 browsers (",Object(i.b)("inlineCode",{parentName:"p"},"chromium"),", ",Object(i.b)("inlineCode",{parentName:"p"},"firefox")," and ",Object(i.b)("inlineCode",{parentName:"p"},"webkit"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  // Create pages, interact with UI elements, assert values\n  await browser.close();\n})();\n")),Object(i.b)("p",null,"Playwright APIs are asynchronous and return Promise objects. Our code examples use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"}),"the async/await pattern")," to ease readability. The code is wrapped in an unnamed async arrow function which is invoking itself."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"(async () => { // Start of async arrow function\n  // Function code\n  // ...\n})(); // End of the function and () to invoke itself\n")),Object(i.b)("h2",{id:"first-script"},"First script"),Object(i.b)("p",null,"In our first script, we will navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"whatsmyuseragent.org")," and take a screenshot in WebKit."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { webkit } = require('playwright');\n\n(async () => {\n  const browser = await webkit.launch();\n  const page = await browser.newPage();\n  await page.goto('http://whatsmyuseragent.org/');\n  await page.screenshot({ path: `example.png` });\n  await browser.close();\n})();\n")),Object(i.b)("p",null,"By default, Playwright runs the browsers in headless mode. To see the browser UI, pass the ",Object(i.b)("inlineCode",{parentName:"p"},"headless: false")," flag while launching the browser. You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"slowMo")," to slow down execution."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"firefox.launch({ headless: false, slowMo: 50 });\n")),Object(i.b)("h2",{id:"record-scripts"},"Record scripts"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright-cli"}),"Playwright CLI")," can be used to record user interactions and generate JavaScript code."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"npx playwright-cli codegen wikipedia.org\n")),Object(i.b)("h2",{id:"typescript-support"},"TypeScript support"),Object(i.b)("p",null,"Playwright includes built-in support for TypeScript. Type definitions will be imported automatically. It is recommended to use type-checking to improve the IDE experience."),Object(i.b)("h3",{id:"in-javascript"},"In JavaScript"),Object(i.b)("p",null,"Add the following to the top of your JavaScript file to get type-checking in VS Code or WebStorm."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"//@ts-check\n// ...\n")),Object(i.b)("p",null,"Alternatively, you can use JSDoc to set types for variables."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"/** @type {import('playwright').Page} */\nlet page;\n")),Object(i.b)("h3",{id:"in-typescript"},"In TypeScript"),Object(i.b)("p",null,"TypeScript support will work out-of-the-box. Types can also be imported explicitly."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"let page: import('playwright').Page;\n")),Object(i.b)("h2",{id:"system-requirements"},"System requirements"),Object(i.b)("p",null,"Playwright requires Node.js version 10.17 or above. The browser binaries for Chromium,\nFirefox and WebKit work across the 3 platforms (Windows, macOS, Linux):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Windows"),": Works with Windows and Windows Subsystem for Linux (WSL)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"macOS"),": Requires 10.14 or above."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Linux"),": Depending on your Linux distribution, you might need to install additional\ndependencies to run the browsers.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Firefox requires Ubuntu 18.04+"),Object(i.b)("li",{parentName:"ul"},"For Ubuntu 18.04, the additional dependencies are defined in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"docker/Dockerfile.bionic"}),"our Docker image"),",\nwhich is based on Ubuntu.")))))}p.isMDXComponent=!0},866:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);