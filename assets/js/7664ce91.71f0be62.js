"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={id:"org.apache.streampipes.processors.pattern-detection.flink.absence",title:"Absence",sidebar_label:"Absence",original_id:"org.apache.streampipes.processors.pattern-detection.flink.absence"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.pattern-detection.flink.absence",id:"version-0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence",title:"Absence",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.pattern-detection.flink.absence",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.pattern-detection.flink.absence",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processors.pattern-detection.flink.absence",title:"Absence",sidebar_label:"Absence",original_id:"org.apache.streampipes.processors.pattern-detection.flink.absence"},sidebar:"documentation",previous:{title:"Wikipedia New Articles",permalink:"/docs/0.70.0/pe/org.apache.streampipes.connect.adapters.wikipedia.new"},next:{title:"Aggregation",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.aggregation.flink.aggregation"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"1st parameter",id:"1st-parameter",level:3},{value:"2nd parameter",id:"2nd-parameter",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.pattern-detection.flink.absence/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Detects whether an event does not arrive within a specified time after the occurrence of another event."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-input"},"Required input"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Describe the configuration parameters here"),(0,i.kt)("h3",{id:"1st-parameter"},"1st parameter"),(0,i.kt)("h3",{id:"2nd-parameter"},"2nd parameter"),(0,i.kt)("h2",{id:"output"},"Output"))}f.isMDXComponent=!0}}]);