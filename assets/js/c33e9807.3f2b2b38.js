"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,m=c["".concat(p,".").concat(d)]||c[d]||f[d]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"org.apache.streampipes.sinks.brokers.jvm.bufferrest",title:"Buffered REST Publisher",sidebar_label:"Buffered REST Publisher"},p=void 0,u={unversionedId:"pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",id:"pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",title:"Buffered REST Publisher",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",permalink:"/docs/next/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1694453256,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"org.apache.streampipes.sinks.brokers.jvm.bufferrest",title:"Buffered REST Publisher",sidebar_label:"Buffered REST Publisher"},sidebar:"documentation",previous:{title:"Apache IoTDB",permalink:"/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.iotdb"},next:{title:"CouchDB",permalink:"/docs/next/pe/org.apache.streampipes.sinks.databases.jvm.couchdb"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"REST URL",id:"rest-url",level:3},{value:"Buffer Size",id:"buffer-size",level:3},{value:"Output",id:"output",level:2}],f={toc:c},d="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(d,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.bufferrest/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Collects a given amount of events into a JSON array. Once this event count is reached\nthe JSON array is posted to the given REST interface."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"rest-url"},"REST URL"),(0,a.kt)("p",null,"The complete URL of the REST endpoint."),(0,a.kt)("h3",{id:"buffer-size"},"Buffer Size"),(0,a.kt)("p",null,"The amount of events before sending."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"(not applicable for data sinks)"))}m.isMDXComponent=!0}}]);