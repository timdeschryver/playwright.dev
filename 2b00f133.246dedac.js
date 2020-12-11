(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{204:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return p}));var n=t(2),l=t(6),r=(t(0),t(866)),i={id:"class-jshandle",title:"class: JSHandle"},c={unversionedId:"api/class-jshandle",id:"version-1.6.2/api/class-jshandle",isDocsHomePage:!1,title:"class: JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle method.",source:"@site/versioned_docs/version-1.6.2/api/class-jshandle.md",slug:"/api/class-jshandle",permalink:"/docs/api/class-jshandle",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.2/api/class-jshandle.md",version:"1.6.2",sidebar:"version-1.6.2/api",previous:{title:"class: ElementHandle",permalink:"/docs/api/class-elementhandle"},next:{title:"class: ConsoleMessage",permalink:"/docs/api/class-consolemessage"}},s=[{value:"jsHandle.asElement()",id:"jshandleaselement",children:[]},{value:"jsHandle.dispose()",id:"jshandledispose",children:[]},{value:"jsHandle.evaluate(pageFunction, arg)",id:"jshandleevaluatepagefunction-arg",children:[]},{value:"jsHandle.evaluateHandle(pageFunction, arg)",id:"jshandleevaluatehandlepagefunction-arg",children:[]},{value:"jsHandle.getProperties()",id:"jshandlegetproperties",children:[]},{value:"jsHandle.getProperty(propertyName)",id:"jshandlegetpropertypropertyname",children:[]},{value:"jsHandle.jsonValue()",id:"jshandlejsonvalue",children:[]}],o={rightToc:s};function p(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const windowHandle = await page.evaluateHandle(() => window);\n// ...\n")),Object(r.b)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-jshandle#jshandledispose"}),"disposed"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(r.b)("p",null,"JSHandle instances can be used as an argument in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#pageevalselector-pagefunction-arg"}),Object(r.b)("inlineCode",{parentName:"a"},"page.$eval()")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-page#pageevaluatepagefunction-arg"}),Object(r.b)("inlineCode",{parentName:"a"},"page.evaluate()"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#pageevaluatehandlepagefunction-arg"}),Object(r.b)("inlineCode",{parentName:"a"},"page.evaluateHandle()"))," methods."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandleaselement"}),"jsHandle.asElement()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#jshandledispose"}),"jsHandle.dispose()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandleevaluatepagefunction-arg"}),"jsHandle.evaluate(pageFunction[, arg])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandleevaluatehandlepagefunction-arg"}),"jsHandle.evaluateHandle(pageFunction[, arg])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandlegetproperties"}),"jsHandle.getProperties()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandlegetpropertypropertyname"}),"jsHandle.getProperty(propertyName)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#jshandlejsonvalue"}),"jsHandle.jsonValue()"))),Object(r.b)("h2",{id:"jshandleaselement"},"jsHandle.asElement()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-elementhandle#class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(r.b)("p",null,"Returns either ",Object(r.b)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-elementhandle#class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),Object(r.b)("h2",{id:"jshandledispose"},"jsHandle.dispose()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"> Promise which resolves when the object handle is successfully disposed.")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),Object(r.b)("h2",{id:"jshandleevaluatepagefunction-arg"},"jsHandle.evaluate(pageFunction","[, arg]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"> Function to be evaluated in browser context"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"arg")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/evaluationargument#evaluationargument",title:"Evaluation Argument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(r.b)("inlineCode",{parentName:"li"},"pageFunction")),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringifyapi.md#Description",title:"Serializable"}),"Serializable"),">> Promise which resolves to the return value of ",Object(r.b)("inlineCode",{parentName:"li"},"pageFunction"))),Object(r.b)("p",null,"This method passes this handle as the first argument to ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction")," returns a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const tweetHandle = await page.$('.tweet .retweets');\nexpect(await tweetHandle.evaluate((node, suffix) => node.innerText, ' retweets')).toBe('10 retweets');\n")),Object(r.b)("h2",{id:"jshandleevaluatehandlepagefunction-arg"},"jsHandle.evaluateHandle(pageFunction","[, arg]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Function to be evaluated"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"arg")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/evaluationargument#evaluationargument",title:"Evaluation Argument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(r.b)("inlineCode",{parentName:"li"},"pageFunction")),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#class-jshandle",title:"JSHandle"}),"JSHandle"),">> Promise which resolves to the return value of ",Object(r.b)("inlineCode",{parentName:"li"},"pageFunction")," as in-page object (JSHandle)")),Object(r.b)("p",null,"This method passes this handle as the first argument to ",Object(r.b)("inlineCode",{parentName:"p"},"pageFunction"),"."),Object(r.b)("p",null,"The only difference between ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns in-page object (JSHandle)."),Object(r.b)("p",null,"If the function passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#pageevaluatehandlepagefunction-arg"}),"page.evaluateHandle()")," for more details."),Object(r.b)("h2",{id:"jshandlegetproperties"},"jsHandle.getProperties()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"}),"Map"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#class-jshandle",title:"JSHandle"}),"JSHandle"),">>>")),Object(r.b)("p",null,"The method returns a map with ",Object(r.b)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const handle = await page.evaluateHandle(() => ({window, document}));\nconst properties = await handle.getProperties();\nconst windowHandle = properties.get('window');\nconst documentHandle = properties.get('document');\nawait handle.dispose();\n")),Object(r.b)("h2",{id:"jshandlegetpropertypropertyname"},"jsHandle.getProperty(propertyName)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"propertyName")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> property to get"),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-jshandle#class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(r.b)("p",null,"Fetches a single property from the referenced object."),Object(r.b)("h2",{id:"jshandlejsonvalue"},"jsHandle.jsonValue()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringifyapi.md#Description",title:"Serializable"}),"Serializable"),">>")),Object(r.b)("p",null,"Returns a JSON representation of the object. If the object has a\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior"}),Object(r.b)("inlineCode",{parentName:"a"},"toJSON")),"\nfunction, it ",Object(r.b)("strong",{parentName:"p"},"will not be called"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"NOTE")," The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references.")))}p.isMDXComponent=!0},866:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),l=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=l.a.createContext({}),p=function(e){var a=l.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},b=function(e){var a=p(e.components);return l.a.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},j=l.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=p(t),j=n,u=b["".concat(i,".").concat(j)]||b[j]||d[j]||r;return t?l.a.createElement(u,c(c({ref:a},o),{},{components:t})):l.a.createElement(u,c({ref:a},o))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=j;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<r;o++)i[o]=t[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);