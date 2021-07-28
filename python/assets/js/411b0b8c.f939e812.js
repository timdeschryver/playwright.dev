"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2785],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(67294),o=r(79443);var i=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=r(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=i(),h=f.tabGroupChoices,g=f.setTabGroupChoices,v=(0,n.useState)(o),y=v[0],k=v[1],b=n.Children.toArray(e.children),w=[];if(null!=d){var N=h[d];null!=N&&N!==y&&c.some((function(e){return e.value===N}))&&k(N)}var x=function(e){var t=e.currentTarget,r=w.indexOf(t),n=c[r].value;k(n),null!=d&&(g(d,n),setTimeout((function(){var e,r,n,o,i,a,l,p;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,i=e.right,a=window,l=a.innerHeight,p=a.innerWidth,r>=0&&i<=p&&o<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case p:var o=w.indexOf(e.target)-1;r=w[o]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:x,onClick:x},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},60913:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=(r(55064),r(58215),{id:"test-reporters",title:"Reporters"}),l=void 0,s={unversionedId:"test-reporters",id:"version-1.13.0/test-reporters",isDocsHomePage:!1,title:"Reporters",description:"- Using reporters",source:"@site/versioned_docs/version-1.13.0/test-reporters.mdx",sourceDirName:".",slug:"/test-reporters",permalink:"/python/docs/test-reporters",version:"1.13.0",frontMatter:{id:"test-reporters",title:"Reporters"}},p=[{value:"Using reporters",id:"using-reporters",children:[{value:"Multiple reporters",id:"multiple-reporters",children:[]},{value:"Reporters on CI",id:"reporters-on-ci",children:[]}]},{value:"Built-in reporters",id:"built-in-reporters",children:[{value:"List reporter",id:"list-reporter",children:[]},{value:"Line reporter",id:"line-reporter",children:[]},{value:"Dot reporter",id:"dot-reporter",children:[]},{value:"JSON reporter",id:"json-reporter",children:[]},{value:"JUnit reporter",id:"junit-reporter",children:[]}]}],u={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-reporters"},"Using reporters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#built-in-reporters"},"Built-in reporters"))),(0,i.kt)("h2",{id:"using-reporters"},"Using reporters"),(0,i.kt)("p",null,"Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. The easiest way to try out built-in reporters is to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter")," ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/test-cli"},"command line option"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,i.kt)("p",null,"For more control, you can specify reporters programmatically in the ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/test-configuration"},"configuration file"),"."),(0,i.kt)("h3",{id:"multiple-reporters"},"Multiple reporters"),(0,i.kt)("p",null,"You can use multiple reporters at the same time. For example  you can use",(0,i.kt)("inlineCode",{parentName:"p"},"'list'")," for nice terminal output and ",(0,i.kt)("inlineCode",{parentName:"p"},"'json'")," to get a comprehensive json file with the test results."),(0,i.kt)("h3",{id:"reporters-on-ci"},"Reporters on CI"),(0,i.kt)("p",null,"You can use different reporters locally and on CI. For example, using concise ",(0,i.kt)("inlineCode",{parentName:"p"},"'dot'")," reporter avoids too much output."),(0,i.kt)("h2",{id:"built-in-reporters"},"Built-in reporters"),(0,i.kt)("p",null,"All built-in reporters show detailed information about failures, and mostly differ in verbosity for successful runs."),(0,i.kt)("h3",{id:"list-reporter"},"List reporter"),(0,i.kt)("p",null,"List reporter is default. It prints a line for each test being run."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\n")),(0,i.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=list\nRunning 124 tests using 6 workers\n\n  \u2713 should access error in env (438ms)\n  \u2713 handle long test names (515ms)\n  x 1) render expected (691ms)\n  \u2713 should timeout (932ms)\n    should repeat each:\n  \u2713 should respect enclosing .gitignore (569ms)\n    should teardown env after timeout:\n    should respect excluded tests:\n  \u2713 should handle env beforeEach error (638ms)\n    should respect enclosing .gitignore:\n")),(0,i.kt)("h3",{id:"line-reporter"},"Line reporter"),(0,i.kt)("p",null,"Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\n")),(0,i.kt)("p",null,"Here is an example output in the middle of a test run. Failures are reported inline."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=line\nRunning 124 tests using 6 workers\n  1) dot-reporter.spec.ts:20:1 \u203a render expected ===================================================\n\n    Error: expect(received).toBe(expected) // Object.is equality\n\n    Expected: 1\n    Received: 0\n\n[23/124] gitignore.spec.ts - should respect nested .gitignore\n")),(0,i.kt)("h3",{id:"dot-reporter"},"Dot reporter"),(0,i.kt)("p",null,"Dot reporter is very concise - it only produces a single character per successful test run. It is useful on CI where you don't want a lot of output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n")),(0,i.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\nRunning 124 tests using 6 workers\n\xb7\xb7\xb7\xb7\xb7\xb7F\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n")),(0,i.kt)("h3",{id:"json-reporter"},"JSON reporter"),(0,i.kt)("p",null,"JSON reporter produces an object with all information about the test run. It is usually used together with some terminal reporter like ",(0,i.kt)("inlineCode",{parentName:"p"},"dot")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"line"),"."),(0,i.kt)("p",null,"Most likely you want to write the JSON to a file. When running with ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=json"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JSON_OUTPUT_NAME")," environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json,dot\n")),(0,i.kt)("p",null,"In configuration file, pass options directly:"),(0,i.kt)("h3",{id:"junit-reporter"},"JUnit reporter"),(0,i.kt)("p",null,"JUnit reporter produces a JUnit-style xml report. It is usually used together with some terminal reporter like ",(0,i.kt)("inlineCode",{parentName:"p"},"dot")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"line"),"."),(0,i.kt)("p",null,"Most likely you want to write the report to an xml file. When running with ",(0,i.kt)("inlineCode",{parentName:"p"},"--reporter=junit"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME")," environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit,line\n")),(0,i.kt)("p",null,"In configuration file, pass options directly:"))}c.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);