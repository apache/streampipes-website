"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44569:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.duration-value",title:"Calculate Duration",sidebar_label:"Calculate Duration",original_id:"org.apache.streampipes.processors.transformation.jvm.duration-value"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.duration-value",id:"version-0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value",title:"Calculate Duration",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.duration-value",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.duration-value",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688363956,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.duration-value",title:"Calculate Duration",sidebar_label:"Calculate Duration",original_id:"org.apache.streampipes.processors.transformation.jvm.duration-value"},sidebar:"documentation",previous:{title:"CSV Metadata Enricher",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.transformation.jvm.csvmetadata"},next:{title:"Chunker (English)",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.jvm.chunker"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],m={toc:c},d="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.jvm.duration-value/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This processor calculates the duration for a given stream with a start timestamp and an end timestamp."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"Two timestamp fields"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start Timestamp: The first timestamp (t1)"),(0,o.kt)("li",{parentName:"ul"},"End Timestamp: The second timestamp (t2)"),(0,o.kt)("li",{parentName:"ul"},"Time Unit of the result")),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Appends a new field with the difference of t2 and t1"))}f.isMDXComponent=!0}}]);