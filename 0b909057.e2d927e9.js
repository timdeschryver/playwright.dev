(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{101:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return a})),n.d(r,"rightToc",(function(){return p})),n.d(r,"default",(function(){return s}));var t=n(2),o=n(6),c=(n(0),n(866)),i={id:"README",title:"Running Playwright in Docker"},a={unversionedId:"docker/README",id:"version-0.18.0/docker/README",isDocsHomePage:!1,title:"Running Playwright in Docker",description:"Dockerfile.bionic is a playwright-ready image of playwright.",source:"@site/versioned_docs/version-0.18.0/docker/README.md",slug:"/docker/README",permalink:"/docs/0.18.0/docker/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-0.18.0/docker/README.md",version:"0.18.0"},p=[],u={rightToc:p};function s(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"Dockerfile.bionic"}),"Dockerfile.bionic")," is a playwright-ready image of playwright.\nThis image includes all the dependencies needed to run browsers in a Docker\ncontainer."),Object(c.b)("p",null,"Building image:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"$ sudo docker build -t microsoft/playwright:bionic -f Dockerfile.bionic .\n")),Object(c.b)("p",null,"Running image:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"$ sudo docker container run -it --rm --ipc=host --security-opt seccomp=chrome.json microsoft/playwright:bionic /bin/bash\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"NOTE"),": The seccomp profile is coming from Jessie Frazelle. It's needed\nto run Chrome without sandbox.",Object(c.b)("br",{parentName:"p"}),"\n","Using ",Object(c.b)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chrome. Without it Chrome can run out of memory and crash.",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"See the docker documentation for this option here."))))}s.isMDXComponent=!0},866:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(n),d=t,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||c;return n?o.a.createElement(m,a(a({ref:r},u),{},{components:n})):o.a.createElement(m,a({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);