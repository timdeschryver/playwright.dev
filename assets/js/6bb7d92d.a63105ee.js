"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8406],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),c=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||r;return a?s.createElement(f,i(i({ref:t},u),{},{components:a})):s.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var s=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return s.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var s=a(7294),n=a(9443);var r=function(){var e=(0,s.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=r(),k=f.tabGroupChoices,h=f.setTabGroupChoices,v=(0,s.useState)(n),b=v[0],N=v[1],y=s.Children.toArray(e.children),g=[];if(null!=d){var x=k[d];null!=x&&x!==b&&p.some((function(e){return e.value===x}))&&N(x)}var C=function(e){var t=e.currentTarget,a=g.indexOf(t),s=p[a].value;N(s),null!=d&&(h(d,s),setTimeout((function(){var e,a,s,n,r,i,l,c;(e=t.getBoundingClientRect(),a=e.top,s=e.left,n=e.bottom,r=e.right,i=window,l=i.innerHeight,c=i.innerWidth,a>=0&&r<=c&&n<=l&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},S=function(e){var t,a;switch(e.keyCode){case u:var s=g.indexOf(e.target)+1;a=g[s]||g[0];break;case c:var n=g.indexOf(e.target)-1;a=g[n]||g[g.length-1]}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return s.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:S,onFocus:C,onClick:C},a)}))),t?(0,s.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var s=(0,a(7294).createContext)(void 0);t.Z=s},8241:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var s=a(2122),n=a(9756),r=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"class-testcase",title:"TestCase"}),l=void 0,o={unversionedId:"api/class-testcase",id:"api/class-testcase",isDocsHomePage:!1,title:"TestCase",description:"TestCase corresponds to every test(title, testFunction) call in a test file. When a single test(title, testFunction) is running in multiple projects or repeated multiple times, it will have multiple TestCase objects in corresponding projects' suites.",source:"@site/docs/api/class-testcase.mdx",sourceDirName:"api",slug:"/api/class-testcase",permalink:"/docs/next/api/class-testcase",version:"current",frontMatter:{id:"class-testcase",title:"TestCase"},sidebar:"api",previous:{title:"Suite",permalink:"/docs/next/api/class-suite"},next:{title:"TestResult",permalink:"/docs/next/api/class-testresult"}},c=[{value:"testCase.ok()",id:"test-case-ok",children:[]},{value:"testCase.outcome()",id:"test-case-outcome",children:[]},{value:"testCase.titlePath()",id:"test-case-title-path",children:[]},{value:"testCase.annotations",id:"test-case-annotations",children:[]},{value:"testCase.expectedStatus",id:"test-case-expected-status",children:[]},{value:"testCase.location",id:"test-case-location",children:[]},{value:"testCase.results",id:"test-case-results",children:[]},{value:"testCase.retries",id:"test-case-retries",children:[]},{value:"testCase.suite",id:"test-case-suite",children:[]},{value:"testCase.timeout",id:"test-case-timeout",children:[]},{value:"testCase.title",id:"test-case-title",children:[]}],u={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TestCase")," corresponds to every ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," call in a test file. When a single ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," is running in multiple projects or repeated multiple times, it will have multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"TestCase")," objects in corresponding projects' suites."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-ok"},"testCase.ok()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-outcome"},"testCase.outcome()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-title-path"},"testCase.titlePath()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-annotations"},"testCase.annotations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-expected-status"},"testCase.expectedStatus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-location"},"testCase.location")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-results"},"testCase.results")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-retries"},"testCase.retries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-suite"},"testCase.suite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-timeout"},"testCase.timeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testcase#test-case-title"},"testCase.title"))),(0,r.kt)("h2",{id:"test-case-ok"},"testCase.ok()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-ok-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,r.kt)("a",{href:"#test-case-ok-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Whether the test is considered running fine. Non-ok tests fail the test run with non-zero exit code."),(0,r.kt)("h2",{id:"test-case-outcome"},"testCase.outcome()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-outcome-return"})," ","<",'"skipped"|"expected"|"unexpected"|"flaky"',">",(0,r.kt)("a",{href:"#test-case-outcome-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Testing outcome for this test. Note that outcome is not the same as ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test that is expected to fail and actually fails is ",(0,r.kt)("inlineCode",{parentName:"li"},"'expected'"),"."),(0,r.kt)("li",{parentName:"ul"},"Test that passes on a second retry is ",(0,r.kt)("inlineCode",{parentName:"li"},"'flaky'"),".")),(0,r.kt)("h2",{id:"test-case-title-path"},"testCase.titlePath()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-title-path-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,r.kt)("a",{href:"#test-case-title-path-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns a list of titles from the root down to this test."),(0,r.kt)("h2",{id:"test-case-annotations"},"testCase.annotations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Annotation type, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"'skip'")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"'fail'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description")," ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Optional description.")))),(0,r.kt)("p",null,"The list of annotations applicable to the current test. Includes annotations from the test, annotations from all ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-describe"},"test.describe(title, callback)")," groups the test belongs to and file-level annotations for the test file."),(0,r.kt)("p",null,"Annotations are available during test execution through ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-annotations"},"testInfo.annotations"),"."),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-annotations"},"test annotations"),"."),(0,r.kt)("h2",{id:"test-case-expected-status"},"testCase.expectedStatus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",'"passed"|"failed"|"timedOut"|"skipped"',">")),(0,r.kt)("p",null,"Expected test status."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tests marked as ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-skip-1"},"test.skip(title, testFunction)")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-fixme"},"test.fixme([condition, description])")," are expected to be ",(0,r.kt)("inlineCode",{parentName:"li"},"'skipped'"),"."),(0,r.kt)("li",{parentName:"ul"},"Tests marked as ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-test#test-fail"},"test.fail([condition, description])")," are expected to be ",(0,r.kt)("inlineCode",{parentName:"li"},"'failed'"),"."),(0,r.kt)("li",{parentName:"ul"},"Other tests are expected to be ",(0,r.kt)("inlineCode",{parentName:"li"},"'passed'"),".")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testresult#test-result-status"},"testResult.status")," for the actual status."),(0,r.kt)("h2",{id:"test-case-location"},"testCase.location"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-location",title:"Location"},"Location"),">")),(0,r.kt)("p",null,"Location in the source where the test is defined."),(0,r.kt)("h2",{id:"test-case-results"},"testCase.results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-testresult",title:"TestResult"},"TestResult"),">",">")),(0,r.kt)("p",null,"Results for each run of this test."),(0,r.kt)("h2",{id:"test-case-retries"},"testCase.retries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,r.kt)("p",null,"The maximum number of retries given to this test in the configuration."),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/test-retries#retries"},"test retries"),"."),(0,r.kt)("h2",{id:"test-case-suite"},"testCase.suite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"/docs/next/api/class-suite",title:"Suite"},"Suite"),">")),(0,r.kt)("p",null,"Suite this test case belongs to."),(0,r.kt)("h2",{id:"test-case-timeout"},"testCase.timeout"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,r.kt)("p",null,"The timeout given to the test. Affected by ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testconfig#test-config-timeout"},"testConfig.timeout"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testproject#test-project-timeout"},"testProject.timeout"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-set-timeout"},"test.setTimeout(timeout)"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-slow"},"test.slow([condition, description])")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-testinfo#test-info-set-timeout"},"testInfo.setTimeout(timeout)"),"."),(0,r.kt)("h2",{id:"test-case-title"},"testCase.title"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,r.kt)("p",null,"Test title as passed to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-call"},"test(title, testFunction)")," call."))}p.isMDXComponent=!0},6010:function(e,t,a){function s(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=s(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=s(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);