"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4111],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},5064:function(e,t,r){r(7294),r(9443)},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},663:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),a=(r(5064),r(8215),{id:"test-retries",title:"Test retry"}),s=void 0,c={unversionedId:"test-retries",id:"version-1.12.0/test-retries",isDocsHomePage:!1,title:"Test retry",description:"Playwright Test will retry tests if they failed. Pass the maximum number of retries when running the tests, or set them in the configuration file.",source:"@site/versioned_docs/version-1.12.0/test-retries.mdx",sourceDirName:".",slug:"/test-retries",permalink:"/dotnet/docs/1.12.0/test-retries",version:"1.12.0",frontMatter:{id:"test-retries",title:"Test retry"}},l=[],u={toc:l};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright Test will retry tests if they failed. Pass the maximum number of retries when running the tests, or set them in the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12.0/test-configuration"},"configuration file"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --retries=3\n")),(0,o.kt)("p",null,"Failing tests will be retried multiple times until they pass, or until the maximum number of retries is reached. Playwright Test will report all tests that failed at least once."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Running 1 test using 1 worker\n\xd7\xd7\xb1\n1 flaky\n  1) my.test.js:1:1\n")))}p.isMDXComponent=!0}}]);