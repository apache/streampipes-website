"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={id:"extend-sdk-event-model",title:"SDK Guide: Event Model",sidebar_label:"SDK: Event Model"},s=void 0,d={unversionedId:"extend-sdk-event-model",id:"version-0.95.1/extend-sdk-event-model",title:"SDK Guide: Event Model",description:"Introduction",source:"@site/versioned_docs/version-0.95.1/06_extend-sdk-event-model.md",sourceDirName:".",slug:"/extend-sdk-event-model",permalink:"/docs/extend-sdk-event-model",draft:!1,tags:[],version:"0.95.1",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1720678410,formattedLastUpdatedAt:"Jul 11, 2024",sidebarPosition:6,frontMatter:{id:"extend-sdk-event-model",title:"SDK Guide: Event Model",sidebar_label:"SDK: Event Model"},sidebar:"documentation",previous:{title:"SDK: Functions",permalink:"/docs/extend-sdk-functions"},next:{title:"SDK: PE Migration",permalink:"/docs/extend-sdk-migration"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Property Selectors",id:"property-selectors",level:3},{value:"Reading Fields",id:"reading-fields",level:3},{value:"Parsing Fields",id:"parsing-fields",level:3},{value:"Primitive Fields",id:"primitive-fields",level:4},{value:"List Fields",id:"list-fields",level:4},{value:"Adding/Updating Fields",id:"addingupdating-fields",level:3}],c={toc:u},m="wrapper";function v(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This guide explains the usage of the event model to manipulate runtime events for data processors and data sink."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This guide assumes that you are already familiar with the basic setup of ",(0,a.kt)("a",{parentName:"p",href:"/docs/extend-first-processor"},"data processors"),"."),(0,a.kt)("h3",{id:"property-selectors"},"Property Selectors"),(0,a.kt)("p",null,"In most cases, fields that are subject to be transformed by pipeline elements are provided by the assigned ",(0,a.kt)("inlineCode",{parentName:"p"},"MappingProperty")," (see the guide on ",(0,a.kt)("a",{parentName:"p",href:"extend-sdk-static-properties"},"static properties"),")."),(0,a.kt)("p",null,"Mapping properties return a ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertySelector")," that identifies a field based on (i) the ",(0,a.kt)("strong",{parentName:"p"},"streamIndex")," and (ii) the runtime name of the field.\nLet's assume we have an event with the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "temperature" : 37.0,\n    "deviceId" : "sensor1",\n    "running" : true,\n    "location" : {"latitude" : 34.4, "longitude" : -47},\n    "lastValues" : [45, 22, 21]\n}\n')),(0,a.kt)("p",null,"In addition, we assume that a data processor exists (with one input node) that converts the temperature value (measured in degrees celsius) to a degree fahrenheit value.\nIn this case, a mapping property (selected by the pipeline developer in the StreamPipes UI) would link to the ",(0,a.kt)("inlineCode",{parentName:"p"},"temperature")," field of the event."),(0,a.kt)("p",null,"The mapping property value will be the ",(0,a.kt)("inlineCode",{parentName:"p"},"PropertySelector")," of the temperature value, which looks as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"s0::temperature\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"s0")," identifies the stream (in this case, only one input streams exist, but as data processors might require more than one input stream, a stream identifier is required), while the appendix identifies the runtime name."),(0,a.kt)("p",null,"Note: If you add a new field to an input event, you don't need to provide the selector, you can just assign the runtime name as defined by the ",(0,a.kt)("a",{parentName:"p",href:"extend-sdk-output-strategies"},"output strategy"),"."),(0,a.kt)("h3",{id:"reading-fields"},"Reading Fields"),(0,a.kt)("p",null,"You can get a field from an event by providing the corresponding selector:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n@Override\n  public void onEvent(Event event, SpOutputCollector out) {\n\n  PrimitiveField temperatureField = event.getFieldBySelector(PROPERTY_SELECTOR).getAsPrimitive();\n  }\n\n")),(0,a.kt)("p",null,"Similarly, if your mapping property links to a nested property, use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n@Override\n  public void onEvent(Event event, SpOutputCollector out) {\n\n  NestedField nestedField = event.getFieldBySelector(PROPERTY_SELECTOR).getAsNested();\n  }\n\n")),(0,a.kt)("p",null,"and for a list-based field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n@Override\n  public void onEvent(Event event, SpOutputCollector out) {\n\n  ListField listField = event.getFieldBySelector(PROPERTY_SELECTOR).getAsList();\n  }\n\n")),(0,a.kt)("h3",{id:"parsing-fields"},"Parsing Fields"),(0,a.kt)("h4",{id:"primitive-fields"},"Primitive Fields"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"PrimitiveField")," contains convenience methods to directly cast a field to the target datatype:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n// parse the value as a float datatype\nFloat temperatureValue = event.getFieldBySelector(temperatureSelector).getAsPrimitive().getAsFloat();\n\n// or do the same with a double datatype\nDouble temperatureValue = event.getFieldBySelector(temperatureSelector).getAsPrimitive().getAsDouble();\n\n// extracting a string\nString deviceId = event.getFieldBySelector(deviceIdSelector).getAsPrimitive().getAsString();\n\n// this also works for extracting fields from nested fields:\nDouble latitude = event.getFieldBySelector(latitudeSelector).getAsPrimitive().getAsDouble();\n\n// extracting boolean values\nBoolean running = event.getFieldBySelector(runningSelector).getAsPrimitive().getAsBoolean();\n")),(0,a.kt)("p",null,"In rare cases, you might want to receive a field directly based on the runtime name as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Double temperature = event.getFieldByRuntimeName("temperature").getAsPrimitive().getAsDouble();\n')),(0,a.kt)("h4",{id:"list-fields"},"List Fields"),(0,a.kt)("p",null,"Lists can also be retrieved by providing the corresponding selector and can automatically be parsed to a list of primitive datatypes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\nList<Integer> lastValues = event.getFieldBySelector(lastValueSelector).getAsList().parseAsSimpleType(Integer.class);\n\n")),(0,a.kt)("p",null,"(coming soon: parsing complex lists)"),(0,a.kt)("h3",{id:"addingupdating-fields"},"Adding/Updating Fields"),(0,a.kt)("p",null,"Primitive fields can easily be added to an event by providing the runtime name and the object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n    // add a primitive field with runtime name "city" and value "Karlsruhe"\n    event.addField("city", "Karlsruhe");\n\n    // remove the field "temperature" from the event\n    event.removeFieldBySelector(temperatureSelector);\n\n    // add a new field\n    event.addField("fahrenheit", 48);\n')))}v.isMDXComponent=!0}}]);