"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?o.createElement(f,p(p({ref:t},l),{},{components:r})):o.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:n,p[1]=a;for(var c=2;c<i;c++)p[c]=r[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),p=["components"],a={id:"org.apache.streampipes.processors.filters.jvm.project",title:"Projection",sidebar_label:"Projection",original_id:"org.apache.streampipes.processors.filters.jvm.project"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.filters.jvm.project",id:"version-0.70.0/pe/org.apache.streampipes.processors.filters.jvm.project",title:"Projection",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.filters.jvm.project.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.filters.jvm.project",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.filters.jvm.project",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688363956,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.filters.jvm.project",title:"Projection",sidebar_label:"Projection",original_id:"org.apache.streampipes.processors.filters.jvm.project"},sidebar:"documentation",previous:{title:"Peak Detection",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.peak-detection"},next:{title:"QR Code Reader",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.qrcode"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,p);return(0,i.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.filters.jvm.project/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Outputs a selectable subset of an input event type."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("p",null,"The project processor works with any input event stream."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"(no further configuration required)"),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"The output depends on the fields selected at pipeline development time."))}f.isMDXComponent=!0}}]);