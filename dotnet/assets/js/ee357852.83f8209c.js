"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2274],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},567:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),s=(n(5064),n(8215),{id:"troubleshooting",title:"Troubleshooting"}),a=void 0,l={unversionedId:"troubleshooting",id:"version-1.12.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"- Browser dependencies",source:"@site/versioned_docs/version-1.12.0/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/dotnet/docs/1.12.0/troubleshooting",version:"1.12.0",frontMatter:{id:"troubleshooting",title:"Troubleshooting"}},u=[{value:"Browser dependencies",id:"browser-dependencies",children:[]},{value:"Code transpilation issues",id:"code-transpilation-issues",children:[]},{value:"Node.js requirements",id:"nodejs-requirements",children:[{value:"ReferenceError: URL is not defined",id:"referenceerror-url-is-not-defined",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser-dependencies"},"Browser dependencies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-transpilation-issues"},"Code transpilation issues")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nodejs-requirements"},"Node.js requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#please-file-an-issue"},"Please file an issue"))),(0,o.kt)("h2",{id:"browser-dependencies"},"Browser dependencies"),(0,o.kt)("p",null,"Playwright does self-inspection every time it runs to make sure the browsers can be launched successfully. If there are missing dependencies, playwright will print instructions to acquire them."),(0,o.kt)("p",null,"See also in the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/cli#install-system-dependencies"},"Command Line Interface")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."),(0,o.kt)("h2",{id:"code-transpilation-issues"},"Code transpilation issues"),(0,o.kt)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright"),"."),(0,o.kt)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (",(0,o.kt)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),(0,o.kt)("h2",{id:"nodejs-requirements"},"Node.js requirements"),(0,o.kt)("h3",{id:"referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"),(0,o.kt)("p",null,"Playwright requires Node.js 12 or higher. Node.js 8 is not supported, and will cause you to receive this error."),(0,o.kt)("h1",{id:"please-file-an-issue"},"Please file an issue"),(0,o.kt)("p",null,"Playwright is a new project, and we are watching the issues very closely. As we solve common issues, this document will grow to include the common answers."))}p.isMDXComponent=!0}}]);