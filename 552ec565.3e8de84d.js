(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{342:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return s}));var n=t(2),i=t(6),o=(t(0),t(866)),r={id:"loading",title:"Navigation and loading"},l={unversionedId:"loading",id:"version-1.2.0/loading",isDocsHomePage:!1,title:"Navigation and loading",description:"Playwright logically splits the process of showing a new document in the page into navigation and loading.",source:"@site/versioned_docs/version-1.2.0/loading.md",slug:"/loading",permalink:"/docs/1.2.0/loading",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/loading.md",version:"1.2.0",sidebar:"version-1.2.0/docs",previous:{title:"Verification",permalink:"/docs/1.2.0/verification"},next:{title:"Multi-page scenarios",permalink:"/docs/1.2.0/multi-pages"}},c=[{value:"Navigation",id:"navigation",children:[]},{value:"Loading",id:"loading",children:[]},{value:"Common scenarios",id:"common-scenarios",children:[]},{value:"Loading a popup",id:"loading-a-popup",children:[{value:"Unusual client-side redirects",id:"unusual-client-side-redirects",children:[]},{value:"Click triggers navigation after a timeout",id:"click-triggers-navigation-after-a-timeout",children:[]},{value:"Unpredictable patterns",id:"unpredictable-patterns",children:[]},{value:"Lazy loading, hydration",id:"lazy-loading-hydration",children:[]}]}],p={rightToc:c};function s(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright logically splits the process of showing a new document in the page into ",Object(o.b)("strong",{parentName:"p"},"navigation")," and ",Object(o.b)("strong",{parentName:"p"},"loading"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#navigation"}),"Navigation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#loading"}),"Loading")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#common-scenarios"}),"Common scenarios")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#loading-a-popup"}),"Loading a popup"))),Object(o.b)("h2",{id:"navigation"},"Navigation"),Object(o.b)("p",null,"Page navigation can be either initiated by the Playwright call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Load a page\nawait page.goto('https://example.com');\n\n// Reload a page\nawait page.reload();\n\n// Click a link\nawait page.click('text=\"Continue\"');\n")),Object(o.b)("p",null,"or by the page itself:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Programmatic navigation\nwindow.location.href = 'https://example.com';\n\n// Single page app navigation\nhistory.pushState({}, 'title', '#deep-link');\n")),Object(o.b)("p",null,"Navigation intent may result in being canceled, for example transformed into a download or hitting an unresolved DNS address. Only when the navigation succeeds, page starts ",Object(o.b)("strong",{parentName:"p"},"loading")," the document."),Object(o.b)("h2",{id:"loading"},"Loading"),Object(o.b)("p",null,"Page load takes time retrieving the response body over the network, parsing, executing the scripts and firing the events. Typical load scenario goes through the following load states:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-page#pageurl"}),Object(o.b)("inlineCode",{parentName:"a"},"page.url()"))," is set to the new url"),Object(o.b)("li",{parentName:"ul"},"document content is loaded over network and parsed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-page#event-domcontentloaded"}),Object(o.b)("inlineCode",{parentName:"a"},"domcontentloaded"))," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.2.0/api/class-page#event-load"}),Object(o.b)("inlineCode",{parentName:"a"},"load"))," event is fired"),Object(o.b)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"networkidle")," is fired - no new network requests made for at least ",Object(o.b)("inlineCode",{parentName:"li"},"500")," ms")),Object(o.b)("h2",{id:"common-scenarios"},"Common scenarios"),Object(o.b)("p",null,"By default, Playwright handles navigations seamlessly so that you did not need to think about them. Consider the following scenario, where everything is handled by Playwright behind the scenes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.goto('http://example.com');\n// If the page does a client-side redirect to 'http://example.com/login'.\n// Playwright will automatically wait for the login page to load.\n\n// Playwright waits for the lazy loaded #username and #password inputs\n// to appear before filling the values.\nawait page.fill('#username', 'John Doe');\nawait page.fill('#password', '********');\n\n// Playwright waits for the login button to become enabled and clicks it.\nawait page.click('text=Login');\n// Clicking the button navigates to the logged-in page and Playwright\n// automatically waits for that.\n")),Object(o.b)("p",null,"Explicit loading handling may be required for more complicated scenarios though."),Object(o.b)("h2",{id:"loading-a-popup"},"Loading a popup"),Object(o.b)("p",null,"When popup is opened, explicitly calling ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-page#pagewaitforloadstatestate-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForLoadState()"))," ensures that popup is loaded to the desired state."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ popup ] = await Promise.all([\n  page.waitForEvent('popup'),\n  page.click('a[target=\"_blank\"]'),  // <-- opens popup\n]);\nawait popup.waitForLoadState('load');\nawait popup.evaluate(() => window.globalVariableInitializedByOnLoadHandler);\n")),Object(o.b)("h3",{id:"unusual-client-side-redirects"},"Unusual client-side redirects"),Object(o.b)("p",null,"Usually, the client-side redirect happens before the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event, and ",Object(o.b)("inlineCode",{parentName:"p"},"page.goto()")," method automatically waits for the redirect. However, when redirecting from a link click or after the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event, it would be easier to explicitly ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/api/class-page#pagewaitfornavigationoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"waitForNavigation()"))," to a specific url."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await Promise.all([\n  page.waitForNavigation({ url: '**/login' }),\n  page.click('a'), // Triggers a navigation with a script redirect.\n]);\n")),Object(o.b)("p",null,"Notice the ",Object(o.b)("inlineCode",{parentName:"p"},"Promise.all")," to click and wait for navigation. Awaiting these methods one after the other is racy, because navigation could happen too fast."),Object(o.b)("h3",{id:"click-triggers-navigation-after-a-timeout"},"Click triggers navigation after a timeout"),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"onclick")," handler triggers a navigation from a ",Object(o.b)("inlineCode",{parentName:"p"},"setTimeout"),", use an explicit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/api#pagewaitfornavigationoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"waitForNavigation()"))," call as a last resort."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await Promise.all([\n  page.waitForNavigation(), // Waits for the next navigation.\n  page.click('a'), // Triggers a navigation after a timeout.\n]);\n")),Object(o.b)("p",null,"Notice the ",Object(o.b)("inlineCode",{parentName:"p"},"Promise.all")," to click and wait for navigation. Awaiting these methods one after the other is racy, because navigation could happen too fast."),Object(o.b)("h3",{id:"unpredictable-patterns"},"Unpredictable patterns"),Object(o.b)("p",null,"When the page has a complex loading pattern, the custom waiting function is most reliable."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.goto('http://example.com');\nawait page.waitForFunction(() => window.amILoadedYet());\n// Ready to take a screenshot, according to the page itself.\nawait page.screenshot();\n")),Object(o.b)("p",null,"When clicking on a button triggers some asynchronous processing, issues a couple GET requests and pushes a new history state multiple times, explicit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.2.0/api#pagewaitfornavigationoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"waitForNavigation()"))," to a specific url is the most reliable option."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await Promise.all([\n  page.waitForNavigation({ url: '**/invoice#processed' }),\n  page.click('text=Process the invoice'), // Triggers some complex handling.\n]);\n")),Object(o.b)("h3",{id:"lazy-loading-hydration"},"Lazy loading, hydration"),Object(o.b)("p",null,"TBD"))}s.isMDXComponent=!0},866:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var a=i.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=s(e.components);return i.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},g=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=n,u=d["".concat(r,".").concat(g)]||d[g]||b[g]||o;return t?i.a.createElement(u,l(l({ref:a},p),{},{components:t})):i.a.createElement(u,l({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=g;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);