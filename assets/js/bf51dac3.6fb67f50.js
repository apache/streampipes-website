"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27769],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,m=c["".concat(p,".").concat(d)]||c[d]||f[d]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74553:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"org.apache.streampipes.sinks.brokers.jvm.bufferrest",title:"Buffered REST Publisher",sidebar_label:"Buffered REST Publisher"},p=void 0,u={unversionedId:"pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",id:"version-0.95.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",title:"Buffered REST Publisher",description:"\x3c!--",source:"@site/versioned_docs/version-0.95.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",permalink:"/docs/0.95.0/pe/org.apache.streampipes.sinks.brokers.jvm.bufferrest",draft:!1,tags:[],version:"0.95.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1718285506,formattedLastUpdatedAt:"Jun 13, 2024",frontMatter:{id:"org.apache.streampipes.sinks.brokers.jvm.bufferrest",title:"Buffered REST Publisher",sidebar_label:"Buffered REST Publisher"},sidebar:"documentation",previous:{title:"Apache IoTDB",permalink:"/docs/0.95.0/pe/org.apache.streampipes.sinks.databases.jvm.iotdb"},next:{title:"CouchDB",permalink:"/docs/0.95.0/pe/org.apache.streampipes.sinks.databases.jvm.couchdb"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"REST URL",id:"rest-url",level:3},{value:"Buffer Size",id:"buffer-size",level:3},{value:"Output",id:"output",level:2}],f={toc:c},d="wrapper";function m(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(d,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.bufferrest/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Collects a given amount of events into a JSON array. Once this event count is reached\nthe JSON array is posted to the given REST interface."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"required-input"},"Required input"),(0,o.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"rest-url"},"REST URL"),(0,o.kt)("p",null,"The complete URL of the REST endpoint."),(0,o.kt)("h3",{id:"buffer-size"},"Buffer Size"),(0,o.kt)("p",null,"The amount of events before sending."),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"(not applicable for data sinks)"))}m.isMDXComponent=!0}}]);