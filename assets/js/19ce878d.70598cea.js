(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8633],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),f=a,d=g["".concat(s,".").concat(f)]||g[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,g=e.groupId,f=e.className,d=(0,a.Z)(),m=d.tabGroupChoices,v=d.setTabGroupChoices,h=(0,r.useState)(p),k=h[0],b=h[1],y=r.Children.toArray(e.children),N=[];if(null!=g){var w=m[g];null!=w&&w!==k&&u.some((function(e){return e.value===w}))&&b(w)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=u[n].value;b(r),null!=g&&(v(g,r),setTimeout((function(){var e,n,r,a,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6531:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(1395),n(8215),{id:"verification",title:"Verification"}),l={unversionedId:"verification",id:"version-1.11.0/verification",isDocsHomePage:!1,title:"Verification",description:"- Console logs",source:"@site/versioned_docs/version-1.11.0/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/docs/verification",version:"1.11.0",frontMatter:{id:"verification",title:"Verification"},sidebar:"version-1.11.0/docs",previous:{title:"Screenshots",permalink:"/docs/screenshots"},next:{title:"Videos",permalink:"/docs/videos"}},s=[{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Page events",id:"page-events",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,o.kt)("h2",{id:"console-logs"},"Console logs"),(0,o.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Listen for all console logs\npage.on('console', msg => console.log(msg.text()))\n\n// Listen for all console events and handle errors\npage.on('console', msg => {\n  if (msg.type() === 'error')\n    console.log(`Error text: \"${msg.text()}\"`);\n});\n\n// Get the next console log\nconst [msg] = await Promise.all([\n  page.waitForEvent('console'),\n  // Issue console.log inside the page\n  page.evaluate(() => {\n    console.log('hello', 42, { foo: 'bar' });\n  }),\n]);\n\n// Deconstruct console log arguments\nawait msg.args[0].jsonValue() // hello\nawait msg.args[1].jsonValue() // 42\n")),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#pageonconsole"},"page.on('console')"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-errors"},"Page errors"),(0,o.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Log all uncaught errors to the terminal\npage.on('pageerror', exception => {\n  console.log(`Uncaught exception: \"${exception}\"`);\n});\n\n// Navigate to a page with an exception.\nawait page.goto('data:text/html,<script>throw new Error(\"Test\")<\/script>');\n")),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#pageonpageerror"},"page.on('pageerror')"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-events"},"Page events"),(0,o.kt)("h4",{id:"requestfailed"},(0,o.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,o.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,o.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"page.on('dialog', dialog => {\n  dialog.accept();\n});\n")),(0,o.kt)("h4",{id:"popup---handle-popup-windows"},(0,o.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const [popup] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('#open')\n]);\n")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#pageonrequestfailed"},"page.on('requestfailed')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#pageondialog"},"page.on('dialog')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/class-page#pageonpopup"},"page.on('popup')"))))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);