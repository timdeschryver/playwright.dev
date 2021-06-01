(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9122],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,v=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),i=n(9443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4022:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"events",title:"Events"}),s={unversionedId:"events",id:"events",isDocsHomePage:!1,title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/docs/events.mdx",sourceDirName:".",slug:"/events",permalink:"/dotnet/docs/events",version:"current",frontMatter:{id:"events",title:"Events"},sidebar:"docs",previous:{title:"Emulation",permalink:"/dotnet/docs/emulation"},next:{title:"Extensibility",permalink:"/dotnet/docs/extensibility"}},u=[{value:"Waiting for event",id:"waiting-for-event",children:[]},{value:"Adding/removing event listener",id:"addingremoving-event-listener",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#waiting-for-event"},"Waiting for event")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#addingremoving-event-listener"},"Adding/removing event listener"))),(0,a.kt)("h2",{id:"waiting-for-event"},"Waiting for event"),(0,a.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,a.kt)("p",null,"Wait for a request with the specified url:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var waitForRequestTask = page.WaitForRequestAsync("**/*logo*.png");\nawait page.GotoAsync("https://wikipedia.org");\nvar request = await waitForRequestTask;\nConsole.WriteLine(request.Url);\n')),(0,a.kt)("p",null,"Wait for popup window:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var popup = await page.RunAndWaitForPopupAsync(async =>\n{\n    await page.EvaluateAsync("window.open()");\n});\nawait popup.GotoAsync("https://wikipedia.org");\n')),(0,a.kt)("h2",{id:"addingremoving-event-listener"},"Adding/removing event listener"),(0,a.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Request += (_, request) => Console.WriteLine("Request sent: " + request.Url);\nvoid listener(object sender, IRequest request)\n{\n    Console.WriteLine("Request finished: " + request.Url);\n};\npage.RequestFinished += listener;\nawait page.GotoAsync("https://wikipedia.org");\n\n// Remove previously added listener.\npage.RequestFinished -= listener;\nawait page.GotoAsync("https://www.openstreetmap.org/");\n')))}p.isMDXComponent=!0}}]);