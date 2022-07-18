"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7201],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&l(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(54939),o=a(39670),s=a(86010),i="tabItem_LplD",l=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))h.call(t,a)&&m(e,a,t[a]);return e};function f(e){var t,a,r;const{lazy:l,block:u,defaultValue:d,values:h,groupId:m,className:f}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=h?h:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,o.lx)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===d?d:null!=(r=null!=d?d:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=v[0])?void 0:a.props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.UB)(),[N,O]=(0,n.useState)(w),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,o.o5)();if(null!=m){const e=k[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,a=j.indexOf(t),n=b[a].value;n!==N&&(P(t),O(n),null!=m&&x(m,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},f)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=g({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>j.push(e),onKeyDown:E,onFocus:T,onClick:T},a),o={className:(0,s.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":N===e})},c(r,p(o))),null!=t?t:e);var r,o}))),l?(0,n.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function v(e){const t=(0,r.Z)();return n.createElement(f,g({key:String(t)},e))}},78888:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var n=a(3905),r=a(73824),o=a(73811),s=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&d(e,a,t[a]);return e};const m={id:"writing-tests",title:"Writing Tests"},g=void 0,f={unversionedId:"writing-tests",id:"writing-tests",title:"Writing Tests",description:"Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met. Playwright comes with auto-wait built in meaning it waits for elements to be actionable prior to performing actions. Playwright provides a test function to declare tests and the expect function to write assertions.",source:"@site/docs/writing-tests.mdx",sourceDirName:".",slug:"/writing-tests",permalink:"/docs/next/writing-tests",tags:[],version:"current",frontMatter:{id:"writing-tests",title:"Writing Tests"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/next/intro"},next:{title:"Running Tests",permalink:"/docs/next/running-tests"}},v={},b=[{value:"Assertions",id:"assertions",level:3},{value:"Locators",id:"locators",level:3},{value:"Test Isolation",id:"test-isolation",level:3},{value:"Using Test Hooks",id:"using-test-hooks",level:3},{value:"What&#39;s Next",id:"whats-next",level:2}],y={toc:b};function w(e){var t,a=e,{components:s}=a,d=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=h(h({},y),d),i(t,l({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright assertions are created specifically for the dynamic web. Checks are automatically retried until the necessary conditions are met. Playwright comes with auto-wait built in meaning it waits for elements to be actionable prior to performing actions. Playwright provides a ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-test"}),"test")," function to declare tests and the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://jestjs.io/docs/expect"}),"expect")," function to write assertions."),(0,n.kt)("p",null,"Take a look at the example test included when installing Playwright to see how to write a test using web first assertions, locators and selectors."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"import { test, expect } from '@playwright/test';\n\ntest('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // create a locator\n  const getStarted = page.locator('text=Get Started');\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(getStarted).toHaveAttribute('href', '/docs/intro');\n\n  // Click the get started link.\n  await getStarted.click();\n\n  // Expects the URL to contain intro.\n  await expect(page).toHaveURL(/.*intro/);\n});\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// @ts-check\nconst { test, expect } = require('@playwright/test');\n\ntest('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // create a locator\n  const getStarted = page.locator('text=Get Started');\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(getStarted).toHaveAttribute('href', '/docs/intro');\n\n  // Click the get started link.\n  await getStarted.click();\n \n  // Expects the URL to contain intro.\n  await expect(page).toHaveURL(/.*intro/);\n});\n")))),(0,n.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Add ",(0,n.kt)("inlineCode",{parentName:"p"},"// @ts-check")," at the start of each test file when using JavaScript in VS Code to get automatic type checking."))),(0,n.kt)("h3",h({},{id:"assertions"}),"Assertions"),(0,n.kt)("p",null,"Playwright Test uses the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://jestjs.io/docs/expect"}),"expect")," library for ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/test-assertions"}),"test assertions")," which provides matchers like ",(0,n.kt)("inlineCode",{parentName:"p"},"toEqual"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toContain"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toMatch"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toBe")," and many more. Playwright also extends this library with convenience async matchers that will wait until the expected condition is met."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"await expect(page).toHaveTitle(/Playwright/);\n")),(0,n.kt)("h3",h({},{id:"locators"}),"Locators"),(0,n.kt)("p",null,(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/locators"}),"Locators")," are the central piece of Playwright's auto-waiting and retry-ability. Locators represent a way to find element(s) on the page at any moment and are used to perform actions on elements such as .click. fill etc. Custom locators can be created with the ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-page#page-locator"}),"page.locator(selector[, options])")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"const getStarted = page.locator('text=Get Started');\n\nawait expect(getStarted).toHaveAttribute('href', '/docs/installation');\nawait getStarted.click();\n")),(0,n.kt)("p",null,(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/selectors"}),"Selectors")," are strings that are used to create Locators. Playwright supports many different selectors like ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/selectors#text-selector"}),"Text"),", ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/selectors#css-selector"}),"CSS"),", ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/selectors#xpath-selectors"}),"XPath")," and many more."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"await expect(page.locator('text=Installation')).toBeVisible();\n")),(0,n.kt)("h3",h({},{id:"test-isolation"}),"Test Isolation"),(0,n.kt)("p",null,"Playwright Test is based on the concept of ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/test-fixtures"}),"test fixtures")," such as the ",(0,n.kt)("a",h({parentName:"p"},{href:"./test-fixtures#built-in-fixtures"}),"built in page fixture"),", which is passed into your test. Pages are isolated between tests due to the Browser Context, which is equivalent to a brand new browser profile, where every test gets a fresh environment, even when multiple tests run in a single Browser."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"test('basic test', async ({ page }) => {\n  ...\n")),(0,n.kt)("h3",h({},{id:"using-test-hooks"}),"Using Test Hooks"),(0,n.kt)("p",null,"You can use various ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-test"}),"test hooks")," such as ",(0,n.kt)("inlineCode",{parentName:"p"},"test.describe")," to declare a group of tests and ",(0,n.kt)("inlineCode",{parentName:"p"},"test.beforeEach")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"test.afterEach")," which are executed before/after each test. Other hooks include the ",(0,n.kt)("inlineCode",{parentName:"p"},"test.beforeAll")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"test.afterAll")," which are executed once per worker before/after all tests."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),'import { test, expect } from "@playwright/test";\n\ntest.describe("navigation", () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto("https://playwright.dev/");\n  });\n\n  test("main navigation", async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL("https://playwright.dev/");\n  });\n});\n'))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),'// @ts-check\nconst { test, expect } = require("@playwright/test");\n\ntest.describe("navigation", () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto("https://playwright.dev/");\n  });\n\n  test("main navigation", async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL("https://playwright.dev/");\n  });\n});\n')))),(0,n.kt)("h2",h({},{id:"whats-next"}),"What's Next"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/running-tests"}),"Run single tests, multiple tests, headed mode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/debug"}),"Debug tests with the Playwright Debugger")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/codegen"}),"Generate tests with Codegen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/trace-viewer"}),"See a trace of your tests"))))}w.isMDXComponent=!0}}]);