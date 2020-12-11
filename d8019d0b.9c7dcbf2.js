(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{720:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),l=(a(0),a(866)),r={id:"selectors",title:"Element selectors"},c={unversionedId:"selectors",id:"selectors",isDocsHomePage:!1,title:"Element selectors",description:"Selectors query elements on the web page for interactions, like page.click, and to obtain ElementHandle through page.$. Built-in selectors auto-pierce shadow DOM.",source:"@site/docs/selectors.md",slug:"/selectors",permalink:"/docs/next/selectors",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/selectors.md",version:"current",sidebar:"docs",previous:{title:"Supported languages",permalink:"/docs/next/languages"},next:{title:"Input",permalink:"/docs/next/input"}},o=[{value:"Syntax",id:"syntax",children:[{value:"Short-forms",id:"short-forms",children:[]},{value:"Chaining selectors",id:"chaining-selectors",children:[]},{value:"Intermediate matches",id:"intermediate-matches",children:[]}]},{value:"Best practices",id:"best-practices",children:[{value:"Prioritize user-facing attributes",id:"prioritize-user-facing-attributes",children:[]},{value:"Define explicit contract",id:"define-explicit-contract",children:[]},{value:"Avoid selectors tied to implementation",id:"avoid-selectors-tied-to-implementation",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Selector engines",id:"selector-engines",children:[{value:"css and css:light",id:"css-and-csslight",children:[]},{value:"xpath",id:"xpath",children:[]},{value:"text and text:light",id:"text-and-textlight",children:[]},{value:"id, data-testid, data-test-id, data-test and their :light counterparts",id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts",children:[]}]}],s={rightToc:o};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Selectors query elements on the web page for interactions, like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageclickselector-options"}),"page.click"),", and to obtain ",Object(l.b)("inlineCode",{parentName:"p"},"ElementHandle")," through ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api#pageselector"}),"page.$"),". Built-in selectors auto-pierce ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"shadow DOM"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#syntax"}),"Syntax")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#best-practices"}),"Best practices")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#examples"}),"Examples")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selector-engines"}),"Selector engines"))),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("p",null,"Selectors are defined by selector engine name and selector body, ",Object(l.b)("inlineCode",{parentName:"p"},"engine=body"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"engine")," refers to one of the ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selector-engines"}),"supported engines"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Built-in selector engines: ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#css-and-csslight"}),"css"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#text-and-textlight"}),"text"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#xpath"}),"xpath")," and ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"}),"id selectors")),Object(l.b)("li",{parentName:"ul"},"Learn more about ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/extensibility"}),"custom selector engines")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"body")," refers to the query string for the respective engine",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("inlineCode",{parentName:"li"},"text"),", body is the text content"),Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("inlineCode",{parentName:"li"},"css"),", body is a ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en/docs/Web/CSS/CSS_Selectors"}),"css selector"))))),Object(l.b)("p",null,"Body format is assumed to ignore leading and trailing white spaces, so that extra whitespace can be added for readability."),Object(l.b)("h3",{id:"short-forms"},"Short-forms"),Object(l.b)("p",null,"For convenience, common selectors have short-forms:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Selector starting with ",Object(l.b)("inlineCode",{parentName:"li"},"//")," or ",Object(l.b)("inlineCode",{parentName:"li"},"..")," is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"xpath=selector"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"page.click('//html')")," is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"page.click('xpath=//html')"),"."))),Object(l.b)("li",{parentName:"ul"},"Selector starting and ending with a quote (either ",Object(l.b)("inlineCode",{parentName:"li"},'"')," or ",Object(l.b)("inlineCode",{parentName:"li"},"'"),") is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"text=selector"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"page.click('\"foo\"')")," is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"page.click('text=\"foo\"')"),"."))),Object(l.b)("li",{parentName:"ul"},"Otherwise, selector is assumed to be ",Object(l.b)("inlineCode",{parentName:"li"},"css=selector"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Example: ",Object(l.b)("inlineCode",{parentName:"li"},"page.click('div')")," is converted to ",Object(l.b)("inlineCode",{parentName:"li"},"page.click('css=div')"),".")))),Object(l.b)("h3",{id:"chaining-selectors"},"Chaining selectors"),Object(l.b)("p",null,"Selectors defined as ",Object(l.b)("inlineCode",{parentName:"p"},"engine=body")," or in short-form can be combined with the ",Object(l.b)("inlineCode",{parentName:"p"},">>")," token, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"selector1 >> selector2 >> selectors3"),". When selectors are chained, next one is queried relative to the previous one's result."),Object(l.b)("p",null,"For example,"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"css=article >> css=.bar > .baz >> css=span[attr=value]\n")),Object(l.b)("p",null,"is equivalent to"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"document\n  .querySelector('article')\n  .querySelector('.bar > .baz')\n  .querySelector('span[attr=value]')\n")),Object(l.b)("p",null,"If a selector needs to include ",Object(l.b)("inlineCode",{parentName:"p"},">>")," in the body, it should be escaped inside a string to not be confused with chaining separator, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},'text="some >> text"'),"."),Object(l.b)("h3",{id:"intermediate-matches"},"Intermediate matches"),Object(l.b)("p",null,"By default, chained selectors resolve to an element queried by the last selector. A selector can be prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"*")," to capture elements that are queried by an intermediate selector."),Object(l.b)("p",null,"For example, ",Object(l.b)("inlineCode",{parentName:"p"},"css=article >> text=Hello")," captures the element with the text ",Object(l.b)("inlineCode",{parentName:"p"},"Hello"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"*css=article >> text=Hello")," (note the ",Object(l.b)("inlineCode",{parentName:"p"},"*"),") captures the ",Object(l.b)("inlineCode",{parentName:"p"},"article")," element that contains some element with the text ",Object(l.b)("inlineCode",{parentName:"p"},"Hello"),"."),Object(l.b)("h2",{id:"best-practices"},"Best practices"),Object(l.b)("p",null,"The choice of selectors determines the resiliency of automation scripts. To reduce the maintenance burden, we recommend prioritizing user-facing attributes and explicit contracts."),Object(l.b)("h3",{id:"prioritize-user-facing-attributes"},"Prioritize user-facing attributes"),Object(l.b)("p",null,"Attributes like text content, input placeholder, accessibility roles and labels are user-facing attributes that change rarely. These attributes are not impacted by DOM structure changes."),Object(l.b)("p",null,"The following examples use the built-in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#text-and-textlight"}),"text")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," selector engines."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// queries "Login" text selector\nawait page.click(\'text="Login"\');\nawait page.click(\'"Login"\'); // short-form\n\n// queries "Search GitHub" placeholder attribute\nawait page.fill(\'css=[placeholder="Search GitHub"]\');\nawait page.fill(\'[placeholder="Search GitHub"]\'); // short-form\n\n// queries "Close" accessibility label\nawait page.click(\'css=[aria-label="Close"]\');\nawait page.click(\'[aria-label="Close"]\'); // short-form\n\n// combine role and text queries\nawait page.click(\'css=nav >> text=Login\');\n')),Object(l.b)("h3",{id:"define-explicit-contract"},"Define explicit contract"),Object(l.b)("p",null,"When user-facing attributes change frequently, it is recommended to use explicit test ids, like ",Object(l.b)("inlineCode",{parentName:"p"},"data-test-id"),". These ",Object(l.b)("inlineCode",{parentName:"p"},"data-*")," attributes are supported by the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#id-data-testid-data-test-id-data-test-and-their-light-counterparts"}),"id selectors"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<button data-test-id="directions">Itin\xe9raire</button>\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// queries data-test-id attribute with css\nawait page.click('css=[data-test-id=directions]');\nawait page.click('[data-test-id=directions]'); // short-form\n\n// queries data-test-id with id\nawait page.click('data-test-id=directions');\n")),Object(l.b)("h3",{id:"avoid-selectors-tied-to-implementation"},"Avoid selectors tied to implementation"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#xpath"}),"xpath")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#css-and-csslight"}),"css")," can be tied to the DOM structure or implementation. These selectors can break when the DOM structure changes."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// avoid long css or xpath chains\nawait page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');\nawait page.click('//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input');\n")),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// queries 'div' css selector\nconst handle = await page.$('css=div');\n\n// queries '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div');\n\n// queries '\"foo\"' text selector\nconst handle = await page.$('text=\"foo\"');\n\n// queries 'span' css selector inside the result of '//html/body/div' xpath selector\nconst handle = await page.$('xpath=//html/body/div >> css=span');\n\n// converted to 'css=div'\nconst handle = await page.$('div');\n\n// converted to 'xpath=//html/body/div'\nconst handle = await page.$('//html/body/div');\n\n// converted to 'text=\"foo\"'\nconst handle = await page.$('\"foo\"');\n\n// queries 'span' css selector inside the div handle\nconst handle = await divHandle.$('css=span');\n")),Object(l.b)("h2",{id:"selector-engines"},"Selector engines"),Object(l.b)("h3",{id:"css-and-csslight"},"css and css:light"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css")," is a default engine - any malformed selector not starting with ",Object(l.b)("inlineCode",{parentName:"p"},"//")," nor starting and ending with a quote is assumed to be a css selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"page.$('span > button')")," to ",Object(l.b)("inlineCode",{parentName:"p"},"page.$('css=span > button')"),"."),Object(l.b)("p",null,"Playwright augments standard CSS selectors in two ways, see below for more details:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"css")," engine pierces open shadow DOM by default."),Object(l.b)("li",{parentName:"ul"},"Playwright adds a few custom pseudo-classes like ",Object(l.b)("inlineCode",{parentName:"li"},":visible"),".")),Object(l.b)("h4",{id:"shadow-piercing"},"Shadow piercing"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css:light")," engine is equivalent to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/querySelector"}),Object(l.b)("inlineCode",{parentName:"a"},"Document.querySelector"))," and behaves according to the CSS spec. However, it does not pierce shadow roots, which may be inconvenient when working with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"Shadow DOM and Web Components"),". For that reason, ",Object(l.b)("inlineCode",{parentName:"p"},"css")," engine pierces shadow roots. More specifically, any ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"}),"Descendant combinator")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator"}),"Child combinator")," pierces an arbitrary number of open shadow roots, including the implicit descendant combinator at the start of the selector."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css")," engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<article>\n  <div>In the light dom</div>\n  <div slot='myslot'>In the light dom, but goes into the shadow slot</div>\n  <open mode shadow root>\n    <div class='in-the-shadow'>\n      <span class='content'>\n        In the shadow dom\n        <open mode shadow root>\n          <li id='target'>Deep in the shadow</li>\n        </open mode shadow root>\n      </span>\n    </div>\n    <slot name='myslot'></slot>\n  </open mode shadow root>\n</article>\n")),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"<open mode shadow root>")," is not an html element, but rather a shadow root created with ",Object(l.b)("inlineCode",{parentName:"p"},"element.attachShadow({mode: 'open'})"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Both ",Object(l.b)("inlineCode",{parentName:"li"},'"css=article div"')," and ",Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article div"')," match the first ",Object(l.b)("inlineCode",{parentName:"li"},"<div>In the light dom</div>"),"."),Object(l.b)("li",{parentName:"ul"},"Both ",Object(l.b)("inlineCode",{parentName:"li"},'"css=article > div"')," and ",Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article > div"')," match two ",Object(l.b)("inlineCode",{parentName:"li"},"div")," elements that are direct children of the ",Object(l.b)("inlineCode",{parentName:"li"},"article"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article .in-the-shadow"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>"),", piercing the shadow root, while ",Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article .in-the-shadow"')," does not match anything."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article div > span"')," does not match anything, because both light-dom ",Object(l.b)("inlineCode",{parentName:"li"},"div")," elements do not contain a ",Object(l.b)("inlineCode",{parentName:"li"},"span"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article div > span"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<span class='content'>"),", piercing the shadow root."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article > .in-the-shadow"')," does not match anything, because ",Object(l.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>")," is not a direct child of ",Object(l.b)("inlineCode",{parentName:"li"},"article")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css:light=article > .in-the-shadow"')," does not match anything."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"css=article li#target"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<li id='target'>Deep in the shadow</li>"),", piercing two shadow roots.")),Object(l.b)("h4",{id:"css-extension-visible"},"CSS extension: visible"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":visible")," pseudo-class matches elements that are visible as defined in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/actionability#visible"}),"actionability")," guide. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"input")," matches all the inputs on the page, while ",Object(l.b)("inlineCode",{parentName:"p"},"input:visible")," matches only visible inputs. This is useful to distinguish elements that are very similar but differ in visibility."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Clicks the first button.\nawait page.click('button');\n// Clicks the first visible button. If there are some invisible buttons, this click will just ignore them.\nawait page.click('button:visible');\n")),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},":visible")," with caution, because it has two major drawbacks:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When elements change their visibility dynamically, ",Object(l.b)("inlineCode",{parentName:"li"},":visible")," will give upredictable results based on the timing."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":visible")," forces a layout and may lead to querying being slow, especially when used with ",Object(l.b)("inlineCode",{parentName:"li"},"page.waitForSelector(selector[, options])")," method.")),Object(l.b)("h4",{id:"css-extension-text"},"CSS extension: text"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":text")," pseudo-class matches elements that have a text node child with specific text. It is similar to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#text-and-textlight"}),"text engine"),". There are a few variations that support different arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text("substring")'),' - Matches when element\'s text contains "substring" somewhere. Matching is case-insensitive. Matching also normalizes whitespace, for example it turns multiple spaces into one, trusn line breaks into spaces and ignores leading and trailing whitespace.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-is("string")'),' - Matches when element\'s text equals the "string". Matching is case-insensitive and normalizes whitespace.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'button:text("Sign in")')," - Text selector may be combined with regular CSS."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-matches("[+-]?\\\\d+")')," - Matches text against a regular expression. Note that special characters like back-slash ",Object(l.b)("inlineCode",{parentName:"li"},"\\"),", quotes ",Object(l.b)("inlineCode",{parentName:"li"},'"'),", square brackets ",Object(l.b)("inlineCode",{parentName:"li"},"[]")," and more should be escaped. Learn more about ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"}),"regular expressions"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-matches("value", "i")')," - Matches text against a regular expression with specified flags.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Click a button with text "Sign in".\nawait page.click(\'button:text("Sign in")\');\n')),Object(l.b)("h4",{id:"css-extension-light"},"CSS extension: light"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"css")," engine ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#shadow-piercing"}),"pierces shadow")," by default. It is possible to disable this behavior by wrapping a selector in ",Object(l.b)("inlineCode",{parentName:"p"},":light")," pseudo-class: ",Object(l.b)("inlineCode",{parentName:"p"},":light(section > button.class)")," matches in light DOM only."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click(':light(.article > .header)');\n")),Object(l.b)("h3",{id:"xpath"},"xpath"),Object(l.b)("p",null,"XPath engine is equivalent to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/evaluate"}),Object(l.b)("inlineCode",{parentName:"a"},"Document.evaluate")),". Example: ",Object(l.b)("inlineCode",{parentName:"p"},"xpath=//html/body"),"."),Object(l.b)("p",null,"Malformed selector starting with ",Object(l.b)("inlineCode",{parentName:"p"},"//")," or ",Object(l.b)("inlineCode",{parentName:"p"},"..")," is assumed to be an xpath selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"page.$('//html/body')")," to ",Object(l.b)("inlineCode",{parentName:"p"},"page.$('xpath=//html/body')"),"."),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"xpath")," does not pierce shadow roots."),Object(l.b)("h3",{id:"text-and-textlight"},"text and text:light"),Object(l.b)("p",null,"Text engine finds an element that contains a text node with the passed text. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"page.click('text=Login')")," clicks on a login button, and ",Object(l.b)("inlineCode",{parentName:"p"},'page.waitForSelector(\'"lazy loaded text")')," waits for the ",Object(l.b)("inlineCode",{parentName:"p"},'"lazy loaded text"')," to appear in the page."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"By default, the match is case-insensitive, ignores leading/trailing whitespace and searches for a substring. This means ",Object(l.b)("inlineCode",{parentName:"li"},"text= Login")," matches ",Object(l.b)("inlineCode",{parentName:"li"},"<button>Button loGIN (click me)</button>"),"."),Object(l.b)("li",{parentName:"ul"},"Text body can be escaped with single or double quotes for precise matching, insisting on exact match, including specified whitespace and case. This means ",Object(l.b)("inlineCode",{parentName:"li"},'text="Login "')," will only match ",Object(l.b)("inlineCode",{parentName:"li"},"<button>Login </button>"),' with exactly one space after "Login". Quoted text follows the usual escaping rules, e.g. use ',Object(l.b)("inlineCode",{parentName:"li"},'\\"')," to escape double quote in a double-quoted string: ",Object(l.b)("inlineCode",{parentName:"li"},'text="foo\\"bar"'),"."),Object(l.b)("li",{parentName:"ul"},"Text body can also be a JavaScript-like regex wrapped in ",Object(l.b)("inlineCode",{parentName:"li"},"/")," symbols. This means ",Object(l.b)("inlineCode",{parentName:"li"},"text=/^\\\\s*Login$/i")," will match ",Object(l.b)("inlineCode",{parentName:"li"},"<button> loGIN</button>"),' with any number of spaces before "Login" and no spaces after.'),Object(l.b)("li",{parentName:"ul"},"Input elements of the type ",Object(l.b)("inlineCode",{parentName:"li"},"button")," and ",Object(l.b)("inlineCode",{parentName:"li"},"submit")," are rendered with their value as text, and text engine finds them. For example, ",Object(l.b)("inlineCode",{parentName:"li"},"text=Login")," matches ",Object(l.b)("inlineCode",{parentName:"li"},'<input type=button value="Login">'),".")),Object(l.b)("p",null,"Malformed selector starting and ending with a quote (either ",Object(l.b)("inlineCode",{parentName:"p"},'"')," or ",Object(l.b)("inlineCode",{parentName:"p"},"'"),") is assumed to be a text selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"page.click('\"Login\"')")," to ",Object(l.b)("inlineCode",{parentName:"p"},"page.click('text=\"Login\"')"),"."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"text")," engine open pierces shadow roots similarly to ",Object(l.b)("inlineCode",{parentName:"p"},"css"),", while ",Object(l.b)("inlineCode",{parentName:"p"},"text:light")," does not. Text engine first searches for elements in the light dom in the iteration order, and then recursively inside open shadow roots in the iteration order. It does not search inside closed shadow roots or iframes."),Object(l.b)("h3",{id:"id-data-testid-data-test-id-data-test-and-their-light-counterparts"},"id, data-testid, data-test-id, data-test and their :light counterparts"),Object(l.b)("p",null,"Attribute engines are selecting based on the corresponding attribute value. For example: ",Object(l.b)("inlineCode",{parentName:"p"},"data-test-id=foo")," is equivalent to ",Object(l.b)("inlineCode",{parentName:"p"},'css=[data-test-id="foo"]'),", and ",Object(l.b)("inlineCode",{parentName:"p"},"id:light=foo")," is equivalent to ",Object(l.b)("inlineCode",{parentName:"p"},'css:light=[id="foo"]'),"."))}b.isMDXComponent=!0},866:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(a),h=n,m=d["".concat(r,".").concat(h)]||d[h]||p[h]||l;return a?i.a.createElement(m,c(c({ref:t},s),{},{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<l;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);