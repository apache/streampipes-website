"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"org.apache.streampipes.connect.iiot.protocol.stream.mqtt",title:"MQTT",sidebar_label:"MQTT"},p=void 0,s={unversionedId:"pe/org.apache.streampipes.connect.iiot.protocol.stream.mqtt",id:"pe/org.apache.streampipes.connect.iiot.protocol.stream.mqtt",title:"MQTT",description:"\x3c!--",source:"@site/../docs/pe/org.apache.streampipes.connect.iiot.protocol.stream.mqtt.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.iiot.protocol.stream.mqtt",permalink:"/docs/next/pe/org.apache.streampipes.connect.iiot.protocol.stream.mqtt",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1694453256,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{id:"org.apache.streampipes.connect.iiot.protocol.stream.mqtt",title:"MQTT",sidebar_label:"MQTT"},sidebar:"documentation",previous:{title:"InfluxDB Stream Adapter",permalink:"/docs/next/pe/org.apache.streampipes.connect.iiot.adapters.influxdb.stream"},next:{title:"Machine Data Simulator",permalink:"/docs/next/pe/org.apache.streampipes.connect.iiot.adapters.simulator.machine"}},l={},u=[{value:"Description",id:"description",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Broker Url",id:"broker-url",level:3},{value:"Access Mode",id:"access-mode",level:3},{value:"Output",id:"output",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)(d,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.iiot.protocol.stream.mqtt/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Consumes messages from a broker using the MQTT protocol"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Describe the configuration parameters here"),(0,a.kt)("h3",{id:"broker-url"},"Broker Url"),(0,a.kt)("p",null,'Example: tcp://test-server.com:1883 (Protocol required. Port required)"'),(0,a.kt)("h3",{id:"access-mode"},"Access Mode"),(0,a.kt)("p",null,"Unauthenticated or Authenticated (Username/Password)"),(0,a.kt)("h2",{id:"output"},"Output"))}f.isMDXComponent=!0}}]);