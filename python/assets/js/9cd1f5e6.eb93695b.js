"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8684],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},55064:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(67294),a=t(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var r=e.lazy,t=e.block,a=e.defaultValue,p=e.values,f=e.groupId,m=e.className,d=o(),h=d.tabGroupChoices,y=d.setTabGroupChoices,v=(0,n.useState)(a),b=v[0],g=v[1],k=n.Children.toArray(e.children),w=[];if(null!=f){var O=h[f];null!=O&&O!==b&&p.some((function(e){return e.value===O}))&&g(O)}var x=function(e){var r=e.currentTarget,t=w.indexOf(r),n=p[t].value;g(n),null!=f&&(y(f,n),setTimeout((function(){var e,t,n,a,o,i,l,c;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,t>=0&&o<=c&&a<=l&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},N=function(e){var r,t;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case c:var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:b===r?0:-1,"aria-selected":b===r,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===r}),key:r,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:x,onClick:x},t)}))),r?(0,n.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==b})}))))}},79443:function(e,r,t){var n=(0,t(67294).createContext)(void 0);r.Z=n},20029:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i=(t(55064),t(58215),{id:"class-error",title:"Error"}),l=void 0,s={unversionedId:"api/class-error",id:"version-1.12.0/api/class-error",isDocsHomePage:!1,title:"Error",description:"* extends: [Exception]",source:"@site/versioned_docs/version-1.12.0/api/class-error.mdx",sourceDirName:"api",slug:"/api/class-error",permalink:"/python/docs/1.12.0/api/class-error",version:"1.12.0",frontMatter:{id:"class-error",title:"Error"},sidebar:"version-1.12.0/api",previous:{title:"ElementHandle",permalink:"/python/docs/1.12.0/api/class-elementhandle"},next:{title:"FileChooser",permalink:"/python/docs/1.12.0/api/class-filechooser"}},c=[{value:"error.message",id:"error-message",children:[]},{value:"error.name",id:"error-name",children:[]},{value:"error.stack",id:"error-stack",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/exceptions.html#Exception",title:"Exception"},"Exception"))),(0,o.kt)("p",null,"Error is raised whenever certain operations are terminated abnormally, e.g. browser closes while ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," is running. All Playwright exceptions inherit from this class."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-error#error-message"},"error.message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-error#error-name"},"error.name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-error#error-stack"},"error.stack"))),(0,o.kt)("h2",{id:"error-message"},"error.message"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("p",null,"Message of the error."),(0,o.kt)("h2",{id:"error-name"},"error.name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("p",null,"Name of the error which got thrown inside the browser. Optional."),(0,o.kt)("h2",{id:"error-stack"},"error.stack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">")),(0,o.kt)("p",null,"Stack of the error which got thrown inside the browser. Optional."))}p.isMDXComponent=!0},86010:function(e,r,t){function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:function(){return a}})}}]);