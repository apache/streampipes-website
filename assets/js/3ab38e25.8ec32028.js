"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"extend-sdk-functions",title:"SDK Guide: Functions",sidebar_label:"SDK: Functions"},l=void 0,c={unversionedId:"extend-sdk-functions",id:"version-0.95.0/extend-sdk-functions",title:"SDK Guide: Functions",description:"Introduction",source:"@site/versioned_docs/version-0.95.0/06_extend-sdk-functions.md",sourceDirName:".",slug:"/extend-sdk-functions",permalink:"/docs/0.95.0/extend-sdk-functions",draft:!1,tags:[],version:"0.95.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1718285506,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:6,frontMatter:{id:"extend-sdk-functions",title:"SDK Guide: Functions",sidebar_label:"SDK: Functions"},sidebar:"documentation",previous:{title:"StreamPipes Client",permalink:"/docs/0.95.0/extend-client"},next:{title:"SDK: Event Model",permalink:"/docs/0.95.0/extend-sdk-event-model"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Writing a function",id:"writing-a-function",level:2},{value:"Skeleton",id:"skeleton",level:3},{value:"Getting a stream ID",id:"getting-a-stream-id",level:3},{value:"Function Context",id:"function-context",level:3},{value:"Registering a function",id:"registering-a-function",level:2},{value:"Metrics &amp; Monitoring",id:"metrics--monitoring",level:2}],p={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Pipeline elements such as data processors and data sinks are a great way\nto create ",(0,a.kt)("em",{parentName:"p"},"reusable")," components that can be part of pipelines.\nHowever, creating a pipeline element is not always the best choice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The behaviour of a data processor is bound to a specific input stream ",(0,a.kt)("em",{parentName:"li"},"and")),(0,a.kt)("li",{parentName:"ul"},"A data processor doesn't contain any user-defined configuration ",(0,a.kt)("em",{parentName:"li"},"and")),(0,a.kt)("li",{parentName:"ul"},"The intended action is fixed or known at build time and the data processor shouldn't be available in the pipeline editor.")),(0,a.kt)("p",null,"To cover such use cases, we provide ",(0,a.kt)("em",{parentName:"p"},"StreamPipes Functions"),". Functions\nare a great way to define custom processing logic based on previously\nconnected data streams."),(0,a.kt)("p",null,"Functions can be registered in a similar way to pipeline elements, but define expected input\nstreams at startup time. Functions are started once the corresponding ",(0,a.kt)("em",{parentName:"p"},"extensions service")," starts\nand run until the service is stopped. "),(0,a.kt)("h2",{id:"writing-a-function"},"Writing a function"),(0,a.kt)("admonition",{title:"Work in Progress",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Functions are currently in preview mode and are not yet recommended for production usage.\nAPIs are subject to change in a future version.")),(0,a.kt)("p",null,"To define a function, create a new extensions service using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.95.0/extend-archetypes"},"Maven Archetypes")," or use an already existing service."),(0,a.kt)("h3",{id:"skeleton"},"Skeleton"),(0,a.kt)("p",null,"Functions can be defined by creating a new class which extends the ",(0,a.kt)("inlineCode",{parentName:"p"},"StreamPipesFunction")," class."),(0,a.kt)("p",null,"The basic skeleton looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class StreamPipesFunctionExample extends StreamPipesFunction {\n  \n  @Override\n  public FunctionId getFunctionId() {\n    return FunctionId.from("my-function-id", 1);\n  }\n\n  @Override\n  public List<String> requiredStreamIds() {\n    return List.of("<id of the required stream>");\n  }\n\n  @Override\n  public void onServiceStarted(FunctionContext context) {\n    // called when the service is started\n  }\n\n  @Override\n  public void onEvent(Event event, String streamId) {\n    // called when an event arrives\n  }\n\n  @Override\n  public void onServiceStopped() {\n    // called when the service is stopped\n  }\n}\n\n')),(0,a.kt)("p",null,"The structure of a function class is easy to understand:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"getFunctionId")," requires an identifier in form of a ",(0,a.kt)("inlineCode",{parentName:"li"},"FunctionId"),", which defines the id itself along with a version number that can be freely chosen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"requiredStreamIds")," expects a list of references to data streams that are already available in StreamPipes. See below to learn how to find the id of a stream in StreamPipes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"onServiceStarted")," is called once the extensions service is started and can be used to initialize the function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"onEvent")," is called every time a new event arrives and provides a ",(0,a.kt)("inlineCode",{parentName:"li"},"streamId")," as a reference to the corresponding stream, which is useful in case multiple data streams are received by the function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"onServiceStopped")," is called when the extensions service is stopped and can be used to perform any required cleanup.")),(0,a.kt)("h3",{id:"getting-a-stream-id"},"Getting a stream ID"),(0,a.kt)("p",null,"Functions require a reference to all data streams that should be retrieved by the function.\nCurrently, the only way to get the ID of a function is by navigating to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Asset Management")," view in the StreamPipes UI.\nCreate a new asset, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Asset")," and open ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Link")," in the ",(0,a.kt)("em",{parentName:"p"},"Linked Resources")," panel.\nChoose ",(0,a.kt)("inlineCode",{parentName:"p"},"Data Source")," as link type, select one of the available sources, copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource ID")," and provide this ID in the ",(0,a.kt)("inlineCode",{parentName:"p"},"requiredStreamIds")," method."),(0,a.kt)("h3",{id:"function-context"},"Function Context"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onServiceStarted")," method provides a function context which provides several convenience methods to work with functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"getFunctionId")," returns the current function identifier"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"getConfig")," returns a reference to configuration options of the extensions service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"getClient")," returns a reference to the StreamPipes client to interact with features from the REST API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"getStreams")," returns the data model of all data streams defined in the ",(0,a.kt)("inlineCode",{parentName:"li"},"requiredStreamIds")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"getSchema")," returns the schema of a specific data stream by providing the ",(0,a.kt)("inlineCode",{parentName:"li"},"streamId"))),(0,a.kt)("h2",{id:"registering-a-function"},"Registering a function"),(0,a.kt)("p",null,"Registering a function is easy and can be done in the ",(0,a.kt)("em",{parentName:"p"},"Init")," class of the service.\nE.g., considering a service definition as illustrated below, simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"registerFunction")," and\nprovide an instance of your function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n  @Override\n  public SpServiceDefinition provideServiceDefinition() {\n    return SpServiceDefinitionBuilder.create("my-service-id",\n            "StreamPipes Function Example",\n            "",\n            8090)\n        .registerFunction(new MyExampleFunction())\n        .registerMessagingFormats(\n            new JsonDataFormatFactory())\n        .registerMessagingProtocols(\n            new SpNatsProtocolFactory())\n        .build();\n  }\n  \n')),(0,a.kt)("h2",{id:"metrics--monitoring"},"Metrics & Monitoring"),(0,a.kt)("p",null,"Similar to pipeline elements, function register at the StreamPipes core.\nRunning functions can be seen in the pipeline view of the user interface under ",(0,a.kt)("em",{parentName:"p"},"Functions"),", right below the list of available pipelines.\nSimilar to pipelines, simple metrics, monitoring info and exceptions can be viewed in the ",(0,a.kt)("em",{parentName:"p"},"Details")," section of each function."))}f.isMDXComponent=!0}}]);