"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6955],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,d=e.groupId,h=e.className,m=o(),g=m.tabGroupChoices,f=m.setTabGroupChoices,v=(0,a.useState)(r),w=v[0],k=v[1],b=a.Children.toArray(e.children),y=[];if(null!=d){var x=g[d];null!=x&&x!==w&&p.some((function(e){return e.value===x}))&&k(x)}var N=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;k(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,r,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},S=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:S,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"auth",title:"Authentication"}),s=void 0,l={unversionedId:"auth",id:"version-1.10.0/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.10.0/auth.mdx",sourceDirName:".",slug:"/auth",permalink:"/java/docs/1.10.0/auth",version:"1.10.0",frontMatter:{id:"auth",title:"Authentication"},sidebar:"version-1.10.0/docs",previous:{title:"Assertions",permalink:"/java/docs/1.10.0/assertions"},next:{title:"Browsers",permalink:"/java/docs/1.10.0/browsers"}},c=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Session storage",id:"session-storage",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"API reference",id:"api-reference-2",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright can be used to automate scenarios that require authentication."),(0,o.kt)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/core-concepts#browser-contexts"},"browser contexts"),". This isolation model improves reproducibility and prevents cascading test failures. New browser contexts can load existing authentication state. This eliminates the need to login in every context and speeds up test execution."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the app UI). For ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication")," use ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-browser#browsernewcontextoptions"},"Browser.newContext([options])"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#automate-logging-in"},"Automate logging in")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reuse-authentication-state"},"Reuse authentication state")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#session-storage"},"Session storage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multi-factor-authentication"},"Multi-factor authentication"))),(0,o.kt)("h2",{id:"automate-logging-in"},"Automate logging in"),(0,o.kt)("p",null,"The Playwright API can automate interaction with a login form. See ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/input"},"Input guide")," for more details."),(0,o.kt)("p",null,"The following example automates login on GitHub. Once these steps are executed, the browser context will be authenticated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Page page = context.newPage();\npage.navigate("https://github.com/login");\n// Interact with login form\npage.click("text=Login");\npage.fill("input[name=\'login\']", USERNAME);\npage.fill("input[name=\'password\']", PASSWORD);\npage.click("text=Submit");\n// Verify app is logged in\n')),(0,o.kt)("p",null,"These steps can be executed for every browser context. However, redoing login for every test can slow down test execution. To prevent that, we will reuse existing authentication state in new browser contexts."),(0,o.kt)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),(0,o.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," or in ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"},"local storage"),". Playwright provides ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-browsercontext#browsercontextstoragestateoptions"},"BrowserContext.storageState([options])")," method that can be used to retrieve storage state from authenticated contexts and then create new contexts with prepopulated state."),(0,o.kt)("p",null,"Cookies and local storage state can be used across different browsers. They depend on your application's authentication model: some apps might require both cookies and local storage."),(0,o.kt)("p",null,"The following code snippet retrieves state from an authenticated context and creates a new context with that state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Save storage state and store as an env variable\nString storage = context.storageState();\nSystem.getenv().put("STORAGE", storage);\n\n// Create a new context with the saved storage state\nBrowserContext context = browser.newContext(\n  new Browser.NewContextOptions().setStorageState(storage));\n')),(0,o.kt)("p",null,"Logging in via the UI and then reusing authentication state can be combined to implement ",(0,o.kt)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run tests (for example, with ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test"),")."),(0,o.kt)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In Jest, this can be executed in ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/en/configuration#globalsetup-string"},(0,o.kt)("inlineCode",{parentName:"a"},"globalSetup")),"."))),(0,o.kt)("li",{parentName:"ol"},"In each test, load authentication state in ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeEach")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeAll")," step.")),(0,o.kt)("p",null,"This approach will also ",(0,o.kt)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely on any external state."),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-browsercontext#browsercontextstoragestateoptions"},"BrowserContext.storageState([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-browser#browsernewcontextoptions"},"Browser.newContext([options])"))),(0,o.kt)("h2",{id:"session-storage"},"Session storage"),(0,o.kt)("p",null,"Rarely, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"session storage")," is used for storing information associated with the logged-in state. Session storage is specific to a particular domain and is not persisted across page loads. Playwright does not provide API to persist session storage, but the following snippet can be used to save/load session storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Get session storage and store as env variable\nString sessionStorage = (String) page.evaluate("() => JSON.stringify(sessionStorage");\nSystem.getenv().put("SESSION_STORAGE", sessionStorage);\n\n// Set session storage in a new context\nString sessionStorage = System.getenv("SESSION_STORAGE");\ncontext.addInitScript("(storage => {\\n" +\n  "  if (window.location.hostname === \'example.com\') {\\n" +\n  "    const entries = JSON.parse(storage);\\n" +\n  "    Object.keys(entries).forEach(key => {\\n" +\n  "      window.sessionStorage.setItem(key, entries[key]);\\n" +\n  "    });\\n" +\n  "  }\\n" +\n  "})(" + sessionStorage + ")");\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-browsercontext#browsercontextstoragestateoptions"},"BrowserContext.storageState([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-browser#browsernewcontextoptions"},"Browser.newContext([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageevaluateexpression-arg"},"Page.evaluate(expression[, arg])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-browsercontext#browsercontextaddinitscriptscript"},"BrowserContext.addInitScript(script)"))),(0,o.kt)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),(0,o.kt)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need manual intervention. Persistent authentication can be used to partially automate MFA scenarios."),(0,o.kt)("h3",{id:"persistent-authentication"},"Persistent authentication"),(0,o.kt)("p",null,"Note that persistent authentication is not suited for CI environments since it relies on a disk location. User data directories are specific to browser types and cannot be shared across browser types."),(0,o.kt)("p",null,"User data directories can be used with the ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"},"BrowserType.launchPersistentContext(userDataDir[, options])")," API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Path userDataDir = Paths.get("/path/to/directory");\n      BrowserContext context = chromium.launchPersistentContext(userDataDir,\n        new BrowserType.LaunchPersistentContextOptions().setHeadless(false));\n      // Execute login steps manually in the browser window\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"lifecycle"},"Lifecycle"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a user data directory on disk 2. Launch a persistent context with the user data directory and login the MFA account. 3. Reuse user data directory to run automation scenarios.")),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"},"BrowserType.launchPersistentContext(userDataDir[, options])"))))}p.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);