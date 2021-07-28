"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2856],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(g,l(l({ref:a},d),{},{components:t})):n.createElement(g,l({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},55064:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(67294),r=t(79443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var p=function(e){var a=e.lazy,t=e.block,r=e.defaultValue,p=e.values,u=e.groupId,m=e.className,g=o(),f=g.tabGroupChoices,h=g.setTabGroupChoices,v=(0,n.useState)(r),y=v[0],k=v[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var w=f[u];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&k(w)}var x=function(e){var a=e.currentTarget,t=N.indexOf(a),n=p[t].value;k(n),null!=u&&(h(u,n),setTimeout((function(){var e,t,n,r,o,l,i,c;(e=a.getBoundingClientRect(),t=e.top,n=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,t>=0&&o<=c&&r<=i&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},T=function(e){var a,t;switch(e.keyCode){case d:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case c:var r=N.indexOf(e.target)-1;t=N[r]||N[N.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":y===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:x,onClick:x},t)}))),a?(0,n.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},79443:function(e,a,t){var n=(0,t(67294).createContext)(void 0);a.Z=n},64002:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=t(22122),r=t(19756),o=(t(67294),t(3905)),l=t(55064),i=t(58215),s={id:"dialogs",title:"Dialogs"},c=void 0,d={unversionedId:"dialogs",id:"version-1.13.0/dialogs",isDocsHomePage:!1,title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/versioned_docs/version-1.13.0/dialogs.mdx",sourceDirName:".",slug:"/dialogs",permalink:"/python/docs/dialogs",version:"1.13.0",frontMatter:{id:"dialogs",title:"Dialogs"},sidebar:"version-1.13.0/docs",previous:{title:"Chrome Extensions",permalink:"/python/docs/chrome-extensions"},next:{title:"Downloads",permalink:"/python/docs/downloads"}},p=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"beforeunload dialog",id:"beforeunload-dialog",children:[]}],u={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can interact with the web page dialogs such as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"},(0,o.kt)("inlineCode",{parentName:"a"},"alert")),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"},(0,o.kt)("inlineCode",{parentName:"a"},"confirm")),", ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"},(0,o.kt)("inlineCode",{parentName:"a"},"prompt"))," as well as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"},(0,o.kt)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#beforeunload-dialog"},"beforeunload dialog"))),(0,o.kt)("h2",{id:"alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs"),(0,o.kt)("p",null,"By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it."),(0,o.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: dialog.accept())\npage.click("button")\n'))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: dialog.accept())\nawait page.click("button")\n')))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-event-dialog"},'page.on("dialog")')," listener ",(0,o.kt)("strong",{parentName:"p"},"must handle")," the dialog. Otherwise your action will stall, be it ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-click"},"page.click(selector, **kwargs)"),", ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-evaluate"},"page.evaluate(expression, **kwargs)")," or any other. That's because dialogs in Web are modal and block further page execution until they are handled."))),(0,o.kt)("p",null,"As a result, following snippet will never resolve:"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"WRONG!"))),(0,o.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: print(dialog.message))\npage.click("button") # Will hang here\n'))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.on("dialog", lambda dialog: print(dialog.message))\nawait page.click("button") # Will hang here\n')))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If there is no listener for ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-event-dialog"},'page.on("dialog")'),", all dialogs are automatically dismissed."))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-dialog",title:"Dialog"},"Dialog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-dialog#dialog-accept"},"dialog.accept(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-dialog#dialog-dismiss"},"dialog.dismiss()"))),(0,o.kt)("h2",{id:"beforeunload-dialog"},"beforeunload dialog"),(0,o.kt)("p",null,"When ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-close"},"page.close(**kwargs)")," is invoked with the truthy ",(0,o.kt)("inlineCode",{parentName:"p"},"run_before_unload")," value, it page runs its unload handlers. This is the only case when ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-page#page-close"},"page.close(**kwargs)")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),(0,o.kt)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),(0,o.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\npage.close(run_before_unload=True)\n"))),(0,o.kt)(i.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"async def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    await dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\nawait page.close(run_before_unload=True)\n")))))}m.isMDXComponent=!0},86010:function(e,a,t){function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function r(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}t.d(a,{Z:function(){return r}})}}]);