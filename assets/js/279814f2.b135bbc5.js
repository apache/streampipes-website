"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5713:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],p={id:"org.apache.streampipes.processors.transformation.flink.field-converter",title:"Field Converter",sidebar_label:"Field Converter"},s=void 0,l={unversionedId:"pe/org.apache.streampipes.processors.transformation.flink.field-converter",id:"version-0.92.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter",title:"Field Converter",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.processors.transformation.flink.field-converter.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.flink.field-converter",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.flink.field-converter",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688328858,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processors.transformation.flink.field-converter",title:"Field Converter",sidebar_label:"Field Converter"},sidebar:"documentation",previous:{title:"Event Rate",permalink:"/docs/pe/org.apache.streampipes.processors.aggregation.flink.rate"},next:{title:"Field Hasher",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.flink.fieldhasher"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Field",id:"field",level:3},{value:"Datatype",id:"datatype",level:3},{value:"Output",id:"output",level:2}],u={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.transformation.flink.field-converter/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Converts a string value to a number data type. "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"This processor requires an event that contains at least one string valued field."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"field"},"Field"),(0,o.kt)("p",null,"Specifies the string field that is converted."),(0,o.kt)("h3",{id:"datatype"},"Datatype"),(0,o.kt)("p",null,"Specifies the target datatype depending on the previously specified string field."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"Output event in the specified target datatype."))}m.isMDXComponent=!0}}]);