(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{545:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(866)),l={id:"selectors",title:"Selector engines"},r={unversionedId:"selectors",id:"version-1.3.0/selectors",isDocsHomePage:!1,title:"Selector engines",description:"Playwright supports multiple selector engines used to query elements in the web page.",source:"@site/versioned_docs/version-1.3.0/selectors.md",slug:"/selectors",permalink:"/docs/1.3.0/selectors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.3.0/selectors.md",version:"1.3.0",sidebar:"version-1.3.0/docs",previous:{title:"Debugging tools",permalink:"/docs/1.3.0/debug"},next:{title:"Input",permalink:"/docs/1.3.0/input"}},c=[{value:"Selector syntax",id:"selector-syntax",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Built-in selector engines",id:"built-in-selector-engines",children:[{value:"css and css:light",id:"css-and-csslight",children:[]},{value:"xpath",id:"xpath",children:[]},{value:"text and text:light",id:"text-and-textlight",children:[]},{value:"id, data-testid, data-test-id, data-test and their :light counterparts",id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright supports multiple selector engines used to query elements in the web page."),Object(o.b)("p",null,"Selector can be used to obtain ",Object(o.b)("inlineCode",{parentName:"p"},"ElementHandle")," (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api#pageselector"}),"page.$()")," for example) or shortcut element operations to avoid intermediate handle (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-page#pageclickselector-options"}),"page.click()")," for example)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#selector-syntax"}),"Selector syntax")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#examples"}),"Examples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#built-in-selector-engines"}),"Built-in selector engines"))),Object(o.b)("h2",{id:"selector-syntax"},"Selector syntax"),Object(o.b)("p",null,"Selector is a string that consists of one or more clauses separated by ",Object(o.b)("inlineCode",{parentName:"p"},">>")," token, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"clause1 >> clause2 >> clause3"),".  When multiple clauses are present, next one is queried relative to the previous one's result."),Object(o.b)("p",null,"Each clause contains a selector engine name and selector body, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"engine=body"),". Here ",Object(o.b)("inlineCode",{parentName:"p"},"engine")," is one of the supported engines (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"css")," or a custom one). Selector ",Object(o.b)("inlineCode",{parentName:"p"},"body")," follows the format of the particular engine, e.g. for ",Object(o.b)("inlineCode",{parentName:"p"},"css")," engine it should be a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/CSS/CSS_Selectors"}),"css selector"),". Body format is assumed to ignore leading and trailing white spaces, so that extra whitespace can be added for readability. If selector engine needs to include ",Object(o.b)("inlineCode",{parentName:"p"},">>")," in the body, it should be escaped inside a string to not be confused with clause separator, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},'text="some >> text"'),"."),Object(o.b)("p",null,"For example,"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"css=article >> css=.bar > .baz >> css=span[attr=value]\n")),Object(o.b)("p",null,"is equivalent to"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"document\n  .querySelector('article')\n  .querySelector('.bar > .baz')\n  .querySelector('span[attr=value]')\n")),Object(o.b)("p",null,"Selector engine name can be prefixed with ",Object(o.b)("inlineCode",{parentName:"p"},"*")," to capture element that matches the particular clause instead of the last one. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"css=article >> text=Hello")," captures the element with the text ",Object(o.b)("inlineCode",{parentName:"p"},"Hello"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"*css=article >> text=Hello")," (note the ",Object(o.b)("inlineCode",{parentName:"p"},"*"),") captures the ",Object(o.b)("inlineCode",{parentName:"p"},"article")," element that contains some element with the text ",Object(o.b)("inlineCode",{parentName:"p"},"Hello"),"."),Object(o.b)("p",null,"For convenience, selectors in the wrong format are heuristically converted to the right format:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Selector starting with ",Object(o.b)("inlineCode",{parentName:"li"},"//")," or ",Object(o.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"xpath=selector"),". Example: ",Object(o.b)("inlineCode",{parentName:"li"},"page.click('//html')")," is converted to ",Object(o.b)("inlineCode",{parentName:"li"},"page.click('xpath=//html')"),"."),Object(o.b)("li",{parentName:"ul"},"Selector starting and ending with a quote (either ",Object(o.b)("inlineCode",{parentName:"li"},'"')," or ",Object(o.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"text=selector"),". Example: ",Object(o.b)("inlineCode",{parentName:"li"},"page.click('\"foo\"')")," is converted to ",Object(o.b)("inlineCode",{parentName:"li"},"page.click('text=\"foo\"')"),"."),Object(o.b)("li",{parentName:"ul"},"Otherwise, selector is assumed to be ",Object(o.b)("inlineCode",{parentName:"li"},"css=selector"),". Example: ",Object(o.b)("inlineCode",{parentName:"li"},"page.click('div')")," is converted to ",Object(o.b)("inlineCode",{parentName:"li"},"page.click('css=div')"),".")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")),Object(o.b)("h2",{id:"built-in-selector-engines"},"Built-in selector engines"),Object(o.b)("h3",{id:"css-and-csslight"},"css and css:light"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"css")," is a default engine - any malformed selector not starting with ",Object(o.b)("inlineCode",{parentName:"p"},"//")," nor starting and ending with a quote is assumed to be a css selector. For example, Playwright converts ",Object(o.b)("inlineCode",{parentName:"p"},"page.$('span > button')")," to ",Object(o.b)("inlineCode",{parentName:"p"},"page.$('css=span > button')"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"css:light")," engine is equivalent to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/querySelector"}),Object(o.b)("inlineCode",{parentName:"a"},"Document.querySelector"))," and behaves according to the CSS spec. However, it does not pierce shadow roots, which may be inconvenient when working with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"Shadow DOM and Web Components"),". For that reason, ",Object(o.b)("inlineCode",{parentName:"p"},"css")," engine pierces shadow roots. More specifically, every ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"}),"Descendant combinator")," pierces an arbitrary number of open shadow roots, including the implicit descendant combinator at the start of the selector."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"css")," engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(o.b)("h4",{id:"examples-1"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<article>\n  <div>In the light dom</div>\n  <div slot='myslot'>In the light dom, but goes into the shadow slot</div>\n  <open mode shadow root>\n    <div class='in-the-shadow'>\n      <span class='content'>\n        In the shadow dom\n        <open mode shadow root>\n          <li id='target'>Deep in the shadow</li>\n        </open mode shadow root>\n      </span>\n    </div>\n    <slot name='myslot'></slot>\n  </open mode shadow root>\n</article>\n")),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"<open mode shadow root>")," is not an html element, but rather a shadow root created with ",Object(o.b)("inlineCode",{parentName:"p"},"element.attachShadow({mode: 'open'})"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Both ",Object(o.b)("inlineCode",{parentName:"li"},'"css=article div"')," and ",Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article div"')," match the first ",Object(o.b)("inlineCode",{parentName:"li"},"<div>In the light dom</div>"),"."),Object(o.b)("li",{parentName:"ul"},"Both ",Object(o.b)("inlineCode",{parentName:"li"},'"css=article > div"')," and ",Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article > div"')," match two ",Object(o.b)("inlineCode",{parentName:"li"},"div")," elements that are direct children of the ",Object(o.b)("inlineCode",{parentName:"li"},"article"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article .in-the-shadow"')," matches the ",Object(o.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>"),", piercing the shadow root, while ",Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article .in-the-shadow"')," does not match anything."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article div > span"')," does not match anything, because both light-dom ",Object(o.b)("inlineCode",{parentName:"li"},"div")," elements do not contain a ",Object(o.b)("inlineCode",{parentName:"li"},"span"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article div > span"')," matches the ",Object(o.b)("inlineCode",{parentName:"li"},"<span class='content'>"),", piercing the shadow root."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article > .in-the-shadow"')," does not match anything, because ",Object(o.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>")," is not a direct child of ",Object(o.b)("inlineCode",{parentName:"li"},"article")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css:light=article > .in-the-shadow"')," does not match anything."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"css=article li#target"')," matches the ",Object(o.b)("inlineCode",{parentName:"li"},"<li id='target'>Deep in the shadow</li>"),", piercing two shadow roots.")),Object(o.b)("h3",{id:"xpath"},"xpath"),Object(o.b)("p",null,"XPath engine is equivalent to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/evaluate"}),Object(o.b)("inlineCode",{parentName:"a"},"Document.evaluate")),". Example: ",Object(o.b)("inlineCode",{parentName:"p"},"xpath=//html/body"),"."),Object(o.b)("p",null,"Malformed selector starting with ",Object(o.b)("inlineCode",{parentName:"p"},"//")," or ",Object(o.b)("inlineCode",{parentName:"p"},"..")," is assumed to be an xpath selector. For example, Playwright converts ",Object(o.b)("inlineCode",{parentName:"p"},"page.$('//html/body')")," to ",Object(o.b)("inlineCode",{parentName:"p"},"page.$('xpath=//html/body')"),"."),Object(o.b)("p",null,"Note that ",Object(o.b)("inlineCode",{parentName:"p"},"xpath")," does not pierce shadow roots."),Object(o.b)("h3",{id:"text-and-textlight"},"text and text:light"),Object(o.b)("p",null,"Text engine finds an element that contains a text node with the passed text. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"page.click('text=Login')")," clicks on a login button, and ",Object(o.b)("inlineCode",{parentName:"p"},'page.waitForSelector(\'"lazy loaded text")')," waits for the ",Object(o.b)("inlineCode",{parentName:"p"},'"lazy loaded text"')," to appear in the page."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"By default, the match is case-insensitive, ignores leading/trailing whitespace and searches for a substring. This means ",Object(o.b)("inlineCode",{parentName:"li"},"text= Login")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"<button>Button loGIN (click me)</button>"),"."),Object(o.b)("li",{parentName:"ul"},"Text body can be escaped with single or double quotes for precise matching, insisting on exact match, including specified whitespace and case. This means ",Object(o.b)("inlineCode",{parentName:"li"},'text="Login "')," will only match ",Object(o.b)("inlineCode",{parentName:"li"},"<button>Login </button>"),' with exactly one space after "Login". Quoted text follows the usual escaping rules, e.g. use ',Object(o.b)("inlineCode",{parentName:"li"},'\\"')," to escape double quote in a double-quoted string: ",Object(o.b)("inlineCode",{parentName:"li"},'text="foo\\"bar"'),"."),Object(o.b)("li",{parentName:"ul"},"Text body can also be a JavaScript-like regex wrapped in ",Object(o.b)("inlineCode",{parentName:"li"},"/")," symbols. This means ",Object(o.b)("inlineCode",{parentName:"li"},"text=/^\\\\s*Login$/i")," will match ",Object(o.b)("inlineCode",{parentName:"li"},"<button> loGIN</button>"),' with any number of spaces before "Login" and no spaces after.'),Object(o.b)("li",{parentName:"ul"},"Input elements of the type ",Object(o.b)("inlineCode",{parentName:"li"},"button")," and ",Object(o.b)("inlineCode",{parentName:"li"},"submit")," are rendered with their value as text, and text engine finds them. For example, ",Object(o.b)("inlineCode",{parentName:"li"},"text=Login")," matches ",Object(o.b)("inlineCode",{parentName:"li"},'<input type=button value="Login">'),".")),Object(o.b)("p",null,"Malformed selector starting and ending with a quote (either ",Object(o.b)("inlineCode",{parentName:"p"},'"')," or ",Object(o.b)("inlineCode",{parentName:"p"},"'"),") is assumed to be a text selector. For example, Playwright converts ",Object(o.b)("inlineCode",{parentName:"p"},"page.click('\"Login\"')")," to ",Object(o.b)("inlineCode",{parentName:"p"},"page.click('text=\"Login\"')"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"text")," engine open pierces shadow roots similarly to ",Object(o.b)("inlineCode",{parentName:"p"},"css"),", while ",Object(o.b)("inlineCode",{parentName:"p"},"text:light")," does not. Text engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(o.b)("h3",{id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts"},"id, data-testid, data-test-id, data-test and their :light counterparts"),Object(o.b)("p",null,"Attribute engines are selecting based on the corresponding attribute value. For example: ",Object(o.b)("inlineCode",{parentName:"p"},"data-test-id=foo")," is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},'css=[data-test-id="foo"]'),", and ",Object(o.b)("inlineCode",{parentName:"p"},"id:light=foo")," is equivalent to ",Object(o.b)("inlineCode",{parentName:"p"},'css:light=[id="foo"]'),"."))}b.isMDXComponent=!0},866:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.a.createElement(h,r(r({ref:t},s),{},{components:n})):i.a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);