(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5103],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,f=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4319:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(1395),n(8215),{id:"verification",title:"Verification"}),l={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"- Console logs",source:"@site/docs/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/dotnet/docs/verification",version:"current",frontMatter:{id:"verification",title:"Verification"},sidebar:"docs",previous:{title:"Page Object Models",permalink:"/dotnet/docs/pom"},next:{title:"Videos",permalink:"/dotnet/docs/videos"}},s=[{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Page events",id:"page-events",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,o.kt)("h2",{id:"console-logs"},"Console logs"),(0,o.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Listen for all System.out.printlns\npage.Console += (_, msg) => Console.WriteLine(msg.Text);\n\n// Listen for all console events and handle errors\npage.Console += (_, msg) =>\n{\n    if ("error".Equals(msg.Type))\n        Console.WriteLine("Error text: " + msg.Text);\n};\n\n// Get the next System.out.println\nvar waitForMessageTask = page.WaitForConsoleMessageAsync();\nawait page.EvaluateAsync("console.log(\'hello\', 42, { foo: \'bar\' });");\nvar message = await waitForMessageTask;\n// Deconstruct console.log arguments\nawait message.Args.ElementAt(0).JsonValueAsync<string>(); // hello\nawait message.Args.ElementAt(1).JsonValueAsync<int>(); // 42\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#eventpageconsole"},"event Page.Console"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-errors"},"Page errors"),(0,o.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Log all uncaught errors to the terminal\npage.PageError += (_, exception) =>\n{\n  Console.WriteLine("Uncaught exception: " + exception);\n};\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#eventpagepageerror"},"event Page.PageError"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-events"},"Page events"),(0,o.kt)("h4",{id:"requestfailed"},(0,o.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,o.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,o.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'page.RequestFailed += (_, request) =>\n{\n    Console.WriteLine(request.Url + " " + request.Failure);\n};\n')),(0,o.kt)("h4",{id:"popup---handle-popup-windows"},(0,o.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var popup = await page.RunAndWaitForPopupAsync(async () =>\n{\n    await page.ClickAsync("#open");\n});\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#eventpagerequestfailed"},"event Page.RequestFailed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#eventpagedialog"},"event Page.Dialog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#eventpagepopup"},"event Page.Popup"))))}c.isMDXComponent=!0}}]);