(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7825],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,h=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(7294),n=r(944),i=r(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,s=e.values,f=e.groupId,m=e.className,h=(0,n.Z)(),d=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,a.useState)(c),y=v[0],k=v[1],b=a.Children.toArray(e.children),w=[];if(null!=f){var N=d[f];null!=N&&N!==y&&s.some((function(e){return e.value===N}))&&k(N)}var P=function(e){var t=e.currentTarget,r=w.indexOf(t),a=s[r].value;k(a),null!=f&&(g(f,a),setTimeout((function(){var e,r,a,n,i,l,u,p;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,u=l.innerHeight,p=l.innerWidth,r>=0&&i<=p&&n<=u&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;r=w[a]||w[0];break;case u:var n=w.indexOf(e.target)-1;r=w[n]||w[w.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},s.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:P,onClick:P},r)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},944:function(e,t,r){"use strict";var a=r(7294),n=r(9443);t.Z=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3082:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),l=(r(1395),r(8215),{id:"languages",title:"Supported languages"}),o={unversionedId:"languages",id:"version-1.9.0/languages",isDocsHomePage:!1,title:"Supported languages",description:"The Playwright API is available in multiple languages.",source:"@site/versioned_docs/version-1.9.0/languages.mdx",sourceDirName:".",slug:"/languages",permalink:"/docs/1.9.0/languages",version:"1.9.0",frontMatter:{id:"languages",title:"Supported languages"},sidebar:"version-1.9.0/docs",previous:{title:"Debugging tools",permalink:"/docs/1.9.0/debug"},next:{title:"Release notes",permalink:"/docs/1.9.0/release-notes"}},u=[{value:"JavaScript and TypeScript",id:"javascript-and-typescript",children:[]},{value:"Python",id:"python",children:[]},{value:"C#",id:"c",children:[]},{value:"Java",id:"java",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Playwright API is available in multiple languages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#javascript-and-typescript"},"JavaScript and TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#python"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#c"},"C#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#java"},"Java"))),(0,i.kt)("h2",{id:"javascript-and-typescript"},"JavaScript and TypeScript"),(0,i.kt)("p",null,"Playwright for JavaScript and TypeScript is generally available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -D playwright\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/playwright"},"Playwright on NPM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"GitHub repo"))),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/intro/"},"Playwright for Python")," is available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install playwright\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/playwright/"},"Playwright on PyPI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-pytest"},"Pytest integration"))),(0,i.kt)("h2",{id:"c"},"C#"),(0,i.kt)("p",null,"Playwright for C# is available in preview."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet add package PlaywrightSharp\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/PlaywrightSharp/"},"Playwright on NuGet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-sharp"},"GitHub repo"))),(0,i.kt)("h2",{id:"java"},"Java"),(0,i.kt)("p",null,"Playwright for Java is available in preview."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"GitHub repo"))))}c.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);