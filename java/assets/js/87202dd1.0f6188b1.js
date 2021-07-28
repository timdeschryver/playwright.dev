"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[29],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,f=h["".concat(p,".").concat(m)]||h[m]||s[m]||i;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(9443);var i=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),o="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,c=39;var s=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,s=e.values,h=e.groupId,m=e.className,f=i(),d=f.tabGroupChoices,g=f.setTabGroupChoices,v=(0,r.useState)(n),y=v[0],k=v[1],b=r.Children.toArray(e.children),w=[];if(null!=h){var N=d[h];null!=N&&N!==y&&s.some((function(e){return e.value===N}))&&k(N)}var P=function(e){var t=e.currentTarget,a=w.indexOf(t),r=s[a].value;k(r),null!=h&&(g(h,r),setTimeout((function(){var e,a,r,n,i,l,o,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,u=l.innerWidth,a>=0&&i<=u&&n<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},j=function(e){var t,a;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;a=w[r]||w[0];break;case u:var n=w.indexOf(e.target)-1;a=w[n]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},s.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:P,onClick:P},a)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},1999:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"languages",title:"Supported languages"}),o=void 0,p={unversionedId:"languages",id:"version-1.12.0/languages",isDocsHomePage:!1,title:"Supported languages",description:"The Playwright API is available in multiple languages.",source:"@site/versioned_docs/version-1.12.0/languages.mdx",sourceDirName:".",slug:"/languages",permalink:"/java/docs/1.12.0/languages",version:"1.12.0",frontMatter:{id:"languages",title:"Supported languages"},sidebar:"version-1.12.0/docs",previous:{title:"Debugging tools",permalink:"/java/docs/1.12.0/debug"},next:{title:"Release notes",permalink:"/java/docs/1.12.0/release-notes"}},u=[{value:"JavaScript and TypeScript",id:"javascript-and-typescript",children:[]},{value:"Python",id:"python",children:[]},{value:"Java",id:"java",children:[]},{value:"C#",id:"c",children:[]}],c={toc:u};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Playwright API is available in multiple languages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#javascript-and-typescript"},"JavaScript and TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#python"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#java"},"Java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#c"},"C#"))),(0,i.kt)("h2",{id:"javascript-and-typescript"},"JavaScript and TypeScript"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro/"},"Playwright for Node.js")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/playwright"},"NPM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"GitHub repo"))),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/intro/"},"Playwright for Python")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/playwright/"},"Playwright on PyPI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-pytest"},"Pytest integration"))),(0,i.kt)("h2",{id:"java"},"Java"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/intro/"},"Playwright for Java")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"GitHub repo"))),(0,i.kt)("h2",{id:"c"},"C#"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/intro/"},"Playwright for .NET")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-sharp"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Microsoft.Playwright"},"Playwright on NuGet"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet add package Microsoft.Playwright\n")))}s.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);