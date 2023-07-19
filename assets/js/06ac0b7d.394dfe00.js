"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={id:"org.apache.streampipes.processors.textmining.jvm.tokenizer",title:"Tokenizer (English)",sidebar_label:"Tokenizer (English)"},s=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.textmining.jvm.tokenizer",id:"pe/org.apache.streampipes.processors.textmining.jvm.tokenizer",title:"Tokenizer (English)",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer",permalink:"/docs/next/pe/org.apache.streampipes.processors.textmining.jvm.tokenizer",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.jvm.tokenizer",title:"Tokenizer (English)",sidebar_label:"Tokenizer (English)"},sidebar:"documentation",previous:{title:"Timestamp Extractor",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.processor.timestampextractor"},next:{title:"Transform to boolean",permalink:"/docs/next/pe/org.apache.streampipes.processors.transformation.jvm.transform-to-boolean"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.tokenizer/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Segments a given text into Tokens (usually words, numbers, punctuations, ...). Works best with english text."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"A stream with a string property which contains a text."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Simply assign the correct output of the previous stream to the tokenizer input.\nTo use this component you have to download or train an openNLP model:\n",(0,i.kt)("a",{parentName:"p",href:"https://opennlp.apache.org/models.html"},"https://opennlp.apache.org/models.html")),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"Adds a list to the stream which contains all tokens of the corresponding text."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("p",null,"Input: ",(0,i.kt)("inlineCode",{parentName:"p"},'(text: "Hi, how are you?")')),(0,i.kt)("p",null,"Output: ",(0,i.kt)("inlineCode",{parentName:"p"},'(text: "Hi, how are you?", tokens: ["Hi", ",", "how", "are", "you", "?"])')))}g.isMDXComponent=!0}}]);