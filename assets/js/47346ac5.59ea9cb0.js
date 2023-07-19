"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={id:"extend-first-processor",title:"Your first data processor",sidebar_label:"Your first data processor",original_id:"extend-first-processor"},l=void 0,c={unversionedId:"extend-first-processor",id:"version-0.70.0/extend-first-processor",title:"Your first data processor",description:"In this section, we will explain how to start a pipeline element service and install it using the StreamPipes UI.",source:"@site/versioned_docs/version-0.70.0/06_extend-first-processor.md",sourceDirName:".",slug:"/extend-first-processor",permalink:"/docs/0.70.0/extend-first-processor",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688363956,formattedLastUpdatedAt:"Jul 3, 2023",sidebarPosition:6,frontMatter:{id:"extend-first-processor",title:"Your first data processor",sidebar_label:"Your first data processor",original_id:"extend-first-processor"},sidebar:"documentation",previous:{title:"Maven Archetypes",permalink:"/docs/0.70.0/extend-archetypes"},next:{title:"Tutorial: Data Sources",permalink:"/docs/0.70.0/extend-tutorial-data-sources"}},p={},u=[{value:"Start Processor",id:"start-processor",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we will explain how to start a pipeline element service and install it using the StreamPipes UI."),(0,i.kt)("p",null,"Open the class ",(0,i.kt)("em",{parentName:"p"},"ExampleDataProcessor")," and edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"onEvent")," method to print the incoming event, log it to the console and send it to the next component without changing it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void onEvent(Event event, SpOutputCollector collector) {\n    // Print the incoming event on the console\n    System.out.println(event);\n\n    // Hand the incoming event to the output collector without changing it.\n    collector.collect(event);\n}\n")),(0,i.kt)("h2",{id:"start-processor"},"Start Processor"),(0,i.kt)("p",null,"Starting from StreamPipes 0.69.0, the IP address of an extensions service (processor, adapter or sink) will be auto-discovered upon start.\nThe auto-discovery is done by the StreamPipes service discovery mechanism and should work for most setups.\nOnce you start an extensions service, you will see the chosen IP in printed in the console. Make sure that this IP does not point to localhost (127.0.0.1).\nIf you see such an IP or the extensions service complains that it cannot resolve the IP, you can manually set the IP address of the extensions service. You can do so by providing an ",(0,i.kt)("code",null,"SP_HOST")," environment variable."),(0,i.kt)("p",null,"To check if the service is up and running, open the browser on ",(0,i.kt)("em",{parentName:"p"},"'localhost:8090'")," (or the port defined in the service definition). The machine-readable description of the processor should be visible as shown below."),(0,i.kt)("img",{src:"/img/archetype/endpoint.png",width:"90%",alt:"Project Structure"}),(0,i.kt)("div",{class:"admonition error"},(0,i.kt)("div",{class:"admonition-title"},"Common Problems"),(0,i.kt)("p",null,"If the service description is not shown on 'localhost:8090', you might have to change the port address. This needs to be done in the configuration of your service, further explained in the configurations part of the developer guide.",(0,i.kt)("p",null,"If the service does not show up in the StreamPipes installation menu, click on 'MANAGE ENDPOINTS' and add 'http://",(0,i.kt)("span",null),"YOUR_IP_OR_DNS_NAME:8090'.\nUse the IP or DNS name you provided as the SP_HOST variable or the IP (if resolvable) found by the auto-discovery service printed in the console.\nAfter adding the endpoint, a new processor with the name ",(0,i.kt)("em",{parentName:"p"},"Example")," should show up."))),(0,i.kt)("p",null,"Now you can go to StreamPipes.\nYour new processor ",(0,i.kt)("em",{parentName:"p"},"'Example'"),' should now show up in the installation menu ("Install Pipeline Elements" in the left navigation bar).\nInstall it, then switch to the pipeline view and create a simple pipeline that makes use of your newly created processor.\nIn case you opened the StreamPipes installation for the first time, it should have been automatically installed during the setup process.'),(0,i.kt)("img",{src:"/img/archetype/example_pipeline.png",width:"80%",alt:"Project Structure"}),(0,i.kt)("p",null,"Start this pipeline.\nNow you should see logging messages in your console and, once you've created a visualization, you can also see the resulting events of your component in StreamPipes."),(0,i.kt)("p",null,"Congratulations, you have just created your first processor!\nFrom here on you can start experimenting and implement your own algorithms."))}m.isMDXComponent=!0}}]);