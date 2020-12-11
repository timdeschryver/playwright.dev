(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{858:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),c=(a(0),a(866)),o={id:"assertions",title:"Assertions"},l={unversionedId:"assertions",id:"assertions",isDocsHomePage:!1,title:"Assertions",description:"The Playwright API can be used to read element contents and properties for test assertions. These values are fetched from the browser page and asserted in",source:"@site/docs/assertions.md",slug:"/assertions",permalink:"/docs/next/assertions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/assertions.md",version:"current",sidebar:"docs",previous:{title:"Network",permalink:"/docs/next/network"},next:{title:"Verification",permalink:"/docs/next/verification"}},s=[{value:"Common patterns",id:"common-patterns",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Custom assertions",id:"custom-assertions",children:[]}],i={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Playwright API can be used to read element contents and properties for test assertions. These values are fetched from the browser page and asserted in\nNode.js."),Object(c.b)("p",null,"The examples in this guide use the built-in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html"}),Object(c.b)("inlineCode",{parentName:"a"},"assert")," module"),", but they can be used with any assertion library (like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/expect"}),"Expect")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/chai"}),"Chai"),"). See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/test-runners"}),"Test runners")," for more info."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#common-patterns"}),"Common patterns")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#element-handles"}),"Element Handles")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"common-patterns"},"Common patterns"),Object(c.b)("p",null,"Playwright provides convenience APIs for common assertion tasks, like finding the\ntext content of an element. These APIs require a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/selectors"}),"selector")," to locate\nthe element."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Assert text content\nconst content = await page.textContent('nav:first-child');\nassert(content === 'home');\n\n// Assert inner text\nconst text = await page.innerText('.selected');\nassert(text === 'value');\n\n// Assert inner HTML\nconst html = await page.innerHTML('div.result');\nassert(html === '<p>Result</p>')\n\n// Assert `checked` attribute\nconst checked = await page.getAttribute('input', 'checked');\nassert(checked);\n")),Object(c.b)("h4",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagetextcontentselector-options"}),"page.textContent(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageinnertextselector-options"}),"page.innerText(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageinnerhtmlselector-options"}),"page.innerHTML(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagegetattributeselector-name-options"}),"page.getAttribute(selector, name[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-frame#frametextcontentselector-options"}),"frame.textContent(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-frame#frameinnertextselector-options"}),"frame.innerText(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-frame#frameinnerhtmlselector-options"}),"frame.innerHTML(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-frame#framegetattributeselector-name-options"}),"frame.getAttribute(selector, name[, options])"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"element-handles"},"Element Handles"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-elementhandle#class-elementhandle"}),"ElementHandle")," objects represent in-page DOM\nelements. They can be used to assert for multiple properties of the element."),Object(c.b)("p",null,"It is recommended to fetch the ",Object(c.b)("inlineCode",{parentName:"p"},"ElementHandle")," object with\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pagewaitforselectorselector-options"}),Object(c.b)("inlineCode",{parentName:"a"},"page.waitForSelector"))," or\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-frame#framewaitforselectorselector-options"}),Object(c.b)("inlineCode",{parentName:"a"},"frame.waitForSelector")),". These\nAPIs wait for the element to be visible and then return an ",Object(c.b)("inlineCode",{parentName:"p"},"ElementHandle"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get the element handle\nconst elementHandle = page.waitForSelector('#box');\n\n// Assert bounding box for the element\nconst boundingBox = await elementHandle.boundingBox();\nassert(boundingBox.width === 100);\n\n// Assert attribute for the element\nconst classNames = await elementHandle.getAttribute('class');\nassert(classNames.includes('highlighted'));\n")),Object(c.b)("h4",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandletextcontent"}),"elementHandle.textContent()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleinnertext"}),"elementHandle.innerText()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleinnerhtml"}),"elementHandle.innerHTML()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandlegetattributename"}),"elementHandle.getAttribute(name)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle#elementhandleboundingbox"}),"elementHandle.boundingBox()"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"custom-assertions"},"Custom assertions"),Object(c.b)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of\nthe browser. This is useful in situations where you want to assert for values\nthat are not covered by the convenience APIs above."),Object(c.b)("p",null,"The following APIs do not auto-wait for the element. It is recommended to use\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#pagewaitforselectorselector-options"}),Object(c.b)("inlineCode",{parentName:"a"},"page.waitForSelector"))," or\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#framewaitforselectorselector-options"}),Object(c.b)("inlineCode",{parentName:"a"},"frame.waitForSelector")),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nassert(userId);\n\n// Assert value for input element\nawait page.waitForSelector('#search');\nconst value = await page.$eval('#search', el => el.value);\nassert(value === 'query');\n\n// Assert computed style\nconst fontSize = await page.$eval('div', el => window.getComputedStyle(el).fontSize);\nassert(fontSize === '16px');\n\n// Assert list length\nconst length = await page.$$eval('li.selected', (items) => items.length);\nassert(length === 3);\n")),Object(c.b)("h4",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#pageevalselector-pagefunction-arg"}),"page.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#pageevalselector-pagefunction-arg-1"}),"page.$$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/class-frame#frameevaluatepagefunction-arg"}),"frame.evaluate(pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#frameevalselector-pagefunction-arg"}),"frame.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#frameevalselector-pagefunction-arg-1"}),"frame.$$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#elementhandleevalselector-pagefunction-arg"}),"elementHandle.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api#elementhandleevalselector-pagefunction-arg-1"}),"elementHandle.$$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},"Evaluation argument ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/evaluationargument#evaluationargument"}),"examples"))))}b.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(d,l(l({ref:t},i),{},{components:a})):r.a.createElement(d,l({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);