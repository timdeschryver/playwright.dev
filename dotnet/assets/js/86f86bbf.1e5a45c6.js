(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3420],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),g=o,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";a(7294)},1395:function(e,t,a){"use strict";a(7294),a(944)},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),o=a(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4766:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=(a(1395),a(8215),{id:"dialogs",title:"Dialogs"}),l={unversionedId:"dialogs",id:"dialogs",isDocsHomePage:!1,title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/docs/dialogs.mdx",sourceDirName:".",slug:"/dialogs",permalink:"/dotnet/docs/dialogs",version:"current",frontMatter:{id:"dialogs",title:"Dialogs"},sidebar:"docs",previous:{title:"Browsers",permalink:"/dotnet/docs/browsers"},next:{title:"Downloads",permalink:"/dotnet/docs/downloads"}},s=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"beforeunload dialog",id:"beforeunload-dialog",children:[]}],c={toc:s};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright can interact with the web page dialogs such as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"},(0,r.kt)("inlineCode",{parentName:"a"},"alert")),", ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"},(0,r.kt)("inlineCode",{parentName:"a"},"confirm")),", ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"},(0,r.kt)("inlineCode",{parentName:"a"},"prompt"))," as well as ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"},(0,r.kt)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#beforeunload-dialog"},"beforeunload dialog"))),(0,r.kt)("h2",{id:"alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs"),(0,r.kt)("p",null,"By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to accept or decline it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Dialog += (_, dialog) => dialog.AcceptAsync();\nawait page.ClickAsync("button");\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#eventpagedialog"},"event Page.Dialog")," listener ",(0,r.kt)("strong",{parentName:"p"},"must handle")," the dialog. Otherwise your action will stall, be it ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageclickasyncselector-options"},"Page.ClickAsync(selector, options)"),", ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pageevaluateasyncexpression-arg"},"Page.EvaluateAsync(expression, arg)")," or any other. That's because dialogs in Web are modal and block further page execution until they are handled."))),(0,r.kt)("p",null,"As a result, following snippet will never resolve:"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"WRONG!"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Dialog += (_, dialog) => Console.WriteLine(dialog.Message);\nawait page.ClickAsync("button"); // Will hang here\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If there is no listener for ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#eventpagedialog"},"event Page.Dialog"),", all dialogs are automatically dismissed."))),(0,r.kt)("h3",{id:"api-reference"},"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog",title:"Dialog"},"Dialog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialogacceptasyncprompttext"},"Dialog.AcceptAsync(promptText)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialogdismissasync"},"Dialog.DismissAsync()"))),(0,r.kt)("h2",{id:"beforeunload-dialog"},"beforeunload dialog"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pagecloseasyncoptions"},"Page.CloseAsync(options)")," is invoked with the truthy ",(0,r.kt)("inlineCode",{parentName:"p"},"runBeforeUnload")," value, it page runs its unload handlers. This is the only case when ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pagecloseasyncoptions"},"Page.CloseAsync(options)")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),(0,r.kt)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Dialog += (_, dialog) =>\n{\n    Assert.Equal("beforeunload", dialog.Type);\n    dialog.DismissAsync();\n};\nawait page.CloseAsync(runBeforeUnload: true);\n')))}p.isMDXComponent=!0}}]);