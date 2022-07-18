"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9482],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(a),d=n,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(g,l(l({ref:e},c),{},{components:a})):r.createElement(g,l({ref:e},c))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77879:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return f}});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(t,e,a)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&c(t,a,e[a]);if(o)for(var a of o(e))s.call(e,a)&&c(t,a,e[a]);return t};const m={id:"protractor",title:"Migrating from Protractor"},d=void 0,g={unversionedId:"protractor",id:"protractor",title:"Migrating from Protractor",description:"- Migration Principles",source:"@site/docs/protractor.mdx",sourceDirName:".",slug:"/protractor",permalink:"/docs/next/protractor",tags:[],version:"current",frontMatter:{id:"protractor",title:"Migrating from Protractor"},sidebar:"docs",previous:{title:"Videos",permalink:"/docs/next/videos"},next:{title:"Migrating from Testing Library",permalink:"/docs/next/testing-library"}},k={},f=[{value:"Migration Principles",id:"migration-principles",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"Example",id:"example",level:2},{value:"Polyfilling <code>waitForAngular</code>",id:"polyfilling-waitforangular",level:2},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",level:2},{value:"Further Reading",id:"further-reading",level:2}],N={toc:f};function h(t){var e,a=t,{components:n}=a,c=((t,e)=>{var a={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&s.call(t,r)&&(a[r]=t[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(e=u(u({},N),c),i(e,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#migration-principles"}),"Migration Principles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#cheat-sheet"}),"Cheat Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#example"}),"Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#polyfilling-waitforangular"}),"Polyfilling ",(0,r.kt)("inlineCode",{parentName:"a"},"waitForAngular"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#playwright-test-super-powers"}),"Playwright Test Super Powers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#further-reading"}),"Further Reading"))),(0,r.kt)("h2",u({},{id:"migration-principles"}),"Migration Principles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'No need for "webdriver-manager" / Selenium.'),(0,r.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.protractortest.org/#/api?view=ElementFinder"}),"ElementFinder")," \u21c4 ",(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-locator"}),"Playwright Test Locator")),(0,r.kt)("li",{parentName:"ul"},"Protractor\u2019s ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"}),(0,r.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," \u21c4 Playwright Test ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/next/actionability"}),"auto-waiting")),(0,r.kt)("li",{parentName:"ul"},"Don\u2019t forget to await in Playwright Test")),(0,r.kt)("h2",u({},{id:"cheat-sheet"}),"Cheat Sheet"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Protractor"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Playwright Test"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element(by.buttonText('...'))")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},'page.locator(\'button, input[type="button"], input[type="submit"] >> text="..."\')'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element(by.css('...'))")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.locator('...')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element(by.cssContainingText('..1..', '..2..'))")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.locator('..1.. >> text=..2..')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element(by.id('...'))")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.locator('#...')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element(by.model('...'))")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-model=\"...\"]')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element(by.repeater('...'))")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.locator('[ng-repeat=\"...\"]')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element(by.xpath('...'))")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.locator('xpath=...')"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"element.all")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.locator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"browser.get(url)")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"await page.goto(url)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"browser.getCurrentUrl()")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"page.url()"))))),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("p",null,"Protractor:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"describe('angularjs homepage todo list', function() {\n  it('should add a todo', function() {\n    browser.get('https://angularjs.org');\n\n    element(by.model('todoList.todoText')).sendKeys('first test');\n    element(by.css('[value=\"add\"]')).click();\n\n    var todoList = element.all(by.repeater('todo in todoList.todos'));\n    expect(todoList.count()).toEqual(3);\n    expect(todoList.get(2).getText()).toEqual('first test');\n\n    // You wrote your first test, cross it off the list\n    todoList.get(2).element(by.css('input')).click();\n    var completedAmount = element.all(by.css('.done-true'));\n    expect(completedAmount.count()).toEqual(2);\n  });\n});\n")),(0,r.kt)("p",null,"Line-by-line migration to Playwright Test:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test'); // 1\n\ntest.describe('angularjs homepage todo list', function() {\n  test('should add a todo', async function({page}) { // 2, 3\n    await page.goto('https://angularjs.org'); // 4\n\n    await page.locator('[ng-model=\"todoList.todoText\"]').fill('first test');\n    await page.locator('[value=\"add\"]').click();\n\n    var todoList = page.locator('[ng-repeat=\"todo in todoList.todos\"]'); // 5\n    await expect(todoList).toHaveCount(3);\n    await expect(todoList.nth(2)).toHaveText('first test', {\n      useInnerText: true,\n    });\n\n    // You wrote your first test, cross it off the list\n    await todoList.nth(2).locator('input').click();\n    var completedAmount = page.locator('.done-true');\n    await expect(completedAmount).toHaveCount(2);\n  });\n}\n")),(0,r.kt)("p",null,"Migration highlights (see inline comments in the Playwright Test code snippet):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each Playwright Test file has explicit import of the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"expect")," functions"),(0,r.kt)("li",{parentName:"ol"},"Test function is marked with ",(0,r.kt)("inlineCode",{parentName:"li"},"async")),(0,r.kt)("li",{parentName:"ol"},"Playwright Test is given a ",(0,r.kt)("inlineCode",{parentName:"li"},"page")," as one of its parameters. This is one of the many ",(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-fixtures"}),"useful fixtures")," in Playwright Test."),(0,r.kt)("li",{parentName:"ol"},"Almost all Playwright calls are prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"await")),(0,r.kt)("li",{parentName:"ol"},"Locator creation with ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-page#page-locator"}),"page.locator(selector[, options])")," is one of the few methods that is sync.")),(0,r.kt)("h2",u({},{id:"polyfilling-waitforangular"}),"Polyfilling ",(0,r.kt)("inlineCode",{parentName:"h2"},"waitForAngular")),(0,r.kt)("p",null,"Playwright Test has built-in ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/next/actionability"}),"auto-waiting")," that makes protractor's ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.waitForAngular"}),(0,r.kt)("inlineCode",{parentName:"a"},"waitForAngular"))," unneeded in general case."),(0,r.kt)("p",null,"However, it might come handy in some edge cases. Here's how to polyfill ",(0,r.kt)("inlineCode",{parentName:"p"},"waitForAngular")," function in Playwright Test:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you have protractor installed in your package.json")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Polyfill function"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"async function waitForAngular(page) {\n\u200bconst clientSideScripts = require('protractor/built/clientsidescripts.js');\n\n\u200basync function executeScriptAsync(page, script, ...scriptArgs) {\n  \u200bawait page.evaluate(`\n    \u200bnew Promise((resolve, reject) => {\n      \u200bconst callback = (errMessage) => {\n        \u200bif (errMessage)\n          \u200breject(new Error(errMessage));\n        \u200belse\n          \u200bresolve();\n      \u200b};\n      \u200b(function() {${script}}).apply(null, [...${JSON.stringify(scriptArgs)}, callback]);\n    \u200b})\n  \u200b`);\n\u200b}\n\n\u200bawait executeScriptAsync(page, clientSideScripts.waitForAngular, '');\n}\n")),(0,r.kt)("p",{parentName:"li"},"If you don't want to keep a version protractor around, you can also use this simpler approach using this function (only works for Angular 2+):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"async function waitForAngular(page) {\n  await page.evaluate(async () => {\n    // @ts-expect-error\n    if (window.getAllAngularTestabilities) {\n      // @ts-expect-error\n      await Promise.all(window.getAllAngularTestabilities().map(whenStable));\n      // @ts-expect-error\n      async function whenStable(testability) {\n        return new Promise((res) => testability.whenStable(res) );\n      }\n    }\n   });\n }\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Polyfill usage"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"const page = await context.newPage();\nawait page.goto('https://example.org');\nawait waitForAngular(page);\n")))),(0,r.kt)("h2",u({},{id:"playwright-test-super-powers"}),"Playwright Test Super Powers"),(0,r.kt)("p",null,"Once you're on Playwright Test, you get a lot!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full zero-configuration TypeScript support"),(0,r.kt)("li",{parentName:"ul"},"Run tests across ",(0,r.kt)("strong",{parentName:"li"},"all web engines")," (Chrome, Firefox, Safari) on ",(0,r.kt)("strong",{parentName:"li"},"any popular operating system")," (Windows, MacOS, Ubuntu)"),(0,r.kt)("li",{parentName:"ul"},"Full support for multiple origins, ",(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-frame"}),"(i)frames"),", ",(0,r.kt)("a",u({parentName:"li"},{href:"./pages"}),"tabs and contexts")),(0,r.kt)("li",{parentName:"ul"},"Run tests in parallel across multiple browsers"),(0,r.kt)("li",{parentName:"ul"},"Built-in test artifact collection: ",(0,r.kt)("a",u({parentName:"li"},{href:"./test-configuration#record-video"}),"video recording"),", ",(0,r.kt)("a",u({parentName:"li"},{href:"./test-configuration#automatic-screenshots"}),"screenshots")," and ",(0,r.kt)("a",u({parentName:"li"},{href:"./test-configuration#record-test-trace"}),"playwright traces"))),(0,r.kt)("p",null,"Also you get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./inspector"}),"Playwright Inspector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./auth#code-generation"}),"Playwright Test Code generation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./trace-viewer"}),"Playwright Tracing")," for post-mortem debugging")),(0,r.kt)("h2",u({},{id:"further-reading"}),"Further Reading"),(0,r.kt)("p",null,"Learn more about Playwright Test runner:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./intro"}),"Getting Started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./test-fixtures"}),"Fixtures")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./api/class-locator"}),"Locators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./selectors"}),"Selectors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./test-assertions"}),"Assertions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"./actionability"}),"Auto-waiting"))))}h.isMDXComponent=!0}}]);