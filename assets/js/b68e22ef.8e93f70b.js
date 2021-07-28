"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9652],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(67294),n=r(79443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(86010),o="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,d=39;var u=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,u=e.values,c=e.groupId,m=e.className,f=i(),h=f.tabGroupChoices,k=f.setTabGroupChoices,b=(0,a.useState)(n),v=b[0],N=b[1],g=a.Children.toArray(e.children),y=[];if(null!=c){var S=h[c];null!=S&&S!==v&&u.some((function(e){return e.value===S}))&&N(S)}var O=function(e){var t=e.currentTarget,r=y.indexOf(t),a=u[r].value;N(a),null!=c&&(k(c,a),setTimeout((function(){var e,r,a,n,i,l,o,s;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,r>=0&&i<=s&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},_=function(e){var t,r;switch(e.keyCode){case d:var a=y.indexOf(e.target)+1;r=y[a]||y[0];break;case s:var n=y.indexOf(e.target)-1;r=y[n]||y[y.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:_,onFocus:O,onClick:O},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},80841:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),l=(r(55064),r(58215),{id:"class-androidinput",title:"AndroidInput"}),o=void 0,p={unversionedId:"api/class-androidinput",id:"version-1.13.0/api/class-androidinput",isDocsHomePage:!1,title:"AndroidInput",description:"- androidInput.drag(from, to, steps)",source:"@site/versioned_docs/version-1.13.0/api/class-androidinput.mdx",sourceDirName:"api",slug:"/api/class-androidinput",permalink:"/docs/api/class-androidinput",version:"1.13.0",frontMatter:{id:"class-androidinput",title:"AndroidInput"},sidebar:"version-1.13.0/api",previous:{title:"AndroidDevice",permalink:"/docs/api/class-androiddevice"},next:{title:"AndroidSocket",permalink:"/docs/api/class-androidsocket"}},s=[{value:"androidInput.drag(from, to, steps)",id:"android-input-drag",children:[]},{value:"androidInput.press(key)",id:"android-input-press",children:[]},{value:"androidInput.swipe(from, segments, steps)",id:"android-input-swipe",children:[]},{value:"androidInput.tap(point)",id:"android-input-tap",children:[]},{value:"androidInput.type(text)",id:"android-input-type",children:[]}],d={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-androidinput#android-input-drag"},"androidInput.drag(from, to, steps)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-androidinput#android-input-press"},"androidInput.press(key)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-androidinput#android-input-swipe"},"androidInput.swipe(from, segments, steps)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-androidinput#android-input-tap"},"androidInput.tap(point)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-androidinput#android-input-type"},"androidInput.type(text)"))),(0,i.kt)("h2",{id:"android-input-drag"},"androidInput.drag(from, to, steps)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-drag-param-from"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," The start point of the drag.",(0,i.kt)("a",{href:"#android-input-drag-param-from",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-drag-param-to"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," The end point of the drag.",(0,i.kt)("a",{href:"#android-input-drag-param-to",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"steps"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-drag-param-steps"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The number of steps in the drag. Each step takes 5 milliseconds to complete.",(0,i.kt)("a",{href:"#android-input-drag-param-steps",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-drag-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#android-input-drag-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Performs a drag between ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," points."),(0,i.kt)("h2",{id:"android-input-press"},"androidInput.press(key)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-press-param-key"})," ","<","[AndroidKey]",">"," Key to press.",(0,i.kt)("a",{href:"#android-input-press-param-key",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-press-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#android-input-press-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Presses the ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,i.kt)("h2",{id:"android-input-swipe"},"androidInput.swipe(from, segments, steps)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-swipe-param-from"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," The point to start swiping from.",(0,i.kt)("a",{href:"#android-input-swipe-param-from",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"segments"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-swipe-param-segments"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">"," Points following the ",(0,i.kt)("inlineCode",{parentName:"li"},"from")," point in the swipe gesture.",(0,i.kt)("a",{href:"#android-input-swipe-param-segments",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"steps"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-swipe-param-steps"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," The number of steps for each segment. Each step takes 5 milliseconds to complete, so 100 steps means half a second per each segment.",(0,i.kt)("a",{href:"#android-input-swipe-param-steps",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-swipe-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#android-input-swipe-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Swipes following the path defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"segments"),"."),(0,i.kt)("h2",{id:"android-input-tap"},"androidInput.tap(point)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"point"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-tap-param-point"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," The point to tap at.",(0,i.kt)("a",{href:"#android-input-tap-param-point",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-tap-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#android-input-tap-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Taps at the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"point"),"."),(0,i.kt)("h2",{id:"android-input-type"},"androidInput.type(text)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-type-param-text"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Text to type.",(0,i.kt)("a",{href:"#android-input-type-param-text",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-input-type-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",">",(0,i.kt)("a",{href:"#android-input-type-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Types ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," into currently focused widget."))}u.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);