(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2222],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(7294),n=r(944),o=r(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,r=e.block,p=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=(0,n.Z)(),h=f.tabGroupChoices,g=f.setTabGroupChoices,w=(0,a.useState)(p),k=w[0],b=w[1],y=a.Children.toArray(e.children),v=[];if(null!=m){var N=h[m];null!=N&&N!==k&&c.some((function(e){return e.value===N}))&&b(N)}var P=function(e){var t=e.currentTarget,r=v.indexOf(t),a=c[r].value;b(a),null!=m&&(g(m,a),setTimeout((function(){var e,r,a,n,o,i,s,u;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,r>=0&&o<=u&&n<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var a=v.indexOf(e.target)+1;r=v[a]||v[0];break;case s:var n=v.indexOf(e.target)-1;r=v[n]||v[v.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:P,onClick:P},r)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},944:function(e,t,r){"use strict";var a=r(7294),n=r(9443);t.Z=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6945:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i=(r(1395),r(8215),{id:"why-playwright",title:"Why Playwright?"}),l={unversionedId:"why-playwright",id:"version-1.9.0/why-playwright",isDocsHomePage:!1,title:"Why Playwright?",description:"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.",source:"@site/versioned_docs/version-1.9.0/why-playwright.mdx",sourceDirName:".",slug:"/why-playwright",permalink:"/docs/1.9.0/why-playwright",version:"1.9.0",frontMatter:{id:"why-playwright",title:"Why Playwright?"},sidebar:"version-1.9.0/docs",next:{title:"Getting Started",permalink:"/docs/1.9.0/intro"}},s=[{value:"Support for all browsers",id:"support-for-all-browsers",children:[]},{value:"Fast and reliable execution",id:"fast-and-reliable-execution",children:[]},{value:"Powerful automation capabilities",id:"powerful-automation-capabilities",children:[]},{value:"Integrates with your workflow",id:"integrates-with-your-workflow",children:[]},{value:"Limitations",id:"limitations",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#support-for-all-browsers"},"Support for all browsers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#fast-and-reliable-execution"},"Fast and reliable execution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#powerful-automation-capabilities"},"Powerful automation capabilities")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#integrates-with-your-workflow"},"Integrates with your workflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#limitations"},"Limitations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/release-notes"},"Release notes"))),(0,o.kt)("h2",{id:"support-for-all-browsers"},"Support for all browsers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test on Chromium, Firefox and WebKit"),". Playwright has full API coverage for all modern browsers, including Google Chrome and Microsoft Edge (with ",(0,o.kt)("a",{parentName:"li",href:"https://www.chromium.org/"},"Chromium"),"), Apple Safari (with ",(0,o.kt)("a",{parentName:"li",href:"https://webkit.org/"},"WebKit"),") and Mozilla Firefox."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cross-platform WebKit testing"),". With Playwright, test how your app behaves in Apple Safari with WebKit builds for Windows, Linux and macOS. Test locally and on CI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test for mobile"),". Use ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/emulation"},"device emulation")," to test your responsive web apps in mobile web browsers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Headless and headful"),". Playwright supports headless (without browser UI) and headful (with browser UI) modes for all browsers and all platforms. Headful is great for debugging, and headless is faster and suited for CI/cloud executions.")),(0,o.kt)("h2",{id:"fast-and-reliable-execution"},"Fast and reliable execution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Auto-wait APIs"),". Playwright interactions ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/actionability"},"auto-wait for elements")," to be ready. This improves reliability and simplifies test authoring."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Timeout-free automation"),". Playwright receives browser signals, like network requests, page navigations and page load events to eliminate the need for sleep timeouts that cause flakiness."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lean parallelization with browser contexts"),". Reuse a single browser instance for multiple parallelized, isolated execution environments with ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/core-concepts"},"browser contexts"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Resilient element selectors"),". Playwright can rely on user-facing strings, like text content and accessibility labels to ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/selectors"},"select elements"),". These strings are more resilient than selectors tightly-coupled to the DOM structure.")),(0,o.kt)("h2",{id:"powerful-automation-capabilities"},"Powerful automation capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiple domains, pages and frames"),". Playwright is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/multi-pages"},"multiple pages"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powerful network control"),". Playwright introduces context-wide ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/network"},"network interception")," to stub and mock network requests."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modern web features"),". Playwright supports web components through ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/selectors"},"shadow-piercing selectors"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/emulation"},"geolocation, permissions"),", web workers and other modern web APIs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Capabilities to cover all scenarios"),". Support for ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/downloads"},"file downloads")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/input"},"uploads"),", out-of-process iframes, native ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/input"},"input events"),", and even ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.9.0/emulation"},"dark mode"),".")),(0,o.kt)("h2",{id:"integrates-with-your-workflow"},"Integrates with your workflow"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"One-line installation"),". Installing Playwright auto-downloads browser dependencies for your team to be onboarded quickly."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i playwright\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"TypeScript support"),". Playwright ships with built-in types for auto-completion and other benefits.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Debugging tools"),". Playwright works with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.9.0/debug"},"editor debugger and browser developer tools")," to pause execution and inspect the web page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Language bindings"),". Playwright is available for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright"},"Node.js")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-python"},"Python"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-sharp"},"C#")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-java"},"Java"),". Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.9.0/languages"},"supported languages"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deploy tests to CI"),". First-party ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.9.0/docker"},"Docker image")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-github-action"},"GitHub Actions")," to deploy tests to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.9.0/ci"},"your preferred CI/CD provider"),"."))),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Legacy Edge and IE11 support"),". Playwright does not support legacy Microsoft Edge or IE11 (",(0,o.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"},"deprecation notice"),"). The new Microsoft Edge (on Chromium) is supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Test on real mobile devices"),": Playwright uses desktop browsers to emulate mobile devices. If you are interested in running on real mobile devices, please ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright/issues/1122"},"upvote this issue"),".")))}p.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);