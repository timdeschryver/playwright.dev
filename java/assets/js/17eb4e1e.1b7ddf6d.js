"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4760],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(a),d=o,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(v,i(i({ref:t},p),{},{components:a})):n.createElement(v,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),o=a(9443);var l=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,p=39;var m=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,m=e.values,c=e.groupId,d=e.className,v=l(),k=v.tabGroupChoices,f=v.setTabGroupChoices,h=(0,n.useState)(o),N=h[0],b=h[1],y=n.Children.toArray(e.children),j=[];if(null!=c){var C=k[c];null!=C&&C!==N&&m.some((function(e){return e.value===C}))&&b(C)}var g=function(e){var t=e.currentTarget,a=j.indexOf(t),n=m[a].value;b(n),null!=c&&(f(c,n),setTimeout((function(){var e,a,n,o,l,i,r,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,l=e.right,i=window,r=i.innerHeight,u=i.innerWidth,a>=0&&l<=u&&o<=r&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case p:var n=j.indexOf(e.target)+1;a=j[n]||j[0];break;case u:var o=j.indexOf(e.target)-1;a=j[o]||j[j.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":N===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:w,onFocus:g,onClick:g},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},5603:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=a(2122),o=a(9756),l=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"class-mouse",title:"Mouse"}),r=void 0,s={unversionedId:"api/class-mouse",id:"version-1.12.0/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.12.0/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/java/docs/1.12.0/api/class-mouse",version:"1.12.0",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.12.0/api",previous:{title:"Keyboard",permalink:"/java/docs/1.12.0/api/class-keyboard"},next:{title:"Page",permalink:"/java/docs/1.12.0/api/class-page"}},u=[{value:"Mouse.click(x, y, options)",id:"mouse-click",children:[]},{value:"Mouse.dblclick(x, y, options)",id:"mouse-dblclick",children:[]},{value:"Mouse.down(options)",id:"mouse-down",children:[]},{value:"Mouse.move(x, y, options)",id:"mouse-move",children:[]},{value:"Mouse.up(options)",id:"mouse-up",children:[]}],p={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,l.kt)("p",null,"Every ",(0,l.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-page#page-mouse"},"Page.mouse()"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\npage.mouse().move(0, 0);\npage.mouse().down();\npage.mouse().move(0, 100);\npage.mouse().move(100, 100);\npage.mouse().move(100, 0);\npage.mouse().move(0, 0);\npage.mouse().up();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-mouse#mouse-click"},"Mouse.click(x, y[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-mouse#mouse-dblclick"},"Mouse.dblclick(x, y[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.down([options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-mouse#mouse-move"},"Mouse.move(x, y[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.up([options])"))),(0,l.kt)("h2",{id:"mouse-click"},"Mouse.click(x, y","[, options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"Mouse.ClickOptions"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setButton")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setClickCount")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. See ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setDelay")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to wait between ",(0,l.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,l.kt)("p",null,"Shortcut for ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-move"},"Mouse.move(x, y[, options])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.down([options])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.up([options])"),"."),(0,l.kt)("h2",{id:"mouse-dblclick"},"Mouse.dblclick(x, y","[, options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"Mouse.DblclickOptions"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setButton")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setDelay")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to wait between ",(0,l.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,l.kt)("p",null,"Shortcut for ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-move"},"Mouse.move(x, y[, options])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.down([options])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.up([options])"),", ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-down"},"Mouse.down([options])")," and ",(0,l.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-mouse#mouse-up"},"Mouse.up([options])"),"."),(0,l.kt)("h2",{id:"mouse-down"},"Mouse.down(","[options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"Mouse.DownOptions"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setButton")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setClickCount")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. See ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,l.kt)("p",null,"Dispatches a ",(0,l.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,l.kt)("h2",{id:"mouse-move"},"Mouse.move(x, y","[, options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"y")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"Mouse.MoveOptions"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setSteps")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. Sends intermediate ",(0,l.kt)("inlineCode",{parentName:"li"},"mousemove")," events."))),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,l.kt)("p",null,"Dispatches a ",(0,l.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,l.kt)("h2",{id:"mouse-up"},"Mouse.up(","[options]",")"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"Mouse.UpOptions"),">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setButton")," ","<",(0,l.kt)("inlineCode",{parentName:"li"},"enum MouseButton { LEFT, RIGHT, MIDDLE }"),">"," Defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setClickCount")," ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">"," defaults to 1. See ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."))),(0,l.kt)("li",{parentName:"ul"},"returns: ","<",(0,l.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,l.kt)("p",null,"Dispatches a ",(0,l.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}m.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);