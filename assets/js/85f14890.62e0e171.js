"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4004],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(a),d=s,m=f["".concat(o,".").concat(d)]||f[d]||c[d]||n;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(67294),s=Object.defineProperty,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return r.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&o(e,a,t[a]);if(n)for(var a of n(t))l.call(t,a)&&o(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(67294),s=a(54939),n=a(39670),i=a(86010),l="tabItem_LplD",o=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};function h(e){var t,a,s;const{lazy:o,block:c,defaultValue:f,values:d,groupId:m,className:h}=e,x=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=d?d:x.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,n.lx)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===f?f:null!=(s=null!=f?f:null==(t=x.find((e=>e.props.default)))?void 0:t.props.value)?s:null==(a=x[0])?void 0:a.props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,n.UB)(),[N,T]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,n.o5)();if(null!=m){const e=w[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,a=O.indexOf(t),r=g[a].value;r!==N&&(j(t),T(r),null!=m&&y(m,r))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},h)},g.map((({value:e,label:t,attributes:a})=>{return r.createElement("li",(s=b({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>O.push(e),onKeyDown:I,onFocus:P,onClick:P},a),n={className:(0,i.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":N===e})},u(s,p(n))),null!=t?t:e);var s,n}))),o?(0,r.cloneElement)(x.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},x.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function x(e){const t=(0,s.Z)();return r.createElement(h,b({key:String(t)},e))}},5088:function(e,t,a){a.r(t),a.d(t,{assets:function(){return x},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return g}});var r=a(3905),s=a(73824),n=a(73811),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&f(e,a,t[a]);if(u)for(var a of u(t))c.call(t,a)&&f(e,a,t[a]);return e};const m={id:"class-fixtures",title:"Fixtures"},b=void 0,h={unversionedId:"api/class-fixtures",id:"version-1.21/api/class-fixtures",title:"Fixtures",description:"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else.",source:"@site/versioned_docs/version-1.21/api/class-fixtures.mdx",sourceDirName:"api",slug:"/api/class-fixtures",permalink:"/docs/1.21/api/class-fixtures",tags:[],version:"1.21",frontMatter:{id:"class-fixtures",title:"Fixtures"},sidebar:"api",previous:{title:"Worker",permalink:"/docs/1.21/api/class-worker"},next:{title:"Playwright Test",permalink:"/docs/1.21/api/class-test"}},x={},g=[{value:"fixtures.browser",id:"fixtures-browser",level:2},{value:"fixtures.browserName",id:"fixtures-browser-name",level:2},{value:"fixtures.context",id:"fixtures-context",level:2},{value:"fixtures.page",id:"fixtures-page",level:2},{value:"fixtures.request",id:"fixtures-request",level:2}],v={toc:g};function k(e){var t,a=e,{components:i}=a,f=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=d(d({},v),f),l(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright Test is based on the concept of the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/test-fixtures"}),"test fixtures"),". Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else."),(0,r.kt)("p",null,"Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test. Values prepared by the fixtures are merged into a single object that is available to the ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),", hooks, annotations and other fixtures as a first parameter."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  // ...\n});\n"))),(0,r.kt)(n.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  // ...\n});\n")))),(0,r.kt)("p",null,"Given the test above, Playwright Test will set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture before running the test, and tear it down after the test has finished. ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixture provides a ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-page",title:"Page"}),"Page")," object that is available to the test."),(0,r.kt)("p",null,"Playwright Test comes with builtin fixtures listed below, and you can add your own fixtures as well. Playwright Test also ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-testoptions",title:"TestOptions"}),"provides options")," to  configure ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-fixtures#fixtures-browser"}),"fixtures.browser"),", ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-fixtures#fixtures-context"}),"fixtures.context")," and ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-fixtures#fixtures-page"}),"fixtures.page"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-fixtures#fixtures-browser"}),"fixtures.browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-fixtures#fixtures-browser-name"}),"fixtures.browserName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-fixtures#fixtures-context"}),"fixtures.context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-fixtures#fixtures-page"}),"fixtures.page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-fixtures#fixtures-request"}),"fixtures.request"))),(0,r.kt)("h2",d({},{id:"fixtures-browser"}),"fixtures.browser"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-browser",title:"Browser"}),"Browser"),">")),(0,r.kt)("p",null,(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-browser",title:"Browser"}),"Browser")," instance is shared between all tests in the ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/test-parallel"}),"same worker")," - this makes testing efficient. However, each test runs in an isolated ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),"  and gets a fresh environment."),(0,r.kt)("p",null,"Learn how to ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/test-configuration"}),"configure browser")," and see ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-testoptions",title:"TestOptions"}),"available options"),"."),(0,r.kt)("h2",d({},{id:"fixtures-browser-name"}),"fixtures.browserName"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",'"chromium"|"firefox"|"webkit"',">")),(0,r.kt)("p",null,"Name of the browser that runs tests. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'chromium'"),". Useful to ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/test-annotations"}),"annotate tests")," based on the browser."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"test('skip this test in Firefox', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n  // ...\n});\n"))),(0,r.kt)(n.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"test('skip this test in Firefox', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n  // ...\n});\n")))),(0,r.kt)("h2",d({},{id:"fixtures-context"}),"fixtures.context"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">")),(0,r.kt)("p",null,"Isolated ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," instance, created for each test. Since contexts are isolated between each other, every test gets a fresh environment, even when multiple tests run in a single ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-browser",title:"Browser"}),"Browser")," for maximum efficiency."),(0,r.kt)("p",null,"Learn how to ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/test-configuration"}),"configure context")," and see ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-testoptions",title:"TestOptions"}),"available options"),"."),(0,r.kt)("p",null,"Default ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-fixtures#fixtures-page"}),"fixtures.page")," belongs to this context."),(0,r.kt)("h2",d({},{id:"fixtures-page"}),"fixtures.page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-page",title:"Page"}),"Page"),">")),(0,r.kt)("p",null,"Isolated ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-page",title:"Page"}),"Page")," instance, created for each test. Pages are isolated between tests due to ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-fixtures#fixtures-context"}),"fixtures.context")," isolation."),(0,r.kt)("p",null,"This is the most common fixture used in a test."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('/signin');\n  await page.fill('#username', 'User');\n  await page.fill('#password', 'pwd');\n  await page.click('text=Sign in');\n  // ...\n});\n"))),(0,r.kt)(n.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('/signin');\n  await page.fill('#username', 'User');\n  await page.fill('#password', 'pwd');\n  await page.click('text=Sign in');\n  // ...\n});\n")))),(0,r.kt)("h2",d({},{id:"fixtures-request"}),"fixtures.request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",d({parentName:"li"},{href:"/docs/1.21/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),">")),(0,r.kt)("p",null,"Isolated ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/1.21/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," instance for each test."),(0,r.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ request }) => {\n  await request.post('/signin', {\n    data: {\n      username: 'user',\n      password: 'password'\n    }\n  });\n  // ...\n});\n"))),(0,r.kt)(n.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ request }) => {\n  await request.post('/signin', {\n    data: {\n      username: 'user',\n      password: 'password'\n    }\n  });\n});\n")))))}k.isMDXComponent=!0}}]);