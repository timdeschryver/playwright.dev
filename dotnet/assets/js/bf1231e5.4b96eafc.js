"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3958],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return h}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),c=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),h=r,u=m["".concat(i,".").concat(h)]||m[h]||p[h]||l;return t?n.createElement(u,s(s({ref:a},d),{},{components:t})):n.createElement(u,s({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,a,t){t(7294)},5064:function(e,a,t){t(7294),t(9443)},9443:function(e,a,t){var n=(0,t(7294).createContext)(void 0);a.Z=n},360:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var n=t(2122),r=t(9756),l=(t(7294),t(3905)),s=(t(5064),t(8215),{id:"handles",title:"Handles"}),o=void 0,i={unversionedId:"handles",id:"version-1.13.0/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.13.0/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/dotnet/docs/handles",version:"1.13.0",frontMatter:{id:"handles",title:"Handles"},sidebar:"version-1.13.0/docs",previous:{title:"Extensibility",permalink:"/dotnet/docs/extensibility"},next:{title:"Input",permalink:"/dotnet/docs/input"}},c=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],d={toc:c};function p(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," to reference any JavaScript objects in the page"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,l.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is a ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," as well."),(0,l.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")," class API for these and methods."),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"))),(0,l.kt)("p",null,"Here is the easiest way to obtain a ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var jsHandle = await page.EvaluateHandleAsync("window");\n//  Use jsHandle for evaluations.\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var ulElementHandle = await page.WaitForSelectorAsync("ul");\n//  Use ulElementHandle for actions and evaluation.\n')),(0,l.kt)("h2",{id:"element-handles"},"Element Handles"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," rather than using the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),(0,l.kt)("p",null,"When ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," is required, it is recommended to fetch it with the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-wait-for-selector"},"Frame.WaitForSelectorAsync(selector, options)")," methods. These APIs wait for the element to be attached and visible."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Get the element handle\nvar jsHandle = await page.WaitForSelectorAsync("#box");\nvar elementHandle = jsHandle as ElementHandle;\n\n// Assert bounding box for the element\nvar boundingBox = await elementHandle.BoundingBoxAsync();\nAssert.Equal(100, boundingBox.Width);\n\n// Assert attribute for the element\nvar classNames = await elementHandle.GetAttributeAsync("class");\nAssert.True(classNames.Contains("highlighted"));\n')),(0,l.kt)("h2",{id:"handles-as-parameters"},"Handles as parameters"),(0,l.kt)("p",null,"Handles can be passed into the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create new array in page.\nvar myArrayHandle = await page.EvaluateHandleAsync(@"() => {\n    window.myArray = [1];\n    return myArray;\n}");\n\n// Get the length of the array.\nvar length = await page.EvaluateAsync<int>("a => a.length", myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.EvaluateAsync("arg => arg.myArray.add(arg.newElement)",\n    new { myArray = myArrayHandle, newElement = 2 });\n\n// Release the object when it is no longer needed.\nawait myArrayHandle.DisposeAsync();\n')),(0,l.kt)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),(0,l.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)"),", ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)")," or their frame counterparts ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-evaluate-handle"},"Frame.EvaluateHandleAsync(expression, arg)"),", ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-query-selector"},"Frame.QuerySelectorAsync(selector)")," or ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame#frame-query-selector-all"},"Frame.QuerySelectorAllAsync(selector)"),". Once created, handles will retain object from ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"},"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,l.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-jshandle#js-handle-dispose"},"JsHandle.DisposeAsync()")," method."),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"},"JSHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-bounding-box"},"ElementHandle.BoundingBoxAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-get-attribute"},"ElementHandle.GetAttributeAsync(name)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-inner-text"},"ElementHandle.InnerTextAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-inner-html"},"ElementHandle.InnerHTMLAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-text-content"},"ElementHandle.TextContentAsync()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-jshandle#js-handle-evaluate"},"JsHandle.EvaluateAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-evaluate-handle"},"Page.EvaluateHandleAsync(expression, arg)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-query-selector"},"Page.QuerySelectorAsync(selector)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-query-selector-all"},"Page.QuerySelectorAllAsync(selector)"))))}p.isMDXComponent=!0}}]);