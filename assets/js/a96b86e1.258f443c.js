"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89002],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),v=n,g=u["".concat(s,".").concat(v)]||u[v]||d[v]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic",title:"Geo Distance Calculator Static (Haversine)",sidebar_label:"Geo Distance Calculator Static (Haversine)"},s=void 0,c={unversionedId:"pe/org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic",id:"version-0.95.0/pe/org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic",title:"Geo Distance Calculator Static (Haversine)",description:"\x3c!--",source:"@site/versioned_docs/version-0.95.0/pe/org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic",permalink:"/docs/0.95.0/pe/org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic",draft:!1,tags:[],version:"0.95.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1718285506,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{id:"org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic",title:"Geo Distance Calculator Static (Haversine)",sidebar_label:"Geo Distance Calculator Static (Haversine)"},sidebar:"documentation",previous:{title:"Geo Distance Calculator (Haversine)",permalink:"/docs/0.95.0/pe/org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversine"},next:{title:"Geo EPSG Code",permalink:"/docs/0.95.0/pe/org.apache.streampipes.processors.geo.jvm.jts.processor.epsg"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Required inputs",id:"required-inputs",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Latitude field",id:"latitude-field",level:3},{value:"Longitude field",id:"longitude-field",level:3},{value:"Latitude",id:"latitude",level:3},{value:"Longitude",id:"longitude",level:3},{value:"Output",id:"output",level:2}],d={toc:u},v="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(v,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processors.geo.jvm.latlong.processor.distancecalculator.haversinestatic/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Calculates the distance with the ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/Haversine_formula",target:"_blank"},"Haversine formula")," between a fixed location (e.g., a place) and a latitude/longitude pair of an input\nevent."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"required-inputs"},"Required inputs"),(0,i.kt)("p",null,"Requires a data stream that provides latitude and longitude values."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Describe the configuration parameters here"),(0,i.kt)("h3",{id:"latitude-field"},"Latitude field"),(0,i.kt)("p",null,"The field containing the latitude value."),(0,i.kt)("h3",{id:"longitude-field"},"Longitude field"),(0,i.kt)("p",null,"The field containing the longitude value."),(0,i.kt)("h3",{id:"latitude"},"Latitude"),(0,i.kt)("p",null,"The latitude value of the fixed location"),(0,i.kt)("h3",{id:"longitude"},"Longitude"),(0,i.kt)("p",null,"The longitude value of the fixed location"),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("p",null,"Outputs a similar event like below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{\n  'distance': 12.5\n}\n")))}g.isMDXComponent=!0}}]);