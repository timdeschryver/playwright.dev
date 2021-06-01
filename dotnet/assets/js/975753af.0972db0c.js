(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9244],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),f=o,m=h["".concat(c,".").concat(f)]||h[f]||l[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),o=n(9443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2297:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=(n(1395),n(8215),{id:"test-snapshots",title:"Visual comparisons"}),i={unversionedId:"test-snapshots",id:"test-snapshots",isDocsHomePage:!1,title:"Visual comparisons",description:"Playwright Test includes the ability to produce and visually compare screenshots using expect(value).toMatchSnapshot(). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.",source:"@site/docs/test-snapshots.mdx",sourceDirName:".",slug:"/test-snapshots",permalink:"/dotnet/docs/test-snapshots",version:"current",frontMatter:{id:"test-snapshots",title:"Visual comparisons"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright Test includes the ability to produce and visually compare screenshots using ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot()"),". On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference."),(0,a.kt)("p",null,"Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx playwright test --update-snapshots\n")),(0,a.kt)("p",null,"Playwright Test uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mapbox/pixelmatch"},"pixelmatch")," library. You can pass comparison ",(0,a.kt)("inlineCode",{parentName:"p"},"threshold")," as an option."),(0,a.kt)("p",null,"Apart from screenshots, ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot()")," can also be used to compare text, png and jpeg images, or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm."),(0,a.kt)("p",null,"Here we compare text content against the reference."),(0,a.kt)("p",null,"Snapshots are stored next to the test file, in a separate directory. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"my.spec.js")," file will produce and store snapshots in the ",(0,a.kt)("inlineCode",{parentName:"p"},"my.spec.js-snapshots")," directory. You should commit this directory to your version control (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"), and review any changes to it."))}u.isMDXComponent=!0}}]);