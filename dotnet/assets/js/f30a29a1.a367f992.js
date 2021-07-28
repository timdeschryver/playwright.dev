"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8076],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3049:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"test-pom",title:"Page Object Model"}),c=void 0,p={unversionedId:"test-pom",id:"test-pom",isDocsHomePage:!1,title:"Page Object Model",description:"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example.",source:"@site/docs/test-pom.mdx",sourceDirName:".",slug:"/test-pom",permalink:"/dotnet/docs/next/test-pom",version:"current",frontMatter:{id:"test-pom",title:"Page Object Model"}},l=[],u={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example."),(0,a.kt)("p",null,"We will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," helper class to encapsulate common operations on the ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.dev")," page. Internally, it will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"page")," object."),(0,a.kt)("p",null,"Now we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," class in our tests."))}s.isMDXComponent=!0}}]);