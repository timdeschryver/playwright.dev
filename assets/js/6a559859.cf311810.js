"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[18262],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(67294),o=r(79443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,p=e.values,d=e.groupId,f=e.className,v=a(),m=v.tabGroupChoices,h=v.setTabGroupChoices,b=(0,n.useState)(o),y=b[0],g=b[1],w=n.Children.toArray(e.children),k=[];if(null!=d){var O=m[d];null!=O&&O!==y&&p.some((function(e){return e.value===O}))&&g(O)}var j=function(e){var t=e.currentTarget,r=k.indexOf(t),n=p[r].value;g(n),null!=d&&(h(d,n),setTimeout((function(){var e,r,n,o,a,i,c,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,s=i.innerWidth,r>=0&&a<=s&&o<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;r=k[n]||k[0];break;case s:var o=k.indexOf(e.target)-1;r=k[o]||k[k.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:x,onFocus:j,onClick:j},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},20375:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=(r(55064),r(58215),{id:"class-video",title:"Video"}),c=void 0,l={unversionedId:"api/class-video",id:"version-1.9.0/api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the videosPath option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.9.0/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/docs/1.9.0/api/class-video",version:"1.9.0",frontMatter:{id:"class-video",title:"Video"},sidebar:"version-1.9.0/api",previous:{title:"Touchscreen",permalink:"/docs/1.9.0/api/class-touchscreen"},next:{title:"WebKitBrowser",permalink:"/docs/1.9.0/api/class-webkitbrowser"}},s=[{value:"video.path()",id:"videopath",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When browser context is created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"videosPath")," option, each page has a video object associated with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(await page.video().path());\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-video#videopath"},"video.path()"))),(0,a.kt)("h2",{id:"videopath"},"video.path()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns: <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">>")),(0,a.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context."))}p.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);