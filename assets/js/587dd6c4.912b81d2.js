"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71197],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),c=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return o.createElement(a.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,f=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return t?o.createElement(f,s(s({ref:r},l),{},{components:t})):o.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p[u]="string"==typeof e?e:n,s[1]=p;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83564:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),s=["components"],p={id:"org.apache.streampipes.processors.filters.jvm.compose",title:"Compose",sidebar_label:"Compose",original_id:"org.apache.streampipes.processors.filters.jvm.compose"},a=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.filters.jvm.compose",id:"version-0.90.0/pe/org.apache.streampipes.processors.filters.jvm.compose",title:"Compose",description:"\x3c!--",source:"@site/versioned_docs/version-0.90.0/pe/org.apache.streampipes.processors.filters.jvm.compose.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.filters.jvm.compose",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.filters.jvm.compose",draft:!1,tags:[],version:"0.90.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688364542,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.filters.jvm.compose",title:"Compose",sidebar_label:"Compose",original_id:"org.apache.streampipes.processors.filters.jvm.compose"},sidebar:"documentation",previous:{title:"Chunker (English)",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker"},next:{title:"Count Aggregation",permalink:"/docs/0.90.0/pe/org.apache.streampipes.processors.aggregation.flink.count"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function f(e){var r=e.components,t=(0,n.Z)(e,s);return(0,i.kt)(d,(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.compose/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Merges two event streams. Any time, a new input event arrives, it is merged with the last input event from the other\nevent stream and forwarded."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"The Compose processor does not have any specific input requirements."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"(no further configuration required)"),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"The compose processor has a configurable output that can be selected by the user at pipeline modeling time."))}f.isMDXComponent=!0}}]);