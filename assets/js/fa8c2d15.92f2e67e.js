(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1404],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(n),h=i,d=g["".concat(s,".").concat(h)]||g[h]||u[h]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),i=n(944),a=n(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,l=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,g=e.groupId,h=e.className,d=(0,i.Z)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,b=(0,r.useState)(p),k=b[0],y=b[1],w=r.Children.toArray(e.children),v=[];if(null!=g){var N=m[g];null!=N&&N!==k&&u.some((function(e){return e.value===N}))&&y(N)}var P=function(e){var t=e.currentTarget,n=v.indexOf(t),r=u[n].value;y(r),null!=g&&(f(g,r),setTimeout((function(){var e,n,r,i,a,o,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,i=e.bottom,a=e.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&a<=l&&i<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case l:var r=v.indexOf(e.target)+1;n=v[r]||v[0];break;case s:var i=v.indexOf(e.target)-1;n=v[i]||v[v.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},h)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:O,onFocus:P,onClick:P},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),i=n(9443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1995:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"inspector",title:"Inspector"}),c={unversionedId:"inspector",id:"version-1.10.0/inspector",isDocsHomePage:!1,title:"Inspector",description:"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts.",source:"@site/versioned_docs/version-1.10.0/inspector.mdx",sourceDirName:".",slug:"/inspector",permalink:"/docs/1.10.0/inspector",version:"1.10.0",frontMatter:{id:"inspector",title:"Inspector"},sidebar:"version-1.10.0/docs",previous:{title:"Input",permalink:"/docs/1.10.0/input"},next:{title:"Installation",permalink:"/docs/1.10.0/installation"}},s=[{value:"Open Playwright Inspector",id:"open-playwright-inspector",children:[]},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Recording scripts",id:"recording-scripts",children:[]}],l={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts."),(0,a.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#open-playwright-inspector"},"Open Playwright Inspector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#stepping-through-the-playwright-script"},"Stepping through the Playwright script")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#debugging-selectors"},"Debugging Selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#recording-scripts"},"Recording scripts"))),(0,a.kt)("h2",{id:"open-playwright-inspector"},"Open Playwright Inspector"),(0,a.kt)("p",null,"There are several ways of opening Playwright Inspector:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Linux/macOS\n$ PWDEBUG=1 npm run test\n\n# Windows\n$ set PWDEBUG=1\n$ npm run test\n")),(0,a.kt)("p",{parentName:"li"},"Additional useful defaults are configured when ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," is set:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Browsers launch in the headed mode"),(0,a.kt)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Call ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.10.0/api/class-page#pagepause"},"page.pause()")," method from your script when running in headed browser."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Pause on the following line.\nawait page.pause();\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.10.0/cli"},"CLI"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx playwright codegen wikipedia.org\n")))),(0,a.kt)("h2",{id:"stepping-through-the-playwright-script"},"Stepping through the Playwright script"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),(0,a.kt)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),(0,a.kt)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",(0,a.kt)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),(0,a.kt)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),(0,a.kt)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),(0,a.kt)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),(0,a.kt)("p",null,"If actionability can't be reached, it'll show action as pending:"),(0,a.kt)("img",{width:"712",alt:"Screen Shot 2021-02-20 at 7 36 06 PM",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),(0,a.kt)("p",null,'You can step over each action using the "Step over" action or resume script without further pauses:'),(0,a.kt)("center",null,(0,a.kt)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),(0,a.kt)("h2",{id:"debugging-selectors"},"Debugging Selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),(0,a.kt)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),(0,a.kt)("img",{width:"602",alt:"Screen Shot 2021-02-20 at 7 27 20 PM",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),(0,a.kt)("h2",{id:"recording-scripts"},"Recording scripts"),(0,a.kt)("p",null,"At any moment, clicking Record action enables recorder (codegen) mode. Every action on the target page is turned into the generated script:"),(0,a.kt)("img",{width:"712",alt:"Screen Shot 2021-02-20 at 7 40 02 PM",src:"https://user-images.githubusercontent.com/883973/108614897-85704600-73b3-11eb-8bcd-f2e129786c49.png"}),(0,a.kt)("p",null,"You can copy entire generated script or clear it using toolbar actions."))}p.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);