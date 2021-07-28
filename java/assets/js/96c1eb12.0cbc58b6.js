"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,f=e.groupId,m=e.className,d=o(),h=d.tabGroupChoices,k=d.setTabGroupChoices,g=(0,a.useState)(r),y=g[0],v=g[1],b=a.Children.toArray(e.children),w=[];if(null!=f){var N=h[f];null!=N&&N!==y&&p.some((function(e){return e.value===N}))&&v(N)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;v(a),null!=f&&(k(f,a),setTimeout((function(){var e,n,a,r,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1843:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"test-annotations",title:"Annotations"}),s=void 0,l={unversionedId:"test-annotations",id:"test-annotations",isDocsHomePage:!1,title:"Annotations",description:"- Annotations",source:"@site/docs/test-annotations.mdx",sourceDirName:".",slug:"/test-annotations",permalink:"/java/docs/next/test-annotations",version:"current",frontMatter:{id:"test-annotations",title:"Annotations"}},u=[{value:"Annotations",id:"annotations",children:[]},{value:"Focus a test",id:"focus-a-test",children:[]},{value:"Skip a test",id:"skip-a-test",children:[]},{value:"Group tests",id:"group-tests",children:[]},{value:"Tag tests",id:"tag-tests",children:[]},{value:"Conditionally skip a group of tests",id:"conditionally-skip-a-group-of-tests",children:[]},{value:"Use fixme in <code>beforeEach</code> hook",id:"use-fixme-in-beforeeach-hook",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#annotations"},"Annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#focus-a-test"},"Focus a test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#skip-a-test"},"Skip a test")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#group-tests"},"Group tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tag-tests"},"Tag tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#conditionally-skip-a-group-of-tests"},"Conditionally skip a group of tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-fixme-in-beforeeach-hook"},"Use fixme in ",(0,o.kt)("inlineCode",{parentName:"a"},"beforeEach")," hook"))),(0,o.kt)("h2",{id:"annotations"},"Annotations"),(0,o.kt)("p",null,"Playwright Test supports test annotations to deal with failures, flakiness, skip, focus and tag tests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"skip")," marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fail")," marks the test as failing. Playwright Test will run this test and ensure it does indeed fail. If the test does not fail, Playwright Test will complain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fixme")," marks the test as failing. Playwright Test will not run this test, as opposite to the ",(0,o.kt)("inlineCode",{parentName:"li"},"fail")," annotation. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"fixme")," when running the test is slow or crashy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slow")," marks the test as slow and triples the test timeout.")),(0,o.kt)("p",null,"Annotations can be used on a single test or a group of tests. Annotations can be conditional, in which case they apply when the condition is truthy. Annotations may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations."),(0,o.kt)("h2",{id:"focus-a-test"},"Focus a test"),(0,o.kt)("p",null,"You can focus some tests. When there are focused tests, only these tests run."),(0,o.kt)("h2",{id:"skip-a-test"},"Skip a test"),(0,o.kt)("p",null,"You can skip certain tests based on the condition."),(0,o.kt)("h2",{id:"group-tests"},"Group tests"),(0,o.kt)("p",null,"You can group tests to give them a logical name or to scope before/after hooks to the group."),(0,o.kt)("h2",{id:"tag-tests"},"Tag tests"),(0,o.kt)("p",null,"Sometimes you want to tag your tests as ",(0,o.kt)("inlineCode",{parentName:"p"},"@fast")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@slow")," and only run the tests that have the certain tag. We recommend that you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--grep")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--grep-invert")," command line flags for that:"),(0,o.kt)("p",null,"You will then be able to run only that test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep @fast\n")),(0,o.kt)("p",null,"Or if you want the opposite, you can skip the tests with a certain tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --grep-invert @slow\n")),(0,o.kt)("h2",{id:"conditionally-skip-a-group-of-tests"},"Conditionally skip a group of tests"),(0,o.kt)("p",null,"For example, you can run a group of tests just in Chromium by passing a callback."),(0,o.kt)("h2",{id:"use-fixme-in-beforeeach-hook"},"Use fixme in ",(0,o.kt)("inlineCode",{parentName:"h2"},"beforeEach")," hook"),(0,o.kt)("p",null,"To avoid running ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," hooks, you can put annotations in the hook itself."))}p.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);