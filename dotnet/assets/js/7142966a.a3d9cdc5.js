(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[409],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),i=n(9443);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7632:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"test-cli",title:"Advanced: command line"}),l={unversionedId:"test-cli",id:"test-cli",isDocsHomePage:!1,title:"Advanced: command line",description:"`bash",source:"@site/docs/test-cli.mdx",sourceDirName:".",slug:"/test-cli",permalink:"/dotnet/docs/test-cli",version:"current",frontMatter:{id:"test-cli",title:"Advanced: command line"}},s=[],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Ask for help!\nnpx playwright test --help\n")),(0,a.kt)("p",null,"Arguments passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test")," are treated as a filter for test files. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"npx playwright test my-spec")," will only run tests from files with ",(0,a.kt)("inlineCode",{parentName:"p"},"my-spec")," in the name."),(0,a.kt)("p",null,"All the options are available in the ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/test-advanced"},"configuration file"),". However, selected options can be passed to a command line and take a priority over the configuration file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--headed"),": Run tests in headed browsers. Useful for debugging."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--browser"),": Run test in a specific browser. Available options are  ",(0,a.kt)("inlineCode",{parentName:"li"},'"chromium"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"firefox"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"webkit"')," or ",(0,a.kt)("inlineCode",{parentName:"li"},'"all"')," to run tests in all three browsers at the same time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-c <file>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--config <file>"),": Configuration file. If not passed, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.config.ts")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.config.js")," in the current directory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-c <dir>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--config <dir>"),": Directory with the tests to run without configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--forbid-only"),": Whether to disallow ",(0,a.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-g <grep>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--grep <grep>"),": Only run tests matching this regular expression. For example, this will run ",(0,a.kt)("inlineCode",{parentName:"li"},"'should add to cart'")," when passed ",(0,a.kt)("inlineCode",{parentName:"li"},'-g="add to cart"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--global-timeout <number>"),": Total timeout for the whole test run in milliseconds. By default, there is no global timeout."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--list"),": List all the tests, but do not run them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--max-failures <N>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-x"),": Stop after the first ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," test failures. Passing ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")," stops after the first failure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--output <dir>"),": Directory for artifacts produced by tests, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"test-results"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--project <name>"),": Only run tests from one of the specified ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/test-advanced#projects"},"projects"),". Defaults to running all projects defined in the configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--quiet"),": Whether to suppress stdout and stderr from the tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--repeat-each <N>"),": Run each test ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," times, defaults to one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--reporter <reporter>"),": Choose a reporter: minimalist ",(0,a.kt)("inlineCode",{parentName:"li"},"dot"),", concise ",(0,a.kt)("inlineCode",{parentName:"li"},"line")," or detailed ",(0,a.kt)("inlineCode",{parentName:"li"},"list"),". See ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/test-reporters"},"reporters")," for more information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--retries <number>"),": The maximum number of ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/test-retries"},"retries")," for flaky tests, defaults to zero (no retries)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--shard <shard>"),": ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/test-parallel#shards"},"Shard")," tests and execute only selected shard, specified in the form ",(0,a.kt)("inlineCode",{parentName:"li"},"current/all"),", 1-based, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"3/5"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--timeout <number>"),": Maximum timeout in milliseconds for each test, defaults to 30 seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--update-snapshots")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-u"),": Whether to update ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/test-snapshots"},"snapshots")," with actual results instead of comparing them. Use this when snapshot expectations have changed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--workers <number>")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-j <number>"),": The maximum number of concurrent worker processes that run in ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/test-parallel"},"parallel"),".")))}u.isMDXComponent=!0}}]);