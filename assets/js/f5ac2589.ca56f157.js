"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[26954],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,r,t){var n=t(67294);r.Z=function(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},r)}},55064:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(67294),o=t(79443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),s="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var f=function(e){var r=e.lazy,t=e.block,o=e.defaultValue,f=e.values,p=e.groupId,m=e.className,d=a(),b=d.tabGroupChoices,v=d.setTabGroupChoices,w=(0,n.useState)(o),y=w[0],h=w[1],g=n.Children.toArray(e.children),k=[];if(null!=p){var x=b[p];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&h(x)}var O=function(e){var r=e.currentTarget,t=k.indexOf(r),n=f[t].value;h(n),null!=p&&(v(p,n),setTimeout((function(){var e,t,n,o,a,i,s,l;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,l=i.innerWidth,t>=0&&a<=l&&o<=s&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(c),setTimeout((function(){return r.classList.remove(c)}),2e3))}),150))},N=function(e){var r,t;switch(e.keyCode){case u:var n=k.indexOf(e.target)+1;t=k[n]||k[0];break;case l:var o=k.indexOf(e.target)-1;t=k[o]||k[k.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},f.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===r?0:-1,"aria-selected":y===r,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===r}),key:r,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:O,onClick:O},t)}))),r?(0,n.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==y})}))))}},79443:function(e,r,t){var n=(0,t(67294).createContext)(void 0);r.Z=n},25476:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=(t(55064),t(58215),{id:"class-firefoxbrowser",title:"FirefoxBrowser"}),s=void 0,c={unversionedId:"api/class-firefoxbrowser",id:"version-1.9.0/api/class-firefoxbrowser",isDocsHomePage:!1,title:"FirefoxBrowser",description:"* extends: [Browser]",source:"@site/versioned_docs/version-1.9.0/api/class-firefoxbrowser.mdx",sourceDirName:"api",slug:"/api/class-firefoxbrowser",permalink:"/docs/1.9.0/api/class-firefoxbrowser",version:"1.9.0",frontMatter:{id:"class-firefoxbrowser",title:"FirefoxBrowser"},sidebar:"version-1.9.0/api",previous:{title:"FileChooser",permalink:"/docs/1.9.0/api/class-filechooser"},next:{title:"Frame",permalink:"/docs/1.9.0/api/class-frame"}},l=[],u={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser",title:"Browser"},"Browser"))),(0,a.kt)("p",null,"Firefox browser instance does not expose Firefox-specific features."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser#browserondisconnected"},"browser.on('disconnected')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser#browserclose"},"browser.close()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser#browsercontexts"},"browser.contexts()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser#browserisconnected"},"browser.isConnected()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser#browsernewcontextoptions"},"browser.newContext([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser#browsernewpageoptions"},"browser.newPage([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.9.0/api/class-browser#browserversion"},"browser.version()"))))}f.isMDXComponent=!0},86010:function(e,r,t){function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);