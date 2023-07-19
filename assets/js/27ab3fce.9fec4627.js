"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14494],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),i=["components"],a={id:"deploy-kubernetes",title:"Kubernetes Deployment",sidebar_label:"Kubernetes Deployment"},s=void 0,p={unversionedId:"deploy-kubernetes",id:"deploy-kubernetes",title:"Kubernetes Deployment",description:"Prerequisites",source:"@site/../docs/05_deploy-kubernetes.md",sourceDirName:".",slug:"/deploy-kubernetes",permalink:"/docs/next/deploy-kubernetes",draft:!1,tags:[],version:"current",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1689756131,formattedLastUpdatedAt:"Jul 19, 2023",sidebarPosition:5,frontMatter:{id:"deploy-kubernetes",title:"Kubernetes Deployment",sidebar_label:"Kubernetes Deployment"},sidebar:"documentation",previous:{title:"Docker Deployment",permalink:"/docs/next/deploy-docker"},next:{title:"Use SSL",permalink:"/docs/next/deploy-use-ssl"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Ingress",id:"ingress",level:2},{value:"Dynamic Volume Provisioning",id:"dynamic-volume-provisioning",level:2},{value:"Deleting the current helm chart deployment:",id:"deleting-the-current-helm-chart-deployment",level:2}],m={toc:c},d="wrapper";function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Requires Helm (",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"https://helm.sh/"),") and an actively running Kubernetes cluster."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"We provide helm chart options to get you going in the ",(0,l.kt)("inlineCode",{parentName:"p"},"installer/k8s"),"folder."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Starting")," the default helm chart option is as easy as simply running the following command from the root of this folder:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"NOTE"),": Starting might take a while since we also initially pull all Docker images from Dockerhub.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install streampipes ./\n")),(0,l.kt)("p",null,"After a while, all containers should successfully started, indicated by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Running")," status."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file contains several configuration options to customize your StreamPipes installation. See the file for all configuration options."),(0,l.kt)("h2",{id:"ingress"},"Ingress"),(0,l.kt)("p",null,"The helm chart provides several options to configure an Ingress or to define an Ingressroute that directly integrates with Traefik."),(0,l.kt)("h2",{id:"dynamic-volume-provisioning"},"Dynamic Volume Provisioning"),(0,l.kt)("p",null,"You can override the ",(0,l.kt)("inlineCode",{parentName:"p"},"storageClassName")," variable to configure StreamPipes for dynamic volume provisioning."),(0,l.kt)("h2",{id:"deleting-the-current-helm-chart-deployment"},"Deleting the current helm chart deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm uninstall streampipes\n")))}y.isMDXComponent=!0}}]);