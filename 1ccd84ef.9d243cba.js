(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(147)),i={id:"mobile",title:"Experimental support for Chrome for Android"},c={unversionedId:"mobile",id:"mobile",isDocsHomePage:!1,title:"Experimental support for Chrome for Android",description:"You can try Playwright against Chrome for Android today. This support is experimental. Support for devices is tracked in the issue #1122.",source:"@site/docs/mobile.md",slug:"/mobile",permalink:"/playwright/docs/mobile",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/mobile.md",version:"current"},l=[{value:"Requirements",id:"requirements",children:[]},{value:"How to run",id:"how-to-run",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can try Playwright against Chrome for Android today. This support is experimental. Support for devices is tracked in the issue ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/issues/1122"}),"#1122"),"."),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright"}),"Playwright 1.6")," or newer")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/studio/command-line/adb"}),"ADB daemon")," running and authenticated with your device.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://play.google.com/store/apps/details?id=com.android.chrome"}),Object(a.b)("inlineCode",{parentName:"a"},"Chrome 87"))," or newer installed on the device")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'"Enable command line on non-rooted devices" enabled in ',Object(a.b)("inlineCode",{parentName:"p"},"chrome://flags"),"."),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"Playwright will be looking for ADB daemon on the default port ",Object(a.b)("inlineCode",{parentName:"p"},"5037"),". It will use the first device available. Typically running ",Object(a.b)("inlineCode",{parentName:"p"},"adb devices")," is all you need to do.")))),Object(a.b)("h2",{id:"how-to-run"},"How to run"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { _clank } = require('playwright');\n\n(async () => {\n  const context = await _clank.launchPersistentContext('', {\n    viewport: null\n  });\n  const [page] = context.pages();\n  await page.goto('https://webkit.org/');\n  console.log(await page.evaluate(() => window.location.href));\n  await page.screenshot({ path: 'example.png' });\n  await context.close();\n})();\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/memory/android_dev_tips.md"}),"Clank")," is a code name for Chrome for Android.")),Object(a.b)("h2",{id:"known-limitations"},"Known limitations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Raw USB operation is not yet supported, so you need ADB."),Object(a.b)("li",{parentName:"ul"},"Only ",Object(a.b)("inlineCode",{parentName:"li"},"launchPersistentContext")," works, launching ephemeral contexts is not supported."),Object(a.b)("li",{parentName:"ul"},"Passing ",Object(a.b)("inlineCode",{parentName:"li"},"viewport: null")," is necessary to make sure resolution is not emulated."),Object(a.b)("li",{parentName:"ul"},'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'),Object(a.b)("li",{parentName:"ul"},"We didn't run all the tests against the device, so not everything works.")))}s.isMDXComponent=!0}}]);