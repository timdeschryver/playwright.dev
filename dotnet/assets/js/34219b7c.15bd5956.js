"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4636],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return c}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=l(r),c=i,h=p["".concat(u,".").concat(c)]||p[c]||d[c]||o;return r?n.createElement(h,s(s({ref:t},f),{},{components:r})):n.createElement(h,s({ref:t},f))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},5064:function(e,t,r){r(7294),r(9443)},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},2197:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),s=(r(5064),r(8215),{id:"test-fixtures",title:"Advanced: fixtures"}),a=void 0,u={unversionedId:"test-fixtures",id:"version-1.13.0/test-fixtures",isDocsHomePage:!1,title:"Advanced: fixtures",description:"- Introduction to fixtures",source:"@site/versioned_docs/version-1.13.0/test-fixtures.mdx",sourceDirName:".",slug:"/test-fixtures",permalink:"/dotnet/docs/test-fixtures",version:"1.13.0",frontMatter:{id:"test-fixtures",title:"Advanced: fixtures"}},l=[{value:"Introduction to fixtures",id:"introduction-to-fixtures",children:[{value:"Without fixtures",id:"without-fixtures",children:[]},{value:"With fixtures",id:"with-fixtures",children:[]}]},{value:"Test fixtures",id:"test-fixtures",children:[]},{value:"Worker fixtures",id:"worker-fixtures",children:[]},{value:"Overriding fixtures",id:"overriding-fixtures",children:[]}],f={toc:l};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction-to-fixtures"},"Introduction to fixtures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#test-fixtures"},"Test fixtures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#worker-fixtures"},"Worker fixtures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overriding-fixtures"},"Overriding fixtures"))),(0,o.kt)("h2",{id:"introduction-to-fixtures"},"Introduction to fixtures"),(0,o.kt)("p",null,"Playwright Test is based on the concept of the test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests, which gives Playwright Test following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playwright Test runs tests in parallel by default, making your test suite much faster."),(0,o.kt)("li",{parentName:"ul"},"Playwright Test can efficiently retry the flaky failures, instead of re-running the whole suite."),(0,o.kt)("li",{parentName:"ul"},"You can group tests based on their meaning, instead of their common setup.")),(0,o.kt)("p",null,"Here is how typical test environment setup differs between traditional test style and the fixture-based one. We assume a ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoPage"),' class that helps interacting with a "todo list" page of the web app.'),(0,o.kt)("h3",{id:"without-fixtures"},"Without fixtures"),(0,o.kt)("h3",{id:"with-fixtures"},"With fixtures"),(0,o.kt)("p",null,"You declare exact fixtures that the test needs and the runner initializes them for each test individually. Tests can use any combinations of the fixtures to tailor precise environment they need. You no longer need to wrap tests in ",(0,o.kt)("inlineCode",{parentName:"p"},"describe"),"s that set up environment, everything is declarative and typed."),(0,o.kt)("p",null,"There are two types of fixtures: ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"worker"),". Test fixtures are set up for each test and worker fixtures are set up for each process that runs test files."),(0,o.kt)("h2",{id:"test-fixtures"},"Test fixtures"),(0,o.kt)("p",null,"Test fixtures are set up for each test. Consider the following test file:"),(0,o.kt)("p",null,"It uses fixtures ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld")," that are set up by the framework for each test run."),(0,o.kt)("p",null,"Here is how test fixtures are declared and defined. Fixtures can use other fixtures - note how ",(0,o.kt)("inlineCode",{parentName:"p"},"helloWorld")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"hello"),"."),(0,o.kt)("p",null,"With fixtures, test organization becomes flexible - you can put tests that make sense next to each other based on what they test, not based on the environment they need."),(0,o.kt)("h2",{id:"worker-fixtures"},"Worker fixtures"),(0,o.kt)("p",null,"Playwright Test uses worker processes to run test files. You can specify the maximum number of workers using ",(0,o.kt)("inlineCode",{parentName:"p"},"--workers")," command line option. Similarly to how test fixtures are set up for individual test runs, worker fixtures are set up for each worker process. That's where you can set up services, run servers, etc. Playwright Test will reuse the worker process for as many test files as it can, provided their worker fixtures match and hence environments are identical."),(0,o.kt)("p",null,"Here is how the test looks:"),(0,o.kt)("p",null,"And here is how fixtures are declared and defined:"),(0,o.kt)("h2",{id:"overriding-fixtures"},"Overriding fixtures"),(0,o.kt)("p",null,"In addition to creating your own fixtures, you can also override existing fixtures to fit your needs. Consider the following example which overrides the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," fixture by navigating to a specified URL:"),(0,o.kt)("p",null,"Notice that in this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," fixture is able to depend on other built in fixtures such as ",(0,o.kt)("inlineCode",{parentName:"p"},"baseURL"),". This allows us to override the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseURL")," used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," fixture in our tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"test.use"),"."),(0,o.kt)("p",null,"Fixtures can also be overridden where the base fixture is completely replaced with something different. For example, we could override the ",(0,o.kt)("inlineCode",{parentName:"p"},"storageState")," fixture to provide our own data."))}d.isMDXComponent=!0}}]);