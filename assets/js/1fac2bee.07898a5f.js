"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[38674],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,p=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,d=e.groupId,h=e.className,m=i(),f=m.tabGroupChoices,k=m.setTabGroupChoices,b=(0,n.useState)(r),g=b[0],v=b[1],N=n.Children.toArray(e.children),y=[];if(null!=d){var w=f[d];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&v(w)}var S=function(e){var t=e.currentTarget,a=y.indexOf(t),n=u[a].value;v(n),null!=d&&(k(d,n),setTimeout((function(){var e,a,n,r,i,l,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,a>=0&&i<=s&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},h)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:S,onClick:S},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},69941:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),l=(a(55064),a(58215),{id:"class-electron",title:"Electron"}),o=void 0,c={unversionedId:"api/class-electron",id:"api/class-electron",isDocsHomePage:!1,title:"Electron",description:"Playwright has experimental support for Electron automation. You can access electron namespace via:",source:"@site/docs/api/class-electron.mdx",sourceDirName:"api",slug:"/api/class-electron",permalink:"/docs/next/api/class-electron",version:"current",frontMatter:{id:"class-electron",title:"Electron"},sidebar:"api",previous:{title:"AndroidWebView",permalink:"/docs/next/api/class-androidwebview"},next:{title:"ElectronApplication",permalink:"/docs/next/api/class-electronapplication"}},s=[{value:"electron.launch(options)",id:"electron-launch",children:[]}],p={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright has ",(0,i.kt)("strong",{parentName:"p"},"experimental")," support for Electron automation. You can access electron namespace via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { _electron } = require('playwright');\n")),(0,i.kt)("p",null,"An example of the Electron automation script would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { _electron: electron } = require('playwright');\n\n(async () => {\n  // Launch Electron app.\n  const electronApp = await electron.launch({ args: ['main.js'] });\n\n  // Evaluation expression in the Electron context.\n  const appPath = await electronApp.evaluate(async ({ app }) => {\n    // This runs in the main Electron process, parameter here is always\n    // the result of the require('electron') in the main app script.\n    return app.getAppPath();\n  });\n  console.log(appPath);\n\n  // Get the first window that the app opens, wait if necessary.\n  const window = await electronApp.firstWindow();\n  // Print the title.\n  console.log(await window.title());\n  // Capture a screenshot.\n  await window.screenshot({ path: 'intro.png' });\n  // Direct Electron console to Node terminal.\n  window.on('console', console.log);\n  // Click button.\n  await window.click('text=Click me');\n  // Exit app.\n  await electronApp.close();\n})();\n")),(0,i.kt)("p",null,"Note that since you don't need Playwright to install web browsers when testing Electron, you can omit browser download via setting the following environment variable when installing Playwright:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-electron#electron-launch"},"electron.launch([options])"))),(0,i.kt)("h2",{id:"electron-launch"},"electron.launch(","[options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"acceptDownloads"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-accept-downloads"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to automatically download all the attachments. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled.",(0,i.kt)("a",{href:"#electron-launch-option-accept-downloads",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-args"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," Additional arguments to pass to the application when launching. You typically pass the main script name here.",(0,i.kt)("a",{href:"#electron-launch-option-args",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bypassCSP"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-bypass-csp"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Toggles bypassing page's Content-Security-Policy.",(0,i.kt)("a",{href:"#electron-launch-option-bypass-csp",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"colorScheme"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-color-scheme"})," ","<",'"light"|"dark"|"no-preference"',">"," Emulates ",(0,i.kt)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",(0,i.kt)("inlineCode",{parentName:"li"},"'light'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'dark'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-page#page-emulate-media"},"page.emulateMedia([options])")," for more details. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"'light'"),".",(0,i.kt)("a",{href:"#electron-launch-option-color-scheme",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cwd"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-cwd"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Current working directory to launch application from.",(0,i.kt)("a",{href:"#electron-launch-option-cwd",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"env"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-env"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," Specifies environment variables that will be visible to Electron. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"process.env"),".",(0,i.kt)("a",{href:"#electron-launch-option-env",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"executablePath"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-executable-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Launches given Electron application. If not specified, launches the default Electron executable installed in this package, located at ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/.bin/electron"),".",(0,i.kt)("a",{href:"#electron-launch-option-executable-path",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extraHTTPHeaders"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-extra-http-headers"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">"," An object containing additional HTTP headers to be sent with every request. All header values must be strings.",(0,i.kt)("a",{href:"#electron-launch-option-extra-http-headers",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"geolocation"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-geolocation"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("a",{href:"#electron-launch-option-geolocation",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"latitude")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Latitude between -90 and 90."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"longitude")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Longitude between -180 and 180."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accuracy")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Non-negative accuracy value. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpCredentials"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-http-credentials"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Credentials for ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"},"HTTP authentication"),".",(0,i.kt)("a",{href:"#electron-launch-option-http-credentials",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-ignore-https-errors"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to ignore HTTPS errors during navigation. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("a",{href:"#electron-launch-option-ignore-https-errors",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locale"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-locale"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Specify user locale, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"en-GB"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",(0,i.kt)("inlineCode",{parentName:"li"},"navigator.language")," value, ",(0,i.kt)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules.",(0,i.kt)("a",{href:"#electron-launch-option-locale",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"offline"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-offline"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to emulate network being offline. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("a",{href:"#electron-launch-option-offline",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recordHar"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-record-har"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Enables ",(0,i.kt)("a",{parentName:"li",href:"http://www.softwareishard.com/blog/har-12-spec"},"HAR")," recording for all pages into ",(0,i.kt)("inlineCode",{parentName:"li"},"recordHar.path")," file. If not specified, the HAR is not recorded. Make sure to await ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-close"},"browserContext.close()")," for the HAR to be saved.",(0,i.kt)("a",{href:"#electron-launch-option-record-har",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"omitContent")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Optional setting to control whether to omit request content from the HAR. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Path on the filesystem to write the HAR file to."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recordVideo"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-record-video"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Enables video recording for all pages into ",(0,i.kt)("inlineCode",{parentName:"li"},"recordVideo.dir")," directory. If not specified videos are not recorded. Make sure to await ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-browsercontext#browser-context-close"},"browserContext.close()")," for videos to be saved.",(0,i.kt)("a",{href:"#electron-launch-option-record-video",class:"list-anchor"},"#"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dir")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Path to the directory to put videos into."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">"," Optional dimensions of the recorded videos. If not specified the size will be equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"viewport")," scaled down to fit into 800x800. If ",(0,i.kt)("inlineCode",{parentName:"li"},"viewport")," is not configured explicitly the video size defaults to 800x450. Actual picture of each page will be scaled down if necessary to fit the specified size.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Video frame width."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Video frame height."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timezoneId"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-option-timezone-id"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Changes the timezone of the context. See ",(0,i.kt)("a",{parentName:"li",href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"},"ICU's metaZones.txt")," for a list of supported timezone IDs.",(0,i.kt)("a",{href:"#electron-launch-option-timezone-id",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"electron-launch-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/class-electronapplication",title:"ElectronApplication"},"ElectronApplication"),">",">",(0,i.kt)("a",{href:"#electron-launch-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Launches electron application specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"executablePath"),"."))}u.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);