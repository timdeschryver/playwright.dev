(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{774:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(866)),i={id:"working-with-selectors",title:"Working with selectors"},s={unversionedId:"api/working-with-selectors",id:"version-1.4.2/api/working-with-selectors",isDocsHomePage:!1,title:"Working with selectors",description:"Selector describes an element in the page. It can be used to obtain ElementHandle (see page.$() for example) or shortcut element operations to avoid intermediate handle (see page.click() for example).",source:"@site/versioned_docs/version-1.4.2/api/working-with-selectors.md",slug:"/api/working-with-selectors",permalink:"/docs/1.4.2/api/working-with-selectors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.4.2/api/working-with-selectors.md",version:"1.4.2",sidebar:"version-1.4.2/api",previous:{title:"Environment Variables",permalink:"/docs/1.4.2/api/environment-variables"},next:{title:"Working with Chrome Extensions",permalink:"/docs/1.4.2/api/working-with-chrome-extensions"}},c=[],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Selector describes an element in the page. It can be used to obtain ",Object(a.b)("inlineCode",{parentName:"p"},"ElementHandle")," (see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#pageselector"}),"page.$()")," for example) or shortcut element operations to avoid intermediate handle (see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.4.2/api/class-page#pageclickselector-options"}),"page.click()")," for example)."),Object(a.b)("p",null,"Selector has the following format: ",Object(a.b)("inlineCode",{parentName:"p"},"engine=body [>> engine=body]*"),". Here ",Object(a.b)("inlineCode",{parentName:"p"},"engine")," is one of the supported ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.4.2/selectors"}),"selector engines")," (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"css")," or ",Object(a.b)("inlineCode",{parentName:"p"},"xpath"),"), and ",Object(a.b)("inlineCode",{parentName:"p"},"body")," is a selector body in the format of the particular engine. When multiple ",Object(a.b)("inlineCode",{parentName:"p"},"engine=body")," clauses are present (separated by ",Object(a.b)("inlineCode",{parentName:"p"},">>"),"), next one is queried relative to the previous one's result."),Object(a.b)("p",null,"For convenience, selectors in the wrong format are heuristically converted to the right format:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"selector starting with ",Object(a.b)("inlineCode",{parentName:"li"},"//")," or ",Object(a.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(a.b)("inlineCode",{parentName:"li"},"xpath=selector"),";"),Object(a.b)("li",{parentName:"ul"},"selector starting and ending with a quote (either ",Object(a.b)("inlineCode",{parentName:"li"},'"')," or ",Object(a.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(a.b)("inlineCode",{parentName:"li"},"text=selector"),";"),Object(a.b)("li",{parentName:"ul"},"otherwise selector is assumed to be ",Object(a.b)("inlineCode",{parentName:"li"},"css=selector"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries '../span' xpath selector starting with the result of 'div' css selector\nconst handle = await page.$('div >> ../span');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")))}p.isMDXComponent=!0},866:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);