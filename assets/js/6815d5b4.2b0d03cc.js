"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[61334],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58215:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},55064:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(67294),o=t(79443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var r=e.lazy,t=e.block,o=e.defaultValue,p=e.values,f=e.groupId,m=e.className,d=a(),v=d.tabGroupChoices,b=d.setTabGroupChoices,y=(0,n.useState)(o),h=y[0],g=y[1],w=n.Children.toArray(e.children),O=[];if(null!=f){var k=v[f];null!=k&&k!==h&&p.some((function(e){return e.value===k}))&&g(k)}var E=function(e){var r=e.currentTarget,t=O.indexOf(r),n=p[t].value;g(n),null!=f&&(b(f,n),setTimeout((function(){var e,t,n,o,a,i,c,s;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,s=i.innerWidth,t>=0&&a<=s&&o<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},x=function(e){var r,t;switch(e.keyCode){case u:var n=O.indexOf(e.target)+1;t=O[n]||O[0];break;case s:var o=O.indexOf(e.target)-1;t=O[o]||O[O.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===r?0:-1,"aria-selected":h===r,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":h===r}),key:r,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:E,onClick:E},t)}))),r?(0,n.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},79443:function(e,r,t){var n=(0,t(67294).createContext)(void 0);r.Z=n},37187:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=(t(55064),t(58215),{id:"class-timeouterror",title:"TimeoutError"}),c=void 0,l={unversionedId:"api/class-timeouterror",id:"version-1.12.0/api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/versioned_docs/version-1.12.0/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/docs/1.12.0/api/class-timeouterror",version:"1.12.0",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"version-1.12.0/api",previous:{title:"Selectors",permalink:"/docs/1.12.0/api/class-selectors"},next:{title:"Touchscreen",permalink:"/docs/1.12.0/api/class-touchscreen"}},s=[],u={toc:s};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/api/errors.html#errors_class_error",title:"Error"},"Error"))),(0,a.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-page#page-wait-for-selector"},"page.waitForSelector(selector[, options])")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browsertype#browser-type-launch"},"browserType.launch([options])"),"."))}p.isMDXComponent=!0},86010:function(e,r,t){function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);