"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[21478],{78199:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=a(87462),r=a(63366),s=(a(67294),a(3905)),l=(a(26396),a(58215),["components"]),n={id:"class-locatorassertions",title:"LocatorAssertions"},i=void 0,c={unversionedId:"api/class-locatorassertions",id:"api/class-locatorassertions",isDocsHomePage:!1,title:"LocatorAssertions",description:"The LocatorAssertions] class provides assertion methods that can be used to make assertions about the [Locator] state in the tests. A new instance of [LocatorAssertions] is created by calling [playwrightAssertions.expect(locator):",source:"@site/docs/api/class-locatorassertions.mdx",sourceDirName:"api",slug:"/api/class-locatorassertions",permalink:"/docs/next/api/class-locatorassertions",tags:[],version:"current",frontMatter:{id:"class-locatorassertions",title:"LocatorAssertions"},sidebar:"api",previous:{title:"Locator",permalink:"/docs/next/api/class-locator"},next:{title:"Logger",permalink:"/docs/next/api/class-logger"}},p=[{value:"locatorAssertions.not()",id:"locator-assertions-not",children:[],level:2},{value:"locatorAssertions.toBeChecked()",id:"locator-assertions-to-be-checked",children:[],level:2},{value:"locatorAssertions.toBeDisabled()",id:"locator-assertions-to-be-disabled",children:[],level:2},{value:"locatorAssertions.toBeEditable()",id:"locator-assertions-to-be-editable",children:[],level:2},{value:"locatorAssertions.toBeEmpty()",id:"locator-assertions-to-be-empty",children:[],level:2},{value:"locatorAssertions.toBeEnabled()",id:"locator-assertions-to-be-enabled",children:[],level:2},{value:"locatorAssertions.toBeFocused()",id:"locator-assertions-to-be-focused",children:[],level:2},{value:"locatorAssertions.toBeHidden()",id:"locator-assertions-to-be-hidden",children:[],level:2},{value:"locatorAssertions.toBeVisible()",id:"locator-assertions-to-be-visible",children:[],level:2},{value:"locatorAssertions.toContainText(expected, options)",id:"locator-assertions-to-contain-text",children:[],level:2},{value:"locatorAssertions.toHaveAttribute(name, value)",id:"locator-assertions-to-have-attribute",children:[],level:2},{value:"locatorAssertions.toHaveClass(expected)",id:"locator-assertions-to-have-class",children:[],level:2},{value:"locatorAssertions.toHaveCount(count)",id:"locator-assertions-to-have-count",children:[],level:2},{value:"locatorAssertions.toHaveCSS(name, value)",id:"locator-assertions-to-have-css",children:[],level:2},{value:"locatorAssertions.toHaveId(id)",id:"locator-assertions-to-have-id",children:[],level:2},{value:"locatorAssertions.toHaveJSProperty(name, value)",id:"locator-assertions-to-have-js-property",children:[],level:2},{value:"locatorAssertions.toHaveText(expected, options)",id:"locator-assertions-to-have-text",children:[],level:2},{value:"locatorAssertions.toHaveValue(value)",id:"locator-assertions-to-have-value",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," class provides assertion methods that can be used to make assertions about the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," state in the tests. A new instance of ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions")," is created by calling ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-playwrightassertions#playwright-assertions-expect-locator"},"playwrightAssertions.expect(locator)"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\n\ntest('status becomes submitted', async ({ page }) => {\n  // ...\n  await page.click('#submit-button');\n  await expect(page.locator('.status')).toHaveText('Submitted');\n});\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-not"},"locatorAssertions.not()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-checked"},"locatorAssertions.toBeChecked()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-disabled"},"locatorAssertions.toBeDisabled()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-editable"},"locatorAssertions.toBeEditable()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-empty"},"locatorAssertions.toBeEmpty()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-enabled"},"locatorAssertions.toBeEnabled()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-focused"},"locatorAssertions.toBeFocused()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-hidden"},"locatorAssertions.toBeHidden()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-be-visible"},"locatorAssertions.toBeVisible()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-contain-text"},"locatorAssertions.toContainText(expected[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-attribute"},"locatorAssertions.toHaveAttribute(name, value)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-class"},"locatorAssertions.toHaveClass(expected)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-count"},"locatorAssertions.toHaveCount(count)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-css"},"locatorAssertions.toHaveCSS(name, value)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-id"},"locatorAssertions.toHaveId(id)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-js-property"},"locatorAssertions.toHaveJSProperty(name, value)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-text"},"locatorAssertions.toHaveText(expected[, options])")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions#locator-assertions-to-have-value"},"locatorAssertions.toHaveValue(value)"))),(0,s.kt)("h2",{id:"locator-assertions-not"},"locatorAssertions.not()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-not-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/docs/next/api/class-locatorassertions",title:"LocatorAssertions"},"LocatorAssertions"),">",(0,s.kt)("a",{href:"#locator-assertions-not-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Makes the assertion check for the opposite condition. For example, this code tests that the Locator doesn't contain text ",(0,s.kt)("inlineCode",{parentName:"p"},'"error"'),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await expect(locator).not.toContainText('error');\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-checked"},"locatorAssertions.toBeChecked()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-checked-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-checked-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a checked input."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.subscribe');\nawait expect(locator).toBeChecked();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-disabled"},"locatorAssertions.toBeDisabled()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-disabled-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-disabled-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a disabled element."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeDisabled();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-editable"},"locatorAssertions.toBeEditable()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-editable-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-editable-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an editable element."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeEditable();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-empty"},"locatorAssertions.toBeEmpty()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-empty-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-empty-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an empty editable element or to a DOM node that has no text."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('div.warning');\nawait expect(locator).toBeEmpty();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-enabled"},"locatorAssertions.toBeEnabled()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-enabled-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-enabled-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an enabled element."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeEnabled();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-focused"},"locatorAssertions.toBeFocused()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-focused-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-focused-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a focused DOM node."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeFocused();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-hidden"},"locatorAssertions.toBeHidden()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-hidden-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-hidden-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a hidden DOM node, which is the opposite of ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/actionability#visible"},"visible"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeHidden();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-be-visible"},"locatorAssertions.toBeVisible()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-be-visible-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-be-visible-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to a ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/actionability#visible"},"visible")," DOM node."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeVisible();\n")),(0,s.kt)("h2",{id:"locator-assertions-to-contain-text"},"locatorAssertions.toContainText(expected","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expected"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-option-expected"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">"," Expected substring or RegExp or a list of those.",(0,s.kt)("a",{href:"#locator-assertions-to-contain-text-option-expected",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"useInnerText"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-option-use-inner-text"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to use ",(0,s.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.",(0,s.kt)("a",{href:"#locator-assertions-to-contain-text-option-use-inner-text",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-contain-text-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-contain-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element that contains the given text. You can use regular expressions for the value as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toContainText('substring');\nawait expect(locator).toContainText(/\\d messages/);\n")),(0,s.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .list-item');\nawait expect(locator).toContainText(['Text 1', 'Text 4', 'Text 5']);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-attribute"},"locatorAssertions.toHaveAttribute(name, value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Attribute name.",(0,s.kt)("a",{href:"#locator-assertions-to-have-attribute-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Expected attribute value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-attribute-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-attribute-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-attribute-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with given attribute."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveAttribute('type', 'text');\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-class"},"locatorAssertions.toHaveClass(expected)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expected"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-class-option-expected"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">"," Expected class or RegExp or a list of those.",(0,s.kt)("a",{href:"#locator-assertions-to-have-class-option-expected",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-class-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-class-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with given CSS class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('#component');\nawait expect(locator).toHaveClass(/selected/);\n")),(0,s.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .component');\nawait expect(locator).toHaveClass(['component', 'component selected', 'component']);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-count"},"locatorAssertions.toHaveCount(count)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"count"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-count-option-count"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Expected count.",(0,s.kt)("a",{href:"#locator-assertions-to-have-count-option-count",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-count-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-count-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," resolves to an exact number of DOM nodes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const list = page.locator('list > .component');\nawait expect(list).toHaveCount(3);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-css"},"locatorAssertions.toHaveCSS(name, value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," CSS property name.",(0,s.kt)("a",{href:"#locator-assertions-to-have-css-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," CSS property value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-css-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-css-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-css-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," resolves to an element with the given computed CSS style."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button');\nawait expect(locator).toHaveCSS('display', 'flex');\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-id"},"locatorAssertions.toHaveId(id)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-id-option-id"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Element id.",(0,s.kt)("a",{href:"#locator-assertions-to-have-id-option-id",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-id-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-id-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with the given DOM Node ID."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveId('lastname');\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-js-property"},"locatorAssertions.toHaveJSProperty(name, value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-option-name"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Property name.",(0,s.kt)("a",{href:"#locator-assertions-to-have-js-property-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">"," Property value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-js-property-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-js-property-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-js-property-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with given JavaScript property. Note that this property can be of a primitive type as well as a plain serializable JavaScript object."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.component');\nawait expect(locator).toHaveJSProperty('loaded', true);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-text"},"locatorAssertions.toHaveText(expected","[, options]",")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"expected"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-option-expected"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">",">"," Expected substring or RegExp or a list of those.",(0,s.kt)("a",{href:"#locator-assertions-to-have-text-option-expected",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"useInnerText"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-option-use-inner-text"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">"," Whether to use ",(0,s.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.",(0,s.kt)("a",{href:"#locator-assertions-to-have-text-option-use-inner-text",class:"list-anchor"},"#")))),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-text-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with the given text. You can use regular expressions for the value as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toHaveText(/Welcome, Test User/);\nawait expect(locator).toHaveText(/Welcome, .*/);\n")),(0,s.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .component');\nawait expect(locator).toHaveText(['Text 1', 'Text 2', 'Text 3']);\n")),(0,s.kt)("h2",{id:"locator-assertions-to-have-value"},"locatorAssertions.toHaveValue(value)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-value-option-value"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">"," Expected value.",(0,s.kt)("a",{href:"#locator-assertions-to-have-value-option-value",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"locator-assertions-to-have-value-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,s.kt)("a",{href:"#locator-assertions-to-have-value-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Ensures the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/api/class-locator",title:"Locator"},"Locator")," points to an element with the given input value. You can use regular expressions for the value as well."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input[type=number]');\nawait expect(locator).toHaveValue(/[0-9]/);\n")))}u.isMDXComponent=!0}}]);