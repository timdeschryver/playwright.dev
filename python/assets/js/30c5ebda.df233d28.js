"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3443],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),v=a,m=d["".concat(i,".").concat(v)]||d[v]||p[v]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&i(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&i(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),a=r(4939),o=r(9670),l=r(6010),s="tabItem_LplD",i=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))v.call(t,r)&&m(e,r,t[r]);return e};function y(e){var t,r,a;const{lazy:i,block:p,defaultValue:d,values:v,groupId:m,className:y}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=v?v:b.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),w=(0,o.lx)(h,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:null!=(a=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=b[0])?void 0:r.props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.UB)(),[O,N]=(0,n.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,o.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&h.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,r=T.indexOf(t),n=h[r].value;n!==O&&(j(t),N(n),null!=m&&x(m,n))},_=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(a=f({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:_,onFocus:P,onClick:P},r),o={className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":O===e})},c(a,u(o))),null!=t?t:e);var a,o}))),i?(0,n.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,a.Z)();return n.createElement(y,f({key:String(t)},e))}},2892:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return h}});var n=r(3905),a=r(3824),o=r(3811),l=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&d(e,r,t[r]);return e};const m={id:"videos",title:"Videos"},f=void 0,y={unversionedId:"videos",id:"videos",title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await browser_context.close().",source:"@site/docs/videos.mdx",sourceDirName:".",slug:"/videos",permalink:"/python/docs/next/videos",tags:[],version:"current",frontMatter:{id:"videos",title:"Videos"},sidebar:"docs",previous:{title:"Selectors",permalink:"/python/docs/next/selectors"},next:{title:"Docker",permalink:"/python/docs/next/docker"}},b={},h=[{value:"API reference",id:"api-reference",level:3}],w={toc:h};function g(e){var t,r=e,{components:l}=r,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=v(v({},w),d),s(t,i({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can record videos for all pages in a ",(0,n.kt)("a",v({parentName:"p"},{href:"/python/docs/next/browser-contexts"}),"browser context"),". Videos are saved upon context closure, so make sure to await ",(0,n.kt)("a",v({parentName:"p"},{href:"/python/docs/next/api/class-browsercontext#browser-context-close"}),"browser_context.close()"),"."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(record_video_dir="videos/")\n# Make sure to close, so that videos are saved.\ncontext.close()\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(record_video_dir="videos/")\n# Make sure to await close, so that videos are saved.\nawait context.close()\n')))),(0,n.kt)("p",null,"You can also specify video size. The video size defaults to the viewport size scaled down to fit 800x800. The video of the viewport is placed in the top-left corner of the output video, scaled down to fit if necessary. You may need to set the viewport size to match your desired video size."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-py"}),'context = browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 640, "height": 480}\n)\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-py"}),'context = await browser.new_context(\n    record_video_dir="videos/",\n    record_video_size={"width": 640, "height": 480}\n)\n')))),(0,n.kt)("p",null,"Saved video files will appear in the specified folder. They all have generated unique names. For the multi-page scenarios, you can access the video file associated with the page via the ",(0,n.kt)("a",v({parentName:"p"},{href:"/python/docs/next/api/class-page#page-video"}),"page.video"),"."),(0,n.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-py"}),"path = page.video.path()\n"))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-py"}),"path = await page.video.path()\n")))),(0,n.kt)("div",v({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",v({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",v({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",v({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",v({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",v({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Note that the video is only available after the page or browser context is closed."))),(0,n.kt)("h3",v({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",v({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",v({parentName:"li"},{href:"/python/docs/next/api/class-browser#browser-new-context"}),"browser.new_context(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",v({parentName:"li"},{href:"/python/docs/next/api/class-browser#browser-new-page"}),"browser.new_page(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",v({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser-context-close"}),"browser_context.close()"))))}g.isMDXComponent=!0}}]);