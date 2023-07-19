"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=a,p=g["".concat(l,".").concat(d)]||g[d]||f[d]||r;return n?i.createElement(p,o(o({ref:t},u),{},{components:n})):i.createElement(p,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"use-configurations",title:"Configurations",sidebar_label:"Configurations"},l=void 0,c={unversionedId:"use-configurations",id:"use-configurations",title:"Configurations",description:"The configuration section is an admin-only interface for system-wide settings.",source:"@site/../docs/03_use-configurations.md",sourceDirName:".",slug:"/use-configurations",permalink:"/docs/next/use-configurations",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688367241,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:3,frontMatter:{id:"use-configurations",title:"Configurations",sidebar_label:"Configurations"},sidebar:"documentation",previous:{title:"Install Pipeline Elements",permalink:"/docs/next/use-install-pipeline-elements"},next:{title:"Apache Kafka",permalink:"/docs/next/pe/org.apache.streampipes.connect.protocol.stream.kafka"}},u={},g=[{value:"General configuration",id:"general-configuration",level:2},{value:"Datalake",id:"datalake",level:2},{value:"Email configuration",id:"email-configuration",level:2},{value:"Messaging",id:"messaging",level:2},{value:"Pipeline Element Configuration",id:"pipeline-element-configuration",level:2},{value:"Security",id:"security",level:2}],f={toc:g},d="wrapper";function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)(d,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The configuration section is an admin-only interface for system-wide settings."),(0,r.kt)("h2",{id:"general-configuration"},"General configuration"),(0,r.kt)("img",{className:"docs-image",src:"/img/03_use-configurations/01_general-configuration.png",alt:"General configuration"}),(0,r.kt)("p",null,"The general configuration serves to provide basic system settings. The basic settings allow to configure the app name (which is used, e.g., for mails sent by StreamPipes).\nAdditionally, the externally available host and port can be set which is used by the mail system to add links to emails."),(0,r.kt)("p",null,"Furthermore, self-registration and password recovery features can be activated in this view. Note that both features require a working email configuration."),(0,r.kt)("h2",{id:"datalake"},"Datalake"),(0,r.kt)("img",{className:"docs-image",src:"/img/03_use-configurations/02_datalake-configuration.png",alt:"Datalake configuration"}),(0,r.kt)("p",null,"Here, stored data lake databases can be truncated or deleted. The view also gives information on the number of data points currently stored in a measurement series."),(0,r.kt)("h2",{id:"email-configuration"},"Email configuration"),(0,r.kt)("img",{className:"docs-image",src:"/img/03_use-configurations/03_email-configuration.png",alt:"Email configuration"}),(0,r.kt)("p",null,"In this section, the email configuration is set. The email configuration is used to send mails to users. Most standard mail server settings are supported. The configuration can be validated by triggering a test mail that is sent to a given recipient."),(0,r.kt)("h2",{id:"messaging"},"Messaging"),(0,r.kt)("img",{className:"docs-image",src:"/img/03_use-configurations/04_messaging-configuration.png",alt:"Messaging configuration"}),(0,r.kt)("p",null,"Messaging configuration is used to control parameters used for communication between pipeline elements. Individual Kafka settings can be configured, as well as the priority of selected message formats and protocols during pipeline creation."),(0,r.kt)("h2",{id:"pipeline-element-configuration"},"Pipeline Element Configuration"),(0,r.kt)("img",{className:"docs-image",src:"/img/03_use-configurations/05_pipeline-element-configuration.png",alt:"Pipeline element configuration"}),(0,r.kt)("p",null,"Individual configurations of extensions services are available in this view. The available configurations depend on the provided configuration variables in the service definition of each extensions service."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("img",{className:"docs-image",src:"/img/03_use-configurations/06_security-configuration.png",alt:"Messaging configuration"}),(0,r.kt)("p",null,"The security configuration allows to manage existing user accounts, service accounts and groups. New users can be added and roles can be assigned."),(0,r.kt)("p",null,"Please also read more about security ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deploy-security"},"here"),"."))}p.isMDXComponent=!0}}]);