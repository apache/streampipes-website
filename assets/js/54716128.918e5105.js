"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,s[1]=p;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],p={id:"extend-sdk-output-strategies",title:"SDK Guide: Output Strategies",sidebar_label:"SDK: Output Strategies"},i=void 0,u={unversionedId:"extend-sdk-output-strategies",id:"extend-sdk-output-strategies",title:"SDK Guide: Output Strategies",description:"Introduction",source:"@site/../docs/06_extend-sdk-output-strategies.md",sourceDirName:".",slug:"/extend-sdk-output-strategies",permalink:"/docs/next/extend-sdk-output-strategies",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1689164473,formattedLastUpdatedAt:"Jul 12, 2023",sidebarPosition:6,frontMatter:{id:"extend-sdk-output-strategies",title:"SDK Guide: Output Strategies",sidebar_label:"SDK: Output Strategies"},sidebar:"documentation",previous:{title:"SDK: Static Properties",permalink:"/docs/next/extend-sdk-static-properties"},next:{title:"Migration Guide: 0.69.0",permalink:"/docs/next/extend-sdk-migration-service-discovery"}},l={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Reference",id:"reference",level:2},{value:"Keep Output",id:"keep-output",level:3},{value:"Fixed Output",id:"fixed-output",level:3},{value:"Append Output",id:"append-output",level:3},{value:"Custom Output",id:"custom-output",level:3},{value:"Transform Output",id:"transform-output",level:3},{value:"Static Transform Operations",id:"static-transform-operations",level:4},{value:"Dynamic Transform Operations",id:"dynamic-transform-operations",level:4},{value:"Custom Transform Output",id:"custom-transform-output",level:3}],d={toc:m},c="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In StreamPipes, output strategies determine the output of a data processor.\nAs the exact input schema of a processor is usually not yet known at development time (as processors can be connected with any stream that matches their requirements), output strategies are a concept to define how an input data stream is transformed to an output data stream."),(0,o.kt)("p",null,"The following reference describes how output strategies can be defined using the SDK."),(0,o.kt)("admonition",{title:"Code on Github",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For all examples, the code can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://www.github.com/apache/streampipes-examples/tree/dev/streampipes-pipeline-elements-examples-processors-jvm/src/main/java/org/apache/streampipes/pe/examples/jvm/outputstrategy/"},"Github"))),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"The methods described below to create static properties are available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcessingElementBuilder")," class and are usually used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"declareModel")," method of the controller class."),(0,o.kt)("p",null,"As follows, we will use the following example event to explain how output strategies define the output of a data processor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "temperature" : 37.0,\n    "deviceId" : "1"\n\n}\n')),(0,o.kt)("h3",{id:"keep-output"},"Keep Output"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"KeepOutputStrategy")," declares that the output event schema will be equal to the input event schema.\nIn other terms, the processor does not change the schema, but might change the values of event properties."),(0,o.kt)("p",null,"A keep output strategy can be defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n@Override\n  public DataProcessorDescription declareModel() {\n    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +\n            ".keep", "Keep output example example", "")\n            .requiredStream(StreamRequirementsBuilder.\n                    create()\n                    .requiredProperty(EpRequirements.anyProperty())\n                    .build())\n            .supportedProtocols(SupportedProtocols.kafka())\n            .supportedFormats(SupportedFormats.jsonFormat())\n\n            // declaring a keep output strategy\n            .outputStrategy(OutputStrategies.keep())\n\n            .build();\n  }\n\n')),(0,o.kt)("p",null,"According to the example above, the expected output event schema of the example input event would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "temperature" : 37.0,\n    "deviceId" : "1"\n\n}\n')),(0,o.kt)("p",null,"Data processors that perform filter operations (e.g., filtering temperature values that are above a given threshold) are a common example for using keep output strategies."),(0,o.kt)("h3",{id:"fixed-output"},"Fixed Output"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"FixedOutputStrategy")," declares that the data processor itself provides the event schema. The output schema does not depend on the input event."),(0,o.kt)("p",null,"Fixed output strategies need to provide the event schema they produce at development time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n  @Override\n  public DataProcessorDescription declareModel() {\n    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +\n            ".fixed", "Fixed output example", "")\n            .requiredStream(StreamRequirementsBuilder.\n                    create()\n                    .requiredProperty(EpRequirements.anyProperty())\n                    .build())\n            .supportedProtocols(SupportedProtocols.kafka())\n            .supportedFormats(SupportedFormats.jsonFormat())\n\n            // the fixed output strategy provides the schema\n            .outputStrategy(OutputStrategies.fixed(EpProperties.timestampProperty("timestamp"),\n                    EpProperties.doubleEp(Labels.from("avg", "Average value", ""), "avg", SO.Number)))\n\n            .build();\n  }\n\n')),(0,o.kt)("p",null,"In this example, we declare that the output schema always consists of two fields (",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"avg"),")."),(0,o.kt)("p",null,"Therefore, an output event should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "avg" : 36.0\n}\n')),(0,o.kt)("h3",{id:"append-output"},"Append Output"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"AppendOutputStrategy")," appends additional fields to a schema of an incoming event stream. For instance, data processors that perform enrichment operations usually make use of append output strategies."),(0,o.kt)("p",null,"Similar to the fixed output strategy, the additional fields must be provided at development time in the controller method as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'  @Override\n  public DataProcessorDescription declareModel() {\n    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +\n            ".append", "Append output example", "")\n\n            // boilerplate code not relevant here, see above\n\n            // declaring an append output\n            .outputStrategy(OutputStrategies.append(EpProperties.integerEp(Labels.from("avg",\n                    "The average value", ""), "avg", SO.Number)))\n\n            .build();\n  }\n')),(0,o.kt)("p",null,"In this case, the output event would have an additional field ",(0,o.kt)("inlineCode",{parentName:"p"},"avg"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "temperature" : 37.0,\n    "deviceId" : "1",\n    "avg" : 123.0\n\n}\n')),(0,o.kt)("h3",{id:"custom-output"},"Custom Output"),(0,o.kt)("p",null,"In some cases, pipeline developers using the StreamPipes UI should be able to manually select fields from an input event schema. For such use cases, a ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomOutputStrategy")," can be used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n@Override\n  public DataProcessorDescription declareModel() {\n    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +\n            ".custom", "Custom output example", "")\n\n            // boilerplate code not relevant here, see above\n\n            // declaring a custom output\n            .outputStrategy(OutputStrategies.custom())\n\n            .build();\n  }\n\n')),(0,o.kt)("p",null,"If a data processor defines a custom output strategy, the customization dialog in the pipeline editor will show a dialog to let users select the fields to keep:"),(0,o.kt)("img",{src:"/img/dev-guide-output-strategies/os-custom.png",width:"80%",alt:"Number Parameter"}),(0,o.kt)("p",null,"Taking our example, and assuming that the user selects both the ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"temperature")," the expected output event should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "temperature" : 37.0\n}\n')),(0,o.kt)("p",null,"How do we know which fields were selected once the data processor is invoked? Use the proper method from the extractor in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onInvocation")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\n  public ConfiguredEventProcessor<DummyParameters> onInvocation(DataProcessorInvocation graph, ProcessingElementParameterExtractor extractor) {\n\n    List<String> outputSelectors = extractor.outputKeySelectors();\n\n    return new ConfiguredEventProcessor<>(new DummyParameters(graph), DummyEngine::new);\n  }\n")),(0,o.kt)("h3",{id:"transform-output"},"Transform Output"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"TransformOutputStrategy")," declares that one or more fields of an incoming event stream are transformed. Transformations can be applied to the datatype of the property, the runtime name of the property, or any other scheam-related declaration such as measurement units."),(0,o.kt)("h4",{id:"static-transform-operations"},"Static Transform Operations"),(0,o.kt)("p",null,"Static transform operations do not depend on any user input (at pipeline development time) in order to know how to transform a field of an incoming event schema."),(0,o.kt)("p",null,"Let's say our data processor transforms strings (that are actually a number) to a number datatype. In this case, we can use a static transform output strategy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n  @Override\n  public DataProcessorDescription declareModel() {\n    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +\n            ".transform", "Transform output example example", "")\n            .requiredStream(StreamRequirementsBuilder.\n                    create()\n                    .requiredPropertyWithUnaryMapping(EpRequirements.stringReq(), Labels.from\n                            ("str", "The date property as a string", ""), PropertyScope.NONE)\n                    .build())\n            .supportedProtocols(SupportedProtocols.kafka())\n            .supportedFormats(SupportedFormats.jsonFormat())\n\n            // static transform operation\n            .outputStrategy(OutputStrategies.transform(TransformOperations\n                    .staticDatatypeTransformation("str", Datatypes.Long)))\n\n            .build();\n  }\n\n')),(0,o.kt)("p",null,"Note the mapping property that we use to determine which field of the input event should be transformed."),(0,o.kt)("p",null,"The expected output event would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "temperature" : 37.0,\n    "deviceId" : 1\n}\n')),(0,o.kt)("h4",{id:"dynamic-transform-operations"},"Dynamic Transform Operations"),(0,o.kt)("p",null,"Sometimes, user input depends on the exact transform output. Let's take a field renaming processor as an example, which lets the user rename a field from an input event schema to another field name.\nFor such use cases, we can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"DynamicTransformOperation"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n  @Override\n  public DataProcessorDescription declareModel() {\n    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +\n            ".transform", "Transform output example example", "")\n            .requiredStream(StreamRequirementsBuilder.\n                    create()\n                    .requiredPropertyWithUnaryMapping(EpRequirements.stringReq(), Labels.from\n                            ("str", "The date property as a string", ""), PropertyScope.NONE)\n                    .build())\n            .supportedProtocols(SupportedProtocols.kafka())\n            .supportedFormats(SupportedFormats.jsonFormat())\n\n            // the text input to enter the new runtime name\n            .requiredTextparameter(Labels.from("new-runtime-name", "New Runtime Name", ""))\n\n            // static transform operation\n            .outputStrategy(OutputStrategies.transform(TransformOperations\n                    .dynamicRuntimeNameTransformation("str", "new-runtime-name")))\n\n            .build();\n  }\n\n')),(0,o.kt)("p",null,"For dynamic transform operations, an additional identifier that links to another static property can be assigned and later be fetched in the ",(0,o.kt)("inlineCode",{parentName:"p"},"onInvocation")," method."),(0,o.kt)("p",null,"Assuming we want to rename the field ",(0,o.kt)("inlineCode",{parentName:"p"},"temperature")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"temp"),", the resulting output event should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "timestamp" : 1234556,\n    "temp" : 37.0,\n    "deviceId" : 1\n}\n')),(0,o.kt)("h3",{id:"custom-transform-output"},"Custom Transform Output"),(0,o.kt)("p",null,"Finally, in some cases the output schema cannot be described at pipeline development time. For these (usually rare) cases, a ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomTransformOutput")," strategy can be used."),(0,o.kt)("p",null,"In this case, a callback function will be invoked in the controller class just after a user has filled in any static properties and clicks on ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," in the pipeline editor."),(0,o.kt)("p",null,"To define a custom transform output, we need to implement an interface in the controller class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomTransformOutputController extends\n        StandaloneEventProcessingDeclarer<DummyParameters> implements\n        ResolvesContainerProvidedOutputStrategy<DataProcessorInvocation, ProcessingElementParameterExtractor> {\n\n\n@Override\n  public EventSchema resolveOutputStrategy(DataProcessorInvocation processingElement, ProcessingElementParameterExtractor parameterExtractor) throws SpRuntimeException {\n\n  }\n}\n")),(0,o.kt)("p",null,"In addition, the output strategy must be declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"declareModel")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'\n@Override\n  public DataProcessorDescription declareModel() {\n    return ProcessingElementBuilder.create("org.streampipes.examples.outputstrategy" +\n            ".customtransform", "Custom transform output example example", "")\n            .requiredStream(StreamRequirementsBuilder.\n                    create()\n                    .requiredPropertyWithUnaryMapping(EpRequirements.stringReq(), Labels.from\n                            ("str", "The date property as a string", ""), PropertyScope.NONE)\n                    .build())\n            .supportedProtocols(SupportedProtocols.kafka())\n            .supportedFormats(SupportedFormats.jsonFormat())\n\n            // declare a custom transform output\n            .outputStrategy(OutputStrategies.customTransformation())\n\n            .build();\n  }\n\n')),(0,o.kt)("p",null,"Once a new pipeline using this data processor is created and the configuration is saved, the ",(0,o.kt)("inlineCode",{parentName:"p"},"resolveOutputStrategy")," method will be called, so that an event schema can be provided based on the given configuration. An extractor instance (see the guide on static properties) is available to extract the selected static properties and the connected event stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n  public EventSchema resolveOutputStrategy(DataProcessorInvocation processingElement, ProcessingElementParameterExtractor parameterExtractor) throws SpRuntimeException {\n    return new EventSchema(Arrays\n            .asList(EpProperties\n                    .stringEp(Labels.from("runtime", "I was added at runtime", ""), "runtime", SO.Text)));\n  }\n')),(0,o.kt)("p",null,"In this example, the output event schema should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "runtime" : "Hello world!"\n}\n')))}g.isMDXComponent=!0}}]);