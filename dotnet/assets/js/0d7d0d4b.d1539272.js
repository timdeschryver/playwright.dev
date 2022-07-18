"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4575],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=s(r),u=a,d=f["".concat(l,".").concat(u)]||f[u]||p[u]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3998:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return g}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&m(e,r,t[r]);return e};const f={id:"frames",title:"Frames"},u=void 0,d={unversionedId:"frames",id:"frames",title:"Frames",description:"- Frames",source:"@site/docs/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/dotnet/docs/next/frames",tags:[],version:"current",frontMatter:{id:"frames",title:"Frames"},sidebar:"docs",previous:{title:"Extensibility",permalink:"/dotnet/docs/next/extensibility"},next:{title:"Handles",permalink:"/dotnet/docs/next/handles"}},y={},g=[{value:"Frames",id:"frames",level:2},{value:"Frame objects",id:"frame-objects",level:2}],b={toc:g};function v(e){var t,r=e,{components:a}=r,m=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},b),m),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#frames"}),"Frames")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"#frame-objects"}),"Frame objects"))),(0,n.kt)("h2",p({},{id:"frames"}),"Frames"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/next/api/class-page",title:"Page"}),"Page")," can have one or more ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/next/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,n.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,n.kt)("p",null,"A page can have additional frames attached with the ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// Locate element inside frame\nvar username = await page.FrameLocator(".frame-class").Locator("#username-input");\nawait username.FillAsync("John");\n')),(0,n.kt)("h2",p({},{id:"frame-objects"}),"Frame objects"),(0,n.kt)("p",null,"One can access frame objects using the ",(0,n.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/next/api/class-page#page-frame"}),"Page.Frame(name)")," API:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Get frame using the frame\'s name attribute\nvar frame = page.Frame("frame-login");\n\n// Get frame using frame\'s URL\nvar frame = page.FrameByUrl("*domain.");\n\n// Get frame using any other selector\nvar frameElementHandle = await page.EvaluateAsync("window.frames[1]");\nvar frame = await frameElementHandle.ContentFrameAsync();\n\n// Interact with the frame\nawait frame.FillAsync("#username-input", "John");\n')))}v.isMDXComponent=!0}}]);