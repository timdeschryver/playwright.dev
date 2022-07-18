"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6585],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return f}});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"docker",title:"Docker"},m=void 0,h={unversionedId:"docker",id:"version-1.21/docker",title:"Docker",description:"[Dockerfile.focal] can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves.",source:"@site/versioned_docs/version-1.21/docker.mdx",sourceDirName:".",slug:"/docker",permalink:"/dotnet/docs/1.21/docker",tags:[],version:"1.21",frontMatter:{id:"docker",title:"Docker"},sidebar:"docs",previous:{title:"Videos",permalink:"/dotnet/docs/1.21/videos"},next:{title:"Continuous Integration",permalink:"/dotnet/docs/1.21/ci"}},g={},f=[{value:"Usage",id:"usage",level:2},{value:"Pull the image",id:"pull-the-image",level:3},{value:"Run the image",id:"run-the-image",level:3},{value:"End-to-end tests",id:"end-to-end-tests",level:4},{value:"Crawling and scraping",id:"crawling-and-scraping",level:4},{value:"Using on CI",id:"using-on-ci",level:3},{value:"Image tags",id:"image-tags",level:2},{value:"Base images",id:"base-images",level:3},{value:"Alpine",id:"alpine",level:4}],k={toc:f};function b(e){var t,n=e,{components:a}=n,u=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},k),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.focal",title:"Dockerfile.focal"}),"Dockerfile.focal")," can be used to run Playwright scripts in Docker environment. These image includes all the dependencies needed to run browsers in a Docker container, and also include the browsers themselves."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#usage"}),"Usage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#image-tags"}),"Image tags"))),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"This image is published on ",(0,r.kt)("a",p({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright",title:"Docker Hub"}),"Docker Hub"),"."),(0,r.kt)("h3",p({},{id:"pull-the-image"}),"Pull the image"),(0,r.kt)("p",null,"Replace 1.20.0 with your Playwright version:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker pull mcr.microsoft.com/playwright/dotnet:v1.21.0-focal\n")),(0,r.kt)("h3",p({},{id:"run-the-image"}),"Run the image"),(0,r.kt)("p",null,"By default, the Docker image will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user to run the browsers. This will disable the Chromium sandbox which is not available with root. If you run trusted code (e.g. End-to-end tests) and want to avoid the hassle of managing separate user then the root user may be fine. For web scraping or crawling, we recommend to create a separate user inside the Docker container and use the seccomp profile."),(0,r.kt)("h4",p({},{id:"end-to-end-tests"}),"End-to-end tests"),(0,r.kt)("p",null,"On trusted websites, you can avoid creating a separate user and use root for it since you trust the code which will run on the browsers."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm --ipc=host mcr.microsoft.com/playwright/dotnet:v1.21.0-focal /bin/bash\n")),(0,r.kt)("h4",p({},{id:"crawling-and-scraping"}),"Crawling and scraping"),(0,r.kt)("p",null,"On untrusted websites, it's recommended to use a separate user for launching the browsers in combination with the seccomp profile. Inside the container or if you are using the Docker image as a base image you have to use ",(0,r.kt)("inlineCode",{parentName:"p"},"adduser")," for it."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"docker run -it --rm --ipc=host --user pwuser --security-opt seccomp=seccomp_profile.json mcr.microsoft.com/playwright/dotnet:v1.21.0-focal /bin/bash\n")),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/main/utils/docker/seccomp_profile.json"}),(0,r.kt)("inlineCode",{parentName:"a"},"seccomp_profile.json"))," is needed to run Chromium with sandbox. This is a ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/docker/engine/blob/d0d99b04cf6e00ed3fc27e81fc3d94e7eda70af3/profiles/seccomp/default.json"}),"default Docker seccomp profile")," with extra user namespace cloning permissions:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "comment": "Allow create user namespaces",\n    "names": [\n      "clone",\n      "setns",\n      "unshare"\n    ],\n    "action": "SCMP_ACT_ALLOW",\n    "args": [],\n    "includes": {},\n    "excludes": {}\n  }\n]\n')),(0,r.kt)("div",p({},{className:"admonition admonition-note alert alert--secondary"}),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-heading"}),(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",p({parentName:"h5"},{className:"admonition-icon"}),(0,r.kt)("svg",p({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,r.kt)("path",p({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,r.kt)("div",p({parentName:"div"},{className:"admonition-content"}),(0,r.kt)("p",{parentName:"div"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is recommended when using Chrome (",(0,r.kt)("a",p({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag."))),(0,r.kt)("h3",p({},{id:"using-on-ci"}),"Using on CI"),(0,r.kt)("p",null,"See our ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.21/ci"}),"Continuous Integration guides")," for sample configs."),(0,r.kt)("h2",p({},{id:"image-tags"}),"Image tags"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",p({parentName:"p"},{href:"https://mcr.microsoft.com/v2/playwright/tags/list",title:"all available image tags"}),"all available image tags"),"."),(0,r.kt)("p",null,"Docker images are published automatically by GitHub Actions. We currently publish images with the following tags (",(0,r.kt)("inlineCode",{parentName:"p"},"v1.20.0")," in this case is an example:):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":next")," - tip-of-tree image version based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":next-focal")," - tip-of-tree image version based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":v1.20.0")," - Playwright v1.20.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":v1.20.0-focal")," - Playwright v1.20.0 release docker image based on Ubuntu 20.04 LTS (Focal Fossa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":sha-XXXXXXX")," - docker image for every commit that changed docker files or browsers, marked with a ",(0,r.kt)("a",p({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#Short-SHA-1"}),"short sha")," (first 7 digits of the SHA commit).")),(0,r.kt)("p",null,"Status of push to MCR can be ",(0,r.kt)("a",p({parentName:"p"},{href:"https://mcrflow-status-ui.azurewebsites.net/"}),"verified here")," (internal link)."),(0,r.kt)("h3",p({},{id:"base-images"}),"Base images"),(0,r.kt)("p",null,"We currently publish images based on the following ",(0,r.kt)("a",p({parentName:"p"},{href:"https://hub.docker.com/_/ubuntu"}),"Ubuntu")," versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 20.04 LTS")," (Focal Fossa), image tags include ",(0,r.kt)("inlineCode",{parentName:"li"},"focal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 18.04 LTS")," (Bionic Beaver), image tags include ",(0,r.kt)("inlineCode",{parentName:"li"},"bionic")," (not published for Java and .NET)")),(0,r.kt)("h4",p({},{id:"alpine"}),"Alpine"),(0,r.kt)("p",null,"Browser builds for Firefox and WebKit are built for the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}b.isMDXComponent=!0}}]);