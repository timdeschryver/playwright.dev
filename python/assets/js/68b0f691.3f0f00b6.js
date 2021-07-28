"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9873],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=o,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),o=a(79443);var r=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,u=39;var m=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,m=e.values,c=e.groupId,d=e.className,k=r(),f=k.tabGroupChoices,y=k.setTabGroupChoices,h=(0,n.useState)(o),g=h[0],v=h[1],w=n.Children.toArray(e.children),N=[];if(null!=c){var b=f[c];null!=b&&b!==g&&m.some((function(e){return e.value===b}))&&v(b)}var x=function(e){var t=e.currentTarget,a=N.indexOf(t),n=m[a].value;v(n),null!=c&&(y(c,n),setTimeout((function(){var e,a,n,o,r,l,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,l=window,i=l.innerHeight,p=l.innerWidth,a>=0&&r<=p&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case u:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case p:var o=N.indexOf(e.target)-1;a=N[o]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},14157:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),l=a(55064),i=a(58215),s={id:"class-mouse",title:"Mouse"},p=void 0,u={unversionedId:"api/class-mouse",id:"version-1.10.0/api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/versioned_docs/version-1.10.0/api/class-mouse.mdx",sourceDirName:"api",slug:"/api/class-mouse",permalink:"/python/docs/1.10.0/api/class-mouse",version:"1.10.0",frontMatter:{id:"class-mouse",title:"Mouse"},sidebar:"version-1.10.0/api",previous:{title:"Keyboard",permalink:"/python/docs/1.10.0/api/class-keyboard"},next:{title:"Page",permalink:"/python/docs/1.10.0/api/class-page"}},m=[{value:"mouse.click(x, y, **kwargs)",id:"mouseclickx-y-kwargs",children:[]},{value:"mouse.dblclick(x, y, **kwargs)",id:"mousedblclickx-y-kwargs",children:[]},{value:"mouse.down(**kwargs)",id:"mousedownkwargs",children:[]},{value:"mouse.move(x, y, **kwargs)",id:"mousemovex-y-kwargs",children:[]},{value:"mouse.up(**kwargs)",id:"mouseupkwargs",children:[]}],c={toc:m};function d(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-page#pagemouse"},"page.mouse"),"."),(0,r.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# using \u2018page.mouse\u2019 to trace a 100x100 square.\npage.mouse.move(0, 0)\npage.mouse.down()\npage.mouse.move(0, 100)\npage.mouse.move(100, 100)\npage.mouse.move(100, 0)\npage.mouse.move(0, 0)\npage.mouse.up()\n"))),(0,r.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0)\nawait page.mouse.down()\nawait page.mouse.move(0, 100)\nawait page.mouse.move(100, 100)\nawait page.mouse.move(100, 0)\nawait page.mouse.move(0, 0)\nawait page.mouse.up()\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-mouse#mouseclickx-y-kwargs"},"mouse.click(x, y, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-mouse#mousedblclickx-y-kwargs"},"mouse.dblclick(x, y, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-mouse#mousedownkwargs"},"mouse.down(**kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-mouse#mousemovex-y-kwargs"},"mouse.move(x, y, **kwargs)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/python/docs/1.10.0/api/class-mouse#mouseupkwargs"},"mouse.up(**kwargs)"))),(0,r.kt)("h2",{id:"mouseclickx-y-kwargs"},"mouse.click(x, y, **kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"click_count")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time to wait between ",(0,r.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mousemovex-y-kwargs"},"mouse.move(x, y, **kwargs)"),", ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mousedownkwargs"},"mouse.down(**kwargs)"),", ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mouseupkwargs"},"mouse.up(**kwargs)"),"."),(0,r.kt)("h2",{id:"mousedblclickx-y-kwargs"},"mouse.dblclick(x, y, **kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delay")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),"> Time to wait between ",(0,r.kt)("inlineCode",{parentName:"li"},"mousedown")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.")),(0,r.kt)("p",null,"Shortcut for ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mousemovex-y-kwargs"},"mouse.move(x, y, **kwargs)"),", ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mousedownkwargs"},"mouse.down(**kwargs)"),", ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mouseupkwargs"},"mouse.up(**kwargs)"),", ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mousedownkwargs"},"mouse.down(**kwargs)")," and ",(0,r.kt)("a",{parentName:"p",href:"/python/docs/1.10.0/api/class-mouse#mouseupkwargs"},"mouse.up(**kwargs)"),"."),(0,r.kt)("h2",{id:"mousedownkwargs"},"mouse.down(**kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"click_count")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mousedown")," event."),(0,r.kt)("h2",{id:"mousemovex-y-kwargs"},"mouse.move(x, y, **kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"y")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"steps")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),"> defaults to 1. Sends intermediate ",(0,r.kt)("inlineCode",{parentName:"li"},"mousemove")," events.")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mousemove")," event."),(0,r.kt)("h2",{id:"mouseupkwargs"},"mouse.up(**kwargs)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',(0,r.kt)("inlineCode",{parentName:"li"},"left"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"click_count")," <",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),"> defaults to 1. See ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"},"UIEvent.detail"),".")),(0,r.kt)("p",null,"Dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseup")," event."))}d.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);