"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35476],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={id:"org.apache.streampipes.sinks.brokers.jvm.nats",title:"NATS Publisher",sidebar_label:"NATS Publisher",original_id:"org.apache.streampipes.sinks.brokers.jvm.nats"},l=void 0,p={unversionedId:"pe/org.apache.streampipes.sinks.brokers.jvm.nats",id:"version-0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats",title:"NATS Publisher",description:"\x3c!--",source:"@site/versioned_docs/version-0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.sinks.brokers.jvm.nats",permalink:"/docs/0.91.0/pe/org.apache.streampipes.sinks.brokers.jvm.nats",draft:!1,tags:[],version:"0.91.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.sinks.brokers.jvm.nats",title:"NATS Publisher",sidebar_label:"NATS Publisher",original_id:"org.apache.streampipes.sinks.brokers.jvm.nats"},sidebar:"documentation",previous:{title:"MySQL Database",permalink:"/docs/0.91.0/pe/org.apache.streampipes.sinks.databases.jvm.mysql"},next:{title:"Notification",permalink:"/docs/0.91.0/pe/org.apache.streampipes.sinks.internal.jvm.notification"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Configuration",id:"configuration",level:2},{value:"NATS Subject",id:"nats-subject",level:3},{value:"NATS Broker URL",id:"nats-broker-url",level:3},{value:"Username",id:"username",level:3},{value:"NATS Broker URL",id:"nats-broker-url-1",level:3},{value:"NATS Connection Properties",id:"nats-connection-properties",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function k(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.sinks.brokers.jvm.nats/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Publishes events to NATS broker."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"This sink does not have any requirements and works with any incoming event type."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"nats-subject"},"NATS Subject"),(0,a.kt)("p",null,"The subject (topic) where events should be sent to."),(0,a.kt)("h3",{id:"nats-broker-url"},"NATS Broker URL"),(0,a.kt)("p",null,"The URL to connect to the NATS broker. It can be provided multiple urls separated by commas(,).\n(e.g., nats://localhost:4222,nats://localhost:4223)"),(0,a.kt)("h3",{id:"username"},"Username"),(0,a.kt)("p",null,"The username to authenticate the client with NATS broker."),(0,a.kt)("p",null,"It is an optional configuration.  "),(0,a.kt)("h3",{id:"nats-broker-url-1"},"NATS Broker URL"),(0,a.kt)("p",null,"The password to authenticate the client with NATS broker. "),(0,a.kt)("p",null,"It is an optional configuration."),(0,a.kt)("h3",{id:"nats-connection-properties"},"NATS Connection Properties"),(0,a.kt)("p",null,"All other possible connection configurations that the nats client can be created with.\nIt can be provided as key value pairs separated by colons(:) and commas(,).\n(e.g., io.nats.client.reconnect.max:1, io.nats.client.timeout:1000)"),(0,a.kt)("p",null,"It is an optional configuration."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"(not applicable for data sinks)"))}k.isMDXComponent=!0}}]);