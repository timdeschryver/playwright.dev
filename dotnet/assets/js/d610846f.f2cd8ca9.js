"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6176],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6776:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={slug:"hello-world",title:"Playwright 1.6",tags:["releases"]},l=void 0,c={permalink:"/dotnet/blog/hello-world",editUrl:"https://github.com/microsoft/playwright.dev/edit/master/v2/blog/blog/2019-05-29-hello-world.md",source:"@site/blog/2019-05-29-hello-world.md",title:"Playwright 1.6",description:"Playwright 1.6 is available today, with improvements to network capabilities: inspect WebSocket connections, export network activity as HAR and access resource timing for network responses. This release also adds a new API for touchscreen taps. Like other input methods, touchscreen taps auto-wait for the underlying element to be ready, to improve the reliability of automation.",date:"2019-05-29T00:00:00.000Z",formattedDate:"May 29, 2019",tags:[{label:"releases",permalink:"/dotnet/blog/tags/releases"}],readingTime:.34,truncated:!0},s=[],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright 1.6 is available today, with improvements to network capabilities: inspect WebSocket connections, export network activity as HAR and access resource timing for network responses. This release also adds a new API for touchscreen taps. Like other input methods, touchscreen taps auto-wait for the underlying element to be ready, to improve the reliability of automation."),(0,a.kt)("p",null,"Inspect WebSocket connections"),(0,a.kt)("p",null,"Real-time"),(0,a.kt)("p",null,"Network resource timing and HAR exports"),(0,a.kt)("p",null,"Touchscreen tap"))}p.isMDXComponent=!0}}]);