"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(g,i(i({ref:t},l),{},{components:r})):o.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"org.apache.streampipes.processor.geo.jvm.staticgeocoding",title:"Static Google Maps Geocoder",sidebar_label:"Static Google Maps Geocoder"},p=void 0,s={unversionedId:"pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding",id:"version-0.92.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding",title:"Static Google Maps Geocoder",description:"\x3c!--",source:"@site/versioned_docs/version-0.92.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding",permalink:"/docs/0.92.0/pe/org.apache.streampipes.processor.geo.jvm.staticgeocoding",draft:!1,tags:[],version:"0.92.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688317119,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{id:"org.apache.streampipes.processor.geo.jvm.staticgeocoding",title:"Static Google Maps Geocoder",sidebar_label:"Static Google Maps Geocoder"},sidebar:"documentation",previous:{title:"Static Distance Calculator",permalink:"/docs/0.92.0/pe/org.apache.streampipes.processors.geo.jvm.processor.staticdistancecalculator"},next:{title:"Static Math",permalink:"/docs/0.92.0/pe/org.apache.streampipes.processors.enricher.flink.processor.math.staticmathop"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Place",id:"place",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,'This processor computes the latitude and longitude values from a fixed location (a place name such as "Karlsruhe\n, Germany\n") and adds the result to the event.'),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"Input event requires to have a field which contains the name of a place."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"place"},"Place"),(0,a.kt)("p",null,"The place name that should be converted to a lat/lng combination"),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"Outputs a similar event like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  'latitude': 6.927079,\n  'longitude': 79.861244  \n}\n")))}g.isMDXComponent=!0}}]);