"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],s={id:"org.apache.streampipes.connect.iiot.adapters.iolink",title:"ifm IOLink",sidebar_label:"ifm IOLink"},p=void 0,l={unversionedId:"pe/org.apache.streampipes.connect.iiot.adapters.iolink",id:"version-0.95.1/pe/org.apache.streampipes.connect.iiot.adapters.iolink",title:"ifm IOLink",description:"\x3c!--",source:"@site/versioned_docs/version-0.95.1/pe/org.apache.streampipes.connect.iiot.adapters.iolink.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.connect.iiot.adapters.iolink",permalink:"/docs/pe/org.apache.streampipes.connect.iiot.adapters.iolink",draft:!1,tags:[],version:"0.95.1",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1720678410,formattedLastUpdatedAt:"Jul 11, 2024",frontMatter:{id:"org.apache.streampipes.connect.iiot.adapters.iolink",title:"ifm IOLink",sidebar_label:"ifm IOLink"},sidebar:"documentation",previous:{title:"ROS Bridge",permalink:"/docs/pe/org.apache.streampipes.connect.iiot.adapters.ros"},next:{title:"Boolean Counter",permalink:"/docs/pe/org.apache.streampipes.processors.transformation.jvm.booloperator.counter"}},c={},u=[{value:"Description",id:"description",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Restrictions",id:"restrictions",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Broker URL",id:"broker-url",level:3},{value:"Access Mode",id:"access-mode",level:3},{value:"Ports",id:"ports",level:3},{value:"Sensor Type",id:"sensor-type",level:3},{value:"Output",id:"output",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.connect.iiot.adapters.iolink/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This adapter enables the integration of IO-Link sensor data produced by an ifm IO-Link Master\n(e.g., AL1350) with Apache StreamPipes. To use this adapter, you need to configure your IO-Link\nmaster to publish events to an MQTT broker. This can be achieved through a REST interface or via\nthe browser at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://##IP_OF_IO_LINK_MASTER##/web/subscribe"),". For detailed instructions,\nplease refer to the ifm documentation."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The JSON events should include the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deviceinfo.serialnumber")),(0,o.kt)("li",{parentName:"ul"},"Only the pdin value is required for each port (e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"port[0]"),")."),(0,o.kt)("li",{parentName:"ul"},"The event ",(0,o.kt)("inlineCode",{parentName:"li"},"timer[1].datachanged")," can be used as a trigger.\nUsing this adapter, you can create a stream for sensors of the same type.")),(0,o.kt)("h3",{id:"restrictions"},"Restrictions"),(0,o.kt)("p",null,"This version supports a single IO-Link master. If you want to connect multiple masters, they must have the same setup.\nIf you have different requirements, please inform us through the mailing list or GitHub discussions."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Here is a list of the configuration parameters you must provide."),(0,o.kt)("h3",{id:"broker-url"},"Broker URL"),(0,o.kt)("p",null,"Enter the URL of the broker, including the protocol (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"tcp://10.20.10.3:1883"),")"),(0,o.kt)("h3",{id:"access-mode"},"Access Mode"),(0,o.kt)("p",null,"If necessary, provide broker credentials."),(0,o.kt)("h3",{id:"ports"},"Ports"),(0,o.kt)("p",null,"Select the ports that are connected to the IO-Link sensors."),(0,o.kt)("h3",{id:"sensor-type"},"Sensor Type"),(0,o.kt)("p",null,"Choose the type of sensor you want to connect. (",(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Currently, only the VVB001 is supported)"),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("p",null,"The output includes all values from the selected sensor type. Here is an example for the ",(0,o.kt)("inlineCode",{parentName:"p"},"VVB001 sensor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "aPeak": 6.6,\n    "aRms": 1.8,\n    "crest": 3.7,\n    "out1": true,\n    "out2": true,\n    "port": "000000001234",\n    "status": 0,\n    "temperature": 22,\n    "timestamp": 1685525380729,\n    "vRms": 0.0023\n}\n')))}f.isMDXComponent=!0}}]);