"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82915],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},24405:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>N,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"deploy-environment-variables",title:"Environment Variables",sidebar_label:"Environment Variables"},p=void 0,d={unversionedId:"deploy-environment-variables",id:"version-0.95.1/deploy-environment-variables",title:"Environment Variables",description:"Introduction",source:"@site/versioned_docs/version-0.95.1/05_deploy-environment-variables.md",sourceDirName:".",slug:"/deploy-environment-variables",permalink:"/docs/deploy-environment-variables",draft:!1,tags:[],version:"0.95.1",lastUpdatedBy:"Dominik Riemer",lastUpdatedAt:1720678410,formattedLastUpdatedAt:"Jul 11, 2024",sidebarPosition:5,frontMatter:{id:"deploy-environment-variables",title:"Environment Variables",sidebar_label:"Environment Variables"},sidebar:"documentation",previous:{title:"Security",permalink:"/docs/deploy-security"},next:{title:"Development Setup",permalink:"/docs/extend-setup"}},m={},s=[{value:"Introduction",id:"introduction",level:2},{value:"StreamPipes Core Service",id:"streampipes-core-service",level:2},{value:"Internal",id:"internal",level:3},{value:"Third-party services",id:"third-party-services",level:3},{value:"StreamPipes Extensions Service",id:"streampipes-extensions-service",level:2},{value:"Internal",id:"internal-1",level:3},{value:"Third-party services",id:"third-party-services-1",level:3},{value:"Recommended variables",id:"recommended-variables",level:2},{value:"Auto-generation of variables in K8s setups",id:"auto-generation-of-variables-in-k8s-setups",level:2}],u={toc:s},k="wrapper";function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(k,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"A StreamPipes installation can be configured in many ways by providing environment variables.\nThe following lists describe available environment variables along with a description."),(0,l.kt)("h2",{id:"streampipes-core-service"},"StreamPipes Core Service"),(0,l.kt)("h3",{id:"internal"},"Internal"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_DEBUG"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Should only be set for local development to reroute traffic to localhost")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_INITIAL_ADMIN_EMAIL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:admin@streampipes.apache.org"},"admin@streampipes.apache.org")),(0,l.kt)("td",{parentName:"tr",align:null},"Installation-time variable for defining the default user name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_INITIAL_ADMIN_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null},"Installation-time variable for defining the default user password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_INITIAL_SERVICE_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"sp-service-client"),(0,l.kt)("td",{parentName:"tr",align:null},"Installation-time variable for defining the initial service user (must be same to the configured user in the extension service)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_INITIAL_SERVICE_USER_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"my-apache-streampipes-secret-key-change-me"),(0,l.kt)("td",{parentName:"tr",align:null},"Installation-time variable for defining the initial service secret (minimum 35 chars)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_JWT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty for Docker, Auto-generated for K8s"),(0,l.kt)("td",{parentName:"tr",align:null},"JWT secret, base64-encoded, minimum 256 bits")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_JWT_SIGNING_MODE"),(0,l.kt)("td",{parentName:"tr",align:null},"HMAC"),(0,l.kt)("td",{parentName:"tr",align:null},"HMAC or RSA, RSA can be used to authenticate Core-Extensions communication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_JWT_PRIVATE_KEY_LOC"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty"),(0,l.kt)("td",{parentName:"tr",align:null},"Required id SP_JWT_SIGNING_MODE=RSA, path to the private key, can be generated in the UI (Settings->Security->Generate Key Pair)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_ENCRYPTION_PASSCODE"),(0,l.kt)("td",{parentName:"tr",align:null},"eGgemyGBoILAu3xckolp for Docker, Auto-generated for K8s"),(0,l.kt)("td",{parentName:"tr",align:null},"Encryption passcode for ",(0,l.kt)("inlineCode",{parentName:"td"},"SecretStaticProperties"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_PRIORITIZED_PROTOCOL"),(0,l.kt)("td",{parentName:"tr",align:null},"kafka"),(0,l.kt)("td",{parentName:"tr",align:null},"Messaging layer for data exchange between extensions")))),(0,l.kt)("h3",{id:"third-party-services"},"Third-party services"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_COUCHDB_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"couchdb"),(0,l.kt)("td",{parentName:"tr",align:null},"The hostname or IP of the CouchDB database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_COUCHDB_PROTOCOL"),(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"The protocol (http or https) of the CouchDB database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_COUCHDB_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"5984"),(0,l.kt)("td",{parentName:"tr",align:null},"The port of the CouchDB database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_COUCHDB_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null},"The user of the CouchDB database (must have permissions to add databases)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_COUCHDB_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null},"The password of the CouchDB user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"influxdb"),(0,l.kt)("td",{parentName:"tr",align:null},"The hostname of the timeseries storage (currently InfluxDB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"8086"),(0,l.kt)("td",{parentName:"tr",align:null},"The port of the timeseries storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_PROTOCOL"),(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"The protocol of the timeseries storage (http or https)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_BUCKET"),(0,l.kt)("td",{parentName:"tr",align:null},"sp"),(0,l.kt)("td",{parentName:"tr",align:null},"The InfluxDB storage bucket name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_ORG"),(0,l.kt)("td",{parentName:"tr",align:null},"sp"),(0,l.kt)("td",{parentName:"tr",align:null},"The InfluxDB storage org")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_TOKEN"),(0,l.kt)("td",{parentName:"tr",align:null},"sp-admin"),(0,l.kt)("td",{parentName:"tr",align:null},"The InfluxDB storage token")))),(0,l.kt)("p",null,"The InfluxDB itself can be configured by providing the variables ",(0,l.kt)("inlineCode",{parentName:"p"},"DOCKER_INFLUXDB_INIT_PASSWORD")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"DOCKER_INFLUXDB_INIT_ADMIN_TOKEN"),". See the ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," file for details."),(0,l.kt)("h2",{id:"streampipes-extensions-service"},"StreamPipes Extensions Service"),(0,l.kt)("h3",{id:"internal-1"},"Internal"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_CLIENT_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty"),(0,l.kt)("td",{parentName:"tr",align:null},"Service account for communication with Core")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_CLIENT_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty"),(0,l.kt)("td",{parentName:"tr",align:null},"Service secret for communication with Core")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_EXT_AUTH_MODE"),(0,l.kt)("td",{parentName:"tr",align:null},"sp-service-client"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to AUTH: all interfaces are only accessible with authentication (requires SP_JET_PRIVATE_KEY_LOC in Core)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_JWT_PUBLIC_KEY_LOC"),(0,l.kt)("td",{parentName:"tr",align:null},"my-apache-streampipes-secret-key-change-me"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the public key of the corresponding SP_JWT_PRIVATE_KEY defined in Core")))),(0,l.kt)("h3",{id:"third-party-services-1"},"Third-party services"),(0,l.kt)("p",null,"The following variables are only required for extensions which require access to the internal time-series storage (the ",(0,l.kt)("inlineCode",{parentName:"p"},"Data Lake Sink"),")."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Env Variable Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"influxdb"),(0,l.kt)("td",{parentName:"tr",align:null},"The hostname of the timeseries storage (currently InfluxDB)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"8086"),(0,l.kt)("td",{parentName:"tr",align:null},"The port of the timeseries storage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_PROTOCOL"),(0,l.kt)("td",{parentName:"tr",align:null},"http"),(0,l.kt)("td",{parentName:"tr",align:null},"The protocol of the timeseries storage (http or https)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_BUCKET"),(0,l.kt)("td",{parentName:"tr",align:null},"sp"),(0,l.kt)("td",{parentName:"tr",align:null},"The InfluxDB storage bucket name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_ORG"),(0,l.kt)("td",{parentName:"tr",align:null},"sp"),(0,l.kt)("td",{parentName:"tr",align:null},"The InfluxDB storage org")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SP_TS_STORAGE_TOKEN"),(0,l.kt)("td",{parentName:"tr",align:null},"sp-admin"),(0,l.kt)("td",{parentName:"tr",align:null},"The InfluxDB storage token")))),(0,l.kt)("h2",{id:"recommended-variables"},"Recommended variables"),(0,l.kt)("p",null,"For a standard deployment, it is recommended to customize the following variables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Initiales Admin-Passwort (SP_INITIAL_ADMIN_PASSWORD, Core)"),(0,l.kt)("li",{parentName:"ul"},"Initiales Client Secret (SP_INITIAL_SERVICE_USER_SECRET, Core)"),(0,l.kt)("li",{parentName:"ul"},"Client Secret Extensions (SP_CLIENT_USER, Extensions)"),(0,l.kt)("li",{parentName:"ul"},"Encryption Passcode (SP_ENCRYPTION_PASSCODE, Core)"),(0,l.kt)("li",{parentName:"ul"},"CouchDB-Password (SP_COUCHDB_PASSWORD, Core + Extensions + CouchDB)"),(0,l.kt)("li",{parentName:"ul"},"InfluxDB Storage Password (DOCKER_INFLUXDB_INIT_PASSWORD, InfluxDB)"),(0,l.kt)("li",{parentName:"ul"},"InfluxDB Storage Token (SP_TS_STORAGE_TOKEN (Core, Extensions)"),(0,l.kt)("li",{parentName:"ul"},"DOCKER_INFLUXDB_INIT_ADMIN_TOKEN (InfluxDB service)")),(0,l.kt)("h2",{id:"auto-generation-of-variables-in-k8s-setups"},"Auto-generation of variables in K8s setups"),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/docs/deploy-kubernetes"},"Kubernetes Guide")," for an overview of auto-generated variables."))}N.isMDXComponent=!0}}]);