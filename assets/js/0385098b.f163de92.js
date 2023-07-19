"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=r(63366),p=(r(67294),r(3905)),a=["components"],i={id:"org.apache.streampipes.processors.textmining.jvm.partofspeech",title:"Part of Speech (English)",sidebar_label:"Part of Speech (English)"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.textmining.jvm.partofspeech",id:"version-0.92.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech",title:"Part of Speech (English)",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech",permalink:"/docs/pe/org.apache.streampipes.processors.textmining.jvm.partofspeech",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.textmining.jvm.partofspeech",title:"Part of Speech (English)",sidebar_label:"Part of Speech (English)"},sidebar:"documentation",previous:{title:"Numerical Text Filter",permalink:"/docs/pe/org.apache.streampipes.processors.filters.jvm.numericaltextfilter"},next:{title:"Peak Detection",permalink:"/docs/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",{align:"center"},(0,p.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.textmining.jvm.partofspeech/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"description"},"Description"),(0,p.kt)("p",null,"Takes in a stream of tokens and marks each token with a part-of-speech tag\nThe list of used suffixes can be found ",(0,p.kt)("a",{parentName:"p",href:"https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html"},"here")),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"required-input"},"Required input"),(0,p.kt)("p",null,"A stream with a list property which contains the tokens."),(0,p.kt)("hr",null),(0,p.kt)("h2",{id:"configuration"},"Configuration"),(0,p.kt)("p",null,"Simply assign the correct output of the previous stream to the part of speech detector input.\nTo use this component you have to download or train an openNLP model:\n",(0,p.kt)("a",{parentName:"p",href:"https://opennlp.apache.org/models.html"},"https://opennlp.apache.org/models.html")),(0,p.kt)("h2",{id:"output"},"Output"),(0,p.kt)("p",null,"Appends two list properties to the stream:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"String list: The tag for each token"),(0,p.kt)("li",{parentName:"ol"},"Double list: The confidence for each tag that it is indeed the given tag (between 0 and 1)")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Example:")),(0,p.kt)("p",null,"Input: ",(0,p.kt)("inlineCode",{parentName:"p"},'(tokens: ["Hi", "Joe"])')),(0,p.kt)("p",null,"Output: ",(0,p.kt)("inlineCode",{parentName:"p"},'(tokens: ["Hi", "Joe"], tags: ["UH", "NNP"], confidence: [0.82, 0.87])')))}f.isMDXComponent=!0}}]);