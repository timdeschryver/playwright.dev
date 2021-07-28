"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2873],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),a=n(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,d=e.values,p=e.groupId,m=e.className,h=i(),f=h.tabGroupChoices,g=h.setTabGroupChoices,k=(0,r.useState)(a),b=k[0],v=k[1],y=r.Children.toArray(e.children),w=[];if(null!=p){var N=f[p];null!=N&&N!==b&&d.some((function(e){return e.value===N}))&&v(N)}var C=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;v(r),null!=p&&(g(p,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},37967:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=(n(55064),n(58215),{id:"docker",title:"Docker"}),l=void 0,s={unversionedId:"docker",id:"docker",isDocsHomePage:!1,title:"Docker",description:"[Dockerfile.focal] can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves.",source:"@site/docs/docker.mdx",sourceDirName:".",slug:"/docker",permalink:"/python/docs/next/docker",version:"current",frontMatter:{id:"docker",title:"Docker"},sidebar:"docs",previous:{title:"Videos",permalink:"/python/docs/next/videos"},next:{title:"Continuous Integration",permalink:"/python/docs/next/ci"}},c=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Image tags",id:"image-tags",children:[{value:"Base images",id:"base-images",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.focal",title:"Dockerfile.focal"},"Dockerfile.focal")," can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#image-tags"},"Image tags"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"This image is published on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/microsoft-playwright",title:"Docker Hub"},"Docker Hub"),"."),(0,i.kt)("h3",{id:"pull-the-image"},"Pull the image"),(0,i.kt)("p",null,"or pinned to a specific Playwright version (recommended). Replace 1.10.0 with your Playwright version:"),(0,i.kt)("h3",{id:"run-the-image"},"Run the image"),(0,i.kt)("p",null,"By default, the Docker image will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),(0,i.kt)("h4",{id:"end-to-end-tests"},"End-to-end tests"),(0,i.kt)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),(0,i.kt)("h4",{id:"crawling-and-scraping"},"Crawling and scraping"),(0,i.kt)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"adduser")," for it."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/utils/docker/seccomp_profile.json"},(0,i.kt)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"},"default Docker seccomp profile")," with extra user namespace cloning permissions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"},"Docker docs"),"). Chrome can run out of memory without this flag."))),(0,i.kt)("h3",{id:"using-on-ci"},"Using on CI"),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/next/ci"},"Continuous Integration guides")," for sample configs."),(0,i.kt)("h2",{id:"image-tags"},"Image tags"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://mcr.microsoft.com/v2/playwright/tags/list",title:"all available image tags"},"all available image tags"),"."),(0,i.kt)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish images with the following tags (",(0,i.kt)("inlineCode",{parentName:"p"},"v1.10.0")," in this case is an example:):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":next")," - tip-of-tree image version based on Ubuntu 20.04 LTS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":next-focal")," - tip-of-tree image version based on Ubuntu 20.04 LTS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":next-bionic")," - tip-of-tree image version based on Ubuntu 18.04 LTS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":bionic")," - last Playwright release docker image based on Ubuntu 18.04 LTS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":focal")," - last Playwright release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":v1.10.0")," - Playwright v1.10.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":v1.10.0-focal")," - Playwright v1.10.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":v1.10.0-bionic")," - Playwright v1.10.0 release docker image based on Ubuntu 18.04 LTS (Bionic Beaver)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":sha-XXXXXXX")," - docker image for every commit that changed docker files or browsers, marked with a ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"},"short sha")," (first 7 digits of the SHA commit).")),(0,i.kt)("p",null,"Status of push to MCR can be ",(0,i.kt)("a",{parentName:"p",href:"https://mcrflow-status-ui.azurewebsites.net/"},"verified here")," (internal link)."),(0,i.kt)("h3",{id:"base-images"},"Base images"),(0,i.kt)("p",null,"We currently publish images based on the following ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/ubuntu"},"Ubuntu")," versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ubuntu 20.04 LTS")," (Focal Fossa), image tags include ",(0,i.kt)("inlineCode",{parentName:"li"},"focal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ubuntu 18.04 LTS")," (Bionic Beaver), image tags include ",(0,i.kt)("inlineCode",{parentName:"li"},"bionic"))),(0,i.kt)("h4",{id:"alpine"},"Alpine"),(0,i.kt)("p",null,"Browser builds for Firefox and WebKit are built for the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GNU_C_Library"},"glibc")," library. Alpine Linux and other distributions that are based on the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Musl"},"musl")," standard library are not supported."))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);