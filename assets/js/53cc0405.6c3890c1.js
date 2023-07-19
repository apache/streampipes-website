"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36913],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),p=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return i.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},g=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),g=n,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return t?i.createElement(d,o(o({ref:r},l),{},{components:t})):i.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=g;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},85967:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var i=t(87462),n=t(63366),a=(t(67294),t(3905)),o=["components"],c={id:"org.apache.streampipes.processor.imageclassification.jvm.image-enricher",title:"Image Enricher",sidebar_label:"Image Enricher",original_id:"org.apache.streampipes.processor.imageclassification.jvm.image-enricher"},s=void 0,p={unversionedId:"pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher",id:"version-0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher",title:"Image Enricher",description:"\x3c!--",source:"@site/versioned_docs/version-0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher.md",sourceDirName:"pe",slug:"/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-enricher",draft:!1,tags:[],version:"0.70.0",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1688361723,formattedLastUpdatedAt:"Jul 3, 2023",frontMatter:{id:"org.apache.streampipes.processor.imageclassification.jvm.image-enricher",title:"Image Enricher",sidebar_label:"Image Enricher",original_id:"org.apache.streampipes.processor.imageclassification.jvm.image-enricher"},sidebar:"documentation",previous:{title:"Image Cropper",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processor.imageclassification.jvm.image-cropper"},next:{title:"Language Detection",permalink:"/docs/0.70.0/pe/org.apache.streampipes.processors.textmining.flink.languagedetection"}},l={},m=[{value:"Description",id:"description",level:2},{value:"Required input",id:"required-input",level:2},{value:"Output",id:"output",level:2}],u={toc:m},g="wrapper";function d(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)(g,(0,i.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/pipeline-elements/org.apache.streampipes.processor.imageclassification.jvm.image-enricher/icon.png",width:"150px;",class:"pe-image-documentation"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Image Enrichment: Enriches an  + image with  + given bounding box coordinates"),(0,a.kt)("h2",{id:"required-input"},"Required input"),(0,a.kt)("p",null,"An image and an array with bounding boxes, an array with scores and an array with labels.\nA box consists of the x and y coordinates in the image as well as the height and width, and the classindex with score"),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,"A new event containing the image with bounding boxes rendered according to the boxes of the input event"))}d.isMDXComponent=!0}}]);