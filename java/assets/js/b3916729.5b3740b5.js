"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8733],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3915:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return y}});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&u(e,n,t[n]);return e};const m={id:"extensibility",title:"Extensibility"},f=void 0,g={unversionedId:"extensibility",id:"extensibility",title:"Extensibility",description:"- Custom selector engines",source:"@site/docs/extensibility.mdx",sourceDirName:".",slug:"/extensibility",permalink:"/java/docs/next/extensibility",tags:[],version:"current",frontMatter:{id:"extensibility",title:"Extensibility"},sidebar:"docs",previous:{title:"Events",permalink:"/java/docs/next/events"},next:{title:"Frames",permalink:"/java/docs/next/frames"}},d={},y=[{value:"Custom selector engines",id:"custom-selector-engines",level:2}],b={toc:y};function h(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),u),o(t,a({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#custom-selector-engines"}),"Custom selector engines"))),(0,r.kt)("h2",p({},{id:"custom-selector-engines"}),"Custom selector engines"),(0,r.kt)("p",null,"Playwright supports custom selector engines, registered with ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/next/api/class-selectors#selectors-register"}),"Selectors.register(name, script[, options])"),"."),(0,r.kt)("p",null,"Selector engine should have the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," (root is either a ",(0,r.kt)("inlineCode",{parentName:"li"},"Document"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Element"),") to a ",(0,r.kt)("inlineCode",{parentName:"li"},"target")," element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",(0,r.kt)("inlineCode",{parentName:"li"},"selector")," relative to the ",(0,r.kt)("inlineCode",{parentName:"li"},"root"),".")),(0,r.kt)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",(0,r.kt)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),(0,r.kt)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-java"}),'// Must be a script that evaluates to a selector engine instance.\nString createTagNameEngine = "{\\n" +\n  "  // Returns the first element matching given selector in the root\'s subtree.\\n" +\n  "  query(root, selector) {\\n" +\n  "    return root.querySelector(selector);\\n" +\n  "  },\\n" +\n  "\\n" +\n  "  // Returns all elements matching given selector in the root\'s subtree.\\n" +\n  "  queryAll(root, selector) {\\n" +\n  "    return Array.from(root.querySelectorAll(selector));\\n" +\n  "  }\\n" +\n  "}";\n\n// Register the engine. Selectors will be prefixed with "tag=".\nplaywright.selectors().register("tag", createTagNameEngine);\n\n// Now we can use "tag=" selectors.\nLocator button = page.locator("tag=button");\nbutton.click();\n\n// We can combine it with other selector engines using ">>" combinator.\npage.locator("tag=div >> span >> \\"Click me\\"").click();\n\n// We can use it in any methods supporting selectors.\nint buttonCount = (int) page.locator("tag=button").count();\n')))}h.isMDXComponent=!0}}]);