"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5118],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return t?n.createElement(m,r(r({ref:a},c),{},{components:t})):n.createElement(m,r({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},55064:function(e,a,t){t.d(a,{Z:function(){return g}});var n=t(67294),i=t(79443);var o=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=t(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,c=39;var g=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,g=e.values,u=e.groupId,d=e.className,m=o(),k=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,n.useState)(i),y=v[0],h=v[1],w=n.Children.toArray(e.children),b=[];if(null!=u){var N=k[u];null!=N&&N!==y&&g.some((function(e){return e.value===N}))&&h(N)}var x=function(e){var a=e.currentTarget,t=b.indexOf(a),n=g[t].value;h(n),null!=u&&(f(u,n),setTimeout((function(){var e,t,n,i,o,r,l,s;(e=a.getBoundingClientRect(),t=e.top,n=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,t>=0&&o<=s&&i<=l&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(p),setTimeout((function(){return a.classList.remove(p)}),2e3))}),150))},T=function(e){var a,t;switch(e.keyCode){case c:var n=b.indexOf(e.target)+1;t=b[n]||b[0];break;case s:var i=b.indexOf(e.target)-1;t=b[i]||b[b.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},d)},g.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":y===a}),key:a,ref:function(e){return b.push(e)},onKeyDown:T,onFocus:x,onClick:x},t)}))),a?(0,n.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},79443:function(e,a,t){var n=(0,t(67294).createContext)(void 0);a.Z=n},86742:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return g},default:function(){return d}});var n=t(22122),i=t(19756),o=(t(67294),t(3905)),r=t(55064),l=t(58215),p={id:"navigations",title:"Navigations"},s=void 0,c={unversionedId:"navigations",id:"version-1.12.0/navigations",isDocsHomePage:!1,title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.12.0/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/python/docs/1.12.0/navigations",version:"1.12.0",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"version-1.12.0/docs",previous:{title:"Multi-page scenarios",permalink:"/python/docs/1.12.0/multi-pages"},next:{title:"Network",permalink:"/python/docs/1.12.0/network"}},g=[{value:"Navigation lifecycle",id:"navigation-lifecycle",children:[]},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",children:[{value:"Auto-wait",id:"auto-wait",children:[]},{value:"Custom wait",id:"custom-wait",children:[]},{value:"Wait for element",id:"wait-for-element",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",children:[{value:"Auto-wait",id:"auto-wait-1",children:[]},{value:"Custom wait",id:"custom-wait-1",children:[]},{value:"Wait for element",id:"wait-for-element-1",children:[]},{value:"Asynchronous navigation",id:"asynchronous-navigation",children:[]},{value:"Multiple navigations",id:"multiple-navigations",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Advanced patterns",id:"advanced-patterns",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],u={toc:g};function d(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigation-lifecycle"},"Navigation lifecycle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#advanced-patterns"},"Advanced patterns"))),(0,o.kt)("h2",{id:"navigation-lifecycle"},"Navigation lifecycle"),(0,o.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,o.kt)("strong",{parentName:"p"},"navigation")," and ",(0,o.kt)("strong",{parentName:"p"},"loading"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Navigations")," can be initiated by changing the page URL or by interacting with the page (e.g., clicking a link). Navigation ends when response headers have been parsed and session history is updated. The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download. Only after the navigation succeeds, page starts ",(0,o.kt)("strong",{parentName:"p"},"loading")," the document."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-url"},"page.url")," is set to the new url"),(0,o.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-event-dom-content-loaded"},'page.on("domcontentloaded")')," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-event-load"},'page.on("load")')," event is fired"),(0,o.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,o.kt)("h2",{id:"scenarios-initiated-by-browser-ui"},"Scenarios initiated by browser UI"),(0,o.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,o.kt)("h3",{id:"auto-wait"},"Auto-wait"),(0,o.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,o.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto")," will auto-wait for the redirected page to fire the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate the page\npage.goto("https://example.com")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate the page\nawait page.goto("https://example.com")\n')))),(0,o.kt)("h3",{id:"custom-wait"},"Custom wait"),(0,o.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,o.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait until network is idle\npage.goto("https://example.com", wait_until="networkidle")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait until network is idle\nawait page.goto("https://example.com", wait_until="networkidle")\n')))),(0,o.kt)("h3",{id:"wait-for-element"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-click"},"page.click(selector, **kwargs)")," auto-wait for elements."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait for element\npage.goto("https://example.com")\npage.wait_for_selector("text=example domain")\n\n# Navigate and click element\n# Click will auto-wait for the element\npage.goto("https://example.com")\npage.click("text=example domain")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Navigate and wait for element\nawait page.goto("https://example.com")\nawait page.wait_for_selector("text=example domain")\n\n# Navigate and click element\n# Click will auto-wait for the element\nawait page.goto("https://example.com")\nawait page.click("text=example domain")\n')))),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-goto"},"page.goto(url, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-reload"},"page.reload(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-go-back"},"page.go_back(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-go-forward"},"page.go_forward(**kwargs)"))),(0,o.kt)("h2",{id:"scenarios-initiated-by-page-interaction"},"Scenarios initiated by page interaction"),(0,o.kt)("p",null,"In the scenarios below, ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-click"},"page.click(selector, **kwargs)")," initiates a navigation and then waits for the navigation to complete."),(0,o.kt)("h3",{id:"auto-wait-1"},"Auto-wait"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-click"},"page.click(selector, **kwargs)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Click will auto-wait for navigation to complete\npage.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\npage.fill("#username", "John Doe")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Click will auto-wait for navigation to complete\nawait page.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\nawait page.fill("#username", "John Doe")\n')))),(0,o.kt)("h3",{id:"custom-wait-1"},"Custom wait"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-wait-for-load-state"},"page.wait_for_load_state(**kwargs)")," to wait for a loading event."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.click("button"); # Click triggers navigation\npage.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.click("button"); # Click triggers navigation\nawait page.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n')))),(0,o.kt)("h3",{id:"wait-for-element-1"},"Wait for element"),(0,o.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)"),". Alternatively, page interactions like ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-click"},"page.click(selector, **kwargs)")," auto-wait for elements."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Click triggers navigation\npage.click("text=Login")\n# Click will auto-wait for the element\npage.wait_for_selector("#username", "John Doe")\n\n# Click triggers navigation\npage.click("text=Login")\n# Fill will auto-wait for element\npage.fill("#username", "John Doe")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Click will auto-wait for the element and trigger navigation\nawait page.click("text=Login")\n# Wait for the element\nawait page.wait_for_selector("#username")\n\n# Click triggers navigation\nawait page.click("text=Login")\n# Fill will auto-wait for element\nawait page.fill("#username", "John Doe")\n')))),(0,o.kt)("h3",{id:"asynchronous-navigation"},"Asynchronous navigation"),(0,o.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-wait-for-navigation"},"page.expect_navigation(**kwargs)"),". For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,o.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nwith page.expect_navigation():\n    # Triggers a navigation after a timeout\n    page.click("a")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nasync with page.expect_navigation():\n    # Triggers a navigation after a timeout\n    await page.click("div.delayed-navigation")\n')))),(0,o.kt)("h3",{id:"multiple-navigations"},"Multiple navigations"),(0,o.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-wait-for-navigation"},"page.expect_navigation(**kwargs)")," to a specific url. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,o.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,o.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nwith page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    page.click("a")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nasync with page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    await page.click("a")\n')))),(0,o.kt)("h3",{id:"loading-a-popup"},"Loading a popup"),(0,o.kt)("p",null,"When popup is opened, explicitly calling ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-wait-for-load-state"},"page.wait_for_load_state(**kwargs)")," ensures that popup is loaded to the desired state."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'with page.expect_popup() as popup_info:\n    page.click(\'a[target="_blank"]\') # Opens popup\npopup = popup_info.value\npopup.wait_for_load_state("load")\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'async with page.expect_popup() as popup_info:\n    await page.click(\'a[target="_blank"]\') # Opens popup\npopup = await popup_info.value\nawait popup.wait_for_load_state("load")\n')))),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-click"},"page.click(selector, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-wait-for-load-state"},"page.wait_for_load_state(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-wait-for-navigation"},"page.expect_navigation(**kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-wait-for-function"},"page.wait_for_function(expression, **kwargs)"))),(0,o.kt)("h2",{id:"advanced-patterns"},"Advanced patterns"),(0,o.kt)("p",null,"For pages that have complicated loading patterns, ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.12.0/api/class-page#page-wait-for-function"},"page.wait_for_function(expression, **kwargs)")," is a powerful and extensible approach to define a custom wait criteria."),(0,o.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'page.goto("http://example.com")\npage.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\npage.screenshot()\n'))),(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'await page.goto("http://example.com")\nawait page.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\nawait page.screenshot()\n')))),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.12.0/api/class-page#page-wait-for-function"},"page.wait_for_function(expression, **kwargs)"))))}d.isMDXComponent=!0},86010:function(e,a,t){function n(e){var a,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(i&&(i+=" "),i+=t);else for(a in e)e[a]&&(i&&(i+=" "),i+=a);return i}function i(){for(var e,a,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(i&&(i+=" "),i+=a);return i}t.d(a,{Z:function(){return i}})}}]);