"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"org.apache.streampipes.processors.transformation.jvm.processor.staticmetadata",title:"Static Metadata Enricher",sidebar_label:"Static Metadata Enricher"},p=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.transformation.jvm.processor.staticmetadata",id:"version-0.95.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.staticmetadata",title:"Static Metadata Enricher",description:"\x3c!--",source:"@site/versioned_docs/version-0.95.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.staticmetadata.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.transformation.jvm.processor.staticmetadata",permalink:"/docs/0.95.0/pe/org.apache.streampipes.processors.transformation.jvm.processor.staticmetadata",draft:!1,tags:[],version:"0.95.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1718285506,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{id:"org.apache.streampipes.processors.transformation.jvm.processor.staticmetadata",title:"Static Metadata Enricher",sidebar_label:"Static Metadata Enricher"},sidebar:"documentation",previous:{title:"Static Math",permalink:"/docs/0.95.0/pe/org.apache.streampipes.processors.enricher.jvm.processor.math.staticmathop"},next:{title:"String Counter",permalink:"/docs/0.95.0/pe/org.apache.streampipes.processors.transformation.jvm.stringoperator.counter"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Using CSV Option",id:"using-csv-option",level:4},{value:"Example",id:"example",level:2},{value:"Input Event",id:"input-event",level:3},{value:"Output Event",id:"output-event",level:3}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enrich a data stream by dynamically adding fields based on user-provided static metadata configuration."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The Static Metadata Enricher is designed to enrich a data stream by dynamically adding fields based on user-provided\nmetadata configuration. Users can specify static properties, and the processor will process each event, adding fields\naccording to the provided key-value pairs. The output strategy is determined dynamically based on the provided metadata.\nFor added convenience, users also have the option of uploading a CSV file with metadata information."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"For each metadata entry, configure the following three options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Runtime Name:")," A unique identifier for the property during runtime."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Value:")," The value associated with the property."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Type:")," The data type of the property value.")),(0,o.kt)("h4",{id:"using-csv-option"},"Using CSV Option"),(0,o.kt)("p",null,"Alternatively, you can utilize the CSV upload feature by creating a CSV file with the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Runtime Name,Runtime Value,Data Type\nsensorType,Temperature,String\nmaxSensorValue,100.0,Float\nminSensorValue,0,Float\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"input-event"},"Input Event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reading": 25.5\n}\n')),(0,o.kt)("h3",{id:"output-event"},"Output Event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reading": 25.5,\n  "sensorType": "Temperature",\n  "maxSensorValue": 100.0,\n  "minSensorValue": 0.0\n}\n')))}f.isMDXComponent=!0}}]);